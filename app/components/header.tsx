"use client"
import Cart from './cart';
import Link from "./links";
import Image from "next/image";
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

      if (isMobile) {
         document.addEventListener("mousedown", handleOutsideClick);
      }

      return () => {
         document.removeEventListener("mousedown", handleOutsideClick)
      }
   }, [isMobile])

   function DesktopLinks() {
      return (
         <>
         <Image className='logo' width={143} height={25} src="/assets/shared/desktop/logo.svg" alt='Audiophile Logo' loading="eager"/>
         <div className='desktopLinks'>
            <ul>
               <Link className='HomeLink' path='/'>Home</Link>
               <Link className='headphonesLink' path='/headphones'>Headphones</Link>
               <Link className='speakersLink' path='/speakers'>Speakers</Link>
               <Link className='earphonesLink' path='/earphones'>Earphones</Link>
            </ul>
         </div>
         </>
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

               <div className="menu">
                  <Link path='/'  className='HomeLink' >Home</Link>
                  <Link path='/headphones'  className='headphonesLink'>Headphones</Link>
                  <Link path='/speakers'  className='speakersLink'>Speakers</Link>
                  <Link path='/earphones'  className='earphonesLink'>Earphones</Link>
               </div>
            </div>
         </div>
         <Image className='logo' width={143} height={25} src="/assets/shared/desktop/logo.svg" alt='Audiophile Logo' loading="eager" />
         </>
      )
   }

   return (
      <>
      <header>
         <nav>
            {isMobile ? <MobileLinks /> : <DesktopLinks />}
            <button onClick={() => setIsCartOpen(prev => !prev)} className="cartIconButton">
               <Image width={23} height={20} src="/assets/shared/desktop/icon-cart.svg" alt='Cart Icon' />
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