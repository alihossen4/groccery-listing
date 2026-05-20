"use client"
import 'swiper/css';
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from './ProductItem';
import product1 from "../../public/beverages/beverage1.jpeg"
import product2 from "../../public/beverages/beverage2.jpg"
import product3 from "../../public/beverages/beverage3.jpg"

const ProductSlider = () =>{
    return(
        <>
            <div className="productSlider py-5">
                
                    <Swiper
                    navigation={true}
                    slidesPerView={7}
                    spaceBetween={10}
                    modules={[Navigation]}
                    className='mySwiper'
                    >
                        <SwiperSlide className='py-3 px-2'>
                            <ProductItem image={product1} price="$45.99" oldPrice="$64.99" review={4.5} />
                        </SwiperSlide>
                        <SwiperSlide className='py-3 px-2'>
                            <ProductItem image={product2} price="$35.99" oldPrice="$44.99" review={4.5} />
                        </SwiperSlide><SwiperSlide className='py-3 px-2'>
                            <ProductItem image={product3} price="$25.99" oldPrice="$34.99" review={4} />
                        </SwiperSlide><SwiperSlide className='py-3 px-2'>
                            <ProductItem image={product1} price="$55.99" oldPrice="$74.99" review={4} />
                        </SwiperSlide><SwiperSlide className='py-3 px-2'>
                            <ProductItem image={product3} price="$25.99" oldPrice="$34.99" review={4} />
                        </SwiperSlide><SwiperSlide className='py-3 px-2'>
                            <ProductItem image={product1} price="$25.99" oldPrice="$34.99" review={4} />
                        </SwiperSlide><SwiperSlide className='py-3 px-2'>
                            <ProductItem image={product2} price="$35.99" oldPrice="$44.99" review={4} />
                        </SwiperSlide><SwiperSlide className='py-3 px-2'>
                            <ProductItem image={product3} price="$25.99" oldPrice="$34.99" review={4} />
                        </SwiperSlide>
                    </Swiper>
                </div>
        </>
    )
}
export default ProductSlider;