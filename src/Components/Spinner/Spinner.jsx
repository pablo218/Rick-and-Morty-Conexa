import React from "react";
import styles from "./Spinner.module.scss";

export const Spinner = ({ className }) => {
  return (
    <div className={`${styles.spinner} ${className}`}>
      <div className={styles.ldsHourglass}></div>
    </div>
  );
};
