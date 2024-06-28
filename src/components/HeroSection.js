import React from "react";
import Button from "./Button";
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <h2>
            <span>SINC Partners is a service</span>
            <span>incubation company</span>
          </h2>
          <p>
            Connecting experts in product development and growth marketing
            willing to offer their services to amazing startups in exchange for
            minute equity (usually 0.5% to 2%).
          </p>
          <Button className={styles.button}>SINC With Us</Button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="https://s3-alpha-sig.figma.com/img/abb0/c7a2/0efff7a9c9d7f75651fd8441c39f2496?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GfmppBlskZzg6fxaErrTzJlB9u~2xkL8Vm71LF-PEIrXgBI-xD~6uxmU1Q-8n2AdVQPD~wTY8a5wrWoQk60CfkwSV0o6nUmDRuzsKH~uzuZ26Kw4cRdAn28g9-W~xGp9i7gaKdQTfuZ21wCDFNIEu7g3LLsegAgtvIqeMfkNwb55GoB6odU85XBuYSKbOUhCg-ytHYhzr9KwGi70wydoea5zO5GyU0u8eU8mW0sF9wU32no0BcwFn5ZP42bZhk32jjsfNeqZc-GUQStlCknLTusZ1no-8oZPcCqNn757YVIlmD9RBVKp0DhveeTv-W~dTtGvDvR1ElCjugS0mWiqpg__"
          alt="Online"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default HeroSection;
