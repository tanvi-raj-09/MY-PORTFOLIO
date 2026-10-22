import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-page" id="contact">
      {/* TOP SECTION: Dark theme "WRITE ME" banner */}
      <div className="contact-banner">
        <span className="banner-sub">// GOT A PROJECT? A BUG? DOUBTS?</span>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=rajtanvi485@gmail.com"
          className="write-me-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          WRITE ME
          <span className="arrow-wrapper">
            <svg className="arrow-svg" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12H44M44 12L34 2M44 12L34 22" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>

      {/* BOTTOM SECTION: Light theme columns grid */}
      <div className="contact-info-section">
        <div className="dashed-divider"></div>

        <div className="contact-grid">
          {/* Column 1: EMAIL */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rajtanvi485@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="grid-col grid-link"
          >
            <div className="col-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <span className="col-label">EMAIL</span>
            <span className="col-value">
              rajtanvi485@gmail.com
            </span>
          </a>

          {/* Column 2: LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/tanvi-raj09"
            target="_blank"
            rel="noopener noreferrer"
            className="grid-col grid-link"
          >
            <div className="col-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <span className="col-label">LINKEDIN</span>
            <span className="col-value">
              linkedin.com/in/tanvi-raj09
            </span>
          </a>

          {/* Column 3: GITHUB */}
          <a
            href="https://github.com/tanvi-raj-09"
            target="_blank"
            rel="noopener noreferrer"
            className="grid-col grid-link"
          >
            <div className="col-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </div>
            <span className="col-label">GITHUB</span>
            <span className="col-value">
              github.com/tanvi-raj-09
            </span>
          </a>

          {/* Column 4: STATUS / AVAILABILITY */}
          <div className="grid-col">
            <div className="col-icon pulse-container">
              <span className="pulse-dot"></span>
            </div>
            <span className="col-label">AVAILABILITY</span>
            <span className="col-value static-text">
              AVAILABLE FOR FREELANCE
            </span>
          </div>
        </div>

        {/* Elegant Minimal Footer */}
        <footer className="contact-footer">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rajtanvi485@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-item font-mono footer-link"
          >
            RAJTANVI485@GMAIL.COM
          </a>
          <a
            href="https://github.com/tanvi-raj-09"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-item font-mono footer-link"
          >
            GITHUB: @TANVI-RAJ-09
          </a>
          <span className="footer-item font-mono">REMOTE · WORLDWIDE</span>
          <span className="footer-item font-mono">© 2026 TANVI RAJ®</span>
        </footer>
      </div>
    </section>
  );
}
