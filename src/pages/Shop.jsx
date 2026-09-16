import React, { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SlidersHorizontal, Heart } from 'lucide-react'
import { products } from '../data/products.js'
import { categories } from '../data/categories.js'
import ProductCard from '../components/ProductCard.jsx'
import { useCart } from '../context/CartContext.jsx'
import { fadeUp, viewportOnce } from '../animations/variants.js'

const categoryIdToName = Object.fromEntries(categories.map((c) => [c.id, c.name]))

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const activeCategory = params.get('category') || 'all'
  const query = params.get('q') || ''
  const wishlistOnly = params.get('wishlist') === '1'
  const [sort, setSort] = useState('featured')
  const { wishlist } = useCart()

  const filtered = useMemo(() => {
    let list = [...products]
    if (activeCategory !== 'all') {
      const name = categoryIdToName[activeCategory]
      list = list.filter((p) => p.category === name)
    }
    if (query) {
      list = list.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    }
    if (wishlistOnly) {
      list = list.filter((p) => wishlist.includes(p.id))
    }
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price)
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating)
    return list
  }, [activeCategory, query, sort, wishlistOnly, wishlist])

  const setCategory = (id) => {
    const next = new URLSearchParams(params)
    if (id === 'all') next.delete('category')
    else next.set('category', id)
    next.delete('wishlist')
    setParams(next)
  }

  return (
    <div className="w-full bg-cream pb-20 pt-32">
      <div className="container-inner">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-10 text-center">
          <p className="font-display font-bold text-coral">
            {wishlistOnly ? 'Your Wishlist' : 'Full Collection'}
          </p>
          <h1 className="font-display text-4xl font-extrabold text-navy sm:text-5xl">
            {wishlistOnly ? 'Saved Favorites' : 'Shop All Toys'}
          </h1>
          {query && <p className="mt-2 text-navy/60">Showing results for "{query}"</p>}
        </motion.div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setCategory('all')}
            className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
              activeCategory === 'all' && !wishlistOnly
                ? 'bg-navy text-white'
                : 'bg-white text-navy/70 hover:bg-navy/5'
            }`}
          >
            All Toys
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                activeCategory === c.id
                  ? 'bg-navy text-white'
                  : 'bg-white text-navy/70 hover:bg-navy/5'
              }`}
            >
              {c.emoji} {c.name}
            </button>
          ))}
        </div>

        <div className="mb-8 flex items-center justify-between">
          <p className="font-semibold text-navy/50">{filtered.length} toys found</p>
          <div className="flex items-center gap-2 text-navy/70">
            <SlidersHorizontal size={16} />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="focus-glow rounded-full border-2 border-navy/10 bg-white px-4 py-2 text-sm font-bold outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col items-center gap-3 rounded-3xl bg-white py-20 text-center"
          >
            <Heart className="text-navy/20" size={40} />
            <p className="font-display text-xl font-bold text-navy">No toys found</p>
            <p className="text-navy/50">Try a different category or search term.</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
