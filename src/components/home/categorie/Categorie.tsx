import { getCategories } from '@/services/categories.services';
import { CategoryResponse } from '@/types/response.type';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'





export default async function Categorie() {


    const resCategorise: CategoryResponse = await getCategories();
    const dataCategori = resCategorise.data;

    // console.log(dataCategori);
    

    return (
        <div className='container m-auto px-4'>
            {/* 1 */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8">

                {/* shop by category */}
                <div className="flex items-center gap-3 my-8">
                    <div className="h-8 w-1.5 bg-gradient-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Shop By <span className="text-emerald-600">Category</span>
                    </h2>
                </div>

                {/*  View All Categories */}
                <Link
                    href="/categories"
                    className="text-emerald-600 self-end sm:self-auto hover:text-emerald-700 font-medium flex items-center cursor-pointer"
                >
                    View All Categories
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                    >
                        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                </Link>

            </div>








            {/* 2 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            { dataCategori?.map((item)=>(

                <div key={item._id} className='bg-blue-50 rounded-2xl border border-gray-300 hover:shadow-2xl transition-all duration-200'>
                    {/* Category Card */}
                    <Link
                        href={`/categories/${item._id}`}
                        className=" rounded-lg p-4 text-center  group cursor-pointer"
                    >
                        {/* صورة دائرية */}
                        <div className="h-20 w-20 overflow-hidden rounded-full flex items-center justify-center mx-auto mb-3 ">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={180}
                                height={190}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="font-medium">{item.name}</h3>
                    </Link>

                </div>
            ))
        }
        </div>









            {/* 3 PromoCards */}
            <section className="py-10">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Card 1 */}
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-8 text-white">

                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>


                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                                    <span>🔥</span>
                                    <span>Deal of the Day</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-2">Fresh Organic Fruits</h3>
                                <p className="text-white/80 mb-4">Get up to 40% off on selected organic fruits</p>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-3xl font-bold">40% OFF</div>
                                    <div className="text-sm text-white/70">
                                        Use code: <span className="font-bold text-white">ORGANIC40</span>
                                    </div>
                                </div>
                                <Link
                                    href="/products"
                                    className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Shop Now
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 p-8 text-white">
                            {/* أشكال دائرية */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>


                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                                    <span>✨</span>
                                    <span>New Arrivals</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-2">Exotic Vegetables</h3>
                                <p className="text-white/80 mb-4">Discover our latest collection of premium vegetables</p>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-3xl font-bold">25% OFF</div>
                                    <div className="text-sm text-white/70">
                                        Use code: <span className="font-bold text-white">FRESH25</span>
                                    </div>
                                </div>
                                <Link
                                    href="/products?sort=newest"
                                    className="inline-flex items-center gap-2 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Explore Now
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>













        </div>
    )
}
