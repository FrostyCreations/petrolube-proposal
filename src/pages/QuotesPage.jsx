import React, { useState } from 'react';
import { useEditor } from '../context/EditorContext';
import { Link } from 'react-router-dom';
import { ChevronLeft, CheckCircle2, FileText, ArrowUpRight } from 'lucide-react';
import Footer from '../components/Footer';
import ProposalBanner from '../components/dealer/ProposalBanner';
import './QuotesPage.css';
import './QuotesDealer.css';

const APPROVAL_RECIPIENT = "dominique@bigondigital.co.za";

// 36000 -> "R36,000"; 4479.25 -> "R4,479.25", matching the quotes
const formatRand = (value) => {
  const [whole, cents] = (Math.round(value * 100) / 100).toFixed(2).split('.');
  const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return cents === '00' ? `R${withCommas}` : `R${withCommas}.${cents}`;
};

// The website and the visual guide are booked with a 50% deposit; the hosting set-up is invoiced when done
const DEPOSIT_QUOTES = ['website', 'visual-guide'];

const QuotesPage = () => {
  const { data: proposalData } = useEditor();
  const [showConfirm, setShowConfirm] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [copied, setCopied] = useState(false);

  const quote = proposalData.quote;
  const quotes = quote.quotes;
  const vatRate = quote.vatRate;

  const [selected, setSelected] = useState(() => new Set(quotes.map(q => q.id)));

  const toggle = (id) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  };

  const chosen = quotes.filter(q => selected.has(q.id));
  const onceOffTotal = chosen.reduce((sum, q) => sum + q.onceOff, 0);
  const monthlyTotal = chosen.reduce((sum, q) => sum + q.monthly, 0);
  const onceOffVat = onceOffTotal * vatRate;
  const monthlyVat = monthlyTotal * vatRate;
  const deposit = chosen
    .filter(q => DEPOSIT_QUOTES.includes(q.id))
    .reduce((sum, q) => sum + q.onceOff * (1 + vatRate) / 2, 0);

  const priceLines = (q) => [
    q.onceOff ? { amount: formatRand(q.onceOff), period: 'once-off' } : null,
    q.monthly ? { amount: formatRand(q.monthly), period: 'per month' } : null
  ].filter(Boolean);

  const getApprovalText = () => {
    const lines = [`${proposalData.client?.name}: Website Proposal approved.`, '', 'Quotes accepted (excluding VAT):'];
    chosen.forEach(q => {
      const prices = priceLines(q).map(p => `${p.amount} ${p.period}`).join(' + ');
      lines.push(`- ${q.number} ${q.name} (${q.ref}): ${prices}`);
      if (q.estimateUrl) lines.push(`  Quote: ${q.estimateUrl}`);
    });
    lines.push('');
    if (onceOffTotal) {
      lines.push(`Once-off total: ${formatRand(onceOffTotal)} excl. VAT (${formatRand(onceOffTotal + onceOffVat)} incl. VAT)`);
    }
    if (deposit) lines.push(`50% deposit to book: ${formatRand(deposit)} incl. VAT`);
    if (monthlyTotal) {
      lines.push(`Monthly total: ${formatRand(monthlyTotal)} excl. VAT (${formatRand(monthlyTotal + monthlyVat)} incl. VAT)`);
    }
    return lines.join('\n');
  };

  const handleApprove = () => {
    const subject = `Proposal Approved: ${proposalData.client?.name}`;
    const approvalText = getApprovalText();

    try {
      navigator.clipboard.writeText(approvalText);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy:", err);
    }

    window.location.assign(`mailto:${APPROVAL_RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(approvalText)}`);
    setIsApproved(true);
    setShowConfirm(false);
  };

  const handleManualCopy = () => {
    navigator.clipboard.writeText(getApprovalText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openGmail = () => {
    const subject = `Proposal Approved: ${proposalData.client?.name}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${APPROVAL_RECIPIENT}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(getApprovalText())}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="quotes-page">
      <ProposalBanner banner={proposalData.hero?.banner} />
      <div className="quotes-header">
        <div className="container">
          <Link to="/" className="back-link">
            <ChevronLeft size={20} /> Back to Proposal
          </Link>
          <div className="header-content">
            <h1 className="quotes-title">Investment Summary</h1>
            <p className="quotes-subtitle">{proposalData.client?.name} · Valid until {quote.validUntil}</p>
          </div>
        </div>
      </div>

      <div className="container quotes-container">
        <div className="quotes-grid">
          <div className="quote-steps">
            <section className="quote-step">
              <h2 className="quote-step-title">Your Quotes</h2>
              <p className="quote-step-hint">Tick the quotes you accept. All prices exclude VAT.</p>
              <div className="quote-options">
                {quotes.map(q => {
                  const isSelected = selected.has(q.id);
                  return (
                    <label key={q.id} className={`quote-option checkbox${isSelected ? ' selected' : ''}`}>
                      <input type="checkbox" checked={isSelected} onChange={() => toggle(q.id)} />
                      <span className="quote-option-mark" />
                      <span className="quote-option-text">
                        <span className="quote-option-label">{q.number} · {q.ref}</span>
                        <span className="quote-option-name">
                          {q.name}
                          {q.tag && <span className="pl-tag">{q.tag}</span>}
                        </span>
                        <span className="quote-option-detail">{q.covers}</span>
                        {q.estimateUrl && (
                          // stopPropagation keeps a click on the link from ticking the box
                          <a href={q.estimateUrl} target="_blank" rel="noopener noreferrer" className="pl-quote-link" onClick={e => e.stopPropagation()}>
                            View quote <ArrowUpRight size={14} />
                          </a>
                        )}
                      </span>
                      <span className="quote-option-prices">
                        {priceLines(q).map(p => (
                          <span key={p.period} className="quote-option-price">{p.amount}<small>{p.period}</small></span>
                        ))}
                      </span>
                    </label>
                  );
                })}
              </div>

              <div className="spec-sheet setup-totals">
                <div className="spec-sheet-row total">
                  <span>Once-off total excl. VAT</span>
                  <span className="spec-sheet-amount">{formatRand(onceOffTotal)}</span>
                </div>
                <div className="spec-sheet-row">
                  <span>VAT (15%)</span>
                  <span className="spec-sheet-amount">{formatRand(onceOffVat)}</span>
                </div>
                <div className="spec-sheet-row">
                  <span>Once-off total incl. VAT</span>
                  <span className="spec-sheet-amount">{formatRand(onceOffTotal + onceOffVat)}</span>
                </div>
                <div className="spec-sheet-row">
                  <span>50% deposit to book, incl. VAT</span>
                  <span className="spec-sheet-amount">{formatRand(deposit)}</span>
                </div>
              </div>

              <div className="spec-sheet setup-totals">
                <div className="spec-sheet-row total">
                  <span>Monthly total excl. VAT</span>
                  <span className="spec-sheet-amount">{formatRand(monthlyTotal)}</span>
                </div>
                <div className="spec-sheet-row">
                  <span>VAT (15%)</span>
                  <span className="spec-sheet-amount">{formatRand(monthlyVat)}</span>
                </div>
                <div className="spec-sheet-row">
                  <span>Monthly total incl. VAT</span>
                  <span className="spec-sheet-amount">{formatRand(monthlyTotal + monthlyVat)}</span>
                </div>
              </div>
            </section>

            <section className="quote-step">
              <h2 className="quote-step-title">How Payment Works</h2>
              <ul className="quote-terms">
                {quote.terms.map(term => <li key={term}>{term}</li>)}
              </ul>
            </section>
          </div>

          <div className="summary-column">
            <div className="summary-card glass-panel dark">
              <h3 className="summary-title">Investment Summary</h3>

              {chosen.length === 0 && (
                <p className="summary-empty">Tick at least one quote to approve.</p>
              )}

              {onceOffTotal > 0 && (
                <div className="summary-group">
                  <p className="summary-group-title">Once-off</p>
                  {chosen.filter(q => q.onceOff).map(q => (
                    <div key={q.id} className="summary-row"><span>{q.id === 'hosting' ? 'Hosting set-up' : q.name}</span><span className="amount">{formatRand(q.onceOff)}</span></div>
                  ))}
                  <div className="summary-row total">
                    <span>Total excl. VAT</span>
                    <span className="amount">{formatRand(onceOffTotal)}</span>
                  </div>
                  {deposit > 0 && (
                    <div className="summary-row"><span>50% deposit incl. VAT</span><span className="amount">{formatRand(deposit)}</span></div>
                  )}
                </div>
              )}

              {monthlyTotal > 0 && (
                <>
                  <div className="summary-divider"></div>
                  <div className="summary-group">
                    <p className="summary-group-title">Monthly</p>
                    {chosen.filter(q => q.monthly).map(q => (
                      <div key={q.id} className="summary-row"><span>{q.name}</span><span className="amount">{formatRand(q.monthly)}</span></div>
                    ))}
                    <div className="summary-row total">
                      <span>Per month excl. VAT</span>
                      <span className="amount">{formatRand(monthlyTotal)}</span>
                    </div>
                  </div>
                </>
              )}

              <div className="summary-divider"></div>

              {isApproved ? (
                <div className="approval-success-container glass-panel">
                  <div className="success-header">
                    <CheckCircle2 size={32} className="success-icon" />
                    <h4>Project Approved!</h4>
                  </div>
                  <p className="success-msg">Approval details copied to clipboard. If your email didn't open, use the buttons below:</p>
                  <div className="success-actions">
                    <button className="btn-success-action" onClick={openGmail}>
                      Open in Gmail
                    </button>
                    <button className="btn-success-action outline" onClick={handleManualCopy}>
                      {copied ? 'Copied!' : 'Copy to Clipboard'}
                    </button>
                  </div>
                  <button className="btn-success-reset" onClick={() => setIsApproved(false)}>
                    <ChevronLeft size={16} /> Back
                  </button>
                </div>
              ) : !showConfirm ? (
                <button className="btn-approve-all" onClick={() => setShowConfirm(true)} disabled={chosen.length === 0}>
                  <CheckCircle2 size={20} className="mr-2" /> Approve Selection
                </button>
              ) : (
                <div className="approval-confirm-container">
                  <p className="confirm-text">Confirm project approval?</p>
                  <div className="confirm-buttons">
                    <button className="btn-confirm-yes" onClick={handleApprove}>
                      Yes, Approve
                    </button>
                    <button className="btn-confirm-no" onClick={() => setShowConfirm(false)}>
                      No
                    </button>
                  </div>
                </div>
              )}

              <Link to="/" className="btn-view-all">
                <FileText size={20} className="mr-2" /> Return to Proposal
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuotesPage;
