import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

function getPosts() {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const { data } = matter(fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8"));
    return { slug, title: data.title, date: String(data.date), excerpt: data.excerpt };
  });
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export default function Blog() {
  const posts = getPosts();

  return (
    <main className="site-shell">
      <div className="hireme-titlebar">
        <span>Giuseppe Di Turi – Blog</span>
      </div>

      <nav className="hireme-nav">
        <Link
          href="/"
          className="inline-flex items-center gap-2 terminal-meta hover:text-[var(--foreground)] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
      </nav>

      <header style={{ marginTop: "1.4rem" }}>
        <h1 className="section-heading">Blog</h1>
        <p className="section-title" style={{ marginTop: "0.5rem" }}>
          Notes, builds, and experiments.
        </p>
      </header>

      <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        {posts.map((post) => (
          <article key={post.slug} className="terminal-panel">
            <Link href={`/blog/${post.slug}`} className="block">
              <p className="terminal-prompt mb-3">{`~/blog/${post.slug}.mdx`}</p>
              <h2 className="pixel-heading text-[0.78rem] sm:text-sm">{post.title}</h2>
              <time className="terminal-meta mt-3 block">{post.date}</time>
              {post.excerpt && <p className="terminal-meta mt-2">{post.excerpt}</p>}
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
