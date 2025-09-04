"use client";

import { use } from "react";
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
                  <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
                  <source media="(min-width: 600px)" srcSet={product.image.tablet} />
                  <img src={product.image.desktop} alt="" loading="lazy" decoding="async" />
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
            <div className="first">
               <picture>
                  <source media="(min-width: 1024px)" srcSet={product.gallery.first.desktop} />
                  <source media="(min-width: 600px)" srcSet={product.gallery.first.tablet} />
                  <img src={product.gallery.first.mobile} alt="" loading="lazy" decoding="async" />
               </picture>
            </div>
            <div className="second">
               <picture>
                  <source media="(min-width: 1024px)" srcSet={product.gallery.second.desktop} />
                  <source media="(min-width: 600px)" srcSet={product.gallery.second.tablet} />
                  <img src={product.gallery.second.mobile} alt="" loading="lazy" decoding="async" />
               </picture>
            </div>
            <div className="third">
               <picture>
                  <source media="(min-width: 1024px)" srcSet={product.gallery.third.desktop} />
                  <source media="(min-width: 600px)" srcSet={product.gallery.third.tablet} />
                  <img src={product.gallery.third.mobile} alt="" loading="lazy" decoding="async" />
               </picture>
            </div>
         </div>
         <div className="suggestedProducts">
            <h4>YOU MAY ALSO LIKE</h4>
            <div className="items">
               {product.others.map((item) => (
                  <div key={item.name} className="item">
                     <picture>
                        <source media="(min-width: 1024px)" srcSet={item.image.desktop} />
                        <source media="(min-width: 600px)" srcSet={item.image.tablet} />
                        <img src={item.image.mobile} alt="" loading="lazy" decoding="async" />
                     </picture>
                     <h5>{item.name}</h5>
                     <Button className="btnOrange" path={`/products/${item.slug}`}>SEE PRODUCT</Button>
                  </div>
               ))}
            </div>
         </div>
         <Category />
         <Description />
      </div>
   )
}