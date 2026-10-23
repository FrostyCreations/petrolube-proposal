import { useEditor } from './context/EditorContext'
import ProposalBanner from './components/dealer/ProposalBanner'
import ApproveCta from './components/dealer/ApproveCta'
import BrandBand from './components/dealer/BrandBand'
import ClientShowcase from './components/dealer/ClientShowcase'
import AboutAgency from './components/dealer/AboutAgency'
import { PlHero, Problem, Solution, Investment, NextSteps } from './components/pl/Sections'
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

  return (
    <div className="app-container">
      <ProposalBanner banner={proposalData.hero?.banner} />

      <main>
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
