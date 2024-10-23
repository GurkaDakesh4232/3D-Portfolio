import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa"; // Import the download icon
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Inline style for white text by default
  const whiteTextStyle = {
    color: "white",
  };

  // Inline style for gradient text on hover
  const gradientTextOnHoverStyle = {
    background: "linear-gradient(90deg, #00ff00, #ff00ff)", // Green to pink gradient
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  // Keyframes for the shake animation
  const shakeAnimation = `
    @keyframes shake {
      0% { transform: translate(1px, 1px) rotate(0deg); }
      10% { transform: translate(-1px, -2px) rotate(-1deg); }
      20% { transform: translate(-3px, 0px) rotate(1deg); }
      30% { transform: translate(3px, 2px) rotate(0deg); }
      40% { transform: translate(1px, -1px) rotate(1deg); }
      50% { transform: translate(-1px, 2px) rotate(-1deg); }
      60% { transform: translate(-3px, 1px) rotate(0deg); }
      70% { transform: translate(3px, 1px) rotate(-1deg); }
      80% { transform: translate(-1px, -1px) rotate(1deg); }
      90% { transform: translate(1px, 2px) rotate(0deg); }
      100% { transform: translate(1px, -2px) rotate(-1deg); }
    }
  `;

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <style>{shakeAnimation}</style> {/* Adding shake animation */}
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            D@kesh &nbsp;
            <span className="sm:block hidden"> | Web Developer</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-6">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="text-[18px] font-medium cursor-pointer"
              style={active === nav.title ? whiteTextStyle : whiteTextStyle} // Default white text
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(90deg, #00ff00, #ff00ff)";
                e.currentTarget.style.WebkitBackgroundClip = "text";
                e.currentTarget.style.color = "transparent";
                e.currentTarget.style.animation = "shake 0.5s";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.animation = "";
              }}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="font-poppins font-medium cursor-pointer text-[16px]"
                  style={whiteTextStyle} // Default white text
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(90deg, #00ff00, #ff00ff)";
                    e.currentTarget.style.WebkitBackgroundClip = "text";
                    e.currentTarget.style.color = "transparent";
                    e.currentTarget.style.animation = "shake 0.5s";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.animation = "";
                  }}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              {/* Download Button in Mobile Menu */}
              <li
                className="font-poppins font-medium cursor-pointer text-[16px] text-white flex items-center"
                onClick={() => setToggle(!toggle)}
              >
                <a href="/path-to-your-file.pdf" download>
                  <FaDownload className="mr-2" /> Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
