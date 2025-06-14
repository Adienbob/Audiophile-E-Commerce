"use client"

import Image from "next/image"
import Link from "next/link"

export default function Category() {

   return (
      <div className="categoriesContainer">
         <div className="headphones">
            <picture>
               <source media="min-width: 1025" srcSet="/assets/category-headphones/desktop/image-category-thumbnail-headphones.png"/>
               <source media="min-width: 769" srcSet="/assets/category-headphones/tablet/image-category-thumbnail-headphones.png"/>
            <Image width={50} height={50} src="/assets/category-headphones/mobile/image-category-thumbnail-headphones.png" alt="" />
            </picture>
            <span className="categoryName">HEADPHONES</span>
            <Link href="/headphones">shop <span className="arrow"></span></Link> 
         </div>
         <div className="speakers">
            <picture>
               <source media="min-width: 1025" srcSet="/assets/category-speakers/desktop/image-category-thumbnail-speakers.png"/>
               <source media="min-width: 769" srcSet="/assets/category-speakers/tablet/image-category-thumbnail-speakers.png"/>
            <Image width={50} height={50} src="/assets/category-speakers/mobile/image-category-thumbnail-speakers.png" alt="" />
            </picture>
            <span className="categoryName">SPEAKERS</span>
            <Link href="/speakers">shop <span className="arrow"></span></Link> 
         </div>
         <div className="earphones">
            <picture>
               <source media="min-width: 1025" srcSet="/assets/category-earphones/desktop/image-yx1-earphones.jpg"/>
               <source media="min-width: 769" srcSet="/assets/category-earphones/tablet/image-category-thumbnail-earphones.png"/>
            <Image width={50} height={50} src="/assets/category-earphones/desktop/image-yx1-earphones.jpg" alt="" />
            </picture>
            <span className="categoryName">EARPHONES</span>
            <Link href="/earphones">shop <span className="arrow"></span></Link> 
         </div>
      </div>
   )
}