import { FaHeart, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

import { getAllWishlist } from "@/actions/wishlist.action";
import WishListUi from "./wishListUi/wishListUi";



export default async function WishlistTable() {




    const dataWishlist = await getAllWishlist();







    return (
        <>
            {dataWishlist.count > 0 ? <WishListUi data={dataWishlist} />
                :

                // empty wishlist
                <div className="min-h-screen bg-gray-50/50 flex items-center justify-center">
                    <div className="max-w-sm mx-auto text-center px-4">

                        {/* Icon */}
                        <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                            <FaHeart className="text-3xl text-gray-400" />
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-bold text-gray-900 mb-2">
                            Your wishlist is empty
                        </h2>

                        {/* Description */}
                        <p className="text-gray-500 text-sm mb-6">
                            Browse products and save your favorites here.
                        </p>

                        {/* Button */}
                        <div className="flex flex-col gap-3">
                            <Link
                                href="/products"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
                            >
                                Browse Products
                                <FaArrowRight className="text-sm" />
                            </Link>
                        </div>

                    </div>
                </div>
            }
        </>
    );
}
