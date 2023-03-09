import React from 'react'

function AboutMe() {
  return (
    <div className=" bg-main_white flex flex-col justify-center items-center px-96 py-16">
        <h1 className="text-4xl font-black tracking-widest">ABOUT ME</h1>
        <h2 className="text-xl font-medium tracking-wider mt-9">
          Junior Front End Developer
        </h2>
        <p className="text-lg font-light tracking-wider mt-9">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className=" mt-16">
          <a
            href="#"
            className="text-theme_red text-lg  font-medium px-16 py-5 border-theme_red border  transition-all hover:opacity-80"
          >
            Hire Me
          </a>
          <a
            href="#"
            className="text-theme_red text-lg  font-medium px-16 py-5 border-theme_red border ml-10 transition-all hover:opacity-80"
          >
            Download Resume
          </a>
        </div>
      </div>
  )
}

export default AboutMe