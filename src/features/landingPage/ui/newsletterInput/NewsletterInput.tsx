import React, { useEffect, useState } from 'react'
import styles from "./newsletter-input.module.css"
import { joinWaitlist } from '@/app/server-actions/landing-page/actions'
import StatusMessage from '../statusMessage/StatusMessage'

interface Message {
  message?: string,
  error?: string,
}


const NewsletterInput:React.FC = () => {
  const [email, setEmail] = useState("")
  const [statusMessage, setStatusMessage] = useState<string | any>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
      const res = await joinWaitlist(formData)
      console.log(res)
      setStatusMessage(res)
      setEmail("")
  }

  useEffect(() => {
    setTimeout(() => {
      setStatusMessage("")
    }, 5000);
  }, [statusMessage])

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {statusMessage && <StatusMessage message={statusMessage} />}
      <input 
        type="email"
        name="email"
        value={email}
        placeholder="Enter your email address"
        aria-label="Enter your email address"
        onChange={(e) => setEmail(e.target.value)}
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
