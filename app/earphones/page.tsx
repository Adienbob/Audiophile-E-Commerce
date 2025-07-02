"use client"

import Product from "../components/product";
import { useData } from "../context/dataContext";
import Category from "../components/categories"
import Descrbtion from "../components/description";


export default function Earphones() {
   
   const data = useData().filter((product) => product.category === "earphones");

   return (
      <div className="earphonesPage">
         <h1>EARPHONES</h1>
         {data.map((product, index) => (
            <Product 
               key={product.id}
               isNew={product.new} 
               name={product.name} 
               description={product.description} 
               desktopSrc={product.image.desktop}
               tabletSrc={product.image.tablet}
               mobileSrc={product.image.mobile}
               slug={product.slug}
               index={index}
            />
         ))
         }
         <Category />
         <Descrbtion />
      </div>
   )
}