import React from 'react';
import ContainerTitle from './ContainerTitle';
import Image from 'next/image';
import sfeer from '@/assets/images/sfeer-1.webp';
import klas from '@/assets/images/sfeer-2.webp';
import { MdDownload } from 'react-icons/md';
import Link from 'next/link';

const OnderwijsMain = () => {
  return (
    <div id="container-contact">
      <ContainerTitle link={'/workshop-taal-en-cultuur'} title={'Workshop taal en cultuur'} />

      <div className="onderwijs-intro">
        <h2>Wie zijn wij?</h2>
        <p>
          ECC De Hoop is een educatief centrum dat vertrekt vanuit het geloof in een pluralistische samenleving. Wij creëren ruimte voor kinderen om hun etnisch-culturele identiteit te ontwikkelen, in harmonie met de bredere samenleving. Met passie en toewijding bieden we kwalitatief workshops in de Arabische taal en Qor'an.
        </p>
      </div>

      <div className="onderwijs-plan" style={{ paddingBottom: '3rem' }}>
        <div id='onderwijs-plan-deel-1'>
          <div>
            <h3>Wat bieden wij?</h3>
            <p>
              Wij voorzien een gestructureerd en doelgericht leertraject in de vorm van workshops waarin kinderen stap voor stap groeien in taalvaardigheid en memorisatie. In 2024 zijn we een samenwerking gestart met de Vrije Universiteit Brussel en maken we gebruik van het innovatieve Alef-programma – het enige in Europa dat Arabische taalvaardigheid bij kinderen beoordeelt volgens het Europees Referentiekader voor Moderne Vreemde Talen (ERK).
              <br /><br />
              Het leerplan is intercultureel opgebouwd, en wordt jaarlijks geevalueerd en verbeterd, wat niet alleen de integratie bevordert, maar ook de communicatie tussen ouders en school vergemakkelijkt.
            </p>

            <div className="onderwijs-fase">
              <h4>Onze workshopgroepen:</h4>
              <ul>
                <li>Baraem 1 & 2 – voor het 1ste en 2de leerjaar</li>
                <li>Sonbola 1 & 2 – voor het 3de en 4de leerjaar</li>
                <li>Al Jisr – voor het 5de leerjaar</li>
              </ul>
              <p className="onderwijs-info">Bij de starttoetsen we het niveau van elke leerling en herverdelen indien nodig..</p>
              <p ><br />
               👉 Klik <Link href='https://c70b409bc3.cbaul-cdnwnd.com/b027f8255ad330065e34077a4d4ea0ac/200000002-51ccd52c8f/arabisch%20alfabet.pdf?ph=c70b409bc3'  target='_blank' id='klik-hier' >hier</Link> om flashkaarten te downloaden en leer gemakkelijk het Arabisch alfabet.
            </p>
            </div>

            <h3 style={{paddingTop: '2rem'}}>Voor wie?</h3>
            <p>
              Onze lessen zijn bedoeld voor gemotiveerde kinderen en jongeren die op een rustige en gestructureerde manier willen groeien in de Arabische taal en Qor'an. Iedereen is welkom,  ongeacht achtergrond of niveau.
            </p>

            <div className="onderwijs-fase">
              <h4>Inschrijven:</h4>
              <p style={{paddingBottom: '0.5rem'}}>Een inschrijving is pas definitief na:</p>
              <ul>
                <li>Ondertekening van het huishoudelijk reglement</li>
                <li>Tijdige betaling van het inschrijvingsgeld</li>
              </ul>
              <p style={{paddingTop: '1rem'}}>👉 Klik <Link id='klik-hier' href={'https://docs.google.com/forms/d/e/1FAIpQLSe6-aMU4116CmnGZ2-z7aCfUJJQjzeqAWZUEaHhtOdsA29yuQ/viewform?usp=sharing&ouid=116803070526860902163'} target='_blank'>hier</Link> om in te schrijven.</p>
            </div>

            <p id='lid-worden-warning' style={{ marginBottom: 0 }}>Let op: het aantal plaatsen is beperkt. Wij werken met een wachtlijst, waarop enkel kinderen van leden van de vereniging terecht kunnen. Inschrijving is pas definitief na ondertekening van het huishoudelijke reglement en tijdige betaling van het inschrijvingsgeld. Bij bevestiging van deelname ontvangt u een infobrochure met alle info en jaarrooster. </p>
            <p id="info-armoede">Na bevestiging van je inschrijving door het bestuur, ontvang je een document met alle praktische informatie en het jaarrooster.</p>
            <Link href='/downloads/Onthaalbrochure-23-24.docx' style={{ marginTop: "2rem" }} download={true} id='onderwijs-brochure-button' target='_blank' >
              <MdDownload /> Infobrochure
            </Link>
          </div>
        </div>

        <div id='onderwijs-brochure-sfeer-container'><br /><br />
          <Image src={klas} height={100} alt='letters' width={100} unoptimized={true} />
          <Image src={sfeer} alt='sfeer-1' unoptimized={true} />
        </div>
      </div>
    </div>
  );
};

export default OnderwijsMain;