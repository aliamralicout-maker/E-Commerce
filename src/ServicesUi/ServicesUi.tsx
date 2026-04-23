import { Data } from '@/interfaces/categorie.api.interface';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


import { FaLayerGroup, FaTruck, FaUndo, FaShieldAlt, FaHeadset } from "react-icons/fa";

interface props {
    data: Data,
}


export function Gradient({ data }: props) {

    return (
        <div className="bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
            <div className="container mx-auto px-4 py-12 sm:py-16">

                <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
                    <Link href="/" className="hover:text-white transition-colors">
                        Home
                    </Link>
                    <span className="text-white/40">/</span>
                    <Link href="products" className="hover:text-white transition-colors">
                        Categories
                    </Link>

                    { data?.name && <span className="text-white/40">/</span>}
                    <span className="text-white font-medium">
                        {data?.name}
                    </span>
                </nav>

                <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30 overflow-hidden">
                        {data ? <Image src={data?.image} alt='img' width={100} height={100} className='object-contain w-12 h-12' /> : <FaLayerGroup className="text-3xl" />}
                    </div>

                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                            {data?.name}
                        </h1>
                        <p className="text-white/80 mt-1">
                            {data ? 'Choose a subcategory to browse products' : ' Browse our wide range of product categories'}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}


// FeaturesSection
export function FeaturesSection() {
    return (
        <div className="bg-green-50 border-y border-green-100">
            <div className="container mx-auto px-4 py-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Item 1 */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                            <FaTruck className="text-green-600 text-lg" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-green-900 text-sm">Free Shipping</h4>
                            <p className="text-gray-500 text-xs">On orders over 500 EGP</p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                            <FaUndo className="text-green-600 text-lg" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-green-900 text-sm">Easy Returns</h4>
                            <p className="text-gray-500 text-xs">14-day return policy</p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                            <FaShieldAlt className="text-green-600 text-lg" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-green-900 text-sm">Secure Payment</h4>
                            <p className="text-gray-500 text-xs">100% secure checkout</p>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                            <FaHeadset className="text-green-600 text-lg" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-green-900 text-sm">24/7 Support</h4>
                            <p className="text-gray-500 text-xs">Contact us anytime</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}



interface err {
    error: string;
};

// Error message
export function ErrorMessage({ error }: err) {
    if (!error) return null;
    return <p className="text-sm text-red-600 mt-1 bg-red-50 border border-red-200 px-3 py-2 rounded-md">{error}</p>
}

