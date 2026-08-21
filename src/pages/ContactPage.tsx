import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const faqs = [
  {
    id: 1,
    q: 'How long does a typical project take?',
    a: 'Project timelines vary based on scope and complexity. A simple website typically takes 4–6 weeks, while complex web applications or mobile apps can take 3–6 months. We\'ll provide a detailed timeline during our discovery phase.',
  },
  {
    id: 2,
    q: 'What is your pricing model?',
    a: 'We offer both project-based and retainer pricing. Project costs depend on scope, complexity, and timeline. We provide detailed proposals with transparent pricing after our initial discovery call. Most projects range from $5,000 to $150,000+.',
  },
  {
    id: 3,
    q: 'Do you work with startups or only enterprises?',
    a: 'We work with businesses of all sizes — from early-stage startups with limited budgets to Fortune 500 enterprises. We tailor our approach and pricing to match your needs and stage of growth.',
  },
  {
    id: 4,
    q: 'What does your development process look like?',
    a: 'Our process follows 4 phases: Discovery (understanding your goals), Design (wireframes and prototypes), Development (agile sprints with regular check-ins), and Deploy (launch + ongoing support). You\'ll have access to project management tools throughout.',
  },
  {
    id: 5,
    q: 'Do you provide post-launch support?',
    a: 'Yes, we offer various support packages ranging from basic maintenance to dedicated support teams. We recommend our 3-month post-launch package to ensure smooth operation and quick resolution of any issues.',
  },
];

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  source: string;
}

const initialForm: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  budget: '',
  timeline: '',
  description: '',
  source: '',
};

const inputClass =
  'w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all text-sm';
