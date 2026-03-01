import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const posts = [
  {
    slug: "hello-world",
    title: "Hello World",
    date: "2026-02-23",
    excerpt: "Starting my blogging journey.",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <header className="mb-10">
          <Link href="/" className="inline-flex items-center gap-2 terminal-meta hover:text-[var(--foreground)]">
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Link>
          <h1 className="pixel-heading mt-6 text-xl sm:text-2xl">Blog</h1>
          <p className="terminal-meta mt-4">Notes, builds, and experiments from the command line.</p>
        </header>

        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="terminal-panel">
              <Link href={`/blog/${post.slug}`} className="block">
                <p className="terminal-prompt mb-3">{`~/blog/${post.slug}.mdx`}</p>
                <h2 className="pixel-heading text-[0.78rem] sm:text-sm">{post.title}</h2>
                <time className="terminal-meta mt-4 block">{post.date}</time>
                <p className="terminal-meta mt-2">{post.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
