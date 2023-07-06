import { useContext, useEffect, useState } from "react";
import { CardsPreventa } from "./CardsPreventa";
import { CardsHorario } from "./CardsHorario";
import { BotonComprar } from "./";
import { getEnvVariables } from "../helpers/getEnvVariables";
import { InfoContext } from "../context/InfoProvider";

const { VITE_DATE, VITE_API_GEO } = getEnvVariables();

const dateToCompare = new Date(VITE_DATE);

export const Preventas = () => {
  const [button, setButton] = useState(true);
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
              deben coincidir.
            
            </p>
            <hr className="border border-white  " />
            <h3 className="text-2xl lg:text-4xl">¡RAUW ALEJANDRO EN ARGENTINA!

</h3>
<p>El artista latino más importante 
del momento se presentará el 
4 de noviembre en Parque Sarmiento.</p>
            <p>
            Rauw Alejandro, el artista latino más importante del momento, se presentará el sábado 4 de noviembre en el Parque Sarmiento de la ciudad de Buenos Aires para alegría de todos sus fanáticos que estallaron en redes con la noticia.  Las entradas ya se encuentran disponibles en <a target="blank" href="https://tuentrada.com ">www.tuentrada.com </a><br />
              <br />
              Este concierto forma parte de su gira <strong>Saturno World Tour 2023</strong> con la que también pasará por Brasil, Chile y Perú.  El cantante boricua que se convirtió en un fenómeno mundial traerá un espectáculo con una innovadora puesta en escena, efectos especiales y un sonido de última generación que sorprenderá a todo el público. <br />
              <br />
              Exponente <strong>multi-platino</strong> de la música urbana en español, <strong>Rauw Alejandro</strong> llega para presentar oficialmente su nuevo álbum "Saturno", en el que incluyó colaboraciones con Arcángel, Playero y Lyannno.  El miércoles pasado presentó su <strong>“BZRP Music Session #56” </strong> y el viernes su nuevo single <strong>“Baby Hello”</strong>, ambas con <strong>Bizarrap</strong>, el prodigioso productor argentino.  La letra de este último tema, muy provocativa, se fusiona con un ritmo electrónico vibrante que nos transporta al origen de la música EDM y los legendarios ‘raves’ de la década de los 90s, reafirmando una vez más la habilidad de <strong>Rauw Alejandro</strong> para mantener a su público siempre al borde de la expectativa, ansiosos por cada nuevo giro en su dinámica carrera musical. <br />
              <br />
              Cantante, compositor, bailarín y productor, Rauw cuenta con grandes éxitos como "Todo de ti", "Punto 40", "Te felicito", "Desesperados", "Fantasías", "Lokera", "Cúrame", entre otros, siendo hoy <strong>no de los 100 artistas más escuchados del mundo</strong>. Este año se atrevió a lanzar un EP en conjunto con Rosalía denominado "RR" del cual destaca el single "Beso", con el que estuvo <strong>#1 en radios de Argentina</strong> durante un mes. <br />
              El éxito de <strong>Rauw Alejandro</strong> se ha extendido a la televisión con sus destacadas participaciones en los shows de Netflix, <strong>"La Firma" y “Sky Rojo”</strong>.
            </p>
            <p className="text-xl">Sigue a Rauw Alejandro en:</p>
            <a  target="blank"  className="text-lg" href="https://www.instagram.com/rauwalejandro/">Instagram</a> <br />
           <a  target="blank" className="text-lg" href="https://www.facebook.com/rauwalejandro/">Facebook</a><br />
           <a  target="blank" className="text-lg" href="https://twitter.com/rauwalejandro/">Twitter</a><br />
           <a  target="blank" className="text-lg" href="https://www.tiktok.com/@rauwalejandro">TikTok</a><br />
           <a  target="blank" className="text-lg" href="https://www.youtube.com/rauwalejandroTV">YouTube</a><br />
        
           <p className="text-xl">Para más información:</p>
<a  target="blank" className="text-lg" href="https://rauwalejandro.com/
">rauwalejandro.com
</a>
           <p className="text-lg">UNA PRODUCCIÓN</p>
          <img
            className="w-[200px]"
            src="https://tuentrada.com/concierto/ricardo-arjona/fenixv2.png"
            alt="logo fenix"
          />
          <div className="flex pt-2">
            <a href="https://www.facebook.com/fenixargentina/" target="_blank">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="mr-7"
              >
                <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/fenix.entertainment.group/"
              target="_blank"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 50 50"
                className="mr-7"
              >
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
              </svg>
            </a>
            <a href="https://twitter.com/fenix_latam" target="_blank">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 30 30"
                className="mr-7"
              >
                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCyau-iJ51yGuHK2wab7AsDQ?view_as=subscriber"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 30 30"
                fill="white"
                className="mr-7"
              >
                <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
              </svg>
            </a>
            <a href="https://fenix.com.ar/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="white"
                className="mr-7"
              >
                <path d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M13,17h-2v-6h2V17z M13,9h-2V7h2V9z"></path>
              </svg>
            </a>
 </div>





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
