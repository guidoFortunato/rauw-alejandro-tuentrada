import { useState } from "react";
import { NavBar } from "./NavBar";

export const Header = () => {
  const [boton, setBoton] = useState(false);

  setTimeout(() => {
    setBoton(true)
  }, 3000);

  // const [showButton, setShowButton] = useState(false);
  // const targetDate = new Date('2023-06-27');

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const currentDate = new Date();

  //     if (currentDate >= targetDate) {
  //       setShowButton(true);
  //       clearInterval(interval);
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);


  return (
    <>
      <header
        className={`bg-1 bg-no-repeat bg-cover bg-end z-40 relative`}
      
        // style={{
        //   backgroundImage: `url("https://www.tuentrada.com/concierto/rauw-alejandro/banner.png"})`,
        // }}
      >
        <img className="sm:block md:hidden" src="https://tuentrada.com/concierto/rauw-alejandro/Rauw Alejandro 900x800 (1).jpg" alt="" />
        <img className="hidden md:block w-screen lg:hidden"  src="https://tuentrada.com/concierto/rauw-alejandro/Rauw Alejandro 800x400.jpg" alt="" />
        <img className="hidden  lg:block w-screen"  src="https://tuentrada.com/concierto/rauw-alejandro/Rauw Alejandro 1920x710 (2).webp" alt="" />
      
          
        {/* <div
          className={`min-h-[50vh] flex justify-center items-start flex-col `}
          >
          
        </div> */}
      

       
        <div className="w-full absolute bottom-10">
          <button
            type="button"
            className={`${ boton && "hidden" } py-2.5 h-16 px-5 mr-2 mb-2 text-base font-medium  focus:outline-none text-white rounded-full border border-gray-200 bg-transparent mt-3`}
          >
            Próximamente
          </button>
          <button
            type="button"
            className={`${ !boton && "hidden" } py-2.5 h-16 px-5 mr-2 mb-2 text-base font-medium  focus:outline-none text-white rounded-full border border-gray-200 bg-transparent mt-3`}
          >
            Comprar
          </button>
        </div>
      
      </header>
    </>
  );
};