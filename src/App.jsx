import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { NavBar, Header, MainEvent } from "./components/";
import { getEnvVariables } from "./helpers/getEnvVariables";
import { getAccess } from "./helpers/getAccess";
import { MainNoEvent } from "./components/MainNoEvent";
import { NavBarNoEvent } from "./components/NavBarNoEvent";

const { VITE_GA } = getEnvVariables();

function App() {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const { data } = await getAccess();
  //       console.log(data);
  //     } catch (error) {
  //       throw new Error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getData();
  // }, []);

  useEffect(() => {
    ReactGA.initialize(VITE_GA);
    ReactGA.send({
      hitType: "pageview",
      page: document.location.pathname,
      title: "Home Page",
    });
  }, []);

  // if (isLoading) return <span></span>;

  if (error === true) {
    return (
      <>
        <NavBarNoEvent />
        <MainNoEvent />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <Header />
      <MainEvent />
    </>
  );
}

export default App;
