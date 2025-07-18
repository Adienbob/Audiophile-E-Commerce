
import Image from "next/image"
import QuantityButton from "./productBtn";
import {useEffect, useRef} from "react"
import { useCart } from "../context/cartContext";
import { useData } from "../context/dataContext";

type cartTypes = {
   cartState: boolean;
   setCartState: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Cart({cartState, setCartState}: cartTypes) {
   const cartRef = useRef<HTMLDivElement | null>(null);
   const {cartItems, clearCart} = useCart()
   const products = useData();
   const total = cartItems.reduce((acc, item) => {
      const product = products.find(p => p.id === item.id);
         return acc + (product ? product.price * item.quantity : 0);
      }, 0);

      // locks body for cart's scroll and Add mousedown event Listener
      useEffect(() => {
         function handleOutsideClick(event: MouseEvent) {
            if (cartRef.current && !cartRef.current.contains(event.target as Node))
               setCartState(false);
         }
         // Locks body for cart's scroll
         if (cartState) {
            document.body.style.overflow = "hidden";
   
         } else {
            document.body.style.overflow = "";
         }
   
         // Add mousedown event listener
         if (cartState) {
            document.addEventListener("mousedown", handleOutsideClick)
         } 
   
         // cleanup fucntion
         return () => {
            document.body.style.overflow = ''; 
            document.removeEventListener("mousedown", handleOutsideClick)
         };
      }, [cartState, setCartState])
   return (
      <div ref={cartRef} className="cartContainer">
         <div className="cartHeader">
            <span>CART({cartItems.length})</span>
            <button onClick={clearCart}>Remove all</button>
         </div>
         <div className="cartBody">
            {cartItems.length === 0 ? (
               <div className="cartEmpty">
                  <span>Your Cart Is empty</span>
                  <p>Continue shopping on the audiophile website.</p>
               </div>
            ) : cartItems.map(item => {
               const product = products.find(p => p.id === item.id);
               if (!product) return null;
               return (
                  <div key={product.id} className="cartItem">
                     <div className="productDetails">
                     <picture>
                        <source media="(min-width:1024px)" srcSet={product.image.desktop} />
                        <source media="(min-width:768px)" srcSet={product.image.tablet} />
                        <Image width={50} height={50} src={product.image.mobile} alt={product.name} />
                     </picture>
                        <div className="details">
                           <span>{product.name.split(" ", 1)}</span>
                           <p>$ {product.price.toLocaleString()}</p>
                        </div>
                     </div>
                     <QuantityButton id={product.id} />
                  </div>
               ) 
            })}
            <div className="totalPrice">
               <p>TOTAL</p>
               <span>$ {total.toLocaleString()}</span>
            </div>
            <a className="btnOrange" onClick={() => setCartState(false)} href="/checkout">CHECKOUT</a>
         </div>
      </div>
   )
}