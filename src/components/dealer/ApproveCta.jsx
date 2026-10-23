import { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './dealer.css';

// Closes the proposal with the one action the client needs to take
const ApproveCta = ({ data }) => (
  <section className="dealer-section approve-cta">
    <div className="container">
      <Link to="/quotes" className="btn-primary approve-cta-button">
        {data.buttonText} <ArrowRight size={18} />
      </Link>
    </div>
  </section>
);

export default memo(ApproveCta);
