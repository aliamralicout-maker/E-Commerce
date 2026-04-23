import { FeaturesSection } from '@/ServicesUi/ServicesUi';
import Link from 'next/link';
import React from 'react'
import { FaAppleAlt, FaCarrot, FaLemon } from 'react-icons/fa'
import { FaArrowLeftLong, FaCartShopping } from 'react-icons/fa6';
import { GiTreeBranch } from "react-icons/gi";
import { TiHome } from "react-icons/ti";

export default function notFound() {
    return (
        <>
            <div className="min-h-screen bg-[#fafbfc] flex items-center justify-center px-4 py-16 relative overflow-hidden">


                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-[10%] left-[5%] text-green-200 text-4xl animate-[float_6s_ease-in-out_infinite]">
                        <FaAppleAlt />
                    </div>
                    <div className="absolute top-[30%] left-[20%] text-green-200 text-3xl animate-[float_6s_ease-in-out_infinite]"><FaAppleAlt /></div>
                    <div className="absolute top-[20%] right-[10%] text-green-200 text-3xl animate-[float_8s_ease-in-out_infinite_1s]"><FaCarrot /></div>
                    <div className="absolute top-[50%] right-[30%] text-green-200 text-2xl animate-[float_8s_ease-in-out_infinite_1s]"><FaCarrot /></div>
                    <div className="absolute bottom-[25%] left-[8%] text-green-200 text-3xl animate-[float_7s_ease-in-out_infinite_0.5s]"><FaLemon /></div>
                    <div className="absolute bottom-[15%] right-[15%] text-green-200 text-4xl animate-[float_9s_ease-in-out_infinite_2s]"><GiTreeBranch /></div>

                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-green-100/40 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-green-100/30 to-transparent rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-xl w-full">


                    <div className="flex justify-center mb-10">
                        <div className="relative">
                            <div className="absolute inset-0 w-64 h-52 sm:w-72 sm:h-60 bg-green-100 rounded-[32px] blur-2xl"></div>

                            <div className="relative w-64 h-52 sm:w-72 sm:h-60">
                                <div className="absolute inset-x-0 top-4 mx-auto w-52 h-40 sm:w-60 sm:h-44 bg-white rounded-3xl shadow-xl border flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 via-transparent to-green-100/40"></div>


                                    <span className="text-5xl"><FaCartShopping size={'5rem'} className='text-green-300' /></span>
                                </div>


                                <div className="absolute -top-2 -right-2">
                                    <div className="relative">
                                        <div className="absolute -inset-2 rounded-full bg-white shadow-lg"></div>
                                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                                            <span className="text-xl sm:text-2xl font-black text-white">404</span>
                                        </div>
                                    </div>
                                </div>


                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-4">
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                    <div className="w-8 h-4 border-b-[3px] border-green-400 rounded-b-full"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="text-center mb-10">
                        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 font-bold">
                            Oops! Nothing Here
                        </h1>
                        <p className="text-gray-500 text-lg">
                            Looks like this page went out of stock! Don't worry, there's plenty more fresh content to explore.
                        </p>
                    </div>


                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Link href="/" className="w-full sm:w-auto bg-green-600 text-white py-4 px-8 rounded-2xl font-bold text-lg text-center flex justify-center items-center">
                            <div className='me-2'><TiHome size={'1.5rem'} /></div>
                            <span>Go to Homepage</span>
                        </Link>

                        <button className="w-full sm:w-auto bg-white text-gray-700 py-4 px-8 rounded-2xl font-bold text-lg border flex justify-center items-center">
                            <div className='me-2'><FaArrowLeftLong /></div>
                            <span>Go Back</span>
                        </button>
                    </div>


                    <div className="bg-white rounded-3xl border  shadow p-6">
                        <p className="text-center text-sm text-gray-400 mb-4">Popular Destinations</p>

                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <Link href="/products" className="px-5 py-2.5 rounded-xl bg-green-100 hover:bg-green-200 text-green-700  text-sm">All Products</Link>
                            <Link href="/categories" className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition text-sm">Categories</Link>
                            <Link href="/deals" className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition text-sm">Today's Deals</Link>
                            <Link href="/contact" className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition text-sm">Contact Us</Link>
                        </div>
                    </div>

                </div>
            </div>
            <FeaturesSection />
        </>
    )
}
