import { Link } from 'react-router-dom'
import { useEditor } from './context/EditorContext'
import ProposalBanner from './components/dealer/ProposalBanner'
import ApproveCta from './components/dealer/ApproveCta'
import BrandBand from './components/dealer/BrandBand'
import ClientShowcase from './components/dealer/ClientShowcase'
import AboutAgency from './components/dealer/AboutAgency'
import { PlHero, PlLockup, Problem, Solution, Investment, NextSteps } from './components/pl/Sections'
import Footer from './components/Footer'
import './index.css'

const ComponentMap = {
  Problem,
  Solution,
  Investment,
  NextSteps,
  ApproveCta,
  ClientShowcase,
  BrandBand,
  AboutAgency
};

function App() {
  const { data: proposalData } = useEditor()
  const navLinks = proposalData.sections.filter(section => section.navLabel)

  // Scrolls in-page instead of changing the URL hash, which the preview build uses for routing
  const scrollTo = (id) => (event) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app-container">
      <ProposalBanner banner={proposalData.hero?.banner} />

      {/* Simple section nav; sticks to the top once the banner scrolls away */}
      <header className="pl-nav">
        <div className="container pl-nav-inner">
          <a href="#top" onClick={scrollTo('top')} className="pl-nav-logo" aria-label={`${proposalData.client.name}, back to top`}>
            <PlLockup client={proposalData.client} />
          </a>
          <nav className="pl-nav-links" aria-label="Proposal sections">
            {navLinks.map(section => (
              <a key={section.id} href={`#${section.id}`} onClick={scrollTo(section.id)}>{section.navLabel}</a>
            ))}
          </nav>
          <Link to="/quotes" className="btn-primary pl-nav-cta">
            <span className="pl-nav-cta-full">View Quotes and Approve</span>
            <span className="pl-nav-cta-short">Approve Quotes</span>
          </Link>
        </div>
      </header>

      <main id="top">
        <PlHero data={proposalData.hero} />
        {proposalData.sections.filter(s => !s.data?.hideFromProposal).map((section) => {
          const Component = ComponentMap[section.type];
          if (!Component) return null;

          return (
            <div key={section.id} id={section.id}>
              <Component data={section.data} agencyName={proposalData.agency.name} />
            </div>
          );
        })}
      </main>
      <Footer />
    </div>
  )
}

export default App
