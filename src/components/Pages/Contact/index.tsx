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
        <p>Vragen of opmerkingen? Laat het ons weten. We zijn één en al oor!</p>

        <div className={styles.info}>
          <div>
            <strong className={styles.item}>Wouter De Schuyter</strong>
            <div className={styles.item}>
              <FaEnvelope />{' '}
              <a href="mailto:info@horecalijst.be">info@horecalijst.be</a>
            </div>
            <div className={styles.item}>
              <FaPhoneAlt /> <a href="tel:+32479228210">+32 479 22 82 10</a>
            </div>
          </div>
        </div>
      </div>
    </Layout.Content>
    <Footer />
  </Layout>
);

export default Contact;
