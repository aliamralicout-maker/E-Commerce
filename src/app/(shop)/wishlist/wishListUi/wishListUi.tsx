'use client';

import { AddToCart, GetCart } from '@/actions/cart.action';
import { removeItemToWishlist } from '@/actions/wishlist.action';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { wishList } from '@/interfaces/wishList.interface';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaCheck, FaCheckCircle, FaHeart, FaShoppingCart, FaTimesCircle, FaTrash } from "react-icons/fa";
import { ImSpinner2 } from 'react-icons/im';
import { toast } from 'sonner';

interface Params {
    data: wishList;
}

export default function WishListUi({ data }: Params) {
    const { upDateNumOfCartItems } = useCart();
    const { updateNumOfWishlistItems, numOfWishlistItems } = useWishlist();

    const [loadingId, setLoadingId] = useState<string | null>(null);
    const [wishlist, setWishlist] = useState(data.data || []);
    const [loadingWishlist, setLoadingWishlist] = useState<string | null>(null);
    const [cart, setCart] = useState<string[]>([]);



    const delItem = async (id: string) => {
        setLoadingId(id);

        const res = await removeItemToWishlist(id);

        if (res.status) {
            setWishlist((prev) => {
                const updated = prev.filter((item) => item._id !== id);
                // updateNumOfWishlistItems(updated.length);
                return updated;
            });
        }

        setLoadingId(null);
    };

    async function addProductToCart(productId: string) {
        setLoadingWishlist(productId);

        try {
            const res = await AddToCart(productId);

            if (res.status) {

                setCart(prev => [...prev, productId]);
                await getAllProductInCart();

                toast(
                    <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-500 text-xl" />
                        <span className="text-sm font-medium">
                            Product added to cart successfully
                        </span>
                    </div>,
                    {
                        duration: 3000,
                        icon: null,
                        style: {
                            background: '#ECFDF5',
                            color: '#065F46',
                            border: '1px solid #A7F3D0',
                            borderRadius: '10px',
                            padding: '12px 16px'
                        }
                    }
                );

                upDateNumOfCartItems(res.numOfCartItems);
            } else {
                toast.error(
                    <div className="flex items-center gap-3">
                        <FaTimesCircle className="text-red-500 text-xl" />
                        <span className="text-sm font-medium">
                            {res.error?.message || 'Something went wrong!'}
                        </span>
                    </div>,
                    {
                        icon: null,
                        style: {
                            background: '#FEF2F2',
                            color: '#991B1B',
                            border: '1px solid #FECACA',
                            borderRadius: '10px',
                            padding: '12px 16px'
                        }
                    }
                );
            }

        } catch (error) {
            toast.error(
                <div className="flex items-center gap-3">
                    <FaTimesCircle className="text-red-500 text-xl" />
                    <span className="text-sm font-medium">
                        Network error occurred
                    </span>
                </div>
            );
        } finally {
            setLoadingWishlist(null);
        }
    }

    const getAllProductInCart = async () => {
        const res = await GetCart();

        if (res.status) {
            const ids = res.data.products.map(
                (p: any) => p.product?._id || p._id
            );

            setCart(ids);
        } else {
            console.log('error');

        }
    }


    useEffect(() => {
        getAllProductInCart();
    }, []);

    useEffect(() => {
        updateNumOfWishlistItems(wishlist.length);
    }, [wishlist]);



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
                    <div className='hidden  md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500'>
                        <div className="col-span-6">Product</div>
                        <div className="col-span-2 text-center">Price</div>
                        <div className="col-span-2 text-center">Status</div>
                        <div className="col-span-2 text-center">Actions</div>
                    </div>

                    {/* Rows */}
                    <div className="divide-y">

                        {wishlist.map((item) => {

                            const isInCart = cart?.includes(item._id);

                            return (
                                <div
                                    key={item._id}
                                    className="flex flex-col md:flex-row md:items-center px-6 py-5 hover:bg-gray-50/50"
                                >

                                    {/* Product */}
                                    <div className="md:w-[50%] flex items-center gap-4">
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
                                        <div className="w-[15%] text-center font-semibold flex mt-4">
                                            <span>{item.price} EGP</span>
                                        </div>
                                    ) : (
                                        <div className="md:w-[15%] md:text-center font-semibold flex flex-col md:items-center">
                                            <div className='flex pt-4 items-center'>
                                                <span className="text-green-600">
                                                    {item.priceAfterDiscount} EGP
                                                </span>

                                                <span className="line-through text-gray-400 text-xs ms-2">
                                                    {item.price} EGP
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Status */}
                                    <div className="md:w-[15%] flex md:justify-center pt-4">
                                        <span className="px-3 py-1 text-xs bg-green-50 text-green-700 rounded-full">
                                            In Stock
                                        </span>
                                    </div>

                                    {/* Actions */}
                                    <div className="md:w-[20%] flex md:justify-center gap-2 mt-4">

                                        <button
                                            onClick={() => addProductToCart(item._id)}
                                            disabled={loadingWishlist === item._id || isInCart}
                                            className="w-[90%] flex items-center justify-center gap-2 px-3 bg-green-700 hover:bg-green-800 transition text-white rounded-lg text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            {loadingWishlist === item._id ? (
                                                <>
                                                    <ImSpinner2 className="animate-spin" />
                                                    <span>Loading...</span>
                                                </>
                                            ) : isInCart ? (
                                                <>
                                                    <FaCheck />
                                                    <span>Added</span>
                                                </>
                                            ) : (
                                                <>
                                                    <FaShoppingCart />
                                                    <span>Add To Cart</span>
                                                </>
                                            )}
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
                            );
                        })}

                    </div>
                </div>

            </div>

        </div>
    );
}


