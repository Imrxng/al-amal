import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../assets/images/logo.webp';
import prayerIcon from '../assets/icons/sujud.webp';
import Link from 'next/link';
import { IoIosCall, IoIosMail } from "react-icons/io";
import { FaQuran } from "react-icons/fa";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div id='topHeader' style={{ opacity: isScrolled ? 0 : 1 }}>
                <div className='nav'>
                    <div className='nav' style={{gap: 5}}>
                        <IoIosCall className='icon' />
                        <a href="tel:0485158565">0485158565</a>
                    </div>
                    <div className='nav' style={{gap: 5}}>
                        <IoIosMail className='icon' />
                        <a href="mailto:alamal@gmail.com">alamal@gmail.com</a>
                    </div>
                </div>
                <div className='nav' style={{gap: 5}}>
                <FaQuran className='icon'/>
                <p id='time'>Isha 21:30</p>
                </div>
            </div>
            <div id='header' style={{ marginTop: isScrolled ? '0' : "3rem", paddingTop: isScrolled ? '0' : "3rem" }}>
                <Image src={logo} alt="logo Amal" width={300} />
                <div className='nav'>
                    <Link href="/" className='link'>Home</Link>
                    <Link href="/over-ons" className='link'>Over ons</Link>
                    <Link href="/gebedstijden" className='link'>Gebedstijden</Link>
                    <Link href="/contact" className='link'>Contact</Link>
                </div>
                <div className='nav'>
                    <Link href="/lid-worden" className="button">Lid worden</Link>
                    <Link href="/doneren" className="button">Doneren</Link>
                </div>
            </div>
        </>
    );
}

export default Header;
