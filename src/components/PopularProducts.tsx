"use client"
import React from 'react'
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductSlider from './ProductSlider';
import ProductItem from './ProductItem';
import product1 from "../../public/beverages/beverage1.jpeg"

const PopularProducts = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return(
        <section className="popular-products bg-white py-2 my-3">
            <div className="container">
                <div className="flex items-center justify-between mb-5">
                    <div className="col1 w-[30%]">
                        <h2 className="text-xl text-gray-800 font-[600]">Popular Products</h2>
                        <p className="text-[16px]text-gray-800">Do not miss these popular items!</p>
                    </div>
                    <div className="col2 w-[70%]">
                        <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                        >
                            <Tab label="Fruits & Vegetables" />
                            <Tab label="Meats & Seafood" />
                            <Tab label="Breakfast & Dairy" />
                            <Tab label="Breads & Bakery" />
                            <Tab label="Beverages" />
                            <Tab label="Frozen Foods" />
                            <Tab label="Biscuits & Snacks" />
                            <Tab label="Health & Beauty" />
                            <Tab label="Household Items" />
                            <Tab label="Baby Care" />
                            <Tab label="Pet Care" />
                        </Tabs>
                    </div>
                </div>
                <ProductSlider/>
            </div>
        </section>
    )
    

}
export default PopularProducts;