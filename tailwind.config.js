/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'coffee-main': '#f6e9cb', // メインの黄色カラー
        'coffee-accent': '#d9a62e', // テーマカラー
        'coffee-charcoal': '#2c3e50', // 炭の色
        'coffee-fire': '#ff6b35', // オレンジ系の火の色
        'coffee-ember': '#e55722', // 少し深いオレンジ
      },
    },
  },
  plugins: [],
}
