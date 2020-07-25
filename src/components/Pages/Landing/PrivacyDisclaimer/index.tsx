import React from 'react';

import styles from './styles.module.css';

const PrivacyDisclaimer = () => (
  <div className={styles.privacyDisclaimer}>
    ⚠️ Privacy is belangrijk, dat vinden wij ook. Jouw gegevens worden{' '}
    <strong>veilig opgeslagen</strong> en worden enkel gedeeld met bevoegde
    autoriteiten in het kader van contactonderzoek.{' '}
    <strong>
      Na 14 dagen worden jouw gegevens ook steeds definitief verwijderd.
    </strong>
  </div>
);

export default PrivacyDisclaimer;
