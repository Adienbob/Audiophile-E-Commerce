"use client"
import Cart from './cart';
import Link from "./links";
import Image from "next/image";
import Dropdown from "./categories";
import { useState, useEffect, useRef } from "react";
import { useCart } from "../context/cartContext";


export default function Header() {
   const [isCartOpen, setIsCartOpen] = useState(false);
   const {cartItems} = useCart()

   // checking mobile size to display dropdown component 
   function useIsMobile(breakpoint = 1023) {
      const [isMobile, setIsMobile] = useState(false); 
      
      useEffect(() => {
         const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
         handleResize();
         
         window.addEventListener("resize", handleResize)
         return () => window.removeEventListener('resize', handleResize);
      }, [breakpoint])
      return (isMobile)
   }

   const isMobile = useIsMobile();

   const dropdownRef = useRef<HTMLDivElement | null>(null);
   
   useEffect(() => {
      function handleOutsideClick(event: globalThis.MouseEvent) {
         if(dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            const input = dropdownRef.current.querySelector("input");
            if (input) {
               input.checked = false;
            }
         }
      }
      function handleBodyLock() {
         const input = dropdownRef.current?.querySelector("input");
            if (input) {
               if (input.checked) {
                  document.body.classList.add("bodyLock");
               } else {
                  document.body.classList.remove("bodyLock");
               }
         }
      }

      if (isMobile) {
         document.addEventListener("mousedown", handleOutsideClick);
         document.addEventListener("click", handleBodyLock)
      }

      return () => {
         document.removeEventListener("mousedown", handleOutsideClick)
         document.removeEventListener("click", handleBodyLock)
      }
   }, [isMobile])

   function DesktopLinks() {
      return (
         <ul className="desktopLinks">
            <li>
               <Link className='HomeLink' path='/'>Home</Link>
            </li>
            <li>
               <Link className='headphonesLink' path='/headphones'>Headphones</Link>
            </li>
            <li>
               <Link className='speakersLink' path='/speakers'>Speakers</Link>
            </li>
            <li>
               <Link className='earphonesLink' path='/earphones'>Earphones</Link>
            </li>
         </ul>
      )
   }

   function MobileLinks() {
      return (
         <>
         <div className="mobileLinks">
            <div className="dropdownMenu" ref={dropdownRef}>
               <input type="checkbox" className='toggleButton' id='toggle'  />
               <label htmlFor="toggle" className='hamburger'>
                  <div className='top'></div>
                  <div className='mid'></div>
                  <div className='bot'></div>
               </label>

               <Dropdown />
            </div>
         </div>
         </>
      )
   }

   return (
      <>
      <header>
         <nav>
            <MobileLinks />
            <Image className='logo' width={143} height={25} src="/assets/shared/desktop/logo.svg" alt='Audiophile Logo' loading="eager"/>
            <DesktopLinks />
            <button onClick={() => setIsCartOpen(prev => !prev)} aria-label='Cart button' className="cartIconButton">
               <Image width={23} height={20} src="/assets/shared/desktop/icon-cart.svg" alt='Cart Icon' loading='eager' />
               {cartItems.length >= 1 && (
                  <p>{cartItems.length}</p>
               )}
            </button>
         </nav>
      </header>
      {isCartOpen && (
         <aside className="cartOverlay">
            <Cart cartState={isCartOpen} setCartState={setIsCartOpen} />
         </aside>
      )}
      </>
   )
}