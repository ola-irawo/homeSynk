"use client"
import React from 'react'
import styles from "./team.module.css"
import Image from 'next/image'

const Team = (() => {
  return (
    <section className={styles.teamContainer}>
        <div className={styles.teamWrapper}>
            <Image
                src="/coFounder1.png"
                width={343}
                height={343}
                alt="Co-founder"
                className={styles.coFounder}
            />
            
            <article className={styles.teamVision}>
                <p>
                At HomeSynk, we set out to build a platform that makes property management simpler and more efficient for everyone. We believe in empowering owners, managers, and tenants with tools that bring clarity, streamline tasks, and foster stronger relationships. Our mission is to take the stress out of property management so you can focus on what really matters. Thank you for joining us on this journey—we’re thrilled to have you with us!”
                </p>
                <h2 className={styles.p}>Nwamini Emmanuel</h2>
                <span>Software Engineer, Co-Founder HomeSynk</span>
            </article>
        </div>
    </section>
  )
})

export default Team
