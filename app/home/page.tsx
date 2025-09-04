import Description from "../components/description"
import Category from "../components/categories"
import Button from "../components/links";

export default function Home() {
   return (
      <div className="homePage">
         <div className="heroContainer">
            <picture>
               <source media="(min-width: 1024px)" srcSet="/assets/home/desktop/image-hero.webp" />
               <source media="(min-width: 600px)" srcSet="/assets/home/tablet/image-hero.webp" />
               <img className="background" src="/assets/home/mobile/image-hero.webp" alt="Hero banner for homepage"  loading="eager" decoding="async" data-fetchpriority="high"/>
            </picture>
            <div className="hero">
               <span>NEW PRODUCT</span>
               <h1>XX99 MARK II <strong>HEADPHONE</strong></h1>
               <p>
                  Experience natural, lifelike audio and exceptional build quality
                  made for the passionate music enthusiast.
               </p>
               <Button className="btnOrange" path="/products/xx99-mark-two-headphones">
                  SEE PRODUCT
               </Button>
            </div>
         </div>
         <Category />
         <div className="featuredProducts">
            <div className="ZX9-Product">
               <picture>
                  <source media="(min-width: 1024px)" srcSet="/assets/home/desktop/image-speaker-zx9.webp" />
                  <source media="(min-width: 600px)" srcSet="/assets/home/tablet/image-speaker-zx9.webp" />
                  <img className="image" src="/assets/home/mobile/image-speaker-zx9.webp" alt="" loading="lazy" decoding="async" />
               </picture>
               <div className="details">
                  <h2>ZX9 SPEAKER</h2>
                  <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                  <Button className="btnBlack" path="/products/zx9-speaker">
                     SEE PRODUCT
                  </Button>
               </div>
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
               <div className="imgContainer">
                  <picture>
                     <source media="(min-width: 1024px)" srcSet="/assets/home/desktop/image-earphones-yx1.webp" />
                     <source media="(min-width: 600px)" srcSet="/assets/home/tablet/image-earphones-yx1.webp" />
                     <img className="productIamge" src="/assets/home/mobile/image-earphones-yx1.webp" alt="" loading="lazy" decoding="async" />
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