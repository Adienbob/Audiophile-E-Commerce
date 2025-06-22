import Button from "./links";
import Image from "next/image"
import { useCart } from "../context/cartContext";
import { useData } from "../context/dataContext";

type confirmationProps = {
   total: number;
   
}

export default function Confirmation({total}: confirmationProps) {
   const products = useData()
   const {cartItems} = useCart()
   const product = products.find((item) => cartItems.some((p) => p.id === item.id))
   console.log(product)
   console.log(cartItems)

   return (
      <div className="confirmation">
         <Image width={50} height={50} src="/assets/checkout/icon-order-confirmation.svg" alt=""  />
         <h3>THANK YOU FOR YOUR ORDER</h3>
         <p>You will receive an email confirmation shortly.</p>
         <div className="details">
            
            <div className="grandTotal">
               <p>GRAND TOTAL</p>
               <span>{total}</span>
            </div>
         </div>
         <Button path="/">BACK TO HOME</Button>
      </div>
   )
}