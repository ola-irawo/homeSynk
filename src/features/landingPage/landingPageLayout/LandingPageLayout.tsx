import React from 'react'
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
  return (
    <>
      <Header />
      <Hero />
      <Sponsors />
      <GetApp />
      <AboutUs />
      <Features />
      <Team />
      <ContactUs />
      <Footer />
    </>
  )
}

export default LandingPageLayout
