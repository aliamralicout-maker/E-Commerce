import { getProductsByCategory, getSpecificCategory } from '@/services/categories.services';
import { Gradient } from '@/ServicesUi/ServicesUi';
import { FaArrowLeft, FaFolderOpen } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import ProductIdUi from '../../products/ProductIdUi/ProductIdUi';
import ProductCardUi from '@/components/home/products/productCard/ProductCardUi';
import Link from 'next/link';
import ProductsByCategory from '../ProductsByCategory/ProductsByCategory';
export default async function categorieId({ params }: any) {

  console.log(params);

  const { categorieId } = await params;

  const singleCategorie = await getSpecificCategory(categorieId);

  const allProductInCategory = await getProductsByCategory(categorieId);


  console.log('allProductInCategory = ', allProductInCategory);





  return (
    <div>
      <Gradient data={singleCategorie.data} />
      {/* ------------------------------------------------ */}

      {/* not found page */}
      <div className="container mx-auto px-4 py-10">

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


    {/* <ProductsByCategory id={categorieId} /> */}


    </div >
  )
}
