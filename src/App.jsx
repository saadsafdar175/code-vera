import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, Menu, X, Code2, Smartphone,
  Palette, Boxes, Zap, ShieldCheck, Globe2, Workflow,
  Check, Mail, MessageCircle, ChevronDown, Sparkles,
  Monitor, Database, Send, Layers3
} from 'lucide-react'

const email = 'http://gmail.com/npm saadstyle23@gmail.com'
const whatsapp = 'https://wa.me/923460976586'

const services = [
  { icon: Code2, title: 'Website Development', text: 'Modern, responsive and premium websites for businesses, brands and organizations.' },
  { icon: Database, title: 'Management Websites & Software', text: 'Custom management systems for schools, madrasas, hospitals, offices and businesses.' },
  { icon: Zap, title: 'Product Ads & Commercial Videos', text: 'Creative promotional advertisements and product videos for every type of business and product.' },
  { icon: Palette, title: 'Graphic Designing & Branding', text: 'Professional logos, banners, posters, social media designs, packaging and complete brand identity.' },
  { icon: Smartphone, title: 'Mobile & Web Applications', text: 'Useful, responsive applications designed around your customers and business needs.' },
  { icon: Boxes, title: '3D Experiences', text: 'Interactive 3D visuals and immersive digital experiences for modern brands.' },
  { icon: Sparkles, title: 'UI/UX & Creative Design', text: 'Beautiful interfaces and user-friendly digital experiences that make your brand stand out.' },
  { icon: Workflow, title: 'Business Automation', text: 'Smart digital workflows, dashboards and connected solutions to improve business operations.' },
]

const projects = [
  { name: 'Business Invoice Maker', type: 'Web Application', desc: 'A simple business invoicing platform for creating professional PKR invoices, managing items and preparing printable bills.', tags: ['HTML', 'CSS', 'JavaScript'], number: '01' },
  { name: 'BloodConnect', type: 'Social Impact Platform', desc: 'A blood donation concept connecting donors with people who need blood through a clean and accessible interface.', tags: ['React', 'UI Design', 'Responsive'], number: '02' },
  { name: 'Madrasa Management ERP', type: 'Management Software', desc: 'A comprehensive institute management concept covering students, teachers, attendance, fees and administration.', tags: ['Desktop App', 'Database', 'ERP'], number: '03' },
]

const steps = [
  ['01', 'Discover', 'We understand your goals, audience and the real problem your project needs to solve.'],
  ['02', 'Design', 'We shape the experience with thoughtful layouts, visual direction and clear user journeys.'],
  ['03', 'Develop', 'We build, test and refine your solution using modern technologies and clean code.'],
  ['04', 'Launch', 'We deliver your project, help you get started and support the next stage of growth.'],
]

const faqs = [
  ['What services does Codevera provide?', 'We provide website development, management software, product advertisements, commercial videos, graphic design, branding, mobile apps, UI/UX and 3D experiences.'],
  ['How do I start a project?', 'Send us a message through WhatsApp or email. Tell us about your idea and we will discuss the requirements and next steps.'],
  ['Can you build custom software for my business?', 'Yes. We can plan and develop software around your specific workflow, features and business requirements.'],
  ['How much does a website cost?', 'Pricing depends on the scope, features and complexity. Our packages provide a starting point, and custom quotations are available.'],
  ['Will my website work on mobile devices?', 'Yes. We design responsive experiences for desktops, tablets and mobile phones.'],
]

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('codevera-theme') || 'system')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('codevera-theme', theme)
  }, [theme])
  const [activeSection, setActiveSection] = useState('home')
  const [activeFaq, setActiveFaq] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', service: 'Website Development', message: '' })
  const [sending, setSending] = useState(false)
  const [sendStatus, setSendStatus] = useState('')


  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { rootMargin: '-25% 0px -60% 0px' })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  const closeMenu = () => setMenuOpen(false)

