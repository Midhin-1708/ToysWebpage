import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Heart,
  ShoppingCart,
  Menu,
  X,
} from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/categories', label: 'Categories' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')

  const { cartCount, wishlistCount } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const submitSearch = (e) => {
    e.preventDefault()

    const value = query.trim()

    if (value) {
      navigate(`/shop?q=${encodeURIComponent(value)}`)
      setSearchOpen(false)
      setQuery('')
    }
  }

  const closeMobileMenu = () => {
    setOpen(false)
  }

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-cream/90 shadow-[0_8px_30px_rgba(27,42,74,0.08)] backdrop-blur-xl'
            : 'bg-cream'
        }`}
      >
        {/* =====================================================
            NAVBAR INNER
        ====================================================== */}
        <div
          className="
            flex
            h-16
            w-full
            items-center
            justify-between
            gap-2
            px-2
            min-[360px]:px-3
            min-[400px]:px-4
            sm:h-20
            sm:px-6
            md:px-8
            lg:px-8
            xl:px-12
            2xl:px-16
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}
          <NavLink
            to="/"
            className="
              flex
              min-w-0
              flex-1
              shrink
              items-center
              gap-1
              overflow-hidden
              min-[360px]:gap-1.5
              sm:flex-none
              sm:gap-2
            "
          >
            {/* Teddy */}
            <motion.span
              className="
                flex
                shrink-0
                select-none
                text-[21px]
                min-[360px]:text-[23px]
                min-[400px]:text-[25px]
                sm:text-3xl
              "
              whileHover={{
                rotate: [0, -12, 12, 0],
                scale: 1.08,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              🧸
            </motion.span>

            {/* Brand Name */}
            <span
              className="
                min-w-0
                truncate
                whitespace-nowrap
                font-display
                text-[11px]
                font-extrabold
                leading-none
                tracking-[-0.2px]
                text-navy
                min-[360px]:text-xs
                min-[400px]:text-sm
                sm:text-xl
                md:text-2xl
              "
            >
              IDEALS{' '}
              <span className="text-coral">
                PlayWorld
              </span>
            </span>
          </NavLink>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="
                  relative
                  py-2
                  font-semibold
                  text-navy/80
                  transition-colors
                  duration-300
                  hover:text-navy
                "
              >
                {({ isActive }) => (
                  <span className="relative">
                    {link.label}

                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="
                          absolute
                          -bottom-1
                          left-0
                          right-0
                          h-1
                          rounded-full
                          bg-coral
                        "
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* =================================================
              ACTION BUTTONS
          ================================================== */}
          <div
            className="
              flex
              shrink-0
              items-center
              gap-1
              min-[360px]:gap-1.5
              min-[400px]:gap-2
              sm:gap-2
              md:gap-3
            "
          >
            {/* =================================================
                SEARCH
            ================================================== */}
            <div className="relative">
              <motion.button
                type="button"
                whileHover={{
                  y: -2,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                onClick={() => setSearchOpen((value) => !value)}
                className="
                  grid
                  h-8
                  w-8
                  place-items-center
                  rounded-full
                  bg-white/80
                  text-navy
                  shadow-sm
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:shadow-md
                  min-[360px]:h-9
                  min-[360px]:w-9
                  min-[400px]:h-10
                  min-[400px]:w-10
                  sm:h-11
                  sm:w-11
                "
                aria-label="Search"
              >
                <Search
                  className="
                    h-[15px]
                    w-[15px]
                    min-[360px]:h-[17px]
                    min-[360px]:w-[17px]
                    sm:h-5
                    sm:w-5
                  "
                />
              </motion.button>

              {/* Search Box */}
              <AnimatePresence>
                {searchOpen && (
                  <motion.form
                    onSubmit={submitSearch}
                    initial={{
                      opacity: 0,
                      width: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      width: 'min(230px, calc(100vw - 24px))',
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      width: 0,
                      x: 20,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeOut',
                    }}
                    className="
                      absolute
                      right-0
                      top-10
                      z-50
                      overflow-hidden
                      rounded-full
                      bg-white
                      shadow-toy
                      sm:top-14
                    "
                  >
                    <input
                      autoFocus
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search toys..."
                      className="
                        w-full
                        bg-transparent
                        px-5
                        py-3
                        text-sm
                        font-medium
                        text-navy
                        outline-none
                        placeholder:text-navy/40
                      "
                    />
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* =================================================
                WISHLIST
            ================================================== */}
            <NavLink
              to="/shop?wishlist=1"
              className="
                relative
                grid
                h-8
                w-8
                shrink-0
                place-items-center
                rounded-full
                bg-white/80
                text-navy
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-white
                hover:shadow-md
                min-[360px]:h-9
                min-[360px]:w-9
                min-[400px]:h-10
                min-[400px]:w-10
                sm:h-11
                sm:w-11
              "
              aria-label="Wishlist"
            >
              <Heart
                className="
                  h-[15px]
                  w-[15px]
                  min-[360px]:h-[17px]
                  min-[360px]:w-[17px]
                  sm:h-5
                  sm:w-5
                "
              />

              <AnimatePresence>
                {wishlistCount > 0 && (
                  <motion.span
                    key={wishlistCount}
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    exit={{
                      scale: 0,
                      opacity: 0,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 18,
                    }}
                    className="
                      absolute
                      -right-1
                      -top-1
                      grid
                      h-4
                      w-4
                      place-items-center
                      rounded-full
                      bg-coral
                      text-[8px]
                      font-bold
                      text-white
                      sm:h-5
                      sm:w-5
                      sm:text-[10px]
                    "
                  >
                    {wishlistCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </NavLink>

            {/* =================================================
                CART
            ================================================== */}
            <NavLink
              to="/shop?cart=1"
              className="
                relative
                grid
                h-8
                w-8
                shrink-0
                place-items-center
                rounded-full
                bg-navy
                text-cream
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-navy-600
                hover:shadow-md
                min-[360px]:h-9
                min-[360px]:w-9
                min-[400px]:h-10
                min-[400px]:w-10
                sm:h-11
                sm:w-11
              "
              aria-label="Cart"
            >
              <ShoppingCart
                className="
                  h-[15px]
                  w-[15px]
                  min-[360px]:h-[17px]
                  min-[360px]:w-[17px]
                  sm:h-5
                  sm:w-5
                "
              />

              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    key={cartCount}
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    exit={{
                      scale: 0,
                      opacity: 0,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 18,
                    }}
                    className="
                      absolute
                      -right-1
                      -top-1
                      grid
                      h-4
                      w-4
                      place-items-center
                      rounded-full
                      bg-sunshine-400
                      text-[8px]
                      font-bold
                      text-navy
                      sm:h-5
                      sm:w-5
                      sm:text-[10px]
                    "
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </NavLink>

            {/* =================================================
                MOBILE MENU
            ================================================== */}
            <motion.button
              type="button"
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => setOpen(true)}
              className="
                grid
                h-8
                w-8
                shrink-0
                place-items-center
                rounded-full
                bg-white/80
                text-navy
                shadow-sm
                transition-all
                duration-300
                hover:bg-white
                hover:shadow-md
                min-[360px]:h-9
                min-[360px]:w-9
                min-[400px]:h-10
                min-[400px]:w-10
                sm:h-11
                sm:w-11
                lg:hidden
              "
              aria-label="Open menu"
            >
              <Menu
                className="
                  h-[17px]
                  w-[17px]
                  min-[360px]:h-[19px]
                  min-[360px]:w-[19px]
                  sm:h-[21px]
                  sm:w-[21px]
                "
              />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="
                fixed
                inset-0
                z-[60]
                bg-navy/40
                backdrop-blur-sm
                lg:hidden
              "
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={closeMobileMenu}
            />

            {/* Drawer */}
            <motion.div
              className="
                fixed
                right-0
                top-0
                z-[70]
                flex
                h-full
                w-[84%]
                max-w-sm
                flex-col
                overflow-hidden
                bg-cream
                shadow-2xl
                lg:hidden
              "
              initial={{
                x: '100%',
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: '100%',
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 32,
              }}
            >
              {/* Drawer Header */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-navy/10
                  px-4
                  py-4
                  min-[400px]:px-5
                  sm:p-6
                "
              >
                <NavLink
                  to="/"
                  onClick={closeMobileMenu}
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-2
                  "
                >
                  <span className="shrink-0 text-2xl">
                    🧸
                  </span>

                  <span
                    className="
                      truncate
                      whitespace-nowrap
                      font-display
                      text-sm
                      font-extrabold
                      text-navy
                      min-[400px]:text-base
                      sm:text-lg
                    "
                  >
                    IDEALS{' '}
                    <span className="text-coral">
                      PlayWorld
                    </span>
                  </span>
                </NavLink>

                <motion.button
                  type="button"
                  whileHover={{
                    rotate: 90,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  onClick={closeMobileMenu}
                  className="
                    grid
                    h-9
                    w-9
                    shrink-0
                    place-items-center
                    rounded-full
                    bg-white
                    text-navy
                    shadow-sm
                    min-[400px]:h-10
                    min-[400px]:w-10
                  "
                  aria-label="Close menu"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Mobile Links */}
              <nav
                className="
                  flex
                  flex-col
                  gap-2
                  overflow-y-auto
                  px-4
                  py-5
                  min-[400px]:px-5
                  sm:px-6
                  sm:py-6
                "
              >
                {links.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.08 + i * 0.07,
                      duration: 0.35,
                    }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `block rounded-2xl px-4 py-3.5 text-base font-bold transition-all duration-300 sm:text-lg ${
                          isActive
                            ? 'bg-coral/10 text-coral'
                            : 'text-navy hover:translate-x-1 hover:bg-white'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Decoration */}
              <motion.div
                className="mt-auto p-5 text-center sm:p-6"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="text-3xl"
                >
                  🧸 ✨ 🧩
                </motion.div>

                <p className="mt-3 text-sm font-semibold text-navy/50">
                  Let the fun begin!
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}