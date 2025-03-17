"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import styles from "./get-app.module.css"
import useWindowWidth from '@/utils/useWindowWidth'

const GetApp = () => {
  const windowWidth = useWindowWidth()

  const isTab = windowWidth >= 900

  return (
    <section  className={styles.container}>

    <div className={styles.wrapper}>

      <article className={styles.content}>
        <h2>
            Simplify your Property Management with HomeSynk
        </h2>

        <p>
            Effortlessly manage your properties all in one place. HomeSynk offers intuitive tools for property owners, managers, and tenants to stay connected, streamline tasks, and maximize property value.
        </p>

        <div className={styles.appLink}>
            <Link href="">
                <Image
                    src="/appStore.svg"
                    alt="Get app from playstore"
                    width={140}
                    height={58}
                />
            </Link>
            <Link href="">
                <Image
                    src="/playStore.svg"
                    alt="Get app from playstore"
                    width={140}
                    height={58}
                />
            </Link>
        </div>
      </article>

      <Image
         src={isTab ? "/appUi.svg" : "/appUiMobile.svg"}
         alt="Home synk user interface"
         width={isTab ? 572 : 323}
         height={isTab ? 588 : 458.27}
         className={styles.appUi}
      />
    </div>

    </section>
  )
}

GetApp.displayName = "GetApp";
export default GetApp
