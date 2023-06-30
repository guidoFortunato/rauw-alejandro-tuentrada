import { useEffect, useRef, useState } from "react";
import { CardsPreventa } from "./CardsPreventa";
import { CardsHorario } from "./CardsHorario";
import { BotonComprar } from "./";
import { getEnvVariables } from "../helpers/getEnvVariables";

const { VITE_API_GEO, VITE_DATE } = getEnvVariables();

const dateToCompare = new Date(VITE_DATE);

export const Preventas = () => {
  const [button, setButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [time, setTime] = useState(false);
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  let interval = useRef();

  // console.log({ error });

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(VITE_API_GEO);
        // console.log({response})
        if (!response.ok) {
          setTime(new Date());
          return;
        }
        const data = await response.json();
        const currentDateTime = new Date(data.datetime);
        // console.log(currentDateTime)
        setTime(currentDateTime);
      } catch (error) {
        // setError(error);
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (!time) return;
    const intervalo = interval.current;
    startTimer();
    return () => clearInterval(intervalo);
  }, [time]);

  const startTimer = () => {
    let newTime = time.getTime();
    interval = setInterval(() => {
      const difference = dateToCompare.getTime() - newTime;
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
        clearInterval(interval);
        setButton(true);
      } else {
        newTime = newTime + 1000;
        setDays(dias);
        setHours(horas);
        setMinutes(minutos);
        setSeconds(segundos);
      }
    }, 1000);
  };

  if (isLoading) return <span></span>;

  // if (error !== null)
  //   return (
  //     <div
  //       className="flex t-5 justify-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
  //       role="alert"
  //     >
  //       <svg
  //         aria-hidden="true"
  //         className="flex-shrink-0 inline w-5 h-5 mr-3"
  //         fill="currentColor"
  //         viewBox="0 0 20 20"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path
  //           fillRule="evenodd"
  //           d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
  //           clipRule="evenodd"
  //         ></path>
  //       </svg>
  //       <span className="sr-only">Info</span>
  //       <div>
  //         Por favor intente nuevamente mas tarde
  //       </div>
  //     </div>
  //   );

  return (
    <section className="text-white container mx-auto pt-10">
      <h3 className="text-2xl lg:text-4xl text-center pb-5">Preventa Exclusiva Banco Galicia</h3>
     
       
      {!button ? (
        <>
          <div className="bg-contador pt-7">
            <h3 className="text-2xl lg:text-4xl text-center">Próximamente </h3>
            <div className="flex pt-5 justify-center px-2">
              <CardsHorario texto={"Día"} num={days} />
              <CardsHorario texto={"Hora"} num={hours} />
              <CardsHorario texto={"Min"} num={minutes} />
              <CardsHorario texto={"Seg"} num={seconds} />
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
      <section className="text-white p-5 container mx-auto  lg:py-10">
        <div className="my-5">
          <div className="space-y-10">
            
            <p className="text-base lg:text-lg">
              Recordá que los datos de la cuenta y la tarjeta de crédito/débito
              deben coincidir. <br /> <br />
              No es necesario actualizar la página una vez que finalice el contador. <br /><br />
              <strong>
                
                Anticipate: Registrate o actualiza tus datos haciendo 
                <a
                  target="blank"
                  className="underline inline-block ml-1 hover:text-gray-300"
                  href="https://wallet.tuentrada.com/account/login"
                >
                  CLICK AQUÍ
                </a>
              </strong>
            
             
            </p>
            <hr className="border border-white  " />
            <img style={{width:"200px",}}  src="https://tuentrada.com/concierto/rauw-alejandro/banco-galicia-logo.png" alt="" />
            <h3 className="text-2xl lg:text-4xl py-10">
              Ubicaciones y precios
            </h3>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center text-center my-10">
          <div className="flex flex-col justify-center px-1 lg:px-10 md:pt-5 ">
            <CardsPreventa text={"Campo VIP"} precio={"$46.000"} total={"$40.000 + $6.000"} />
            <CardsPreventa text={"Campo GENERAL"} precio={"$36.800"} total={"$32.000 + $4.800"} />
          </div>
          <div>
            <img
              className="h-[500px] px-1 lg:px-10"
              src="https://www.tuentrada.com/concierto/rauw-alejandro/plano-2.png"
              alt="Plano de ubicaciones del evento"
            />
          </div>
        </div>
      </section>
    </section>
  );
};
