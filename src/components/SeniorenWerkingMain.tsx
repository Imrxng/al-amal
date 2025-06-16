import React from 'react'
import ContainerTitle from './ContainerTitle';
import sfeer1 from '@/assets/images/senioren.webp';
import sfeer2 from '@/assets/images/senioren2.webp';
import Image from 'next/image';

const SeniorenWerkingMain = () => {
    return (
        <div id='container-contact'>
            <ContainerTitle link={'/seniorenwerking'} title={'Senioren aanbod'} />
            <div className="onderwijs-intro">
                <p>
                    ECC DE Hoop wil senioren actief laten deelnemen aan het sociale weefsel van de stad. Door in te spelen op lokale noden en het versterken van sociale netwerken, dragen we bij aan een warme, inclusieve buurt.
                    ECC De Hoop is een warme ontmoetingsplek waar senioren zich thuis voelen, elkaar ontmoeten en actief kunnen blijven deelnemen aan het maatschappelijk leven. We bieden een gevarieerd aanbod aan activiteiten en ondersteuning, steeds afgestemd op de noden en wensen van ouderen in de buurt.
                    Met veel aandacht voor gezondheid, sociale verbinding en persoonlijke ontwikkeling, wil ECC De Hoop senioren versterken, inspireren en activeren.
                </p>
            </div>
            <div className='jongerenaanbod-container'>
                <div >
                    <div>
                        <div>
                            <h2 className='tussentitel-jongerenaanbod'>Wat wij bieden:</h2>
                            <ul id='oplijsting-jongerenwerking'>
                                <li><span className='strong'>Ontmoetingsplaats voor senioren:</span> een laagdrempelige plek om in een gemoedelijke sfeer samen te komen, verhalen te delen en nieuwe vriendschappen op te bouwen.</li>
                                <li><span className='strong'>Vrijwilligerswerk voor en door ouderen:</span> wie wil, kan zich nuttig maken binnen de werking en zo het gevoel versterken iets te betekenen voor de gemeenschap.</li>
                                <li><span className='strong'>Wegwijzerfunctie:</span> we bieden basisinformatie, luisteren naar signalen en verwijzen door naar relevante voorzieningen, diensten en hulpverlening in Antwerpen.</li>
                                <li><span className='strong'>Samenwerking met partners:</span> we willen nauw samenwerken met o.a. de Stad Antwerpen, de seniorendienst, de Vlaamse Ouderenraad, het Vlaams Instituut Gezond Leven en andere organisaties die zich inzetten voor een kwaliteitsvol ouderenbeleid.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='tussentitel-jongerenaanbod'>Onze activiteiten:</h2>
                            <ul id='oplijsting-jongerenwerking'>
                                <li><span className='strong'>Beweegprogramma’s:</span> zoals seniorengym, tai chi, stoelyoga of wandelgroepen – om vitaal en in beweging te blijven.</li>
                                <li><span className='strong'>Levenslange vorming:</span> infosessies en cursussen over gezondheid, digitale vaardigheden, rechten van ouderen, veiligheid, enz.</li>
                                <li><span className='strong'>Workshops:</span> creatief en praktisch – o.a. koken, naaien, zorg en zelfzorg, geheugen- en breintraining, duurzaamheid in huis.</li>
                                <li><span className='strong'>Culturele en toeristische uitstappen:</span> musea, stadswandelingen, theatervoorstellingen of begeleide daguitstappen.</li>
                                <li><span className='strong'>Sociale activiteiten:</span> koffiemomenten, filmnamiddagen, quizzen, praatgroepen en feestelijke bijeenkomsten.</li>
                                <li><span className='strong'>Digitale hulp:</span> begeleiding bij gebruik van smartphone, tablet, e-loketten en sociale media.</li>
                                <li><span className='strong'>Persoonlijke groei:</span> via dialoogmomenten, uitwisseling van levenservaringen en het opbouwen van een positief zelfbeeld.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id='container-2pictures-jongerenwerking' >
                <Image style={{width: '50%', height: 'auto'}} src={sfeer1} alt="Seniorenwerking ecc de hoop" className='sfeer-jongerenwerking' />
                <Image style={{width: '50%', height: 'auto'}} src={sfeer2} alt="Seniorenwerking ecc de hoop" className='sfeer-jongerenwerking' />
            </div>
        </div>
    )
}

export default SeniorenWerkingMain;