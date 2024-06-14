import React from "react";
import styles from "../styles/Menu.module.css";

const Menu = () => {
  const menuItems = [
    {
      danish: "LET-SALTET OKSEMØRBRAD",
      italian: "CARNE SALATA E GIARDINIERA",
      price: "85",
    },
    {
      danish: "UMBRISK SKINKE MIN. 4ÅR",
      italian: "PROSCIUTTO UMBRO",
      price: "150",
    },
    {
      danish: "DAGENS GRØNNE SALAT",
      italian: "INSALATA DEL GIORNO",
      price: "25",
    },
    {
      danish: "FOCACCIA MED OST",
      italian: "FOCACCIA DI RECCO",
      price: "65",
    },
    {
      danish: "FRITTEREDE CALAMARI",
      italian: "CALAMARI FRITTI",
      price: "85",
    },
    {
      danish: "FRITTERET PIZZA",
      italian: "PIZZA FRITTA",
      price: "100",
    },
    {
      danish: "SICILIANSK KARTOFFELSALAT",
      italian: "INSALATA DI PATATE ALLA SICILIANA",
      price: "65",
    },
    {
      danish: "MINI KØDBOLLER I TOMATSAUCE",
      italian: "POLPETTINE IN SUGO",
      price: "75",
    },
    {
      danish: "SAUTERET ZUCCHINI",
      italian: "TRIFOLATO DI ZUCCHINE IN PADELLA",
      price: "65",
    },
    {
      danish: "SKALDYR MED CHILI/TOMATOLIE",
      italian: "GUAZZETTO DI MARE",
      price: "100",
    },
    {
      danish: "BLØD POLENTA OG POLPO RAGU",
      italian: "POLENTA E RAGU DI POLPO",
      price: "95",
    },
    {
      danish: "DAGENS FISK AL AMORE",
      italian: "PESCE DEL GIORNO IN PADELLONE",
      price: "100",
    },
    {
      danish: "PACCHERI I JOMFRUHUMMERBISQUE",
      italian: "PACCHERI AL SUGO DI SCAMPI",
      price: "100",
    },
    {
      danish: "SPAGHETTI M. SARDINER PINJEKERNER",
      italian: "SPAGHETTI CON LE SARDE",
      price: "100",
    },
    {
      danish: "TAGLIATELLE M. SMØR OG PARMESAN",
      italian: "TAGLIATELLE BURRO E PARMIGGIANO",
      price: "120",
    },
    {
      danish: "CANDELE PASTA M. RAGU GENOVESE",
      italian: "CANDELE AL RAGU GENOVESE",
      price: "85",
    },
    {
      danish: "CREME CARAMEL",
      italian: "CREME CARAMEL",
      price: "50",
    },
    {
      danish: "GRANITA MED BRIOCHE",
      italian: "GRANITA E BRIOCHE",
      price: "65",
    },
    {
      danish: "DAGENS HJEMMELAVEDE IS",
      italian: "GELATO DEL GIORNO",
      price: "55",
    },
  ];

  return (
    <article className={styles.menuList}>
      <h2>The Menu</h2>
      <div className={styles.menuItemsContainer}>
        {menuItems.map((item, index) => (
          <div key={index} className={styles.menuItem}>
            <div className={styles.menuItemText}>
              <span className={styles.danish}>{item.danish}</span>
              <span className={styles.price}>{item.price}</span>
              <span className={styles.italian}>{item.italian}</span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Menu;
