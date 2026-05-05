

import { getCategories } from "@/services/categories.services";
import { FeaturesSection, Gradient } from "@/ServicesUi/ServicesUi";
import { CategoryResponse } from "@/types/response.type";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { Layers } from "lucide-react";


export default async function categories() {


  const resCategorise: CategoryResponse = await getCategories();
  const dataCategori = resCategorise.data;


  return (
    <>
      {/* 1 */}

      <div className="bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">

        <div className="container mx-auto px-4 py-12 sm:py-16">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Categories</span>
          </nav>

          {/* Header Content */}
          <div className="flex items-center gap-5">

            {/* Icon Box */}
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
              <Layers className="text-3xl" />
            </div>

            {/* Text */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                All Categories
              </h1>
              <p className="text-white/80 mt-1">
                Browse our wide range of product categories
              </p>
            </div>

          </div>

        </div>

      </div>

      {!dataCategori ?
        // 1
        <div className="container mx-auto px-4 py-10">

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            {/* brands go here */}
          </div>

          {/* Empty State */}
          <div className="text-center py-20">

            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
              <Layers className="text-3xl text-gray-400" />
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2">
              No categories Found
            </h3>

            <p className="text-gray-500">
              categories will appear here once available.
            </p>

          </div>

        </div>

        :

        // 2
        <div className="container m-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-6 py-10 px-5  gap-4">
            {dataCategori?.map((item => (

              <div key={item._id} className=" flex flex-col justify-center ">
                <Link
                  href={`/categories/${item._id}`}
                  className="group  rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className=" aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4 ">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-center group-hover:text-green-600 transition-colors mb-2">
                    {item.name}
                  </h3>

                  <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity mb-3">
                    <span className="text-xs text-green-600 flex items-center gap-1">
                      View Subcategories
                      <FaArrowRight className="text-[10px]" />
                    </span>
                  </div>

                </Link>
              </div>

            )))}

          </div>
        </div>

      }


      {/* FeaturesSection */}
       

    </>
  );
}



