import Image from 'next/image';
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail, IoIosCall  } from "react-icons/io";
import logo from '../assets/images/logo.webp';


const Footer = () => {
  return (
    <div id='footer'>
        <div id='footer-top'>
          <div id='footer-left-adress'>
              <Image src={logo} alt='logo' width={200}  />
              <div id='footer-adress-item'>
                <FaLocationDot />
                <p>Palinckstraat 124, 2100 Deurne Antwerpen</p>
              </div>
              <div id='footer-adress-item'>
                <IoIosMail />
                <a href="mail:tomoskee.alamal@gmail.com">moskee.alamal@gmail.com</a>
              </div>
              <div id='footer-adress-item'>
                <IoIosCall  />
                <a href="tel:04">0485153434</a>
              </div>
          </div>
        </div>
        <div id='footer-copyright'>
          <p>Copyright &copy; 2025 Al-Amal</p>
        </div>
        {/* <iframe src="https://mawaqit.net/nl/w/alamal-antwerpen?showOnly5PrayerTimes=0" frameBorder="0" scrolling="no" className="widget"></iframe> */}
    </div>
  )
}

export default Footer;