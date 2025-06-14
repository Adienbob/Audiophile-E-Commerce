import Image from "next/image"
import Description from "../components/description"
import Category from "../components/categories"
import Button from "../components/links";

export default function Home() {
   return (
      <div className="homePage">
         <div className="home">
            <span>new product</span>
            <h1>XX99 Mark II Headphones</h1>
            <p>
               Experience natural, lifelike audio and exceptional build quality
               made for the passionate music enthusiast.
            </p>
            {/* <Button path="" /> */}
         </div>
         <Category />
         <div className="FeaturedProducts">
            <div className="ZX9-Product">
               <div className="details">
                  <h2>ZX9 SPEAKER</h2>
                  <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                  {/* <Button path="/speakers">SEE PRODUCT</Button> */}
               </div>
            </div>
            <div className="ZX7-Product">
               <div className="details">
                  <h2>ZX7 SPEAKER</h2>
               {/* <Button path="/earphones">SEE PRODUCT</Button> */}
               </div>
            </div>
            <div className="YX1-Product">
               <div className="ImageContainer">
                  <picture>
                     <source srcSet="/assets/home/desktop/image-earphones-yx1.jpg" />
                     <source srcSet="/assets/home/tablet/image-earphones-yx1.jpg" />
                     <Image width={100} height={100} src="/assets/home/mobile/image-earphones-yx1.jpg" alt="" />
                  </picture>
               </div>
               <div className="details">
                  <h2>YX1 EARPHONES</h2>
                  {/* <Button path="/earphones">SEE PRODUCT</Button> */}
               </div>
            </div>
         </div>
         <Description />

      </div>
   )
}