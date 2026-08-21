import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const IconCode = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15.75h3" />
  </svg>
);
const IconPalette = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
  </svg>
);
const IconChart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);
const IconCloud = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
  </svg>
);
const IconSpark = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
  </svg>
);

const services = [
  { id: 1, title: 'Web Development',   description: 'Build blazing-fast, scalable web applications using modern frameworks and best-in-class engineering practices.', gradient: 'from-[#2563eb] to-[#06b6d4]', icon: <IconCode /> },
  { id: 2, title: 'Mobile Apps',       description: 'Craft delightful iOS and Android experiences that keep users engaged and drive measurable business outcomes.',     gradient: 'from-[#7c3aed] to-[#ec4899]', icon: <IconPhone /> },
  { id: 3, title: 'UI/UX Design',      description: 'Design intuitive, accessible interfaces grounded in user research and refined through iterative prototyping.',    gradient: 'from-[#06b6d4] to-[#14b8a6]', icon: <IconPalette /> },
  { id: 4, title: 'Digital Marketing', description: 'Accelerate growth with data-driven SEO, paid media, and content strategies that convert visitors into customers.', gradient: 'from-[#2563eb] to-[#6366f1]', icon: <IconChart /> },
  { id: 5, title: 'Cloud Solutions',   description: 'Architect resilient, auto-scaling cloud infrastructure on AWS, GCP, or Azure — fully managed and cost-optimised.', gradient: 'from-[#7c3aed] to-[#2563eb]', icon: <IconCloud /> },
  { id: 6, title: 'AI & Automation',   description: 'Embed intelligent AI pipelines and workflow automation that eliminate bottlenecks and compound operational efficiency.', gradient: 'from-[#06b6d4] to-[#7c3aed]', icon: <IconSpark /> },
];

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'FastAPI',
  'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Kubernetes',
  'Terraform', 'Figma', 'GraphQL', 'TailwindCSS', 'Git', 'Linux',
];

const processSteps = [
  { step: '01', title: 'Discovery', icon: '🔍', description: 'We dive deep into your goals, audience, and technical constraints to build a shared understanding of what success looks like.' },
  { step: '02', title: 'Design',    icon: '🎨', description: 'Our designers craft wireframes and high-fidelity prototypes, iterating with you until every interaction feels exactly right.' },
  { step: '03', title: 'Develop',   icon: '⚙️', description: 'Engineers build in agile sprints with continuous integration, automated testing, and weekly demos to keep you in the loop.' },
  { step: '04', title: 'Deploy',    icon: '🚀', description: 'We launch with zero-downtime deployments, set up observability dashboards, and stay on hand for post-launch support.' },
];

