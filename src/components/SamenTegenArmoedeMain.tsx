import React from 'react'
import ContainerTitle from './ContainerTitle';
import sfeer1 from '@/assets/images/armoede-1.webp';
import sfeer2 from '@/assets/images/armoede-2.webp';
import sfeer3 from '@/assets/images/armoede-3.webp';
import Image from 'next/image';
import HomeHadieth from './HomeHadieth';

const SamenTegenArmoede = () => {
    return (
        <div id='container-contact'>
            <ContainerTitle link={'/samen-tegen-armoede'} title={'Samen tegen armoede'} />
            <div className="onderwijs-intro">
                <p>
                    Bij ECC De Hoop zetten we ons niet alleen in voor ontmoeting, vorming en gemeenschapsopbouw, maar ook voor concrete hulp aan wie het moeilijk heeft. In tijden van nood willen we er zijn voor de meest kwetsbaren onder ons.
                    Daarom functioneren wij – naast ons reguliere aanbod – ook als voedselbank voor buurtbewoners in armoede en uitsluiting. We delen voedselpakketten uit aan mensen die financieel of sociaal geïsoleerd zijn en zorgen ervoor dat niemand vergeten wordt.
                    Voor wie minder mobiel is of helemaal alleen staat, bieden wij ook huislevering aan. Zo brengen we niet alleen voeding, maar ook hoop en menselijk contact aan huis.
                </p>
            </div>
            <div className='jongerenaanbod-container'>
                <div >
                    <div>
                        <div>
                            <h2 className='tussentitel-jongerenaanbod'>Wat wij doen:</h2>
                            <ul id='oplijsting-armoede'>
                                <li>Verdeling van voedselpakketten aan wie het nodig heeft.</li>
                                <li>Huis-aan-huislevering voor senioren en kwetsbare personen.</li>
                                <li>Discrete, respectvolle aanpak zonder oordeel</li>
                                <li>Samenwerking met lokale initiatieven en vrijwilligers</li>   
                            </ul>
                        </div>
                        <div>
                            <h2 className='tussentitel-jongerenaanbod'>🤝 Wil jij helpen of steun je onze werking?</h2>
                            <ul id='oplijsting-armoede'>
                                <li>Doneer levensmiddelen of middelen.</li>
                                <li>Meld je aan als vrijwilliger</li>
                                <li>Deel dit initiatief met wie hulp nodig heeft</li>
                            </ul>
                            <p id='info-armoede'>Samen bouwen we aan een solidaire buurt waar niemand er alleen voor staat.</p>
                        </div>
                    </div>
                    <Image src={sfeer1} alt="Sfeer Jongerenwerking 1" id='foto-armoede' className='sfeer-jongerenwerking' />
                </div>
            </div>
            <div id='container-2pictures-jongerenwerking'>
                    <Image src={sfeer2} alt="Sfeer samen-tegen-armoede 2" id='foto-armoede' className='sfeer-jongerenwerking' />
                    <Image src={sfeer3} alt="Sfeer samen-tegen-armoede 3" id='foto-armoede' className='sfeer-jongerenwerking' />
            </div>
            <HomeHadieth padding={'3rem'} containerHeight={'35rem'} hadieth={'Iedere keer dat iemand naar de moskee gaat, zal Allah zal voor hem een plaats gereedmaken in het Paradijs.'} overgeleverd={'Overgeleverd door Al-Bukhari en Muslim'} />
        </div>
    )
}

export default SamenTegenArmoede;