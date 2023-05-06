import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppContext } from "./contexts/app.context";
// import components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import pages
import Home from "./pages/Home";
import Model3 from "./pages/Model3";
import ModelS from "./pages/ModelS";
import ModelX from "./pages/ModelX";
import ModelY from "./pages/ModelY";
import Powerwall from "./pages/Powerwall";
import Shop from "./pages/Shop";
import SignIn from "./pages/SignIn";
import SolarPanels from "./pages/SolarPanels";
import SolarRoof from "./pages/SolarRoof";
import Error from "./pages/Error";

const App = () => {
  const { showMenu, setShowMenu, setShowLanguagesMenu } = useAppContext();
  return (
    <BrowserRouter>
      <header>
        <Navbar />
        <Sidebar />
      </header>
      <main
        className={showMenu ? "blur-sm ease-in-out duration-300" : ""}
        onClick={() => {
          if (showMenu) {
            setShowMenu(false);
            setShowLanguagesMenu(false);
          } else return;
        }}
      >
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="model3" Component={Model3} />
          <Route path="models" Component={ModelS} />
          <Route path="modelx" Component={ModelX} />
          <Route path="modely" Component={ModelY} />
          <Route path="powerwall" Component={Powerwall} />
          <Route path="shop" Component={Shop} />
          <Route path="signin" Component={SignIn} />
          <Route path="solarpanels" Component={SolarPanels} />
          <Route path="solarroof" Component={SolarRoof} />
          <Route path="*" Component={Error} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
