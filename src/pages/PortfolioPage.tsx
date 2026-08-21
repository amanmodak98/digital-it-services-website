import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'All' | 'Web' | 'Mobile' | 'Design' | 'Marketing';

interface Project {
  id: number;
  name: string;
  client: string;
  category: Exclude<Category, 'All'>;
  description: string;
  techs: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    client: 'TechRetail Corp',
    category: 'Web',
    description: 'Built a scalable e-commerce platform handling 100k+ daily users',
    techs: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
  {
    id: 2,
    name: 'FinTech Mobile App',
    client: 'PayFlow Inc',
    category: 'Mobile',
    description: 'Cross-platform financial app with real-time transactions',
    techs: ['React Native', 'Python', 'AWS'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80',
  },
  {
    id: 3,
    name: 'Brand Identity System',
    client: 'Nova Creative',
    category: 'Design',
    description: 'Complete brand overhaul for a creative agency',
    techs: ['Figma', 'Adobe CC'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
  },
  {
    id: 4,
    name: 'SEO Growth Campaign',
    client: 'GreenLeaf Organics',
    category: 'Marketing',
    description: '300% organic traffic increase in 6 months',
    techs: ['SEMrush', 'HubSpot'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    id: 5,
    name: 'SaaS Dashboard',
    client: 'DataViz Pro',
    category: 'Web',
    description: 'Real-time analytics dashboard for enterprise',
    techs: ['Next.js', 'TypeScript', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    id: 6,
    name: 'Healthcare App',
    client: 'MediConnect',
    category: 'Mobile',
    description: 'Telemedicine app with video consultations',
    techs: ['Flutter', 'Firebase', 'HIPAA'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80',
  },
  {
    id: 7,
    name: 'Design System',
    client: 'StartupX',
    category: 'Design',
    description: 'Scalable component library with 200+ components',
    techs: ['Figma', 'React', 'Storybook'],
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80',
  },
  {
    id: 8,
    name: 'Social Media Growth',
    client: 'FitLife Brand',
    category: 'Marketing',
    description: '2x follower growth and 150% engagement increase',
    techs: ['Meta Ads', 'Content'],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
  },
];

const categoryColors: Record<Exclude<Category, 'All'>, string> = {
  Web: 'text-[#2563eb] bg-[#2563eb]/10 border-[#2563eb]/20',
  Mobile: 'text-[#7c3aed] bg-[#7c3aed]/10 border-[#7c3aed]/20',
  Design: 'text-[#06b6d4] bg-[#06b6d4]/10 border-[#06b6d4]/20',
  Marketing: 'text-green-400 bg-green-400/10 border-green-400/20',
};

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const filters: Category[] = ['All', 'Web', 'Mobile', 'Design', 'Marketing'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#050811] text-[#e6edf3]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#21262d_1px,transparent_1px),linear-gradient(to_bottom,#21262d_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#7c3aed]/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#7c3aed] via-[#06b6d4] to-[#2563eb] bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-[#8b949e] max-w-3xl mx-auto">
              Showcasing transformative digital experiences we've built for clients around the world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 border ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white border-transparent shadow-lg shadow-[#2563eb]/20'
                    : 'bg-[#161b22] border-[#21262d] text-[#8b949e] hover:text-[#e6edf3] hover:border-[#2563eb]/40'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group relative bg-[#0d1117] rounded-xl border border-[#21262d] overflow-hidden hover:border-[#2563eb]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#2563eb]/10"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-60"></div>
                    {/* Hover overlay with View Case Study button */}
                    <div className="absolute inset-0 bg-[#050811]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white text-sm font-semibold rounded-lg">
                        View Case Study →
                      </span>
                    </div>
                  </div>
                  {/* Card Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full border ${categoryColors[project.category]}`}>
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#e6edf3] mb-1">{project.name}</h3>
                    <p className="text-sm text-[#8b949e] mb-3">{project.client}</p>
                    <p className="text-sm text-[#8b949e] line-clamp-2 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techs.map(tech => (
                        <span key={tech} className="text-xs px-2 py-0.5 bg-[#161b22] border border-[#21262d] rounded-full text-[#8b949e]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-[#8b949e] text-lg max-w-2xl mx-auto">Deep dives into some of our most impactful projects</p>
          </motion.div>

          {/* Case Study 1 - E-Commerce Platform */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0d1117] rounded-2xl border border-[#21262d] overflow-hidden mb-12"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-medium px-3 py-1 rounded-full border text-[#2563eb] bg-[#2563eb]/10 border-[#2563eb]/20">Web</span>
                  <span className="text-sm text-[#8b949e]">TechRetail Corp</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">E-Commerce Platform for TechRetail Corp</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-2">The Problem</h4>
                    <p className="text-[#e6edf3]">The legacy e-commerce system couldn't scale to meet growing traffic demands, resulting in slow load times and a poor mobile experience. During peak sales events the platform would crash, causing significant revenue loss.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-2">Our Solution</h4>
                    <p className="text-[#e6edf3]">We rebuilt the platform using a React frontend with Node.js microservices architecture. Redis caching reduced database load by 80%, and a CDN strategy ensured fast delivery globally. The new system was designed from the ground up for horizontal scaling.</p>
                  </div>
                </div>
              </div>
              <div className="p-10 bg-[#161b22] flex flex-col justify-center">
                <h4 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-8">Results</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold text-[#2563eb] mb-1">300%</div>
                    <div className="text-sm text-[#8b949e]">Faster load times</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#06b6d4] mb-1">45%</div>
                    <div className="text-sm text-[#8b949e]">Conversion increase</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#7c3aed] mb-1">99.9%</div>
                    <div className="text-sm text-[#8b949e]">Uptime achieved</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-green-400 mb-1">$2M</div>
                    <div className="text-sm text-[#8b949e]">Additional revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Case Study 2 - FinTech App */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0d1117] rounded-2xl border border-[#21262d] overflow-hidden mb-12"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-10 bg-[#161b22] flex flex-col justify-center order-2 md:order-1">
                <h4 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-8">Results</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold text-[#7c3aed] mb-1">50k</div>
                    <div className="text-sm text-[#8b949e]">Downloads in 3 months</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#2563eb] mb-1">4.8</div>
                    <div className="text-sm text-[#8b949e]">App Store rating</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#06b6d4] mb-1">$10M</div>
                    <div className="text-sm text-[#8b949e]">Processed daily</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-green-400 mb-1">Zero</div>
                    <div className="text-sm text-[#8b949e]">Security incidents</div>
                  </div>
                </div>
              </div>
              <div className="p-10 order-1 md:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-medium px-3 py-1 rounded-full border text-[#7c3aed] bg-[#7c3aed]/10 border-[#7c3aed]/20">Mobile</span>
                  <span className="text-sm text-[#8b949e]">PayFlow Inc</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">FinTech App for PayFlow Inc</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-2">The Problem</h4>
                    <p className="text-[#e6edf3]">PayFlow needed a cross-platform mobile app with real-time transaction processing and bank-grade security. The app had to work seamlessly on both iOS and Android while maintaining strict compliance with financial regulations.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-2">Our Solution</h4>
                    <p className="text-[#e6edf3]">We built a React Native app with WebSocket connections for real-time updates, implementing end-to-end encryption and biometric authentication. The backend was architected for high availability with automated failover and comprehensive audit logging.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Case Study 3 - SaaS Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0d1117] rounded-2xl border border-[#21262d] overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-medium px-3 py-1 rounded-full border text-[#2563eb] bg-[#2563eb]/10 border-[#2563eb]/20">Web</span>
                  <span className="text-sm text-[#8b949e]">DataViz Pro</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">SaaS Dashboard for DataViz Pro</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-2">The Problem</h4>
                    <p className="text-[#e6edf3]">Enterprise customers needed real-time analytics dashboards with complex data visualizations. The existing solution was slow, couldn't handle large datasets, and lacked customization enterprise clients demanded.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-2">Our Solution</h4>
                    <p className="text-[#e6edf3]">We built a Next.js dashboard with WebSocket updates for real-time data, a custom chart library optimized for performance, and a flexible theming system. Server-side rendering ensured fast initial loads even with massive datasets.</p>
                  </div>
                </div>
              </div>
              <div className="p-10 bg-[#161b22] flex flex-col justify-center">
                <h4 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-8">Results</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold text-[#2563eb] mb-1">200</div>
                    <div className="text-sm text-[#8b949e]">Enterprise customers</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#06b6d4] mb-1">60%</div>
                    <div className="text-sm text-[#8b949e]">Faster reporting</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#7c3aed] mb-1">5x</div>
                    <div className="text-sm text-[#8b949e]">Data capacity increase</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-green-400 mb-1">95%</div>
                    <div className="text-sm text-[#8b949e]">Customer satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
