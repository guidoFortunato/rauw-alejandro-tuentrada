import { CardsPreventa } from "./CardsPreventa";

import { useEffect } from "react";
import { useState } from "react";
import { BotonComprar, BotonProximamente } from "./";

const dateToCompare = new Date("2023-06-29T13:00:00");

export const Preventas = () => {
  const [button, setButton] = useState(Date.now() >= dateToCompare.getTime());
  // const [button, setButton] = useState(false);
  const [, setTime] = useState(Date.now());

  // console.log(button)

  useEffect(() => {
    // console.log('inicia uef')
    if (button) return;
    // const interval = setInterval(checkDate, 5000);
    const interval = setInterval(() => {
      if (Date.now() < dateToCompare.getTime()) {
        setTime(Date.now());
        // console.log('setTime')
      } else {
        setButton(true);
        // console.log('setButton')
        clearInterval(interval);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // const checkDate = () => {
  //   if (Date.now() < dateToCompare.getTime()) {
  //     setTime(Date.now());
  //     console.log('setTime')
  //   }
  //   else {
  //     setButton(true);
  //     console.log('setButton')
  //   }
  // };

  return (
   
    <section className="text-white container mx-auto">
   
   <div>
    <img src="https://www.tuentrada.com/concierto/rauw-alejandro/5.png" alt="" />
  </div>
       {button ? (
             <BotonComprar />
            ) : (
             <BotonProximamente />
            )}
      <section className="text-white p-5 container mx-auto py-10 lg:py-20">
  
        <h3 className="text-2xl lg:text-4xl pb-10">Ubicaciones y precios</h3>
        <div className="my-5">
          <div className="space-y-10">
            <p className=" text-base lg:text-lg">
              ¡No te pierdas el concierto de Rauw Alejandro en Parque Sarmiento
              el 4 de noviembre de 2023! <br />
              La venta general estará disponible próximamente.
            </p>
            <hr />
           
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 justify-items-center xl:gap-0 text-center my-10">
  <div className="flex flex-col justify-between">
    <CardsPreventa text={"Campo VIP"}  precio={"$46.000"}/>
    <CardsPreventa text={"Campo GENERAL"} precio={"$36.800"}/>
  </div>
  <div> 
    <img className="h-[450px]" src="https://www.tuentrada.com/concierto/rauw-alejandro/plano-2.png" alt="" />
  </div>
</div>

      </section>
    </section>
  );
};
