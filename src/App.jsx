import React from "react";
import { RoutesApp } from "./routes";

import styles from "./app.module.scss";

export function App() {
  return (
    <div className={styles.app}>
      <RoutesApp />
    </div>
  );
}
