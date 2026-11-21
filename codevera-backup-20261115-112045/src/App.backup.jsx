import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Code2, Layers3, Smartphone,
  Palette, Boxes, Zap, Menu, X, MoveUpRight, Check, Mail, MessageCircle,
  Globe2, Sparkles, MonitorSmartphone, Workflow, ShieldCheck
} from 'lucide-react'
import Orb from './components/Orb.jsx'
import Reveal from './components/Reveal.jsx'

const services = [
  { icon: Code2, number: '01', title: 'Web development', desc: 'Fast, responsive websites designed to turn visitors into customers.', tags: ['Business websites', 'E-commerce', 'Web applications'] },
  { icon: Boxes, number: '02', title: 'Custom software', desc: 'Purpose-built systems that simplify operations and help your business scale.', tags: ['Management systems', 'Dashboards', 'Automation'] },
  { icon: Smartphone, number: '03', title: 'App experiences', desc: 'Intuitive digital products that feel natural on every screen.', tags: ['Mobile-first UI', 'Prototypes', 'Product design'] },
  { icon: Palette, number: '04', title: 'Brand & UI/UX', desc: 'A distinct visual identity and thoughtful interfaces people remember.', tags: ['Brand identity', 'UI/UX design', 'Design systems'] },
]

const projects = [
  { no: '01', type: 'WEB APPLICATION', name: 'Business Invoice Maker', desc: 'A streamlined invoicing experience for small businesses.', visual: 'invoice', color: 'violet' },
  { no: '02', type: 'COMMUNITY PLATFORM', name: 'BloodConnect', desc: 'A concept platform connecting blood donors with people in need.', visual: 'blood', color: 'pink' },
  { no: '03', type: 'MANAGEMENT SOFTWARE', name: 'Madrasa ERP', desc: 'A comprehensive concept for education administration and records.', visual: 'erp', color: 'blue' },
]

const steps = [
  ['01', 'Discover', 'We learn about your goals, audience and the problem to solve.'],
  ['02', 'Design', 'We map the experience and shape a visual direction together.'],
  ['03', 'Build', 'We develop, test and refine every important detail.'],
  ['04', 'Launch', 'We help you go live and make the next iteration even better.'],
]

function Logo() {
  return <a className="logo" href="#home" aria-label="Codevera home"><span className="logo-mark">C<span>.</span></span><span>codevera</span></a>
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = [['Services', '#services'], ['Work', '#work'], ['About', '#about'], ['Process', '#process']]
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Logo />
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-mobile-cta" href="#contact" onClick={() => setOpen(false)}>Start a project <ArrowUpRight size={15}/></a>
        </nav>
        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15}/></a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
      </div>
    </header>
  )
}

function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <div className={`section-heading ${center ? 'center' : ''}`}>
      <span className="eyebrow"><span className="eyebrow-dot"/>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function ProjectVisual({ type }) {
  if (type === 'invoice') return (
    <div className="project-visual invoice-visual">
      <div className="invoice-window">
        <div className="window-top"><i/><i/><i/><span>INVOICE / 2026</span></div>
        <div className="invoice-body"><div className="invoice-brand">INVOICE<span>FLOW</span></div><div className="invoice-line wide"/><div className="invoice-line"/><div className="invoice-total"><small>TOTAL DUE</small><b>$2,450.00</b></div><div className="invoice-button">Download invoice ↗</div></div>
      </div>
      <div className="float-chip chip-one">✦ Easy billing</div>
      <div className="float-chip chip-two">↗ PDF ready</div>
    </div>
  )
  if (type === 'blood') return (
    <div className="project-visual blood-visual">
      <div className="blood-glow"/><div className="blood-drop">✚</div>
      <div className="blood-card"><span>DONOR MATCH</span><b>O negative</b><small>Available nearby</small><div className="match-bar"><i/></div></div>
      <div className="blood-orbit orbit-one"/><div className="blood-orbit orbit-two"/>
    </div>
  )
  return (
    <div className="project-visual erp-visual">
      <div className="erp-sidebar"><b>m.</b><i/><i/><i/><i/></div>
      <div className="erp-main"><small>OVERVIEW / DASHBOARD</small><b>Good morning, Admin</b><div className="erp-stats"><i/><i/><i/></div><div className="erp-chart"><span/><span/><span/><span/><span/><span/><span/><span/><span/></div></div>
      <div className="erp-orb"/>
    </div>
  )
}

