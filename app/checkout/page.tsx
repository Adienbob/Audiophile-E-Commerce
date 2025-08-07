"use client"
import Image from "next/image"
import { useState } from "react"
import { useCart } from "../context/cartContext";
import { useData } from "../context/dataContext";
import Confirmation from "../components/confirmation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function Checkout() {
   const [payment, setPayment] = useState("")
   const products = useData();
   const router = useRouter();
   const {cartItems} = useCart();
   const [isCheckout, updateIsCheckout] = useState(false);

   
   useEffect(() => {
      if (isCheckout) {
         document.body.style.overflow = "hidden"; 
      } else {
         document.body.style.overflow = ""
      }

      return () => {
         document.body.style.overflow = ""
      }
   }, [isCheckout])
   

   const total = cartItems.reduce((acc, item) => {
      const product = products.find((p) => p.id === item.id)
      if(!product) return acc;
      return acc + product.price * item.quantity;
   },0)

   function CashDescription() {
      return (
         <div className="cashDescription">
            <Image width={48} height={48} src="/assets/checkout/icon-cash-on-delivery.svg" alt=""  />
            <p>The &apos;Cash on Delivery&apos; option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
         </div>
      )
   }

   function EMoneyDescription() {
      return (
         <div className="emoneyDescription">
            <label htmlFor="eMoneyNumber">e-Money Number</label>
            <input type="number" id="eMoneyNumber" placeholder="238521993"/>
            <label htmlFor="eMoneyPin">e-Money PIN</label>
            <input type="number" id="eMoneyPin" placeholder="6891"/>
         </div>
      )
   }

   return (
      <div className="checkoutPage">
         <button className="backBtn" onClick={() => router.back}>Go Back</button>
         <div className="checkoutContainer">
            <section className="checkout">
               <h1>CHECKOUT</h1>
               <span>BILLING DETAILS</span>
               <label htmlFor="name">Name</label>
               <input type="text" id="name" placeholder="Alexei Ward"/>
               <label htmlFor="email">Email Address</label>
               <input type="email" id="email" placeholder="alexi@mail.com"/>
               <label htmlFor="phoneNumber">Phone Number</label>
               <input type="number" id="phoneNumber" placeholder="+1 202-555-0136"/>

               <span>SHIPPTING INFO</span>
               <label htmlFor="address">Your Address</label>
               <input type="text" id="address" placeholder="1137 Williams Avenue"/>
               <label htmlFor="zipCode">ZIP Code</label>
               <input type="text" id="zipCode" placeholder="1001"/>
               <label htmlFor="city">City</label>
               <input type="text" id="city" placeholder="New York"/>
               <label htmlFor="country">Country</label>
               <input type="text" id="country" placeholder="United States"/>
               <span>PAYMENT DETAILS</span>
               <div className="paymentContainer">
                  <div className="payment">
                     <strong>Payment Method</strong>
                     <div className="paymentMethod">
                        <input type="radio" name="payment" id="eMoney" onClick={() => setPayment("eMoney")} />
                        <label htmlFor="eMoney">e-Money</label>
                     </div>
                     <div className="paymentMethod">
                        <input type="radio" name="payment" id="cash" onClick={() => setPayment("cash")} />
                        <label htmlFor="cash">Cash on Delivery</label>
                     </div>
                  </div>
               </div>
               <div className="paymentDescription">
                  {payment === "eMoney" ? <EMoneyDescription /> : <CashDescription />}
               </div>
            </section>
            <section className="summary">
               <h2>SUMMARY</h2>
               {cartItems.map((item) => {
                  const product = products.find((p) => p.id === item.id) 
                  if (!product) return null;
                  return (
                     <div key={product.id} className="product">
                        <div className="detailsContainer">
                           <picture>
                              <source media="(min-width: 1025)" srcSet={product.image.desktop} />
                              <source media="(min-width: 600)" srcSet={product.image.tablet} />
                              <img src={product.image.mobile} alt="" />
                           </picture>
                           <div className="details">
                              <span className="name">{product.name.split(" ", 1)}</span>
                              <p>$ {product.price.toLocaleString()}</p>
                           </div>
                        </div>
                        <p>x{item.quantity}</p>
                     </div>
                  )
               })}
               <div className="totalPrice">
                  <p>TOTAL</p>
                  <span>$ {total.toLocaleString()}</span>
               </div>
               <div className="shipping">
                  <p>SHIPPING</p>
                  <span>$ 50</span>
               </div>
               <div className="vat">
                  <p>VAT(INCLUDED)</p>
                  <span>$ {(total / 5).toLocaleString()}</span>
               </div>
               <div className="grandTotal">
                  <p>GRAND TOTAL</p>
                  <span>$ {(total + 50).toLocaleString()}</span>
               </div>
               <button className="btnOrange" onClick={() => updateIsCheckout(true)}>CONTINUE & PAY</button>
            </section>
            {isCheckout && <Confirmation total={total + 50} />}
         </div>
      </div>
   )
}