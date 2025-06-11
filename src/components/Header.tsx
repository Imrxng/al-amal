import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo.webp';
import Link from 'next/link';
import { IoIosCall, IoIosCloseCircle, IoIosMail } from "react-icons/io";
import { FaAngleDown, FaQuran } from "react-icons/fa";
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
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const router = useRouter();

    // Huidige dropdown toggle functie
    const toggleDropdown = (dropdown: string) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    // Sluit dropdowns bij route-verandering
    useEffect(() => {
        setOpenDropdown(null);
    }, [router.pathname]);

    // Bestaande scroll- en gebedstijden-logica
    useEffect(() => {
        const handleScroll = () => {
            const topHeaderHeight = document.getElementById('topHeader')?.offsetHeight || 0;
            setIsSticky(window.scrollY > topHeaderHeight);
        };
        window.addEventListener('scroll', handleScroll);

        const fetchGebedstijden = async () => {
            try {
                const response = await fetch('/api/gebedstijden');
                const data = await response.json();
                setGebedstijden(data);
                if (data) setNextGebed(getNextGebed(data));
            } catch (error) {
                console.error("Fout bij het ophalen van de gebedstijden", error);
            }
        };
        fetchGebedstijden();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getNextGebed = (data: Gebedstijden) => {
        const gebeden = [
            { naam: "Fajr", tijd: data.fajr },
            { naam: "Dhuhr", tijd: data.dhoehr },
            { naam: "Asr", tijd: data.asr },
            { naam: "Maghrib", tijd: data.maghrib },
            { naam: "Isha", tijd: data.ishaa }
        ];
        const now = new Date().getHours() * 60 + new Date().getMinutes();
        return gebeden.find(gebed => {
            const [uur, minuut] = gebed.tijd.split(":").map(Number);
            return (uur * 60 + minuut) > now;
        }) || gebeden[0];
    };

    const isActive = (path: string) => {
        if (router.pathname === path) return true;

        if (path === '/werkingen' && (
            router.pathname === '/workshop-taal-en-cultuur' ||
            router.pathname === '/jongerenwerking' ||
            router.pathname === '/seniorenwerking' ||
            router.pathname === '/samen-tegen-armoede'
        )) return true;

        if (path === '/religie' && (
            router.pathname === '/gebedshuis' ||
            router.pathname === '/gebedstijden'
        )) return true;

        if (path === '/ondersteuning' && (
            router.pathname === '/persoonlijke-ondersteuning' ||
            router.pathname === '/mededelingen'
        )) return true;

        return false;
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
                    <p id='time'>{nextGebed ? `${nextGebed.naam} ${nextGebed.tijd}` : "Laden..."}</p>
                </div>
            </div>

            <div id="header" className={isSticky ? 'sticky' : ''}>
                <Link href="/">
                    <Image src={logo} alt="logo Amal" width={300} style={{ cursor: 'pointer' }} />
                </Link>
                <div id='nav-desk-button'>
                    <LinkButton href="/doneren" content="Doneren" />
                </div>
                <IoMenuSharp id="menu-icon" onMouseEnter={() => setIsDrawerOpen(true)} />
                <MobileDrawer nextGebed={nextGebed} isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
            </div>


            <div className='nav' id='nav-desk'>
                <Link href="/" className={`link ${isActive('/') ? 'active' : ''}`}>Home</Link>

                <div className="dropdown-container" onMouseLeave={() => toggleDropdown('')}>
                    <button
                        className={`link dropdown-btn ${isActive('/werkingen') ? 'active' : ''}`}
                        onMouseEnter={() => toggleDropdown('werkingen')}
                    >
                        Werkingen <FaAngleDown />
                    </button>
                    {openDropdown === 'werkingen' && (
                        <div className="dropdown-content">
                            <Link href="/workshop-taal-en-cultuur" className={`link ${isActive('/workshop-taal-en-cultuur') ? 'active' : ''}`}>
                                Workshop taal en cultuur
                            </Link>
                            <Link href="/jongerenwerking" className={`link ${isActive('/jongerenwerking') ? 'active' : ''}`}>
                                Jongerenwerking
                            </Link>
                            <Link href="/seniorenwerking" className={`link ${isActive('/seniorenwerking') ? 'active' : ''}`}>
                                Seniorenwerking
                            </Link>
                            <Link href="/samen-tegen-armoede" className={`link ${isActive('/samen-tegen-armoede') ? 'active' : ''}`}>
                                Samen tegen armoede
                            </Link>
                        </div>
                    )}
                </div>

                {/* <div className="dropdown-container" onMouseLeave={() => toggleDropdown('')}>
                    <button 
                        className={`link dropdown-btn ${isActive('/religie') ? 'active' : ''}`}
                        onMouseEnter={() => toggleDropdown('religie')}
                    >
                        Religie <FaAngleDown />
                    </button>
                    {openDropdown === 'religie' && (
                        <div className="dropdown-content">
                            <Link href="/gebedshuis" className={`link ${isActive('/gebedshuis') ? 'active' : ''}`}>
                                Islamitisch gebedshuis
                            </Link>
                            <Link href="/gebedstijden" className={`link ${isActive('/gebedstijden') ? 'active' : ''}`}>
                                Gebedstijden
                            </Link>
                        </div>
                    )}
                </div> */}


                {/* <div className="dropdown-container" onMouseLeave={() => toggleDropdown('')}>
                    <button
                        className={`link dropdown-btn ${isActive('/ondersteuning') ? 'active' : ''}`}
                        onMouseEnter={() => toggleDropdown('ondersteuning')}
                    >
                        Ondersteuning  <FaAngleDown />
                    </button>
                    {openDropdown === 'ondersteuning' && (
                        <div className="dropdown-content">
                            <Link href="/persoonlijke-ondersteuning" className={`link ${isActive('/persoonlijke-ondersteuning') ? 'active' : ''}`}>
                                Persoonlijke ondersteuning
                            </Link>
                            <Link href="/mededelingen" className={`link ${isActive('/mededelingen') ? 'active' : ''}`}>
                                Mededelingen
                            </Link>
                        </div>
                    )}
                </div> */}
                <Link href="/gebedshuis" className={`link ${isActive('/gebedshuis') ? 'active' : ''}`}>
                    Gebedshuis
                </Link>
                <Link href="/persoonlijke-ondersteuning" className={`link ${isActive('/persoonlijke-ondersteuning') ? 'active' : ''}`}>
                    Persoonlijke ondersteuning
                </Link>
                <Link href="/mededelingen" className={`link ${isActive('/mededelingen') ? 'active' : ''}`}>
                    Mededelingen
                </Link>
                <Link href="/contact" className={`link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
            </div>
        </>
    );
};

export default Header;