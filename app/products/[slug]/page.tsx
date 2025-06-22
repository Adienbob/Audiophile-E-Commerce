"use client";

import { use } from "react";
import Image from "next/image";
import Button from "../../components/links";
import Category from "../../components/categories";
import { useCart } from "@/app/context/cartContext";
import { useData } from "../../context/dataContext";
import Description from "../../components/description";
import QuantityButton from "../../components/productBtn";

export default function ProductInner({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = use(params);
   const product = (useData().find((item) => item.slug === slug))
   const {increment, decrement, getQuantity} = useCart()
   if (!product) return <div>Product Not Found</div>;
   
   return (
      <div className="productInner">
            <Button path={`/${product.category}`}>
               <button>
                  Go Back
               </button>
            </Button>
         <section className="productDetails">
            <div className="imageContainer">
               <picture>
                  <source media="(min-width: 1025)" srcSet={product.image.desktop} />
                  <source media="(min-width: 769)" srcSet={product.image.tablet} />
                  <Image width={100} height={100} src={product.image.desktop} alt="" />
               </picture>
            </div>
            <div className="details">
               <h1>{product.name}</h1>
               <p>{product.description}</p>
               <strong>$<span>{product.price}</span></strong>
               <QuantityButton id={product.id} quantity={getQuantity(product.id)} increment={increment} decrement={decrement} />
               {/* Add to cart Button */}
            </div>
         </section>
         <article>
            <div className="productFeatures">
               <h2>FEATURES</h2>
               <p>{product.features}</p>
            </div>
            <div className="productInclaudes">
               <h3>IN THE BOX</h3>
               <div className="featuredItems">
                  {product.includes.map((item) => (
                     <span key={item.item} className="itemQuanitiy">{item.quantity}x <p>{item.item}</p></span>
                  ))}
               </div>
            </div>
            {/* <Image height={50} width={50} src={product.others[2].image.tablet} alt="" />  */}
         </article>
         <div className="productGallary">
            <picture>
               <source media="(min-width: 1025)" srcSet={product.gallery.first.desktop} />
               <source media="(min-width: 769)" srcSet={product.gallery.first.tablet} />
               <Image height={50} width={50} src={product.gallery.first.mobile} alt="" />
            </picture>
            <picture>
               <source media="(min-width: 1025)" srcSet={product.gallery.second.desktop} />
               <source media="(min-width: 769)" srcSet={product.gallery.second.tablet} />
               <Image height={50} width={50} src={product.gallery.second.mobile} alt="" />
            </picture>
            <picture>
               <source media="(min-width: 1025)" srcSet={product.gallery.third.desktop} />
               <source media="(min-width: 769)" srcSet={product.gallery.third.tablet} />
               <Image height={50} width={50} src={product.gallery.third.mobile} alt="" />
            </picture>
         </div>
         <div className="suggestedProducts">
            <h3>YOU MAY ALSO LIKE</h3>
            <div className="items">
               {product.others.map((item) => (
                  <div key={item.name} className="item">
                     
                     <picture>
                        <source media="(min-width: 1025)" srcSet={item.image.desktop} />
                        <source media="(min-width: 769)" srcSet={item.image.tablet} />
                     <Image height={50} width={50} src={item.image.mobile} alt="" />
                     </picture>
                     <h4>{item.name}</h4>
                     {/* SEE PRODUCT Button */}
                  </div>
               ))}
            </div>
         </div>
         <Category />
         <Description />
      </div>
   )
}