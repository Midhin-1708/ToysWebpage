import React, { createContext, useContext, useMemo, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]) // { id, qty }
  const [wishlist, setWishlist] = useState([]) // [id]
  const [toast, setToast] = useState(null)

  const showToast = useCallback((message) => {
    setToast(message)
    window.clearTimeout(showToast._t)
    showToast._t = window.setTimeout(() => setToast(null), 1800)
  }, [])

  const addToCart = useCallback((product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        )
      }
      return [...prev, { id: product.id, qty }]
    })
    showToast(`${product.name} added to cart`)
  }, [showToast])

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const updateQty = useCallback((id, qty) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: Math.max(1, qty) } : item))
    )
  }, [])

  const toggleWishlist = useCallback((product) => {
    setWishlist((prev) => {
      const exists = prev.includes(product.id)
      if (exists) {
        showToast(`${product.name} removed from wishlist`)
        return prev.filter((id) => id !== product.id)
      }
      showToast(`${product.name} added to wishlist`)
      return [...prev, product.id]
    })
  }, [showToast])

  const isWishlisted = useCallback((id) => wishlist.includes(id), [wishlist])

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.qty, 0), [cart])
  const wishlistCount = wishlist.length

  const value = {
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    updateQty,
    toggleWishlist,
    isWishlisted,
    cartCount,
    wishlistCount,
    toast,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
