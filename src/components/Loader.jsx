import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex w-full flex-col items-center justify-center overflow-hidden bg-cream px-4"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: {
              duration: 0.6,
              ease: 'easeInOut',
            },
          }}
        >
          {/* Background Glow */}
          <motion.div
            className="pointer-events-none absolute h-72 w-72 rounded-full bg-sky-200/40 blur-3xl sm:h-96 sm:w-96"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Floating Decorations */}
          <motion.span
            className="absolute left-[12%] top-[20%] text-3xl sm:text-4xl"
            animate={{
              y: [0, -12, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ⭐
          </motion.span>

          <motion.span
            className="absolute right-[12%] top-[25%] text-3xl sm:text-4xl"
            animate={{
              y: [0, 12, 0],
              rotate: [0, -8, 0],
            }}
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
            className="absolute bottom-[20%] left-[15%] text-3xl sm:text-4xl"
            animate={{
              y: [0, -10, 0],
              rotate: [0, -6, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.8,
            }}
          >
            ✨
          </motion.span>

          <motion.span
            className="absolute bottom-[18%] right-[15%] text-3xl sm:text-4xl"
            animate={{
              y: [0, -14, 0],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          >
            🧩
          </motion.span>

          {/* Logo */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{
              scale: 0.6,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            <motion.div
              className="absolute h-28 w-28 rounded-full bg-white/50 blur-xl sm:h-36 sm:w-36"
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <motion.span
              className="relative select-none text-6xl sm:text-7xl md:text-8xl"
              animate={{
                rotate: [0, -10, 10, -10, 0],
                y: [0, -12, 0],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              🧸
            </motion.span>
          </motion.div>

          {/* Brand */}
          <motion.h1
            className="relative mt-6 text-center font-display text-2xl font-bold text-navy sm:text-3xl"
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
          >
            IDEALS{' '}
            <span className="text-coral">
              PlayWorld
            </span>
          </motion.h1>

          {/* Loading Text */}
          <motion.p
            className="relative mt-2 text-sm font-medium text-navy/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.35,
              duration: 0.5,
            }}
          >
            Let the fun begin...
          </motion.p>

          {/* Progress Bar */}
          <motion.div
            className="relative mt-6 h-1.5 w-36 overflow-hidden rounded-full bg-navy/10 sm:w-40"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 0.4,
            }}
          >
            <motion.div
              className="h-full w-1/2 rounded-full bg-gradient-to-r from-sky-400 via-mint-400 to-sunshine-400"
              initial={{
                x: '-100%',
              }}
              animate={{
                x: '250%',
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}