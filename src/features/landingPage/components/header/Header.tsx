"use client";
import React, { RefObject } from 'react';
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import { useState } from "react";
import useWindowWidth from "@/utils/useWindowWidth";

interface HeroProps {
  heroRef: RefObject<HTMLElement>;
  sponsorsRef: RefObject<HTMLElement>;
  getAppRef: RefObject<HTMLElement>;
  aboutUsRef: RefObject<HTMLElement>;
  featuresRef: RefObject<HTMLElement>;
  teamRef: RefObject<HTMLElement>;
  contactUsRef: RefObject<HTMLElement>;
}


const Header:React.FC<HeroProps> = ({
    heroRef,
    aboutUsRef,
    featuresRef,
    contactUsRef
  }
) => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const windowWidth = useWindowWidth()
  const isMobile = windowWidth <= 1000

  const scrollToSection = (sectionRef: any) => {
    sectionRef?.current?.scrollIntoView(true);
  };

  const landingPageSections = [
    {
      label: "Home",
      onClick: ():void => scrollToSection(heroRef),
    },
    {
      label: "About us",
      onClick: ():void  => scrollToSection(aboutUsRef),
    },
    {
      label: "Features",
      onClick: ():void  => scrollToSection(featuresRef),
    },
    {
      label: "Contact",
      onClick: ():void  => scrollToSection(contactUsRef),
    },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          className={styles.logo}
          src={"/brandLogo.svg"}
          alt="Home synk logo"
          width={windowWidth <= 1300 ? 180 : 235.88}
          height={windowWidth <= 1300 ? 38 : 45}
          priority
        />

       {  windowWidth <= 1000 && isMobile && <Image
          src={showNav ? "/closeNav.svg" : "/hamburger.svg"}
          alt="Toggle navigation"
          width={48}
          height={48}
          priority
          onClick={() => setShowNav((prev) => !prev)}
        />}
      </div>

      {(!isMobile || showNav) && (
        <nav className={styles.navContainer}>
          <ul className={styles.navList}>
            {landingPageSections.map((item, index) => (
              <li key={index} className={styles.navItem}>
                <Link 
                  href=""
                  onClick={(e) => {e.preventDefault(); item?.onClick()}}
                >{item?.label}</Link>
               { isMobile && <button
                  aria-label={`Scroll to ${item}`}
                  onClick={() => setShowNav((prev) => !prev)}
                >
                  <Image
                    src={"/arrow-right.svg"}
                    alt={"Scroll to" + item}
                    width={24}
                    height={24}
                    priority
                  />
                </button>}
              </li>
            ))}
            <li className={styles.navItem}>
              <Link href="tel:+2348028016109">
                <span className={styles.span}>Customer Services</span>
                (234) 123-4567
              </Link>
              <button
                aria-label="Call customer services"
                onClick={() => setShowNav((prev) => !prev)}
              >
                <Image
                  src={"/phone.svg"}
                  alt="Phone icon"
                  width={ isMobile ? 28 : 40}
                  height={isMobile ? 28 : 40}
                  priority
                />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

Header.displayName = "Header";
export default Header;
