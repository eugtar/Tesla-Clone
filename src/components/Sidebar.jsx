import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/app.context";
// import components
import Languages from "./Languages";
// import icons
import { TfiClose } from "react-icons/tfi";
import { SlGlobe } from "react-icons/sl";
import { FiChevronLeft } from "react-icons/fi";

const Sidebar = () => {
  const {
    showMenu,
    setShowMenu,
    showLanguagesMenu,
    setShowLanguagesMenu,
    navLinks,
    defaultLanguage,
  } = useAppContext();

  return (
    <div
      className={`${
        !showMenu ? "hidden" : ""
      } bg-white fixed top-0 right-0 w-80 h-[100vh] overflow-y-scroll z-20 cursor-default`}
    >
      <div
        className={`flex ${
          showLanguagesMenu ? "justify-between" : "justify-end"
        } pr-8 pl-8 pt-8`}
      >
        {showLanguagesMenu && (
          <button
            type="button"
            className="flex justify-center items-center text-black text-center"
            onClick={() => setShowLanguagesMenu(false)}
          >
            <FiChevronLeft size={16} />
            <span className="text-base">Back</span>
          </button>
        )}
        <TfiClose
          size={28}
          className="rounded p-1 hover:bg-black/10 cursor-pointer ease-in-out duration-300"
          onClick={() => {
            setShowMenu(false);
            setShowLanguagesMenu(false);
          }}
        />
      </div>
      {showLanguagesMenu ? (
        <Languages />
      ) : (
        <ul className="pt-8 px-6 pb-20">
          {navLinks[2].map((link) => {
            return (
              <li
                key={link.label}
                className="py-3 pl-3 hover:rounded hover:bg-black/10 text-start ease-in-out duration-300"
              >
                <Link
                  to={link.url}
                  title={link.label}
                  onClick={() => setShowMenu(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li
            className="py-3 pl-3 hover:rounded hover:bg-black/10 text-start ease-in-out duration-300 cursor-pointer flex justify-start"
            onClick={() => setShowLanguagesMenu(true)}
          >
            <SlGlobe size={19} className="mr-3 mt-1" />
            <div className="w-full">
              <strong className="text-base text-black">
                {defaultLanguage.country}
              </strong>
              <p className="hover:underline decoration-2 underline-offset-4 ease duration-700 text-xs text-black/50">
                {defaultLanguage.language}
              </p>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
