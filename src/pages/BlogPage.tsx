import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'AI & Tech', 'Web Development', 'Design', 'Career', 'Cloud'];

const categoryColors: Record<string, string> = {
  'AI & Tech': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Web Development': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Design': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  'Career': 'bg-green-500/20 text-green-300 border-green-500/30',
  'Cloud': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
};

const featuredPost = {
  title: 'The Future of Web Development: AI-Powered Coding in 2025',
  author: 'Sarah Chen',
  role: 'CTO',
  date: 'December 15, 2024',
  readingTime: '8 min read',
  category: 'AI & Tech',
  image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80',
  excerpt:
    'Artificial intelligence is fundamentally changing how we write code. From GitHub Copilot to custom LLMs, we explore how AI tools are becoming indispensable for modern developers...',
  tags: ['AI', 'Web Development', 'Future Tech'],
};

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Apps: Patterns and Best Practices',
    category: 'Web Development',
    author: 'James Thompson',
    date: 'November 28, 2024',
    readingTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80',
    excerpt:
      'React has matured significantly over the years. Here\'s how we structure large-scale applications at NexGen using advanced patterns...',
    tags: ['React', 'Architecture', 'TypeScript'],
  },
  {
    id: 2,
    title: 'Design Systems: The Foundation of Consistent UX',
    category: 'Design',
    author: 'Marcus Williams',
    date: 'November 15, 2024',
    readingTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80',
    excerpt:
      'A well-built design system can save hundreds of hours and ensure brand consistency across all touchpoints...',
    tags: ['Design Systems', 'Figma', 'UX'],
  },
  {
    id: 3,
    title: 'AWS Cost Optimization: Saving $50k/year on Cloud Bills',
    category: 'Cloud',
    author: 'Chris Lee',
    date: 'October 30, 2024',
    readingTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    excerpt:
      'Cloud costs can spiral out of control. Here are the practical strategies we use to keep our clients\' AWS bills in check...',
    tags: ['AWS', 'Cloud', 'DevOps'],
  },
  {
    id: 4,
    title: 'From Junior to Senior: A Developer\'s Growth Roadmap',
    category: 'Career',
    author: 'Alex Rivera',
    date: 'October 18, 2024',
    readingTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
    excerpt:
      'What separates a junior developer from a senior one? It\'s not just technical skills — it\'s mindset, communication, and leadership...',
    tags: ['Career', 'Growth', 'Engineering'],
  },
  {
    id: 5,
    title: 'LLM Integration: Adding AI Features to Your Web App',
    category: 'AI & Tech',
    author: 'Emma Rodriguez',
    date: 'October 5, 2024',
    readingTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
    excerpt:
      'OpenAI, Anthropic, and open-source models have made it easier than ever to add AI features. Here\'s a practical guide to integration...',
    tags: ['AI', 'LLM', 'Python'],
  },
  {
    id: 6,
    title: 'Mobile-First Design: Why It Matters More Than Ever',
    category: 'Design',
    author: 'Luna Kim',
    date: 'September 22, 2024',
    readingTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
    excerpt:
      'With over 60% of web traffic coming from mobile devices, a mobile-first approach isn\'t optional — it\'s essential...',
    tags: ['Mobile', 'Design', 'UX'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filtered =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
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
          className="relative z-10 max-w-4xl mx-auto text-center"
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
            NexGen Blog
          </motion.span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #06b6d4)' }}
            >
              Blog
            </span>
          </h1>
          <p className="text-xl" style={{ color: '#8b949e' }}>
            Insights, tutorials, and tech perspectives from our team
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium border transition-all"
              style={
                activeCategory === cat
                  ? { background: 'linear-gradient(135deg,#2563eb,#06b6d4)', borderColor: 'transparent', color: '#fff' }
                  : { backgroundColor: '#0d1117', borderColor: '#21262d', color: '#8b949e' }
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filtered.map((post) => (
            <motion.article
              key={post.id}
              className="rounded-xl border overflow-hidden group cursor-pointer"
              style={{ backgroundColor: '#0d1117', borderColor: '#21262d' }}
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${
                    categoryColors[post.category]
                  }`}
                >
                  {post.category}
                </span>
                <h3
                  className="text-xl font-bold mb-3 leading-snug transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent"
                  style={{
                    color: '#e6edf3',
                    backgroundImage: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                  }}
                >
                  {post.title}
                </h3>
                <p className="text-sm mb-4 leading-relaxed line-clamp-3" style={{ color: '#8b949e' }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs mb-4" style={{ color: '#8b949e' }}>
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs border"
                      style={{ backgroundColor: 'rgba(37,99,235,0.08)', borderColor: 'rgba(37,99,235,0.2)', color: '#93c5fd' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-sm font-medium inline-flex items-center gap-1" style={{ color: '#2563eb' }}>
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-4xl mx-auto px-4 pb-28">
        <motion.div
          className="rounded-2xl border p-10 md:p-16 text-center"
          style={{ backgroundColor: '#0d1117', borderColor: '#21262d' }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#e6edf3' }}>
            Stay in the Loop
          </h2>
          <p className="text-lg mb-8" style={{ color: '#8b949e' }}>
            Get our latest insights delivered to your inbox weekly
          </p>
          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium"
              style={{ backgroundColor: 'rgba(34,197,94,0.15)', color: '#4ade80' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Successfully subscribed!
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all"
                  style={{
                    backgroundColor: '#161b22',
                    borderColor: '#21262d',
                    color: '#e6edf3',
                  }}
                  required
                />
                <motion.button
                  type="submit"
                  className="px-8 py-3 rounded-xl font-semibold text-white whitespace-nowrap"
                  style={{ background: 'linear-gradient(135deg,#2563eb,#06b6d4)' }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Subscribe
                </motion.button>
              </div>
              <p className="text-xs mt-4" style={{ color: '#8b949e' }}>
                No spam, unsubscribe anytime
              </p>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  );
}




      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <motion.div
          className="rounded-2xl overflow-hidden border grid md:grid-cols-2"
          style={{ backgroundColor: '#0d1117', borderColor: '#21262d' }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
            <span
              className="inline-block self-start px-3 py-1 rounded-full text-xs font-semibold border mb-5"
              style={{ backgroundColor: 'rgba(124,58,237,0.2)', borderColor: 'rgba(124,58,237,0.4)', color: '#a78bfa' }}
            >
              {featuredPost.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug" style={{ color: '#e6edf3' }}>
              {featuredPost.title}
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: '#8b949e' }}>
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ background: 'linear-gradient(135deg,#2563eb,#06b6d4)', color: '#fff' }}
              >
                {featuredPost.author[0]}
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#e6edf3' }}>
                  {featuredPost.author}
                </p>
                <p className="text-xs" style={{ color: '#8b949e' }}>
                  {featuredPost.role} · {featuredPost.date} · {featuredPost.readingTime}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {featuredPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs border"
                  style={{ backgroundColor: 'rgba(37,99,235,0.1)', borderColor: 'rgba(37,99,235,0.25)', color: '#93c5fd' }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white self-start"
              style={{ background: 'linear-gradient(135deg,#2563eb,#06b6d4)' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Read Article →
            </motion.a>
          </div>
          <div className="relative overflow-hidden order-1 md:order-2 h-64 md:h-auto">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/60 to-transparent md:from-transparent" />
          </div>
        </motion.div>
      </section>
