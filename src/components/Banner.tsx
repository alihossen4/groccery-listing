"use client"
import 'swiper/css';
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () =>{
    return (
        <section className="py-5">
            <div className="container">
                <Swiper
                    navigation={true}
                    slidesPerView={7}
                    spaceBetween={10}
                    modules={[Navigation]}
                    className='mySwiper'
                    >
                        <SwiperSlide className='py-3 px-2'>
                            
                        </SwiperSlide>
                    </Swiper>
            </div>
        </section>
    )
}