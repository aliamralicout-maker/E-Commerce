import Link from "next/link";
import { FaFilter, FaFolderOpen, FaTimes, FaBoxOpen } from "react-icons/fa";

export default function ProductsUI() {
  return (
    <>

      <div className="bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">

        <div className="container mx-auto px-4 py-10 sm:py-14">

          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
            <Link className="hover:text-white transition-colors" href="/">Home</Link>
            <span className="text-white/40">/</span>
            <Link className="hover:text-white transition-colors" href="/categories">Categories</Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Computer Components</span>
          </nav>

          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
              <FaFolderOpen className="text-3xl" />
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Computer Components
              </h1>
              <p className="text-white/80 mt-1">
                Browse Computer Components products
              </p>
            </div>

          </div>

        </div>

      </div>
      <div className="container mx-auto px-4 py-8">

        <div className="mb-6 flex items-center gap-3 flex-wrap">

          <span className="flex items-center gap-2 text-sm text-gray-600">
            <FaFilter />
            Active Filters:
          </span>

          <Link
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium hover:bg-emerald-200 transition-colors"
            href="/products"
          >
            <FaFolderOpen className="text-xs" />
            Computer Components
            <FaTimes className="text-xs" />
          </Link>

          <Link className="text-sm text-gray-500 hover:text-gray-700 underline" href="/products">
            Clear all
          </Link>

        </div>

        <div className="mb-6 text-sm text-gray-500">
          Showing 0 products
        </div>

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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
            href="/products"
          >
            View All Products
          </Link>

        </div>

      </div>
    </>
  );
}




