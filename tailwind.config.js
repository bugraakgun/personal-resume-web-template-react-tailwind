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
        main_white:'#f8f8f8',
        theme_red:'#e65550',
        dark_effect:'#000000b3',
      },
      backgroundImage:{
        'profile':"url('img/profile.jpg')",
        'blog':"url('img/blog.jpg')",
        'portfolio':"url('img/portfolio.jpg')",
        'contact':"url('img/contact.jpg')",
        'about-section':"url('img/about-section.jpg')",
        'table':"url('img/table.jpg')",
        'experience_1':"url('img/experience.jpg')"
      },
      boxShadow:{
        'main':'0 0 70px 2px rgba(0,0,0,0.91) inset',
      },
    },
  },
  plugins: [],
}
