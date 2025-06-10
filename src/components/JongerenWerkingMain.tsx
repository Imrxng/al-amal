import React from 'react'
import sfeer1 from '@/assets/images/sfeer-jongerenwerking-1.webp';
import sfeer2 from '@/assets/images/sfeer-jongerenwerking-2.webp';
import sfeer3 from '@/assets/images/sfeer-jongerenwerking-3.webp';
import sfeer4 from '@/assets/images/sfeer-jongerenwerking-4.webp';
import ContainerTitle from './ContainerTitle'
import Image from 'next/image';

const JongerenWerkingMain = () => {
    return (
        <div id='container-contact'>
            <ContainerTitle link={'/jongerenwerking'} title={'Jongerenaanbod'} />
            <div className="onderwijs-intro">
                <p>
                    ECC De Hoop wil zich inzetten op het recht van jongeren om deel te nemen aan het jeugdwerk. We willen hen inspireren om nieuwe dingen te ontdekken, zelfvertrouwen op te bouwen en actief bij te dragen aan de gemeenschap. Wij bieden een bruisend ontmoetingscentrum waar jongeren zich welkom voelen, en een laagdrempelig platform waar jongeren de kans krijgen om in contact te komen met leeftijdsgenoten, ervaringen te delen en hun talenten te ontwikkelen. <br />
                    Onze werking richt zich op maatschappelijke betrokkenheid, educatieve ondersteuning, culturele verrijking en persoonlijke groei. We spelen actief in op de noden in de buurt en zetten sterk in op verbinding en participatie.
                </p>
            </div>
            <div className='jongerenaanbod-container'>
                <div >
                    <div>
                        <div>
                            <h2 className='tussentitel-jongerenaanbod'>Wat wij bieden:</h2>
                            <ul id='oplijsting-jongerenwerking'>
                                <li><span className='strong'>Ontmoetingsplaats voor jongeren:</span> ruimte om in een veilige en open sfeer samen te komen, te praten en nieuwe vriendschappen te sluiten.</li>
                                <li><span className='strong'>Vrijwilligerswerk:</span> jongeren worden gestimuleerd om zich in te zetten voor anderen en zo actief deel te nemen aan het maatschappelijk leven.</li>
                                <li><span className='strong'>Maatschappelijke bewustwording:</span> via dialoog, workshops en projecten leren jongeren kritisch nadenken over maatschappelijke thema’s.</li>
                                <li><span className='strong'>Netwerken en persoonlijke groei:</span> door ontmoetingen en activiteiten ontwikkelen jongeren hun sociale vaardigheden en bouwen ze nieuwe netwerken op.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='tussentitel-jongerenaanbod'>Onze activiteiten:</h2>
                            <ul id='oplijsting-jongerenwerking'>
                                <li><span className='strong'>Taal- en cultuurworkshops:</span> elk weekend leren jongeren over diverse culturen en verbeteren ze hun taalvaardigheden.</li>
                                <li><span className='strong'>Huistaakbegeleiding en studieondersteuning:</span> met vaste begeleiders op weekavonden.</li>
                                <li><span className='strong'>CoderDojo:</span> leer gratis programmeren op een leuke en interactieve manier.</li>
                                <li><span className='strong'>Jeugdwerking en spelactiviteiten:</span> sport, spel en creatieve expressie na schooltijd.</li>
                                <li><span className='strong'>Digitale vaardigheden:</span> workshops rond sociale media, grafisch ontwerp, AI en online veiligheid.</li>
                                <li><span className='strong'>Creatieve ateliers:</span> zoals schilderen, muziek maken, dans en fotografie.</li>
                                <li><span className='strong'>Zinvolle vrijetijdsbesteding:</span> uitstappen, filmavonden, spelletjesavonden, jongerenkampen.</li>
                                <li><span className='strong'>Empowerment sessies:</span> rond mentale gezondheid, communicatie, burgerschap en toekomstplanning.</li>
                                <li><span className='strong'>Samenwerkingen met andere verenigingen en FMV:</span> waardoor jongeren toegang krijgen tot een breder netwerk aan kansen en activiteiten.</li>
                            </ul>
                        </div>
                    </div>
                    <Image src={sfeer1} alt="Sfeer Jongerenwerking 1" className='sfeer-jongerenwerking' />
                </div>
            </div>
            <div id='losse-foto-jongerenwerking'>
                <Image src={sfeer2} alt="Sfeer Jongerenwerking 2" className='sfeer-jongerenwerking' unoptimized={true} />
            </div>
            <div id='container-2pictures-jongerenwerking'>
                <Image src={sfeer3} alt="Sfeer Jongerenwerking 3" className='sfeer-jongerenwerking' />
                <Image src={sfeer4} alt="Sfeer Jongerenwerking 4" className='sfeer-jongerenwerking' />
            </div>
        </div>
    )
}

export default JongerenWerkingMain