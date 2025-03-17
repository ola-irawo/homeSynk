"use client"
import Image from 'next/image'
import React from 'react';
import styles from "./sponsors.module.css"

const Sponsors = (() => {
  return (
    <section>
      <div className={styles.sponsorsWrapper}>
        <Image
          src={"/sponsors.svg"}
          alt="Sponsors"
          width={100}
          height={62}
        />
      </div>
    </section>
  )
})

// Sponsors.displayName = "Sponsors";
export default Sponsors
