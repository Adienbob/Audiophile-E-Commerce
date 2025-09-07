"use client"
import Image from "next/image"
import { useState, useEffect} from "react"
import { useCart } from "../context/cartContext";
import { useData } from "../context/dataContext";
import Confirmation from "../components/confirmation";
import { useRouter } from "next/navigation";
import {useForm} from "react-hook-form"


export default function Checkout() {
   const [payment, setPayment] = useState("")
   const products = useData();
   const router = useRouter();
   const {cartItems} = useCart();
   const [isCheckout, updateIsCheckout] = useState(false);
   const {
      register, 
      handleSubmit, 
      formState: {errors, isValid, isSubmitting},
   } = useForm({mode: "onBlur"})
   const onSubmit = (data: object) => {
      console.log(data);
   }
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
            <Image width={48} height={48} src="/assets/checkout/icon-cash-on-delivery.svg" alt="cash on delivery icon" />
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
         <form onSubmit={handleSubmit(onSubmit)} className="checkoutContainer">
            <section className="checkout">
               <h1>CHECKOUT</h1>
               <span>BILLING DETAILS</span>
               <div className="nameContainer">
                  <label htmlFor="name">Name</label>
                  <input {...register("name", {
                     required: "Name is required"
                  })} type="text" id="name" placeholder="Alexei Ward"/>
                  <span className="errorMessage">{errors.name?.message as string}</span>
               </div>
               <div className="emailContainer">
                  <label htmlFor="email">Email Address</label>
                  <input {...register("email", {
                     required: "Email is required",
                     pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Enter a valid email"
                     }
                  })} type="email" id="email" placeholder="alexi@mail.com"/>
                  <span className="errorMessage">{errors.email?.message as string}</span>
               </div>
               <div className="pnContainer">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input {...register("phoneNumber", {
                     required: "PhoneNumber is required",
                     pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: "Enter a valid phone number",
                     }
                  })} type="tel" id="phoneNumber" placeholder="+1 202-555-0136"/>
                  <span className="errorMessage">{errors.phoneNumber?.message as string}</span>
               </div>
               <span>SHIPPTING INFO</span>
               <div className="addressContainer">
                  <label htmlFor="address">Your Address</label>
                  <input {...register("address", {
                     required: "Address is required"
                  })} type="text" id="address" placeholder="1137 Williams Avenue"/>
                  <span className="errorMessage">{errors.address?.message as string}</span>
               </div>
               <div className="zipCodeContainer">
                  <label htmlFor="zipCode">ZIP Code</label>
                  <input {...register("zipCode", {
                     required: "zipCode is required",
                     pattern: {
                     value: /^[0-9]{4,10}$/, 
                     message: "Enter a valid ZIP Code",
                     },
                  })} type="text" id="zipCode" placeholder="1001"/>
                  <span className="errorMessage">{errors.zipCode?.message as string}</span>
               </div>
               <div className="cityContainer">
                  <label htmlFor="city">City</label>
                  <input {...register("city", {
                     required: "City is required"
                  })} type="text" id="city" placeholder="New York"/>
                  <span className="errorMessage">{errors.city?.message as string}</span>
               </div>
               <div className="countryContainer">
                  <label htmlFor="country">Country</label>
                  <input {...register("country", {
                     required: "Country is required"
                  })} type="text" id="country" placeholder="United States"/>
                  <span className="errorMessage">{errors.country?.message as string}</span>
               </div>
               <span>PAYMENT DETAILS</span>
               <div className="paymentContainer">
                     <strong>Payment Method</strong>
                     < div className="payment">
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
                           <Image width={150} height={150} src={`/assets/cart/image-${product.slug}.webp`} alt={product.name}  quality={100}/>
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
               <button className="btnOrange" disabled={!isValid || isSubmitting} onClick={() => updateIsCheckout(true)}>CONTINUE & PAY</button>
            </section>
            {isCheckout && <Confirmation total={total + 50} />}
         </form>
      </div>
   )
}