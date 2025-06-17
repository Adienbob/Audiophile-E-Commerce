"use client"

import Product from "../components/product";
import { useData } from "../context/dataContext";
import Category from "../components/categories"
import Descrbtion from "../components/description";

export default function Headphones() {
   
   const data = useData().filter((product) => product.category === "speakers");

   return (
      <div className="speakerPage">
         <h1><span>SPEAKER</span></h1>
         {data.map((product) => (
            <Product 
               key={product.id}
               isNew={product.new} 
               name={product.name} 
               description={product.description} 
               desktopSrc={product.image.desktop}
               tabletSrc={product.image.tablet}
               mobileSrc={product.image.mobile}
               slug={product.slug}
            />
         ))
         }
         <Category />
         <Descrbtion />
      </div>
   )
}