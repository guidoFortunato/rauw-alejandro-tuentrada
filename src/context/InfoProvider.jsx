import { createContext, useEffect, useState } from "react";
// import { getEnvVariables } from "../helpers/getEnvVariables";

// const { VITE_API_GEO } = getEnvVariables();

export const InfoContext = createContext();

const InfoProvider = (props) => {

//   const [isLoading, setIsLoading] = useState(true);
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     const getData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch(VITE_API_GEO);
//         if (!response.ok) {
//           setTime(new Date());
//           return;
//         }
//         const data = await response.json();
//         const currentDateTime = new Date(data.datetime);
//         setTime(currentDateTime);
//       } catch (error) {
//         setTime(new Date());
//         throw new Error(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     getData();
//   }, []);




  return (
    <InfoContext.Provider
      value={{
        // isLoading,
        // time
      }}
    >
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoProvider;