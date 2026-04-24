import Link from "next/link";
import {
    FaReceipt,
    FaArrowLeft,
    FaInfoCircle,
    FaCity,
    FaMapMarkerAlt,
    FaPhone,
    FaWallet,
    FaMoneyBill,
    FaCreditCard,
    FaShieldAlt,
    FaShoppingBag,
    FaTruck,
    FaBox
} from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

export default function CheckoutPage({ Subtotal, cartItems }: any) {

    cartItems = 3


    return (
        <div className="container mx-auto p-6">

            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <Link href="/" className="hover:text-primary-600 transition">
                    Home
                </Link>

                <span className="text-gray-300">/</span>

                <Link href="/cart" className="hover:text-primary-600 transition">
                    Cart
                </Link>

                <span className="text-gray-300">/</span>

                <span className="text-gray-900 font-medium">Checkout</span>
            </nav>

            {/* Header */}
            <div className="mb-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                            <span className="bg-linear-to-br from-green-600 to-green-700 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-green-600/20">
                                <FaReceipt />
                            </span>
                            Complete Your Order
                        </h1>
                        <p className="text-gray-500 mt-2">
                            Review your items and complete your purchase
                        </p>
                    </div>

                    <Link
                        href="/cart"
                        className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-50 transition-all"
                    >
                        <FaArrowLeft />
                        Back to Cart
                    </Link>

                </div>
            </div>

            <form>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


                    {/* LEFT SIDE */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Shipping */}
                        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">

                            <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
                                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                    <FaHouse />
                                    Shipping Address
                                </h2>
                                <p className="text-green-100 text-sm mt-1">
                                    Where should we deliver your order?
                                </p>
                            </div>

                            <div className="p-6 space-y-5">

                                {/* Info box */}
                                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                        <FaInfoCircle className="text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-800 font-medium">
                                            Delivery Information
                                        </p>
                                        <p className="text-xs text-blue-600 mt-0.5">
                                            Please ensure your address is accurate for smooth delivery
                                        </p>
                                    </div>
                                </div>

                                {/* City */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        City <span className="text-red-500">*</span>
                                    </label>

                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <FaCity className="text-gray-500" />
                                        </div>

                                        <input
                                            className="w-full px-4 py-3.5 pl-14 border-2 rounded-xl border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                                            placeholder="e.g. Cairo, Alexandria, Giza"
                                            name="city"
                                        />
                                    </div>
                                </div>

                                {/* Address */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Street Address <span className="text-red-500">*</span>
                                    </label>

                                    <div className="relative">
                                        <div className="absolute left-4 top-4 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <FaMapMarkerAlt className="text-gray-500" />
                                        </div>

                                        <textarea
                                            rows={3}
                                            className="w-full px-4 py-3.5 pl-14 border-2 rounded-xl border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none resize-none"
                                            placeholder="Street, building, floor..."
                                            name="details"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone <span className="text-red-500">*</span>
                                    </label>

                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <FaPhone className="text-gray-500" />
                                        </div>

                                        <input
                                            className="w-full px-4 py-3.5 pl-14 border-2 rounded-xl border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                                            placeholder="01xxxxxxxxx"
                                            name="phone"
                                            type="tel"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Payment */}
                        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">

                            <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
                                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                    <FaWallet />
                                    Payment Method
                                </h2>
                            </div>

                            <div className="p-6 space-y-4">

                                {/* COD */}
                                <button type="button" className="w-full p-5 rounded-xl border-2 border-green-500 flex items-center gap-4 bg-green-50">
                                    <FaMoneyBill className="text-green-600 text-xl" />
                                    <div>
                                        <h3 className="font-bold text-green-700">Cash on Delivery</h3>
                                        <p className="text-sm text-gray-500">Pay on arrival</p>
                                    </div>
                                </button>

                                {/* Card */}
                                <button type="button" className="w-full p-5 rounded-xl border-2 border-gray-200 flex items-center gap-4">
                                    <FaCreditCard className="text-gray-500 text-xl" />
                                    <div>
                                        <h3 className="font-bold text-gray-900">Pay Online</h3>
                                        <p className="text-sm text-gray-500">Card payment via Stripe</p>
                                    </div>
                                </button>

                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDE (Summary) */}
                    {/* {cartItems.length > 0 && ( */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm sticky top-4">

                            <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
                                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                    <FaShoppingBag />
                                    Order Summary
                                </h2>
                            </div>

                            <div className="p-5 space-y-3">

                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-semibold">{Subtotal} EGP</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-semibold">FREE</span>
                                </div>

                                <hr />

                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total</span>
                                    <span className="text-green-600">{Subtotal} EGP</span>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full mt-4 bg-linear-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                                >
                                    <FaBox />
                                    Place Order
                                </button>

                                <div className="flex items-center justify-center gap-4 mt-4 py-3 border-t border-gray-100 text-xs text-gray-500">

                                    <div className="flex items-center gap-1.5">
                                        <FaShieldAlt className="text-green-500" />
                                        <span>Secure</span>
                                    </div>

                                    <div className="w-px h-4 bg-gray-200" />

                                    <div className="flex items-center gap-1.5">
                                        <FaTruck className="text-blue-500" />
                                        <span>Fast Delivery</span>
                                    </div>

                                    <div className="w-px h-4 bg-gray-200" />

                                    <div className="flex items-center gap-1.5">
                                        <FaBox className="text-orange-500" />
                                        <span>Easy Returns</span>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    {/* )} */}

                </div>
            </form>

        </div>
    );
}

