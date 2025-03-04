import React from 'react'
import { FaMosque } from "react-icons/fa";
import Image from 'next/image';
import sfeerbeeld from '@/assets/images/sfeerbeeld-1.webp';
import Link from 'next/link';

const OverOns = () => {
    return (
        <div id='over-ons-container'>
            <div id='over-ons-content'>
                <h2>ECC De Hoop opgericht in 2016</h2>
                <p>Onze moskee is verdeeld over drie verdiepingen voor het gebed, inclusief een speciale gebedsruimte voor vrouwen. We streven ernaar om een veilige en gastvrije omgeving te bieden voor alle moslims die ons bezoeken. Of je nu alleen komt of met familie en vrienden, je bent altijd welkom.                </p>
                <div id='over-ons-icons'>
                    <div className='over-ons-icon-container'>
                        <FaMosque className='icon'/>
                        <p>Groot ruimte voor het gebed</p>
                    </div>
                    <div className='over-ons-icon-container'>
                        <FaMosque className='icon'/>
                        <p>Onderwijs voor jeugd</p>
                    </div>
                    <div className='over-ons-icon-container'>
                        <FaMosque className='icon'/>
                        <p>Vrouwen gebedsruimte</p>
                    </div>
                    <div className='over-ons-icon-container'>
                        <FaMosque className='icon'/>
                        <p>Khutba</p>
                    </div>
                    <div className='over-ons-icon-container'>
                        <FaMosque className='icon'/>
                        <p>Groot ruimte voor het gebed</p>
                    </div>
                    <div className='over-ons-icon-container'>
                        <FaMosque className='icon'/>
                        <p>Gastvrij</p>
                    </div>
                    <p>Met de zegen van Allah hebben we een prachtige moskee mogen realiseren. Als je nog niet langs bent geweest, ben je van harte welkom! Maar een moskee is meer dan alleen een gebouw van steen en cement. Jouw steun helpt ons niet alleen bij het onderhoud van de moskee, maar ook bij het organiseren van waardevolle activiteiten. Moge Allah jouw donatie accepteren en je hier overvloedig voor belonen.</p>
                </div>
                <div id='buttons-over-ons'>
                    <Link href={'/lid-worden'} className='button-grey-bg'>Lid worden</Link>
                    <Link href={'/over-ons'} className='button-grey-bg'>Over ons</Link>
                </div>
            </div>
            <Image src={sfeerbeeld} alt='gebedsruimte' />
        </div>
    )
}

export default OverOns;