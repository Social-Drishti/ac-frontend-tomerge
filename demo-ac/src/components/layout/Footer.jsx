import "./Footer.css";

export default function Footer() {
  return (
    <footer className="text-gray-300">
      <div className="mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="footer-logo">
              <a href="/">
                <img
                  src="/Astrochitra-color-logo.svg"
                  alt="Astro Chitra Logo"
                />
              </a>
            </div>
            <p className="text-sm mb-4 footer-text">
              Contact number
              <br />
              email id <br />
              Mumbai, Maharashtra, India
            </p>
            <div className="mt-6 rounded-lg overflow-hidden shadow-lg border border-gray-700 footer-map-container">
              <iframe
                title="AstroChitra Location - Mumbai"
                className="w-full h-48 sm:h-64"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.823809889395!2d72.83978727497956!3d19.159188182062685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e51b9f5aefbc197%3A0x3b2929c38b1956f6!2sSocial%20Drishti%20Media!5e0!3m2!1sen!2sin!4v1769163708942!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 footer-section-title">Company</h4>
            <ul className="space-y-2 text-sm footer-list">
              <li className="hover:text-terracotta-200 cursor-pointer transition-colors">
                About us
              </li>
              <li className="hover:text-terracotta-200 cursor-pointer transition-colors">
                Services
              </li>
              <li className="hover:text-terracotta-200 cursor-pointer transition-colors">
                Blog
              </li>
              <li className="hover:text-terracotta-200 cursor-pointer transition-colors">
                Contact us
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 footer-section-title">
              Useful Links
            </h4>
            <ul className="space-y-2 text-sm footer-list">
              <li className="hover:text-terracotta-200 cursor-pointer transition-colors">
                FAQs
              </li>
              <li className="hover:text-terracotta-200 cursor-pointer transition-colors">
                Testimonials
              </li>
              <li className="hover:text-terracotta-200 cursor-pointer transition-colors">
                Gallery
              </li>
              <li className="hover:text-terracotta-200 cursor-pointer transition-colors">
                Events
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>Crystals</li>
              <li>Books</li>
            </ul>
          </div> */}
        </div>

        <div className="mt-16 pt-8 text-center text-sm footer-copyright">
          <p>© 2025 AstroChitra. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="transition-colors footer-link">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors footer-link">
              Terms of Service
            </a>
            <a href="#" className="transition-colors footer-link">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
