"use client";

import React, { useActionState } from "react";
import styles from "./joinAsAgent.module.css";
import Image from "next/image";
import { submitAgentForm } from "@/app/server-actions/findHouse/action";

const JoinAsAgent = () => {
  const [formState, formAction] = useActionState(submitAgentForm, { success: null, message: "" });

  return (
    <section id="hero" className={styles.container}>
      {/* Left Section */}
      <section className={styles.leftSection}>
        <div className={styles.leftSectionContent}>
          <h2>Join as a Property Agent</h2>
          <p>
            Are you a property agent looking to expand your opportunities and grow your business?
            Partner with us and gain access to a wide network of clients, exclusive listings, and the tools you need to succeed.
            Register today and become part of a trusted platform that connects agents with buyers, renters, and investors. 
            Let’s work together to achieve your goals.
          </p>
          <button className={styles.button}>
            <span>Register Now</span>
            <Image src={"/sendIcon.png"} alt="Send Icon" aria-hidden="true" width={34} height={34} />
          </button>
        </div>
      </section>

      {/* Right Section */}
      <section>
        <form action={formAction} className={styles.rightSection}>
          <input type="text" name="name" placeholder="Name" className={styles.input} required />
          <input type="email" name="email" placeholder="Email" className={styles.input} required />
          <input type="tel" name="phone" placeholder="Phone Number (WhatsApp Preferably)" className={styles.input} required />
          <input type="text" name="experience" placeholder="Years of Experience" className={styles.input} required />
          <input type="text" name="operatingArea" placeholder="Your Operating Area" className={styles.input} required />
          <textarea name="anyNotes" placeholder="Any Notes or Additional Details" className={styles.textarea}></textarea>

          <button type="submit" className={styles.formButton}>
            Submit
          </button>

          {/* Display Success/Error Message */}
          {formState.success !== null && (
            <p className={formState.success ? styles.successMessage : styles.errorMessage}>
              {formState.message}
            </p>
          )}
        </form>
      </section>
    </section>
  );
};

export default JoinAsAgent;
