"use client"

import Image from "next/image"
import Link from "next/link"

export default function Category() {

   return (
      <div className="categories">
         <div className="headphones">
            <Image className="productImage" src="/assets/category-headphones/mobile/image-category-thumbnail-headphones.webp" alt="Image category thumbnail earphones" width={119} height={116} />
            <span className="categoryName">HEADPHONES</span>
            <Link className="btnDarkGrey" href="/headphones">SHOP <Image className="arrow" width={8} height={12} src="/assets/shared/desktop/icon-arrow-right.svg" alt="Arrow Icon" loading="eager" decoding="async" /></Link> 
         </div>
         <div className="speakers">
            <Image className="productImage" src="/assets/category-speakers/mobile/image-category-thumbnail-speakers.webp" alt="Image category thumbnail earphones" width={119} height={116} />
            <span className="categoryName">SPEAKERS</span>
            <Link className="btnDarkGrey" href="/speakers">SHOP <Image className="arrow" width={8} height={12} src="/assets/shared/desktop/icon-arrow-right.svg" alt="Arrow Icon" loading="eager" decoding="async" /></Link> 
         </div>
         <div className="earphones">
            <Image className="productImage" src="/assets/category-earphones/mobile/image-yx1-earphones.webp" alt="Image category thumbnail earphones" width={119} height={116} />
            <span className="categoryName">EARPHONES</span>
            <Link className="btnDarkGrey" href="/earphones">SHOP <Image className="arrow" width={8} height={12} src="/assets/shared/desktop/icon-arrow-right.svg" alt="Arrow Icon" loading="eager" decoding="async" /></Link> 
         </div>
      </div>
   )
}