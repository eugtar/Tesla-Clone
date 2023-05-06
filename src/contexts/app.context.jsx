import React, { useContext, useState } from "react";
import { navLinks, languages } from "../data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLanguagesMenu, setShowLanguagesMenu] = useState(false);
  const [defaultLanguage, setDefaultLanguage] = useState({
    country: "United States",
    language: "English",
  });

  const value = {
    showMenu,
    setShowMenu,
    showLanguagesMenu,
    setShowLanguagesMenu,
    navLinks,
    defaultLanguage,
    setDefaultLanguage,
    languages,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom Hook
export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
