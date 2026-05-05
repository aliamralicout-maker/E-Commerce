import { getProductsByCategory, getSpecificCategory } from '@/services/categories.services';
import { FeaturesSection, Gradient } from '@/ServicesUi/ServicesUi';
import { FaArrowLeft, FaArrowRight, FaFolderOpen } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import ProductIdUi from '../../products/ProductIdUi/ProductIdUi';
import ProductCardUi from '@/components/home/products/productCard/ProductCardUi';
import Link from 'next/link';

import { FaArrowLeftLong } from 'react-icons/fa6';
export default async function categorieId({ params }: any) {

  console.log(params);

  const { categorieId } = await params;

  const singleCategorie = await getSpecificCategory(categorieId);

  console.log('singleCategorie', singleCategorie);


  const allProductInCategory = await getProductsByCategory(categorieId);
  const data = allProductInCategory?.data;


  console.log('allProductInCategory = ', data);



  return (
    <>

      <div>
        <Gradient data={singleCategorie.data} />
        {/* ------------------------------------------------ */}

        {/* not found page */}
        <div className='container mx-auto'>
          {data.length === 0 || data.length === undefined ? <div className="container mx-auto px-4 py-10">

            <Link href="/categories"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors mb-6">
              <span className='me-2'><FaArrowLeft /></span>
              <span>Back to Categories</span>

            </Link>

            <div className="text-center py-20">

              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                <span className="text-3xl"><FaFolderOpen size={'.2 rem'} className='text-gray-400' /></span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                No Subcategories Found
              </h3>

              <p className="text-gray-500 mb-6">
                This category doesn't have any subcategories yet.
              </p>


              {/* <Link href={`/products?category=${categorieId}`} */}
              <Link href='ProductsByCategory'
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">
                {`View All Products in ${singleCategorie.data?.name}`}
              </Link>

            </div>
          </div>
            :
            <>
              <Link href={`/categories`} className='flex items-center mt-6 hover:text-green-600 px-4' > <FaArrowLeftLong className='me-2' /> <span>Back to Categories</span> </Link>
              <div className='px-4'>
                <h2 className='font-bold mt-6 text-lg text-gray-900'>{data?.length} Subcategories in {singleCategorie?.data?.name}</h2>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-6 px-4'>
                {data.map((item: any) => (
                  <Link key={item?._id}
                    href={`/categories/${item?._id}/allProductInCategory`}
                    className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1 block"
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                      <FaFolderOpen className="text-2xl text-green-600" />
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-green-600 transition-colors mb-2">
                      {item?.name}
                    </h3>

                    {/* Footer */}
                    <div className="flex items-center gap-2 text-sm text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Browse Products</span>
                      <FaArrowRight className="text-xs" />
                    </div>
                  </Link>
                ))}
              </div>
            </>
          }





        </div >
         
      </div >

    </>
  )
}
