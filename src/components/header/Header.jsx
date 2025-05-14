import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTv } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { FiMenu, FiX, FiSun, FiUser } from "react-icons/fi";
import logo_img from "@/assets/LOGOTYPEBILETICK.svg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home", Icon: FaTv },
    { to: "/movies", label: "Movies", Icon: MdLocalMovies },
    { to: "/search", label: "Search", Icon: IoSearchOutline },
    { to: "/saved", label: "Saved", Icon: CiBookmark },
  ];

  return (
    <header className="left-0 top-0 w-full h-[100px] bg-black text-white z-50 pt-[15px]">
      <div className="container mx-auto flex items-center justify-between px-5">
        <img src={logo_img} alt="Logo" className="h-[50px]" />

        <nav className="hidden lg:flex flex-row gap-[50px]">
          {links.map(({ to, label, Icon }) => (
            <NavLink key={to} className="group block p-3 rounded-md" to={to}>
              <div className="w-[30px] h-[50px] flex flex-col items-center justify-center group">
                <Icon
                  style={{ width: "30px", height: "30px" }}
                  className="text-gray-300 group-hover:text-red-700"
                />
                <h1 className="text-gray-300 group-hover:text-red-700">
                  {label}
                </h1>
              </div>
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-2 cursor-pointer hover:text-red-700">
            <FiSun size={24}/>
          </div>
          <button className="w-[150px] h-[50px] bg-red-700 rounded-[15px]">
            Sign Up
          </button>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-red-700"
          >
            {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-gray-800 text-white p-5 lg:hidden z-50">
          {links.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              className="flex items-center gap-2 text-lg py-2 hover:text-red-700"
              onClick={() => setIsOpen(false)}
            >
              <Icon size={20} />
              {label}
            </NavLink>
          ))}

          <div className="border-t border-gray-600 mt-3 pt-3">
            <div className="flex items-center gap-2 py-2 hover:text-red-700 cursor-pointer">
              <FiSun size={20} />
              <span>Light Mode</span>
            </div>
            <div className="flex items-center gap-2 py-2 hover:text-red-700 cursor-pointer">
              <FiUser size={20} />
              <span>Sign Up</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
