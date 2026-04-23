"use client";

import Link from "next/link";
import {  Mail } from "lucide-react";
import { FaApple, FaGooglePlay, FaLeaf, FaTag, FaTruck } from "react-icons/fa";

export default function FreshConnect() {
    const perks = [
        {
            icon: <FaLeaf className="w-3.5 h-3.5 text-emerald-600" />,
            text: "Fresh Picks Weekly",
        },
        {
            icon: <FaTruck className="w-3.5 h-3.5 text-emerald-600" />,
            text: "Free Delivery Codes",
        },
        {
            icon: <FaTag className="w-3.5 h-3.5 text-emerald-600" />,
            text: "Members-Only Deals",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto">
                <div className="relative grid lg:grid-cols-5 gap-8 p-8 lg:p-14 bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-[2.5rem] border border-emerald-100/50 shadow-2xl shadow-emerald-500/10 overflow-hidden">

                    {/* Newsletter Column */}
                    <div className="lg:col-span-3 space-y-6">

                        {/* Header */}
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                                <Mail className="w-5 h-5 text-white" />
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                                    Newsletter
                                </h3>
                                <p className="text-xs text-gray-500">50,000+ subscribers</p>
                            </div>
                        </div>

                        {/* Title */}
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
                                Get the Freshest Updates{" "}
                                <span className="text-emerald-600">Delivered Free</span>
                            </h2>

                            <p className="text-gray-500 mt-3 text-lg">
                                Weekly recipes, seasonal offers & exclusive member perks.
                            </p>
                        </div>

                        {/* Perks */}
                        <div className="flex flex-wrap gap-3">
                            {perks.map((perk, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-emerald-100 px-4 py-2.5 rounded-full shadow-sm"
                                >
                                    <div className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center">
                                        {perk.icon}
                                    </div>

                                    <span className="text-sm font-medium text-gray-700">
                                        {perk.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Form */}
                        <form className="pt-2">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    required
                                    className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm"
                                />

                                <button
                                    type="submit"
                                    className="px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-500/30 transition-all hover:scale-[1.02]"
                                >
                                    Subscribe
                                </button>
                            </div>

                            <p className="text-xs text-gray-400 mt-3 pl-1">
                                ✨ Unsubscribe anytime. No spam, ever.
                            </p>
                        </form>
                    </div>

                    {/* Mobile App Column */}
                    <div className="lg:col-span-2 lg:border-l lg:border-emerald-100 lg:pl-8 flex flex-col justify-center space-y-5">

                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white space-y-4">

                            <div className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-500/30">
                                📱 MOBILE APP
                            </div>

                            <h3 className="text-2xl font-bold">
                                Shop Faster on Our App
                            </h3>

                            <p className="text-gray-400 text-sm">
                                Get app-exclusive deals & 15% off your first order.
                            </p>

                            <div className="space-y-3 pt-2">

                                <Link
                                    href="#"
                                    className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-3 rounded-xl transition-all hover:scale-105"
                                >
                                    <FaApple className="w-5 h-5 text-white" />

                                    <div className="text-left">
                                        <div className="text-[10px] text-gray-400 uppercase">
                                            Download on
                                        </div>
                                        <div className="text-sm font-semibold">
                                            App Store
                                        </div>
                                    </div>
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-3 rounded-xl transition-all hover:scale-105"
                                >
                                    <FaGooglePlay className="w-5 h-5 text-white" />

                                    <div className="text-left">
                                        <div className="text-[10px] text-gray-400 uppercase">
                                            Get it on
                                        </div>
                                        <div className="text-sm font-semibold">
                                            Google Play
                                        </div>
                                    </div>
                                </Link>

                            </div>

                            <div className="flex items-center gap-2 text-sm pt-2">
                                <span className="text-yellow-400">★★★★★</span>
                                <span className="text-gray-400">
                                    4.9 • 100K+ downloads
                                </span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}