/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        /* Custom */
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        cyan: {
            "50": "var(--color-cyan-50)",
            "100": "var(--color-cyan-100)",
            "200": "var(--color-cyan-200)",
            "300": "var(--color-cyan-300)",
            "400": "var(--color-cyan-400)",
            "500": "var(--color-cyan-500)",
            "600": "var(--color-cyan-600)",
            "700": "var(--color-cyan-700)",
            "800": "var(--color-cyan-800)",
            "900": "var(--color-cyan-900)"
        },
        emerald: {
            "50": "var(--color-emerald-50)",
            "100": "var(--color-emerald-100)",
            "200": "var(--color-emerald-200)",
            "300": "var(--color-emerald-300)",
            "400": "var(--color-emerald-400)",
            "500": "var(--color-emerald-500)",
            "600": "var(--color-emerald-600)",
            "700": "var(--color-emerald-700)",
            "800": "var(--color-emerald-800)",
            "900": "var(--color-emerald-900)"
        },
        fuchsia: {
            "50": "var(--color-fuchsia-50)",
            "100": "var(--color-fuchsia-100)",
            "200": "var(--color-fuchsia-200)",
            "300": "var(--color-fuchsia-300)",
            "400": "var(--color-fuchsia-400)",
            "500": "var(--color-fuchsia-500)",
            "600": "var(--color-fuchsia-600)",
            "700": "var(--color-fuchsia-700)",
            "800": "var(--color-fuchsia-800)",
            "900": "var(--color-fuchsia-900)"
        },
        gray: {
            "50": "var(--color-gray-50)",
            "100": "var(--color-gray-100)",
            "200": "var(--color-gray-200)",
            "300": "var(--color-gray-300)",
            "400": "var(--color-gray-400)",
            "500": "var(--color-gray-500)",
            "600": "var(--color-gray-600)",
            "700": "var(--color-gray-700)",
            "800": "var(--color-gray-800)",
            "900": "var(--color-gray-900)"
        },
        green: {
            "50": "var(--color-green-50)",
            "100": "var(--color-green-100)",
            "200": "var(--color-green-200)",
            "300": "var(--color-green-300)",
            "400": "var(--color-green-400)",
            "500": "var(--color-green-500)",
            "600": "var(--color-green-600)",
            "700": "var(--color-green-700)",
            "800": "var(--color-green-800)",
            "900": "var(--color-green-900)"
        },
        indigo: {
            "50": "var(--color-indigo-50)",
            "100": "var(--color-indigo-100)",
            "200": "var(--color-indigo-200)",
            "300": "var(--color-indigo-300)",
            "400": "var(--color-indigo-400)",
            "500": "var(--color-indigo-500)",
            "600": "var(--color-indigo-600)",
            "700": "var(--color-indigo-700)",
            "800": "var(--color-indigo-800)",
            "900": "var(--color-indigo-900)"
        },
        orange: {
            "50": "var(--color-orange-50)",
            "100": "var(--color-orange-100)",
            "200": "var(--color-orange-200)",
            "300": "var(--color-orange-300)",
            "400": "var(--color-orange-400)",
            "500": "var(--color-orange-500)",
            "600": "var(--color-orange-600)",
            "700": "var(--color-orange-700)",
            "800": "var(--color-orange-800)",
            "900": "var(--color-orange-900)"
        },
        pink: {
            "50": "var(--color-pink-50)",
            "100": "var(--color-pink-100)",
            "200": "var(--color-pink-200)",
            "300": "var(--color-pink-300)",
            "400": "var(--color-pink-400)",
            "500": "var(--color-pink-500)",
            "600": "var(--color-pink-600)",
            "700": "var(--color-pink-700)",
            "800": "var(--color-pink-800)",
            "900": "var(--color-pink-900)"
        },
        purple: {
            "50": "var(--color-purple-50)",
            "100": "var(--color-purple-100)",
            "200": "var(--color-purple-200)",
            "300": "var(--color-purple-300)",
            "400": "var(--color-purple-400)",
            "500": "var(--color-purple-500)",
            "600": "var(--color-purple-600)",
            "700": "var(--color-purple-700)",
            "800": "var(--color-purple-800)",
            "900": "var(--color-purple-900)"
        },
        red: {
            "50": "var(--color-red-50)",
            "100": "var(--color-red-100)",
            "200": "var(--color-red-200)",
            "300": "var(--color-red-300)",
            "400": "var(--color-red-400)",
            "500": "var(--color-red-500)",
            "600": "var(--color-red-600)",
            "700": "var(--color-red-700)",
            "800": "var(--color-red-800)",
            "900": "var(--color-red-900)"
        },
        rose: {
            "50": "var(--color-rose-50)",
            "100": "var(--color-rose-100)",
            "200": "var(--color-rose-200)",
            "300": "var(--color-rose-300)",
            "400": "var(--color-rose-400)",
            "500": "var(--color-rose-500)",
            "600": "var(--color-rose-600)",
            "700": "var(--color-rose-700)",
            "800": "var(--color-rose-800)",
            "900": "var(--color-rose-900)"
        },
        sky: {
            "50": "var(--color-sky-50)",
            "100": "var(--color-sky-100)",
            "200": "var(--color-sky-200)",
            "300": "var(--color-sky-300)",
            "400": "var(--color-sky-400)",
            "500": "var(--color-sky-500)",
            "600": "var(--color-sky-600)",
            "700": "var(--color-sky-700)",
            "800": "var(--color-sky-800)",
            "900": "var(--color-sky-900)"
        },
        slate: {
            "50": "var(--color-slate-50)",
            "100": "var(--color-slate-100)",
            "200": "var(--color-slate-200)",
            "300": "var(--color-slate-300)",
            "400": "var(--color-slate-400)",
            "500": "var(--color-slate-500)",
            "600": "var(--color-slate-600)",
            "700": "var(--color-slate-700)",
            "800": "var(--color-slate-800)",
            "900": "var(--color-slate-900)"
        },
        teal: {
            "50": "var(--color-teal-50)",
            "100": "var(--color-teal-100)",
            "200": "var(--color-teal-200)",
            "300": "var(--color-teal-300)",
            "400": "var(--color-teal-400)",
            "500": "var(--color-teal-500)",
            "600": "var(--color-teal-600)",
            "700": "var(--color-teal-700)",
            "800": "var(--color-teal-800)",
            "900": "var(--color-teal-900)"
        },
        violet: {
            "50": "var(--color-violet-50)",
            "100": "var(--color-violet-100)",
            "200": "var(--color-violet-200)",
            "300": "var(--color-violet-300)",
            "400": "var(--color-violet-400)",
            "500": "var(--color-violet-500)",
            "600": "var(--color-violet-600)",
            "700": "var(--color-violet-700)",
            "800": "var(--color-violet-800)",
            "900": "var(--color-violet-900)"
        },
        yellow: {
            "50": "var(--color-yellow-50)",
            "100": "var(--color-yellow-100)",
            "200": "var(--color-yellow-200)",
            "300": "var(--color-yellow-300)",
            "400": "var(--color-yellow-400)",
            "500": "var(--color-yellow-500)",
            "600": "var(--color-yellow-600)",
            "700": "var(--color-yellow-700)",
            "800": "var(--color-yellow-800)",
            "900": "var(--color-yellow-900)"
        },
        zinc: {
            "50": "var(--color-zinc-50)",
            "100": "var(--color-zinc-100)",
            "200": "var(--color-zinc-200)",
            "300": "var(--color-zinc-300)",
            "400": "var(--color-zinc-400)",
            "500": "var(--color-zinc-500)",
            "600": "var(--color-zinc-600)",
            "700": "var(--color-zinc-700)",
            "800": "var(--color-zinc-800)",
            "900": "var(--color-zinc-900)"
        }
      } 
    },
  },
  plugins: [],
}

