"use client"
import React from 'react'
import styles from "./about-us.module.css"
import Image from 'next/image'

const AboutUs = (() => {

  return (
    <section id="about-us" className={styles.aboutContainer}>
        <div className={styles.aboutWrapper}>
            <article className={styles.aboutContent}>
                <span>Who we are at Homesynk</span>
                <h2>About Homesynk</h2>
                <p>
                    HomeSynk was created with a mission to redefine property management through simplicity, innovation and efficiency. We believe managing properties should be effortless, transparent, and accessible for everyone involved—whether you&rsquo;re an owner, manager, or tenant. Our platform combines powerful features with a user-friendly design to support every aspect of property management. From tracking maintenance requests to managing lease agreements and payments, HomeSynk keeps everything in sync to save you time and maximize your property&lsquo;s value.
                    HomeSynk is more than just an app; it&apos;s a community committed to enhancing the property management experience. Join us on our journey to make property management simpler, smarter, and more connected.
                </p>
            </article>

            <Image
                src={"/aboutImage.svg"}
                alt='House'
                width={343}
                height={343}
                className={styles.aboutImage}
            />
        </div>
    </section>
  )
}
)

export default AboutUs
