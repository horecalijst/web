import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import React, { useMemo } from 'react';

import styles from './styles.module.css';

const HowItWorks = () => {
  const { data: productData } = useQuery(
    gql`
      query product($period: String!) {
        product(period: $period) {
          value
        }
      }
    `,
    {
      variables: { period: 'MONTHLY' },
    },
  );
  const price = useMemo(() => {
    return productData?.product?.value || null;
  }, [productData?.product?.value]);

  return (
    <div className={styles.howItWorks}>
      <h2 id="hoe-het-werkt">Hoe werkt het?</h2>
      <p>
        Voor u als horeca-uitbater is het bijhouden van de contactgegevens van
        uw klanten de nieuwste in een steeds langer wordende lijst van
        coronamaatregelen. Voor slechts <strong>€{price} per maand</strong>{' '}
        verzorgt Horecalijst de correcte registratie, opslag (én automatische
        vernietiging) van de klantgegevens.
      </p>
      <p>
        U vraagt uw klanten bij het binnenkomen hun gegevens in te vullen bij
        Horecalijst. Dit kan eenvoudigweg via hun eigen smartphone. Wordt uw
        zaak gecontacteerd in het kader van een officieel contactonderzoek?
        Horecalijst zorgt voor een geautomatiseerde export van de nodige
        gegevens, zonder de privacy van uw klanten in het gedrang te brengen.
      </p>

      <div className={styles.cta}>
        <Link href="/zakelijk">
          <a>Probeer het gratis!</a>
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
