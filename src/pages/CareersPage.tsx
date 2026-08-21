import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const colors = {
  bg: '#050811',
  surface: '#0d1117',
  card: '#161b22',
  border: '#21262d',
  text: '#e6edf3',
  muted: '#8b949e',
  blue: '#2563eb',
  cyan: '#06b6d4',
  purple: '#7c3aed',
};

const deptColors: Record<string, string> = {
  Engineering: '#2563eb',
  Design: '#7c3aed',
  Marketing: '#06b6d4',
  Operations: '#16a34a',
};

interface Job {
  id: number;
  title: string;
  dept: string;
  type: string;
  salary: string;
  shortDesc: string;
  requirements: string[];
  responsibilities: string[];
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Senior React Developer',
    dept: 'Engineering',
    type: 'Remote | Full-time',
    salary: '$120k – $160k',
    shortDesc: 'Lead frontend architecture for our flagship SaaS products and mentor a growing team of developers.',
    requirements: ['5+ years of React experience', 'TypeScript expert', 'GraphQL & REST API experience', 'Testing: Jest, Cypress', 'System design skills'],
    responsibilities: ['Lead frontend architecture decisions', 'Mentor junior developers', 'Conduct thorough code reviews', 'Drive performance optimization', 'Collaborate with design & product'],
  },
  {
    id: 2,
    title: 'UX Designer',
    dept: 'Design',
    type: 'Remote/Hybrid | Full-time',
    salary: '$90k – $120k',
    shortDesc: 'Shape user experiences that delight millions of users across web and mobile products.',
    requirements: ['4+ years UX design experience', 'Figma expert', 'Design systems experience', 'User research & testing', 'Strong portfolio required'],
    responsibilities: ['Lead design projects end-to-end', 'Create wireframes & prototypes', 'Build and maintain design systems', 'Conduct user testing sessions', 'Collaborate with engineering team'],
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    dept: 'Engineering',
    type: 'Remote | Full-time',
    salary: '$110k – $150k',
    shortDesc: 'Build and scale the infrastructure powering our clients\' mission-critical applications.',
    requirements: ['Kubernetes & Docker expertise', 'AWS certified preferred', 'CI/CD pipelines (GitHub Actions)', 'Terraform & IaC', '4+ years experience'],
    responsibilities: ['Infrastructure management & scaling', 'Build and maintain CI/CD pipelines', 'Security hardening & compliance', 'Cost optimization strategies', 'On-call rotation & incident response'],
  },
  {
    id: 4,
    title: 'Digital Marketing Lead',
    dept: 'Marketing',
    type: 'Hybrid | Full-time',
    salary: '$80k – $110k',
    shortDesc: 'Own the marketing strategy and drive demand generation for a fast-growing tech agency.',
    requirements: ['SEO/PPC expertise', 'Analytics: GA4, Mixpanel', 'Content strategy experience', '5+ years in digital marketing', 'Team leadership experience'],
    responsibilities: ['Define and execute marketing strategy', 'Manage multi-channel campaigns', 'Lead a team of 3 marketers', 'Client reporting & performance reviews', 'Manage $500k+ annual ad budget'],
  },
  {
    id: 5,
    title: 'Python Engineer',
    dept: 'Engineering',
    type: 'Remote | Full-time',
    salary: '$100k – $140k',
    shortDesc: 'Build scalable backend services and integrate AI/ML capabilities into our product suite.',
    requirements: ['Python expert (5+ years)', 'FastAPI or Django proficiency', 'ML basics & AI integration', 'PostgreSQL & Redis', 'AWS Lambda & cloud services'],
    responsibilities: ['Develop scalable backend services', 'Design and build REST APIs', 'Integrate AI/ML features', 'Database schema design & optimization', 'Write comprehensive test suites'],
  },
  {
    id: 6,
    title: 'Project Manager',
    dept: 'Operations',
    type: 'Hybrid | Full-time',
    salary: '$85k – $115k',
    shortDesc: 'Own end-to-end delivery of complex digital projects across engineering, design, and marketing.',
    requirements: ['PMP or PRINCE2 certified', 'Agile/Scrum certified (PSM, CSM)', 'Client management experience', 'Technical background preferred', '5+ years in PM roles'],
    responsibilities: ['Own project delivery & timelines', 'Primary client point of contact', 'Resource planning & allocation', 'Risk identification & mitigation', 'Cross-team coordination & reporting'],
  },
];

