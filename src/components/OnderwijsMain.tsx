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
            <h3>Waar komt uw kind terecht?</h3>
            <p>
              Bij ECC De Hoop geloven wij in een pluralistische samenleving waar er ruimte is voor iedereen om eigen etnisch-culturele identiteit te beleven. <br /><br />
              Wij bieden een gestructureerd en waardevol leertraject aan om het Arabische taal en Qor'an te leren. Ons programma is bedoeld voor gemotiveerde kinderen die op een rustige, begrijpelijke en stapsgewijze manier willen groeien in kennis en memorisatie.  Wij staan open voor iedereen. <br /><br />
              Wij staan ook open om met externen samen te werken en om efficiënte en innovatieve leermateriaal te gebruiken. Zo hebben wij in 2024 een samenwerking aangegaan met de vrije universiteit van Brussel, om met het Alef programma te werken. Het Alef programma is het enige in Europa dat Arabische taalvaardigheid bij kinderen evalueert op basis van het Europees Referentiekader voor Moderne Vreemde Talen (ERK).  Het leerplan  bevat interculturele elementen die de integratie zullen bevorderen en de communicatie met de ouders over de inhoud van de school kunnen verbeteren.
            </p>

            <div className="onderwijs-fase">
              <h4>Organisatie van de workshops:</h4>
              <ul>
                <li>Baraem 1 en 2 (1ste en 2de leerjaar)</li>
                <li>Sonbola 1 en 2 (3de en 4de leerjaar)</li>
                <li>Al Jisr (5de leerjaar)</li>
              </ul>
              <p className="onderwijs-info">Tijdens de eerste lessen worden ze verder getest en eventueel herverdeeld op basis van hun niveau.</p>
            </div>

            <p id='lid-worden-warning' style={{ marginBottom: 0 }}>Let op: het aantal plaatsen is beperkt. Wij werken met een wachtlijst, waarop enkel kinderen van leden van de vereniging terecht kunnen. Inschrijving is pas definitief na ondertekening van het huishoudelijke reglement en tijdige betaling van het inschrijvingsgeld. Bij bevestiging van deelname ontvangt u een infobrochure met alle info en jaarrooster. </p>
            <Link href='/downloads/Onthaalbrochure-23-24.docx' style={{ marginTop: "2rem", marginBottom: "2rem" }} download={true} id='onderwijs-brochure-button' target='_blank' >
              <MdDownload /> Infobrochure
            </Link>
            <Link href='https://c70b409bc3.cbaul-cdnwnd.com/b027f8255ad330065e34077a4d4ea0ac/200000002-51ccd52c8f/arabisch%20alfabet.pdf?ph=c70b409bc3' id='onderwijs-brochure-button' target='_blank' >
              <MdDownload /> Download de flashkaarten en leer gemakkelijk het Arabisch alfabet
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