"use client"
import Cart from './cart';
import Button from './links';
import { useState, useEffect } from "react"
import { useCart } from "../context/cartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';


export default function Header() {
   const [isCartOpen, setIsCartOpen] = useState(false);
   const {cartItems} = useCart()
   console.log(cartItems);

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
         <div className='desktopLinks'>
            <span>Audiophile</span>
            <ul>
               <Button className='HomeLink' path='/'>Home</Button>
               <Button className='headphonesLink' path='/headphones'>Headphones</Button>
               <Button className='speakersLink' path='/speakers'>Speakers</Button>
               <Button className='earphonesLink' path='/earphones'>Earphones</Button>
            </ul>
         </div>
      )
   }

   function MobileLinks() {
      return (
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
            <span>Audiophile</span>
         </div>
      )
   }

   return (
      <>
      <header>
         <nav>
            {isMobile ? <MobileLinks /> : <DesktopLinks />}
            <button onClick={() => setIsCartOpen(prev => !prev)} className="cartIconButton">
               <FontAwesomeIcon icon={faCartShopping}/>
               {cartItems.length >= 1 && (
                  <p>{cartItems.length}</p>
               )}
            </button>
         </nav>
      </header>
      {isCartOpen && (
         <aside className="cartOverlay">
            <Cart />
            <button onClick={() => setIsCartOpen(false)} className="closeCartBtn">Close</button>
         </aside>
      )}
      </>
   )
}