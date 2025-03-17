"use client"
import React, { useEffect, useState} from 'react'
import styles from "./contact-us.module.css"
import { contactUs } from '@/app/server-actions/landing-page/actions'
import StatusMessage from '../../ui/statusMessage/StatusMessage'

const ContactUs = (() => {
    const [status, setStatus] = useState<string | any>("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const formData = new FormData(event.currentTarget);
        const res = await contactUs(formData);
        setStatus(res);
        event.currentTarget.reset(); 
      };

      useEffect(() => {
        setTimeout(() => {
          setStatus("")
        }, 5000);
      }, [status])
    
  return (
    <section id="contact" className={styles.contactContainer}>
        {status && <StatusMessage message={status} />}
        <div className={styles.contactWrapper}>
            <header className={styles.contactHeader}>
                <span>Reach out to us</span>
                <h2>Have an idea? Let&#39;s talk.</h2>
                <p>
                    Have a vision you&rsquo;d like to bring to life? Let&rsquo;s connect and explore how we can make it happen together.
                </p>
            </header>

            <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.contactInput}>
                    <label htmlFor="name">
                        <h3>Full Name</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="eg. Alex Tolu"
                            required
                        />
                    </label>

                    <label htmlFor="email">
                        <h3>Emaill address</h3>
                        <input
                            type="email"
                            name="email"
                            placeholder="eg. alextolu@gmail.com"
                            required
                        />
                    </label>

                    <label htmlFor="number">
                        <h3>Phone Number</h3>
                        <input
                            type="text"
                            name="number"
                            placeholder="+234"
                            required
                        />
                    </label>

                    <label htmlFor="subject">
                        <h3>Subject</h3>
                        <input
                            type="text"
                            name="subject"
                            placeholder="eg. Alex Tolu"
                            required
                        />
                    </label>
                </div>

                <label className={styles.message}> 
                    <h3>Message</h3>
                    <textarea 
                        name="message"
                        placeholder="Enter your message"
                        required
                    />
                </label>

                <button>
                    Submit
                </button>

            </form>
        </div>

    </section>
  )
})

export default ContactUs
