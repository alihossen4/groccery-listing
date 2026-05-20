"use client"
import React from "react"
import Link from "next/link"
import beverage1 from "../../public/beverages/beverage1.jpeg"
import Image from "next/image"
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

const ProductItem1: React.FC = () => {
  return (
    <div className="product-item shadow-md bg-white rounded-md w-full">
      <Link href={"/"} className="img overflow-hidden group flex p-3" >
        <Image src={beverage1} alt="Beverage 1" className="transition group-hover:scale-105"/>
      </Link>
      <div className="info p-3 flex flex-col gap-1">
        <Link href={"/"} className="text-[15px] text-gray-800 font-[500]">
        100 percent soft drink, 500ml
      </Link>
      <Rating name="read-only" value={4} readOnly precision={0.5} className="mb-3"/>
      <div className="flex items-center justify-between">
        <span className="text-[#CB0000] text-[18px] font-[600]">$25.99</span>
        <span className="text-[#A4A4A4] text-[18px] font-[600] line-through">$34.99</span>
        <Button className="btn-g">
            Add to Cart
        </Button>
      </div>
      </div>
    </div>
  )
}


export default ProductItem1