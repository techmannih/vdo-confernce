import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../img/meetings-software-1.jpg";
import "./Home.css";
export default function Home1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="">
      {/* Headers */}
      <div className="Header node ">
        <div className="navbar sm:flex sm:justify-between max-sm:flex-col max-sm:justify-start justify-between px-12 ">
          <div className="logo text-black-500 cursor-pointer max-sm:items-start">
            <strong className="text-3xl ">Zexo</strong>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M20.293 3.293a1 1 0 011.414 0l.001.001a1 1 0 010 1.414L5.414 21.01a1 1 0 01-1.414-1.414L20.293 3.293zM2.929 3.293a1 1 0 010-1.414L3.636.879a1 1 0 111.414 1.414L2.93 3.293zm18.384 0L22.12.879a1 1 0 111.415 1.414l-.707.707zM.879 22.121a1 1 0 001.414 0l.707-.708a1 1 0 10-1.414-1.414l-.707.708zM12 7a1 1 0 011 1v8a1 1 0 11-2 0V8a1 1 0 011-1zm1-4a1 1 0 100-2 1 1 0 000 2zm-2 0a1 1 0 100-2 1 1 0 000 2zm-2 0a1 1 0 100-2 1 1 0 000 2zm-2 0a1 1 0 100-2 1 1 0 000 2zm-2 0a1 1 0 100-2 1 1 0 000 2zM7.95 18.243l1.414 1.414 2.828-2.828-1.414-1.415-2.828 2.828zM19.657 6.536l1.414 1.415-2.828 2.828-1.414-1.414 2.828-2.829zM6.536 19.657l1.415 1.414-2.829 2.829-1.414-1.415 2.828-2.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm-1-4a1 1 0 100 2h18a1 1 0 100-2H2zm1 8a1 1 0 110 2h16a1 1 0 110-2H2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="">
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } sm:flex sm:items-center sm:w-auto `}
            >
              <div className="menu">
                <ul className="flex-col text-center ">
                  <li className="p-2   mx-2 sm:inline-block sm:mt-0  hover:text-sky-500 active:bg-sky-500/75 active:rounded-lg active:text-white active:text-sm cursor-pointer">
                    Home
                  </li>
                  <li className="p-2   mx-2 sm:inline-block sm:mt-0  hover:text-sky-500 active:bg-sky-500/75 active:rounded-lg active:text-white active:text-sm cursor-pointer">
                    About
                  </li>
                  <li className="p-2   mx-2 sm:inline-block sm:mt-0  hover:text-sky-500 active:bg-sky-500/75 active:rounded-lg active:text-white active:text-sm cursor-pointer">
                    Calling
                  </li>
                </ul>
              </div>
              <div className="btn max-sm:flex-col sm:flex">
                {/* <div className="">
                <button className="p-2   m-2 sm:inline-block sm:mt-0  text-sm bg-sky-500/75 text-white rounded-lg"><Link to="/SignIn"> Sign In</Link>
                 
                </button></div><div className="">
                <button className="p-2  m-2 sm:inline-block sm:mt-0  text-sm bg-sky-500/75 text-white rounded-lg"><Link to="/SignUp"> Sign Up For Free</Link>
                 
                </button></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /////Main */}
      <div className="main px-12 py-7 max-sm:pt-0">
        <div className="hero flex max-sm:flex-col">
          <div className="content sm:w-1/2">
            <div className="heading md:text-5xl px-2 sm:pt-16  max-sm:pt-8 text-start leading-18 font-normal max-sm:text-2xl text-3xl">
              <div>
                Schedule Your Meetings More Professionally & More Easily.
              </div>
            </div>
            <p className="md:text-sm text-xs  p-2 text-slate">
              Online Meeting can Save cost and Time. Online meetings makes it
              easier , for us to-conduct meetings from various places without
              the need to unequal{" "}
            </p>
            <button className="p-2 sm:m-3 max-sm:m-1 text-2xl font-medium text-sm bg-sky-500/75 text-white rounded-lg"><Link to="/Home">Start Free trial</Link>
              
            </button>
          </div>
          <div className="hero_logo bg-no-repeat bg-center ">
            <img src={Hero} alt="hero" className="bg-no-repeat bg-center  max-sm:pt-12" />
          </div>
        </div>
        <div className="py-14 text-center text-2xl">
          <strong className="">Join for the Video Conference calling</strong>
        </div>
      </div>

      {/* /////footer */}
      <div className="footer flex  justify-between px-12 max-sm:flex-col">
        <div className="copy flex justify-center">
          {" "}
          @ 2023
          <script>
            document.write(new Date().getFullYear())Zexo | All rights reserved
          </script>
        </div>
        <div className="creater text-xl font-bold text-sky-300 text-center">
          <strong>Made by | Techmannih</strong>
        </div>
        <div className="links flex"></div>
      </div>
    </div>
  );
}

