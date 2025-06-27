import Image from "next/image"
import Description from "../components/description"
import Category from "../components/categories"
import Button from "../components/links";

export default function Home() {
   return (
      <div className="homePage">
         <picture>
            <source media="(min-width: 1025)" srcSet="/assets/home/desktop/image-hero.jpg" />
            <source media="(min-width: 769)" srcSet="/assets/home/tablet/image-hero.jpg" />
            <Image className="background" width={750} height={1200} src="/assets/home/mobile/image-hero.jpg" alt=""  quality={100} />
         </picture>
         <div className="hero">
            <span>NEW PRODUCT</span>
            <h1>XX99 MARK II HEADPHONES</h1>
            <p>
               Experience natural, lifelike audio and exceptional build quality
               made for the passionate music enthusiast.
            </p>
            <Button className="btnOrange" path="/products/xx99-mark-two-headphones">
               SEE PRODUCT
            </Button>
         </div>
         <Category />
         <div className="featuredProducts">
            <div className="ZX9-Product">
               <picture>
                  <source srcSet="/assets/home/desktop/image-speaker-zx9.png" />
                  <source srcSet="/assets/home/tablet/image-speaker-zx9.png" />
                  <Image className="productIamge" width={320} height={388} src="/assets/home/mobile/image-speaker-zx9.png" alt="" />
               </picture>
               <Image className="circles" width={944} height={944} src="/assets/home/desktop/pattern-circles.svg" alt="" quality={100} />
               <h2>ZX9 <br /> SPEAKER</h2>
               <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
               <Button className="btnBlack" path="/products/zx9-speaker">
                  SEE PRODUCT
               </Button>
            </div>
            <div className="ZX7-Product">
               <div className="details">
                  <h2>ZX7 SPEAKER</h2>
                  <Button className="btnTransparent" path="/products/zx7-speaker">
                     SEE PRODUCT
                  </Button>
               </div>
            </div>
            <div className="YX1-Product">
               <div className="ImageContainer">
                  <picture>
                     <source srcSet="/assets/home/desktop/image-earphones-yx1.jpg" />
                     <source srcSet="/assets/home/tablet/image-earphones-yx1.jpg" />
                     <Image className="productIamge" width={654} height={400} src="/assets/home/mobile/image-earphones-yx1.jpg" alt="" />
                  </picture>
               </div>
               <div className="details">
                  <h2>YX1 EARPHONES</h2>
                  <Button className="btnTransparent" path="/products/yx1-earphones">
                     SEE PRODUCT
                  </Button>
               </div>
            </div>
         </div>
         <Description />
      </div>
   )
}