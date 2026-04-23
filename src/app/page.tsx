import Category from '@/components/home/categorie/Categorie'
import FeaturesCards from '@/components/home/featuresCards/FeaturesCards'
import FreshConnect from '@/components/home/freshConnect/FreshConnect'
import MainSlider from '@/components/home/mainSlider/MainSlider'
import Products from '@/components/home/products/Products'
import React from 'react'

export default function HomePage() {
  return (
    <>
      {/* main slaider */}
      <MainSlider/>

      {/* FeaturesCards */}
      <FeaturesCards/>

      {/* categoris  */}
      <Category/>

      {/* proudcts  */}
      <Products/>

      {/* FreshConnect */}
      <FreshConnect/>
    </>
  )
}
