import React from 'react'
import styles from "./form.module.css"
import SendArrow from '../../assets/blueSendArrow.png'
import Image from 'next/image';

const Form = () => {
  return (
    <section className={styles.formContainer}>
      
      <form>
        <section className={styles.buttonGroup}>
          <button type="button">Rent</button>
          <button type="button">Buy</button>
        </section>
      
        <section className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <div className={styles.field}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                placeholder="e.g. Alex Tolu"
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="e.g. alextolu@gmail.com"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.field}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="+234"
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="homeType">Home Type</label>
              <input
                type="text"
                id="homeType"
                placeholder="2 Bedroom Apartment"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.field}>
              <label htmlFor="address">Select Preferred Location</label>
              <input
                type="text"
                id="address"
                placeholder="Ikeja, Ogba, Lekki"
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="budget">What's Your Budger</label>
              <input
                type="text"
                id="budget"
                placeholder="₦300,000 - ₦500,000"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              className={styles.textarea}
            ></textarea>
          </div>

          <button type="submit" className={styles.button}>
            <span>
              Submit
            </span>

            <Image
              className={styles.showOnTabAndDesktop}
              src={SendArrow}
              alt="Send Icon"
              aria-hidden="true"
              width={20}
              height={20}
            />
            {/* {SendArrow} */}
          </button>
        </section>
      </form>
    </section>
  );
};

export default Form
