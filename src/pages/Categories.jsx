import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { categories } from '../data/categories.js'
import { products } from '../data/products.js'
import { fadeUp, viewportOnce } from '../animations/variants.js'

export default function Categories() {
  return (
    <div className="w-full bg-cream pb-20 pt-32">
      <div className="container-inner">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 text-center">
          <p className="font-display font-bold text-coral">Browse</p>
          <h1 className="font-display text-4xl font-extrabold text-navy sm:text-5xl">
            All Categories
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-navy/60">
            From educational puzzles to remote-control rockets, find exactly
            the kind of play your child loves.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const count = products.filter((p) => p.category === cat.name).length
            return (
              <motion.div
                key={cat.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
              >
                <Link to={`/shop?category=${cat.id}`} className="group block">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className={`relative h-64 overflow-hidden rounded-3xl bg-gradient-to-br ${cat.color} p-7 shadow-toy`}
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-overlay transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="relative flex h-full flex-col justify-between">
                      <span className="text-5xl">{cat.emoji}</span>
                      <div>
                        <h3 className="font-display text-2xl font-extrabold text-white">{cat.name}</h3>
                        <p className="text-sm font-semibold text-white/80">{cat.tagline}</p>
                        <p className="mt-2 inline-block rounded-full bg-white/25 px-3 py-1 text-xs font-bold text-white">
                          {count} toys
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