function App() {
  const [sent, setSent] = useState(false)

  function handleContact(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name')
    const email = data.get('email')
    const service = data.get('service')
    const message = data.get('message')
    const subject = encodeURIComponent(`New project enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nProject details:\n${message}`)
    window.location.href = `mailto:hello@codevera.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <Header />
      <main>
        <section className="hero-section" id="home">
          <div className="hero-grid"/>
          <div className="hero-glow glow-a"/><div className="hero-glow glow-b"/>
          <div className="hero-content">
            <motion.div className="hero-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
              <div className="availability"><span/> DIGITAL STUDIO · AVAILABLE FOR PROJECTS</div>
              <h1>We build<br/><span className="gradient-text">digital</span> things<br/>that <span className="outline-text">move</span>.</h1>
              <p className="hero-description">From ambitious ideas to beautifully engineered products. We design and develop digital experiences that move your business forward.</p>
              <div className="hero-actions"><a className="button button-primary" href="#contact">Start a project <ArrowUpRight size={17}/></a><a className="text-link" href="#work">Explore our work <ArrowDown size={16}/></a></div>
              <div className="hero-proof"><div className="proof-avatars"><span>C</span><span>+</span><span>✦</span></div><p><b>Ideas into impact.</b><br/>Thoughtful design. Reliable technology.</p></div>
            </motion.div>
            <motion.div className="hero-art" initial={{ opacity: 0, scale: .82 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: .15 }}>
              <div className="orb-label label-top"><span/> CREATIVE ENGINEERING</div>
              <Orb />
              <div className="orb-label label-bottom">DESIGN <i/> CODE <i/> EXPERIENCE</div>
              <div className="floating-note note-a"><Sparkles size={15}/> Made to stand out</div>
              <div className="floating-note note-b"><span className="note-bars"><i/><i/><i/><i/></span> Built for what's next</div>
            </motion.div>
          </div>
          <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><div className="scroll-line"/><span>01 — 05</span></div>
        </section>

        <section className="ticker" aria-label="Capabilities">
          <div className="ticker-track">{Array.from({length: 2}).map((_, i) => <div className="ticker-set" key={i}><span>WEB DEVELOPMENT</span><b>✳</b><span>3D EXPERIENCES</span><b>✳</b><span>CUSTOM SOFTWARE</span><b>✳</b><span>UI / UX DESIGN</span><b>✳</b></div>)}</div>
        </section>

        <section className="section services-section" id="services">
          <Reveal><SectionHeading eyebrow="WHAT WE DO" title={<>Digital solutions.<br/><span className="muted-heading">Real-world impact.</span></>} text="The right mix of creative thinking and technical craft to help your business take its next step."/></Reveal>
          <div className="services-grid">{services.map((s, i) => <Reveal key={s.number} delay={i * .07}><article className="service-card"><div className="service-top"><span>{s.number} / 04</span><s.icon size={23}/></div><h3>{s.title}</h3><p>{s.desc}</p><div className="service-tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div><a href="#contact" className="card-arrow" aria-label={`Ask about ${s.title}`}><ArrowUpRight size={18}/></a></article></Reveal>)}</div>
        </section>

        <section className="section work-section" id="work">
          <Reveal><div className="work-heading"><SectionHeading eyebrow="SELECTED WORK" title={<>Ideas made <span className="gradient-text">visible.</span></>} text="A glimpse of the digital experiences we love creating."/><a className="text-link desktop-link" href="#contact">Have a project in mind? <ArrowUpRight size={16}/></a></div></Reveal>
          <div className="projects-list">{projects.map((p, i) => <Reveal key={p.no} delay={i * .08}><article className={`project-card ${p.color}`}><div className="project-info"><span className="project-type">{p.no} — {p.type}</span><h3>{p.name}</h3><p>{p.desc}</p><a href="#contact" className="project-link">Discuss a similar project <ArrowUpRight size={16}/></a></div><ProjectVisual type={p.visual}/></article></Reveal>)}</div>
          <p className="demo-note">Portfolio previews are concept showcases. Replace them with verified client projects as your work grows.</p>
        </section>

        <section className="about-section" id="about">
          <div className="about-orb-bg"/>
          <div className="section about-inner">
            <Reveal><div className="about-copy"><span className="eyebrow"><span className="eyebrow-dot"/> A LITTLE ABOUT US</span><h2>Small details.<br/><span className="gradient-text">Big difference.</span></h2><p>Codevera is a digital studio focused on building useful, memorable and well-crafted digital products. We bring design and technology together to turn complex ideas into simple experiences.</p><a className="button button-outline" href="#contact">Get to know us <ArrowUpRight size={17}/></a></div></Reveal>
            <Reveal delay={.15}><div className="about-feature-grid"><div className="feature-tile"><Globe2/><b>Digital first</b><span>Experiences built for the modern web.</span></div><div className="feature-tile"><Zap/><b>Purposeful</b><span>Every interaction has a reason.</span></div><div className="feature-tile"><ShieldCheck/><b>Built with care</b><span>Quality and clarity at every step.</span></div><div className="feature-tile"><MonitorSmartphone/><b>Made to adapt</b><span>Responsive across screens and devices.</span></div></div></Reveal>
          </div>
        </section>

        <section className="section process-section" id="process">
          <Reveal><SectionHeading eyebrow="HOW WE WORK" title={<>From first thought<br/><span className="muted-heading">to finished product.</span></>} text="A clear, collaborative process keeps every project moving in the right direction."/></Reveal>
          <div className="process-grid">{steps.map(([n, title, desc], i) => <Reveal key={n} delay={i * .08}><div className="process-step"><span className="step-number">{n}</span><div className="step-connector"><i/></div><h3>{title}</h3><p>{desc}</p></div></Reveal>)}</div>
        </section>

        <section className="cta-band">
          <div className="cta-glow"/>
          <Reveal><span className="eyebrow"><span className="eyebrow-dot"/> YOUR NEXT MOVE STARTS HERE</span><h2>Have an idea?<br/><span className="gradient-text">Let's make it real.</span></h2><p>Tell us what you're imagining. We'll help you figure out the best way to build it.</p><a className="button button-primary" href="#contact">Let's build something <ArrowUpRight size={17}/></a></Reveal>
          <div className="cta-decoration">C<span>.</span></div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-layout">
            <Reveal><div className="contact-copy"><span className="eyebrow"><span className="eyebrow-dot"/> GET IN TOUCH</span><h2>Let's talk<br/><span className="gradient-text">about your idea.</span></h2><p>Have a project, a question or just want to say hello? Send a message and let's start a conversation.</p><a className="contact-method" href="mailto:hello@codevera.com"><span className="contact-icon"><Mail/></span><span><small>EMAIL US</small><b>hello@codevera.com</b></span><ArrowUpRight/></a><a className="contact-method" href="https://wa.me/923000000000" target="_blank" rel="noreferrer"><span className="contact-icon"><MessageCircle/></span><span><small>WHATSAPP</small><b>Chat with our team</b></span><ArrowUpRight/></a></div></Reveal>
            <Reveal delay={.12}><form className="contact-form" onSubmit={handleContact}><div className="form-heading"><span>PROJECT ENQUIRY</span><span className="form-status"><i/> OPEN TO PROJECTS</span></div><label>Your name<input name="name" placeholder="What should we call you?" required/></label><label>Email address<input name="email" type="email" placeholder="you@example.com" required/></label><label>What do you need?<select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Website development</option><option>Custom software</option><option>App development</option><option>Branding & UI/UX</option><option>Something else</option></select></label><label>Tell us about your project<textarea name="message" rows="4" placeholder="A little about your idea, goals and timeline..." required/></label><button className="button button-primary form-submit" type="submit">Send enquiry <ArrowUpRight size={17}/></button>{sent && <p className="form-hint">Your email app should open with your enquiry. If it doesn't, email hello@codevera.com directly.</p>}<p className="form-hint">This demo form opens your email app; connect a form backend before launch.</p></form></Reveal>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="footer-main"><Logo/><p>Thoughtful design.<br/>Powerful digital experiences.</p><a href="#home" className="back-top">BACK TO TOP ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} CODEVERA. ALL RIGHTS RESERVED.</span><span>DESIGNED TO MOVE.</span><div><a href="#services">Services</a><a href="#work">Work</a><a href="#contact">Contact</a></div></div></footer>
    </>
  )
}

export default App
