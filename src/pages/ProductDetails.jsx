import React, { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Heart, ShoppingCart, Minus, Plus, ShieldCheck, Truck, RotateCcw } from 'lucide-react'
import { getProductById, products } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { fadeUp, slideInLeft, slideInRight } from '../animations/variants.js'

export default function ProductDetails() {
  const { id } = useParams()
  const product = getProductById(id)
  const [activeImg, setActiveImg] = useState(0)
  const [qty, setQty] = useState(1)
  const { addToCart, toggleWishlist, isWishlisted } = useCart()

  if (!product) return <Navigate to="/shop" replace />

  const wished = isWishlisted(product.id)
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="w-full bg-cream pb-20 pt-32">
      <div className="container-inner">
        <p className="mb-8 text-sm font-semibold text-navy/50">
          <Link to="/shop" className="hover:text-navy">Shop</Link> /{' '}
          <Link to={`/shop?category=${product.category}`} className="hover:text-navy">{product.category}</Link> /{' '}
          <span className="text-navy">{product.name}</span>
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div initial="hidden" animate="visible" variants={slideInLeft}>
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-white shadow-toy">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={product.gallery[activeImg]}
                  alt={product.name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
              {product.badge && (
                <span className="absolute left-4 top-4 rounded-full bg-navy px-3 py-1.5 text-xs font-bold text-cream">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="mt-4 flex gap-3">
              {product.gallery.map((g, i) => (
                <button
                  key={g}
                  onClick={() => setActiveImg(i)}
                  className={`h-20 w-20 overflow-hidden rounded-2xl border-2 transition-colors ${
                    activeImg === i ? 'border-coral' : 'border-transparent'
                  }`}
                >
                  <img src={g} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={slideInRight}>
            <p className="text-sm font-bold uppercase tracking-wide text-sky-500">{product.category}</p>
            <h1 className="font-display mt-1 text-3xl font-extrabold text-navy sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.round(product.rating) ? 'fill-sunshine-400 text-sunshine-400' : 'text-navy/15'}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-navy/60">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-display text-4xl font-extrabold text-navy">
                ${product.price.toFixed(2)}
              </span>
              {product.oldPrice && (
                <span className="text-xl font-semibold text-navy/35 line-through">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p className="mt-6 max-w-lg leading-relaxed text-navy/65">{product.description}</p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center rounded-full bg-white shadow-sm">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="grid h-12 w-12 place-items-center text-navy/60 hover:text-navy"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-display font-bold text-navy">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="grid h-12 w-12 place-items-center text-navy/60 hover:text-navy"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => addToCart(product, qty)}
                className="btn-pop flex flex-1 items-center justify-center gap-2 rounded-full bg-coral py-4 font-display font-bold text-white shadow-toy sm:flex-none sm:px-10"
              >
                <ShoppingCart size={18} /> Add to Cart
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => toggleWishlist(product)}
                className="grid h-14 w-14 place-items-center rounded-full bg-white shadow-sm"
                aria-label="Toggle wishlist"
              >
                <Heart size={20} className={wished ? 'fill-coral text-coral' : 'text-navy/40'} />
              </motion.button>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, text: 'Safety certified' },
                { icon: Truck, text: 'Free shipping over $35' },
                { icon: RotateCcw, text: '30-day easy returns' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-sm">
                  <Icon size={16} className="text-mint-500 shrink-0" />
                  <span className="text-xs font-bold text-navy/70">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="font-display mb-8 text-2xl font-extrabold text-navy sm:text-3xl"
            >
              You Might Also Like
            </motion.h2>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
