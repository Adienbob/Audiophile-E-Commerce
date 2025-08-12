"use client"

import Image from "next/image"
import Link from "next/link"

export default function Category() {

   return (
      <div className="categories">
         <div className="headphones">
            <picture>
               <source media="min-width: 1025px" srcSet="/assets/category-headphones/desktop/image-category-thumbnail-headphones.png"/>
               <source media="min-width: 600px" srcSet="/assets/category-headphones/tablet/image-category-thumbnail-headphones.png"/>
               <img className="productImage" src="/assets/category-headphones/mobile/image-category-thumbnail-headphones.png" alt="" />
            </picture>
            <span className="categoryName">HEADPHONES</span>
            <Link className="btnDarkGrey" href="/headphones">SHOP <Image className="arrow" width={8} height={12} src="/assets/shared/desktop/icon-arrow-right.svg" alt="" /></Link> 
         </div>
         <div className="speakers">
            <picture>
               <source media="min-width: 1025px" srcSet="/assets/category-speakers/desktop/image-category-thumbnail-speakers.png"/>
               <source media="min-width: 600px" srcSet="/assets/category-speakers/tablet/image-category-thumbnail-speakers.png"/>
            <img className="productImage" src="/assets/category-speakers/mobile/image-category-thumbnail-speakers.png" alt="" />
            </picture>
            <span className="categoryName">SPEAKERS</span>
            <Link className="btnDarkGrey" href="/speakers">SHOP <Image className="arrow" width={8} height={12} src="/assets/shared/desktop/icon-arrow-right.svg" alt="" /></Link> 
         </div>
         <div className="earphones">
            <picture>
               <source media="min-width: 1025px" srcSet="/assets/category-earphones/desktop/image-yx1-earphones.jpg"/>
               <source media="min-width: 600px" srcSet="/assets/category-earphones/tablet/image-category-thumbnail-earphones.png"/>
            <img className="productImage" src="/assets/category-earphones/desktop/image-yx1-earphones.jpg" alt="" />
            </picture>
            <span className="categoryName">EARPHONES</span>
            <Link className="btnDarkGrey" href="/earphones">SHOP <Image className="arrow" width={8} height={12} src="/assets/shared/desktop/icon-arrow-right.svg" alt="" /></Link> 
         </div>
      </div>
   )
}