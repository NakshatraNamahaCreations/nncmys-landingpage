import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B3E',
          50: '#EDF0F7',
          100: '#D4DAE9',
          900: '#0D1B3E',
          950: '#050810',
        },
        sky: {
          DEFAULT: '#29B6F6',
          light: '#4FC3F7',
          med: '#0288D1',
          pale: '#E1F5FE',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(13, 27, 62, 0.08)',
        'card-hover': '0 8px 32px rgba(13, 27, 62, 0.12)',
        'form': '0 20px 60px rgba(0, 0, 0, 0.25)',
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
