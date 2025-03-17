"use client";
import React, { RefObject } from 'react';
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import { useState } from "react";
import useWindowWidth from "@/utils/useWindowWidth";
import path from 'path';


const Header = ( ) => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 1000;

  const scrollToSection = (sectionRef: RefObject<HTMLElement>) => {
    sectionRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const landingPageSections = [
    {
      label: "Home",
      path: "hero",
    },
    {
      label: "About-us",
      path: "about-us",
    },
    {
      label: "Features",
      path: "features",
    },
    {
      label: "Contact",
      path: "contact",
    },
    {
      label: "FindHouse",
      path: "/find-house",
    },
  ];

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

        {isMobile && (
          <Image
            src={showNav ? "/closeNav.svg" : "/hamburger.svg"}
            alt="Toggle navigation"
            width={48}
            height={48}
            priority
            onClick={() => setShowNav((prev) => !prev)}
          />
        )}
      </div>

      {(!isMobile || showNav) && (
        <nav className={styles.navContainer}>
          <ul className={styles.navList}>
            {landingPageSections.map((item, index) => (
              <li key={index} className={styles.navItem}>
                <a 
                  href={item.path === "/find-house" ? "find-house" : `#${item.path}`}
                  onClick={(e) => {
                    // e.preventDefault();
                    // item.onClick();
                    if (isMobile) setShowNav(false);
                  }}
                >
                  {item.label}
                </a>
                {isMobile && (
                  <button
                    aria-label={`Scroll to ${item.label}`}
                    onClick={() => setShowNav((prev) => !prev)}
                  >
                    <Image
                      src={"/arrow-right.svg"}
                      alt={`Scroll to ${item.label}`}
                      width={24}
                      height={24}
                      priority
                    />
                  </button>
                )}
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
                  width={isMobile ? 28 : 40}
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
