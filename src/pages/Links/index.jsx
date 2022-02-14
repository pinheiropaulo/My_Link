import React from "react";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

export function Links() {
  return (
    <div className={styles.linksContainer}>
      <div className={styles.linksHeader}>
        <Link to="/">
          <FiArrowLeft size={30} color="#FFF" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      <div className={styles.linksItems}>
        <button className={styles.link}>
          <FiLink size={18} color="#FFF" />
          https://www.google.com.br/
        </button>

        <button className={styles.linkDelete}>
          <FiTrash size={28} color="#FF5454" />
        </button>
      </div>
    </div>
  );
}
