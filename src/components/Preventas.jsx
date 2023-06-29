import { useEffect, useRef, useState } from "react";
import { CardsPreventa } from "./CardsPreventa";
import { CardsHorario } from "./CardsHorario";
import { BotonComprar } from "./";

const dateToCompare = new Date("Thu Jun 30 2023 12:00:00 GMT-0300");

export const Preventas = () => {
  const [button, setButton] = useState(false);
  const [time, setTime] = useState(false);
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  // const [difference, setDifference] = useState(0);
  let interval = useRef();
  // const [countdown, setCountdown] = useState({
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0,
  // });

  useEffect(() => {
    console.log('uef getData')
    const getData = async () => {
      try {
        const response = await fetch(
          "http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires"
        );
        const data = await response.json();
        const currentDateTime = new Date(data.datetime);
        setTime(currentDateTime);
        // console.log(dateToCompare.getTime() - currentDateTime.getTime())
        // setDifference(dateToCompare.getTime() - currentDateTime.getTime())
        // console.log({difference})
      } catch (error) {
        throw new Error(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if(!time) return
    console.log('uef startTimer')
    const intervalo = interval.current;
    startTimer();
    return () => clearInterval(intervalo);
  }, [time]);

  const startTimer = () => {
    console.log('funcion start timer')
    let newTime = time.getTime()
    interval = setInterval(() => {
      // console.log({newTime})
      // console.log({timeGetTime: time})
      // console.log({result: dateToCompare.getTime() - time.getTime()})
      const difference = dateToCompare.getTime() - newTime;
      // console.log(dateToCompare.getTime())
      // console.log(time.getTime())
      // console.log(difference)
      const dias = Math.floor(difference / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, "0");
      const horas = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
        .toString()
        .padStart(2, "0");
      const minutos = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0");
      const segundos = Math.floor((difference % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");
      
        
        if (difference < 0) {
          console.log({diferenciaMenosCero: difference})
          clearInterval(interval);
          setButton(true);
        } else {
        newTime = newTime + 1000
        // setDifference( difference - 1000 )
        // console.log({difference})
        setDays(dias);
        setHours(horas);
        setMinutes(minutos);
        setSeconds(segundos);
      }
    }, 1000);
  };

  // useEffect(() => {
  //   if (button) return;

  //   const interval = setInterval(() => {
  //     if (time.getTime() < dateToCompare.getTime()) {
  //       calculateCountdown();
  //     } else {
  //       setButton(true);
  //       clearInterval(interval);
  //     }
  //   },1000);

  //   return () => clearInterval(interval);
  // }, []);

  // const calculateCountdown = () => {
  //   const difference = dateToCompare.getTime() - time.getTime();

  //   const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  //     .toString()
  //     .padStart(2, "0");
  //   const hours = Math.floor(
  //     (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //   )
  //     .toString()
  //     .padStart(2, "0");
  //   const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  //     .toString()
  //     .padStart(2, "0");
  //   const seconds = Math.floor((difference % (1000 * 60)) / 1000)
  //     .toString()
  //     .padStart(2, "0");

  //   setCountdown({ days, hours, minutes, seconds });
  // };

  return (
    <section className="text-white container mx-auto pt-10">
      {!button ? (
        <>
          <div className="bg-contador pt-7">
            <h3 className="text-2xl lg:text-4xl text-center">Próximamente</h3>
            <div className="flex pt-5 justify-center px-2">
              <CardsHorario texto={"Día"} text={days} />
              <CardsHorario texto={"Hora"} text={hours} />
              <CardsHorario texto={"Min"} text={minutes} />
              <CardsHorario texto={"Seg"} text={seconds} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex pt-5 justify-center px-2">
            <BotonComprar />
          </div>
        </>
      )}
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
              ¡No te pierdas el concierto de Rauw Alejandro en Parque Sarmiento
              el 4 de noviembre de 2023! <br />
              La venta general estará disponible próximamente.
            </p>
            <hr className="border border-white  " />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center text-center my-10">
          <div className="flex flex-col justify-center px-1 lg:px-10 pt-10 ">
            <CardsPreventa text={"Campo VIP"} precio={"$46.000"} />
            <CardsPreventa text={"Campo GENERAL"} precio={"$36.800"} />
          </div>
          <div>
            <img
              className="h-[500px] px-1 lg:px-10"
              src="https://www.tuentrada.com/concierto/rauw-alejandro/plano-2.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </section>
  );
};
