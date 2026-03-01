import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "Git", "HTML/CSS", "SQL"];

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
          <section className="terminal-panel">
            <h2 className="pixel-heading text-[0.7rem] sm:text-[0.78rem]">Experience</h2>
            <div className="mt-6">
              <h3 className="pixel-heading text-[0.62rem] sm:text-[0.7rem]">Parts Counter Person</h3>
              <p className="terminal-meta mt-3">Caterpillar - Present</p>
              <ul className="terminal-list terminal-meta mt-3">
                <li>Union job in parts department</li>
                <li>Customer service and inventory management</li>
              </ul>
            </div>
          </section>

          <section className="terminal-panel">
            <h2 className="pixel-heading text-[0.7rem] sm:text-[0.78rem]">Education</h2>
            <div className="mt-6">
              <h3 className="pixel-heading text-[0.62rem] sm:text-[0.7rem]">
                Bachelor of Science, Computer Science
              </h3>
              <p className="terminal-meta mt-3">Graduated 2025</p>
            </div>
          </section>

          <section className="terminal-panel">
            <h2 className="pixel-heading text-[0.7rem] sm:text-[0.78rem]">Skills</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="terminal-tag">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="terminal-panel">
            <h2 className="pixel-heading text-[0.7rem] sm:text-[0.78rem]">Links</h2>
            <ul className="terminal-list mt-5">
              <li>
                <a href="https://github.com/joedituri" target="_blank" rel="noopener noreferrer">
                  github.com/joedituri
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
