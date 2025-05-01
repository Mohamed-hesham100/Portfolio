import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/images/monkey.png"
import { Menu_Links } from "../utils/data";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="container lg:mx-auto lg:px-30 sticky top-5 z-10">
      <div className="flex items-center justify-between rounded-full bg-white/25 border border-[#fee6cc] backdrop-blur-[10px] m-5 p-3 md:p-0">
        {/* logo */}
        <div className="flex gap-3 items-center">
          <img src={logo} alt="logo" className="h-7 ml-6 -mb-1 rounded-xl" />
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4a44f] to-[#ac573f] font-semibold text-xl">
            Mohamed Hesham
          </h2>
        </div>

        {/* Hamburger Icon (Visible only on small screens) */}
        <button
          className="block md:hidden text-[#333] mr-6 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <HiOutlineX className="w-6 h-6" />
          ) : (
            <HiOutlineMenu className="w-6 h-6" />
          )}
        </button>

        {/* Navigation Links */}
        <ul className={`${isOpen ? "flex" : "hidden"} menu-wrapper`}>
          {Menu_Links.map((item) => (
            <li key={item.id}>
              <Link
                activeClass="active"
                to={item.to}
                smooth
                spy
                offset={item.offset}
                className="menu-item"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <button className="hidden md:block h-12 text-[15px] font-medium text-white btn-background rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105 ">
          Hire Me
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
