import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function Hero() {
  const { scrollY } = useScroll()

  const yBg = useTransform(scrollY, [0, 600], [0, 120])
  const ySlow = useTransform(scrollY, [0, 600], [0, 60])
  const yFast = useTransform(scrollY, [0, 600], [0, 180])
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3])

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-sky-100 via-cream to-cream pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32">

      {/* Decorative Blobs */}
      <motion.div
        style={{ y: yBg }}
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-blob bg-sunshine-200/70 blur-xl animate-blob"
      />

      <motion.div
        style={{ y: yFast }}
        className="pointer-events-none absolute -right-20 top-32 h-80 w-80 rounded-blob bg-coral-100/70 blur-xl animate-blob"
      />

      <motion.div
        style={{ y: ySlow }}
        className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-blob bg-mint-100/70 blur-xl animate-blob"
      />

      {/* Floating Decorations */}
      <motion.span
        className="pointer-events-none absolute left-[5%] top-[22%] select-none text-4xl sm:text-5xl md:text-6xl"
        style={{ y: ySlow }}
        animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        ☁️
      </motion.span>

      <motion.span
        className="pointer-events-none absolute right-[8%] top-[16%] select-none text-3xl sm:text-4xl md:text-5xl"
        animate={{ y: [0, -14, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.4,
        }}
      >
        🎈
      </motion.span>

      <motion.span
        className="pointer-events-none absolute bottom-[12%] right-[12%] select-none text-4xl sm:text-5xl md:text-6xl"
        animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.2,
        }}
      >
        🚀
      </motion.span>

      <motion.span
        className="pointer-events-none absolute bottom-[10%] left-[10%] select-none text-4xl sm:text-5xl md:text-6xl"
        animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.6,
        }}
      >
        ⭐
      </motion.span>

      {/* Full Width Content */}
      <div className="relative grid w-full items-center gap-14 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-16 xl:px-12 2xl:px-16">

        {/* Hero Content */}
        <div className="w-full">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-coral shadow-sm backdrop-blur-sm"
          >
            <Sparkles size={16} />
            New arrivals every week
          </motion.div>

          <motion.h1
            className="font-display text-5xl font-extrabold leading-[1.05] text-navy sm:text-6xl md:text-7xl xl:text-8xl"
          >
            {['Play', 'Big.', 'Dream', 'Bigger.'].map((word, i) => (
              <motion.span
                key={word}
                className={`mr-3 inline-block ${
                  i === 1
                    ? 'text-coral'
                    : i === 3
                      ? 'text-sky-500'
                      : ''
                }`}
                initial={{
                  opacity: 0,
                  y: 40,
                  rotate: -4,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.7,
            }}
            className="mt-6 w-full max-w-xl text-base font-medium leading-7 text-navy/70 sm:text-lg"
          >
            Hand-picked toys and games that spark imagination, build skills,
            and fill your home with giggles. Safe, sturdy, and seriously fun.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.85,
            }}
            className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <Link
              to="/shop"
              className="btn-pop group inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 font-display font-bold text-white shadow-toy transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(255,111,97,0.55)] sm:px-8 sm:py-4"
            >
              Shop Now

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/categories"
              className="btn-pop inline-flex items-center gap-2 rounded-full border-2 border-navy/15 bg-white px-6 py-3.5 font-display font-bold text-navy transition-all duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-lg sm:px-8 sm:py-4"
            >
              Explore Toys
            </Link>
          </motion.div>

          {/* Families */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.1,
              duration: 0.6,
            }}
            className="mt-10 flex items-center gap-4 sm:gap-6"
          >
            <div className="flex -space-x-3">
              {['👧', '👦', '🧒'].map((emoji, i) => (
                <motion.span
                  key={i}
                  whileHover={{
                    y: -5,
                    scale: 1.08,
                  }}
                  className="grid h-10 w-10 place-items-center rounded-full border-2 border-cream bg-sunshine-100 text-lg"
                >
                  {emoji}
                </motion.span>
              ))}
            </div>

            <p className="text-xs font-semibold text-navy/60 sm:text-sm">
              Loved by 25,000+ happy families
            </p>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          style={{ opacity }}
          className="relative mx-auto aspect-square w-full max-w-md lg:max-w-xl"
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Background Circle */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-200 via-mint-100 to-sunshine-100"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Image */}
          <motion.img
            src="https://images.unsplash.com/photo-1558679908-541bcf1249ff?q=80&w=1000&auto=format&fit=crop"
            alt="Teddy bear surrounded by colorful toys"
            className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] rounded-[38%_62%_60%_40%/45%_40%_60%_55%] object-cover shadow-toy sm:inset-6 sm:h-[calc(100%-3rem)] sm:w-[calc(100%-3rem)]"
            animate={{
              y: [0, -16, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Floating Card 1 */}
          <motion.div
            className="absolute -left-1 top-8 rounded-2xl bg-white px-3 py-2.5 shadow-toy sm:-left-4 sm:px-4 sm:py-3"
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
            }}
            transition={{
              x: {
                delay: 1,
                duration: 0.5,
              },
              opacity: {
                delay: 1,
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >
            <p className="text-[10px] font-bold text-navy/50 sm:text-xs">
              Building Blocks
            </p>
            <p className="font-display text-sm font-bold text-navy sm:text-base">
              🧱 New Set
            </p>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            className="absolute -right-1 bottom-10 rounded-2xl bg-white px-3 py-2.5 shadow-toy sm:-right-2 sm:px-4 sm:py-3"
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, 12, 0],
            }}
            transition={{
              x: {
                delay: 1.2,
                duration: 0.5,
              },
              opacity: {
                delay: 1.2,
              },
              y: {
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >
            <p className="text-[10px] font-bold text-navy/50 sm:text-xs">
              This week
            </p>
            <p className="font-display text-sm font-bold text-coral sm:text-base">
              40% OFF 🎁
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}