import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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

const teamMembers = [
  { initials: 'AR', name: 'Alex Rivera', role: 'CEO & Founder', desc: 'Visionary leader with 15+ years in tech', gradient: 'linear-gradient(135deg,#2563eb,#7c3aed)' },
  { initials: 'SC', name: 'Sarah Chen', role: 'CTO', desc: 'Full-stack architect, React & cloud expert', gradient: 'linear-gradient(135deg,#06b6d4,#2563eb)' },
  { initials: 'MW', name: 'Marcus Williams', role: 'Lead Designer', desc: 'Award-winning UX designer, ex-Google', gradient: 'linear-gradient(135deg,#7c3aed,#06b6d4)' },
  { initials: 'PP', name: 'Priya Patel', role: 'Head of Marketing', desc: 'Growth marketer, 10x revenue specialist', gradient: 'linear-gradient(135deg,#2563eb,#06b6d4)' },
  { initials: 'JT', name: 'James Thompson', role: 'Senior Dev', desc: 'Node.js & DevOps expert', gradient: 'linear-gradient(135deg,#06b6d4,#7c3aed)' },
  { initials: 'LK', name: 'Luna Kim', role: 'UI/UX Designer', desc: 'User psychology and interaction design', gradient: 'linear-gradient(135deg,#7c3aed,#2563eb)' },
  { initials: 'DO', name: 'David Okafor', role: 'Mobile Lead', desc: 'React Native & Flutter specialist', gradient: 'linear-gradient(135deg,#2563eb,#06b6d4)' },
  { initials: 'ER', name: 'Emma Rodriguez', role: 'AI Engineer', desc: 'ML/AI researcher, ex-DeepMind', gradient: 'linear-gradient(135deg,#06b6d4,#2563eb)' },
  { initials: 'CL', name: 'Chris Lee', role: 'DevOps Lead', desc: 'Kubernetes & cloud infrastructure', gradient: 'linear-gradient(135deg,#7c3aed,#06b6d4)' },
  { initials: 'AH', name: 'Aisha Hassan', role: 'Project Manager', desc: 'Agile certified, delivery specialist', gradient: 'linear-gradient(135deg,#2563eb,#7c3aed)' },
];

const stats = [
  { value: '2016', label: 'Founded' },
  { value: '50+', label: 'Team Members' },
  { value: '150+', label: 'Projects' },
  { value: '12', label: 'Countries Served' },
];

