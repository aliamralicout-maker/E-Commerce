import { FeaturesSection } from '@/ServicesUi/ServicesUi'
import Link from 'next/link'
import React from 'react'
import { BsClockFill } from 'react-icons/bs'
import { CiMoneyBill } from 'react-icons/ci'
import { FaBoxOpen } from 'react-icons/fa'
import { FaBagShopping } from 'react-icons/fa6'

export default function orders() {


    const x = 1;


    return (
        <>

            {x === 1 ?
                <>
                    <div className="container mx-auto px-4 py-8">

                        {/* Header */}
                        <div className="mb-8">

                            {/* Breadcrumb */}
                            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                                <a href="/" className="hover:text-green-600 transition">Home</a>
                                <span className="text-gray-300">/</span>
                                <span className="text-gray-900 font-medium">My Orders</span>
                            </nav>

                            {/* Title Section */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                                <div className="flex items-center gap-4">

                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/25">
                                        <svg className="text-2xl text-white w-6 h-6" viewBox="0 0 448 512">
                                            <path fill="currentColor" d="M369.4 128l-34.3-48-222.1 0-34.3 48 290.7 0zM0 148.5c0-13.3 4.2-26.3 11.9-37.2L60.9 42.8C72.9 26 92.3 16 112.9 16l222.1 0c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 148.5z" />
                                        </svg>
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                            My Orders
                                        </h1>
                                        <p className="text-gray-500 text-sm mt-0.5">
                                            Track and manage your 1 order
                                        </p>
                                    </div>

                                </div>

                                {/* Button */}
                                <a
                                    href="/"
                                    className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-green-50 transition-all text-sm"
                                >
                                    Continue Shopping
                                </a>

                            </div>
                        </div>

                        {/* Orders List */}
                        <div className="space-y-4">

                            {/* مثال Order Card */}
                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all overflow-hidden">

                                <div className="p-5 sm:p-6">

                                    <div className="flex gap-5">

                                        {/* Image */}
                                        <div className="relative shrink-0">

                                            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-linear-to-br from-gray-50 to-white border border-gray-100 p-2.5">
                                                <img
                                                    src="https://ecommerce.routemisr.com/Route-Academy-products/1680403156501-cover.jpeg"
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>

                                            <div className="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
                                                +3
                                            </div>

                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">

                                            {/* Status + ID */}
                                            <div className="flex items-start justify-between gap-3 mb-3">

                                                <div>
                                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 rounded-lg mb-2">
                                                        <span className="text-xs font-semibold text-amber-600 flex items-center">
                                                            <BsClockFill className='me-2' />
                                                            <span>Processing</span>
                                                        </span>
                                                    </div>

                                                    <h3 className="font-bold text-gray-900 text-lg">
                                                        Order #3557
                                                    </h3>
                                                </div>

                                                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100">
                                                    <CiMoneyBill />
                                                </div>

                                            </div>

                                            {/* Meta */}
                                            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">

                                                <span>May 5, 2026</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                <span>4 items</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                <span>wfawf</span>

                                            </div>

                                            {/* Footer */}
                                            <div className="flex items-center justify-between">

                                                <div className="text-xl font-bold text-gray-900">
                                                    1,146 <span className="text-sm text-gray-400">EGP</span>
                                                </div>

                                                <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm font-semibold">
                                                    Details
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </>
                :
                <div className="min-h-[60vh] flex items-center justify-center px-4">
                    <div className="max-w-sm text-center">


                        <div className="w-24 h-24 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                            <span className="text-3xl text-gray-400"><FaBoxOpen /></span>
                        </div>


                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            No orders yet
                        </h2>


                        <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                            When you place orders, they'll appear here<br />
                            so you can track them.
                        </p>


                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3.5 px-8 rounded-xl font-semibold transition-all shadow-lg shadow-green-600/20 w-full sm:w-auto"
                        >
                            <FaBagShopping /> Start Shopping
                        </Link>

                    </div>
                </div>

            }

        </>
    )
}
