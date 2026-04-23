import React from 'react'

import ProductIdUi from '../ProductIdUi/ProductIdUi'

import { getSinglProduct } from '@/services/product.services';








export default async function page({params}:any) {

  const {productId} = await params;
  

  
const singleProduct  = await getSinglProduct(productId);



const category = singleProduct.data.category.name;
const subcategory = singleProduct.data.subcategory[0].name;
const title = singleProduct.data.title;





  const items = [
    {label: 'Home', href: '/'},
    {label: category, href: '/' },
    {label: subcategory, href: '/'},
    {label: title },
  ]

  return (
    <>
      <ProductIdUi items={items} product={singleProduct.data}/>
    </>
  )
}
