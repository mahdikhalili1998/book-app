import React from "react";
import styles from "../components/css/layout.module.css";
import { FaHeart } from "react-icons/fa";
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h3 className={styles.h3}>Book App</h3>
        <p className={styles.text}>
          <a className={styles.anker} href="mahdi_lhj/instagram.com">
            mahdi khalili
          </a>{" "}
          | this is practice
        </p>
      </header>
      {children}
      <footer style={{textAlign:'center',display:'flex',justifyContent:'center'}}>
        <p className={styles.footer}>
          This file make with love , your lover Mahdi <FaHeart />
        </p>
      </footer>
    </>
  );
}

export default Layout;
