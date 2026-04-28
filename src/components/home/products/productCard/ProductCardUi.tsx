'use client'
import AddToCartButton from '@/app/(shop)/products/ProductIdUi/AddToCartButton';
import { proudctsResponse } from '@/types/response.type';
import Link from 'next/link';
import { FaEye, FaPlus, FaRegHeart } from 'react-icons/fa';
import { LuRefreshCw } from 'react-icons/lu';


type Props = {
    data: proudctsResponse['data'];
};



export default function ProductCardUi({ data }: Props) {



    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 '>
            {/* card */}
            {
                data?.map((item) => (

                    <div
                        key={item._id}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm transition hover:shadow-2xl hover:-translate-y-1 duration-300 relative"
                    >

                        <div className="relative">
                            <img
                                className="w-full h-60 object-contain bg-white"
                                src={item.imageCover}
                                alt={item.slug}
                            />


                            <div className="absolute top-3 right-3 flex flex-col space-y-2">


                                <Link
                                    href={`/wishlist`}
                                    className="bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm text-gray-600 hover:text-red-500"
                                    title="Add to wishlist"
                                >
                                    <FaRegHeart />
                                </Link>


                                <button
                                    className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 shadow-sm"
                                >
                                    <LuRefreshCw />
                                </button>


                                <Link
                                    href={`/products/${item._id}`}
                                    className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 shadow-sm "
                                >
                                    <FaEye />

                                </Link>

                            </div>
                        </div>


                        <div className="p-4">
                            <div className="text-xs text-gray-500 mb-1">{item.category.name}</div>
                            <h3 className="font-medium mb-1 cursor-pointer hover:text-green-600" title={item.slug}>
                                <Link className="line-clamp-1" href={`/products/${item._id}`}>
                                    {item.slug}
                                </Link>
                            </h3>


                            <div className="flex items-center mb-2">
                                <div className="flex text-amber-400 mr-2">
                                    {/* stars  */}
                                </div>
                                <span className="text-xs text-gray-500">{item.ratingsAverage} ({item.ratingsQuantity})</span>
                            </div>


                            <div className="flex items-center justify-between">
                                <div className='flex flex-col'>
                                    <span className="text-lg font-bold text-green-600 text-nowrap">{item.priceAfterDiscount ? item.priceAfterDiscount : item.price} EGP</span>
                                    {item.priceAfterDiscount && <span className="line-through ml-1 text-nowrap text-gray-500 text-lm">{item.price} EGP</span>}
                                </div>
                                {/* AddToCartButton */}
                                <AddToCartButton
                                    _id={item?._id}
                                    Icon={FaPlus}
                                    className={"h-10 w-10 rounded-full flex items-center justify-center transition bg-green-600 text-black hover:bg-green-800 disabled:opacity-70 cursor-pointer"}
                                />
                            </div>
                        </div>

                        {/* sale */}
                        {item.priceAfterDiscount && <div className='absolute text-sm bg-red-500 text-white px-2 py-0.5 rounded z-10 top-2 left-2'>
                            {item.priceAfterDiscount && `-${Math.round(
                                ((item.price - item.priceAfterDiscount) / item.price) * 100
                            )}%`}
                        </div>}
                    </div>


                ))
            }
        </div>
    )
}
