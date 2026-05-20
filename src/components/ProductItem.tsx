"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { StaticImageData } from "next/image";
type ProductItemProps = {
    image:StaticImageData;
    price:string;
    oldPrice:string;
    review:number;
}
const ProductItem: React.FC<ProductItemProps> = ({image, price, oldPrice, review}) => {
  return (
    <div className="product-item shadow-md bg-white rounded-md w-[200px]">
      <Link href={"/"} className="img overflow-hidden group flex p-3" >
        <Image src={image} alt="Beverage 1" className="transition group-hover:scale-105 h-[150px] w-full object-contain"/>
      </Link>
      <div className="info p-3 flex flex-col gap-1">
        <span className="text-[14px] text-gray-700">Temp-store</span>
        <Link href={"/"} className="text-[15px] text-gray-800 font-[500]">
        100 percent soft drink, 500ml
      </Link>
      <Rating name="read-only" value={review} readOnly precision={0.5} className="mb-3"/>
      <div className="flex items-center justify-between">
        
        <span className="text-[#CB0000] text-[18px] font-[600]">{price}</span>
        <span className="text-[#A4A4A4] text-[18px] font-[600] line-through">{oldPrice}</span>
      </div>
        <div className="flex items-center justify-center my-2">

        <Button className="btn-g w-[90%]">
            Add to Cart
        </Button>
        </div>
      </div>
    </div>
  )
}


export default ProductItem