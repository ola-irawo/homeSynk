"use client"
import React, { useEffect, useState } from 'react'
import styles from "./footer.module.css"
import useWindowWidth from '@/utils/useWindowWidth'
import Image from 'next/image'
import Link from 'next/link'
import { joinWaitlist } from '@/app/server-actions/landing-page/actions'
import StatusMessage from '../../ui/statusMessage/StatusMessage'

const Footer = () => {
    const windowWidth = useWindowWidth()
    const isTab = windowWidth >= 1000
    const [email, setEmail] = useState("")
    const [statusMessage, setStatusMessage] = useState<string | any>("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
  
      const formData = new FormData(e.currentTarget)
  
        const res = await joinWaitlist(formData)
        setStatusMessage(res)
        setEmail("")
  
    }

    useEffect(() => {
      setTimeout(() => {
        setStatusMessage("")
      }, 5000);
    }, [statusMessage])

  return (
    <footer className={styles.footer}>
      {statusMessage && <StatusMessage message={statusMessage} />}
      <div className={styles.footerWrapper}>

        <div className={styles.newsForm}>
          <Image
            className={styles.logo}
            src={"/brandLogo.svg"}
            alt="Home synk logo"
            width={windowWidth <= 1300 ? 180 : 235.88}
            height={windowWidth <= 1300 ? 38 : 45}
            priority
          />
        
          <div className={styles.e}>
            <header>
              <h2>Enter your email</h2>
              <p>Use correct email address so as not to miss out.</p>
            </header>
          
            <form onSubmit={handleSubmit} className={styles.form}>
              <input 
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email address"
                aria-label="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
                aria-label="Get early access to the newsletter"
              >
                Send
              </button>
            </form>
          </div>
        </div>


        <div className={styles.footerLinks}>
          {isTab && <hr/>}
          <div className={styles.footerLinksWrapper}>

            <ul className={styles.socialLinksList}>

              <li className={styles.socialLinksItem}>
                <Link href={""}>
                  <Image
                    className={styles.socialIcon}
                    src={"/facebook.svg"}
                    alt="Facebook logo"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>

              <li className={styles.socialLinksItem}>
                <Link href={""}>
                  <Image
                    className={styles.socialIcon}
                    src={"/whatsapp.svg"}
                    alt="Whatsapp logo"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>

              <li className={styles.socialLinksItem}>
                <Link href={""}>
                  <Image
                    className={styles.socialIcon}
                    src={"/instagram.svg"}
                    alt="Instgram logo"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>

              <li className={styles.socialLinksItem}>
                <Link href={""}>
                  <Image
                    className={styles.socialIcon}
                    src={"/twitter.svg"}
                    alt="X (formerly known as twitter) logo"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>

            </ul>


            <ul className={styles.quickLinksList}>
              <li className={styles.quickLinksItem}>
                <Link href={""}>About Us</Link>
              </li>
              
              <li className={styles.quickLinksItem}>
                <Link href={""}>Features</Link>
              </li>

              <li className={styles.quickLinksItem}>
                <Link href={""}>Contact Us</Link>
              </li>
            </ul>
        </div>
        </div>

      </div>

    </footer>
  )
}

Footer.displayName = "Footer";
export default Footer
