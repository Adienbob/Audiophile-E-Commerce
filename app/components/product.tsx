"use client"
import Image from "next/image"
import Button from "./links"

type ProductType = {
   isNew: boolean;
   name: string;
   description: string;
   desktopSrc: string;
   tabletSrc: string;
   mobileSrc: string;
   slug: string;
   index: number;
};

export default function Product({isNew, name, description, desktopSrc, tabletSrc, mobileSrc, slug, index}: ProductType) {
   return (
      <div className="productContainer" id={index % 2 == 0 ? "even" : "odd"}>
         <div className="productImage">
            <picture>
               <source media="(min-width: 1025)" srcSet={desktopSrc} />
               <source media="(min-width: 769)" srcSet={tabletSrc} />
               <Image width={654} height={240} src={mobileSrc} alt="" />
            </picture>
         </div>
         <div className="productDetails">
            {isNew ? <span>NEW PRODUCT</span> : ""}
            <h2>{name}</h2>
            <p>{description}</p>
            <Button className="btnOrange" path={`/products/${slug}`}>
               SEE PRODUCT
            </Button>
         </div>
      </div>
   )
}