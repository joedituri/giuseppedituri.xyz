import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const skills = {
  Programming: ["JavaScript", "Java", "Python", "HTML5+CSS"],
  "Tools & Frameworks": ["Git", "React", "Express", "Docker", "Bootstrap", "Jira", "Selenium", "Copilot", "Claude Cowork"],
  Methodologies: ["Agile/Scrum", "Test Automation"],
  "Other Languages": ["Fluent Italian", "Basic Spanish"],
};

export default function Resume() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <header className="mb-10">
          <Link href="/" className="inline-flex items-center gap-2 terminal-meta hover:text-[var(--foreground)]">
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Link>
          <h1 className="pixel-heading mt-6 text-xl sm:text-2xl">Resume</h1>
        </header>

        <div className="space-y-6">

          {/* Experience */}
          <section className="terminal-panel">
            <h2 className="pixel-heading text-[0.7rem] sm:text-[0.78rem]">Experience</h2>

            <div className="mt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="pixel-heading text-[0.62rem] sm:text-[0.7rem]">Parts Counter Advisor</h3>
                <span className="terminal-meta text-xs">Addison, IL · Aug 2019 – Present</span>
              </div>
              <p className="terminal-meta mt-1">Altorfer CATERPILLAR Inc.</p>
              <ul className="terminal-list terminal-meta mt-3">
                <li>Assist customers in person, over the phone, and via email with parts orders and technical support</li>
                <li>Research parts availability and pricing using internal systems such as SIS, DBS, and Microsoft 365</li>
              </ul>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="pixel-heading text-[0.62rem] sm:text-[0.7rem]">Marketing Associate</h3>
                <span className="terminal-meta text-xs">Bloomingdale, IL · May 2015 – Nov 2018</span>
              </div>
              <p className="terminal-meta mt-1">Mo Marketing Inc.</p>
              <ul className="terminal-list terminal-meta mt-3">
                <li>Built excellent rapport with clients through high-quality customer service and conflict management</li>
                <li>Communicated regularly with clients to ensure a smooth and efficient design and delivery process</li>
                <li>Independently designed mixed media products (flyers, postcards, online advertising) using Photoshop, InDesign, and Microsoft Office</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="terminal-panel">
            <h2 className="pixel-heading text-[0.7rem] sm:text-[0.78rem]">Education</h2>
            <div className="mt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="pixel-heading text-[0.62rem] sm:text-[0.7rem]">Bachelor of Science – Computer Science</h3>
                <span className="terminal-meta text-xs">Chicago, IL · 2025</span>
              </div>
              <p className="terminal-meta mt-1">DePaul University · GPA: 3.3</p>
            </div>
          </section>

          {/* Projects */}
          <section className="terminal-panel">
            <h2 className="pixel-heading text-[0.7rem] sm:text-[0.78rem]">Projects</h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="pixel-heading text-[0.62rem] sm:text-[0.7rem]">OpenClaw – Personal AI Assistant</h3>
                <ul className="terminal-list terminal-meta mt-3">
                  <li>Designed and implemented agent-based workflows simulating enterprise copilots using LLM APIs and structured pipelines</li>
                  <li>Built multiagentic AI agent structure capable of interacting with external APIs, retrieving data, and executing multi-step tasks</li>
                </ul>
              </div>

              <div>
                <h3 className="pixel-heading text-[0.62rem] sm:text-[0.7rem]">TextbookXChange – Testing Manager</h3>
                <ul className="terminal-list terminal-meta mt-3">
                  <li>Built a student-focused marketplace to swap, sell, or buy textbooks directly from peers</li>
                  <li>Collaborated with a cross-functional team in an agile environment</li>
                  <li>Built backend for price comparison tool integrating external data into datasets</li>
                  <li>Participated in version control workflows and CI/CD-style collaboration using Git</li>
                  <li>Applied best security practices for data handling, input validation, and API usage</li>
                </ul>
              </div>

              <div>
                <h3 className="pixel-heading text-[0.62rem] sm:text-[0.7rem]">Stock Exchange Simulator</h3>
                <ul className="terminal-list terminal-meta mt-3">
                  <li>Designed and implemented an object-oriented system to simulate market transactions and data flows</li>
                </ul>
              </div>

              <div>
                <h3 className="pixel-heading text-[0.62rem] sm:text-[0.7rem]">LaiCha Bakehouse</h3>
                <ul className="terminal-list terminal-meta mt-3">
                  <li>Built a full-stack food ordering web application using React and Node.js, featuring dynamic menu management, image-served backend assets, and RESTful API integration</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="terminal-panel">
            <h2 className="pixel-heading text-[0.7rem] sm:text-[0.78rem]">Skills</h2>
            <div className="mt-6 space-y-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="panel-label mb-2">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="terminal-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Links */}
          <section className="terminal-panel">
            <h2 className="pixel-heading text-[0.7rem] sm:text-[0.78rem]">Links</h2>
            <ul className="terminal-list mt-5">
              <li>
                <a href="https://github.com/joedituri" target="_blank" rel="noopener noreferrer">
                  github.com/joedituri
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/gdituri" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/gdituri
                </a>
              </li>
            </ul>
          </section>

        </div>
      </main>
    </div>
  );
}
