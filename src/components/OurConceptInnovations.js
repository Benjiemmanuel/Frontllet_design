import React from "react";
import styles from "../styles/OurConceptInnovations.module.css";

const OurConceptInnovations = () => {
  return (
    <div className={styles.innovationscontainer}>
      <div className={styles.innovationsheader}>
        <h2>Our Concept Innovations</h2>
        <p>
          We have proprietary concept innovations that will support the startup
          ecosystem, support solution-providers/entrepreneurs and ultimately
          help democratize success;
        </p>
      </div>
      <div className={styles.innovations}>
        <div className={styles.innovationItem}>
          <p className={styles.innovationItemTitle}>Service Incubator</p>
          <p className={styles.innovationItemMessage}>
            A service-for-shares model of incubating pre-product startups and
            early-stage companies by building their early stage product and MVP
          </p>
        </div>
        <div className={styles.innovationItem}>
          <p className={styles.innovationItemTitle}>Virtualting</p>
          <p className={styles.innovationItemMessage}>
            A resource share model that allows companies share the time of
            resources (employees, consultants, technical advisers or
            influencers) while also splitting the service cost of the resource
          </p>
        </div>
        <div className={styles.innovationItem}>
          <p className={styles.innovationItemTitle}>Diiming</p>
          <p className={styles.innovationItemMessage}>
            A progressive investment model that allows you to put aside income
            (disposable or non-disposable) as investment over a period towards
            an investment or spend of your choice 
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurConceptInnovations;
