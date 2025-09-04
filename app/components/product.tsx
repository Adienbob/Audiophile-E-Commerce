"use client"
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
   console.log(tabletSrc)
   return (
      <div className="product" id={index % 2 == 0 ? "even" : "odd"}>
         <div className="productImage"> 
            <picture>
               <source media="(min-width: 1024px)" srcSet={desktopSrc} />
               <source media="(min-width: 600px)" srcSet={tabletSrc} />
               <img src={mobileSrc} alt="" loading="lazy" decoding="async" />
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