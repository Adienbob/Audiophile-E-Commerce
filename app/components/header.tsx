"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react"
import Button from './links';

export default function Header() {
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
            <div className="collapse" id="navbarToggleExternalContent9">
               <div className="bg-body-tertiary shadow-3 p-4">
               <button data-mdb-button-init data-mdb-ripple-init
                  className="btn btn-link btn-block border-bottom m-0">Link 1</button>
               <button data-mdb-button-init data-mdb-ripple-init
                  className="btn btn-link btn-block border-bottom m-0">Link 2</button>
               <button data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-block m-0">Link
                  3</button>
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
            <button>
               <FontAwesomeIcon icon={faCartShopping}/>
            </button>
         </nav>
      </header>
      </>
   )
}