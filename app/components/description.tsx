
export default function description() {

   return (
      <div className="description">
         <picture>
            <source media="(min-width: 1024px)" srcSet="/assets/shared/desktop/image-best-gear.webp"/>
            <source media="(min-width: 600px)" srcSet="/assets/shared/tablet/image-best-gear.webp"/>
            <img src="/assets/shared/mobile/image-best-gear.webp" alt="" loading="lazy" decoding="async" />
         </picture>
         <div>
            <h3>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h3>
            <p>
               Located at the heart of New York City, Audiophile is the premier
               store for high end headphones, earphones, speakers, and audio
               accessories. We have a large showroom and luxury demonstration
               rooms available for you to browse and experience a wide range of
               our products. Stop by our store to meet some of the fantastic
               people who make Audiophile the best place to buy your portable
               audio equipment.
            </p>
         </div>
      </div>
   )
}