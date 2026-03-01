"use client";

import Link from "next/link";
import { ArrowLeft, Mail, Github, Cpu, Layers, Zap, FileText } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const valueProps = [
  {
    icon: Cpu,
    title: "AI-Native Builder",
    description:
      "I build real AI systems — RAG pipelines, multi-agent workflows, and automation using OpenClaw and modern frameworks. Not wrappers around APIs; actual production-thinking architecture.",
  },
  {
    icon: Layers,
    title: "Full-Stack Capable",
    description:
      "React, Next.js, TypeScript, Node.js. I ship complete products front to back with clean architecture, maintainable code, and tight feedback loops from the start.",
  },
  {
    icon: Zap,
    title: "Relentless Learner",
    description:
      "CS grad who learns by building and shipping. Self-taught Next.js, AI agent design, and automation workflows — all through real projects with real constraints.",
  },
];

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "HTML/CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "REST APIs", "SQL"],
  },
  {
    category: "AI & Agents",
    skills: ["OpenClaw", "RAG Architecture", "Prompt Engineering", "Multi-Agent Workflows", "AI Orchestration"],
  },
  {
    category: "Tooling",
    skills: ["Git", "GitHub Actions", "VS Code", "Adobe Firefly", "AI-Assisted Dev"],
  },
];

const projects = [
  {
    name: "Portfolio Site",
    description:
      "This site. Built with Next.js, TypeScript, and Tailwind. Custom scroll animations, Windows XP aesthetic, security headers, and full deployment pipeline.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "/",
  },
  {
    name: "Textbook X Change",
    description:
      "Student peer marketplace for swapping, selling, and buying textbooks. ISBN autofill with pricing suggestions powered by web scraping, AWS S3 image storage, and containerized via Docker Compose.",
    tech: ["Python", "Django", "PostgreSQL", "AWS S3", "Docker"],
    link: "https://github.com/Navnedia/Textbook-X-Change",
  },
  {
    name: "My OpenClaw Journey",
    description:
      "From zero agent experience to multi-agent workflows — RAG pipelines, orchestrator-worker patterns, telemetry logging, and personal automation. Documented on the blog.",
    tech: ["OpenClaw", "AI Agents", "RAG", "Automation"],
    link: "/blog/openclaw-journey",
  },
];

function SectionReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollReveal(0.08);
  return (
    <div
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function HireMe() {
  return (
    <main className="site-shell">

      {/* XP-style title bar */}
      <div className="hireme-titlebar">
        <span>Giuseppe Di Turi – Hire Me</span>
        <Link href="/" className="hireme-close" aria-label="Back to portfolio">✕</Link>
      </div>

      {/* Back nav */}
      <nav className="hireme-nav">
        <Link href="/" className="inline-flex items-center gap-2 terminal-meta hover:text-[var(--foreground)] transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
      </nav>

      {/* Hero */}
      <section className="hireme-hero">
        <div className="hireme-hero-main">
          <p className="panel-label">Open to Work</p>
          <h1 className="hireme-name">Giuseppe Di Turi</h1>
          <p className="hireme-role">Full-Stack Developer · AI-Native Builder</p>
          <p className="hireme-tagline">
            CS graduate transitioning from operations into engineering. I ship practical,
            well-architected products and I&apos;m ready to contribute from day one.
          </p>
          <div className="chip-wrap" style={{ marginTop: "1.2rem" }}>
            <span className="chip">Remote-First</span>
            <span className="chip">Based in Illinois</span>
            <span className="chip">CS Graduate 2025</span>
            <span className="chip">Available Now</span>
          </div>
        </div>
        <aside className="hireme-availability">
          <p className="panel-label">Availability</p>
          <ul className="status-list">
            <li>
              <span>Target Role</span>
              <strong>Frontend / Full-Stack</strong>
            </li>
            <li>
              <span>Status</span>
              <strong>Open to interviews</strong>
            </li>
            <li>
              <span>Start</span>
              <strong>Immediately</strong>
            </li>
            <li>
              <span>Location</span>
              <strong>Remote preferred</strong>
            </li>
          </ul>
          <div style={{ marginTop: "1.2rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <a
              href="mailto:joedituri@outlook.com"
              className="pill-button inline-flex items-center justify-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
            <Link
              href="/resume"
              className="ghost-button inline-flex items-center justify-center gap-2"
            >
              <FileText className="h-4 w-4" />
              View Resume
            </Link>
          </div>
        </aside>
      </section>

      {/* Why Me */}
      <SectionReveal>
        <section className="section">
          <h2 className="section-heading">Why Me</h2>
          <p className="section-title">Three things that set me apart.</p>
          <div className="hireme-props">
            {valueProps.map(({ icon: Icon, title, description }) => (
              <div key={title} className="hireme-prop-card">
                <div className="hireme-prop-icon">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="hireme-prop-title">{title}</h3>
                <p className="hireme-prop-desc">{description}</p>
              </div>
            ))}
          </div>
        </section>
      </SectionReveal>

      {/* Skills */}
      <SectionReveal delay={50}>
        <section className="section">
          <h2 className="section-heading">Skills</h2>
          <p className="section-title">What I bring to the stack.</p>
          <div className="hireme-skills-grid">
            {skillGroups.map((group) => (
              <div key={group.category} className="terminal-panel">
                <p className="panel-label">{group.category}</p>
                <div className="chip-wrap" style={{ marginTop: "0.85rem" }}>
                  {group.skills.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </SectionReveal>

      {/* Projects */}
      <SectionReveal delay={50}>
        <section className="section">
          <h2 className="section-heading">Projects</h2>
          <p className="section-title">Things I&apos;ve built.</p>
          <div className="hireme-projects">
            {projects.map((project) => (
              <div key={project.name} className="hireme-project-card">
                <div className="hireme-project-header">
                  <h3 className="hireme-project-name">{project.name}</h3>
                  <Link href={project.link} className="terminal-link inline-flex items-center gap-1 text-sm">
                    View
                  </Link>
                </div>
                <p className="hireme-project-desc">{project.description}</p>
                <div className="chip-wrap" style={{ marginTop: "0.75rem" }}>
                  {project.tech.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </SectionReveal>

      {/* CTA */}
      <SectionReveal delay={50}>
        <section className="section">
          <div className="hireme-cta">
            <div className="hireme-cta-copy">
              <h2 className="section-heading">Let&apos;s Talk</h2>
              <p className="hireme-cta-text">
                I&apos;m looking for a team where I can ship real work from week one,
                grow fast, and build things that matter. If that sounds like a fit,
                reach out.
              </p>
            </div>
            <div className="hireme-cta-actions">
              <a
                href="mailto:joedituri@outlook.com"
                className="pill-button inline-flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                joedituri@outlook.com
              </a>
              <a
                href="https://github.com/joedituri"
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-button inline-flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                github.com/joedituri
              </a>
            </div>
          </div>
        </section>
      </SectionReveal>

    </main>
  );
}
