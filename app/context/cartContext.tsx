
"use client"

import { error } from "console";
import { createContext, useContext, useState } from "react";

type CartItem = {
   id: number;
   quantity: number;
};

type CartContextType = {
   cartItems: CartItem[];
   addToCart: (item: CartItem) => void;
   increment: (id: number) => void;
   decrement: (id: number) => void;
   getQuantity: (id: number) => number;
   removeFromCart: (id: number) => void;
   clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
   const context = useContext(CartContext);
   if (!context) {
      throw new Error("useCart must be used within CartProvider");
   }
   return context;
}

export function CartProvider({children}: {children: React.ReactNode}) {
   const [cartItems, setCartItems] = useState<CartItem[]>([]);

   function getQuantity(id: number) {
      return cartItems.find(item => item.id === id)?.quantity || 0;
   }
   function increment(id: number) {
      setCartItems(prev => {
         if (prev.find(item => item.id === id)) {
            return prev.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
         } else {
            return [...prev, { id, quantity: 1 }];
         }
      });
   }
   function decrement(id: number) {
      setCartItems(prev => {
         return prev.flatMap(item => {
            if (item.id === id) {
            if (item.quantity === 1) {
               return []; 
            } else {
               return [{ ...item, quantity: item.quantity - 1 }];
            }
            }
            return [item];
         });
      });
   }
}
   
   

