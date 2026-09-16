import React from 'react'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Gem,
  Truck,
  GraduationCap,
  Smile,
} from 'lucide-react'
import { fadeUp, viewportOnce } from '../animations/variants.js'

const points = [
  {
    icon: ShieldCheck,
    title: 'Safe & Child-Friendly',
    desc: 'Non-toxic materials tested to global safety standards.',
    color: 'bg-sky-100 text-sky-500',
  },
  {
    icon: Gem,
    title: 'Premium Quality',
    desc: 'Built to last through years of energetic play.',
    color: 'bg-coral-100 text-coral-500',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'Most orders arrive within 2–4 business days.',
    color: 'bg-mint-100 text-mint-500',
  },
  {
    icon: GraduationCap,
    title: 'Educational Value',
    desc: 'Toys designed with child-development experts.',
    color: 'bg-sunshine-100 text-sunshine-500',
  },
  {
    icon: Smile,
    title: 'Happy Customers',
    desc: 'Rated 4.9/5 by thousands of families worldwide.',
    color: 'bg-navy-50 text-navy',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative w-full overflow-hidden bg-cream py-16 sm:py-20 md:py-24">
      {/* Decorative background elements */}
      <motion.div
        className="pointer-events-none absolute -left-24 top-10 h-52 w-52 rounded-full bg-sky-200/30 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-24 bottom-10 h-60 w-60 rounded-full bg-coral-200/20 blur-3xl"
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Full-width wrapper */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-10 w-full text-center sm:mb-12"
        >
          <motion.p
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="font-display font-bold text-coral"
          >
            Our Promise
          </motion.p>

          <h2 className="mt-1 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl md:text-5xl">
            Why Families Choose PlayWorld
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-navy/50 sm:text-base">
            Everything we do is designed to make play safer, smarter, happier
            and more memorable.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
          {points.map((point, i) => {
            const Icon = point.icon

            return (
              <motion.div
                key={point.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                whileHover={{
                  y: -9,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                }}
                className="group relative w-full overflow-hidden rounded-3xl border border-navy/5 bg-white p-5 shadow-[0_10px_30px_rgba(27,42,74,0.06)] transition-shadow duration-300 hover:shadow-toy sm:p-6"
              >
                {/* Hover glow */}
                <motion.div
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: [0, -6, 6, 0],
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className={`relative mb-5 grid h-14 w-14 place-items-center rounded-2xl ${point.color} shadow-sm`}
                >
                  <Icon size={26} strokeWidth={2.2} />
                </motion.div>

                {/* Content */}
                <h3 className="relative font-display text-base font-bold text-navy sm:text-lg">
                  {point.title}
                </h3>

                <p className="relative mt-2 text-sm leading-6 text-navy/60">
                  {point.desc}
                </p>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 rounded-full bg-coral"
                  initial={{
                    width: 0,
                  }}
                  whileHover={{
                    width: '45%',
                  }}
                  transition={{
                    duration: 0.35,
                    ease: 'easeOut',
                  }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Small decorative message */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          className="mt-8 flex items-center justify-center gap-2 text-center text-xs font-semibold text-navy/40 sm:text-sm"
        >
          <span>🧸</span>
          <span>Made for little smiles and big imaginations</span>
          <span>✨</span>
        </motion.div>
      </div>
    </section>
  )
}