import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { fadeUp, viewportOnce } from '../animations/variants.js'

function getTimeLeft(target) {
  const diff = Math.max(0, target - Date.now())

  return {
    d: Math.floor(diff / (1000 * 60 * 60 * 24)),
    h: Math.floor((diff / (1000 * 60 * 60)) % 24),
    m: Math.floor((diff / (1000 * 60)) % 60),
    s: Math.floor((diff / 1000) % 60),
  }
}

const confettiEmojis = ['🎉', '🎈', '⭐', '🎁', '✨', '🧸', '🪁', '🧩']

export default function SpecialOffers() {
  const target = useMemo(
    () => Date.now() + 1000 * 60 * 60 * 26,
    []
  )

  const [time, setTime] = useState(getTimeLeft(target))

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(getTimeLeft(target))
    }, 1000)

    return () => window.clearInterval(id)
  }, [target])

  const units = [
    { label: 'Days', value: time.d },
    { label: 'Hours', value: time.h },
    { label: 'Min', value: time.m },
    { label: 'Sec', value: time.s },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-navy py-16 sm:py-20 md:py-24">
      {/* Animated background glow */}
      <motion.div
        className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-sunshine-400/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating toys / confetti */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute select-none text-lg opacity-50 sm:text-2xl"
          style={{
            left: `${(i * 7.3) % 100}%`,
            top: `${(i * 17) % 92}%`,
          }}
          animate={{
            y: [0, -18, 0],
            x: [0, i % 2 === 0 ? 8 : -8, 0],
            rotate: [0, i % 2 === 0 ? 15 : -15, 0],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
        >
          {confettiEmojis[i % confettiEmojis.length]}
        </motion.span>
      ))}

      {/* Full-width content */}
      <div className="relative grid w-full items-center gap-12 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-16 xl:px-12 2xl:px-16">
        {/* Offer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="w-full"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-flex items-center gap-2 rounded-full bg-sunshine-400 px-4 py-1.5 text-xs font-extrabold text-navy shadow-lg sm:text-sm"
          >
            <Sparkles size={15} />
            Limited Time
          </motion.div>

          {/* Heading */}
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl xl:text-7xl">
            Up to{' '}
            <motion.span
              className="inline-block text-sunshine-400"
              animate={{
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              40% OFF
            </motion.span>
            <br />
            Toy Chest Favorites
          </h2>

          {/* Description */}
          <p className="mt-5 w-full max-w-xl text-sm leading-6 text-white/70 sm:text-base md:text-lg md:leading-7">
            Stock up on birthday and holiday gifts before the countdown ends.
            Deal refreshes weekly — don't miss it!
          </p>

          {/* CTA */}
          <Link
            to="/shop"
            className="group btn-pop mt-7 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 font-display text-sm font-bold text-white shadow-toy transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-8 sm:py-4 sm:text-base"
          >
            Grab the Deal 🎁

            <motion.span
              className="inline-flex"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </Link>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          custom={1}
          className="flex w-full justify-center"
        >
          <div className="grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:max-w-xl">
            {units.map((unit, index) => (
              <motion.div
                key={unit.label}
                whileHover={{
                  y: -7,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.25,
                  ease: 'easeOut',
                }}
                className="group relative flex min-h-[105px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/10 px-3 py-5 shadow-lg backdrop-blur-md transition-colors duration-300 hover:bg-white/15 sm:min-h-[125px] sm:rounded-3xl"
              >
                {/* Glow */}
                <motion.div
                  className="pointer-events-none absolute inset-0 bg-sunshine-400/5"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Number */}
                <motion.span
                  key={unit.value}
                  initial={{
                    y: -12,
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative font-display text-3xl font-extrabold tabular-nums text-white sm:text-4xl md:text-5xl"
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.span>

                {/* Label */}
                <span className="relative mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/45 sm:text-xs">
                  {unit.label}
                </span>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-sunshine-400 transition-all duration-300 group-hover:w-1/2"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}