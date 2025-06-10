import Image from 'next/image';
import React from 'react'
import mosquePicture from '@/assets/images/moskee.webp';
import Link from 'next/link';

const Intro = () => {
    return (
        <>
            <div id='intro'>
                <div id='box'>
                    <div>
                        <h1>Welkom bij ECC De Hoop</h1>
                        <p>ECC De Hoop is een educatieve culturele centrum met een brede waaier aan activiteiten die gericht zijn op welzijn, gezondheid, sociale cohesie en actief ouder worden. Door in te spelen op de noden in de buurt en nauw samen te werken met lokale en stedelijke partners, wil ECC De Hoop bijdragen aan een warme gemeenschap waarin senioren hun plaats blijven behouden en versterken. <br /><br />ECC de Hoop is ook een ontmoetingscentrum waar iedereen, ongeacht nationaliteit of overtuiging,  zich welkom, gehoord en betrokken voelt. Het is een plek waar mensen niet alleen terechtkunnen voor ontspanning en vorming, maar ook voor betekenisvolle verbindingen en zingeving. Binnen het centrum is er eveneens ruimte voorzien voor gebed, wat het mogelijk maakt voor bezoekers om hun religieuze beleving op een respectvolle manier te integreren in hun dagelijkse leven.</p>
                        <Link href={'/contact'} id="introButton" style={{ width: '180px'}}>Contacteer ons</Link>
                    </div>
                    <Image src={mosquePicture} alt='Al-amal gevel' />
                </div>
            </div>
        </>
    )
}

export default Intro;