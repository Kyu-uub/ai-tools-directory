import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { tools, getToolById, getToolsByCategory } from '@/lib/tools';

interface ToolPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return tools.map((tool) => ({ id: tool.id }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { id } = await params;
  const tool = getToolById(id);
  if (!tool) return { title: 'Tool not found' };
  return {
    title: `${tool.name} Review — Pricing, Features & Alternatives | AI Tools Hub`,
    description: tool.description.slice(0, 160),
    openGraph: {
      title: `${tool.name} — ${tool.tagline}`,
      description: tool.description,
    },
  };
}

const pricingStyles: Record<string, string> = {
  Free: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  Freemium: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  Paid: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
};

export default async function ToolPage({ params }: ToolPageProps) {
  const { id } = await params;
  const tool = getToolById(id);
  if (!tool) notFound();

  const related = getToolsByCategory(tool.category)
    .filter((t) => t.id !== tool.id)
    .slice(0, 3);

  // Affiliate redirect endpoint — swap `website` for `affiliateUrl` once you
  // join programs (PartnerStack, Impact, etc.) to start earning commissions.
  const visitUrl = tool.affiliateUrl ?? tool.website;

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 pt-28 pb-16 sm:px-6">
        <nav className="mb-6 text-sm text-zinc-500 dark:text-zinc-400" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100">Home</Link>
          <span className="mx-2">/</span>
          <Link href={`/?category=${encodeURIComponent(tool.category)}`} className="hover:text-zinc-900 dark:hover:text-zinc-100">
            {tool.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-900 dark:text-zinc-100">{tool.name}</span>
        </nav>

        <article>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              {tool.name}
            </h1>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${pricingStyles[tool.pricing]}`}>
              {tool.pricing}
            </span>
            {tool.featured && (
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                ★ Featured
              </span>
            )}
          </div>

          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">{tool.tagline}</p>

          <a
            href={visitUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Try {tool.name} Free
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <section className="prose mt-10 max-w-none">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">About {tool.name}</h2>
            <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">{tool.description}</p>

            <h2 className="mt-8 text-xl font-semibold text-zinc-900 dark:text-zinc-50">Details</h2>
            <dl className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
                <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500">Category</dt>
                <dd className="mt-1 font-medium text-zinc-900 dark:text-zinc-100">{tool.category}</dd>
              </div>
              <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
                <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500">Pricing</dt>
                <dd className="mt-1 font-medium text-zinc-900 dark:text-zinc-100">{tool.pricing}</dd>
              </div>
            </dl>

            <h2 className="mt-8 text-xl font-semibold text-zinc-900 dark:text-zinc-50">Tags</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {tool.tags.map((tag) => (
                <li key={tag}>
                  <Link
                    href={`/?search=${encodeURIComponent(tag)}`}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                  >
                    #{tag}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </article>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              More {tool.category} Tools
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <ToolCard key={t.id} tool={t} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}