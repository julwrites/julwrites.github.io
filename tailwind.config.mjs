/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--font-color)',
            '--tw-prose-headings': 'var(--font-color)',
            '--tw-prose-lead': 'var(--font-color)',
            '--tw-prose-links': 'var(--accent-color)',
            '--tw-prose-bold': 'var(--font-color)',
            '--tw-prose-counters': 'var(--font-color)',
            '--tw-prose-bullets': 'var(--font-color)',
            '--tw-prose-hr': 'var(--border-color)',
            '--tw-prose-quotes': 'var(--font-color)',
            '--tw-prose-quote-borders': 'var(--accent-color)',
            '--tw-prose-captions': 'var(--disabled-font-color)',
            '--tw-prose-code': 'var(--font-color)',
            '--tw-prose-pre-code': 'var(--font-color)',
            '--tw-prose-pre-bg': 'rgba(0, 0, 0, 0.3)',
            '--tw-prose-th-borders': 'var(--border-color)',
            '--tw-prose-td-borders': 'var(--border-color)',
            '--tw-prose-invert-body': 'var(--font-color)',
            '--tw-prose-invert-headings': 'var(--font-color)',
            '--tw-prose-invert-lead': 'var(--font-color)',
            '--tw-prose-invert-links': 'var(--accent-color)',
            '--tw-prose-invert-bold': 'var(--font-color)',
            '--tw-prose-invert-counters': 'var(--font-color)',
            '--tw-prose-invert-bullets': 'var(--font-color)',
            '--tw-prose-invert-hr': 'var(--border-color)',
            '--tw-prose-invert-quotes': 'var(--font-color)',
            '--tw-prose-invert-quote-borders': 'var(--accent-color)',
            '--tw-prose-invert-captions': 'var(--disabled-font-color)',
            '--tw-prose-invert-code': 'var(--font-color)',
            '--tw-prose-invert-pre-code': 'var(--font-color)',
            '--tw-prose-invert-pre-bg': 'rgba(0, 0, 0, 0.3)',
            '--tw-prose-invert-th-borders': 'var(--border-color)',
            '--tw-prose-invert-td-borders': 'var(--border-color)',
            fontFamily: "'Fira Sans', sans-serif",
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: "'Outfit', sans-serif",
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
  // Make sure Tailwind processes all CSS files
  safelist: [],
}
