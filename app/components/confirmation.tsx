import Link from "next/link"
import Image from "next/image"
import { useCart } from "../context/cartContext";
import { useData } from "../context/dataContext";
import { useState } from "react"

type confirmationProps = {
   total: number;
}

export default function Confirmation({total}: confirmationProps) {
   const [signleProduct, setSignleProduct] = useState(true)
   const products = useData();
   const {cartItems, clearCart} = useCart();
   
   function SigleProduct() {
      const product = products.find(p => p.id === cartItems[0].id)
      if (!product) return null;
      return (
         <div className="item">
            <div className="details">
               <picture>
                  <source media="(min-width:1024px)" srcSet={product.image.desktop} />
                  <source media="(min-width:768px)" srcSet={product.image.tablet} />
                  <Image width={50} height={50} src={product.image.mobile} alt={product.name} />
               </picture>
               <div className="itemDetails">
                  <span>{product.name.split(" ", 1)}</span>
                  <p>$ {product.price.toLocaleString()}</p>
               </div>
            </div>
            <p className="quantity">x{cartItems[0].quantity}</p>
         </div>
      )
   }  

   function AllProducts() {
      return (
         <>
            {
               cartItems.map((item) => {
            const product = products.find(p => p.id === item.id);
            if (!product) return null;
            return (
               <div key={product.id} className="item">
                  <div className="details">
                     <picture>
                        <source media="(min-width:1024px)" srcSet={product.image.desktop} />
                        <source media="(min-width:768px)" srcSet={product.image.tablet} />
                        <img src={product.image.mobile} alt="" />
                     </picture>
                     <div className="itemDetails">
                        <span>{product.name.split(" ", 1)}</span>
                        <p>$ {product.price.toLocaleString()}</p>
                     </div>
                  </div>
                  <p className="quantity">x{item.quantity}</p>
               </div>
            )
         })
      }
      <hr />
         </>
      )
   }
   return (
      <div className="confirmationOverlay">
         <div className="confirmation">
            <Image className="icon" width={64} height={64} src="/assets/checkout/icon-order-confirmation.svg" alt=""  />
            <h3>THANK YOU <br /> FOR YOUR ORDER</h3>
            <p>You will receive an email confirmation shortly.</p>
            <div className="details">
               <div className="items">
               {cartItems.length === 0 ? (
                  <div className="cartEmpty">
                     <span>Your Cart Is empty</span>
                     <p>Continue shopping on the audiophile website.</p>
                  </div>
               ) : signleProduct ? <SigleProduct/> : <AllProducts/> }
               {cartItems.length > 1 ? <button onClick={() => setSignleProduct(!signleProduct)}>{signleProduct ? `and ${cartItems.length - 1} other item(s)` : "View less"}</button> : ""}
               </div>
            <div className="grandTotal">
               <p>GRAND TOTAL</p>
               <span>$ {total.toLocaleString()}</span>
            </div>
            <Link href="/" onClick={clearCart} className="btnOrange">BACK TO HOME</Link>
         </div>
      </div>
   </div>
   )
}