"use client"
import Cart from './cart';
import Button from './links';
import Image from "next/image"
import { useState, useEffect } from "react"
import { useCart } from "../context/cartContext";


export default function Header() {
   const [isCartOpen, setIsCartOpen] = useState(false);
   const {cartItems} = useCart()

   // checking mobile size to display dropdown component 
   function useIsMobile(breakpoint = 768) {
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

   function DesktopLinks() {
      return (
         <>
         <Image className='logo' width={143} height={25} src="/assets/shared/desktop/logo.svg" alt='' />
         <div className='desktopLinks'>
            <ul>
               <Button className='HomeLink' path='/'>Home</Button>
               <Button className='headphonesLink' path='/headphones'>Headphones</Button>
               <Button className='speakersLink' path='/speakers'>Speakers</Button>
               <Button className='earphonesLink' path='/earphones'>Earphones</Button>
            </ul>
         </div>
         </>
      )
   }

   function MobileLinks() {
      return (
         <>
         <div className="mobileLinks">
            <div className="dropdownMenu">
               <input type="checkbox" className='toggleButton' id='toggle' />
               <label htmlFor="toggle" className='hamburger'>
                  <div className='top'></div>
                  <div className='mid'></div>
                  <div className='bot'></div>
               </label>

               <div className="menu">
                  <Button className='HomeLink' path='/'>Home</Button>
                  <Button className='headphonesLink' path='/headphones'>Headphones</Button>
                  <Button className='speakersLink' path='/speakers'>Speakers</Button>
                  <Button className='earphonesLink' path='/earphones'>Earphones</Button>
               </div>
            </div>
         </div>
         <Image className='logo' width={143} height={25} src="/assets/shared/desktop/logo.svg" alt='' />
         </>
      )
   }

   return (
      <>
      <header>
         <nav>
            {isMobile ? <MobileLinks /> : <DesktopLinks />}
            <button onClick={() => setIsCartOpen(prev => !prev)} className="cartIconButton">
               <Image width={23} height={20} src="/assets/shared/desktop/icon-cart.svg" alt='' />
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