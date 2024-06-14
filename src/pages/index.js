import React from "react";
import Layout from "../components/Layout";
import ImageCarousel from "../components/ImageCarousel";
import Menu from "../components/Menu";

const images = [
  "/assets/amore-outside.jpg",
  "/assets/amore-mussels.jpg",
  
 
 
  
  
  "/assets/amore-drinkfood.jpg",
  
  
  
  
  
  
  
];

const HomePage = () => {
  return (
    <Layout>
      <div>
        <ImageCarousel images={images} />
        <div id="menu">
          <Menu />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
