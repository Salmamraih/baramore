import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <Layout>
      <div className={styles.imageContainer}>
        <img src="/assets/pastamore.jpg" alt="Logo" />
      </div>
      <article className={styles.container}>
        <div className={styles.contactInfo}>
          <div className={styles.contactInfoText}>
            <div>
              <h4>Opening hours</h4>
              <p>
                Tuesday, Wednesday, Thursday <b>17:30 - 01:00</b>
              </p>
              <p>
                Friday & Saturday <b>16:00 - 02:00</b>
              </p>
            </div>
            <div>
              <h4>Contacts</h4>
              <p>Gammel Kongevej 74, Frederiksberg</p>
              <a href="mailto:booking@bar-amore.dk">booking@bar-amore.dk</a>
              <p>+45 53 77 61 20</p>
            </div>
            {/* Removed the MapContainer and the "Reach out to us" section */}
          </div>
        </div>
        {/* Removed the formContainer div */}
      </article>
    </Layout>
  );
};

export default Contact;
