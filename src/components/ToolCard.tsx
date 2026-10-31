'use client';

import { Tool } from '@/lib/tools';

interface ToolCardProps {
  tool: Tool;
}

const categoryColors: Record<string, string> = {
  'Chat & LLM': 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
  'Image Generation': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
  'Video & Audio': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  'Code & Dev': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  'Writing & Content': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  'Productivity': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  'Data & Analysis': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
  'Design & Creative': 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300',
  'Marketing & SEO': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  'Business & Finance': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
  'Education & Learning': 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
};

const pricingColors: Record<string, string> = {
  Free: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  Freemium: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  Paid: 'bg-zinc-100 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300',
};

export default function ToolCard({ tool }: ToolCardProps) {
  const CategoryBadge = categoryColors[tool.category] || 'bg-zinc-100 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300';
  const PricingBadge = pricingColors[tool.pricing] || 'bg-zinc-100 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300';

  return (
    <article
      className="group relative flex flex-col h-full bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 transition-all duration-300 hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-xl hover:shadow-violet-500/10"
    >
      {/* Featured badge */}
      {tool.featured && (
        <span className="absolute -top-3 -right-3 px-2 py-0.5 text-xs font-semibold text-white bg-gradient-to-r from-violet-500 to-pink-500 rounded-full">
          Featured
        </span>
      )}

      {/* Logo/Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
        {tool.logo ? (
          <img src={tool.logo} alt="" className="h-8 w-8 object-contain" loading="lazy" />
        ) : (
          <div className="text-2xl" aria-hidden="true">🤖</div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            {tool.name}
          </h3>
        </div>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2 flex-1">
          {tool.tagline}
        </p>

        {/* Category & Pricing */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${CategoryBadge}`}>
            {tool.category}
          </span>
          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${PricingBadge}`}>
            {tool.pricing}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4" aria-label="Tags">
          {tool.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded-full"
            >
              {tag}
            </span>
          ))}
          {tool.tags.length > 4 && (
            <span className="px-2 py-0.5 text-xs text-zinc-400 dark:text-zinc-500">
              +{tool.tags.length - 4}
            </span>
          )}
        </div>

        {/* Action */}
        <a
          href={tool.affiliateUrl || tool.website}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
          aria-label={`Visit ${tool.name}`}
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Visit Tool
        </a>
      </div>
    </article>
  );
}