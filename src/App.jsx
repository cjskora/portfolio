import { Navigate, Route, Routes } from 'react-router-dom'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollManager from './components/ScrollManager'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import Resume from './pages/Resume'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-fg">
      <ScrollProgress />
      <ScrollManager />
      <Navbar />

      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          {/* Anything unknown (including the retired /blog) lands on the home page. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
