// import { CardsPreventa } from "./CardsPreventa";

import { useEffect } from "react";
import { useState } from "react";
import { BotonComprar, BotonProximamente } from "./";
// import { ServerDate } from "../helpers/ServerDate";

const dateToCompare = new Date("Thu Jun 29 2023 15:39:00 GMT-0300");

export const Preventas = () => {
  const [button, setButton] = useState(false);
  // const [button, setButton] = useState(false);
  const [, setTime] = useState(Date.now());

//  console.log({server:ServerDate()})

  // console.log(button)

  // useEffect(() => {
  //   const getData = async()=>{
  //     const res = await fetch("http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires")
  //     const {datetime} = await res.json()
  //     return datetime
  //   }
   
  //   getData()
  // }, []);

  // useEffect(() => {
    
   
  //     fetch("http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires")
  //     .then( res => res.json() )
  //     .then( data => console.log(data) )
  //     .catch( e => console.log(e))
 
   


  // }, []);

  // useEffect(() => {

   
 
  //   if (button) return;

  //   const interval = setInterval(() => {
  //     if (Date.now() < dateToCompare.getTime()) {
  //       setTime(Date.now());
    
  //     } else {
  //       setButton(true);
    
  //       clearInterval(interval);
  //     }
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
    
  
  //   const interval = setInterval(async () => {
  //     try {
  //       const response = await fetch("http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires");
  //       const data = await response.json();
  
    
  //       console.log(data.datetime)
  //       const currentDateTime = new Date(data.datetime);
  
  //       if (currentDateTime.getTime() < dateToCompare.getTime()) {
  //         setTime(currentDateTime.getTime());
  //         console.log('set time')
  //       } else {
  //         setButton(true);
  //         console.log('set button')
  //         clearInterval(interval)
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

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
        <h3 className="text-2xl lg:text-4xl pb-10">Venta general</h3>
        <div className="my-5">
          <div className="space-y-10">
            <p className=" text-base lg:text-lg">
              ¡No te pierdas el concierto de Rauw Alejandro en Parque Sarmiento
              el 4 de noviembre de 2023! <br />
              La venta general estará disponible próximamente. <br /> ¡Prepárate
              para disfrutar de su increíble música y asegura tu lugar en este
              evento imperdible!
            </p>
            <hr />
            {button ? (
             <BotonComprar />
            ) : (
             <BotonProximamente />
            )}
          </div>
        </div>
      </section>
    </section>
  );
};
