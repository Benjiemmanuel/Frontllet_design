import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "../styles/OurService.module.css";

const OurService = () => {
  return (
    <div className={styles.OurServiceContainer}>
      <div className={styles.OurServiceHeader}>
        <h2>Our Service Incubation Model</h2>
        <p>
          The Service Incubation model is an alternate funding model for startup
          that allows professionals to offer their services to startups in
          return for a minute equity (usually between 0.5% to 1.5%) in the
          startup. As a service incubator, you will see your share grow as much
          as 1000% in 12 – 24 months as been first to invest.
        </p>
      </div>
      <div className={styles.OurServiceSecondContainer}>
        <div className={styles.OurServiceHypothesisContainer}>
          <div className={styles.OurServiceHypothesisHeader}>
            <h3>Hypothesis</h3>
            <p>
              Just a few reasons we know its time for this model
              within the ecosystem
            </p>
          </div>
          <div className={styles.OurServiceThreeItemsContainer}>
            <div className={styles.OurServiceHypothesisitem}>
              <div className={styles.shape_Objects}></div>
              <p>
                Most early-stage companies and pre-product startups cannot
                afford professional services especially those who don’t have
                family and friends’ network that can support
              </p>
            </div>
            <div className={styles.OurServiceHypothesisitem}>
              <div className={styles.diamond}></div>
              <p>
                If startups can seed 5-10% in equity to incubators for $20k to
                $200k funding most times, they will be willing to seed 10%
                equity for a $25k service investment
              </p>
            </div>
            <div className={styles.OurServiceHypothesisitem}>
              <div className={styles.pentagonFivesize}></div>
              <p>
                Young professionals who don’t have a lot of money to invest nor
                an accredited investors will have opportunities to take equity
                at the early stage of their career, usually been the first to
                invest and almost guaranteed of return
              </p>
            </div>
          </div>
          <div className={styles.OurServiceCaseStudyContainer}>
            <div className={styles.OurServiceCasetexts}>
              <p className={styles.OurServiceCaseTitle}>Case Study</p>
              <p className={styles.OurServiceCaseMessage}>
                See what Service Incubators get, the maths behind Service Equity
                (SEEQ) and what the value of your share equity can be over time
              </p>
            </div>
            <div className={styles.caseButtonContainer}>
              <button>Service Incubator Equity</button>
              <button>SEEQ Maths Equation</button>
              <button>Value of my Equity Over Time</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.becomeAServiceContainer}>
        <p>Become A Service Incubator</p>
        <FaArrowRight className={styles.OurServiceIconsBack} />
      </div>
    </div>
  );
};

export default OurService;
