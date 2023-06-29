import { useEffect, useState } from "react";
import { CardsPreventa } from "./CardsPreventa";
import { CardsHorario } from "./CardsHorario";
import { BotonComprar, BotonProximamente } from "./";

const dateToCompare = new Date("Thu Jun 29 2023 18:00:00 GMT-0300");

export const Preventas = () => {
  const [button, setButton] = useState(false);
  const [ time , setTime] = useState(new Date());
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  console.log({time})
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires");
        const data = await response.json();
        const currentDateTime = new Date(data.datetime);
        console.log({currentDateTime})
  
        if (currentDateTime.getTime() < dateToCompare.getTime()) {
          setTime(currentDateTime);
          console.log('set time')
        } else {
          setButton(true);
          console.log('set button')
        }
      } catch (error) {
        throw new Error(error);
      }
    }
    getData()
  }, []);


  // useEffect(() => {
  //   if (button) return;

  //   const interval = setInterval(() => {
  //     if (time.getTime() < dateToCompare.getTime()) {
  //       calculateCountdown();
  //     } else {
  //       setButton(true);
  //       clearInterval(interval);
  //     }
  //   });

  //   return () => clearInterval(interval);
  // }, []);

  // const calculateCountdown = () => {
  //   const difference = dateToCompare.getTime() - time.getTime();
  
  //   const days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
  //   const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
  //   const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
  //   const seconds = Math.floor((difference % (1000 * 60)) / 1000).toString().padStart(2, '0');
  
  //   setCountdown({ days, hours, minutes, seconds });
  // };

  return (
    <section className="text-white container mx-auto pt-10">
     
     <div className="bg-contador pt-7">
     <h3 className="text-2xl lg:text-4xl text-center">Próximamente</h3>
      <div className="flex pt-5 justify-center px-2" >
        <CardsHorario texto={"Día"} text={countdown.days} />
        <CardsHorario texto={"Hora"} text={countdown.hours} />
        <CardsHorario texto={"Min"} text={countdown.minutes} />
        <CardsHorario texto={"Seg"} text={countdown.seconds} />
      </div>
     </div>
      {/* {button ? (
        <BotonComprar />
      ) : (
        <BotonProximamente />
      )} */}
      <section className="text-white p-5 container mx-auto py-10 lg:py-10">
    
        <h3 className="text-2xl lg:text-4xl py-10">Ubicaciones y precios</h3>
        <div className="my-5">
          <div className="space-y-10">
            <p className="text-base lg:text-lg">
              ¡No te pierdas el concierto de Rauw Alejandro en Parque Sarmiento el 4 de noviembre de 2023! <br />
              La venta general estará disponible próximamente.
            </p>
            <hr />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 justify-items-center xl:gap-0 text-center my-10">
          <div className="flex flex-col justify-between">
            <CardsPreventa text={"Campo VIP"} precio={"$46.000"} />
            <CardsPreventa text={"Campo GENERAL"} precio={"$36.800"} />
          </div>
          <div>
            <img className="h-[470px]" src="https://www.tuentrada.com/concierto/rauw-alejandro/plano-2.png" alt="" />
          </div>
        </div>
      </section>
    </section>
  );
};