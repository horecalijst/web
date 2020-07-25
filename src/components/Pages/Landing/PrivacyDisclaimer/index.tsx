import React from 'react';

import styles from './styles.module.css';

const PrivacyDisclaimer = () => (
  <div className={styles.privacyDisclaimer}>
    ⚠️ Privacy is belangrijk, dat vinden wij ook. Uw gegevens worden op een
    veilige manier bijgehouden en zijn enkel toegangkelijk voor autoriteiten op
    verzoek.{' '}
    <strong>
      Na 14 dagen worden deze gegevens ook weer automatisch verwijderd.
    </strong>
  </div>
);

export default PrivacyDisclaimer;