const projects = [
  { id: 1, name: 'E-Commerce Platform', client: 'TechRetail Corp', category: 'Web App',    tags: ['React', 'Node.js', 'PostgreSQL'],          description: 'Built a fully scalable e-commerce platform processing 10k+ daily transactions, cutting checkout time by 40% through optimised UX and caching.',               image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80', color: '#2563eb' },
  { id: 2, name: 'FinTech Mobile App',   client: 'PayFlow Inc',      category: 'Mobile App', tags: ['React Native', 'Python', 'AWS'],            description: 'Delivered a cross-platform payments app with biometric auth, real-time notifications, and bank-grade encryption for 200k+ active users.',                  image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80', color: '#7c3aed' },
  { id: 3, name: 'SaaS Dashboard',       client: 'DataViz Pro',      category: 'Web App',    tags: ['Next.js', 'TypeScript', 'MongoDB'],         description: 'Engineered a real-time analytics dashboard with customisable widgets, role-based access, and sub-200ms query performance at scale.',                       image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', color: '#06b6d4' },
];

const testimonials = [
  { id: 1, name: 'Sarah Chen',     role: 'CTO',            company: 'TechRetail Corp', quote: 'NexGen transformed our digital presence. Their team delivered a platform that exceeded every KPI we set, on time and on budget. Truly exceptional.' },
  { id: 2, name: 'Marcus Johnson', role: 'CEO',            company: 'PayFlow Inc',     quote: 'Exceptional team — proactive communication, meticulous QA, and on-time delivery. Our app launched with zero critical bugs and a 4.8-star App Store rating.' },
  { id: 3, name: 'Priya Patel',    role: 'VP Engineering', company: 'DataViz Pro',     quote: "Their technical expertise is unmatched. NexGen's engineers tackled our toughest performance bottlenecks and left us with clean, well-documented code." },
];

const statsData = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 8,   suffix: '',  label: 'Years Experience' },
  { value: 50,  suffix: '+', label: 'Happy Clients' },
  { value: 98,  suffix: '%', label: 'Client Retention' },
];

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#050811] overflow-hidden grid-bg">
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, rgba(6,182,212,0.1) 40%, transparent 70%)' }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col gap-8">
          <motion.div variants={fadeUp} className="inline-flex w-fit">
            <span
              className="text-sm font-medium px-4 py-1.5 rounded-full text-[#e6edf3]"
              style={{ background: 'linear-gradient(#0d1117, #0d1117) padding-box, linear-gradient(135deg, #2563eb, #06b6d4) border-box', border: '1px solid transparent' }}
            >
              🚀 Next-Gen Digital Agency
            </span>
          </motion.div>
          <motion.div variants={fadeUp}>
            <h1 className="font-['Space_Grotesk'] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#e6edf3]">
              We Build Digital<br />
              Experiences That<br />
              <span className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
                Drive Growth
              </span>
            </h1>
          </motion.div>
          <motion.p variants={fadeUp} className="text-lg text-[#8b949e] max-w-xl leading-relaxed">
            We craft innovative digital solutions that blend cutting-edge technology with exceptional design. From scalable web platforms to intelligent AI systems, we turn your vision into measurable business impact.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              style={{ background: 'linear-gradient(135deg, #2563eb, #06b6d4)' }}
            >
              Start Your Project
            </Link>
            <Link
              to="/projects"
              className="px-6 py-3 rounded-lg font-semibold text-[#e6edf3] border transition-all hover:bg-[#0d1117]"
              style={{ background: 'linear-gradient(#050811, #050811) padding-box, linear-gradient(135deg, #2563eb, #06b6d4) border-box', border: '2px solid transparent' }}
            >
              View Our Work
            </Link>
          </motion.div>
          <motion.div variants={fadeUp} className="flex items-center gap-8 pt-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#e6edf3]">150+</span>
              <span className="text-sm text-[#8b949e]">Projects</span>
            </div>
            <div className="h-8 w-px bg-[#21262d]" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#e6edf3]">8+</span>
              <span className="text-sm text-[#8b949e]">Years</span>
            </div>
            <div className="h-8 w-px bg-[#21262d]" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#e6edf3]">50+</span>
              <span className="text-sm text-[#8b949e]">Clients</span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="bg-[#0d1117] border border-[#21262d] rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#21262d]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="text-[#8b949e]">// React Component</div>
              <div className="mt-2"><span className="text-[#7c3aed]">const</span> <span className="text-[#06b6d4]">Hero</span> = () =&gt; {'{'}</div>
              <div className="ml-4 text-[#7c3aed]">return</div>
              <div className="ml-6">&lt;<span className="text-[#2563eb]">div</span> <span className="text-[#06b6d4]">className</span>=<span className="text-[#14b8a6]">"hero"</span>&gt;</div>
              <div className="ml-8">&lt;<span className="text-[#2563eb]">h1</span>&gt;Innovation&lt;/<span className="text-[#2563eb]">h1</span>&gt;</div>
              <div className="ml-6">&lt;/<span className="text-[#2563eb]">div</span>&gt;</div>
              <div className="ml-2">{'}'}</div>
            </div>
          </motion.div>
          <motion.div
            animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-8 -right-8 px-3 py-1.5 bg-[#2563eb] text-white text-xs font-semibold rounded-full shadow-lg"
          >
            React
          </motion.div>
          <motion.div
            animate={{ x: [0, -8, 0], y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-12 -left-8 px-3 py-1.5 bg-[#7c3aed] text-white text-xs font-semibold rounded-full shadow-lg"
          >
            TypeScript
          </motion.div>
          <motion.div
            animate={{ x: [0, -6, 0], y: [0, 6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute -bottom-4 right-16 px-3 py-1.5 bg-[#06b6d4] text-white text-xs font-semibold rounded-full shadow-lg"
          >
            Node.js
          </motion.div>
          <motion.div
            animate={{ x: [0, 6, 0], y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-24 -right-12 px-3 py-1.5 bg-[#14b8a6] text-white text-xs font-semibold rounded-full shadow-lg"
          >
            AWS
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-24 bg-[#050811]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#e6edf3] mb-4">What We Do</h2>
          <p className="text-lg text-[#8b949e] max-w-2xl mx-auto">
            End-to-end digital services designed to accelerate your growth and deliver exceptional user experiences.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="bg-[#0d1117] border border-[#21262d] rounded-xl p-6 transition-all hover:border-[#2563eb]/50"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 text-white`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#e6edf3] mb-2">{service.title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed mb-4">{service.description}</p>
              <Link to="/services" className="text-sm font-medium bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                Learn More →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section className="py-24 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#e6edf3] mb-4">Technologies We Master</h2>
          <p className="text-lg text-[#8b949e] max-w-2xl mx-auto">
            We stay at the forefront of the modern stack to deliver performant, maintainable, and scalable solutions.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-3"
        >
          {techStack.map((tech) => (
            <motion.span
              key={tech}
              variants={fadeUp}
              className="px-4 py-2 bg-[#161b22] border border-[#21262d] rounded-full text-sm font-medium bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent hover:border-[#2563eb]/60 transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-24 bg-[#050811]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#e6edf3] mb-4">How We Work</h2>
          <p className="text-lg text-[#8b949e] max-w-2xl mx-auto">
            A proven four-step process that keeps you informed, in control, and confident at every milestone.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-4"
                style={{ background: 'linear-gradient(135deg, #2563eb, #06b6d4)' }}
              >
                {step.icon}
              </div>
              <div className="text-xs font-bold text-[#06b6d4] tracking-widest mb-1">{step.step}</div>
              <h3 className="text-xl font-semibold text-[#e6edf3] mb-3">{step.title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="py-24 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#e6edf3] mb-4">Featured Work</h2>
          <p className="text-lg text-[#8b949e] max-w-2xl mx-auto">
            A selection of projects where we turned ambitious ideas into measurable outcomes.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-[#161b22] border border-[#21262d] rounded-xl overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] to-transparent" />
                <span
                  className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded text-white"
                  style={{ backgroundColor: project.color }}
                >
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#e6edf3] mb-1">{project.name}</h3>
                <p className="text-xs text-[#8b949e] mb-3">{project.client}</p>
                <p className="text-sm text-[#8b949e] leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-[#0d1117] border border-[#21262d] rounded text-[#8b949e]">{tag}</span>
                  ))}
                </div>
                <Link to="/projects" className="text-sm font-medium bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                  View Case Study →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#050811]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#e6edf3] mb-4">What Our Clients Say</h2>
          <p className="text-lg text-[#8b949e] max-w-2xl mx-auto">
            Trusted by forward-thinking companies to deliver excellence at every stage.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeUp}
              className="bg-[#0d1117] border border-[#21262d] rounded-xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563eb] to-[#06b6d4]" />
              <div className="flex items-center gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#e6edf3] leading-relaxed mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563eb] to-[#06b6d4] flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#e6edf3]">{testimonial.name}</div>
                  <div className="text-xs text-[#8b949e]">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    if (!isInView) return;
    statsData.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 1800;
      const step = Math.ceil(end / (duration / 16));
      const timer = setInterval(() => {
        start += step;
        if (start >= end) { start = end; clearInterval(timer); }
        setCounts((prev) => prev.map((v, idx) => (idx === i ? start : v)));
      }, 16);
    });
  }, [isInView]);

  return (
    <section className="py-24 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {statsData.map((stat, i) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent mb-2">
                {counts[i]}{stat.suffix}
              </div>
              <div className="text-[#8b949e] text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface ContactForm {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

function ContactSection() {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', projectType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full bg-[#0d1117] border border-[#21262d] rounded-lg px-4 py-3 text-[#e6edf3] placeholder-[#8b949e] focus:outline-none focus:border-[#2563eb] transition-colors text-sm";

  return (
    <section
      className="py-24"
      style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(124,58,237,0.08) 100%), #050811' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#e6edf3] mb-6">
              Ready to Build<br />
              <span className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
                Something Great?
              </span>
            </h2>
            <p className="text-[#8b949e] text-lg leading-relaxed mb-8">
              Tell us about your project and let's explore how NexGen Digital can help you build, launch, and scale a digital product that drives real business results.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              style={{ background: 'linear-gradient(135deg, #2563eb, #06b6d4)' }}
            >
              Schedule Free Consultation
            </Link>
          </div>
          <div className="bg-[#0d1117] border border-[#21262d] rounded-xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-[#e6edf3] mb-2">Message Sent!</h3>
                <p className="text-[#8b949e]">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#8b949e] mb-1.5">Your Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#8b949e] mb-1.5">Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@company.com" className={inputClass} required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#8b949e] mb-1.5">Project Type</label>
                  <select name="selectProjectType" value={form.projectType} onChange={handleChange} className={inputClass} required>
                    <option value="">Select a service...</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="design">UI/UX Design</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="ai">AI &amp; Automation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#8b949e] mb-1.5">Project Details</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project goals, timeline, and budget..." className={`${inputClass} resize-none h-32`} required />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25"
                  style={{ background: 'linear-gradient(135deg, #2563eb, #06b6d4)' }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="bg-[#050811]">
      <HeroSection />
      <ServicesSection />
      <TechStackSection />
      <ProcessSection />
      <StatsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
