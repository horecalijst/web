import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import React from 'react';

import styles from './styles.module.css';

const Terms = () => (
  <Layout>
    <Meta title="Algemene voorwaarden" />
    <Header />
    <Layout.Content>
      <div className={styles.terms}>
        <h2>Algemene voorwaarden</h2>
        <h3>1. Gebruiksvoorwaarden</h3>
        <p>
          Door het gebruik van de website{' '}
          <a href={process.env.NEXT_PUBLIC_APP_URL}>
            {process.env.NEXT_PUBLIC_APP_URL}
          </a>
          , bent u gebonden door deze gebruiksvoorwaarden, en gaat u akkoord met
          de toepasselijke wet- en regelgeving. U aanvaardt ook de
          verantwoordelijkheid voor het naleven van eventueel toepasbare lokale
          wetten. Indien u niet akkoord gaat met een van deze voorwaarden, wordt
          u het gebruik van of de toegang tot deze website verboden. De
          materialen die deze website bevat worden beschermd door het
          toepasselijk auteursrecht en merkenrecht.
        </p>
        <h3>2. Gebruikslicentie</h3>
        <ul>
          <li>
            We geven toestemming om tijdelijk één kopie van de materialen op de
            Horecalijst-website te downloaden, uitsluitend voor persoonlijke,
            niet-commerciële en voorbijgaande bezichtiging. Dit is het verlenen
            van een licentie, en houdt dus geenszins een eigendomsoverdracht in,
            en onder deze licentie mag u niet:
            <ul>
              <li>de materialen wijzigen of kopiëren;</li>
              <li>
                de materialen gebruiken voor eender welk commercieel doel, of
                voor openbare vertoning (commercieel of niet-commercieel);
              </li>
              <li>
                proberen de software op de website van Horecalijst te ontleden
                of reverse-engineeren;
              </li>
              <li>
                auteursrechten of andere bedrijfseigen notaties van de
                materialen verwijderen; of
              </li>
              <li>
                de inhoud overdragen aan een andere persoon of de materialen
                dupliceren op eender welke andere server.
              </li>
            </ul>
          </li>
          <li>
            Deze licentie zal automatisch beëindigd worden als u een van deze
            beperkingen schendt en kan daarnaast door Horecalijst op elk moment
            beëindigd worden. Wanneer u klaar bent met het inkijken van deze
            materialen of bij het beëindigen van deze licentie, moeten alle
            gedownloade materialen in uw bezit vernietigd worden, dit geldt
            zowel voor prints als elektronische documenten.
          </li>
        </ul>
        <h3>3. Aansprakelijkheidsbeperking</h3>
        <ul>
          <li>
            De inhoud van Horecalijst&#x27;s website worden ter beschikking
            gesteld &quot;zoals ze zijn&#x27;. Horecalijst geeft geen garanties,
            expliciet of impliciet. We ontkennen alle waarborgen waaronder, maar
            niet beperkt tot, impliciete garanties en voorwaarden van
            verkoopbaarheid, geschiktheid voor een bepaald doel, of niet-inbreuk
            van intellectueel eigendom of andere schending van rechten, en doen
            hierbij afstand van aansprakelijkheid.
          </li>
          <li>
            Verder geeft Horecalijst geen garanties of maakt geen
            vertegenwoordigingen wat betreft de juistheid, vermoedelijke
            resultaten, of betrouwbaarheid van het gebruik van de materialen op
            deze website, of van zaken gerelateerd aan deze materialen, of van
            materialen op sites die gelinkt zijn aan Horecalijst.
          </li>
        </ul>
        <h3>4. Beperkingen</h3>
        <p>
          In geen enkel geval zal Horecalijst of zijn leveranciers aansprakelijk
          gesteld kunnen worden voor eventuele schade (waaronder, maar niet
          beperkt tot, schade ten gevolge van gegevens- of winstverlies, of door
          onderbreking van de bedrijfsvoering) die volgt uit het gebruik of het
          onvermogen tot gebruik van de materialen op Horecalijst&#x27;s
          website, zelfs als Horecalijst of een door Horecalijst geautoriseerde
          vertegenwoordiger mondeling of schriftelijk op de hoogte werd gesteld
          van de mogelijkheid tot dergelijke schade. Omdat sommige
          rechtsgebieden beperkingen op impliciete garanties of beperkingen van
          aansprakelijkheid voor gevolgschade of incidentele schade niet
          toestaan, zijn deze beperkingen mogelijk niet op u van toepassing.
        </p>
        <h3>5. Nauwkeurigheid van gegevens</h3>
        <p>
          De gegevens die verschijnen op Horecalijst&#x27;s website kunnen
          technische, typografische of fotografische fouten bevatten.
          Horecalijst garandeert niet dat de materialen op zijn website
          accuraat, volledig of actueel zijn. Horecalijst kan op elk moment
          veranderingen doorvoeren aan de materialen op zijn website zonder
          voorafgaande verwittiging. Horecalijst is echter niet verplicht tot
          het updaten van deze materialen.
        </p>
        <h3>6. Links</h3>
        <p>
          Horecalijst heeft niet alle websites beoordeeld die linken naar
          Horecalijst&#x27;s website of waar op Horecalijst&#x27;s website naar
          wordt gelinkt en is niet verantwoordelijk voor de inhoud van
          dergelijke sites. De insluiting van dergelijke links impliceert geen
          goedkeuring van de gelinkte sites door Horecalijst. Gebruik van
          dergelijke gelinkte websites is op eigen risico van de gebruiker.
        </p>
        <h3>7. Wijzigingen</h3>
        <p>
          Horecalijst kan de gebruiksvoorwaarden van deze website op elk moment
          wijzigen of herzien zonder voorafgaande verwittiging. Door het gebruik
          van deze website stemt u ermee in gebonden te zijn door de op dat
          moment geldende versie van deze gebruiksvoorwaarden.
        </p>
        <h3>8. Toepasselijk recht</h3>
        <p>
          Deze gebruiksvoorwaarden worden aangevoerd door en geïnterpreteerd in
          overeenstemming met de Belgische wet en u onderwerpt zich
          onherroepelijk aan de exclusieve bevoegdheid van de rechtbanken in die
          staat of op die locatie.
        </p>
      </div>
    </Layout.Content>
    <Footer />
  </Layout>
);

export default Terms;
