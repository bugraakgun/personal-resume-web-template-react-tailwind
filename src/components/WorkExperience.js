import React from 'react'

function WorkExperience() {
  return (
    <div className="flex flex-col justify-center items-center bg-main_white">
        <div className="mt-28 text-center">
          <h2 className="text-black font-black text-3xl tracking-widest">
            WORK EXPERIENCE
          </h2>
          <span className=" font-light text-xl tracking-widest my-11 inline-block">
            Web & Embedded Aplication
          </span>
        </div>
        <div className="w-2/3 text-center grid gap-y-28">
          <div className="bg-experience_1 bg-dark_effect bg-blend-darken">
            <h3 className="text-white text-3xl tracking-widest font-black pt-24">
              ORDULU TEKNOLOJI
            </h3>
            <span className="text-theme_red text-xl pt-6 inline-block  font-normal">
              FEBRUARY 2023 -
            </span>
            <p className="px-48 text-white pt-5 pb-20">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
          <div className="bg-experience_1 bg-dark_effect bg-blend-darken">
            <h3 className="text-white text-3xl tracking-widest font-black pt-24">
              ENETKI SAVUNMA
            </h3>
            <span className="text-theme_red text-xl pt-6 inline-block  font-normal">
              JANUARY 2022 - FEBRUARY 2023
            </span>
            <p className="px-48 text-white pt-5 pb-20">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
  )
}

export default WorkExperience