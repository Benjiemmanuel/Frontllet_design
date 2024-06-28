import React from "react";
import styles from "../styles/AreaOfFocus.module.css";

const AreaOfFocus = () => {
  return (
    <div className={styles.AreaOfFocuscontainer}>
      <div className={styles.AreaOfFocusheader}>
        <h2>Our Area of Focus</h2>
        <p>
          In our quest to help make success available to everyone, we have
          initial strategic direction to focus on these five (5) key areas at
          the lab
        </p>
      </div>
      <div className={styles.AreaOfFocusItems}>
        <div className={styles.focusItem}>
          <p className={styles.focusItemNumber}>01</p>
          <p className={styles.focusItemTitle}>Business Support & Incubation</p>
        </div>
        <div className={styles.focusItem}>
          <p className={styles.focusItemNumber}>02</p>
          <p className={styles.focusItemTitle}>On-Demand & As-A-Service</p>
        </div>
        <div className={styles.focusItem}>
          <p className={styles.focusItemNumber}>03</p>
          <p className={styles.focusItemTitle}>Marketplace & Crowdsourcing</p>
        </div>
        <div className={styles.focusItem}>
          <p className={styles.focusItemNumber}>04</p>
          <p className={styles.focusItemTitle}>Aggregation & Shared Economy</p>
        </div>
        <div className={styles.focusItem}>
          <p className={styles.focusItemNumber}>05</p>
          <p className={styles.focusItemTitle}>
            Decentralized Economy & Digital Assets
          </p>
        </div>
      </div>
    </div>
  );
};

export default AreaOfFocus;
