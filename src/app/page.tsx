import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { tools, categories, getToolsByCategory, searchTools } from '@/lib/tools';

const featured = tools.filter((t) => t.featured).slice(0, 3);

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-28">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-50 via-white to-white dark:from-violet-950/20 dark:via-black dark:to-black" />
          <div className="mx-auto max-w-4xl px-4 pb-12 pt-16 text-center sm:px-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-300">
              {tools.length}+ Tools · Updated weekly · 100% Free
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
              Find the best{' '}
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                AI tools
              </span>{' '}
              — fast
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              A hand-curated directory of AI tools across {categories.length - 1} categories.
              Compare features, check pricing, and pick the right one in minutes.
            </p>
          </div>
        </section>

        {/* Featured */}
        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">Featured this week</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

        {/* All tools — dynamic via searchParams */}
        <Suspense fallback={<div className="py-20 text-center text-zinc-500">Loading tools…</div>}>
          <DynamicTools />
        </Suspense>

        {/* SEO text block */}
        <section className="mx-auto max-w-3xl px-4 pb-16 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:px-6">
          <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            What is AI Tools Hub?
          </h2>
          <p>
            AI Tools Hub is a free directory that helps you discover AI tools for chat, image generation, video,
            coding, writing, productivity, marketing, and more. Every listing includes a short review, pricing info
            (free, freemium, or paid), and a direct link to the official site. New tools are added regularly so you
            always have access to the latest and most useful AI software.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Separate client to access searchParams without blocking static prerender
async function DynamicTools() {
  const { category, search, pricing } = await new URLSearchParams(
    typeof window !== 'undefined' ? (window.location.search as string) : ''
  ).entries().reduce((acc: Record<string, string>, [k, v]) => { acc[k] = v; return acc; }, {}) as Record<string, string>;

  // Fallback: read from headers if in SSR context (this is a simple approach)
  let filtered = [...tools];
  if (search) {
    filtered = searchTools(search);
  }
  if (category && category !== 'All') {
    filtered = getToolsByCategory(category);
  }
  if (pricing) {
    filtered = filtered.filter((t) => t.pricing === pricing);
  }

  const qs = new URLSearchParams();
  if (category && category !== 'All') qs.set('category', category);
  if (search) qs.set('search', search);
  if (pricing) qs.set('pricing', pricing);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {(category || search) && (
        <p className="mb-6 text-zinc-600 dark:text-zinc-400">
          Found <span className="font-semibold text-zinc-900 dark:text-zinc-50">{filtered.length}</span>{' '}
          results
          {search && <> for &ldquo;<span className="italic">{search}</span>&rdquo;</>}
          {category && <> in <span className="italic">{category}</span></>}
        </p>
      )}

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-300 p-16 text-center dark:border-zinc-700">
          <p className="text-lg font-medium text-zinc-900 dark:text-zinc-50">No tools found</p>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Try a different search or category.</p>
        </div>
      ) : (
        <>
          {!search && !category && (
            <div className="mb-8 flex flex-wrap gap-2">
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mr-2 self-center">Filter:</span>
              {categories.slice(1).map((cat) => (
                <a
                  key={cat}
                  href={`/?${qs.toString() ? qs + '&' : ''}category=${encodeURIComponent(cat)}`}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    category === cat
                      ? 'bg-violet-600 text-white'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
                  }`}
                >
                  {cat}
                </a>
              ))}
            </div>
          )}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}