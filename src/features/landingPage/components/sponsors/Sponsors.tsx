"use client"
import Image from 'next/image'
import React, { forwardRef } from 'react';
import styles from "./sponsors.module.css"

const Sponsors = forwardRef<HTMLElement>((props, ref) => {
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

export default Sponsors
