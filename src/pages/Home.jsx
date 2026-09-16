import React from 'react'
import Hero from '../components/Hero.jsx'
import CategoryGrid from '../components/CategoryGrid.jsx'
import FeaturedProducts from '../components/FeaturedProducts.jsx'
import SpecialOffers from '../components/SpecialOffers.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Newsletter from '../components/Newsletter.jsx'
import ContactSection from '../components/ContactSection.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <SpecialOffers />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <ContactSection />
    </>
  )
}
