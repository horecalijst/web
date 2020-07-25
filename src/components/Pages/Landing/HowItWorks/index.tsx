import Link from 'next/link';
import React from 'react';

import styles from './styles.module.css';

const HowItWorks = () => (
  <div className={styles.howItWorks}>
    <h2 id="hoe-het-werkt">Hoe werkt het?</h2>
    <p>
      U bent restauranthouder of werkt elders in de horeca? Leuk! Jammer genoeg
      zijn de voorbije maanden niet makkelijk geweest. De bijkomende
      coronamaatregelen zoals het bijhouden (en het vernietigen) van
      contactgegevens van klanten daar bovenop maken het er ook zeker niet
      eenvoudiger op.
    </p>
    <p>
      Dit is waar Horecalijst jou met kan helpen! Voor slechts{' '}
      <strong>€10 per maand</strong> kan je jouw zaak bij ons aansluiten.{' '}
      <strong>
        Wij handelen alles inzake het bewaren &amp; vernietigen van
        contactgegevens voor u af.
      </strong>{' '}
      De klant moet hier zijn gegevens invullen op basis van een self-service
      principe. Wanneer u gecontacteerd zou worden door een contacttracing
      center kan u hen deze gegevens overhandigen via deze tool.
    </p>

    <div className={styles.cta}>
      <Link href="/mijn-zaak">
        <a>Probeer het gratis!</a>
      </Link>
    </div>
  </div>
);

export default HowItWorks;
