import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import findHouse from "./findHouseLogo.png";

const Hero = () => {

  return (
    <section className={styles.hero}>
        <Image 
            src={findHouse}
            alt="Brand logo" 
            width={300}
            height={50}
            className={styles.logo} 
            priority
        />

        <h2 className={styles.heading}>Want to Rent or Buy a Property?</h2>

        <p className={styles.description}>
        Find your dream property with ease! Whether you’re looking to rent or buy, we’re here to help. Share your details below, and we’ll match you with the perfect options tailored to your needs.
        </p>
    </section>
  );
};

export default Hero;
