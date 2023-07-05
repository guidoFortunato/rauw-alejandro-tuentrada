import { useContext, useEffect, useState } from "react";
import { CardsPreventa } from "./CardsPreventa";
import { CardsHorario } from "./CardsHorario";
import { BotonComprar } from "./";
import { getEnvVariables } from "../helpers/getEnvVariables";
import { InfoContext } from "../context/InfoProvider";

const { VITE_DATE, VITE_API_GEO } = getEnvVariables();

const dateToCompare = new Date(VITE_DATE);

export const Preventas = () => {
  const [button, setButton] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [time, setTime] = useState(0);

  // const { time } = useContext(InfoContext);

  useEffect(() => {
    if(button === true) return 
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(VITE_API_GEO);
        if (!response.ok) {
          setTime(new Date());
          return;
        }
        const data = await response.json();
        const currentDateTime = new Date(data.datetime);
        setTime(currentDateTime);
      } catch (error) {
        setTime(new Date());
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [button]);

  // console.log({ error });
  useEffect(() => {
    if (time === 0) return
    // console.log('wuef worker')

    const worker = new Worker(new URL("/src/helpers/countdownWorker.js", import.meta.url));

    worker.onmessage = (event) => {
      // console.log('worker')
      const { dias, horas, minutos, segundos, button: countdownButton } = event.data;
      setDays(dias);
      setHours(horas);
      setMinutes(minutos);
      setSeconds(segundos);
      setButton(countdownButton);
    };
    // console.log('post worker')
    worker.postMessage({ dateToCompare, newTime: time.getTime() });

    return () => {
      // console.log('return worker')
      worker.terminate();
    };
    // const intervalo = interval.current;
    // startTimer();
    // return () => clearInterval(intervalo);
  }, [time]);
  

  // if (isLoading) return <span></span>;

  return (
    <section className="text-white container mx-auto pt-10">
      <h3 className="text-2xl lg:text-4xl text-center pb-5">Venta General</h3>

      {!button ? (
        <>
          <div className="bg-contador pt-7">
            <h3 className="text-2xl lg:text-4xl text-center">Próximamente</h3>
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
              No es necesario actualizar la página una vez que finalice el
              contador. <br />
              <br />
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
            <p>
              El cantante y compositor puertorriqueño Rauw Alejandro regresa a
              Argentina con su nuevo viaje denominado Saturno World Tour 2023
              que lo traerá el próximos 4 de noviembre para un show en Parque
              Sarmiento. <br />
              <br />
              Con su nuevo single Baby Hello, el exponente multi-platino de la
              música urbana en español Rauw Alejandro. <br />
              Este tema promete ser un himno y transformar cada noche en una
              fiesta inolvidable. <br />
              <br />
              Su nuevo álbum Saturno con colaboraciones con Arcángel, Playero y
              Lyannno ha ratificado en plataformas digitales porque Rauw es uno
              de los 100 artistas más escuchados en todo el mundo. <br />
              <br />
              Cantante, compositor, bailarín y productor, Rauw cuenta con
              grandes éxitos como Todo de ti, Punto 40, Te felicito,
              Desesperados, Fantasías, Lokera, Cúrame entre otros, Y este año se
              atrevió a lanzar un EP en conjunto con Rosalía denominado RR del
              cual destaca el single Beso.
            </p>
            {/* <img style={{width:"200px",}}  src="https://tuentrada.com/concierto/rauw-alejandro/banco-galicia-logo.png" alt="" /> */}
            <h3 className="text-2xl lg:text-4xl py-10">
              Ubicaciones y precios
            </h3>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center text-center my-10">
          <div className="flex flex-col justify-center px-1 lg:px-10 md:pt-5 ">
            <CardsPreventa
              text={"Campo VIP"}
              precio={"$40.000"}
              total={"$40.000 + $6.000"}
            />
            <CardsPreventa
              text={"Campo GENERAL"}
              precio={"$32.000"}
              total={"$32.000 + $4.800"}
            />
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
