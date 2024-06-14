import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Layout.module.css";
import HamburgerMenu from "../components/HamburgerMenu";

const Layout = ({ children }) => {
  const router = useRouter();
  const [menuActive, setMenuActive] = useState(false);

  const currentPage = router.pathname.replace("/", "");
  const currentPageNormalized = currentPage.toLowerCase().replace(/\s+/g, "-");

  const menuItems = [
    { id: 1, label: "Menu", link: "/#menu" },
    { id: 2, label: "Booking", link: "https://book.dinnerbooking.com/dk/da-DK/book/index/3878/2", external: true },
    
   
    { id: 5, label: "Contact", link: "/contact" },
  ];

  const pageWithoutFooter = "takeaway";

  const shouldHideFooter = currentPage === pageWithoutFooter;

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link className={styles.homeButton} href="/">
         
          </Link>
          <HamburgerMenu menuItems={menuItems} />
        </div>

        <div className={`${styles.navLinks} ${menuActive && styles.active}`}>
          {menuItems.map((item) => (
            <div key={item.id} className={styles.navLink}>
              <Link href={item.link}>
                <p
                  className={`${styles.navLinkText} ${
                    currentPageNormalized ===
                    item.label.toLowerCase().replace(/\s+/g, "-")
                      ? styles.active
                      : ""
                  }`}
                >
                  {currentPageNormalized ===
                    item.label.toLowerCase().replace(/\s+/g, "-") && (
                    <span className={styles.dot}> •</span>
                  )}
                  {item.label}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </nav>
      <main>{children}</main>
      {currentPageNormalized !== "takeaway" && (
        <footer className={styles.footer}>
          <div className={styles.leftContainer}>
            <div className={styles.logoContainer}>
              <Link rel="stylesheet" className={styles.backToMenu} href="/">
                {" "}
                <img src="/assets/capanna-grey.svg" alt="Logo" />
              </Link>
            </div>

            <div className={styles.addressContainer}>
              <p>Gl. Kongevej 74D, st.1, Frederiksberg</p>
              <p>+45 53 77 61 20 </p>
              <a href="mailto:booking@bar-amore.dk">booking@bar-amore.dk</a>
              <p>@bar___amore</p>
            </div>
            <div className={styles.socialMediaContainer}>
              <br />
              <p className={styles.bold}>Follow us</p>
             <a href="https://www.instagram.com/bar___amore/?hl=en">
             <img src="/assets/instagram.svg" alt="Instagram" /></a> 
              <img src="/assets/facebook.svg" alt="Facebook" />  
            </div>
          </div>

          <div className={styles.rightContainer}>
            <div className={styles.logoContainer}>
             
            </div>
            <div className={styles.hoursContainer}>
              <p className={styles.bold}>Opening Hours</p>
              <p>Tuesday, Wednesday, Thursday 17:30 - 01:00</p>
              <p>Friday & Saturday 16:00 - 02:00</p> 
            </div>
            <div className={styles.sisterRestaurantsContainer}>
              <br />
              <p className={styles.bold}>Other Restaurants</p>

              <a
                href="http://mangia.dk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/Mangia-logo.png"
                  alt="Mangia"
                  style={{ height: "1rem" }}
                />
              </a>
              <br />
              <a
                href="https://www.ristorantecircolo.dk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/Circolo-logo.png" alt="Circolo" />
              </a>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
