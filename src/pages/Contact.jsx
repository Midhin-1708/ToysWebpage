import React from 'react'
import { motion } from 'framer-motion'
import ContactSection from '../components/ContactSection.jsx'
import { fadeUp } from '../animations/variants.js'

export default function Contact() {
  return (
    <div className="w-full bg-cream pt-32">
      <div className="container-inner mb-4 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <p className="font-display font-bold text-coral">Get in Touch</p>
          <h1 className="font-display text-4xl font-extrabold text-navy sm:text-5xl">
            Contact PlayWorld
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-navy/60">
            Whether it's an order question or a partnership idea, we're happy
            to help. Reach out any time.
          </p>
        </motion.div>
      </div>
      <ContactSection />
    </div>
  )
}
