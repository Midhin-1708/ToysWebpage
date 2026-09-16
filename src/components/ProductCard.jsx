import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, ShoppingCart, Star, Eye, Check } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ product, index = 0 }) {
  const ref = useRef(null)
  const [added, setAdded] = useState(false)
  const { addToCart, toggleWishlist, isWishlisted } = useCart()

  const wished = isWishlisted(product.id)

  // 3D tilt
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(
    useTransform(y, [-60, 60], [7, -7]),
    {
      stiffness: 220,
      damping: 20,
      mass: 0.6,
    }
  )

  const rotateY = useSpring(
    useTransform(x, [-60, 60], [-7, 7]),
    {
      stiffness: 220,
      damping: 20,
      mass: 0.6,
    }
  )

  const handleMouseMove = (e) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  const resetTilt = () => {
    x.set(0)
    y.set(0)
  }

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)

    window.setTimeout(() => {
      setAdded(false)
    }, 1200)
  }

  const handleWishlist = () => {
    toggleWishlist(product)
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 45,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: (index % 4) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        whileHover={{
          y: -6,
        }}
        transition={{
          y: {
            duration: 0.25,
            ease: 'easeOut',
          },
        }}
        className="group relative w-full overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(27,42,74,0.08)] transition-shadow duration-300 hover:shadow-toy"
      >
        {/* Product Image */}
        <div className="relative aspect-square w-full overflow-hidden bg-sky-50">
          {/* Decorative background */}
          <motion.div
            className="absolute -right-10 -top-10 z-0 h-28 w-28 rounded-full bg-sunshine-300/20 blur-2xl"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Badge */}
          {product.badge && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute left-3 top-3 z-20 rounded-full bg-navy px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-cream shadow-md sm:text-[11px]"
            >
              {product.badge}
            </motion.span>
          )}

          {/* Wishlist */}
          <motion.button
            type="button"
            onClick={handleWishlist}
            whileHover={{
              scale: 1.1,
              rotate: wished ? 0 : -6,
            }}
            whileTap={{
              scale: 0.82,
            }}
            className="absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full bg-white/95 shadow-md backdrop-blur-sm transition-colors duration-300 hover:bg-white sm:h-10 sm:w-10"
            aria-label="Toggle wishlist"
          >
            <motion.span
              animate={
                wished
                  ? {
                      scale: [1, 1.35, 1],
                      rotate: [0, -8, 8, 0],
                    }
                  : {
                      scale: 1,
                    }
              }
              transition={{
                duration: 0.4,
              }}
            >
              <Heart
                size={17}
                className={
                  wished
                    ? 'fill-coral text-coral'
                    : 'text-navy/50 transition-colors duration-300 group-hover:text-coral'
                }
              />
            </motion.span>
          </motion.button>

          {/* Product Image */}
          <Link
            to={`/product/${product.id}`}
            className="block h-full w-full"
          >
            <motion.img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="relative z-10 h-full w-full object-cover"
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </Link>

          {/* Image overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-navy/20 via-transparent to-transparent"
          />

          {/* View Details */}
          <Link
            to={`/product/${product.id}`}
            className="absolute inset-x-0 bottom-0 z-20 flex translate-y-full items-center justify-center gap-2 bg-navy/85 py-3 text-xs font-bold text-white backdrop-blur-md transition-transform duration-300 ease-out group-hover:translate-y-0 sm:text-sm"
          >
            <Eye size={15} />
            View Details
          </Link>
        </div>

        {/* Product Information */}
        <div className="w-full p-4 sm:p-5">
          {/* Category */}
          <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-sky-500 sm:text-xs">
            {product.category}
          </p>

          {/* Product Name */}
          <Link to={`/product/${product.id}`}>
            <h3 className="mt-1.5 line-clamp-1 font-display text-sm font-extrabold text-navy transition-colors duration-300 hover:text-sky-500 sm:text-base">
              {product.name}
            </h3>
          </Link>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-1.5">
            <Star
              size={14}
              className="fill-sunshine-400 text-sunshine-400"
            />

            <span className="text-xs font-bold text-navy/70 sm:text-sm">
              {product.rating}
            </span>

            <span className="text-[11px] text-navy/40 sm:text-xs">
              ({product.reviews})
            </span>
          </div>

          {/* Price + Cart */}
          <div className="mt-3 flex items-center justify-between gap-2">
            <div className="flex min-w-0 items-baseline gap-1.5 sm:gap-2">
              <span className="font-display text-base font-extrabold text-navy sm:text-lg">
                ${product.price.toFixed(2)}
              </span>

              {product.oldPrice && (
                <span className="text-[11px] font-semibold text-navy/35 line-through sm:text-sm">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Add to Cart */}
            <motion.button
              type="button"
              onClick={handleAdd}
              whileHover={{
                scale: 1.08,
                rotate: added ? 0 : 3,
              }}
              whileTap={{
                scale: 0.85,
              }}
              className={`relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full text-white shadow-md transition-colors duration-300 sm:h-10 sm:w-10 ${
                added
                  ? 'bg-mint-500'
                  : 'bg-coral hover:bg-coral-600'
              }`}
              aria-label="Add to cart"
            >
              {/* Cart icon */}
              <motion.span
                animate={
                  added
                    ? {
                        y: -30,
                        opacity: 0,
                      }
                    : {
                        y: 0,
                        opacity: 1,
                      }
                }
                transition={{
                  duration: 0.25,
                  ease: 'easeOut',
                }}
              >
                <ShoppingCart size={16} />
              </motion.span>

              {/* Success icon */}
              {added && (
                <motion.span
                  initial={{
                    y: 30,
                    opacity: 0,
                    scale: 0.7,
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
                  className="absolute inset-0 grid place-items-center"
                >
                  <Check size={17} strokeWidth={3} />
                </motion.span>
              )}
            </motion.button>
          </div>
        </div>

        {/* Bottom hover shine */}
        <motion.div
          className="pointer-events-none absolute bottom-0 left-0 h-1 w-full origin-left bg-sky-400"
          initial={{
            scaleX: 0,
          }}
          whileHover={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.35,
            ease: 'easeOut',
          }}
        />
      </motion.div>
    </motion.div>
  )
}