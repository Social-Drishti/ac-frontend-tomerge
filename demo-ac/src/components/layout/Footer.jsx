import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand & Contact Column */}
          <div className="footer-brand">
            <a href="/" className="footer-logo-link">
              <img
                src="/Astrochitra-color-logo.svg"
                alt="Astro Chitra Logo"
                className="footer-logo"
              />
            </a>
            <p className="footer-tagline">
              Guiding your cosmic journey with ancient wisdom and modern
              insight.
            </p>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <svg
                  className="footer-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>Contact number</span>
              </div>
              <div className="footer-contact-item">
                <svg
                  className="footer-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>email id</span>
              </div>
              <div className="footer-contact-item">
                <svg
                  className="footer-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer-links-group">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="footer-links-group">
            <h4 className="footer-heading">Useful Links</h4>
            <ul className="footer-links">
              <li>
                <a href="/#faq">FAQs</a>
              </li>
              <li>
                <a href="/#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>
            </ul>
          </div>

          {/* Map Column */}
          <div className="footer-map-column">
            <h4 className="footer-heading">Find Us</h4>
            <div className="footer-map-wrapper">
              <iframe
                title="AstroChitra Location - Mumbai"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.823809889395!2d72.83978727497956!3d19.159188182062685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e51b9f5aefbc197%3A0x3b2929c38b1956f6!2sSocial%20Drishti%20Media!5e0!3m2!1sen!2sin!4v1769163708942!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 AstroChitra. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <a href="/privacy">Privacy Policy</a>
            <span className="footer-divider">·</span>
            <a href="/terms">Terms of Service</a>
            <span className="footer-divider">·</span>
            <a href="/cookies">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
