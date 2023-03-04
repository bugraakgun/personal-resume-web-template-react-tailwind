import { NavLink } from "react-router-dom";
import { BsMailbox, BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
function Header() {
  const logo = "<BugraAkgun.com.tr />";
  return (
    <>
      <div className="h-[40rem] bg-about-section bg-cover ">
        <nav className="h-24 flex justify-between items-center text-center px-20">
          <div>
            <NavLink
              className="text-2xl font-medium hover:opacity-80 transition-all text-theme_red"
              to="/"
            >
              {logo}
            </NavLink>
          </div>
          <div className=" grid gap-x-6 grid-flow-col text-white">
            <NavLink
              className="hover:opacity-80 transition-all capitalize text-2xl font-medium"
              to="/profile"
            >
              Profile
            </NavLink>

            <NavLink
              className=" hover:border-b-2 hover:opacity-80 transition-all capitalize text-2xl font-medium"
              to="/blog"
            >
              Blog
            </NavLink>

            <NavLink
              className="hover:border-b-2 hover:opacity-80 transition-all capitalize text-2xl font-medium"
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </div>
        </nav>
        <div className="grid grid-cols-2">
          <div className="col-start-2 pt-40">
            <span className="text-3xl font-normal text-white tracking-wide block">
              Hi, I' Am
            </span>
            <span className="text-4xl font-black text-white tracking-widest block mt-3">
              MUHAMMED BUGRA AKGÜN
            </span>
            <span className="text-xl font-normal text-theme_red tracking-wide block mt-3">
              Junior Front End Developer
            </span>
            <div className="mt-12">
              <a
                href="mailto:bugraakgun8@gmail.com"
                className="text-3xl bg-main_white inline-block rounded-full p-3 hover:opacity-80 transition-all hover:text-theme_red"
              >
                <BsMailbox />
              </a>
              <a
                href="https://linkedin.com/in/mbugra"
                className="text-3xl bg-main_white inline-block rounded-full p-3 ml-4 hover:opacity-80 transition-all hover:text-theme_red"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/bugraakgun"
                className="text-3xl bg-main_white inline-block rounded-full p-3 ml-4 hover:opacity-80 transition-all hover:text-theme_red"
              >
                <BsGithub />
              </a>
              <a
                href="#"
                className="text-3xl bg-main_white inline-block rounded-full p-3 ml-4 hover:opacity-80 transition-all hover:text-theme_red"
              >
                <BsTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
