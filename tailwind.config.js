/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Lato:[ 'Lato', 'sans-serif'],
      },
      colors:{
        footer:'#0e0e0e',
        main_icons:'#e65550',
        theme_red:'#e65550',
      },
      backgroundImage:{
        'profile':"url('img/profile.jpg')",
        'blog':"url('img/blog.jpg')",
        'portfolio':"url('img/portfolio.jpg')",
        'contact':"url('img/contact.jpg')",
        'about-section':"url('img/about-section.jpg')"
      },
      boxShadow:{
        'main':'0 0 70px 2px rgba(0,0,0,0.91) inset',
      },
    },
  },
  plugins: [],
}
