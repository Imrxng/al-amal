import Link from 'next/link';
import React from 'react'
import ContainerTitle from './ContainerTitle';
import moskee from '@/assets/images/sfeerbeeld-1.webp';
import Image from 'next/image';
import HomeHadieth from './HomeHadieth';

const GebedstijdenMain = () => {
  return (
    <>
      <ContainerTitle link={'/gebedshuis'} title={'Islamitisch gebedshuis'} />
      <div className="onderwijs-intro gebedshuis-intro">
        <p>
          Wij bieden een islamitisch gebedshuis aan waar er ruimte is voor moslims om  samen te komen en om te bidden, te reflecteren en hun religieuze identiteit te beleven. Het is meer dan een fysieke locatie voor het gebed – het vormt een spiritueel ankerpunt in het dagelijks leven. In dit huis van rust en devotie zoeken gelovigen verbinding met God, met elkaar en met hun diepere zelf.
          <br /><br />
          Voor velen speelt het islamitisch gebedshuis een centrale rol in het onderhouden van hun geloofspraktijk. Hier worden de vijf dagelijkse gebeden verricht, religieuze feestdagen gevierd en educatieve bijeenkomsten georganiseerd. Daarnaast biedt het ook de ruimte voor persoonlijke groei, morele reflectie en spirituele verdieping.
          <br /><br />
          Maar het belang van een islamitisch gebedshuis reikt verder dan de eigen geloofsgemeenschap. In de context van een diverse, stedelijke samenleving biedt het ook een waardevolle ontmoetingsopportuniteit. Het is de laatste jaren een plek geweest waar buren en mensen met verschillende achtergronden op een laagdrempelige manier in contact kwamen met elkaar. Zo draagt het bij aan wederzijds begrip, sociale samenhang en het versterken van een inclusieve stadscultuur.
          <br /><br />
          ECC de Hoop is dus niet alleen een plaats van aanbidding, maar ook een baken van spirituele stabiliteit, culturele identiteit én openheid. Het ondersteunt mensen om hun overtuigingen te beleven,  terwijl het tegelijk uitnodigt tot dialoog en respectvolle uitwisseling met anderen.
        
        </p>
        <Image src={moskee} alt='gebedsruimte' width={500}/>
      </div>
      <div id='gebedstijden-content'>
        <div id='gebedstijden-widget'>
          <h2>Vandaag</h2>
          <iframe src="https://mawaqit.net/nl/w/alamal-antwerpen?showOnly5PrayerTimes=0" frameBorder="0" scrolling="no" className="widget"></iframe>
        </div>
        <div id='gebedstijden-download'>
          <h2>Deze maand</h2>
          <Link href='/downloads/1.pdf' target='_blank' >
            Download gebedstijden
          </Link>
        </div>
        <HomeHadieth padding={'3rem 0'} containerHeight={'35rem'} hadieth={'Iedere keer dat iemand naar de moskee gaat, zal Allah zal voor hem een plaats gereedmaken in het Paradijs.'} overgeleverd={'Overgeleverd door Al-Bukhari en Muslim'} />
      </div>
    </>
  )
}

export default GebedstijdenMain;