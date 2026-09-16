import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { categories } from '../data/categories.js'
import { fadeUp, viewportOnce } from '../animations/variants.js'

export default function CategoryGrid({ compact = false }) {
  return (
    <section className="w-full bg-cream py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-12 flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <p className="font-display font-bold text-coral">
              Explore
            </p>

            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
              Shop by Category
            </h2>
          </div>

          {!compact && (
            <Link
              to="/categories"
              className="font-bold text-navy/60 underline decoration-sunshine-400 decoration-4 underline-offset-4 transition-colors duration-300 hover:text-navy"
            >
              View all categories
            </Link>
          )}
        </motion.div>

        <div className="grid w-full grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              className="w-full"
            >
              <Link
                to={`/shop?category=${cat.id}`}
                className="group block w-full"
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                  className={`relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br ${cat.color} p-4 shadow-toy transition-shadow duration-300 group-hover:shadow-2xl`}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-overlay transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex h-full flex-col justify-between">
                    <motion.span
                      className="text-3xl md:text-4xl"
                      whileHover={{
                        scale: 1.25,
                        rotate: 10,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 12,
                      }}
                    >
                      {cat.emoji}
                    </motion.span>

                    <div>
                      <p className="font-display text-sm font-extrabold leading-tight text-white sm:text-base">
                        {cat.name}
                      </p>

                      <p className="text-xs font-semibold text-white/80">
                        {cat.tagline}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}