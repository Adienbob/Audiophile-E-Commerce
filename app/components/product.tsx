"use client"
import Image from "next/image"

type ProductType = {
   isNew: boolean;
   name: string;
   description: string;
   desktopSrc: string;
   tabletSrc: string;
   mobileSrc: string;
}

export default function Product({isNew, name, description, desktopSrc, tabletSrc, mobileSrc}: ProductType) {

   return (
      <div className="">
         <div className="productImage">
            <picture>
               <source media="(min-width: 1025)" srcSet={desktopSrc} />
               <source media="(min-width: 769)" srcSet={tabletSrc} />
               <Image width={100} height={100} src={mobileSrc} alt="" />
            </picture>
         </div>
         <div className="productDetails">
            {isNew ? <span>NEW PRODUCT</span> : ""}
            <h2>{name}</h2>
            <p>{description}</p>
            {/* See product button */}
         </div>
      </div>
   )
}