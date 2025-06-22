"use client"
import { useCart } from "../context/cartContext";


type QuantityTypes = {
   id: number;
}
export default function ProductButton({id}: QuantityTypes) {
   const {cartItems, increment, decrement} = useCart();
   const productInCart = cartItems.find((item) => item.id === id)

   return (
      <div className="productBtn">
         {productInCart ?  (
            <div className="quantityButton">
               <button onClick={() => decrement(id)}></button>
               <span>{productInCart?.quantity}</span>
               <button onClick={() => increment(id)}></button>
            </div>
         ) : (
            <div className="addToCart">
               <button onClick={() => increment(id)}>ADD TO CART</button>
            </div>
         )}
      </div>
   )
}