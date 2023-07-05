import { MainNoEvent } from "./MainNoEvent";
import { NavBar } from "./NavBar";
import { Header } from "./Header";
import { MainEvent } from "./MainEvent";
import { useEffect, useState } from "react";
import { getAccess } from "../helpers/getAccess";

export const Home = () => {
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const getData = async () => {
//       setIsLoading(true);
//       try {
//         const { data } = await getAccess();
//         console.log(data);
//       } catch (error) {
//         throw new Error(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     getData();
//   }, []);
    if (error === true) {
        return (
          <>
            <NavBar />
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
