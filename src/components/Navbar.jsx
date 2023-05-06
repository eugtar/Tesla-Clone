import { NavLink } from "react-router-dom";
import { useAppContext } from "../contexts/app.context";

const Navbar = () => {
  const { showMenu, setShowMenu, setShowLanguagesMenu, navLinks } =
    useAppContext();

  return (
    <nav
      aria-label="primary-navigation"
      className={`${
        showMenu && "blur-sm ease-in-out duration-300"
      } flex justify-between fixed w-full items-center px-12 p-4 text-sm text-center font-semibold z-10`}
      onClick={() => {
        if (showMenu) {
          setShowMenu(false);
          setShowLanguagesMenu(false);
        } else return;
      }}
    >
      <div className="">
        <NavLink to="/">
          <img
            className="h-3"
            src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4="
            alt="Tesla logo"
          />
        </NavLink>
      </div>
      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          {navLinks[0].map((link) => {
            return (
              <li
                key={link.label}
                className="py-1 px-3 hover:rounded hover:bg-black/10 ease-in-out duration-500"
              >
                <NavLink to={link.url} title={link.label}>
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          {navLinks[1].map((link) => {
            return (
              <li
                key={link.label}
                className="py-1 px-3 hover:rounded hover:bg-black/10 ease-in-out duration-500"
              >
                <NavLink to={link.url} title={link.label}>
                  {link.label}
                </NavLink>
              </li>
            );
          })}
          <li className="py-1 px-3 hover:rounded hover:bg-black/10 ease-in-out duration-500">
            <button
              type="button"
              title="Menu"
              onClick={() => setShowMenu(true)}
            >
              Menu
            </button>
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <button
          type="button"
          title="Menu"
          className="py-1 px-3 bg-black/10 shadow-sm font-semibold text-sm rounded-md hover:bg-black/10"
          onClick={() => setShowMenu(true)}
        >
          Menu
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
