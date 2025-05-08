/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1A2330',
        'medium-blue': '#2F405D',
        'light-blue': '#3B82F6',
        'dark-bg': '#121212',
        'dark-gray': '#15161A',
        'medium-gray': '#1B1E21',
        'charcoal': '#111827',
        'steel': '#374151',
        'silver': '#6B7280',
        'light-gray': '#F1F5F9'
      },
    },
  },
  plugins: [],
}