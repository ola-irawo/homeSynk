"use client"
import React, { RefObject} from 'react'
import styles from "./hero.module.css"
import Image from 'next/image'
import NewsletterInput from '../../ui/newsletterInput/NewsletterInput'

const Hero:React.FC = (() => {
  return (
    <section id="hero" className={styles.heroContainer}>
      <div className={styles.heroWrapper}>

        <aside className={styles.launchingSoon}>
          <p>News</p>
          <p>We are launching in 10 days 🎉</p>

          <Image
              src={"/arrow-right.svg"}
              alt="Arrow right"
              aria-hidden="true"
              width={10.95}
              height={10.95}
          />
        </aside>

        <article className={styles.heroContent}>
          <h2>
              Your NO 1. Property Management Platform
          </h2>

          <p className={styles.p}>
              Transform your property management experience with our intuitive, all-in-one solution. Save time, maximize your investment, and manage effortlessly. Join us today!
          </p>

          <div className={styles.earlyAccess}>
              <h3>Want early access to HomeSynk?</h3>
              <p>Sign up now for exclusive early access!</p>
          </div>

          <NewsletterInput />
        </article>
      </div>
    </section>
  )
})

Hero.displayName = "Hero";
export default Hero
