"use client"
import React from 'react'
import styles from "./features.module.css"
import Image from 'next/image'
import useWindowWidth from '@/utils/useWindowWidth'

const Features = (() => {
    const windowWidth = useWindowWidth()
    const isTab = windowWidth >= 900
  return (
    <section id="features" className={styles.featuresContainer}>
      <div  className={styles.featuresWrapper}>
        
        <header className={styles.featuresHeader}>
            <span>Our Features</span>
            <h2>Simple yet powerful features</h2>

            <p>Here is a snipet of what you will be enjoying with us.</p>
        </header>

        <article className={styles.appFeatures}>
            <ul className={styles.featuresList}>
                <li className={styles.featuresItem}>
                    <Image
                        src={"/finIcon.svg"}
                        alt="Icon"
                        width={52.87}
                        height={52.87}
                    />

                    <div className={styles.featuresDescription}>
                        <h3>Finance Management</h3>
                        <p>
                        Track expenses, income, and generate financial reports for better budgeting. Customizable reports to analyze ROI, occupancy rates, and maintenance costs.
                        </p>
                    </div>

                </li>

                <li className={styles.featuresItem}>
                    <Image
                        src={"/storIcon.svg"}
                        alt="Icon"
                        width={52.87}
                        height={52.87}
                    />

                    <div className={styles.featuresDescription}>
                        <h3>Document Storage & Sharing</h3>
                        <p>
                        Digital storage for leases, contracts, and property-related documents. Easy sharing with tenants and property managers with secure access.
                        </p>
                    </div>

                </li>

                <li className={styles.featuresItem}>
                    <Image
                        src={"/hubIcon.svg"}
                        alt="Icon"
                        width={52.87}
                        height={52.87}
                    />

                    <div className={styles.featuresDescription}>
                        <h3>Communication Hub</h3>
                        <p>
                        In-app messaging for seamless communication between tenants, property managers, and owners.
                        Broadcast notifications and updates for all tenants at once.
                        </p>
                    </div>

                </li>
                {isTab && 
                <>
                <li className={styles.featuresItem}>
                    <Image
                        src={"/tenantIcon.svg"}
                        alt="Icon"
                        width={52.87}
                        height={52.87}
                    />

                    <div className={styles.featuresDescription}>
                        <h3>Tenant & Lease Management</h3>
                        <p>
                            Centralized tenant profiles with lease tracking, history, and easy onboarding.
                            Automated reminders for lease renewals and upcoming rent due dates.
                        </p>
                    </div>

                </li>

                <li className={styles.featuresItem}>
                    <Image
                        src={"/minIcon.svg"}
                        alt="Icon"
                        width={52.87}
                        height={52.87}
                    />

                    <div className={styles.featuresDescription}>
                        <h3>Maintenance Request Tracking</h3>
                        <p>
                        Tenants can submit maintenance request with photos and details. Managers can track and prioritize requests, assign contractors, and update tenants on progress.
                        </p>
                    </div>

                </li>

                <li className={styles.featuresItem}>
                    <Image
                        src={"/mulIcon.svg"}
                        alt="Icon"
                        width={52.87}
                        height={52.87}
                    />

                    <div className={styles.featuresDescription}>
                        <h3>Multi-Property Management</h3>
                        <p>
                        Manage multiple properties and units in one centralized platform. Easily switch between properties and generate individual or consolidated reports.
                        </p>
                    </div>

                </li>
                </>
                }
            </ul>
        </article>
      </div>
    </section>
  )
})

export default Features
