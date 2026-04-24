'use client';

import { removeItemToWishlist } from '@/actions/wishlist.action';
import { useWishlist } from '@/context/WishlistContext';
import { wishList } from '@/interfaces/wishList.interface';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";

interface Params {
    data: wishList;
}

export default function WishListUi({ data }: Params) {

    const { updateNumOfWishlistItems, numOfWishlistItems } = useWishlist();

    const [loadingId, setLoadingId] = useState<string | null>(null);
    const [wishlist, setWishlist] = useState(data.data || []);

    const delItem = async (id: string) => {
        setLoadingId(id);

        const res = await removeItemToWishlist(id);

        if (res.status) {
            setWishlist((prev) => {
                const updated = prev.filter((item) => item._id !== id);
                updateNumOfWishlistItems(updated.length);
                return updated;
            });
        }

        setLoadingId(null);
    };






    return (
        <div className="min-h-screen bg-gray-50/50">

            {/* Header */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                            <FaHeart className="text-red-500 text-xl" />
                        </div>

                        <div>
                            <h1 className="text-2xl font-bold">My Wishlist</h1>
                            <p className="text-gray-500 text-sm">
                                {numOfWishlistItems} items saved
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="container mx-auto px-4 py-8">

                <div className="bg-white rounded-2xl border overflow-hidden">

                    {/* Header */}
                    <div className=' grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500'>
                        <div className="col-span-6">Product</div>
                        <div className="col-span-2 text-center">Price</div>
                        <div className="col-span-2 text-center">Status</div>
                        <div className="col-span-2 text-center">Actions</div>
                    </div>

                    {/* Rows */}
                    <div className="divide-y">

                        {wishlist.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center px-6 py-5 hover:bg-gray-50/50"
                            >

                                {/* Product */}
                                <div className="w-[50%] flex items-center gap-4">
                                    <img
                                        src={item.imageCover}
                                        className="w-20 h-20 object-contain border rounded-xl p-2 bg-gray-50"
                                    />

                                    <div>
                                        <Link href={`products/${item._id}`} className="font-medium line-clamp-2 cursor-pointer hover:text-green-400 transition">
                                            {item.title}
                                        </Link>
                                        <p className="text-sm text-gray-400">
                                            {item.category?.name}
                                        </p>
                                    </div>
                                </div>

                                {/* Price */}
                                {!item.priceAfterDiscount ? (
                                    <div className="w-[15%] text-center font-semibold">
                                        <span>{item.price} EGP</span>
                                    </div>
                                ) : (
                                    <div className="w-[15%] text-center font-semibold flex flex-col items-center">
                                        <span className="text-green-600">
                                            {item.priceAfterDiscount} EGP
                                        </span>

                                        <span className="line-through text-gray-400 text-xs">
                                            {item.price} EGP
                                        </span>
                                    </div>
                                )}
                                {/* Status */}
                                <div className="w-[15%] flex justify-center">
                                    <span className="px-3 py-1 text-xs bg-green-50 text-green-700 rounded-full">
                                        In Stock
                                    </span>
                                </div>

                                {/* Actions */}
                                <div className="w-[20%] flex justify-center gap-2">

                                    <button className="flex items-center gap-1 px-3  bg-green-700 hover:bg-green-800 transition cursor-pointer text-white rounded-lg text-sm">
                                        <FaShoppingCart />
                                    </button>

                                    <button
                                        onClick={() => delItem(item._id)}
                                        className="w-10 h-10 flex items-center justify-center border rounded-lg cursor-pointer text-gray-400 hover:text-red-500 hover:border-red-200 transition"
                                    >
                                        {loadingId === item._id ? (
                                            <span className="w-4 h-4 border-2 border-gray-300 border-t-red-500 rounded-full animate-spin"></span>
                                        ) : (
                                            <FaTrash />
                                        )}
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>
                </div>

            </div>

        </div>
    );
}


