import React from 'react'
import Hero from '../components/hero/Hero'
import Sponsors from '../components/sponsors/Sponsors'
import GetApp from '../components/getApp/GetApp'
import AboutUs from '../components/aboutUs/AboutUs'
import Features from '../components/features/Features'
import Team from '../components/team/Team'
import ContactUs from '../components/contactUs/ContactUs'

const LandingPageLayout = () => {

  return (
    <>
      <Hero />
      <Sponsors/>
      <GetApp />
      <AboutUs  />
      <Features  />
      <Team />
      <ContactUs />
    </>
  )
}

export default LandingPageLayout
