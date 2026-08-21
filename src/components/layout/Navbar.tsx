import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

interface NavItem {
  label: string
  path: string
}

const navItems: NavItem[] = [
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Careers', path: '/careers' },
  { label: 'Blog', path: '/blog' },
]

function HexagonLogo() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hexGradNavbar" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <polygon
        points="18,2 32,10 32,26 18,34 4,26 4,10"
        fill="url(#hexGradNavbar)"
      />
      <polygon
        points="18,7 28,13 28,23 18,29 8,23 8,13"
        fill="#050811"
      />
      <polygon
        points="18,11 24,15 24,21 18,25 12,21 12,15"
        fill="url(#hexGradNavbar)"
        opacity="0.8"
      />
    </svg>
  )
}

function LogoBrand() {
  return (
    <NavLink
      to="/"
      className="flex items-center gap-2 group"
      aria-label="NexGen Digital home"
    >
      <HexagonLogo />
      <span
        className="text-xl font-bold leading-none"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <span
          style={{
            background: 'linear-gradient(90deg, #2563eb, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          NexGen
        </span>
        <span style={{ color: '#8b949e' }}> Digital</span>
      </span>
    </NavLink>
  )
}

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-5 h-4 flex flex-col justify-between" aria-hidden="true">
      <motion.span
        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25 }}
        className="block h-0.5 w-full rounded-full"
        style={{ background: '#e6edf3', transformOrigin: 'center' }}
      />
      <motion.span
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
        className="block h-0.5 w-full rounded-full"
        style={{ background: '#e6edf3' }}
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25 }}
        className="block h-0.5 w-full rounded-full"
        style={{ background: '#e6edf3', transformOrigin: 'center' }}
      />
    </div>
  )
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const navbarBackground = isScrolled
    ? 'rgba(5, 8, 17, 0.97)'
    : 'rgba(5, 8, 17, 0.75)'

  const navbarBorder = isScrolled
    ? '1px solid #21262d'
    : '1px solid rgba(33, 38, 45, 0.4)'

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: navbarBackground,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: navbarBorder,
          transition: 'background 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{ maxWidth: '1280px', padding: '0 1.5rem', height: '68px' }}
        >
          <LogoBrand />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                style={({ isActive }) => ({
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  padding: '0.5rem 0.875rem',
                  borderRadius: '0.5rem',
                  transition: 'color 0.2s ease, background 0.2s ease',
                  background: isActive ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
                  ...(isActive
                    ? {
                        backgroundImage: 'linear-gradient(90deg, #2563eb, #06b6d4)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }
                    : { color: '#8b949e' }),
                })}
                className="hover:text-[#e6edf3]"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA button */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink
              to="/contact"
              style={{
                background: 'linear-gradient(90deg, #2563eb, #06b6d4)',
                color: '#ffffff',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9375rem',
                fontWeight: 600,
                padding: '0.625rem 1.5rem',
                borderRadius: '0.5rem',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
              }}
              className="hover:opacity-90 hover:scale-105"
            >
              Start a Project
            </NavLink>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg"
            style={{ background: '#161b22', border: '1px solid #21262d' }}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <HamburgerIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.7)',
                zIndex: 40,
              }}
              aria-hidden="true"
            />

            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                maxWidth: '320px',
                background: '#0d1117',
                borderLeft: '1px solid #21262d',
                zIndex: 45,
                display: 'flex',
                flexDirection: 'column',
                padding: '1.5rem',
                overflowY: 'auto',
              }}
            >
              <div className="flex items-center justify-between mb-8">
                <LogoBrand />
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center w-9 h-9 rounded-lg"
                  style={{ background: '#161b22', border: '1px solid #21262d' }}
                  aria-label="Close menu"
                >
                  <HamburgerIcon isOpen={true} />
                </button>
              </div>

              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.25 }}
                  >
                    <NavLink
                      to={item.path}
                      style={({ isActive }) => ({
                        display: 'block',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '1.0625rem',
                        fontWeight: 500,
                        padding: '0.75rem 1rem',
                        borderRadius: '0.5rem',
                        background: isActive ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
                        border: isActive ? '1px solid rgba(37, 99, 235, 0.25)' : '1px solid transparent',
                        color: isActive ? '#06b6d4' : '#8b949e',
                        transition: 'all 0.2s ease',
                      })}
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pt-6">
                <NavLink
                  to="/contact"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: 'linear-gradient(90deg, #2563eb, #06b6d4)',
                    color: '#ffffff',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 600,
                    padding: '0.875rem 1.5rem',
                    borderRadius: '0.5rem',
                  }}
                >
                  Start a Project
                </NavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
