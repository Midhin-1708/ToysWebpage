import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, CheckCircle2 } from 'lucide-react'
import { fadeUp, viewportOnce } from '../animations/variants.js'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e) => {
    e.preventDefault()

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address')
      setDone(false)
      return
    }

    setError('')
    setDone(true)
    setEmail('')

    window.setTimeout(() => {
      setDone(false)
    }, 3000)
  }

  return (
    <section className="w-full overflow-hidden bg-gradient-to-br from-sky-400 via-sky-500 to-mint-500 py-16 sm:py-20 md:py-24">
      {/* Full Width Wrapper */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto w-full max-w-3xl text-center"
        >
          {/* Icon */}
          <motion.span
            className="inline-block text-4xl sm:text-5xl"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            📬
          </motion.span>

          {/* Heading */}
          <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Join the PlayWorld Club
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 w-full max-w-2xl text-sm leading-6 text-white/85 sm:text-base md:text-lg">
            Get early access to new toys, exclusive discounts and playtime
            tips delivered straight to your inbox.
          </p>

          {/* Form */}
          <form
            onSubmit={submit}
            className="mx-auto mt-7 flex w-full flex-col gap-3 sm:flex-row"
          >
            <div className="relative flex-1">
              <Mail
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy/40"
                size={18}
              />

              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (error) setError('')
                }}
                placeholder="you@example.com"
                className="w-full rounded-full border-2 border-transparent bg-white py-3.5 pl-11 pr-4 text-sm font-medium text-navy outline-none transition-all duration-300 placeholder:text-navy/40 focus:border-white focus:ring-4 focus:ring-white/20 sm:py-4 sm:text-base"
              />
            </div>

            <motion.button
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              type="submit"
              className="btn-pop rounded-full bg-navy px-7 py-3.5 font-display font-bold text-white shadow-lg transition-shadow duration-300 hover:shadow-xl sm:py-4"
            >
              Subscribe
            </motion.button>
          </form>

          {/* Messages */}
          <AnimatePresence mode="wait">
            {error && (
              <motion.p
                key="error"
                initial={{
                  opacity: 0,
                  y: -6,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -6,
                  scale: 0.95,
                }}
                className="mt-3 inline-block rounded-full bg-coral-500/30 px-4 py-1.5 text-sm font-semibold text-white"
              >
                {error}
              </motion.p>
            )}

            {done && (
              <motion.p
                key="success"
                initial={{
                  opacity: 0,
                  y: -6,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -6,
                  scale: 0.95,
                }}
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-sm font-bold text-mint-600"
              >
                <CheckCircle2 size={16} />
                You're subscribed! Welcome aboard 🎉
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}