import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LinksPage from './app/page'
import CVPage from './app/cv/page'
import './app/globals.css'

function App() {
  return (
    <div className="min-h-screen dark bg-black">
      <Router>
        <Routes>
          <Route path="/" element={<LinksPage />} />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
