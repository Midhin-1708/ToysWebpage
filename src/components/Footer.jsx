import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  CreditCard,
} from 'lucide-react'
import { categories } from '../data/categories.js'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/categories', label: 'Categories' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-navy pt-16 text-cream/80">
      {/* Main Footer */}
      <div className="w-full px-4 pb-12 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid w-full gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <motion.span
                className="text-2xl"
                whileHover={{ rotate: 12, scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                🧸
              </motion.span>

              <span className="font-display text-xl font-extrabold text-white">
                IDEALS{' '}
                <span className="text-sunshine-400">PlayWorld</span>
              </span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-cream/60">
              Colorful, premium toys designed to spark imagination and joy in
              every child, every day.
            </p>

            {/* Socials */}
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                    rotate: 3,
                  }}
                  whileTap={{ scale: 0.92 }}
                  transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 18,
                  }}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors duration-300 hover:bg-coral hover:text-white"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-4 font-display font-bold text-white">
              Quick Links
            </h4>

            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex transition-all duration-300 hover:translate-x-1 hover:text-sunshine-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-4 font-display font-bold text-white">
              Categories
            </h4>

            <ul className="space-y-2.5 text-sm">
              {categories.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/shop?category=${category.id}`}
                    className="inline-flex transition-all duration-300 hover:translate-x-1 hover:text-sunshine-400"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Payment + Contact */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="mb-4 font-display font-bold text-white">
              We Accept
            </h4>

            <div className="flex flex-wrap gap-2.5">
              {['Visa', 'Mastercard', 'PayPal', 'Apple Pay'].map((payment) => (
                <motion.span
                  key={payment}
                  whileHover={{ y: -3, scale: 1.03 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="flex cursor-default items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold transition-colors duration-300 hover:bg-white/15"
                >
                  <CreditCard size={13} />
                  {payment}
                </motion.span>
              ))}
            </div>

            <p className="mt-6 text-sm leading-6 text-cream/60">
              221 Rainbow Lane, Playtown, CA 90210
              <br />
              hello@idealsplayworld.com
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-white/10">
        <div className="flex w-full flex-col items-center justify-between gap-2 px-4 py-6 text-center text-xs text-cream/50 sm:flex-row sm:px-6 sm:text-left lg:px-8 xl:px-12 2xl:px-16">
          <p>
            © {new Date().getFullYear()} IDEALS PlayWorld. All rights reserved.
          </p>

          <p>Made with 💛 for curious kids everywhere.</p>
        </div>
      </div>
    </footer>
  )
}