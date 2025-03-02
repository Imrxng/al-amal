import Image from 'next/image';
import React from 'react'
import mosquePicture from '@/assets/images/moskee.webp';
import Link from 'next/link';

const Intro = () => {
    return (
        <>
            <div id='background-header'>

            </div>
            <div id='intro'>
                <div id='box'>
                    <div>
                        <h1>Welkom bij Moskee Al-Amal</h1>
                        <p>Wij zijn een actieve moskee en vereniging in Deurne, waar onderwijs, cultuur en gemeenschap samenkomen. Met workshops, vakantiekampen, uitstappen en feesten helpen we jongeren hun identiteit te versterken. Daarnaast bieden we ondersteuning voor senioren en vrouwen. Onze deuren staan open voor iedereen, ongeacht nationaliteit of overtuiging!</p>
                        <Link href={'/contact'} id="introButton" style={{ width: '180px'}}>Contacteer ons</Link>
                    </div>
                    <Image src={mosquePicture} alt='Al-amal gevel' />
                </div>
            </div>
        </>
    )
}

export default Intro;