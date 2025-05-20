import React from 'react'
import ContainerTitle from './ContainerTitle';

const IntroContact = () => {
    return (
        <div id='container-contact' >
            <ContainerTitle link={'/contact'} title={'Contact'} />
            <div id='intro-contact'>
                <h2>Neem contact met ons op</h2>
                <p>Heb je een vraag over of opmerking? Maak gerust gebruik van ons contactformulier.
                    Uiteraard proberen wij je vraag zo snel mogelijk te beantwoorden, maar dat lukt niet altijd.
                    Het kan zijn dat daar wat tijd overheen gaat. Graag je geduld hiervoor.<br /><br />Voor algemene vragen kun je telefonisch contact opnemen met onze moskee.
                    Wij zijn vanaf 12.00 in de middag tot het laatste avondgebed (isha) telefonisch bereikbaar op <a href="tel:+32488413095">+32488413095</a>.
                </p>
            </div>
        </div>
    )
}

export default IntroContact;