import ProductCard from '@/components/home/products/productCard/productCard'
import { FeaturesSection, Gradient } from '@/ServicesUi/ServicesUi'


export default function products() {
  return (
    <>

      {/* 1 */}
      <Gradient/>

      <div className="container m-auto py-10">
        {/* span */}
        <div className="mb-6 text-2xl text-gray-500">
          Showing 40 products
        </div>

        {/* all products */}
        <ProductCard/>
      </div>

        {/* FeaturesSection */}
        <FeaturesSection/>

    </>
  )
}
