import ProductCard from "./productCard/productCard";



export default function Products() {

    return (
        <div className='container m-auto px-4'>
            {/* 1 */}
            <div className="flex items-center gap-3 my-8 ">

                <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>

                <h2 className="text-3xl font-bold text-gray-800">
                    Featured <span className="text-emerald-600">Products</span>
                </h2>
            </div>
            {/* 2 */}
            <ProductCard />
        </div>

    )
}
