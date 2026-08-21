import { NavLink } from 'react-router-dom'

function HexagonLogo() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hexGradFooter" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <polygon
        points="18,2 32,10 32,26 18,34 4,26 4,10"
        fill="url(#hexGradFooter)"
      />
      <polygon
        points="18,7 28,13 28,23 18,29 8,23 8,13"
        fill="#050811"
      />
      <polygon
        points="18,11 24,15 24,21 18,25 12,21 12,15"
        fill="url(#hexGradFooter)"
        opacity="0.8"
      />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

interface FooterLink {
  label: string
  path: string
}

const servicesLinks: FooterLink[] = [
  { label: 'Web Development', path: '/services/web-development' },
  { label: 'Mobile App Development', path: '/services/mobile-app' },
  { label: 'UI/UX Design', path: '/services/ui-ux-design' },
  { label: 'Digital Marketing', path: '/services/digital-marketing' },
  { label: 'Cloud & DevOps', path: '/services/cloud-devops' },
  { label: 'AI & Automation', path: '/services/ai-automation' },
]

const companyLinks: FooterLink[] = [
  { label: 'About Us', path: '/about' },
  { label: 'Our Portfolio', path: '/portfolio' },
  { label: 'Careers', path: '/careers' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Privacy Policy', path: '/privacy' },
]

const socialLinks = [
  { icon: GitHubIcon, href: 'https://github.com', label: 'GitHub' },
  { icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter' },
  { icon: LinkedInIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
]

const techStack = ['React', 'TypeScript', 'Vite']

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ background: '#050811', borderTop: '1px solid transparent', borderImage: 'linear-gradient(90deg, transparent, #2563eb, #06b6d4, transparent) 1' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem 0' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HexagonLogo />
              <span
                className="text-xl font-bold leading-none"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span
                  style={{
                    background: 'linear-gradient(90deg, #2563eb, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  NexGen
                </span>
                <span style={{ color: '#8b949e' }}> Digital</span>
              </span>
            </div>
            <p
              style={{
                color: '#06b6d4',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9375rem',
                fontWeight: 600,
                marginBottom: '0.75rem',
              }}
            >
              Building Tomorrow's Digital Solutions Today
            </p>
            <p
              style={{
                color: '#8b949e',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
              }}
            >
              We craft cutting-edge digital experiences that drive growth and transform businesses. From strategy to deployment, we deliver solutions that make an impact.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '38px',
                    height: '38px',
                    borderRadius: '0.5rem',
                    background: '#161b22',
                    border: '1px solid #21262d',
                    color: '#8b949e',
                    transition: 'color 0.2s ease, border-color 0.2s ease, background 0.2s ease',
                  }}
                  className="hover:text-[#06b6d4] hover:border-[#06b6d4] hover:bg-[#0d1117]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem',
                fontWeight: 700,
                color: '#e6edf3',
                marginBottom: '1.25rem',
                letterSpacing: '0.02em',
              }}
            >
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {servicesLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9rem',
                      color: '#8b949e',
                      transition: 'color 0.2s ease',
                    }}
                    className="hover:text-[#06b6d4]"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem',
                fontWeight: 700,
                color: '#e6edf3',
                marginBottom: '1.25rem',
                letterSpacing: '0.02em',
              }}
            >
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9rem',
                      color: '#8b949e',
                      transition: 'color 0.2s ease',
                    }}
                    className="hover:text-[#06b6d4]"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem',
                fontWeight: 700,
                color: '#e6edf3',
                marginBottom: '1.25rem',
                letterSpacing: '0.02em',
              }}
            >
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a
                  href="mailto:hello@nexgendigital.com"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#8b949e', transition: 'color 0.2s ease' }}
                  className="hover:text-[#06b6d4]"
                >
                  hello@nexgendigital.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="tel:+15551234567"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#8b949e', transition: 'color 0.2s ease' }}
                  className="hover:text-[#06b6d4]"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#8b949e' }}
                >
                  San Francisco, CA
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <NavLink
                to="/contact"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: 'linear-gradient(90deg, #2563eb, #06b6d4)',
                  color: '#ffffff',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  padding: '0.625rem 1.5rem',
                  borderRadius: '0.5rem',
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                }}
                className="hover:opacity-90 hover:scale-105"
              >
                Start a Project
              </NavLink>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-8"
          style={{ borderTop: '1px solid #21262d', paddingBottom: '2.5rem' }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              color: '#8b949e',
            }}
          >
            © {currentYear} NexGen Digital. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              color: '#8b949e',
            }}
          >
            Designed &amp; Developed by <a href="https://www.infirexa.tech" target="_blank" rel="noopener noreferrer">Infirexa</a>
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              color: '#8b949e',
              fontStyle: 'italic',
            }}
          >
            Built with precision. Delivered with passion.
          </p>
          <div className="flex items-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#06b6d4',
                  background: '#161b22',
                  border: '1px solid #21262d',
                  padding: '0.25rem 0.625rem',
                  borderRadius: '9999px',
                  letterSpacing: '0.02em',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}