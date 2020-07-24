import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.css';

const Privacy = () => (
  <Layout>
    <Meta title="Privacybeleid" />
    <Header />
    <Layout.Content>
      <div className={styles.privacy}>
        <h2>Privacybeleid</h2>

        <p>
          We hechten veel belang aan privacy. Het beleid van Horecalijst stelt
          uw privacy voorop met betrekking tot alle persoonlijke gegevens die we
          verkrijgen via onze website,{' '}
          <a href={process.env.APP_URL}>{process.env.APP_URL}</a>.
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
          Onze website kan links bevatten naar externe sites die niet door ons
          worden beheerd. We maken u er via deze weg op attent dat we geen
          controle hebben over de inhoud en praktijken van deze sites. We zijn
          dus niet verantwoordelijk, noch aansprakelijk, voor hun respectieve
          privacy-overeenkomsten.
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
      </div>
    </Layout.Content>
    <Footer />
  </Layout>
);

export default Privacy;
