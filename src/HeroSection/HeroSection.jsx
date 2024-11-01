import React from "react";
import styles from "./HeroSection.module.css";
import HeadphonesImage from "../assets/vibrating-headphone 1-1.png"; // Update path accordingly

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <img src={HeadphonesImage} alt="Headphones" className={styles.heroImage} />
      <div className={styles.heroText}>
        <h1>100 Thousand Songs, ad-free</h1>
        <p>Over thousands of podcast episodes</p>
      </div>
    </div>
  );
}
