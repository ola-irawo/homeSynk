import React from 'react'
import styles from "./newsletter-input.module.css"
import { joinWaitlist } from '@/app/server-actions/landing-page/actions'

const NewsletterInput:React.FC = () => {
  return (
    <form action={joinWaitlist} className={styles.form}>
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
