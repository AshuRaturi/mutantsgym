import React, { useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Navlinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false); // 👈 outside click pe close
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu, setShowMenu]);

  return (
    <div
      ref={menuRef}
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-dark dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div>
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Navlinks.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block mb-5"
                  onClick={() => setShowMenu(false)} // 👈 item click pe close
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <h2>
          Made with ❤️ by <a href="#">Ashutosh Raturi</a>
        </h2>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
