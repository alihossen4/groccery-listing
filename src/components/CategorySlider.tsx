import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
const CategorySlider = () => {
  return (
    <div className='py-4'>
        <div className="container">
            <h2 className='text-[22px] font-[600] mb-4'>Shop by Category</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={10}
                breakpoints={{
                    640: {
                        slidesPerView: 3,   
                    },
                    768: {
                        slidesPerView: 5,
                    },
                    1024: { 
                        slidesPerView: 7,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <h3 className='text-[16px] font-[500]'>Fruits & Vegetables</h3>
                        <Image src={slider1} alt='category' width={100} height={100} className='mx-auto mt-2'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <h3 className='text-[16px] font-[500]'>Meats & Seafood</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <h3 className='text-[16px] font-[500]'>Breakfast & Dairy</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <h3 className='text-[16px] font-[500]'>Breads & Bakery</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <h3 className='text-[16px] font-[500]'>Beverages</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <h3 className='text-[16px] font-[500]'>Frozen Foods</h3>
                    </div>
                </SwiperSlide>
            </Swiper>   
        </div>
    </div>
  )
}

export default CategorySlider