'use client';

import { useState } from 'react';

import { FaPlus, FaMinus, FaTrash, FaUser, FaBoxOpen, FaArrowRight, FaShoppingCart } from "react-icons/fa";
import Link from 'next/link';
import { FeaturesSection } from '@/ServicesUi/ServicesUi';
import { CartResponse } from '@/interfaces/cart.interface';
import { clearAllCart, deleteCart } from '@/actions/cart.action';
import { useCart } from '@/context/CartContext';
import Swal from "sweetalert2";

type Props = {
    data: CartResponse;
};


export default function CartUi({ data }: Props) {


    const { numOfCartItem, upDateNumOfCartItems } = useCart()


    const [cartItems, setCartItems] = useState(data.data?.products || []);
    const [loadingId, setLoadingId] = useState<string | null>(null);



    const Subtotal = data.data?.totalCartPrice;

    const [counts, setCounts] = useState<{ [key: string]: number }>(() => {
        const initial: any = {};
        cartItems?.forEach((item) => {
            initial[item._id] = item.count;
        });
        return initial;
    });

    const delItemToCart = async (id: string) => {
        setLoadingId(id);

        const res = await deleteCart(id);

        if (res.status) {
            const updated = cartItems.filter(
                (item) => item.product._id !== id
            );

            setCartItems(updated);
            upDateNumOfCartItems(updated.length);
        } else {
            console.log("Error:", res.error);
        }

        setLoadingId(null);
    };

    async function clearAllItems() {
        const res = await clearAllCart();

        if (!res.status) {
            console.log('error filed clear items');
            return;
        }
        else {
            console.log('success clear items');
        }
        setCartItems([]);
        upDateNumOfCartItems(0);
    }


    const handleClearCart = () => {
        Swal.fire({
            html: `
        <div class="text-center py-2">
        <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-linear-to-br from-red-50 to-orange-50 flex items-center justify-center">
            <svg class="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
        </div>

        <h3 class="text-2xl font-bold text-gray-900 mb-2">
            Clear Your Cart?
        </h3>

        <p class="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
            All items will be removed from your cart. This action cannot be undone.
        </p>
        </div>
    `,
            showCancelButton: true,
            confirmButtonText: "Yes, Clear All",
            cancelButtonText: "Keep Shopping",

            customClass: {
                popup:
                    "rounded-2xl shadow-2xl border-0 p-0 animate__animated animate__fadeIn animate__faster",
                confirmButton:
                    "bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg",
                cancelButton:
                    "bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl",
                actions: "flex-row-reverse gap-3 px-6 pb-6",
            },

            buttonsStyling: false,

            position: "center",
            backdrop: true,

            showClass: {
                popup: "animate__animated animate__fadeIn animate__faster",
            },
            hideClass: {
                popup: "animate__animated animate__fadeOut animate__faster",
            },
        }).then(async (result) => {
            if (result.isConfirmed) {
                await clearAllItems();
            }
        });
    };


    const handleRemoveItem = (itemName: string, productId: string) => {
        Swal.fire({
            html: `
        <div class="text-center py-2">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
            <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-2">
            Remove Item?
            </h3>

            <p class="text-gray-500 text-sm leading-relaxed">
            Remove <span class="font-semibold text-gray-700">${itemName}</span> from your cart?
            </p>
        </div>
        `,
            showCancelButton: true,
            confirmButtonText: "Remove",
            cancelButtonText: "Cancel",

            customClass: {
                popup: "rounded-2xl shadow-2xl border-0 p-0",
                confirmButton: "bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl",
                cancelButton: "bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl",
                actions: "flex-row-reverse gap-3 px-6 pb-6"
            },

            buttonsStyling: false,
            position: "center",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await delItemToCart(productId);
            }
        });
    };


    return (
        <>
            <div className="container m-auto">
                {/* nav */}
                <nav className="flex items-center gap-2 text-sm text-gray-500 py-4">
                    <Link href={'/'} className="hover:text-primary-600 transition">
                        Home
                    </Link>

                    <span>/</span>

                    <span className="text-gray-900 font-medium">
                        Shopping Cart
                    </span>
                </nav>
                {/* title */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                            <span className="bg-green-600 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                                <FaShoppingCart />
                            </span>
                            Shopping Cart
                        </h1>

                        <p className="text-gray-500 mt-2">
                            You have{' '}
                            <span className="font-semibold text-green--600">
                                {numOfCartItem} item
                            </span>{' '}
                            in your cart
                        </p>
                    </div>
                </div>



                {cartItems.length > 0 ?
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-14">
                        <div className='lg:col-span-2 space-y-5'>
                            {cartItems.map((item) => (

                                <div key={item._id} className="lg:col-span-2">
                                    <div className="space-y-4">
                                        <div className="bg-white rounded-2xl shadow border border-gray-100 p-4 sm:p-5">
                                            <div className="flex gap-4 sm:gap-6">
                                                <Link href="/products/1" className="relative shrink-0 group">
                                                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-gray-50 p-3 border border-gray-100 overflow-hidden">
                                                        <img
                                                            src={item.product?.imageCover}
                                                            alt={item.product?.title}
                                                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                                        />
                                                    </div>
                                                </Link>

                                                <div className="flex-1 min-w-0 flex flex-col">
                                                    <div className="mb-3">
                                                        <Link href="/products/1" className="group/title">
                                                            <h3 className="font-semibold text-gray-900 group-hover/title:text-primary-600 transition-colors leading-relaxed text-base sm:text-lg">
                                                                {item.product?.title}
                                                            </h3>
                                                        </Link>

                                                        <div className="flex items-center gap-2 mt-2">
                                                            <span className="inline-block px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
                                                                {item.product?.slug}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="mb-4">
                                                        <span className="text-primary-600 font-bold text-lg">
                                                            {item?.price} EGP
                                                        </span>
                                                    </div>

                                                    <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                                                        <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                                                            <button
                                                                // disabled={counts === 1}
                                                                onClick={() =>
                                                                    setCounts((prev) => ({
                                                                        ...prev,
                                                                        [item._id]: Math.max(1, prev[item._id] - 1),
                                                                    }))
                                                                }
                                                                className="h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 disabled:opacity-40"
                                                            >
                                                                <FaMinus className="text-xs" />
                                                            </button>

                                                            <span className="w-12 text-center font-bold text-gray-900">
                                                                {counts[item._id]}
                                                            </span>

                                                            <button
                                                                onClick={() =>
                                                                    setCounts((prev) => ({
                                                                        ...prev,
                                                                        [item._id]: prev[item._id] + 1,
                                                                    }))
                                                                }
                                                                className="h-8 w-8 rounded-lg bg-green-600 shadow-sm flex items-center justify-center text-white hover:bg-green-700"
                                                            >
                                                                <FaPlus className="text-xs" />
                                                            </button>
                                                        </div>

                                                        <div className="flex items-center gap-4">
                                                            <div className="text-right">
                                                                <p className="text-xs text-gray-400 mb-0.5">Total</p>
                                                                <p className="text-xl font-bold text-gray-900">
                                                                    {item?.price * counts[item._id]} <span className="text-sm font-medium text-gray-400">EGP</span>
                                                                </p>
                                                            </div>

                                                            <button
                                                                onClick={() => handleRemoveItem(item.product.title, item.product._id)}
                                                                disabled={loadingId === item.product._id}
                                                                className="cursor-pointer h-10 w-10 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center disabled:opacity-50"
                                                            >
                                                                {loadingId === item.product._id ? (
                                                                    <span className="animate-spin">⏳</span>
                                                                ) : (
                                                                    <FaTrash className="text-sm" />
                                                                )}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            ))}
                            <div className="mt-6 pt-6 px-2 border-t border-gray-200 flex items-center justify-between">
                                <Link href="/" className="text-primary-600 font-medium text-sm flex items-center gap-2">
                                    <span>←</span> Continue Shopping
                                </Link>

                                <button onClick={handleClearCart} className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 cursor-pointer">
                                    <FaTrash className="text-xs" />
                                    <span>Clear all items</span>
                                </button>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        {cartItems.length > 0 && <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-4">
                                <div className="bg-gray-900 p-5">
                                    <h2 className="text-white font-bold text-lg">Order Summary</h2>
                                </div>

                                <div className="p-5 space-y-4">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal ({Subtotal} items)</span>
                                        <span className="font-semibold">{Subtotal} EGP</span>
                                    </div>

                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping</span>
                                        <span className="text-green-600 font-medium">Calculated at checkout</span>
                                    </div>

                                    <hr className="border-gray-200" />

                                    <div className="flex justify-between text-lg font-bold">
                                        <span>Estimated Total</span>
                                        <span className="text-primary-600">{Subtotal} EGP</span>
                                    </div>

                                    <div className="pt-4 space-y-3">
                                        <Link
                                            href="/login?redirect=/cart"
                                            className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white py-3.5 rounded-xl font-semibold hover:bg-primary-700"
                                        >
                                            <FaUser /> Login to Checkout
                                        </Link>

                                        <p className="text-xs text-gray-400 text-center">
                                            Don't have an account? <Link href="/signup" className="text-primary-600 hover:underline">Sign up</Link>
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-gray-100 space-y-2">
                                        <p className="text-xs text-gray-500">✓ Your cart items will be saved</p>
                                        <p className="text-xs text-gray-500">✓ Track your orders easily</p>
                                        <p className="text-xs text-gray-500">✓ Access exclusive member deals</p>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                    :
                    <div className="min-h-[60vh] flex items-center justify-center px-4">
                        <div className="max-w-md text-center">
                            <div className="relative mb-8">
                                <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                                    <FaBoxOpen className="text-5xl text-gray-300" />
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                Your cart is empty
                            </h2>

                            <p className="text-gray-500 mb-8 leading-relaxed">
                                Looks like you haven't added anything to your cart yet.
                                <br />
                                Start exploring our products!
                            </p>

                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 bg-green-600 text-white py-3.5 px-8 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg active:scale-[0.98]"
                            >
                                Start Shopping
                                <FaArrowRight className="text-sm" />
                            </Link>
                        </div>

                    </div>
                }









            </div>
            <FeaturesSection />
        </>
    )
};





