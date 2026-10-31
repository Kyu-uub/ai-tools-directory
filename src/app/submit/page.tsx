import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Submit an AI Tool | AI Tools Hub',
  description: 'Built an AI tool? Get it listed on AI Tools Hub and reach thousands of users looking for free AI software.',
};

export default function SubmitPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-20 pt-28 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Submit a Tool
        </h1>
        <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
          Have an AI tool we should know about? Fill out the form below and we&apos;ll review it within a few days. Listings are free.
        </p>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="mt-10 space-y-6 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 sm:p-8"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="tool-name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Tool name *
              </label>
              <input
                id="tool-name"
                name="tool_name"
                required
                className="mt-2 block w-full rounded-lg border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 dark:border-zinc-700 dark:focus:border-zinc-50"
                placeholder="e.g. ChatGPT"
              />
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Website URL *
              </label>
              <input
                id="website"
                name="website"
                type="url"
                required
                className="mt-2 block w-full rounded-lg border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 dark:border-zinc-700 dark:focus:border-zinc-50"
                placeholder="https://..."
              />
            </div>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Category *
            </label>
            <select
              id="category"
              name="category"
              required
              className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-zinc-50"
            >
              <option value="">Select a category…</option>
              <option>Chat &amp; LLM</option>
              <option>Image Generation</option>
              <option>Video &amp; Audio</option>
              <option>Code &amp; Dev</option>
              <option>Writing &amp; Content</option>
              <option>Productivity</option>
              <option>Data &amp; Analysis</option>
              <option>Design &amp; Creative</option>
              <option>Marketing &amp; SEO</option>
              <option>Business &amp; Finance</option>
              <option>Education &amp; Learning</option>
            </select>
          </div>

          <div>
            <label htmlFor="pricing" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Pricing model *
            </label>
            <div className="mt-2 flex gap-4">
              {['Free', 'Freemium', 'Paid'].map((p) => (
                <label key={p} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <input type="radio" name="pricing" value={p} required className="accent-zinc-900 dark:accent-zinc-100" />
                  {p}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Short description *
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              className="mt-2 block w-full rounded-lg border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 dark:border-zinc-700 dark:focus:border-zinc-50"
              placeholder="What does the tool do and why is it useful?"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Your email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 block w-full rounded-lg border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 dark:border-zinc-700 dark:focus:border-zinc-50"
              placeholder="you@example.com"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300 sm:w-auto"
          >
            Submit for Review
          </button>

          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            By submitting you agree to our editorial review. We only list legitimate tools and may decline submissions without notice.
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
}