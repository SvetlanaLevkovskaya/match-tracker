import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    outlineWidth: false,
    outlineOffset: false,
    outlineColor: false,
    outlineStyle: false,
  },
  theme: {
    colors: {
      black: '#06080C',
      gray: {
        dark: '#191B20',
        1: '#B4B5B6',
        2: '#0B0E12',
        3: '#101318',
        4: '#787878',
        5: '#141A21',
        6: '#68696A',
      },
      white: '#F0F0F0',
      orange: '#EB6402',
      green: {
        glow: '#43AD28',
        light: '#4ebf2c',
        dark: '#246e2f',
      },
      red: {
        glow: '#EB0237',
        light: '#A01131',
        dark: '#701238',
      },
      transparent: colors.transparent,
    },
    screens: {
      tb: '768px',
      ds: '1024px',
      xl: '1440px',
    },
    fontSize: {
      s_h1: ['2.625rem', { fontWeight: '500', lineHeight: '105%' }], //42
      s_h2: ['2rem', { fontWeight: '500', lineHeight: '120%' }], //32
      s_h3: ['1.75rem', { fontWeight: '500', lineHeight: '120%' }], //28
      s_h4: ['1.5rem', { fontWeight: '500', lineHeight: '120%' }], //24
      s_h5: ['1.25rem', { fontWeight: '600', lineHeight: '120%' }], //20
      s_sh1: ['1.125rem', { fontWeight: '600', lineHeight: '120%' }], //18
      s_sh2: ['1.125rem', { fontWeight: '500', lineHeight: '120%' }], //18
      s_body: ['1rem', { fontWeight: '600', lineHeight: '120%' }], //16
      s_text: ['0.875rem', { fontWeight: '600', lineHeight: '120%' }], //14
      s_caption: ['0.75rem', { fontWeight: '500', lineHeight: '120%' }], //12
      s_button: ['0.625rem', { fontWeight: '600', lineHeight: '120%' }], //10
      s_captionM: ['0.625rem', { fontWeight: '500', lineHeight: '120%' }], //10
      s_captionS: ['0.5rem', { fontWeight: '500', lineHeight: '120%' }], //8
      s_captionXS: ['0.438rem', { fontWeight: '500', lineHeight: '120%' }], //7
      s_detail: ['0.375rem', { fontWeight: '500', lineHeight: '120%' }], //6
    },
    extend: {
      spacing: {
        auto: 'auto',
      },
      transitionProperty: {
        all2:
          'color, background-color, border-color, border-radius, text-decoration-color, fill, stroke, opacity, ' +
          'box-shadow, transform, filter, backdrop-filter, width, height, margin, padding',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
      keyframes: {
        scaleIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        fade: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        countUp: {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
      animation: {
        scaleIn: 'scaleIn .5s ease-in-out',
        fade: 'fade .5s ease-in-out',
        countUp: 'countUp 0.9s ease-in-out',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.font-inter': {
          fontFamily: 'var(--font-inter)',
        },
        '.outline-border-none': {
          outline: 'none',
          border: 'none',
        },
        '.flex-center-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
        },

        '.flex-center-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        '.all2': {
          transition: 'all .2s ease-in-out',
        },
      })
    }),
  ],
}
export default config
