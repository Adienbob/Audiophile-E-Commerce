"use client";

import { use } from "react";
import Image from "next/image";
import Button from "../../components/links";
import Category from "../../components/categories";
import { useData } from "../../context/dataContext";
import Description from "../../components/description";
import QuantityButton from "../../components/productBtn";

export default function ProductInner({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = use(params);
   const product = (useData().find((item) => item.slug === slug))
   if (!product) return <div>Product Not Found</div>;
   
   return (
      <div className="productInner">
            <Button className="backBtn" path={`/${product.category}`}>
               Go Back
            </Button>
         <section className="productDetails">
            <div className="imageContainer">
               <picture>
                  <source media="(min-width: 1025)" srcSet={product.image.desktop} />
                  <source media="(min-width: 769)" srcSet={product.image.tablet} />
                  <Image width={654} height={654} src={product.image.desktop} alt="" />
               </picture>
            </div>
            <div className="details">
               {product.new ? <span className="newProduct">NEW PRODUCT</span> : ""}
               <h1>{product.name}</h1>
               <p>{product.description}</p>
               <strong className="price">$<span>{product.price.toLocaleString()}</span></strong>
               <QuantityButton id={product.id}/>
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
         </article>
         <div className="productGallary">
            <picture>
               <source media="(min-width: 1025)" srcSet={product.gallery.first.desktop} />
               <source media="(min-width: 769)" srcSet={product.gallery.first.tablet} />
               <Image height={654} width={654} src={product.gallery.first.mobile} alt="" quality={100} />
            </picture>
            <picture>
               <source media="(min-width: 1025)" srcSet={product.gallery.second.desktop} />
               <source media="(min-width: 769)" srcSet={product.gallery.second.tablet} />
               <Image height={654} width={654} src={product.gallery.second.mobile} alt="" quality={100} />
            </picture>
            <picture>
               <source media="(min-width: 1025)" srcSet={product.gallery.third.desktop} />
               <source media="(min-width: 769)" srcSet={product.gallery.third.tablet} />
               <Image height={654} width={654} src={product.gallery.third.mobile} alt="" quality={100} />
            </picture>
         </div>
         <div className="suggestedProducts">
            <h3>YOU MAY ALSO LIKE</h3>
            {product.others.map((item) => (
               <div key={item.name} className="item">
                  <picture>
                     <source media="(min-width: 1025)" srcSet={item.image.desktop} />
                     <source media="(min-width: 769)" srcSet={item.image.tablet} />
                  <Image height={654} width={654} src={item.image.mobile} alt="" quality={100} />
                  </picture>
                  <h4>{item.name}</h4>
                  <Button className="btnOrange" path={`/product/${item.slug}`}>SEE PRODUCT</Button>
               </div>
            ))}
         </div>
         <Category />
         <Description />
      </div>
   )
}