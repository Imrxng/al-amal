import React from 'react';
import ContainerTitle from './ContainerTitle';
import Image from 'next/image';
import letters from '@/assets/images/sfeer-letters.webp';
import klas from '@/assets/images/sfeer-klas.webp';
import { MdDownload } from 'react-icons/md';
import Link from 'next/link';

const OnderwijsMain = () => {
  return (
    <div id="container-contact">
      <ContainerTitle link={'/onderwijs'} title={'Onderwijs'} />

      <div className="onderwijs-intro">
        <h2>Welkom bij ECC De Hoop</h2>
        <p>
          ECC De Hoop biedt een vormingstraject in Arabische taal en Qor’an voor gemotiveerde leerlingen
          die zich willen verdiepen in taal, cultuur en memorisatie. We richten ons op studenten die de
          Arabische taal echt onder de knie willen krijgen en bereid zijn om zich daarvoor in te zetten.
          <br /><br />
          Onze leerlingen worden opgedeeld in niveaugroepen: Baraem 1 en 2 (1ste en 2de leerjaar),
          Sonbola 1 en 2 (3de en 4de leerjaar), en Al Jisr (5de leerjaar). Tijdens de eerste lessen worden
          ze verder getest en eventueel herverdeeld op basis van hun niveau.
          <br /><br />
          Let op: het aantal plaatsen is beperkt. Wij werken met een wachtlijst, waarop enkel kinderen van
          leden van de vereniging terecht kunnen. Inschrijving is pas definitief na ondertekening van het
          schoolreglement en tijdige betaling van het inschrijvingsgeld.
          <br /><br />
          Bij bevestiging van deelname ontvangt u een onthaalbrochure met het schoolreglement en jaarrooster.
          Lees deze zorgvuldig door en neem bij vragen gerust contact op met de directie.
          <br /><br />
          Meer info over ons programma, de planning en inschrijvingen vindt u verder op deze pagina.
        </p>
      </div>

      <div className="onderwijs-plan">
        <div id='onderwijs-plan-deel-1'>
          <div>
            <h3>📚 Waar komt uw kind terecht?</h3>
            <p>
              Bij <strong>ECC De Hoop</strong> bieden wij een gestructureerd en waardevol leertraject in Arabische taal
              en Qor'an. Ons programma is bedoeld voor gemotiveerde kinderen die op een rustige, begrijpelijke en
              stapsgewijze manier willen groeien in kennis en memorisatie.
            </p>

            <div className="onderwijs-fase">
              <h4>🟢 Fase 1: Instaptraject (2 jaar)</h4>
              <ul>
                <li>Arabisch alfabet leren lezen en schrijven</li>
                <li>Basiswoordenschat verwerven</li>
                <li>Kleine soewar memoriseren</li>
              </ul>
              <p className="onderwijs-info">Gegeven in een klasomgeving met persoonlijke begeleiding.</p>
            </div>


            <div className="onderwijs-fase">
              <h4>🔵 Fase 2: Verdiepingstraject</h4>
              <p id='fase-2-intro'>
                Na het instaptraject stroomt uw kind door naar een verdiepingsfase met <strong>twee leertrajecten</strong>,
                elk op een aparte dag.
              </p>

              <div className="onderwijs-blok">
                <h5>📖 Traject 1: Qor’an Memoristatie</h5>
                <ul>
                  <li><strong>Niveau 1:</strong> Groepsmemoristatie</li>
                  <li><strong>Niveau 2:</strong> Individuele memoristatie</li>
                </ul>
              </div>

              <div className="onderwijs-blok">
                <h5>🗣️ Traject 2: Arabische Taal</h5>
                <ul>
                  <li><strong>Niveau 1:</strong> Beginners</li>
                  <li><strong>Niveau 2:</strong> Gemiddeld</li>
                  <li><strong>Niveau 3:</strong> Gevorderd</li>
                </ul>
              </div>

              <p className="onderwijs-info">Beide trajecten worden onafhankelijk gevolgd.</p>
            </div>
          </div>
          <Image src={letters} height={100} alt='letters' width={200} />
        </div>
        <div id='onderwijs-brochure-sfeer-container'>
          <Link href='/downloads/Onthaalbrochure-23-24.docx' download={true} id='onderwijs-brochure-button' target='_blank' >
            <MdDownload /> Infobrochure
          </Link>
          <Image src={klas} height={100} alt='letters' width={100} unoptimized={true} />
        </div>
      </div>
    </div>
  );
};

export default OnderwijsMain;