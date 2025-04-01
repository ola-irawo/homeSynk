"use client";

import React, { useActionState, useEffect, useState } from "react";
import {submitForm} from "@/app/server-actions/findHouse/action";
import styles from "./form.module.css"
import SendArrow from '../../assets/blueSendArrow.png'
import Image from 'next/image';

const Form = () => {
  const [formState, formAction] = useActionState(submitForm, { success: null, message: "" });
  const [actionType, setActionType] = useState("rent");

  const name = "Alex"
  // console.log(name.charAt(0).toUpperCase() + name.slice(1))
  return (
    <section className={styles.formContainer}>
      <form action={formAction}>
        {/* Buy/Rent Toggle Buttons */}
        <section className={styles.buttonGroup}>
          <button type="button" onClick={() => setActionType("rent")}>Rent</button>
          <button type="button" onClick={() => setActionType("buy")}>Buy</button>
        </section>

        <input type="hidden" name="actionType" value={actionType} />

        {/* Form Inputs */}
        <section className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <div className={styles.field}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="fullName" placeholder="e.g. Alex Tolu" className={styles.input} required />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="e.g. alextolu@gmail.com" className={styles.input} required />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.field}>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="+234" className={styles.input} required />
            </div>
            <div className={styles.field}>
              <label htmlFor="homeType">Home Type</label>
              <input type="text" id="homeType" name="homeType" placeholder="2 Bedroom Apartment" className={styles.input} required />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.field}>
              <label htmlFor="address">Select Preferred Location</label>
              <input type="text" id="address" name="address" placeholder="Ikeja, Ogba, Lekki" className={styles.input} required />
            </div>
            <div className={styles.field}>
              <label htmlFor="budget">What's Your Budget</label>
              <input type="text" id="budget" name="budget" placeholder="₦300,000 - ₦500,000" className={styles.input} required />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Enter your message" className={styles.textarea}></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className={styles.button}>
            {/* <span>{pending ? "Submitting..." : "Submit"}</span> */}
            <span>Submit</span>
            <Image className={styles.showOnTabAndDesktop} src={SendArrow} alt="Send Icon" aria-hidden="true" width={20} height={20} />
          </button>

          {/* Display Success/Error Message */}
          {formState.success !== null && (
            <p className={formState.success ? styles.successMessage : styles.errorMessage}>
              {formState.message}
            </p>
          )}
        </section>
      </form>
    </section>
  );
};

export default Form;