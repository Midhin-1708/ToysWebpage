import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Send,
  CheckCircle2,
  MapPin,
  Phone,
  Mail as MailIcon,
} from 'lucide-react'
import {
  slideInLeft,
  slideInRight,
  viewportOnce,
} from '../animations/variants.js'

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}

    if (form.name.trim().length < 2) {
      e.name = 'Please enter your name'
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      e.email = 'Enter a valid email'
    }

    if (form.message.trim().length < 8) {
      e.message = 'Message should be a bit longer'
    }

    return e
  }

  const submit = (ev) => {
    ev.preventDefault()

    const eObj = validate()
    setErrors(eObj)

    if (Object.keys(eObj).length === 0) {
      setSent(true)

      setForm({
        name: '',
        email: '',
        message: '',
      })

      setTimeout(() => {
        setSent(false)
      }, 3500)
    }
  }

  const updateField = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const field = (name, label, type = 'text') => (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <label className="mb-1.5 block text-sm font-bold text-navy/70">
        {label}
      </label>

      {type === 'textarea' ? (
        <textarea
          rows={5}
          value={form[name]}
          onChange={(e) => updateField(name, e.target.value)}
          placeholder={`Enter your ${name}...`}
          className="w-full resize-none rounded-2xl border-2 border-navy/10 bg-white px-4 py-3 text-navy outline-none transition-all duration-300 placeholder:text-navy/30 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10"
        />
      ) : (
        <input
          type={type}
          value={form[name]}
          onChange={(e) => updateField(name, e.target.value)}
          placeholder={`Enter your ${name}...`}
          className="w-full rounded-2xl border-2 border-navy/10 bg-white px-4 py-3 text-navy outline-none transition-all duration-300 placeholder:text-navy/30 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10"
        />
      )}

      <AnimatePresence>
        {errors[name] && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="mt-1 text-xs font-semibold text-coral-500"
          >
            {errors[name]}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )

  return (
    <section className="w-full bg-cream py-20 sm:py-24">
      {/* FULL WIDTH WRAPPER */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInLeft}
            className="flex w-full flex-col justify-center"
          >
            <p className="font-display font-bold text-coral">
              Say Hello
            </p>

            <h2 className="mt-1 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-5xl">
              We'd Love to Hear From You
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/60">
              Questions about an order, a product, or a bulk gift request?
              Our team of toy-lovers replies within one business day.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-8 space-y-4">
              {[
                {
                  icon: MapPin,
                  text: '221 Rainbow Lane, Playtown, CA 90210',
                },
                {
                  icon: Phone,
                  text: '+1 (555) 123-4567',
                },
                {
                  icon: MailIcon,
                  text: 'hello@idealsplayworld.com',
                },
              ].map(({ icon: Icon, text }, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  whileHover={{ x: 8 }}
                  className="group flex items-center gap-4"
                >
                  <motion.span
                    whileHover={{
                      scale: 1.12,
                      rotate: 8,
                    }}
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-coral shadow-sm transition-shadow duration-300 group-hover:shadow-lg"
                  >
                    <Icon size={18} />
                  </motion.span>

                  <p className="font-semibold text-navy/70">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={submit}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInRight}
            className="relative w-full rounded-3xl bg-white p-6 shadow-toy sm:p-9 lg:p-10"
          >
            <div className="space-y-5">
              {field('name', 'Your Name')}

              {field('email', 'Email Address', 'email')}

              {field('message', 'Message', 'textarea')}

              <motion.button
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-navy py-4 font-display font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />

                Send Message
              </motion.button>
            </div>

            {/* SUCCESS MESSAGE */}
            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 250,
                    damping: 20,
                  }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-3xl bg-white/95 backdrop-blur-sm"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.15,
                      type: 'spring',
                      stiffness: 300,
                    }}
                  >
                    <CheckCircle2
                      size={42}
                      className="text-mint-500"
                    />
                  </motion.div>

                  <p className="font-display text-xl font-bold text-navy">
                    Message sent!
                  </p>

                  <p className="text-sm text-navy/50">
                    We'll get back to you soon.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  )
}