import React, { useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Code2, Database, Github,
  Linkedin, Mail, Menu, MonitorCog, BarChart3, Server, X,
  MapPin, GraduationCap, BriefcaseBusiness, Sparkles
} from "lucide-react";

const skills = [
  { icon: Code2, title: "Frontend Development", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"] },
  { icon: Server, title: "Backend Development", items: ["Node.js", "Express.js", "PHP", "REST APIs"] },
  { icon: Database, title: "Database Management", items: ["MySQL", "Supabase", "Database Design"] },
  { icon: BarChart3, title: "Data Analytics", items: ["Data Interpretation", "Analytical Thinking", "Problem Solving"] },
  { icon: MonitorCog, title: "IT & Technical Support", items: ["Troubleshooting", "Software Configuration", "System Maintenance", "IT Support"] },
  { icon: Github, title: "Development Tools", items: ["Git", "GitHub", "API Integration"] },
];

const projects = [
  {
    number: "01",
    title: "DAVID COMMUNICATIONS",
    type: "E-commerce Web Application",
    description: "A developing online store concept for phones, laptops and accessories, with product management, customer orders and inventory workflows.",
    stack: ["React", "Node.js", "Express", "Supabase"],
    status: "In development"
  },
  {
    number: "02",
    title: "Customer Management System",
    type: "Full-Stack Web Application",
    description: "A customer management application concept focused on account registration, authentication and managing customer profile information.",
    stack: ["React", "Node.js", "Express", "Supabase"],
    status: "Project work"
  },
  {
    number: "03",
    title: "Intelligent Customer-Service Chatbot",
    type: "Academic Project",
    description: "A chatbot system project exploring how automated conversations can support customer enquiries, feedback and service delivery.",
    stack: ["PHP", "MySQL", "JavaScript", "AJAX"],
    status: "Academic project"
  }
];

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const nav = [
    ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Contact", "#contact"]
  ];

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">AD</span><span>AYORINDE<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="profile-header">
  <img
    src="/images/profile.jpg"
    alt="Ayorinde David Gbemiro"
    className="profile-image"
  />

  <div className="profile-info">
    <h3>Ayorinde David Gbemiro</h3>
    <p>Full-Stack Developer | Computer Science Graduate</p>
  </div>
</div>
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> OPEN TO OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, I'M</p>
            <h1>Ayorinde David<br /><span>Gbemiro.</span></h1>
            <h2 className="hero-role">Full-Stack Developer <span>·</span></h2>
            <p className="hero-intro">I build functional, user-friendly digital experiences and practical technology solutions that solve real-world problems.</p>
            <div className="hero-actions">
  <a className="button button-primary" href="#projects">
    Explore my work <ArrowUpRight size={17} />
  </a>

  <a
    className="button button-quiet"
    href="/Ayorinde-David-CV.pdf"
    download
  >
    Download CV <ArrowDown size={16} />
  </a>
</div>
            <div className="hero-meta"><span><MapPin size={15} /> Lagos, Nigeria</span><span><Code2 size={15} /> Web & Software Development</span></div>
          </div>
          <div className="hero-visual">
            <div className="profile-container">
  <img
    src="/images/profile.jpg"
    alt="Ayorinde David Gbemiro"
    className="profile-image"
  />
</div>
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="code-card">
              <div className="code-top"><span /><span /><span /><small>developer.js</small></div>
              <div className="code-content">
                <p><i>const</i> developer = {"{"}</p>
                <p className="indent"><b>name:</b> <em>'Ayorinde David'</em>,</p>
                <p className="indent"><b>role:</b> <em>'Full-Stack Developer'</em>,</p>
                <p className="indent"><b>focus:</b> <em>'Building solutions'</em>,</p>
                <p className="indent"><b>mindset:</b> <em>'Always learning'</em></p>
                <p>{"};"}</p>
                <div className="code-status"><span className="pulse" /> Ready to build something meaningful</div>
              </div>
            </div>
            <div className="floating-tag tag-react"><Code2 size={16} /> React.js</div>
            <div className="floating-tag tag-data"><Database size={16} /> Data & APIs</div>
            <div className="hero-visual-caption">IDEAS → CODE → IMPACT</div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap about-section" id="about">
          <SectionHeading eyebrow="01 / ABOUT ME" title={<>Curious mind.<br /><span>Practical builder.</span></>} />
          <div className="about-grid">
            <div className="about-lead"><p className="large-copy">I’m a technology enthusiast with a passion for turning ideas into useful digital products.</p><p>My background brings together frontend and backend development, database management, data analytics and hands-on IT knowledge.</p></div>
            <div className="about-details">
              <p>I am a Computer Science graduate of <strong>Lagos State University</strong> and a trained Full-Stack Developer from <strong>Stephotec Computer Institute</strong>, with additional certification in <strong>Data Analytics from TSAcademy</strong>.</p>
              <p>I enjoy learning emerging technologies, developing practical projects and continuously improving my technical capabilities. My goal is to create reliable, accessible and scalable solutions that make a meaningful difference.</p>
              <div className="education-list">
                <div className="education-item"><span className="education-icon"><GraduationCap size={19} /></span><div><strong>Lagos State University</strong><small>Computer Science · Graduated</small></div></div>
                <div className="education-item"><span className="education-icon"><BriefcaseBusiness size={18} /></span><div><strong>Stephotec Computer Institute</strong><small>Full-Stack Development Training</small></div></div>
                <div className="education-item"><span className="education-icon"><BarChart3 size={18} /></span><div><strong>TSAcademy</strong><small>Data Analytics Certification</small></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <SectionHeading eyebrow="02 / WHAT I DO" title={<>My technical <span>toolkit.</span></>} text="A blend of development, data and practical IT skills that helps me approach problems from different angles." />
          <div className="skills-grid">
            {skills.map(({ icon: Icon, title, items }, i) => <article className="skill-card" key={title}>
              <div className="skill-card-top"><span className="skill-icon"><Icon size={21} /></span><span className="skill-index">0{i + 1}</span></div>
              <h3>{title}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div>
            </article>)}
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <SectionHeading eyebrow="03 / SELECTED WORK" title={<>Projects & <span>practice.</span></>} text="A selection of practical and academic work that reflects my interest in building useful technology." />
          <div className="projects-list">
            {projects.map(project => <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div></div>
              <div className="project-side"><span className="project-status"><span className="status-dot" />{project.status}</span><span className="project-arrow"><ArrowUpRight size={22} /></span></div>
            </article>)}
          </div>
          <p className="projects-note"><Sparkles size={16} /> More projects and implementation details can be added as the portfolio grows.</p>
        </section>

        <section className="section-wrap interests-section">
          <div className="interests-panel"><div><span className="eyebrow">04 / WHAT DRIVES ME</span><h2>Technology with<br /><span>purpose.</span></h2></div><div className="interests-content"><p className="large-copy">I’m interested in opportunities where curiosity, collaboration and thoughtful engineering can create measurable value.</p><div className="interest-pills"><span>Full-Stack Development</span><span>Web Applications</span><span>Data Analytics</span><span>IT Technical Support</span><span>Software Engineering</span></div></div></div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <span className="eyebrow">05 / LET'S CONNECT</span>
          <h2>Have an idea?<br /><span>Let's build it.</span></h2>
          <p>I’m open to professional collaborations, internships and entry-level opportunities where I can contribute, learn and grow.</p>
         <div className="contact-bottom">
  <a href="mailto:Ayorindedavidinho@gmail.com">
    <Mail size={17} />
    Ayorindedavidinho@gmail.com
  </a>

  <a
    href="https://github.com/david-ayorinde"
    target="_blank"
    rel="noreferrer"
  >
    <Github size={17} />
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/ayorinde-david-54533134a/"
    target="_blank"
    rel="noreferrer"
  >
    <Linkedin size={17} />
    LinkedIn
  </a>
</div>
        </section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">AD</span><span>AYORINDE<span className="brand-dot">.</span></span></a><span>Designed & built with purpose.</span><span>© {new Date().getFullYear()} Ayorinde David Gbemiro</span></footer>
    </div>
  );
}