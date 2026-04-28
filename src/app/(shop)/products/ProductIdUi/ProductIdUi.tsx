'use client';

import { Data } from '@/interfaces/productDataInterface';
import { FeaturesSection } from '@/ServicesUi/ServicesUi';
import Link from 'next/link';
import { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaCheck, FaStar, FaChevronRight, FaHome, FaRegStar, FaMinus, FaPlus, FaTruck, FaUndo, FaShieldAlt, FaShareAlt, FaBolt, FaShoppingCart, FaSpinner, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import ProductCardDetails from './ProductCardDetails/ProductCardDetails';
import AddToCartButton from './AddToCartButton';
import { addWishlist } from '@/actions/wishlist.action';
import { useWishlist } from '@/context/WishlistContext';
import { toast } from 'sonner';



type ProductIdUiProps = {
    product: Data;
    items: { label: string; href?: string }[];
};

export default function ProductIdUi({ product, items }: ProductIdUiProps) {

    const { updateNumOfWishlistItems } = useWishlist();

    const [active, setActive] = useState<number>(0);
    const [count, setCount] = useState<number>(1);
    const [activeTab, setActiveTab] = useState<string>("details");
    const [startIndex, setStartIndex] = useState<number>(0);
    const [loadingWishlist, setLoadingWishlist] = useState(false);
    const [wishlistIds, setWishlistIds] = useState<string[]>([]);

    const images = product.images;

    const visibleImages = images.slice(startIndex, startIndex + 3);

    const handleClick = (index: number) => {

        setActive(index);

        if (index === startIndex + 2 && startIndex + 3 < images.length) {
            setStartIndex(startIndex + 1);
        }

        if (index === startIndex && startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    async function handleAddToWishlist(id: string) {
        setLoadingWishlist(true);

        try {
            const res = await addWishlist(id);
            console.log('res cheek: ' , res);
            

            if (res.status) {
                setWishlistIds((prev) =>
                    prev.includes(id) ? prev : [...prev, id]
                );

                updateNumOfWishlistItems(res.data.length);

                toast(
                    <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-500 text-xl" />
                        <span className="text-sm font-medium">
                            Product added to WishList successfully
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
            } else {
                toast.error(
                    <div className="flex items-center gap-3">
                        <FaTimesCircle className="text-red-500 text-xl" />
                        <span className="text-sm font-medium">
                            {res.error?.message || 'You need to log in first.'}
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

        } finally {
            setLoadingWishlist(false);
        }
    }
    const isInWishlist = wishlistIds.includes(product?._id);


    return (
        <>
            <nav aria-label="Breadcrumb" className="py-4">
                <div className="container mx-auto px-4">
                    <ul className="flex items-center flex-wrap gap-1 text-sm">
                        {items.map((item, index) => (
                            <li key={index} className="flex items-center">
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className="text-gray-500 hover:text-primary-600 transition flex items-center gap-1.5"
                                    >
                                        {index === 0 && <FaHome className="text-xs" />}
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="text-gray-900 font-medium truncate max-w-xs">
                                        {item.label}
                                    </span>
                                )}

                                {index < items.length - 1 && (
                                    <FaChevronRight className="text-gray-400 text-xs mx-2" />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>


            {/* card */}
            <section>
                <div className="container m-auto">
                    <div className='flex flex-col lg:flex-row gap-8 py-10 over'>
                        {/* image */}
                        <div className="lg:w-1/4">
                            <div className="bg-white rounded-xl shadow-sm p-4 sticky top-4">

                                {/* Main Image */}
                                <div className="mb-4">
                                    <img
                                        src={images[active]}
                                        alt="product"
                                        className="w-full h-80 object-cover  rounded-lg"
                                    />
                                </div>

                                {/* Thumbnails */}
                                <div className="flex justify-center gap-2 overflow-hidden py-1">
                                    {visibleImages.map((img, i) => {
                                        const realIndex = startIndex + i;

                                        return (
                                            <img
                                                key={realIndex}
                                                src={img}
                                                onClick={() => handleClick(realIndex)}
                                                className={`w-24 h-30 object-cover  cursor-pointer border-2 transition-all duration-300  ${active === realIndex
                                                    ? "border-blue-700 border-4 scale-105"
                                                    : "border-transparent hover:bg-blue-700 border-4"
                                                    }`}
                                            />
                                        );
                                    })}
                                </div>

                            </div>
                        </div>



                        {/* 2 */}
                        <div className="lg:w-3/4">
                            <div className="bg-white rounded-xl shadow-sm p-6">

                                {/* Category + Brand */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-green-50 text-green-700 text-xs px-3 py-1.5 rounded-full">
                                        {product.category.name}
                                    </span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
                                        {product.brand.name}
                                    </span>
                                </div>

                                {/* Title */}
                                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                                    {product.subcategory[0]?.name}
                                </h1>

                                {/* Rating */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex text-yellow-400">
                                        <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
                                    </div>
                                    <span className="text-sm text-gray-600">
                                        {product.ratingsAverage} ({product.reviews.length} reviews)
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="mb-6">
                                    <span className="text-3xl font-bold text-gray-900">
                                        {product?.priceAfterDiscount ? (
                                            <>
                                                {product.priceAfterDiscount} EGP
                                                <span className="line-through ml-4 text-gray-500 text-lg">
                                                    {product.price} EGP
                                                </span>

                                                <span className="bg-red-500 text-white ml-4 px-1.5 py-0.5 rounded-2xl text-base">
                                                    Save {Math.round(
                                                        ((product.price - product.priceAfterDiscount) / product.price) * 100
                                                    )}%
                                                </span>
                                            </>
                                        ) : (
                                            `${product?.price} EGP`
                                        )}
                                    </span>
                                </div>

                                {/* Stock */}
                                <div className="mb-6">
                                    <span className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-green-50 text-green-700 w-fit">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                        In Stock
                                    </span>
                                </div>

                                {/* Description */}
                                <div className="border-t pt-5 mb-6 text-gray-600">
                                    <p>{product.description}</p>
                                </div>

                                {/* Quantity */}
                                <div className="mb-6">
                                    <label className="block text-sm mb-2">Quantity</label>

                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center border-2 rounded-lg overflow-hidden">
                                            <button onClick={() => count !== 1 && setCount(count - 1)} className={count === 1 ? "px-4 py-3  opacity-50" : "px-4 py-3 hover:bg-gray-100 cursor-pointer hover:text-green-500"}>
                                                <FaMinus />
                                            </button>

                                            <input
                                                type="number"
                                                value={count}
                                                onChange={(e) => setCount(Number(e.target.value))}
                                                className="w-16 text-center outline-none"
                                            />

                                            <button onClick={() => setCount(count + 1)} className="px-4 py-3 cursor-pointer hover:text-green-500">
                                                <FaPlus />
                                            </button>
                                        </div>

                                        <span className="text-sm text-gray-500">
                                            {product.quantity - count} available
                                        </span>
                                    </div>
                                </div>

                                {/* Total */}
                                <div className="bg-gray-50 p-4 rounded-lg mb-6 flex justify-between">
                                    <span>Total Price:</span>
                                    <span className="text-xl font-bold text-green-600">
                                        {product.priceAfterDiscount ? product.priceAfterDiscount * count : product.price * count} EGP
                                    </span>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 mb-6">

                                    {/* AddToCartButton */}
                                    <AddToCartButton
                                        _id={product?._id}
                                        text='Add To Cart'
                                        Icon={FaShoppingCart}
                                        className={'flex-1 bg-green-600 hover:bg-green-700 cursor-pointer text-white py-3 rounded-xl flex items-center justify-center gap-2'}
                                    />

                                    <button className="flex-1 bg-gray-900 hover:bg-gray-800 cursor-pointer text-white py-3 rounded-xl flex items-center justify-center gap-2">
                                        <FaBolt />
                                        Buy Now
                                    </button>
                                </div>

                                {/* Wishlist */}
                                <div className="flex gap-3 mb-6">
                                    <button
                                        onClick={() => handleAddToWishlist(product?._id)}
                                        disabled={loadingWishlist}
                                        className={`flex-1 border py-3 rounded-xl flex items-center justify-center gap-2 transition-all
        ${isInWishlist
                                                ? "bg-red-600 text-white border-red-600 hover:bg-red-700"
                                                : "hover:text-green-600"
                                            }`}
                                    >
                                        {loadingWishlist ? (
                                            <FaSpinner className="animate-spin" />
                                        ) : (
                                            <CiHeart size="1.5rem" />
                                        )}

                                        {loadingWishlist
                                            ? "Add to Wishlist"
                                            : isInWishlist
                                                ? "In Wishlist"
                                                : "Add to Wishlist"}
                                    </button>

                                    <button className="border px-4 rounded-xl">
                                        <FaShareAlt />
                                    </button>
                                </div>


                                {/* Features */}
                                <div className="border-t pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:justify-items-center">

                                    <div className="flex items-center gap-3">
                                        <FaTruck className="text-green-600" />
                                        <div>
                                            <h4 className="text-sm font-medium">Free Delivery</h4>
                                            <p className="text-xs text-gray-500">Orders over $50</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FaUndo className="text-green-600" />
                                        <div>
                                            <h4 className="text-sm font-medium">30 Days Return</h4>
                                            <p className="text-xs text-gray-500">Money back</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FaShieldAlt className="text-green-600" />
                                        <div>
                                            <h4 className="text-sm font-medium">Secure Payment</h4>
                                            <p className="text-xs text-gray-500">100% Protected</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>



            <section id="product-details-tabs" className="py-8">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        {/* Tabs Header */}
                        <div className="border-b border-gray-200">
                            <div className="flex overflow-x-auto scrollbar-hide">
                                <button
                                    onClick={() => setActiveTab("details")}
                                    className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-all duration-200 border-b-2 ${activeTab === "details"
                                        ? "text-primary-600 border-primary-600 bg-primary-50/50"
                                        : "text-gray-600 hover:text-primary-600 hover:bg-gray-50 border-transparent"
                                        }`}
                                >
                                    Product Details
                                </button>

                                <button
                                    onClick={() => setActiveTab("reviews")}
                                    className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-all duration-200 border-b-2 ${activeTab === "reviews"
                                        ? "text-primary-600 border-primary-600 bg-primary-50/50"
                                        : "text-gray-600 hover:text-primary-600 hover:bg-gray-50 border-transparent"
                                        }`}
                                >
                                    Reviews ({product.reviews.length})
                                </button>

                                <button
                                    onClick={() => setActiveTab("shipping")}
                                    className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-all duration-200 border-b-2 ${activeTab === "shipping"
                                        ? "text-primary-600 border-primary-600 bg-primary-50/50"
                                        : "text-gray-600 hover:text-primary-600 hover:bg-gray-50 border-transparent"
                                        }`}
                                >
                                    Shipping & Returns
                                </button>
                            </div>
                        </div>

                        {/* Tabs Content */}
                        <div className="p-6">
                            {activeTab === "details" && (
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                            About this Product
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Galaxy Buds 2 come up to 20 hours of playback time with
                                            active noise cancellation (ANC) turned on. The TWS earphones
                                            appear to have a total of three microphones and an integrated
                                            voice recording unit for high quality calls. The charging
                                            case offers an additional 15 hours worth of battery life.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <h4 className="font-medium text-gray-900 mb-3">
                                                Product Information
                                            </h4>
                                            <ul className="space-y-2">
                                                <li className="flex justify-between text-sm">
                                                    <span className="text-gray-500">Category</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {product.category.name}
                                                    </span>
                                                </li>
                                                <li className="flex justify-between text-sm">
                                                    <span className="text-gray-500">Subcategory</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {product.subcategory[0].name}
                                                    </span>
                                                </li>
                                                <li className="flex justify-between text-sm">
                                                    <span className="text-gray-500">Brand</span>
                                                    <span className="text-gray-900 font-medium">{product.brand.name}</span>
                                                </li>
                                                <li className="flex justify-between text-sm">
                                                    <span className="text-gray-500">Items Sold</span>
                                                    <span className="text-gray-900 font-medium">
                                                        {product.sold} sold
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <h4 className="font-medium text-gray-900 mb-3">
                                                Key Features
                                            </h4>
                                            <ul className="space-y-2">
                                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                                    <FaCheck className='text-green-500' />
                                                    Premium Quality Product
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                                    <FaCheck className='text-green-500' />
                                                    100% Authentic Guarantee
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                                    <FaCheck className='text-green-500' />
                                                    Fast & Secure Packaging
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                                    <FaCheck className='text-green-500' />
                                                    Quality Tested
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "reviews" && (
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        Reviews
                                    </h3>
                                    <p className="text-gray-600">No reviews yet.</p>
                                </div>
                            )}

                            {activeTab === "shipping" && (
                                <div className="p-6">
                                    <div className="space-y-6">

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                                            <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">

                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                                                        <FaTruck className="fas fa-truck text-xl" />
                                                    </div>
                                                    <h4 className="font-semibold text-gray-900">Shipping Information</h4>
                                                </div>

                                                <ul className="space-y-3">
                                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                                        <FaCheck className="fas fa-check text-green-600 mt-1" />
                                                        <span>Free shipping on orders over $50</span>
                                                    </li>
                                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                                        <FaCheck className="fas fa-check text-green-600 mt-1" />
                                                        <span>Standard delivery: 3-5 business days</span>
                                                    </li>
                                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                                        <FaCheck className="fas fa-check text-green-600 mt-1" />
                                                        <span>Express delivery available (1-2 business days)</span>
                                                    </li>
                                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                                        <FaCheck className="fas fa-check text-green-600 mt-1" />
                                                        <span>Standard delivery: 3-5 business days</span>
                                                    </li>
                                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                                        <FaCheck className="fas fa-check text-green-600 mt-1" />
                                                        <span>Track your order in real-time</span>
                                                    </li>
                                                </ul>

                                            </div>

                                            <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">

                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                                                        <FaUndo className="fas fa-undo text-xl" />
                                                    </div>
                                                    <h4 className="font-semibold text-gray-900">Returns & Refunds</h4>
                                                </div>

                                                <ul className="space-y-3">
                                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                                        <FaCheck className="fas fa-check text-green-600 mt-1" />
                                                        <span>30-day hassle-free returns</span>
                                                    </li>
                                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                                        <FaCheck className="fas fa-check text-green-600 mt-1" />
                                                        <span>Full refund or exchange available</span>
                                                    </li>
                                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                                        <FaCheck className="fas fa-check text-green-600 mt-1" />
                                                        <span>Free return shipping on defective items</span>
                                                    </li>
                                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                                        <FaCheck className="fas fa-check text-green-600 mt-1" />
                                                        <span>Easy online return process</span>
                                                    </li>
                                                </ul>




                                            </div>

                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* You May Also Like */}
            <ProductCardDetails {...product} />

            <FeaturesSection />
        </>
    );
}









