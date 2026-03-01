"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Github,
  Mail,
  Sparkles,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";

const featuredProjects = [
  {
    title: "AI Portfolio Assistant",
    summary:
      "Interactive portfolio with a live AI chat assistant that answers visitor questions in real time.",
    tech: ["Next.js", "TypeScript", "MiniMax API"],
    href: "/",
  },
  {
    title: "Second Brain Task System",
    summary:
      "Internal productivity app for planning, execution, and daily tracking across personal and project workflows.",
    tech: ["React", "TypeScript", "JSON Data Model"],
    href: "/resume",
  },
  {
    title: "JARVIS Build Log",
    summary:
      "Ongoing documentation of building a personal AI agent system with automation-first workflows.",
    tech: ["AI Agents", "Automation", "System Design"],
    href: "/blog",
  },
];

const principles = [
  {
    title: "Build for momentum",
    detail: "Small shipping loops, production-first thinking, and practical decisions that move projects forward.",
  },
  {
    title: "AI as leverage",
    detail: "I design workflows where AI removes friction, speeds delivery, and keeps output quality high.",
  },
  {
    title: "Clarity over noise",
    detail: "Readable code, direct communication, and systems that are easy to maintain after launch.",
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "REST APIs",
  "AI Tooling",
  "GitHub Actions",
];

function ParallaxGrid() {
  useEffect(() => {
    const handleScroll = () => {
      const grid = document.querySelector('.soft-grid') as HTMLElement;
      if (grid) {
        grid.style.transform = `translateY(${window.scrollY * 0.05}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="soft-grid" aria-hidden />;
}

function SectionReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollReveal(0.08);
  return (
    <div
      ref={ref}
      className={`section-reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function CardReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`card-reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <ParallaxGrid />

      <header className="topbar">
        <div className="brand">
          <Image
            src="/logo.jpg"
            alt="Giuseppe Di Turi logo"
            width={264}
            height={264}
            className="brand-mark brand-mark-large"
            priority
          />
          <h1 className="brand-title">Giuseppe Di Turi</h1>
          <p className="brand-subtitle">Full-Stack Developer • AI-Native Builder</p>
        </div>
        <nav className="top-nav">
          <a href="#bio" className="pill-link">Bio</a>
          <a href="#work" className="pill-link">Work</a>
          <a href="#about" className="pill-link">Approach</a>
          <Link href="/blog" className="pill-link">Blog</Link>
          <Link href="/hireme" className="pill-button">Hire Me</Link>
        </nav>
      </header>

      {/* Hero — visible immediately, no scroll trigger */}
      <section className="hero">
        <article className="hero-copy">
          <p className="hero-eyebrow">System Overview</p>
          <h1>Digital builder with an AI-native mindset.</h1>
          <p>
            I design and ship practical web products with modern React tooling,
            automation, and clean delivery workflows. This site highlights
            my current direction, recent work, and hiring focus.
          </p>
          <div className="hero-actions">
            <Link href="/resume" className="pill-button inline-flex items-center gap-2">
              <BriefcaseBusiness size={16} />
              <span>View Resume</span>
            </Link>
            <a href="mailto:joedituri@outlook.com" className="ghost-button inline-flex items-center gap-2">
              <Mail size={15} />
              <span>Contact</span>
            </a>
          </div>
        </article>

        <aside className="hero-panel">
          <p className="panel-label">Current Status</p>
          <ul className="status-list">
            <li>
              <span>Role target</span>
              <strong>Frontend / Full-Stack</strong>
            </li>
            <li>
              <span>Availability</span>
              <strong>Open to interviews</strong>
            </li>
            <li>
              <span>Specialty</span>
              <strong>AI-enhanced product delivery</strong>
            </li>
          </ul>
          <div className="chip-wrap">
            <span className="chip">Remote Friendly</span>
            <span className="chip">Based in Illinois</span>
            <span className="chip">CS Graduate 2025</span>
          </div>
        </aside>
      </section>

      {/* Bio */}
      <SectionReveal>
        <section id="bio" className="section">
          <h2 className="section-heading">Who I Am</h2>
          <div className="bio-panel">
            <p>
              Recent CS graduate from the Chicago suburbs, currently transitioning from
              operations into full-time engineering. I don&apos;t just study AI — I build
              with it: automation dashboards, personal AI assistants, and modular agent
              workflows using platforms like OpenClaw and modern AI frameworks. My approach
              combines engineering rigor with user-centric design; I build tools people
              actually want to use.
            </p>
            <p>
              My focus is the intersection of AI orchestration and practical data
              integration. I&apos;ve implemented RAG architectures for context-aware
              responses, designed multi-agent systems for reusability and scalability, and
              built telemetry and observability tooling in my own projects. Whether it&apos;s
              prompt engineering, data retrieval pipelines, or extending agent functionality
              through custom actions, I prioritize modularity, security, and clean
              architecture from the start.
            </p>
            <p>
              What sets me apart is relentless curiosity and the ability to adapt fast.
              I&apos;m not waiting for the future — I&apos;m building it now. I stay current
              through hands-on experimentation and thrive in collaborative environments
              where I can contribute from day one while continuing to grow.
            </p>
          </div>
        </section>
      </SectionReveal>

      {/* Work */}
      <SectionReveal delay={50}>
        <section id="work" className="section">
          <h2 className="section-heading">Featured Work</h2>
          <p className="section-title">Projects that combine UI craft and system thinking.</p>
          <p className="section-copy">
            I focus on products that are useful now and extensible later, with
            clear architecture and tight feedback loops.
          </p>
          <div className="work-grid">
            {featuredProjects.map((project, index) => (
              <CardReveal key={project.title} delay={index * 120}>
                <Link href={project.href} className="project-card">
                  <p className="panel-label">Project 0{index + 1}</p>
                  <h3 className="mt-3 text-xl leading-tight">{project.title}</h3>
                  <p className="mt-3">{project.summary}</p>
                  <div className="chip-wrap">
                    {project.tech.map((item) => (
                      <span key={item} className="chip">{item}</span>
                    ))}
                  </div>
                  <p className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--accent)]">
                    Explore
                    <ArrowUpRight size={14} />
                  </p>
                </Link>
              </CardReveal>
            ))}
          </div>
        </section>
      </SectionReveal>

      {/* Approach */}
      <SectionReveal delay={50}>
        <section id="about" className="section">
          <h2 className="section-heading">Approach</h2>
          <p className="section-title">Execution style built for fast teams.</p>
          <div className="about-grid">
            <article className="about-panel">
              <p className="panel-label">How I work</p>
              <ul className="principles">
                {principles.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.detail}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="stack-panel">
              <p className="panel-label">Core Stack</p>
              <h3 className="mt-3 text-2xl leading-tight">
                Modern frontend with reliable delivery tooling.
              </h3>
              <div className="stack-lines">
                {stack.map((item) => (
                  <span key={item} className="stack-token">{item}</span>
                ))}
              </div>
              <p className="mt-4 inline-flex items-center gap-2 text-[var(--accent-warm)]">
                <Sparkles size={16} />
                AI-assisted workflows integrated by default.
              </p>
            </article>
          </div>
        </section>
      </SectionReveal>

      {/* Contact */}
      <SectionReveal delay={50}>
        <section id="contact" className="section">
          <h2 className="section-heading">Contact</h2>
          <p className="section-title">Let&apos;s build something useful.</p>
          <div className="contact-panel">
            <p>
              Looking for a developer who can ship polished interfaces and keep
              momentum high from week one.
            </p>
            <div className="contact-actions">
              <a href="mailto:joedituri@outlook.com" className="pill-button inline-flex items-center gap-2">
                <Mail size={15} />
                <span>Email</span>
              </a>
              <a
                href="https://github.com/joedituri"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-link inline-flex items-center gap-2"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </SectionReveal>

    </main>
  );
}
