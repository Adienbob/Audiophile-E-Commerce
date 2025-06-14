"use client"

import Product from "../components/product";
import { useData } from "../context/dataContext";
import Category from "../components/categories"


export default function Headphones() {
   
   const data = useData().filter((product) => product.category === "headphones");
   console.log(data[0])

   return (
      <div className="headphonesPage">
         <h1><span>headphones</span></h1>
         {data.map((product) => (
            <Product 
               key={product.id}
               isNew={product.new} 
               name={product.name} 
               description={product.description} 
               desktopSrc={product.image.desktop}
               tabletSrc={product.image.tablet}
               mobileSrc={product.image.mobile}
            />
         ))
         }
         <Category />
      </div>
   )
}