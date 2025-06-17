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
}

export default function Product({isNew, name, description, desktopSrc, tabletSrc, mobileSrc, slug}: ProductType) {

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
            <Button path={`/products/${slug}`}>
               <button>SEE PRODUCT</button>
            </Button>
         </div>
      </div>
   )
}