const benefits = [
  { icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: 'Remote-Friendly', desc: 'Work from anywhere in the world. Our team spans 12 countries and counting.', color: '#2563eb' },
  { icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: 'Flexible Hours', desc: 'Set your own schedule. Core overlap hours 10am–2pm UTC is all we ask.', color: '#06b6d4' },
  { icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: 'Health Insurance', desc: 'Full medical, dental, and vision coverage for you and your family.', color: '#ef4444' },
  { icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-7 10 7-10 7-10-7z"/><path d="M6 12v5c3 3 9 3 12 0v-5" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: 'Learning Budget', desc: '$2,000/year for courses, books, and conferences to keep growing.', color: '#7c3aed' },
  { icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>, title: 'Stock Options', desc: 'Meaningful equity so you share in the value you help create.', color: '#16a34a' },
  { icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>, title: '30 Days PTO', desc: 'Unlimited recharge time. We trust you to manage your energy and output.', color: '#f59e0b' },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  );
}

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [modalJob, setModalJob] = useState<Job | null>(null);
  const [formState, setFormState] = useState({ name: '', email: '', linkedin: '', portfolio: '', resume: '', coverLetter: '' });

  function handleFormChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setModalJob(null);
    setFormState({ name: '', email: '', linkedin: '', portfolio: '', resume: '', coverLetter: '' });
  }

  return (
    <div style={{ background: colors.bg, color: colors.text, fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '120px 24px 80px' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(37,99,235,0.18) 0%, transparent 70%)', zIndex: 0 }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(22,163,74,0.12)', border: '1px solid rgba(22,163,74,0.35)', color: '#4ade80', padding: '6px 18px', borderRadius: '999px', fontSize: '13px', fontWeight: 600, marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80', animation: 'pulse 2s infinite' }} />
              We're Hiring!
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, margin: '0 0 20px', lineHeight: 1.1, background: 'linear-gradient(135deg, #e6edf3 0%, #06b6d4 50%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Join Our Team
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} style={{ fontSize: '1.25rem', color: colors.muted, lineHeight: 1.7, maxWidth: '580px', margin: '0 auto 36px' }}>
            Build the future with us. Work on challenging problems, alongside brilliant people, with the tools and freedom to do your best work.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
            <a href="#openings" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', background: `linear-gradient(135deg, ${colors.blue}, ${colors.cyan})`, color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 700, fontSize: '1rem', boxShadow: '0 4px 20px rgba(37,99,235,0.4)', transition: 'transform 0.2s, box-shadow 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,99,235,0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.4)'; }}>
              See Open Positions
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* WHY NEXGEN */}
      <section style={{ padding: '100px 24px', background: colors.surface }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span style={{ color: colors.cyan, fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Culture</span>
              <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, margin: '12px 0 0' }}>Why NexGen?</h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {[
              { icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: 'Learn & Grow', desc: 'We invest heavily in your development. Annual learning budget, mentorship programs, conference attendance, and a culture that celebrates curiosity and continuous improvement.', color: colors.blue },
              { icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: 'Do Great Work', desc: 'Ship software that matters. Work on challenging technical problems, own entire product areas, and see the real-world impact of your contributions every single week.', color: colors.cyan },
              { icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: 'Make an Impact', desc: 'Our work reaches millions of users across 12 countries. Every feature you build, every system you optimize contributes to real businesses achieving their goals.', color: colors.purple },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: '20px', padding: '40px 32px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${item.color}, transparent)` }} />
                <div style={{ color: item.color, marginBottom: '20px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: colors.muted, lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span style={{ color: colors.cyan, fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Perks</span>
              <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, margin: '12px 0 0' }}>What We Offer</h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {benefits.map((benefit, i) => (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -6 }} style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: '16px', padding: '32px 28px', cursor: 'default' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '14px', background: `linear-gradient(135deg, ${benefit.color}22, ${benefit.color}0d)`, border: `1px solid ${benefit.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: benefit.color }}>
                  {benefit.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>{benefit.title}</h3>
                <p style={{ color: colors.muted, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="openings" style={{ padding: '100px 24px', background: colors.surface }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span style={{ color: colors.cyan, fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Openings</span>
              <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, margin: '12px 0 0' }}>Current Openings</h2>
            </div>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {jobs.map((job, i) => (
              <motion.div key={job.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ padding: '28px 32px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>{job.title}</h3>
                      <span style={{ background: `${deptColors[job.dept]}20`, color: deptColors[job.dept], border: `1px solid ${deptColors[job.dept]}44`, padding: '3px 12px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 600 }}>{job.dept}</span>
                    </div>
                    <span style={{ background: 'rgba(6,182,212,0.1)', color: colors.cyan, border: `1px solid rgba(6,182,212,0.25)`, padding: '4px 14px', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap' }}>{job.salary}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <span style={{ color: colors.muted, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {job.type}
                    </span>
                  </div>
                  <p style={{ color: colors.muted, fontSize: '0.95rem', lineHeight: 1.6, margin: '0 0 16px' }}>{job.shortDesc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {job.requirements.slice(0, 3).map(req => (
                      <li key={req} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: colors.muted, fontSize: '0.9rem' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: colors.cyan, flexShrink: 0 }} />
                        {req}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <button onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)} style={{ background: 'transparent', border: `1px solid ${colors.border}`, color: colors.text, padding: '9px 20px', borderRadius: '10px', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', transition: 'border-color 0.2s, color 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors.blue; e.currentTarget.style.color = colors.cyan; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.color = colors.text; }}>
                      {expandedJob === job.id ? 'Hide Details' : 'View Details'}
                    </button>
                    <button onClick={() => setModalJob(job)} style={{ background: `linear-gradient(135deg, ${colors.blue}, ${colors.cyan})`, border: 'none', color: '#fff', padding: '9px 20px', borderRadius: '10px', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', boxShadow: '0 2px 12px rgba(37,99,235,0.35)', transition: 'transform 0.15s, box-shadow 0.15s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(37,99,235,0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(37,99,235,0.35)'; }}>
                      Apply Now
                    </button>
                  </div>
                </div>
                <AnimatePresence>
                  {expandedJob === job.id && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
                      <div style={{ padding: '24px 32px 28px', borderTop: `1px solid ${colors.border}` }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
                          <div>
                            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', color: colors.cyan }}>Requirements</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              {job.requirements.map(req => (
                                <li key={req} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: colors.muted, fontSize: '0.9rem', lineHeight: 1.5 }}>
                                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: colors.cyan, flexShrink: 0, marginTop: '7px' }} />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', color: colors.blue }}>Responsibilities</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              {job.responsibilities.map(r => (
                                <li key={r} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: colors.muted, fontSize: '0.9rem', lineHeight: 1.5 }}>
                                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: colors.blue, flexShrink: 0, marginTop: '7px' }} />
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: '24px', padding: '60px 40px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(37,99,235,0.12), transparent 60%)' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>👋</div>
                <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, marginBottom: '16px' }}>Don't see your role?</h2>
                <p style={{ color: colors.muted, lineHeight: 1.7, fontSize: '1rem', marginBottom: '32px', maxWidth: '450px', margin: '0 auto 32px' }}>
                  We're always interested in connecting with talented people. Send us your CV and tell us how you'd contribute to NexGen.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="mailto:careers@nexgen.digital" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', background: `linear-gradient(135deg, ${colors.blue}, ${colors.cyan})`, color: '#fff', padding: '13px 28px', borderRadius: '12px', fontWeight: 700, fontSize: '0.95rem', boxShadow: '0 4px 20px rgba(37,99,235,0.4)', transition: 'transform 0.2s, box-shadow 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 25px rgba(37,99,235,0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.4)'; }}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    careers@nexgen.digital
                  </a>
                  <button onClick={() => setModalJob({ id: 0, title: 'Open Application', dept: 'General', type: 'Remote | Any', salary: 'Competitive', shortDesc: '', requirements: [], responsibilities: [] })} style={{ background: colors.surface, border: `2px solid ${colors.border}`, color: colors.text, padding: '11px 28px', borderRadius: '12px', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', transition: 'border-color 0.2s, background 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors.blue; e.currentTarget.style.background = `${colors.blue}10`; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.background = colors.surface; }}>
                    Send us your CV
                  </button>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* APPLICATION MODAL */}
      <AnimatePresence>
        {modalJob && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} style={{ position: 'fixed', inset: 0, background: 'rgba(5,8,17,0.85)', backdropFilter: 'blur(12px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }} onClick={(e) => { if (e.target === e.currentTarget) setModalJob(null); }}>
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 30 }} transition={{ duration: 0.3, ease: 'easeOut' }} style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: '20px', width: '100%', maxWidth: '580px', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
              <div style={{ padding: '32px 36px', borderBottom: `1px solid ${colors.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 4px' }}>Apply for Position</h2>
                  <p style={{ color: colors.cyan, fontSize: '0.9rem', fontWeight: 600, margin: 0 }}>{modalJob.title}</p>
                </div>
                <button onClick={() => setModalJob(null)} style={{ background: 'rgba(255,255,255,0.06)', border: `1px solid ${colors.border}`, color: colors.muted, width: '36px', height: '36px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s, color 0.2s', flexShrink: 0 }} onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = colors.text; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = colors.muted; }}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
              <form onSubmit={handleSubmit} style={{ padding: '32px 36px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {([
                  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Jane Smith', required: true },
                  { label: 'Email Address', name: 'email', type: 'email', placeholder: 'jane@example.com', required: true },
                  { label: 'LinkedIn URL', name: 'linkedin', type: 'url', placeholder: 'https://linkedin.com/in/janesmith', required: false },
                  { label: 'Portfolio URL', name: 'portfolio', type: 'url', placeholder: 'https://janesmith.dev', required: false },
                ] as const).map(field => (
                  <div key={field.name}>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', color: colors.text }}>
                      {field.label}{field.required && <span style={{ color: colors.cyan, marginLeft: '4px' }}>*</span>}
                    </label>
                    <input type={field.type} name={field.name} placeholder={field.placeholder} required={field.required} value={formState[field.name]} onChange={handleFormChange} style={{ width: '100%', background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: '10px', padding: '12px 16px', color: colors.text, fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s', fontFamily: 'inherit' }} onFocus={(e) => e.currentTarget.style.borderColor = colors.blue} onBlur={(e) => e.currentTarget.style.borderColor = colors.border} />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', color: colors.text }}>
                    Resume / CV <span style={{ color: colors.cyan }}>*</span>
                  </label>
                  <label style={{ display: 'block', background: colors.surface, border: `2px dashed ${colors.border}`, borderRadius: '10px', padding: '28px 24px', textAlign: 'center', cursor: 'pointer', transition: 'border-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = colors.blue} onMouseLeave={(e) => e.currentTarget.style.borderColor = colors.border}>
                    <svg width="32" height="32" fill="none" stroke={colors.muted} strokeWidth="1.5" viewBox="0 0 24 24" style={{ margin: '0 auto 8px', display: 'block' }}><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <p style={{ color: colors.muted, fontSize: '0.9rem', margin: '0 0 4px' }}>Drop your CV here or click to upload</p>
                    <p style={{ color: colors.muted, fontSize: '0.8rem', margin: 0 }}>PDF, DOCX up to 5MB</p>
                    <input type="file" accept=".pdf,.docx,.doc" style={{ display: 'none' }} onChange={(e) => setFormState(prev => ({ ...prev, resume: e.target.files?.[0]?.name || '' }))} />
                  </label>
                  {formState.resume && <p style={{ color: colors.cyan, fontSize: '0.85rem', marginTop: '8px' }}>Selected: {formState.resume}</p>}
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', color: colors.text }}>Cover Letter</label>
                  <textarea name="coverLetter" placeholder="Tell us why you're excited about this role and what you'd bring to the team..." rows={5} value={formState.coverLetter} onChange={handleFormChange} style={{ width: '100%', background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: '10px', padding: '12px 16px', color: colors.text, fontSize: '0.95rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit', lineHeight: 1.6, transition: 'border-color 0.2s' }} onFocus={(e) => e.currentTarget.style.borderColor = colors.blue} onBlur={(e) => e.currentTarget.style.borderColor = colors.border} />
                </div>
                <button type="submit" style={{ background: `linear-gradient(135deg, ${colors.blue}, ${colors.cyan})`, border: 'none', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', boxShadow: '0 4px 20px rgba(37,99,235,0.4)', transition: 'transform 0.2s, box-shadow 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(37,99,235,0.55)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.4)'; }}>
                  Submit Application
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
