"use client"

import Product from "../components/product";
import { useData } from "../context/dataContext";
import Category from "../components/categories"
import Description from "../components/description";


export default function Earphones() {
   
   const data = useData().filter((product) => product.category === "earphones");

   return (
      <main className="earphonesPage">
         <h1>EARPHONES</h1>
         <section className="productsContainer">
            {data.map((product, index) => (
               <Product 
                  key={product.id}
                  isNew={product.new} 
                  name={product.name} 
                  description={product.description} 
                  desktopSrc={product.preview.desktop}
                  tabletSrc={product.preview.tablet}
                  mobileSrc={product.preview.mobile}
                  slug={product.slug}
                  index={index}
               />
            ))
            }
         </section>
         <Category />
         <Description />
      </main>
   )
}