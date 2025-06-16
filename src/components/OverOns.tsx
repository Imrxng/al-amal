import React from 'react'
import { FaMosque } from "react-icons/fa";
import Image from 'next/image';
import sfeerbeeld from '@/assets/images/sfeerbeeld-1.webp';
import Link from 'next/link';

const OverOns = () => {
    return (
        <div id='over-ons-container'>
            <div id='over-ons-content'>
                <h2>Word lid van ECC De Hoop – Samen bouwen we aan verbinding</h2>
                <p>Bij ECC De Hoop geloven we in de kracht van gemeenschap. Al sinds 2016  zetten we ons vrijwillig in om jongeren, senioren en buurtbewoners een warme plek te bieden waar ontmoeting, groei en solidariteit centraal staan. Van huiswerkbegeleiding en workshops tot bewegingssessies en sociale activiteiten: onze werking leeft dankzij de inzet van velen – maar ook dankzij de steun van mensen zoals jij. <br /><br />Wij ontvangen geen subsidies en zijn volledig afhankelijk van donaties en lidgelden. Door lid te worden, steun je niet alleen een organisatie die zich elke dag inzet voor de buurt, maar draag je ook actief bij aan kansen voor jong en oud.</p>
                <div id='buttons-over-ons'>
                    <Link href={'/lid-worden'} className='button-grey-bg'>Lid worden</Link>
                    <Link href={'/gebedstijden'} className='button-grey-bg'>Gebedstijden</Link>
                </div>
            </div>
            <Image src={sfeerbeeld} alt='Gebedshuis ecc de hoop' />
        </div>
    )
}

export default OverOns;