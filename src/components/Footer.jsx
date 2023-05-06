import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <nav
        aria-label="footer-navigation"
        className="flex justify-center items-center flex-col lg:flex-row text-xs text-center text-black/60 font-semibold py-6 snap-start cursor-default"
      >
        <NavLink to="https://www.tesla.com/about" className="px-2">
          Tesla © 2023
        </NavLink>
        <NavLink to="https://www.tesla.com/legal" className="px-2">
          Privacy & Legal
        </NavLink>
        <NavLink to="https://www.tesla.com/vin-recall-search" className="px-2">
          Vehicle Recalls
        </NavLink>
        <NavLink to="https://www.tesla.com/contact" className="px-2">
          Contact
        </NavLink>
        <NavLink to="https://www.tesla.com/careers" className="px-2">
          Careers
        </NavLink>
        <NavLink to="https://www.tesla.com/blog" className="px-2">
          News
        </NavLink>
        <NavLink to="https://engage.tesla.com/" className="px-2">
          Engage
        </NavLink>
        <NavLink to="https://www.tesla.com/findus/list" className="px-2">
          Locations
        </NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
