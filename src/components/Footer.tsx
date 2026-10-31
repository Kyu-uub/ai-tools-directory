import Link from 'next/link';

export default function Footer() {
  const currentYear = 2026;

  const footerLinks = {
    Discover: [
      { label: 'All Tools', href: '/?category=All' },
      { label: 'Featured Tools', href: '/?featured=true' },
      { label: 'Free Tools', href: '/?pricing=Free' },
      { label: 'New Additions', href: '/?sort=new' },
    ],
    Categories: [
      { label: 'Chat & LLM', href: '/?category=Chat%20%26%20LLM' },
      { label: 'Image Generation', href: '/?category=Image%20Generation' },
      { label: 'Code & Dev', href: '/?category=Code%20%26%20Dev' },
      { label: 'Video & Audio', href: '/?category=Video%20%26%20Audio' },
      { label: 'Writing & Content', href: '/?category=Writing%20%26%20Content' },
      { label: 'Productivity', href: '/?category=Productivity' },
    ],
    Resources: [
      { label: 'Submit a Tool', href: '/submit' },
      { label: 'Affiliate Program', href: '/affiliate' },
      { label: 'Blog', href: '/blog' },
      { label: 'Newsletter', href: '/newsletter' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Disclaimer', href: '/disclaimer' },
    ],
  };

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-zinc-900 dark:text-zinc-100" aria-label="AI Tools Hub Home">
              <svg className="h-8 w-8 text-violet-600 dark:text-violet-400" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="8" className="fill-violet-600 dark:fill-violet-400" />
                <path d="M8 12h16M8 16h12M8 20h8" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span>AI Tools Hub</span>
            </Link>
            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed max-w-xs">
              Discover the best AI tools for every use case. Curated, categorized, and updated daily. Free to browse, monetized through affiliate partnerships.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors" aria-label="Follow on Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors" aria-label="GitHub">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a href="mailto:hello@aitoolshub.example" className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors" aria-label="Email">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Discover</h3>
                <ul className="mt-4 space-y-3" role="list">
                  {footerLinks.Discover.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors text-sm">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Categories</h3>
                <ul className="mt-4 space-y-3" role="list">
                  {footerLinks.Categories.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors text-sm">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Resources</h3>
                <ul className="mt-4 space-y-3" role="list">
                  {footerLinks.Resources.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors text-sm">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Legal</h3>
                <ul className="mt-4 space-y-3" role="list">
                  {footerLinks.Legal.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors text-sm">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <p className="text-center text-zinc-500 dark:text-zinc-400 text-sm">
            &copy; {currentYear} AI Tools Hub. All rights reserved. Built with Next.js & deployed on Vercel for free.
          </p>
          <p className="text-center text-zinc-500 dark:text-zinc-400 text-sm mt-1">
            Some links are affiliate links. We may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}