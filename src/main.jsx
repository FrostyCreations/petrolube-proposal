import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import QuotesPage from './pages/QuotesPage.jsx'
import { EditorProvider } from './context/EditorContext.jsx'
// Client skin: loaded last so it overrides the shared template styles
import './petrolube-ui.css'

// The review preview is served from a single page, so it routes with the URL hash
const Router = import.meta.env.VITE_HASH_ROUTER === '1' ? HashRouter : BrowserRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EditorProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/quotes" element={<QuotesPage />} />
        </Routes>
      </Router>
    </EditorProvider>
  </StrictMode>,
)
