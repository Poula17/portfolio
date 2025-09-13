import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Achievements from './pages/Achievements'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-center space-x-6 text-lg font-semibold">
          <Link className="hover:text-yellow-300 transition-colors" to="/">Home</Link>
          <Link className="hover:text-yellow-300 transition-colors" to="/about">About</Link>
          <Link className="hover:text-yellow-300 transition-colors" to="/education">Education</Link>
          <Link className="hover:text-yellow-300 transition-colors" to="/experience">Experience</Link>
          <Link className="hover:text-yellow-300 transition-colors" to="/projects">Projects</Link>
          <Link className="hover:text-yellow-300 transition-colors" to="/skills">Skills</Link>
          <Link className="hover:text-yellow-300 transition-colors" to="/achievements">Achievements</Link>
          <Link className="hover:text-yellow-300 transition-colors" to="/services">Services</Link>
          <Link className="hover:text-yellow-300 transition-colors" to="/contact">Contact</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow p-8 container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-6 shadow-inner">
        © {new Date().getFullYear()} Poula Youssef
      </footer>
    </div>
  )
}

export default App
