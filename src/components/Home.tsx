import React from 'react'
import HomeSlider from './HomeSlider'
import CategorySlider from './CategorySlider'
import PopularProducts from './PopularProducts'
import LatestProduct from './LatestProduct'
import Footer from './Footer'
const Home = () => {
  return (
    <>
      <div className="slider-wrapper bg-[#f1f1f1]">
        <HomeSlider />
        <CategorySlider />
        <PopularProducts />
        <LatestProduct />
        <Footer />
      </div>
    </>
  )
}

export default Home