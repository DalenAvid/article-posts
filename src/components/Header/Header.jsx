import React, { useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.navMenu} ${isMenuOpen ? styles.open : ""}`}>
        <a href="#blog" className={styles.navItem}>Blog</a>
        <a href="#press" className={styles.navItem}>Press</a>
        <a href="#join-us" className={styles.navItem}>Join Us</a>
      </nav>
      <button className={styles.burgerMenu} onClick={toggleMenu}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </button>
    </header>
  );
};

export default Header;