const inputStyle = {
  backgroundColor: '#161b22',
  borderColor: '#21262d',
  color: '#e6edf3',
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  }

  function validate(): boolean {
    const newErrors: Partial<FormState> = {};
    if (!form.firstName.trim()) newErrors.firstName = 'Required';
    if (!form.lastName.trim()) newErrors.lastName = 'Required';
    if (!form.email.trim()) newErrors.email = 'Required';
    if (!form.projectType) newErrors.projectType = 'Required';
    if (!form.description.trim()) newErrors.description = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#050811', color: '#e6edf3' }}>
      {/* Hero */}
      <section className="relative py-28 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(37,99,235,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.15) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050811]" />
        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border mb-6"
            style={{ backgroundColor: 'rgba(37,99,235,0.15)', borderColor: 'rgba(37,99,235,0.4)', color: '#2563eb' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Contact Us
          </motion.span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Get In{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #06b6d4)' }}
            >
              Touch
            </span>
          </h1>
          <p className="text-xl" style={{ color: '#8b949e' }}>
            Ready to start a conversation? We'd love to hear about your project and explore how we can help.
          </p>
        </motion.div>
      </section>

      {/* Main Content: Form + Info */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* LEFT: Contact Form (60%) */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl border p-8 md:p-10" style={{ backgroundColor: '#0d1117', borderColor: '#21262d' }}>
              <h2 className="text-2xl font-bold mb-8" style={{ color: '#e6edf3' }}>
                Send Us a Message
              </h2>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: 'rgba(34,197,94,0.15)' }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="#4ade80" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#e6edf3' }}>Message Sent!</h3>
                  <p style={{ color: '#8b949e' }}>
                    Thank you for reaching out. We typically respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: '#8b949e' }}>First Name *</label>
                      <input
                        className={inputClass}
                        style={{ ...inputStyle, borderColor: errors.firstName ? '#f87171' : '#21262d' }}
                        value={form.firstName}
                        onChange={(e) => update('firstName', e.target.value)}
                        placeholder="John"
                      />
                      {errors.firstName && <p className="text-xs mt-1" style={{ color: '#f87171' }}>{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: '#8b949e' }}>Last Name *</label>
                      <input
                        className={inputClass}
                        style={{ ...inputStyle, borderColor: errors.lastName ? '#f87171' : '#21262d' }}
                        value={form.lastName}
                        onChange={(e) => update('lastName', e.target.value)}
                        placeholder="Doe"
                      />
                      {errors.lastName && <p className="text-xs mt-1" style={{ color: '#f87171' }}>{errors.lastName}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: '#8b949e' }}>Email Address *</label>
                    <input
                      type="email"
                      className={inputClass}
                      style={{ ...inputStyle, borderColor: errors.email ? '#f87171' : '#21262d' }}
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="john@company.com"
                    />
                    {errors.email && <p className="text-xs mt-1" style={{ color: '#f87171' }}>{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: '#8b949e' }}>Phone Number <span style={{ color: '#8b949e' }}>(optional)</span></label>
                    <input
                      type="tel"
                      className={inputClass}
                      style={inputStyle}
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: '#8b949e' }}>Company Name <span style={{ color: '#8b949e' }}>(optional)</span></label>
                    <input
                      className={inputClass}
                      style={inputStyle}
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: '#8b949e' }}>Project Type *</label>
                    <select
                      className={inputClass}
                      style={{ ...inputStyle, borderColor: errors.projectType ? '#f87171' : '#21262d' }}
                      value={form.projectType}
                      onChange={(e) => update('projectType', e.target.value)}
                    >
                      <option value="">Select project type</option>
                      <option>Web Development</option>
                      <option>Mobile App</option>
                      <option>UI/UX Design</option>
                      <option>Digital Marketing</option>
                      <option>Cloud &amp; DevOps</option>
                      <option>AI &amp; Automation</option>
                      <option>Other</option>
                    </select>
                    {errors.projectType && <p className="text-xs mt-1" style={{ color: '#f87171' }}>{errors.projectType}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: '#8b949e' }}>Project Budget</label>
                      <select
                        className={inputClass}
                        style={inputStyle}
                        value={form.budget}
                        onChange={(e) => update('budget', e.target.value)}
                      >
                        <option value="">Select budget</option>
                        <option>Under $5k</option>
                        <option>$5k–$15k</option>
                        <option>$15k–$50k</option>
                        <option>$50k+</option>
                        <option>Not sure</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: '#8b949e' }}>Project Timeline</label>
                      <select
                        className={inputClass}
                        style={inputStyle}
                        value={form.timeline}
                        onChange={(e) => update('timeline', e.target.value)}
                      >
                        <option value="">Select timeline</option>
                        <option>ASAP</option>
                        <option>1–3 months</option>
                        <option>3–6 months</option>
                        <option>6+ months</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: '#8b949e' }}>Project Description *</label>
                    <textarea
                      rows={4}
                      className={inputClass}
                      style={{ ...inputStyle, borderColor: errors.description ? '#f87171' : '#21262d', resize: 'vertical' }}
                      value={form.description}
                      onChange={(e) => update('description', e.target.value)}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                    {errors.description && <p className="text-xs mt-1" style={{ color: '#f87171' }}>{errors.description}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: '#8b949e' }}>How did you hear about us?</label>
                    <select
                      className={inputClass}
                      style={inputStyle}
                      value={form.source}
                      onChange={(e) => update('source', e.target.value)}
                    >
                      <option value="">Select source</option>
                      <option>Google</option>
                      <option>LinkedIn</option>
                      <option>Referral</option>
                      <option>Social Media</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full py-4 rounded-xl font-semibold text-white text-base"
                    style={{ background: 'linear-gradient(135deg,#2563eb,#06b6d4)' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message →
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* RIGHT: Contact Information (40%) */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="rounded-2xl border p-8" style={{ backgroundColor: '#0d1117', borderColor: '#21262d' }}>
              <h2 className="text-xl font-bold mb-6" style={{ color: '#e6edf3' }}>Contact Information</h2>
              <div className="space-y-6">
                {[
                  { city: 'San Francisco HQ', address: '123 Tech Street, SF, CA 94105', phone: '+1 (555) 123-4567' },
                  { city: 'New York Office', address: '456 Innovation Ave, NY, NY 10001', phone: '+1 (555) 987-6543' },
                  { city: 'London Office', address: '789 Digital Lane, London, EC1A 1BB', phone: '+44 20 7946 0958' },
                ].map((loc) => (
                  <div key={loc.city} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: 'rgba(37,99,235,0.15)' }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: '#e6edf3' }}>{loc.city}</p>
                      <p className="text-sm" style={{ color: '#8b949e' }}>{loc.address}</p>
                      <p className="text-sm" style={{ color: '#8b949e' }}>{loc.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border p-8" style={{ backgroundColor: '#0d1117', borderColor: '#21262d' }}>
              <h3 className="text-base font-semibold mb-4" style={{ color: '#e6edf3' }}>Email Us</h3>
              <div className="space-y-3">
                {['hello@nexgendigital.com', 'support@nexgendigital.com'].map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 text-sm transition-colors hover:text-blue-400"
                    style={{ color: '#8b949e' }}
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {email}
                  </a>
                ))}
              </div>
              <div
                className="mt-5 px-4 py-3 rounded-xl text-sm"
                style={{ backgroundColor: 'rgba(6,182,212,0.1)', color: '#67e8f9' }}
              >
                We typically respond within 24 hours
              </div>
            </div>

            <div className="rounded-2xl border p-8" style={{ backgroundColor: '#0d1117', borderColor: '#21262d' }}>
              <h3 className="text-base font-semibold mb-4" style={{ color: '#e6edf3' }}>Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { label: 'GitHub', href: '#', d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
                  { label: 'LinkedIn', href: '#', d: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
                  { label: 'Twitter', href: '#', d: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                  { label: 'Instagram', href: '#', d: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M7.5 2h9a5.5 5.5 0 015.5 5.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z' },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center border transition-colors"
                    style={{ backgroundColor: '#161b22', borderColor: '#21262d', color: '#8b949e' }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(37,99,235,0.2)', color: '#2563eb' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={s.d} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#e6edf3' }}>
            Frequently Asked{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #06b6d4)' }}
            >
              Questions
            </span>
          </h2>
          <div className="rounded-2xl border overflow-hidden" style={{ borderColor: '#21262d' }}>
            {faqs.map((faq, idx) => (
              <div
                key={faq.id}
                style={{ borderBottomColor: '#21262d', borderBottomWidth: idx < faqs.length - 1 ? 1 : 0 }}
              >
                <motion.button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between px-8 py-6 text-left"
                  style={{ backgroundColor: openFaq === faq.id ? '#0d1117' : '#161b22' }}
                  whileHover={{ backgroundColor: '#0d1117' }}
                >
                  <span className="font-semibold text-base pr-8" style={{ color: '#e6edf3' }}>{faq.q}</span>
                  <motion.svg
                    className="w-5 h-5 shrink-0"
                    fill="none"
                    stroke="#8b949e"
                    viewBox="0 0 24 24"
                    animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </motion.button>
                <AnimatePresence initial={false}>
                  {openFaq === faq.id && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-8 pb-6 pt-2" style={{ backgroundColor: '#0d1117' }}>
                        <p className="leading-relaxed" style={{ color: '#8b949e' }}>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Response Time Section */}
      <section className="max-w-7xl mx-auto px-4 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#e6edf3' }}>
            We Respond{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #06b6d4)' }}
            >
              Fast
            </span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
              label: 'Email',
              time: '< 4 hours',
              desc: 'Detailed responses to all email inquiries',
              color: '#2563eb',
              bg: 'rgba(37,99,235,0.15)',
            },
            {
              icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
              label: 'Phone',
              time: '< 1 hour',
              desc: 'Immediate assistance for urgent matters',
              color: '#06b6d4',
              bg: 'rgba(6,182,212,0.15)',
            },
            {
              icon: 'M15 10l4.553-2.069A1 1 0 0121 8.82V15a1 1 0 01-1.553.832L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z',
              label: 'Video Call',
              time: 'Same day scheduling',
              desc: 'Book a discovery call at your convenience',
              color: '#7c3aed',
              bg: 'rgba(124,58,237,0.15)',
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              className="rounded-2xl border p-8 text-center"
              style={{ backgroundColor: '#0d1117', borderColor: '#21262d' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: item.bg }}
              >
                <svg className="w-8 h-8" fill="none" stroke={item.color} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#e6edf3' }}>{item.label}</h3>
              <p
                className="text-2xl font-bold mb-3 bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(135deg, ${item.color}, #06b6d4)` }}
              >
                {item.time}
              </p>
              <p className="text-sm" style={{ color: '#8b949e' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}