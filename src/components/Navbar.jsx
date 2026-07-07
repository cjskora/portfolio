import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-900 hover:text-primary-purple transition-colors">
            CS
          </Link>
          
          <div className="flex space-x-6">
            <Link
              to="/"
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/') ? 'text-primary-purple' : 'text-gray-600 hover:text-primary-purple'
              }`}
            >
              Home
              {isActive('/') && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-purple"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
            
            <Link
              to="/blog"
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/blog') ? 'text-primary-purple' : 'text-gray-600 hover:text-primary-purple'
              }`}
            >
              Blog
              {isActive('/blog') && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-purple"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
            
            <Link
              to="/resume"
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/resume') ? 'text-primary-purple' : 'text-gray-600 hover:text-primary-purple'
              }`}
            >
              Resume
              {isActive('/resume') && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-purple"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
