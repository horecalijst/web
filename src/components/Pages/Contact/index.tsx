import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

import styles from './styles.module.css';

const Contact = () => (
  <Layout>
    <Meta title="Contact" />
    <Header />
    <Layout.Content>
      <div className={styles.contact}>
        <h2>Contact</h2>
        <p>
          Voor vragen en of opmerkingen kan u terecht via onderstaande gegevens.
        </p>

        <div className={styles.info}>
          <div>
            <strong className={styles.item}>Wouter De Schuyter</strong>
            <div className={styles.item}>
              <FaEnvelope /> info@horecalijst.be
            </div>
            <div className={styles.item}>
              <FaPhoneAlt /> +32 479 22 82 10
            </div>
          </div>
          <div>
            <strong className={styles.item}>Contact tracing dataverzoek</strong>
            <div className={styles.item}>
              <FaEnvelope /> contact-tracing@horecalijst.be
            </div>
          </div>
        </div>
      </div>
    </Layout.Content>
    <Footer />
  </Layout>
);

export default Contact;