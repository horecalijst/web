import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.css';

const Privacy = () => (
  <Layout>
    <Meta
      title="Privacybeleid"
      description={`We hechten veel belang aan privacy. Het beleid van Horecalijst stelt uw privacy voorop met betrekking tot alle persoonlijke gegevens die we verkrijgen via onze website, ${process.env.NEXT_PUBLIC_APP_URL}.`}
    />
    <Header />
    <Layout.Content>
      <div className={styles.privacy}>
        <h2>Privacybeleid</h2>

        <p>
          We hechten veel belang aan privacy. Het beleid van Horecalijst stelt
          uw privacy voorop met betrekking tot alle persoonlijke gegevens die we
          verkrijgen via onze website,{' '}
          <a href={process.env.NEXT_PUBLIC_APP_URL}>
            {process.env.NEXT_PUBLIC_APP_URL}
          </a>
          .
        </p>
        <p>
          We vragen enkel om persoonlijke informatie wanneer we deze
          noodzakelijk achten voor onze dienstverlening. We verzamelen deze
          gegevens op een faire en wetmatige manier, steeds met uw medeweten en
          goedkeuring. We laten u ook weten waarom we deze gegevens vragen en
          hoe ze gebruikt zullen worden.
        </p>
        <p>
          We houden de verzamelde gegevens enkel bij zolang deze nodig blijken
          om onze dienstverlening naar u toe te garanderen. De data en gegevens
          die worden opgeslagen, worden door ons beschermd, binnen de grenzen
          van het commercieel aanvaardbare, om verlies en diefstal te voorkomen,
          alsook om ongeautoriseerde toegang, openbaarmaking, kopieën, gebruik
          of wijzigingen tegen te gaan.
        </p>
        <p>
          We delen geen persoonlijk identificeerbare informatie met derden,
          behalve wanneer we daartoe wettelijk verplicht worden of expliciet
          vermeldt.
        </p>
        <p>
          U bent vrij om te weigeren in te gaan op ons verzoek naar bepaalde
          persoonlijke gegevens, met dien verstande dat wij dan mogelijks niet
          kunnen voldoen aan bepaalde aspecten van onze dienstverlening.
        </p>
        <p>
          Uw voortgaand gebruik van onze website zal worden aanzien als een
          aanvaarding van dit privacybeleid en onze aanwending van de door u
          aangeleverde informatie. Als u vragen of opmerkingen heeft over hoe we
          omgaan met gebruikersdata en persoonlijke informatie, aarzel niet{' '}
          <Link href="/contact">
            <a>om ons te contacteren</a>
          </Link>
          .
        </p>
        <div className={styles.corona}>
          <h3>Klantgegevens coronamaatregelen</h3>

          <p>
            De Nationale Veiligheidsraad heeft op 23 juli 2020 beslist dat
            horecazaken de aanwezigheid van hun gasten moeten noteren. We
            verwerken je gegevens, direct in opdracht van de overheid, en in
            lijn met de beslissing van de Nationale Veiligheidsraad, op grond
            van artikel 6, c (&ldquo;noodzakelijke verwerking om te voldoen aan
            een wettelijke verplichting die op de verwerkingsverantwoordelijke
            rust&rdquo;) en artikel 3, 10° Ministerieel besluit van 24 juli 2020
            houdende wijziging van het ministerieel besluit van 30 juni 2020
            houdende dringende maatregelen om de verspreiding van het
            coronavirus COVID-19 te beperken.
          </p>
          <p>
            Horecalijst houdt uw gegevens maximaal 14 dagen bij vanaf het moment
            dat u ze in gaf. Daarna worden ze vernietigd en onbruikbaar gemaakt.
            De zaak die u opgaf bij de registratie heeft gedurende 14 dagen
            toegang tot deze gegevens in de vorm van een CSV-bestand zodat ze
            deze kan overhandigen aan autoriteiten op aanvraag.
          </p>
          <p>
            Horecalijst is een digitaal equivalent van{' '}
            <a
              href="/static/formulaire-horeca-formulier-vlaanderen.pdf"
              target="_blank"
            >
              het formulier
            </a>{' '}
            dat de overheid heeft opgesteld voor de horeca.
          </p>
        </div>
        <p className={styles.note}>Laatst bijgewerkt op 27 juli 2020.</p>
      </div>
    </Layout.Content>
    <Footer />
  </Layout>
);

export default Privacy;
