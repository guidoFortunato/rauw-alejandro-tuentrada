import ReactGA from "react-ga4";
import { NavBar, Header, MainEvent } from "./components/";
import { getEnvVariables } from "./helpers/getEnvVariables";
import { useEffect } from "react";

const { VITE_GA } = getEnvVariables();

function App() {

  useEffect(() => {
    ReactGA.initialize( VITE_GA );
    ReactGA.send({ hitType: "pageview", page: document.location.pathname, title: "Home Page" });
    
  }, []);

  return (
    <>
      <NavBar />
      <Header />
      <MainEvent />
    </>
  );
}

export default App;
