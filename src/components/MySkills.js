import React from 'react'
import { DiHtml5, DiJavascript1, DiReact, DiCss3 } from 'react-icons/di'
function MySkills() {
  return (
    <div className="h-[38rem] bg-table bg-cover  bg-blend-darken bg-dark_effect flex flex-col justify-center items-center">
        <span className="text-white text-4xl font-black tracking-widest">
          MY SKILLS
        </span>
        <span className="text-white text-2xl font-light tracking-widest mt-10">
          Web Developer
        </span>
        <div className="flex flex-row text-center mt-12 gap-10">
          <div className="h-60 w-60 rounded-full border-4 border-theme_red bg-main_white flex justify-center items-center flex-col gap-y-3 hover:border-8 transition-all">
            <span
              href="#"
              className="text-4xl bg-theme_red inline-block rounded-full p-3 hover:opacity-80 transition-all hover:text-blue-600"
            >
              <DiJavascript1 className="text-white" />
            </span>
            <h3 className="text-black font-black text-2xl -tracking-wide">
              JavaScript
            </h3>
          </div>
          <div className="h-60 w-60 rounded-full border-4 border-theme_red bg-main_white flex justify-center items-center flex-col gap-y-3 hover:border-8 transition-all">
            <span
              href="#"
              className="text-4xl bg-theme_red inline-block rounded-full p-3 hover:opacity-80 transition-all hover:text-blue-600"
            >
              <DiReact className="text-white" />
            </span>
            <h3 className="text-black font-black text-2xl -tracking-wide">
              ReactJS
            </h3>
          </div>
          <div className="h-60 w-60 rounded-full border-4 border-theme_red bg-main_white flex justify-center items-center flex-col gap-y-3 hover:border-8 transition-all">
            <span
              href="#"
              className="text-4xl bg-theme_red inline-block rounded-full p-3 hover:opacity-80 transition-all hover:text-blue-600"
            >
              <DiHtml5 className="text-white" />
            </span>
            <h3 className="text-black font-black text-2xl -tracking-wide">
              HTML5
            </h3>
          </div>
          <div className="h-60 w-60 rounded-full border-4 border-theme_red bg-main_white flex justify-center items-center flex-col gap-y-3 hover:border-8 transition-all">
            <span
              href="#"
              className="text-4xl bg-theme_red inline-block rounded-full p-3 hover:opacity-80 transition-all hover:text-blue-600"
            >
              <DiCss3 className="text-white" />
            </span>
            <h3 className="text-black font-black text-2xl -tracking-wide">
              CSS3
            </h3>
          </div>
        </div>
      </div>
  )
}

export default MySkills