import Image from 'next/image';
import React from 'react';
import { FaLocationDot, FaSquareFacebook, FaYoutube } from "react-icons/fa6";
import { IoIosMail, IoIosCall } from "react-icons/io";
import logo from '@/assets/images/logo-2.webp';
import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';


const Footer = () => {
  return (
    <div id='footer'>
      <div id='footer-top'>
        <div id='footer-left-adress'>
          <Image src={logo} alt='logo' width={200} />
          <div id='footer-adress-item'>
            <FaLocationDot />
            <a href="https://www.google.com/maps/place/Palinckstraat+124,+2100+Antwerpen/@51.2252312,4.4580865,16z/data=!3m1!4b1!4m6!3m5!1s0x47c3f783f4b4bded:0x8c265f9304df1002!8m2!3d51.2252279!4d4.4606614!16s%2Fg%2F11gfm4kb9_?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D">Palinckstraat 124, 2100 Deurne Antwerpen</a>
          </div>
          <div id='footer-adress-item'>
            <IoIosMail />
            <a href="mail:tomoskee.alamal@gmail.com">moskee.alamal@gmail.com</a>
          </div>
          <div id='footer-adress-item'>
            <IoIosCall />
            <a href="tel:+32488413095">+32488413095</a>
          </div>
        </div>
        <div className='footer-nav'>
          <h3><span>Diens</span>ten</h3>
          <ul>
            <li><Link href={'/onderwijs'}>Onderwijs</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li>
          </ul>
        </div>
        <div className='footer-nav'>
          <h3><span>Volg </span>ons</h3>
          <ul>
            <li>
              <FaSquareFacebook />
              <a href="https://facebook.com/ECC-De-HOOP">Facebook</a>
            </li>
            <li>
              <AiFillInstagram />
              <a href="https://www.instagram.com/moskeealamal/">Instagram</a>
            </li>
            <li>
              <FaYoutube />
              <a href="https://www.youtube.com/@eccdehoop1169/featured">Youtube</a>
            </li>
          </ul>
        </div>
        <div className='footer-nav'>
          <h3><span>Gebed</span>stijden</h3>
          <iframe src="https://mawaqit.net/nl/w/alamal-antwerpen?showOnly5PrayerTimes=0" frameBorder="0" scrolling="no" className="widget"></iframe>
        </div>
      </div>
      <div id='footer-bottom'>
        <p>Copyright &copy; 2025 ECC De Hoop. Alle rechten voorbehouden.</p>
        <div id='footer-bottom-links'>
          <Link href={'/privacybeleid'}>Privacybeleid</Link>
          <Link href={'/algemene-voorwaarden'}>Algemene voorwaarden</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;