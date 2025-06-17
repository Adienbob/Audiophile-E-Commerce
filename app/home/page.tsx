import Image from "next/image"
import Description from "../components/description"
import Category from "../components/categories"
import Button from "../components/links";

export default function Home() {
   return (
      <div className="homePage">
         <div className="hero">
            <picture>
               <source media="(min-width: 1025)" srcSet="/assets/home/desktop/image-hero.jpg" />
               <source media="(min-width: 769)" srcSet="/assets/home/tablet/image-hero.jpg" />
               <Image width={50} height={50} src="/assets/home/mobile/image-hero.jpg" alt=""  />
            </picture>
            <span>new product</span>
            <h1>XX99 Mark II Headphones</h1>
            <p>
               Experience natural, lifelike audio and exceptional build quality
               made for the passionate music enthusiast.
            </p>
            <Button path="/products/xx99-mark-two-headphones">
               <button>SEE PRODUCT</button>
            </Button>
         </div>
         <Category />
         <div className="FeaturedProducts">
            <div className="ZX9-Product">
               <div className="details">
                  <picture>
                     <source srcSet="/assets/home/desktop/image-speaker-zx9.png" />
                     <source srcSet="/assets/home/tablet/image-speaker-zx9.png" />
                     <Image className="ItemImage" width={100} height={100} src="/assets/home/mobile/image-speaker-zx9.png" alt="" />
                  </picture>
                  <h2>ZX9 SPEAKER</h2>
                  <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                  <Button path="/products/zx9-speaker">
                     <button>SEE PRODUCT</button>
                  </Button>
               </div>
            </div>
            <div className="ZX7-Product">
               <picture>
                  <source srcSet="/assets/home/desktop/image-speaker-zx7.jpg" />
                  <source srcSet="/assets/home/tablet/image-speaker-zx7.jpg" />
                  <Image className="ItemImage" width={100} height={100} src="/assets/home/mobile/image-speaker-zx7.jpg" alt="" />
               </picture>
               <div className="details">
                  <h2>ZX7 SPEAKER</h2>
                  <Button path="/products/zx7-speaker">
                     <button>SEE PRODUCT</button>
                  </Button>
               </div>
            </div>
            <div className="YX1-Product">
               <div className="ImageContainer">
                  <picture>
                     <source srcSet="/assets/home/desktop/image-earphones-yx1.jpg" />
                     <source srcSet="/assets/home/tablet/image-earphones-yx1.jpg" />
                     <Image className="ItemImage" width={100} height={100} src="/assets/home/mobile/image-earphones-yx1.jpg" alt="" />
                  </picture>
               </div>
               <div className="details">
                  <h2>YX1 EARPHONES</h2>
                  <Button path="/products/yx1-earphones">
                     <button>SEE PRODUCT</button>
                  </Button>
               </div>
            </div>
         </div>
         <Description />
      </div>
   )
}