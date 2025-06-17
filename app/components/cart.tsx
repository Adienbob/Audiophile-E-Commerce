
import Button from "./links"
import Image from "next/image"
import QuantityButton from "./quantityButton";
import { useCart } from "../context/cartContext";
import { useData } from "../context/dataContext";


export default function Cart() {
   const {cartItems, clearCart, increment, decrement} = useCart()
   const products = useData();
   const total = cartItems.reduce((acc, item) => {
      const product = products.find(p => p.id === item.id);
         return acc + (product ? product.price * item.quantity : 0);
      }, 0);
   return (
      <div className="CartContainer">
         <div className="cartHeader">
            <span>CART({cartItems.length})</span>
            <button onClick={clearCart}>Remove all</button>
         </div>
         <div className="CartBody">
            {cartItems.length === 0 ? (
               <>
                  <span>Your Cart Is empty</span>
                  <p>Continue shopping on the audiophile website <Button path="/">homepage</Button>.</p>
               </>
            ) : cartItems.map(item => {
               const product = products.find(p => p.id === item.id);
               if (!product) return null;
               return (
                  <div key={product.id} className="cartItem">
                     <picture>
                        <source media="(min-width:1024px)" srcSet={product.image.desktop} />
                        <source media="(min-width:768px)" srcSet={product.image.tablet} />
                        <Image width={50} height={50} src={product.image.mobile} alt={product.name} />
                     </picture>
                     <div className="productDetails">
                        <span>{product.name}</span>
                        <p>${product.price}</p>
                     </div>
                     <QuantityButton quantity={item.quantity} id={product.id} increment={increment} decrement={decrement} />
                  </div>
               ) 
            })}
            <div className="totalPrice">
               <p>TOTAL</p>
               <span>${total}</span>
            </div>
         </div>
      </div>
   )
}