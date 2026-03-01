import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export async function generateStaticParams() {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  return files.map((f) => ({ slug: f.replace(".mdx", "") }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return {};
  const { data } = matter(fs.readFileSync(filePath, "utf-8"));
  return { title: `${data.title} | Giuseppe Di Turi` };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) notFound();

  const { content, data } = matter(fs.readFileSync(filePath, "utf-8"));

  return (
    <main className="site-shell">
      <div className="hireme-titlebar">
        <span>{data.title}</span>
      </div>

      <nav className="hireme-nav">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 terminal-meta hover:text-[var(--foreground)] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </nav>

      <article className="blog-post">
        <header className="blog-post-header">
          <time className="panel-label">{String(data.date)}</time>
          <h1 className="blog-post-title">{data.title}</h1>
          {data.excerpt && <p className="blog-post-excerpt">{data.excerpt}</p>}
        </header>
        <div className="blog-content">
          <MDXRemote source={content} />
        </div>
      </article>
    </main>
  );
}
