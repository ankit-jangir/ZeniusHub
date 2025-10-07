import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const RouteScrollToTop = ({ behavior = 'smooth' }) => {
  const { pathname, search, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    try {
      window.scrollTo({ top: 0, left: 0, behavior })
    } catch (_) {
      window.scrollTo(0, 0)
    }
  }, [pathname, search, hash, behavior])

  return null
}

export default RouteScrollToTop

