import React from "react";

import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

export function Menu() {
  return (
    <div className={styles.containerMenu}>
      <Link className={styles.menuItem} to="/link">
        Meus Links
      </Link>
    </div>
  );
}