const submitForm = async (event) => {
    event.preventDefault()
    if (sending) return

    setSending(true)
    setSendStatus('')

    try {
      await emailjs.send(
        'service_0kdv6lg',
        'template_sloqnnm',
        {
          from_name: form.name,
          from_email: form.email,
          service: form.service,
          message: form.message,
        },
        'nPrUxNa91OA6Oz5LM'
      )

      setSendStatus('success')
      setForm({
        name: '',
        email: '',
        service: 'Website Development',
        message: '',
      })
    } catch (error) {
      console.error('Email sending failed:', error)
      setSendStatus('error')
    } finally {
      setSending(false)
    }
  }

  const navLinks = [
    { label: 'Home', href: '#home', number: '01' },
    { label: 'Services', href: '#services', number: '02' },
    { label: 'Work', href: '#work', number: '03' },
    { label: 'About', href: '#about', number: '04' },
    { label: 'Process', href: '#process', number: '05' },
    { label: 'Contact', href: '#contact', number: '06' },
  ]

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-symbol"><span /></span>
          <span>codevera<span className="brand-dot">.</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav-links">
          {navLinks.map(({ label, href }) => (
            <a
              href={href}
              key={label}
              onClick={() => { setActiveSection(href.slice(1)); closeMenu() }}
              className={activeSection === href.slice(1) ? "active" : ""}
              aria-current={activeSection === href.slice(1) ? "page" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className={`menu-toggle ${menuOpen ? 'menu-toggle-active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Navigation Drawer / Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                className="mobile-nav-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeMenu}
              />
              <motion.nav
                className="mobile-nav-card"
                initial={{ opacity: 0, y: -14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                aria-label="Mobile navigation"
              >
                <div className="mobile-nav-header">
                  <div className="mobile-nav-badge">
                    <span className="status-dot" />
                    <span>NAVIGATION MENU</span>
                  </div>
                  <span className="mobile-nav-version">CODEVERA</span>
                </div>

                <div className="mobile-nav-list">
                  {navLinks.map(({ label, href, number }) => {
                    const isActive = activeSection === href.slice(1)
                    return (
                      <a
                        href={href}
                        key={label}
                        onClick={() => { setActiveSection(href.slice(1)); closeMenu() }}
                        className={`mobile-nav-item ${isActive ? "active" : ""}`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <div className="mobile-nav-item-left">
                          <span className="mobile-nav-number">{number}</span>
                          <span className="mobile-nav-label">{label}</span>
                        </div>
                        <div className="mobile-nav-item-right">
                          {isActive && <span className="mobile-nav-active-pill">Active</span>}
                          <ArrowUpRight size={16} className="mobile-nav-arrow" />
                        </div>
                      </a>
                    )
                  })}
                </div>

                <div className="mobile-nav-divider" />

                <div className="mobile-nav-actions">
                  <a
                    className="button button-primary mobile-nav-btn-primary"
                    href="#contact"
                    onClick={closeMenu}
                  >
                    Start a Project <ArrowUpRight size={16} />
                  </a>
                  <a
                    className="mobile-nav-btn-whatsapp"
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                  >
                    <MessageCircle size={17} />
                    <span>WhatsApp Quick Inquiry</span>
                  </a>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-content">
            <motion.div className="eyebrow" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
              <span className="status-dot" /> DIGITAL INNOVATION STUDIO
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              We build the <span className="gradient-text">future</span><br />
              of digital experiences<span className="gradient-text">.</span>
            </motion.h1>
            <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              From powerful websites to intelligent software, we transform ambitious ideas into digital products that move businesses forward.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <a className="button button-primary" href="#contact">Start a Project <ArrowUpRight size={18} /></a>
              <a className="button button-ghost" href="#work">Explore Our Work <ArrowRight size={18} /></a>
            </motion.div>
            <div className="hero-proof">
              <span><ShieldCheck size={16} /> Quality-focused development</span>
              <span><Globe2 size={16} /> Built for the modern web</span>
            </div>
          </div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.75 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="orbit orbit-c" />
            <div className="core-glow" />
            <div className="hero-core"><span>CV</span></div>
            <div className="float-card float-card-top"><Code2 size={17} /> <span>Creative Code</span></div>
            <div className="float-card float-card-bottom"><Sparkles size={17} /> <span>Beyond Ordinary</span></div>
            <div className="visual-caption">IDEAS INTO IMPACT <span><Sparkles size={17} /></span></div>
          </motion.div>

          <a className="scroll-indicator" href="#services"><span /> Scroll to explore</a>
        </section>

        <section className="services section-wrap section-space" id="services">
          <motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="eyebrow">WHAT WE DO</span>
            <h2>Digital solutions.<br /><span className="gradient-text">Real-world impact.</span></h2>
            <p>Everything you need to build, launch and grow your digital presence.</p>
          </motion.div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }, i) => (
              <motion.article className="service-card" key={title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <div className="service-icon"><Icon size={23} /></div>
                <span className="card-index">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contact" aria-label={`Discuss ${title}`}><ArrowUpRight size={19} /></a>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="work section-wrap section-space" id="work">
          <motion.div className="section-heading heading-row" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div><span className="eyebrow">SELECTED PROJECTS</span><h2>Ideas brought<br /><span className="gradient-text">to life.</span></h2></div>
            <p>A glimpse into the digital experiences and solutions we create.</p>
          </motion.div>
          <div className="project-grid">
            {projects.map((project, i) => (
              <motion.article className={`project-card project-${i + 1}`} key={project.name} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="project-art">
                  <div className="project-art-grid" />
                  <div className="project-art-content">
                    <span className="project-art-label">{project.type}</span>
                    <div className="project-art-symbol">{i === 0 ? <Monitor size={58} /> : i === 1 ? <Globe2 size={58} /> : <Layers3 size={58} />}</div>
                    <span className="project-art-number">{project.number}</span>
                  </div>
                </div>
                <div className="project-info">
                  <div><span className="project-type">{project.type}</span><h3>{project.name}</h3></div>
                  <button className="round-arrow" onClick={() => setSelectedProject(project)} aria-label={`View ${project.name} details`}><ArrowUpRight /></button>
                </div>
                <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="about section-wrap section-space" id="about">
          <div className="about-visual">
            <div className="about-orbit"><div className="about-center"><Sparkles size={44} /></div></div>
            <div className="about-note"><span>THINK</span><span>CREATE</span><span>INNOVATE</span></div>
          </div>
          <motion.div className="about-content" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="eyebrow">WHO WE ARE</span>
            <h2>Technology with<br /><span className="gradient-text">a creative edge.</span></h2>
            <p>Codevera is a digital development studio focused on turning ideas into useful, engaging and reliable digital products.</p>
            <p>We bring design and technology together to create solutions that look exceptional and work beautifully.</p>
            <p>Our team brings 3 years of professional experience at Technext Software House. We are a team of 15 members, and every team member has at least 2 years of experience in their respective fields.</p>
            <div className="founder-credits">
              <div className="founder-card">
                <div className="founder-avatar">
                  <span>MS</span>
                </div>
                <div className="founder-info">
                  <span className="founder-badge">BUILT & DEVELOPED BY</span>
                  <h3 className="founder-name">Muhammad Saad</h3>
                  <p className="founder-role">Owner — Codevera</p>
                </div>
              </div>

              <div className="founder-card">
                <div className="founder-avatar founder-avatar-cyan">
                  <span>FH</span>
                </div>
                <div className="founder-info">
                  <span className="founder-badge">MANAGEMENT</span>
                  <h3 className="founder-name">Muhammad Farhan</h3>
                  <p className="founder-role">Manager — Codevera</p>
                </div>
              </div>
            </div>
            <div className="team-stats">
              <div className="team-stat"><strong>15</strong><span>Team Members</span></div>
              <div className="team-stat"><strong>3+</strong><span>Years of Experience</span></div>
              <div className="team-stat"><strong>2+</strong><span>Years Per Member</span></div>
            </div>
            <div className="about-points">
              <span><Check size={17} /> Thoughtful design</span>
              <span><Check size={17} /> Modern technology</span>
              <span><Check size={17} /> Reliable solutions</span>
              <span><Check size={17} /> Clear communication</span>
            </div>
            <a className="button button-primary" href="#contact">Work With Us <ArrowUpRight size={18} /></a>
          </motion.div>
        </section>

        <section className="process section-wrap section-space" id="process">
          <motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="eyebrow">HOW WE WORK</span>
            <h2>From first idea to<br /><span className="gradient-text">final launch.</span></h2>
            <p>A clear process that keeps your project moving forward.</p>
          </motion.div>
          <div className="process-grid">
            {steps.map(([number, title, text], i) => (
              <motion.div className="process-card" key={number} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <span className="process-number">{number}</span>
                <div className="process-line" />
                <h3>{title}</h3><p>{text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="pricing section-wrap section-space" id="pricing">
          <motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="eyebrow">SIMPLE STARTING POINTS</span>
            <h2>Choose your next<br /><span className="gradient-text">digital move.</span></h2>
            <p>Every project is different. These packages help you start the conversation.</p>
          </motion.div>
          <div className="pricing-grid">
            {[
              { name: 'Starter', detail: 'For a strong first impression', price: 'Custom', features: ['Responsive website', 'Essential pages', 'Modern UI design', 'Contact integration'] },
              { name: 'Professional', detail: 'For growing businesses', price: 'Custom', popular: true, features: ['Everything in Starter', 'Advanced interactions', 'Custom functionality', 'Performance optimization', 'Priority communication'] },
              { name: 'Custom Solution', detail: 'For ambitious ideas', price: "Let's Talk", features: ['Custom software & systems', 'Advanced integrations', 'Tailored user experience', 'Dedicated project planning'] },
            ].map((plan) => (
              <article className={`pricing-card ${plan.popular ? 'pricing-featured' : ''}`} key={plan.name}>
                {plan.popular && <span className="popular-label">POPULAR CHOICE</span>}
                <h3>{plan.name}</h3><p>{plan.detail}</p>
                <div className="price">{plan.price}</div>
                <div className="pricing-divider" />
                <ul>{plan.features.map(feature => <li key={feature}><Check size={16} /> {feature}</li>)}</ul>
                <a className={plan.popular ? 'button button-primary' : 'button button-ghost'} href={`${whatsapp}?text=${encodeURIComponent(`Hello Codevera, I am interested in the ${plan.name} package.`)}`}>Discuss Package <ArrowUpRight size={17} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="faq section-wrap section-space" id="faq">
          <div className="faq-intro"><span className="eyebrow">GOT QUESTIONS?</span><h2>Good questions.<br /><span className="gradient-text">Clear answers.</span></h2><p>Still curious? Reach out and let's talk about your idea.</p><a href={whatsapp} target="_blank" rel="noreferrer" className="text-link">Ask us directly <ArrowUpRight size={17} /></a></div>
          <div className="faq-list">
            {faqs.map(([question, answer], i) => (
              <div className={`faq-item ${activeFaq === i ? 'faq-active' : ''}`} key={question}>
                <button onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}><span>{question}</span><ChevronDown size={19} /></button>
                <AnimatePresence>{activeFaq === i && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>{answer}</motion.p>}</AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        <section className="contact section-wrap section-space" id="contact">
          <div className="contact-panel">
            <div className="contact-copy">
              <span className="eyebrow">LET'S CREATE SOMETHING</span>
              <h2>Your next big idea<br />starts <span className="gradient-text">right here.</span></h2>
              <p>Tell us what you're imagining. Let's turn it into something real.</p>
              <a className="contact-method" href={`mailto:${email}`}><Mail size={19} /><span><small>EMAIL US</small>{email}</span><ArrowUpRight size={18} /></a>
              <a className="contact-method" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={19} /><span><small>WHATSAPP</small>+92 346 0976586</span><ArrowUpRight size={18} /></a>
            </div>
            <form className="contact-form" onSubmit={submitForm}>
              <label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Enter your name" /></label>
              <label>Email address<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label>
              <label>What do you need?
                <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                  <option>Website Development</option><option>Management Websites & Software</option><option>Product Ads & Commercial Videos</option><option>Graphic Designing & Branding</option><option>Mobile & Web Applications</option><option>UI/UX & Creative Design</option><option>3D Experiences</option><option>Business Automation</option><option>Other Project</option>
                </select>
              </label>
              <label>Tell us about your project<textarea required rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="A little about your idea..." /></label>
              <button className="button button-primary form-submit" type="submit" disabled={sending}>
                {sending ? 'Sending...' : 'Send Inquiry'} <Send size={17} />
              </button>
              {sendStatus === 'success' && <p style={{ color: '#22c55e' }}>Message sent successfully! We will contact you soon.</p>}
              {sendStatus === 'error' && <p style={{ color: '#ef4444' }}>Message could not be sent. Please try again.</p>}
              <small className="form-note">Your email app will open with your message ready to send.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand" href="#home"><span className="brand-symbol"><span /></span><span>codevera<span className="brand-dot">.</span></span></a>
        <p>Building meaningful digital experiences.</p>
        <div className="footer-links"><a href="#services">Services</a><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <div className="footer-bottom"><span>Ã‚Â© {new Date().getFullYear()} Codevera. All rights reserved.</span><span>Designed to move you forward <Sparkles size={14} /></span></div>
      </footer>

      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={23} /></a>

      <AnimatePresence>
        {selectedProject && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)}>
            <motion.div className="project-modal" initial={{ opacity: 0, y: 25, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details"><X /></button>
              <span className="eyebrow">{selectedProject.type}</span>
              <h2>{selectedProject.name}</h2>
              <p>{selectedProject.desc}</p>
              <div className="project-tags">{selectedProject.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <a className="button button-primary" href={`${whatsapp}?text=${encodeURIComponent(`Hello Codevera, I would like to discuss a project similar to ${selectedProject.name}.`)}`} target="_blank" rel="noreferrer">Discuss a Similar Project <ArrowUpRight size={17} /></a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App












