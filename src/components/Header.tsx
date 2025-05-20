import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo.webp';
import Link from 'next/link';
import { IoIosCall, IoIosCloseCircle, IoIosMail } from "react-icons/io";
import { FaQuran } from "react-icons/fa";
import LinkButton from './LinkButton';
import { useRouter } from 'next/router';
import { IoMenuSharp } from 'react-icons/io5';
import MobileDrawer from './MobileDrawer';
import { Gebed } from '@/types/types';


interface Gebedstijden {
    fajr: string;
    dhoehr: string;
    asr: string;
    maghrib: string;
    ishaa: string;
}


const Header = () => {
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const [gebedstijden, setGebedstijden] = useState<Gebedstijden | null>(null);
    const [nextGebed, setNextGebed] = useState<Gebed | null>(null);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const topHeaderHeight = document.getElementById('topHeader')?.offsetHeight || 0;
            if (window.scrollY > topHeaderHeight) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        const fetchGebedstijden = async () => {
            try {
                const response = await fetch('/api/gebedstijden');
                const data = await response.json();
                setGebedstijden(data);

                if (data) {
                    setNextGebed(getNextGebed(data));
                }
            } catch (error) {
                console.error("Fout bij het ophalen van de gebedstijden", error);
            }
        };

        fetchGebedstijden();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getNextGebed = (data: Gebedstijden) => {
        const gebedstijden = [
            { naam: "Fajr", tijd: data.fajr },
            { naam: "Dhuhr", tijd: data.dhoehr },
            { naam: "Asr", tijd: data.asr },
            { naam: "Maghrib", tijd: data.maghrib },
            { naam: "Isha", tijd: data.ishaa }
        ];

        const currentTime = new Date();
        const currentTimeString = currentTime.getHours() * 60 + currentTime.getMinutes();

        for (let gebed of gebedstijden) {
            if (gebed.tijd && typeof gebed.tijd === 'string' && gebed.tijd.includes(":")) {
                const [uur, minuut] = gebed.tijd.split(":").map((time) => parseInt(time));
                const gebedTijdString = uur * 60 + minuut;
                if (gebedTijdString > currentTimeString) {
                    return gebed;
                }
            }
        }
        return gebedstijden[0];
    };

    return (
        <>
            <div id="topHeader">
                <div className='nav'>
                    <div className='nav' style={{ gap: 5 }}>
                        <IoIosCall className='icon' />
                        <a href="tel:+32488413095">+32488413095</a>
                    </div>
                    <div className='nav' style={{ gap: 5 }}>
                        <IoIosMail className='icon' />
                        <a href="mailto:moskee.alamal@gmail.com">moskee.alamal@gmail.com</a>
                    </div>
                </div>
                <div className='nav' style={{ gap: 5 }}>
                    <FaQuran className='icon' />
                    {nextGebed ? (
                        <p id='time'>{nextGebed.naam} {nextGebed.tijd}</p>
                    ) : (
                        <p id='time'>Laden...</p>
                    )}
                </div>
            </div>
            <div id="header" className={isSticky ? 'sticky' : ''}>
                <Image src={logo} alt="logo Amal" width={300} />
                <div className='nav' id='nav-desk'>
                    <Link href="/" style={{ color: router.pathname === '/' ? 'var(--secondary-font)' : '' }} className='link'>Home</Link>
                    <Link href="/onderwijs" style={{ color: router.pathname === '/onderwijs' ? 'var(--secondary-font)' : '' }} className='link'>Onderwijs</Link>
                    <Link href="/gebedstijden" style={{ color: router.pathname === '/gebedstijden' ? 'var(--secondary-font)' : '' }} className='link'>Gebedstijden</Link>
                    <Link href="/contact" style={{ color: router.pathname === '/contact' ? 'var(--secondary-font)' : '' }} className='link'>Contact</Link>
                </div>
                <div id='nav-desk-button'>
                    <LinkButton href="/doneren" content="Doneren" />
                </div>
                <IoMenuSharp id="menu-icon" onClick={() => setIsDrawerOpen(true)} />
                <MobileDrawer  nextGebed={nextGebed} isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />   
            </div>
        </>
    );
};

export default Header;