const awards = [
  { icon: '🏆', name: 'Best Tech Startup', year: '2023', issuer: 'TechCrunch Awards' },
  { icon: '🎨', name: 'Top Design Agency', year: '2022', issuer: 'Awwwards' },
  { icon: '☁️', name: 'AWS Advanced Partner', year: '2023', issuer: 'Amazon Web Services' },
  { icon: '🌐', name: 'Google Cloud Partner', year: '2022', issuer: 'Google Cloud' },
];

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div style={{ background: colors.bg, color: colors.text, fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '120px 24px 80px' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 70%)', zIndex: 0 }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span style={{ display: 'inline-block', background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.4)', color: colors.cyan, padding: '6px 18px', borderRadius: '999px', fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '24px' }}>
              About Us
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, margin: '0 0 20px', lineHeight: 1.1, background: 'linear-gradient(135deg, #e6edf3 0%, #06b6d4 50%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            About NexGen Digital
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} style={{ fontSize: '1.2rem', color: colors.muted, lineHeight: 1.7, maxWidth: '620px', margin: '0 auto' }}>
            We are a technology & innovation agency on a mission to empower businesses with cutting-edge digital solutions. Since 2016, we have helped over 150 companies across 12 countries achieve transformative growth.
          </motion.p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <FadeInSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <div>
              <span style={{ display: 'inline-block', color: colors.cyan, fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Our Story</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, margin: '0 0 24px', lineHeight: 1.2 }}>
                Built from passion,<br />
                <span style={{ background: 'linear-gradient(135deg,#2563eb,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>driven by purpose</span>
              </h2>
              <p style={{ color: colors.muted, lineHeight: 1.8, marginBottom: '20px', fontSize: '1rem' }}>
                NexGen Digital was founded in 2016 by Alex Rivera and Sarah Chen out of a spare bedroom in San Francisco. Armed with laptops, coffee, and an unwavering belief that great technology should be accessible to every business — not just Fortune 500 companies — they set out to change the industry.
              </p>
              <p style={{ color: colors.muted, lineHeight: 1.8, marginBottom: '20px', fontSize: '1rem' }}>
                Our mission from day one has been to democratize digital technology. We believe every ambitious company deserves access to world-class engineering, design, and strategy — regardless of their size or budget. We bridge the gap between enterprise-grade capability and startup-level agility.
              </p>
              <p style={{ color: colors.muted, lineHeight: 1.8, fontSize: '1rem' }}>
                What started as a 2-person team has grown into a 50+ strong global network of engineers, designers, marketers, and strategists spanning 12 countries. Every project we take on is fueled by the same energy that sparked our founding: genuine curiosity, relentless craftsmanship, and a deep commitment to our clients' success.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {stats.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: '16px', padding: '32px 24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.8rem', fontWeight: 800, background: 'linear-gradient(135deg,#2563eb,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>{stat.value}</div>
                  <div style={{ color: colors.muted, fontSize: '0.9rem', fontWeight: 500 }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section style={{ padding: '100px 24px', background: colors.surface }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span style={{ color: colors.cyan, fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Our Foundation</span>
              <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, margin: '12px 0 0' }}>Mission, Vision & Values</h2>
            </div>
          </FadeInSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { label: 'Our Mission', color: colors.blue, text: 'To empower businesses with cutting-edge digital solutions that drive measurable growth and lasting impact. We partner with ambitious companies to build technology that matters.', list: null },
              { label: 'Our Vision', color: colors.cyan, text: 'To be the world\'s most trusted technology partner for companies building the future. A world where every bold idea has the technical foundation it deserves.', list: null },
              { label: 'Our Values', color: colors.purple, text: 'The principles that guide every decision, every line of code, and every client relationship we build:', list: ['Innovation First', 'Quality Without Compromise', 'Radical Transparency', 'Agile Mindset'] },
            ].map((card, i) => (
              <motion.div key={card.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: '20px', padding: '40px 32px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${card.color}, transparent)` }} />
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px', color: card.color }}>{card.label}</h3>
                <p style={{ color: colors.muted, lineHeight: 1.8, marginBottom: card.list ? '20px' : '0', fontSize: '0.95rem' }}>{card.text}</p>
                {card.list && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {card.list.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: colors.text, fontSize: '0.95rem', marginBottom: '10px' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: card.color, flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span style={{ color: colors.cyan, fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Our Culture</span>
              <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, margin: '12px 0 0' }}>Life at NexGen</h2>
            </div>
          </FadeInSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80','https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80','https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80'].map((src, i) => (
                <motion.div key={src} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} style={{ borderRadius: '16px', overflow: 'hidden', border: `1px solid ${colors.border}` }}>
                  <img src={src} alt={`NexGen office ${i + 1}`} style={{ width: '100%', height: i === 0 ? '220px' : '160px', objectFit: 'cover', display: 'block', filter: 'brightness(0.85) saturate(1.1)' }} />
                </motion.div>
              ))}
            </div>
            <div style={{ paddingTop: '8px' }}>
              <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '24px' }}>
                A culture built on<br />
                <span style={{ background: 'linear-gradient(135deg,#2563eb,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>trust & growth</span>
              </motion.h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { icon: '🌍', title: 'Remote-first culture', desc: 'Work from anywhere in the world. We are fully distributed and proud of it.' },
                  { icon: '📚', title: 'Continuous learning', desc: 'Annual learning budget, conference tickets, and dedicated time for personal growth.' },
                  { icon: '🤝', title: 'Collaborative environment', desc: 'Flat hierarchy, open communication, and team decisions made together.' },
                  { icon: '⚖️', title: 'Work-life balance', desc: 'Flexible hours, no crunch culture, and unlimited PTO to recharge.' },
                  { icon: '🌈', title: 'Diversity & inclusion', desc: 'A team of 20+ nationalities where every voice is valued and heard.' },
                ].map((item, i) => (
                  <motion.div key={item.title} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontWeight: 700, marginBottom: '4px', fontSize: '1rem' }}>{item.title}</div>
                      <div style={{ color: colors.muted, fontSize: '0.9rem', lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION - WHAT DRIVES US */}
      <section style={{ padding: '100px 24px', background: colors.surface }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span style={{ color: colors.cyan, fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Core Values</span>
              <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, margin: '12px 0 0' }}>What Drives Us</h2>
            </div>
          </FadeInSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
            {[
              { icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: 'Innovation', desc: 'We embrace cutting-edge technologies and methodologies. Curiosity drives us, and we constantly explore new ways to solve problems better, faster, and smarter.', color: colors.blue },
              { icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: 'Quality', desc: 'Excellence is non-negotiable. Every line of code, every pixel, every interaction is crafted with meticulous attention and an uncompromising commitment to quality.', color: colors.cyan },
              { icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: 'Transparency', desc: 'We believe in open, honest communication with our clients and team. No jargon, no hidden agendas — just clear, straightforward collaboration.', color: colors.purple },
              { icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: 'Agility', desc: 'The digital landscape moves fast, and so do we. We adapt quickly to change, iterate rapidly, and deliver value early and often through agile practices.', color: colors.blue },
            ].map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: '20px', padding: '40px 32px' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '16px', background: `linear-gradient(135deg, ${value.color}22, ${value.color}0d)`, border: `1px solid ${value.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: value.color }}>
                  {value.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>{value.title}</h3>
                <p style={{ color: colors.muted, lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span style={{ color: colors.cyan, fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>The Team</span>
              <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, margin: '12px 0 16px' }}>Meet Our Team</h2>
              <p style={{ color: colors.muted, maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
                A diverse group of thinkers, builders, and problem-solvers united by a passion for creating exceptional digital experiences.
              </p>
            </div>
          </FadeInSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '24px' }}>
            {teamMembers.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ y: -8 }} style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: '16px', padding: '28px 20px', textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: member.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>
                  {member.initials}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 4px' }}>{member.name}</h3>
                <div style={{ color: colors.cyan, fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>{member.role}</div>
                <p style={{ color: colors.muted, fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '16px' }}>{member.desc}</p>
                <a href="#" style={{ color: colors.blue, textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = colors.cyan} onMouseLeave={(e) => e.currentTarget.style.color = colors.blue}>
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS & RECOGNITION */}
      <section style={{ padding: '100px 24px', background: colors.surface }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span style={{ color: colors.cyan, fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Recognition</span>
              <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, margin: '12px 0 0' }}>Awards & Partnerships</h2>
            </div>
          </FadeInSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {awards.map((award, i) => (
              <motion.div key={award.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: '16px', padding: '32px 28px', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{award.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>{award.name}</h3>
                <div style={{ color: colors.muted, fontSize: '0.9rem' }}>
                  <span style={{ color: colors.cyan, fontWeight: 600 }}>{award.year}</span> · {award.issuer}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: '120px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <FadeInSection>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ background: `linear-gradient(135deg, ${colors.blue}15, ${colors.purple}15)`, border: `1px solid ${colors.border}`, borderRadius: '24px', padding: '64px 40px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 50%, rgba(37,99,235,0.15), transparent 50%), radial-gradient(circle at 70% 50%, rgba(124,58,237,0.15), transparent 50%)' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, marginBottom: '16px' }}>Ready to join our team?</h2>
                <p style={{ color: colors.muted, fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '36px', maxWidth: '500px', margin: '0 auto 36px' }}>
                  We are always looking for talented individuals who share our passion for innovation and excellence.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="/careers" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', background: `linear-gradient(135deg, ${colors.blue}, ${colors.cyan})`, color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 700, fontSize: '1rem', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 4px 20px rgba(37,99,235,0.4)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 25px rgba(37,99,235,0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.4)'; }}>
                    View Open Positions
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="/contact" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', background: colors.card, border: `2px solid ${colors.border}`, color: colors.text, padding: '12px 32px', borderRadius: '12px', fontWeight: 700, fontSize: '1rem', transition: 'border-color 0.2s, background 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors.blue; e.currentTarget.style.background = `${colors.blue}10`; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.background = colors.card; }}>
                    Work With Us
                  </a>
                </div>
              </div>
            </motion.div>
          </FadeInSection>
        </div>
      </section>

    </div>
  );
}
