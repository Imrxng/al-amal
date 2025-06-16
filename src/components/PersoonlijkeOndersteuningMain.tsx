import React from 'react';
import ContainerTitle from './ContainerTitle';
import Image from 'next/image';
import sfeer1 from '../assets/images/ondersteuning.webp';

const PersoonlijkeOndersteuningMain = () => {
    return (
        <>
            <ContainerTitle link={'/persoonlijke-ondersteuning'} title={'Persoonlijke Ondersteuning'} />
            <div className="onderwijs-intro gebedshuis-intro ondersteuning-intro">
                <div>
                    <h2>Psychosociale ondersteuning</h2>
                    <p>
                        Bij ons kan je terecht bij een Imam voor een luisterend oor en persoonlijke ondersteuning. We nemen de tijd om samen met jou te kijken naar wat je nodig hebt. Soms is extra begeleiding nodig, en dan verwijzen we door naar professionele hulpverleners, zoals het Psycho-Sociaal Centrum Al-Mizaan.
                        <br /><br />
                        Wij hebben een nauwe samenwerking met Psycho-Sociaal Centrum Al-Mizaan en onze doorverwijzingen worden prioritair behandeld.
                        <br /><br />
                        Al-Mizaan biedt cultuursensitieve psychologische hulpverlening, met oog voor diversiteit en respect voor elke achtergrond. Ze begeleiden mensen bij mentale uitdagingen en zetten sterk in op sensibilisering en psycho-educatie rond mentale gezondheid. Zo wordt niet alleen hulp geboden, maar ook kennis gedeeld en taboes doorbroken.
                        <br /><br />
                        <span style={{ fontSize: 20, fontWeight: 'bolder' }}>Waarom al miezaan?</span><br />
                        We bieden warme en professionele begeleiding met respect voor jouw cultuur en geloof, en met aandacht voor mentaal welzijn en bewustwording. Dankzij onze samenwerking met Al-Mizaan krijg jij de juiste hulp op jouw tempo en met begrip voor jouw situatie. Een intakegesprek via ons doorverwijsformulier is altijd gratis. Neem gerust contact op via info@mijnbalans.be.
                        <br /><br />
                    </p>
                    <h2>Administratieve ondersteuning</h2>
                    <p style={{paddingBottom: '2rem'}}>Wij bieden ondersteuning bij allerlei administratieve taken waar onze leden mee te maken kunnen krijgen. Of het nu gaat om papierwerk, digitale formulieren of het begrijpen van officiële documenten...
                        <br /><br />
                        Onze leden kunnen bij ons terecht voor hulp bij o.a. het opstellen of aanpassen van een cv, het invullen van een belastingaangifte, het aanmelden van kinderen op school, het begrijpen en uitleggen van brieven en officiële documenten...
                        <br /><br />
                        Onze ondersteuning is gratis en vertrouwelijk.
                    </p>
                </div>
                <Image src={sfeer1} alt='Ondersteuning ecc de hoop' width={250} />
            </div>
        </>
    )
}

export default PersoonlijkeOndersteuningMain