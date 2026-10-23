import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import QuotesPage from './pages/QuotesPage.jsx'
import { EditorProvider } from './context/EditorContext.jsx'
// Client skin: loaded last so it overrides the shared template styles
import './petrolube-ui.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EditorProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/quotes" element={<QuotesPage />} />
        </Routes>
      </BrowserRouter>
    </EditorProvider>
  </StrictMode>,
)
