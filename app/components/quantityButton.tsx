"use client"

type QuantityTypes = {
   id: number;
   quantity: number;
   increment: (id: number) => void
   decrement: (id: number) => void
}
export default function QuantityButton({quantity, id, decrement, increment}: QuantityTypes) {

   return (
      <div className="quantityButton">
         <button onClick={() => increment(id)} className="incrementButton">+</button>
         <span className="quantity">{quantity}</span>
         <button onClick={() => decrement(id)} className="decrementButton">-</button>
      </div>
   )
}