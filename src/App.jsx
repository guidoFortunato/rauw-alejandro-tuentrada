import { useEffect } from "react";
import ReactGA from "react-ga4";
import { getEnvVariables } from "./helpers/getEnvVariables";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";

const { VITE_GA } = getEnvVariables();

function App() {
  useEffect(() => {
    ReactGA.initialize(VITE_GA);
    ReactGA.send({
      hitType: "pageview",
      page: document.location.pathname,
      title: "Home Page",
    });
  }, []);

  // if (isLoading) return <span></span>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={ <Navigate to="/" /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
