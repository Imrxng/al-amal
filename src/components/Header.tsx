import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../assets/images/logo.webp';
import Link from 'next/link';
import { IoIosCall, IoIosMail } from "react-icons/io";
import { FaQuran } from "react-icons/fa";
import LinkButton from './LinkButton';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
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
                        <a href="mailto:moskee.alamal@gmail.com">moskee.alamal@gmail.com</a>
                    </div>
                </div>
                <div className='nav' style={{gap: 5}}>
                <FaQuran className='icon'/>
                <p id='time'>Isha 21:30</p>
                </div>
            </div>
            <div id='header' style={{ marginTop: isScrolled ? '0' : "3rem", paddingTop: isScrolled ? '0' : "2rem"}}>
                <Image src={logo} alt="logo Amal" width={300} />
                <div className='nav'>
                    <Link href="/" className='link'>Home</Link>
                    <Link href="/over-ons" className='link'>Over ons</Link>
                    <Link href="/gebedstijden" className='link'>Gebedstijden</Link>
                    <Link href="/contact" className='link'>Contact</Link>
                </div>
                <div className='nav'>
                    <LinkButton href="/lid-worden" content="Lid worden" />
                    <LinkButton href="/doneren" content="Doneren" />
                </div>
            </div>
        </>
    );
}

export default Header;
