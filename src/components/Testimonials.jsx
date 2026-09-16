import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react'
import { testimonials } from '../data/testimonials.js'
import { fadeUp, viewportOnce } from '../animations/variants.js'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const dirRef = useRef(1)

  useEffect(() => {
    if (paused || testimonials.length <= 1) return

    const id = window.setInterval(() => {
      dirRef.current = 1
      setIndex((i) => (i + 1) % testimonials.length)
    }, 4200)

    return () => window.clearInterval(id)
  }, [paused])

  const go = (dir) => {
    dirRef.current = dir

    setIndex(
      (i) => (i + dir + testimonials.length) % testimonials.length
    )
  }

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -80) {
      go(1)
    } else if (info.offset.x > 80) {
      go(-1)
    }
  }

  const t = testimonials[index]

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 md:py-24">
      {/* Decorative background */}
      <motion.div
        className="pointer-events-none absolute -left-24 top-20 h-52 w-52 rounded-full bg-sky-100 blur-3xl"
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
        className="pointer-events-none absolute -right-24 bottom-10 h-60 w-60 rounded-full bg-sunshine-100 blur-3xl"
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.35, 0.6, 0.35],
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
          <motion.div
            className="mb-2 inline-flex items-center gap-2 font-display font-bold text-sky-500"
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Sparkles size={16} />
            Testimonials
            <Sparkles size={16} />
          </motion.div>

          <h2 className="font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl md:text-5xl">
            Loved by Parents Everywhere
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-navy/50 sm:text-base">
            See what families are saying about their little ones' favorite
            PlayWorld toys.
          </p>
        </motion.div>

        {/* Slider */}
        <div
          className="relative mx-auto w-full max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Testimonial Card */}
          <div className="relative h-[390px] sm:h-[330px] md:h-[315px]">
            <AnimatePresence mode="wait" custom={dirRef.current}>
              <motion.div
                key={t.id}
                custom={dirRef.current}
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.65}
                onDragEnd={handleDragEnd}
                initial={{
                  opacity: 0,
                  x: 100 * dirRef.current,
                  scale: 0.94,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: -100 * dirRef.current,
                  scale: 0.94,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -5,
                }}
                className="absolute inset-0 flex w-full cursor-grab flex-col items-center justify-center overflow-hidden rounded-3xl border border-navy/5 bg-cream px-5 py-7 text-center shadow-toy active:cursor-grabbing sm:px-8 sm:py-8 md:px-12"
              >
                {/* Decorative quote */}
                <motion.div
                  animate={{
                    rotate: [0, -4, 4, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Quote
                    className="mb-3 fill-sunshine-400/10 text-sunshine-400"
                    size={32}
                  />
                </motion.div>

                {/* Quote */}
                <p className="w-full max-w-2xl text-sm font-medium leading-6 text-navy/80 sm:text-base sm:leading-7 md:text-lg">
                  “{t.quote}”
                </p>

                {/* User */}
                <div className="mt-5 flex items-center gap-3">
                  <motion.img
                    src={t.avatar}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover ring-4 ring-white shadow-md sm:h-14 sm:w-14"
                    whileHover={{
                      scale: 1.08,
                      rotate: 3,
                    }}
                  />

                  <div className="text-left">
                    <p className="font-display text-sm font-bold text-navy sm:text-base">
                      {t.name}
                    </p>

                    <p className="mt-0.5 text-[11px] font-semibold text-navy/50 sm:text-xs">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        delay: 0.15 + i * 0.05,
                        duration: 0.25,
                      }}
                    >
                      <Star
                        size={14}
                        className={
                          i < t.rating
                            ? 'fill-sunshine-400 text-sunshine-400'
                            : 'text-navy/15'
                        }
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Card decoration */}
                <motion.span
                  className="pointer-events-none absolute -bottom-8 -right-8 text-7xl opacity-10"
                  animate={{
                    rotate: [0, 8, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  🧸
                </motion.span>

                <motion.span
                  className="pointer-events-none absolute -left-5 -top-5 text-5xl opacity-10"
                  animate={{
                    rotate: [0, -10, 0],
                    y: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  ⭐
                </motion.span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-3 sm:gap-5">
            {/* Previous */}
            <motion.button
              type="button"
              whileHover={{
                scale: 1.08,
                x: -2,
              }}
              whileTap={{
                scale: 0.85,
              }}
              onClick={() => go(-1)}
              className="grid h-10 w-10 place-items-center rounded-full bg-navy/5 text-navy transition-colors duration-300 hover:bg-navy hover:text-white sm:h-11 sm:w-11"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((item, i) => (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    dirRef.current = i > index ? 1 : -1
                    setIndex(i)
                  }}
                  whileHover={{
                    scale: 1.15,
                  }}
                  whileTap={{
                    scale: 0.8,
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? 'w-7 bg-coral'
                      : 'w-2.5 bg-navy/15 hover:bg-navy/30'
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <motion.button
              type="button"
              whileHover={{
                scale: 1.08,
                x: 2,
              }}
              whileTap={{
                scale: 0.85,
              }}
              onClick={() => go(1)}
              className="grid h-10 w-10 place-items-center rounded-full bg-navy/5 text-navy transition-colors duration-300 hover:bg-navy hover:text-white sm:h-11 sm:w-11"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>

          {/* Swipe hint */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-center text-[10px] font-semibold uppercase tracking-wider text-navy/30 sm:text-xs"
          >
            ← Swipe to explore → 
          </motion.p>
        </div>
      </div>
    </section>
  )
}