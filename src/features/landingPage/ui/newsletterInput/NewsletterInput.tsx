import React from 'react'
import styles from "./newsletter-input.module.css"

const NewsletterInput:React.FC = () => {
  return (
    <form className={styles.form}>
      <input 
        type="email"
        name="email"
        placeholder="Enter your email address"
        aria-label="Enter your email address"
    />

    <button
      aria-label="Get early access to the newsletter"
    >
        Get Early Access
    </button>
    </form>
  )
}

export default NewsletterInput
