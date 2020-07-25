import Link from 'next/link';
import React from 'react';

import styles from './styles.module.css';

const HowItWorks = () => (
  <div className={styles.howItWorks}>
    <h2 id="hoe-het-werkt">Hoe werkt het?</h2>
    <p>
      Voor u als horeca-uitbater is het bijhouden van de contactgegevens van uw
      klanten de nieuwste in een steeds langer wordende lijst van
      coronamaatregelen. Voor slechts <strong>€10 per maand</strong> verzorgt
      Horecalijst de correcte registratie, opslag (én automatische vernietiging)
      van de klantengegevens.
    </p>
    <p>
      U vraagt uw klanten bij het binnenkomen hun gegevens in te vullen bij
      Horecalijst. Dit kan eenvoudigweg via hun eigen smartphone. Wordt uw zaak
      gecontacteerd in het kader van een officieel contactonderzoek? Horecalijst
      zorgt voor een geautomatiseerde export van de nodige gegevens, zonder de
      privacy van uw klanten in het gedrang te brengen.
    </p>

    <div className={styles.cta}>
      <Link href="/zakelijk">
        <a>Probeer het gratis!</a>
      </Link>
    </div>
  </div>
);

export default HowItWorks;
