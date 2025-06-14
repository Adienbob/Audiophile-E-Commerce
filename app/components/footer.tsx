import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Button from './links';

export default function Footer() {


   return (
      <footer>
         <span>audiophile</span>
         <ul>
            <Button className='HomeLink' path='/'>Home</Button>
            <Button className='headphonesLink' path='/headphones'>Headphones</Button>
            <Button className='speakersLink' path='/speakers'>Speakers</Button>
            <Button className='earphonesLink' path='/earphones'>Earphones</Button>
         </ul>
         <p>
            Audiophile is an all in one stop to fulfill your audio needs. 
            We&apos;re a small team of music lovers and sound specialists who are 
            devoted to helping you get the most out of personal audio
            . Come and visit our demo facility - we’re open 7 days a week.
         </p>
         <strong>Copyright 2021. All Rights Reserved</strong>
         <FontAwesomeIcon icon={faFacebookF} />
         <FontAwesomeIcon icon={faInstagram} />
         <FontAwesomeIcon icon={faTwitter} />
      </footer>
   )
}