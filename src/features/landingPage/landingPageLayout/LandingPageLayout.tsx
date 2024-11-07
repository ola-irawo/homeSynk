"use client"
import React, { useRef } from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Sponsors from '../components/sponsors/Sponsors'
import GetApp from '../components/getApp/GetApp'
import AboutUs from '../components/aboutUs/AboutUs'
import Features from '../components/features/Features'
import Team from '../components/team/Team'
import ContactUs from '../components/contactUs/ContactUs'
import Footer from '../components/footer/Footer'

const LandingPageLayout = () => {
  const heroRef = useRef<HTMLElement>(null);
  const sponsorsRef = useRef<HTMLElement>(null);
  const getAppRef = useRef<HTMLElement>(null);
  const aboutUsRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const contactUsRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header 
         heroRef={heroRef}
         sponsorsRef={sponsorsRef}
         getAppRef={getAppRef}
         aboutUsRef={aboutUsRef}
         featuresRef={featuresRef}
         teamRef={teamRef}
         contactUsRef={contactUsRef}
      />
      <Hero heroRef={heroRef}/>
      <Sponsors ref={sponsorsRef} />
      <GetApp ref={getAppRef} />
      <AboutUs ref={aboutUsRef} />
      <Features ref={featuresRef} />
      <Team ref={teamRef} />
      <ContactUs ref={contactUsRef} />
      <Footer />
    </>
  )
}

export default LandingPageLayout
