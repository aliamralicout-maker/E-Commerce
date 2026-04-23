import { FaArrowLeft, FaBoxOpen, FaFilter, FaFolderOpen, FaLayerGroup } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";

import ProductCardUi from '@/components/home/products/productCard/ProductCardUi';
import Link from 'next/link';
import { getProductsByCategory } from '@/services/categories.services';

interface params{
    id:string
}

export default async function ProductsByCategory({id}:params) {


    const allProductInCategory = await getProductsByCategory(id);


    console.log('allProductInCategory = ', allProductInCategory);

    return (
        <>
            {/* View All Products */}
            < div className="container mx-auto px-4 py-10" >
                {/* Filters */}
                < div className="mb-6 flex items-center gap-3 flex-wrap" >

                    <span className="flex items-center gap-2 text-sm text-gray-600">
                        <FaFilter />
                        Active Filters:
                    </span>

                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium hover:bg-primary-200 transition-colors"
                    >
                        <FaLayerGroup className="text-xs" />
                        Mobiles
                        <IoClose className="text-xs" />
                    </Link>

                    <Link
                        href="/products"
                        className="text-sm text-gray-500 hover:text-gray-700 underline"
                    >
                        Clear all
                    </Link>
                </div >
                {/* Count */}
                < div className="mb-6 text-sm text-gray-500" >
                    {allProductInCategory.results !== 0 ? <>{`Showing ${allProductInCategory.results} products`}</> : <>{`Showing ${allProductInCategory.results} products`}</>}
                </div >

                {
                    allProductInCategory.results === 0 ? <>
                        < div className="container mx-auto px-4 py-8">



                            {/* Empty State */}
                            <div className="text-center py-20">

                                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                                    <FaBoxOpen className="text-3xl text-gray-400" />
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    No Products Found
                                </h3>

                                <p className="text-gray-500 mb-6">
                                    No products match your current filters.
                                </p>

                                <Link
                                    href="/products"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
                                >
                                    View All Products
                                </Link>

                            </div>
                        </div>
                    </> :
                        <>
                            {/* All Products */}

                            <ProductCardUi data={allProductInCategory?.data} />

                            {/* <ProductIdUi product={allProductInCategory} items={singleCategorie.data?.name} /> */}

                        </>
                }
            </div >
        </>
    )
}
