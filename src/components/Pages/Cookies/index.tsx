import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import React from 'react';

import styles from './styles.module.css';

const Cookies = () => (
  <Layout>
    <Meta
      title="Cookiebeleid"
      description="Met dit cookiebeleid informeert Horecalijst de gebruiker over het gebruik van cookies of vergelijkbare opslagtechnologiën (genaamd “cookies”) op deze website. Horecalijst gebruikt cookies om waar te nemen hoe haar website gebruikt wordt en om terugkerende bezoekers een persoonlijkere, snellere en meer doelmatigere toegang te bieden."
    />
    <Header />
    <Layout.Content>
      <div className={styles.cookies}>
        <h2>Cookiebeleid</h2>

        <p>
          Met dit cookiebeleid informeert Horecalijst de gebruiker over het
          gebruik van cookies of vergelijkbare opslagtechnologiën (genaamd
          &ldquo;cookies&rdquo;) op deze website. Horecalijst gebruikt cookies
          om waar te nemen hoe haar website gebruikt wordt en om terugkerende
          bezoekers een persoonlijkere, snellere en meer doelmatigere toegang te
          bieden.
        </p>

        <h3>Wat zijn cookies?</h3>
        <p>
          Cookies zijn kleine bestanden die de aanbieder van een website op de
          apparatuur van een bezoeker plaatst. Bijvoorbeeld op een computer,
          telefoon of tablet. Met cookies kan informatie worden verzameld of
          opgeslagen over het websitebezoek of over (het apparaat van) de
          gebruiker.
        </p>
        <p>
          Door de opgeslagen en terugkerende informatie, herkent de respectieve
          website dat je deze hebt bezocht met de browser die je gebruikt op
          jouw toestel. We gebruiken deze informatie om de website optimaal te
          kunnen ontwerpen en weer te geven in overeenstemming met jouw
          voorkeuren.
        </p>
        <p>
          In dat opzicht, wordt alleen de cookie zelf op het toestel
          geïdentificeerd. Persoonlijke gegevens worden alleen opgeslagen nadat
          je nadrukkelijk toestemming heeft gegeven of als het strikt
          noodzakelijk is om de aangeboden service te gebruiken.
        </p>

        <h3>Toestemming voor het gebruik van cookies</h3>
        <p>
          Cookies die niet strikt noodzakelijk zijn om gebruik te kunnen blijven
          maken van onze service, worden alleen gebruikt wanneer we jouw
          toestemming hebben ontvangen. Als je besluit verder te gaan op de
          website nadat de cookiebanner is weergegeven, stem je in met het
          gebruik van cookies.
        </p>
        <p>
          Onder de punt “Deactiveren en verwijderen van alle cookies” van dit
          cookiebeleid lees je hoe je cookies in het algemeen (d.w.z. inclusief
          de essentiële cookies) kunt deactiveren of verwijderen in jouw
          browser.
        </p>
        <h3>Deactiveren en verwijderen van alle cookies</h3>
        <p>
          Je kunt je browserinstellingen zo instellen dat cookies normaliter
          niet op jouw apparaat kunnen worden opgeslagen en / of dat je telkens
          wordt gevraagd of je het ermee eens bent dat cookies worden
          ingeschakeld. Je kunt ook, op ieder moment, cookies verwijderen die
          opnieuw zijn ingeschakeld. Je vindt hoe dit in detail werkt via de
          helpfunctie van je browser.
        </p>
        <p>
          Onthoud a.u.b. dat het deactiveren van cookies kan leiden tot
          functionele restricties van onze website.
        </p>
        <p className={styles.note}>Laatst bijgewerkt op 27 juli 2020.</p>
      </div>
    </Layout.Content>
    <Footer />
  </Layout>
);

export default Cookies;
