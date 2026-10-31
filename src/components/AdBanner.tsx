'use client';

import { useState, useEffect } from 'react';

// Don't show ad again after user closes it
const AD_STORAGE_KEY = 'ai-tools-ad-dismissed';
// Show after scrolling 400px
const SCROLL_THRESHOLD = 400;

export default function AdBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissible, setDismissible] = useState(false);

  useEffect(() => {
    // Check if user already dismissed
    const dismissed = localStorage.getItem(AD_STORAGE_KEY);
    if (dismissed) return;

    // Show after scroll
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD && !visible) {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible]);

  const dismiss = () => {
    setVisible(false);
    setDismissible(true);
    localStorage.setItem(AD_STORAGE_KEY, '1');
  };

  if (!visible || dismissible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-sm">
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        {/* Ad Content */}
        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
              AI
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-0.5">Sponsored</p>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm truncate">
                Master AI in 2026
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
                Free course: Learn prompt engineering, automation & building with AI. Join 50k+ students.
              </p>
            </div>
          </div>

          <button className="mt-3 w-full py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-lg transition-colors">
            Learn More
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={dismiss}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Close ad"
        >
          <svg className="h-4 w-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}