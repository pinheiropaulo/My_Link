import React from "react";
import { FiLink } from "react-icons/fi";

import { Menu } from "../../components/Menu";

import Logo from "../../assets/logo.png";

import styles from "./styles.module.scss";

export function Home() {
  return (
    <div className={styles.containerHome}>
      <div className={styles.logo}>
        <img src={Logo} alt="Sujeito Link" />
        <h1>SujeitoLink</h1>
        <span>Cole seu link para encurtar</span>
      </div>

      <div className={styles.areaInput}>
        <div>
          <FiLink size={24} color="#FFF" />
          <input type="text" placeholder="Cole seu link para encurtar" />
        </div>
        <button>Gerar Link</button>
      </div>

      <Menu />
    </div>
  );
}
