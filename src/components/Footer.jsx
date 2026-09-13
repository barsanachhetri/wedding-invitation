import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <p>wedding Invitation website by</p>
        <a href="https://invitationnation.in/" target="_blank" rel="noreferrer">
          INVITATIONNATION
        </a>
      </div>

      <div className="footer-links">
        <span>⚠ Report a Problem</span>
        <span>✉ Contact Support</span>
        <span>🛡 Privacy Policy</span>
      </div>

      <p className="powered-by">
        POWERED BY{' '}
        <a href="https://invitationnation.in/" target="_blank" rel="noreferrer">
          INVITATION NATION
        </a>
      </p>

      <p className="copyright">© 2026 Invitation Nation. All rights reserved. Crafted with care for your forever.</p>
    </footer>
  );
}