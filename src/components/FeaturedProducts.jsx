import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { products } from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import { fadeUp, viewportOnce } from '../animations/variants.js'

export default function FeaturedProducts() {
  return (
    <section className="w-full bg-white py-20 sm:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">

        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-12 flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <p className="font-display font-bold text-mint-500">
              Handpicked
            </p>

            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl">
              Featured Toys
            </h2>
          </div>

          <Link
            to="/shop"
            className="group font-bold text-navy/60 underline decoration-mint-400 decoration-4 underline-offset-4 transition-all duration-300 hover:text-navy"
          >
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              View all products →
            </span>
          </Link>
        </motion.div>

        {/* Products */}
        <div className="grid w-full grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-7">
          {products.slice(0, 8).map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}