import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { BsMailbox, BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
function Blog() {
  const blog_data = [
    {
      id: 1,
      title: "MY FIRST BLOG POSTING TITLE",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      id: 2,
      title: "MY SECOND BLOG POSTING TITLE",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      id: 3,
      title: "MY THIRD BLOG POSTING TITLE",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
  ];
  return (
    <>
      <Header />
      <div className="bg-main_white">
        <div className="w-9/12 mx-auto flex flex-col justify-center items-center py-16">
          <h1 className="text-4xl font-black tracking-widest">
            MY BLOG POSTING
          </h1>
          <h2 className="text-xl font-medium tracking-wider mt-9">
            Junior Front End Developer
          </h2>
          {blog_data.map((value) => (
            <div className=" bg-portfolio w-full bg-dark_effect bg-cover bg-blend-darken flex flex-col justify-center items-center mt-16 py-14">
              <h1 className="text-4xl font-black tracking-widest text-white">
                {value.title}
              </h1>
              <p className="text-xl font-light tracking-wider mt-9 text-white w-3/4 text-justify blog-description">
                {value.body}
              </p>
              <button className=" px-16 py-5 mt-9 border-theme_red border  transition-all hover:opacity-80">
                <a href="#" className="text-theme_red text-lg  font-medium">
                  Read More
                </a>
              </button>
              <div className="mt-12">
                <a
                  href="#"
                  className="text-2xl bg-main_white inline-block rounded-full p-3 hover:opacity-80 transition-all hover:text-blue-600"
                >
                  <BsMailbox />
                </a>
                <a
                  href="#"
                  className="text-2xl bg-main_white inline-block rounded-full p-3 ml-4 hover:opacity-80 transition-all hover:text-blue-600"
                >
                  <BsLinkedin />
                </a>
                <a
                  href="#"
                  className="text-2xl bg-main_white inline-block rounded-full p-3 ml-4 hover:opacity-80 transition-all hover:text-blue-600"
                >
                  <BsGithub />
                </a>
                <a
                  href="#"
                  className="text-2xl bg-main_white inline-block rounded-full p-3 ml-4 hover:opacity-80 transition-all hover:text-blue-600"
                >
                  <BsTwitter />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
