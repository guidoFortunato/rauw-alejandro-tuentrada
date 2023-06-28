// import { CardsPreventa } from "./CardsPreventa";

import { useEffect } from "react";
import { useState } from "react";

const dateToCompare = new Date("2023-06-27T19:59:00");

export const Preventas = () => {
  const [button, setButton] = useState(false);
  const [ , setTime] = useState(Date.now());


  useEffect(() => {
    if (button) return;
    const interval = setInterval(checkDate, 5000);
    return () => clearInterval(interval);
  }, []);


  const checkDate = () => {
    if (Date.now() < dateToCompare.getTime()) {
      setTime(Date.now());
      console.log('setTime')
    }
    else {
      setButton(true);
      console.log('setButton')
    }
  };


  return (
    // <section className="text-white p-5 container mx-auto py-10 lg:py-40">
    //   <div className="grid grid-cols-1 justify-items-center">
    //     <h3 className="text-2xl sm:text-3xl lg:text-5xl mb-2">Preventas exclusivas</h3>
    //     {/* <p className="text-lg lg:text-4xl">Adquirí tus entradas en tuentrada.com</p> */}
    //   </div>
    //   <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 justify-items-center xl:gap-0 text-center my-10">
    //     <CardsPreventa text={"Spotify"} src={"https://picsum.photos/500/400"} />
    //     <CardsPreventa text={"Galicia"} src={"https://picsum.photos/500/400"} />
    //     <CardsPreventa
    //       text={"Venta general"}
    //       src={"https://picsum.photos/500/400"}
    //     />
    //   </div>
    // </section>
    <section className="text-white container mx-auto">
      <section className="text-white p-5 container mx-auto py-10 lg:py-20">
        <h3 className="text-2xl lg:text-4xl pb-10">Preventa Exclusiva</h3>
        <div className="my-5">
          <div className="space-y-10">
            <img
              className="w-4/6 sm:w-3/12"
              src="https://tuentrada.com/concierto/rauw-alejandro/Spotify_Logo_RGB_White.png"
              alt=""
            />
            <hr />
            <button
              className={`${
                button && "hidden"
              } bg-white text-black font-bold py-2 px-6 rounded-full`}
            >
              Próximamente
            </button>
            <button
              className={`${
                !button && "hidden"
              } bg-white text-black font-bold py-2 px-6 rounded-full`}
            >
              Comprar
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};
