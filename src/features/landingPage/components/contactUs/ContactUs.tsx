"use client"
import React, {forwardRef} from 'react'
import styles from "./contact-us.module.css"
import { contactUs } from '@/app/server-actions/landing-page/actions'

const ContactUs = forwardRef<HTMLElement>(({}, contactUsRef) => {
  return (
    <section ref={contactUsRef} className={styles.contactContainer}>

        <div className={styles.contactWrapper}>
            <header className={styles.contactHeader}>
                <span>Reach out to us</span>
                <h2>Have an idea? Let&#39;s talk.</h2>
                <p>
                    Have a vision you&rsquo;d like to bring to life? Let&rsquo;s connect and explore how we can make it happen together.
                </p>
            </header>

            <form action={contactUs} className={styles.contactForm}>
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

                    <label htmlFor="name">
                        <h3>Emaill address</h3>
                        <input
                            type="email"
                            name="email"
                            placeholder="eg. alextolu@gmail.com"
                            required
                        />
                    </label>

                    <label htmlFor="name">
                        <h3>Phone Number</h3>
                        <input
                            type="text"
                            name="number"
                            placeholder="+234"
                            required
                        />
                    </label>

                    <label htmlFor="name">
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

ContactUs.displayName = "ContactUs";

export default ContactUs
