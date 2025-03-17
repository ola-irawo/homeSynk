import React from "react";
import styles from "./JoinAsAgent.module.css";
import Image from "next/image";

const JoinAsAgent = () => {
  return (
    <section id="hero" className={styles.container}>
      {/* Left Section */}
      <section className={styles.leftSection}>
        <div className={styles.leftSectionContent}>

          <h2>Join as a propoerty Agent</h2>
          <p>
            Are you a property agent looking to expand your opportunities and grow your business? Partner with us and gain access to a wide network of clients, exclusive listings, and the tools you need to succeed. Register today and become part of a trusted platform that connects agents with buyers, renters, and investors. Let’s work together to achieve your goals
          </p>
          <button className={styles.button}>
            <span>
              Register Now
            </span>
            
            <Image
              src={"/sendIcon.png"}
              alt="Send Icon"
              aria-hidden="true"
              width={34}
              height={34}
            />
          </button>
        </div>
      </section>
      
      {/* Right Section */}
      <section >
        <form action="" className={styles.rightSection}>
            <input type="text" placeholder="Name" className={styles.input} />
            <input type="email" placeholder="Email" className={styles.input} />
            <input type="tel" placeholder="Phone Number(Whatsapp Preferably)" className={styles.input} />
            <input type="text" placeholder="Years of Experience" className={styles.input} />
            <input type="text" placeholder="Your Operating Area" className={styles.input} />
            <textarea  placeholder="Any Notes or Additional Details" className={styles.textarea} />
            <button className={styles.formButton}>
             Submit
            </button>
        </form>
      </section>
    </section>
  );
};

export default JoinAsAgent;
