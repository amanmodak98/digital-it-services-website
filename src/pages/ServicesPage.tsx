import React from 'react';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050811] text-[#e6edf3]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#21262d_1px,transparent_1px),linear-gradient(to_bottom,#21262d_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#2563eb]/10 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#2563eb] via-[#06b6d4] to-[#7c3aed] bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-[#8b949e] max-w-3xl mx-auto">
              Comprehensive digital solutions to accelerate your business growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service 1 ends */}

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-[#21262d]"></div>
      </div>

      {/* Service 2 - Mobile App Development */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#7c3aed]/10 border border-[#7c3aed]/20 mb-6">
                <svg className="w-8 h-8 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold mb-6">Mobile App Development</h2>
              <div className="space-y-4 text-[#8b949e] mb-8">
                <p>We craft high-performance mobile applications for iOS and Android platforms. Our team combines deep platform expertise with modern cross-platform solutions using React Native and Flutter to deliver apps that users love.</p>
                <p>From consumer-facing apps to enterprise mobility solutions, we build mobile experiences that are intuitive, fast, and reliable. We handle the full development lifecycle including architecture, UI/UX, backend integration, and app store submission.</p>
                <p>Our mobile applications are engineered for scalability, offline capability, and seamless performance across all device types. We follow platform-specific design guidelines to ensure your app feels native on both iOS and Android.</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Our Process</h3>
                <div className="flex flex-wrap gap-2">
                  {['Concept & Planning', 'UI/UX Design', 'Development', 'QA Testing', 'App Store Launch'].map((step, i, arr) => (
                    <React.Fragment key={step}>
                      <span className="px-3 py-1 bg-[#161b22] border border-[#21262d] rounded-full text-sm">{step}</span>
                      {i < arr.length - 1 && <span className="text-[#7c3aed]">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Deliverables</h3>
                <ul className="space-y-2">
                  {['iOS App', 'Android App', 'Backend API', 'App Store Optimization', 'Maintenance Plan'].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#7c3aed]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#7c3aed] rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-white">Starting from $8,000</span>
                <button className="px-6 py-3 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">Get Custom Quote</button>
              </div>
            </div>

            {/* Phone Mockup Visual */}
            <div className="flex justify-center">
              <div className="relative w-56 h-[450px] bg-[#0d1117] rounded-[3rem] border-4 border-[#21262d] shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#21262d] rounded-b-2xl"></div>
                <div className="absolute inset-0 pt-10 px-3 pb-6 flex flex-col gap-3">
                  <div className="w-full h-32 bg-gradient-to-br from-[#7c3aed]/30 to-[#2563eb]/30 rounded-xl border border-[#7c3aed]/20 flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="w-full h-8 bg-[#161b22] rounded-lg border border-[#21262d]"></div>
                  <div className="w-3/4 h-8 bg-[#161b22] rounded-lg border border-[#21262d]"></div>
                  <div className="flex gap-2">
                    <div className="flex-1 h-16 bg-[#7c3aed]/10 rounded-lg border border-[#7c3aed]/20"></div>
                    <div className="flex-1 h-16 bg-[#2563eb]/10 rounded-lg border border-[#2563eb]/20"></div>
                  </div>
                  <div className="w-full h-8 bg-[#161b22] rounded-lg border border-[#21262d]"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6"><div className="border-t border-[#21262d]"></div></div>

      {/* Service 4 - Digital Marketing */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#2563eb]/10 border border-[#2563eb]/20 mb-6">
                <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold mb-6">Digital Marketing</h2>
              <div className="space-y-4 text-[#8b949e] mb-8">
                <p>We drive measurable growth through data-driven digital marketing strategies. Our team specializes in SEO, PPC advertising, social media management, and content marketing to increase your online visibility and attract high-quality leads.</p>
                <p>From technical SEO audits to comprehensive content strategies, we build sustainable marketing ecosystems that deliver long-term ROI. Our paid advertising experts manage campaigns across Google, Meta, LinkedIn, and more to maximize your ad spend efficiency.</p>
                <p>We believe in full transparency and data-driven decisions. Every campaign is backed by detailed analytics, regular reporting, and continuous optimization to ensure your marketing dollars produce real, measurable business results.</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Our Process</h3>
                <div className="flex flex-wrap gap-2">
                  {['Audit', 'Strategy', 'Execution', 'Optimization', 'Reporting'].map((step, i, arr) => (
                    <React.Fragment key={step}>
                      <span className="px-3 py-1 bg-[#161b22] border border-[#21262d] rounded-full text-sm">{step}</span>
                      {i < arr.length - 1 && <span className="text-[#2563eb]">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Deliverables</h3>
                <ul className="space-y-2">
                  {['SEO Audit', 'Content Calendar', 'Ad Campaigns', 'Monthly Reports', 'Analytics Dashboard'].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['Google Analytics', 'SEMrush', 'HubSpot', 'Mailchimp', 'Meta Ads', 'Google Ads'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[#2563eb]/10 border border-[#2563eb]/20 text-[#2563eb] rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-white">Starting from $2,000/month</span>
                <button className="px-6 py-3 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">Get Custom Quote</button>
              </div>
            </div>
            {/* Marketing Visual */}
            <div className="bg-[#0d1117] rounded-xl border border-[#21262d] p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-white">Campaign Performance</span>
                <span className="text-xs text-[#8b949e]">Last 30 days</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1"><span className="text-[#8b949e]">Organic Traffic</span><span className="text-[#2563eb]">+127%</span></div>
                  <div className="h-2 bg-[#21262d] rounded-full"><div className="h-2 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] rounded-full w-4/5"></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1"><span className="text-[#8b949e]">Conversion Rate</span><span className="text-[#06b6d4]">+45%</span></div>
                  <div className="h-2 bg-[#21262d] rounded-full"><div className="h-2 bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] rounded-full w-3/5"></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1"><span className="text-[#8b949e]">Ad ROI</span><span className="text-[#7c3aed]">+312%</span></div>
                  <div className="h-2 bg-[#21262d] rounded-full"><div className="h-2 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] rounded-full w-5/6"></div></div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="bg-[#161b22] rounded-lg p-3 border border-[#21262d] text-center">
                    <div className="text-xl font-bold text-[#2563eb]">48k</div>
                    <div className="text-xs text-[#8b949e]">Visitors</div>
                  </div>
                  <div className="bg-[#161b22] rounded-lg p-3 border border-[#21262d] text-center">
                    <div className="text-xl font-bold text-[#06b6d4]">2.4k</div>
                    <div className="text-xs text-[#8b949e]">Leads</div>
                  </div>
                  <div className="bg-[#161b22] rounded-lg p-3 border border-[#21262d] text-center">
                    <div className="text-xl font-bold text-[#7c3aed]">$84k</div>
                    <div className="text-xs text-[#8b949e]">Revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Design Visual */}
            <div className="order-2 md:order-1">
              <div className="bg-[#0d1117] rounded-xl border border-[#21262d] p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[#8b949e]">Design System</span>
                  <span className="text-xs px-2 py-1 bg-[#06b6d4]/10 text-[#06b6d4] rounded-full border border-[#06b6d4]/20">Figma</span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="h-12 bg-[#2563eb] rounded-lg"></div>
                  <div className="h-12 bg-[#06b6d4] rounded-lg"></div>
                  <div className="h-12 bg-[#7c3aed] rounded-lg"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-8 bg-[#161b22] rounded-lg border border-[#21262d] flex items-center px-3">
                    <div className="w-2/3 h-2 bg-[#8b949e]/30 rounded-full"></div>
                  </div>
                  <div className="h-8 bg-[#2563eb] rounded-lg flex items-center justify-center">
                    <div className="w-1/3 h-2 bg-white/40 rounded-full"></div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1 h-16 bg-[#161b22] rounded-lg border border-[#21262d]"></div>
                    <div className="flex-1 h-16 bg-[#161b22] rounded-lg border border-[#21262d]"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#06b6d4]/10 border border-[#06b6d4]/20 mb-6">
                <svg className="w-8 h-8 text-[#06b6d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold mb-6">UI/UX Design</h2>
              <div className="space-y-4 text-[#8b949e] mb-8">
                <p>We create user-centered designs that bridge the gap between beautiful aesthetics and functional usability. Our design team employs rigorous research methodologies to understand your users and craft experiences that delight them at every touchpoint.</p>
                <p>Using industry-leading tools like Figma, we build comprehensive design systems that maintain consistency across your entire product. From initial wireframes to high-fidelity prototypes, every design decision is grounded in data and user feedback.</p>
                <p>Our design process doesn't end at handoff. We collaborate closely with development teams to ensure pixel-perfect implementation and iterate based on real-world user behavior data, continuously improving the experience over time.</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Our Process</h3>
                <div className="flex flex-wrap gap-2">
                  {['Research', 'Wireframing', 'Prototyping', 'User Testing', 'Handoff'].map((step, i, arr) => (
                    <React.Fragment key={step}>
                      <span className="px-3 py-1 bg-[#161b22] border border-[#21262d] rounded-full text-sm">{step}</span>
                      {i < arr.length - 1 && <span className="text-[#06b6d4]">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Deliverables</h3>
                <ul className="space-y-2">
                  {['User Research Report', 'Wireframes', 'Interactive Prototype', 'Design System', 'Figma Files'].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#06b6d4]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Adobe XD', 'Principle', 'Maze', 'Hotjar', 'Framer'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[#06b6d4]/10 border border-[#06b6d4]/20 text-[#06b6d4] rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-white">Starting from $3,000</span>
                <button className="px-6 py-3 bg-gradient-to-r from-[#06b6d4] to-[#2563eb] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">Get Custom Quote</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Visual */}
            <div className="order-2 md:order-1">
              <div className="bg-[#0d1117] rounded-lg border border-[#21262d] p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-[#8b949e] ml-4">index.tsx</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div className="text-[#8b949e]">1  <span className="text-[#7c3aed]">import</span> <span className="text-[#06b6d4]">React</span> <span className="text-[#7c3aed]">from</span> <span className="text-[#2563eb]">'react'</span>;</div>
                  <div className="text-[#8b949e]">2  <span className="text-[#7c3aed]">import</span> <span className="text-[#06b6d4]">{'{ motion }'}</span> <span className="text-[#7c3aed]">from</span> <span className="text-[#2563eb]">'framer-motion'</span>;</div>
                  <div className="text-[#8b949e]">3</div>
                  <div className="text-[#8b949e]">4  <span className="text-[#7c3aed]">const</span> <span className="text-[#06b6d4]">App</span> <span className="text-white">=</span> {'() =>'} {'{'}</div>
                  <div className="text-[#8b949e]">5    <span className="text-[#7c3aed]">return</span> (</div>
                  <div className="text-[#8b949e]">6      <span className="text-[#2563eb]">&lt;div</span> <span className="text-[#06b6d4]">className</span>=<span className="text-[#2563eb]">"app"</span><span className="text-[#2563eb]">&gt;</span></div>
                  <div className="text-[#8b949e]">7        <span className="text-[#2563eb]">&lt;h1&gt;</span>Welcome<span className="text-[#2563eb]">&lt;/h1&gt;</span></div>
                  <div className="text-[#8b949e]">8      <span className="text-[#2563eb]">&lt;/div&gt;</span></div>
                  <div className="text-[#8b949e]">9    )</div>
                  <div className="text-[#8b949e]">10  {'}'}</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#2563eb]/10 border border-[#2563eb]/20 mb-6">
                <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>

              <h2 className="text-4xl font-bold mb-6">Web Development</h2>

              <div className="space-y-4 text-[#8b949e] mb-8">
                <p>
                  We build modern, scalable web applications that deliver exceptional user experiences. Our team specializes in cutting-edge technologies like React, Next.js, and TypeScript to create fast, responsive, and maintainable solutions.
                </p>
                <p>
                  From single-page applications to complex enterprise platforms, we architect solutions that scale with your business. We follow industry best practices for code quality, security, and performance optimization to ensure your web application stands out.
                </p>
                <p>
                  Our development process emphasizes collaboration, iterative improvement, and continuous deployment. We deliver production-ready applications with comprehensive documentation, testing coverage, and ongoing support to keep your platform running smoothly.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Our Process</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#161b22] border border-[#21262d] rounded-full text-sm">Requirements Gathering</span>
                  <span className="text-[#2563eb]">→</span>
                  <span className="px-3 py-1 bg-[#161b22] border border-[#21262d] rounded-full text-sm">Architecture Design</span>
                  <span className="text-[#2563eb]">→</span>
                  <span className="px-3 py-1 bg-[#161b22] border border-[#21262d] rounded-full text-sm">Development</span>
                  <span className="text-[#2563eb]">→</span>
                  <span className="px-3 py-1 bg-[#161b22] border border-[#21262d] rounded-full text-sm">Testing</span>
                  <span className="text-[#2563eb]">→</span>
                  <span className="px-3 py-1 bg-[#161b22] border border-[#21262d] rounded-full text-sm">Launch</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Deliverables</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Responsive Website</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Admin Dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>API Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Performance Optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Documentation</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[#2563eb]/10 border border-[#2563eb]/20 text-[#2563eb] rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-white">Starting from $5,000</span>
                <button className="px-6 py-3 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  Get Custom Quote
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6"><div className="border-t border-[#21262d]"></div></div>

      {/* Service 5 - Cloud & DevOps */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Cloud Visual */}
            <div className="order-2 md:order-1">
              <div className="bg-[#0d1117] rounded-xl border border-[#21262d] p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <span className="text-sm font-medium text-white">Cloud Infrastructure</span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-lg p-3 text-center">
                    <div className="text-xs text-[#7c3aed] font-medium">AWS</div>
                    <div className="text-xs text-[#8b949e] mt-1">EC2 / S3</div>
                  </div>
                  <div className="bg-[#2563eb]/10 border border-[#2563eb]/20 rounded-lg p-3 text-center">
                    <div className="text-xs text-[#2563eb] font-medium">GCP</div>
                    <div className="text-xs text-[#8b949e] mt-1">GKE / Run</div>
                  </div>
                  <div className="bg-[#06b6d4]/10 border border-[#06b6d4]/20 rounded-lg p-3 text-center">
                    <div className="text-xs text-[#06b6d4] font-medium">Azure</div>
                    <div className="text-xs text-[#8b949e] mt-1">AKS / Blob</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-[#161b22] rounded-lg p-3 border border-[#21262d]">
                    <span className="text-xs text-[#8b949e]">CI/CD Pipeline</span>
                    <span className="text-xs text-green-400">● Running</span>
                  </div>
                  <div className="flex items-center justify-between bg-[#161b22] rounded-lg p-3 border border-[#21262d]">
                    <span className="text-xs text-[#8b949e]">Docker Containers</span>
                    <span className="text-xs text-green-400">● 12 Active</span>
                  </div>
                  <div className="flex items-center justify-between bg-[#161b22] rounded-lg p-3 border border-[#21262d]">
                    <span className="text-xs text-[#8b949e]">Kubernetes Cluster</span>
                    <span className="text-xs text-green-400">● Healthy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cloud & DevOps Content */}
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#7c3aed]/10 border border-[#7c3aed]/20 mb-6">
                <svg className="w-8 h-8 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold mb-6">Cloud &amp; DevOps</h2>
              <div className="space-y-4 text-[#8b949e] mb-8">
                <p>We design and implement robust cloud infrastructure that powers modern applications at any scale. Our DevOps engineers specialize in AWS, GCP, and Azure to build resilient, cost-efficient architectures tailored to your workload.</p>
                <p>From containerization with Docker and Kubernetes to fully automated CI/CD pipelines, we eliminate deployment friction and enable your teams to ship features faster and more reliably. Our infrastructure-as-code approach ensures every environment is reproducible and version-controlled.</p>
                <p>We implement comprehensive monitoring, alerting, and incident response systems so you have full visibility into infrastructure health. Our SRE practices and runbooks ensure your platform maintains high availability and your team can respond swiftly to any issues.</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Our Process</h3>
                <div className="flex flex-wrap gap-2">
                  {['Assessment', 'Architecture Design', 'Migration', 'Automation', 'Monitoring'].map((step, i, arr) => (
                    <React.Fragment key={step}>
                      <span className="px-3 py-1 bg-[#161b22] border border-[#21262d] rounded-full text-sm">{step}</span>
                      {i < arr.length - 1 && <span className="text-[#7c3aed]">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Deliverables</h3>
                <ul className="space-y-2">
                  {['Cloud Architecture', 'CI/CD Pipeline', 'Docker Setup', 'Monitoring Dashboard', 'Runbooks'].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#7c3aed]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#7c3aed] rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-white">Starting from $4,000</span>
                <button className="px-6 py-3 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">Get Custom Quote</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6"><div className="border-t border-[#21262d]"></div></div>

      {/* Service 6 - AI & Machine Learning */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#06b6d4]/10 border border-[#06b6d4]/20 mb-6">
                <svg className="w-8 h-8 text-[#06b6d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold mb-6">AI &amp; Machine Learning</h2>
              <div className="space-y-4 text-[#8b949e] mb-8">
                <p>We integrate cutting-edge artificial intelligence and machine learning capabilities into your applications. Our AI engineers work with the latest models and frameworks to build intelligent systems that automate workflows, generate insights, and deliver personalized experiences.</p>
                <p>From natural language processing with GPT models to custom ML pipelines for predictive analytics, we architect AI solutions that solve real business problems. We leverage cloud-native ML platforms and modern frameworks like TensorFlow, PyTorch, and LangChain to build scalable AI systems.</p>
                <p>Our approach emphasizes practical implementation and measurable business outcomes. We handle data preparation, model training, API integration, monitoring, and continuous improvement to ensure your AI systems deliver consistent value over time.</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Our Process</h3>
                <div className="flex flex-wrap gap-2">
                  {['Data Analysis', 'Model Design', 'Training', 'Integration', 'Monitoring'].map((step, i, arr) => (
                    <React.Fragment key={step}>
                      <span className="px-3 py-1 bg-[#161b22] border border-[#21262d] rounded-full text-sm">{step}</span>
                      {i < arr.length - 1 && <span className="text-[#06b6d4]">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Deliverables</h3>
                <ul className="space-y-2">
                  {['AI Model', 'API Integration', 'Training Pipeline', 'Documentation', 'Ongoing Support'].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#06b6d4]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain', 'FastAPI'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[#06b6d4]/10 border border-[#06b6d4]/20 text-[#06b6d4] rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-white">Starting from $6,000</span>
                <button className="px-6 py-3 bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">Get Custom Quote</button>
              </div>
            </div>

            {/* AI Visual */}
            <div className="bg-[#0d1117] rounded-xl border border-[#21262d] p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-[#06b6d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="text-sm font-medium text-white">AI Model Training</span>
              </div>
              <div className="space-y-3">
                <div className="bg-[#161b22] rounded-lg p-3 border border-[#21262d]">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-[#8b949e]">Epoch 45/50</span>
                    <span className="text-[#06b6d4]">90% Complete</span>
                  </div>
                  <div className="h-2 bg-[#21262d] rounded-full"><div className="h-2 bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] rounded-full w-[90%]"></div></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#161b22] rounded-lg p-3 border border-[#21262d]">
                    <div className="text-xs text-[#8b949e] mb-1">Accuracy</div>
                    <div className="text-lg font-bold text-[#06b6d4]">94.7%</div>
                  </div>
                  <div className="bg-[#161b22] rounded-lg p-3 border border-[#21262d]">
                    <div className="text-xs text-[#8b949e] mb-1">Loss</div>
                    <div className="text-lg font-bold text-[#7c3aed]">0.053</div>
                  </div>
                </div>
                <div className="bg-[#161b22] rounded-lg p-3 border border-[#21262d]">
                  <div className="text-xs text-[#8b949e] mb-2">Model Architecture</div>
                  <div className="space-y-1 font-mono text-xs">
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#06b6d4]"></div><span className="text-[#8b949e]">Input Layer (512)</span></div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#7c3aed]"></div><span className="text-[#8b949e]">Hidden Layers (256, 128)</span></div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#2563eb]"></div><span className="text-[#8b949e]">Output Layer (10)</span></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#2563eb]/10 via-[#06b6d4]/10 to-[#7c3aed]/10 rounded-2xl border border-[#21262d] p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-[#8b949e] mb-8">Let's discuss how we can help transform your digital presence</p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#2563eb] via-[#06b6d4] to-[#7c3aed] text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity">
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
