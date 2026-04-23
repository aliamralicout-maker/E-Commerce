'use client';

import { FeaturesSection } from "@/ServicesUi/ServicesUi";
import { FaTags } from "react-icons/fa";



export default function BrandsPage() {
  return (
    <>
    <div className="min-h-screen bg-gray-50/50">

      {/* Header */}
      <div className="bg-linear-to-br from-violet-600 via-violet-500 to-purple-400 text-white">

        <div className="container mx-auto px-4 py-12 sm:py-16">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Brands</span>
          </nav>

          {/* Title */}
          <div className="flex items-center gap-5">

            {/* Icon Box */}
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
              <FaTags className="text-3xl" />
            </div>

            {/* Text */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Top Brands
              </h1>
              <p className="text-white/80 mt-1">
                Shop from your favorite brands
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-10">

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
          {/* brands go here */}
        </div>

        {/* Empty State */}
        <div className="text-center py-20">

          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
            <FaTags className="text-3xl text-gray-400" />
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2">
            No Brands Found
          </h3>

          <p className="text-gray-500">
            Brands will appear here once available.
          </p>

        </div>

      </div>

      
    </div>



<FeaturesSection/>
    </>
  );
}