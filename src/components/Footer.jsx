export const Footer = () => {
  return (
    <section className="text-white p-5 container mx-auto py-10 lg:py-20 ">
      <a href="https://www.tuentrada.com/" target="_blank" rel="noreferrer">
        <img
          src="https://www.tuentrada.com/img/logo_tuboleta_menu.svg"
          style={{ width: "200px", paddingBottom: "20px" }}
          alt=""
        />{" "}
      </a>
      <hr className="border border-white  " />
      <div className="grid grid-cols-1 lg:grid-cols-3  pt-10 text-start md:text-center pb-5">
        <div className="flex justify-start md:justify-center pt-2">
          <a href="https://instagram.com/tuentrada" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 50 50"
              className="mr-10"
            >
              <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
            </svg>
          </a>
          <a href="https://facebook.com/tuentrada" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="mr-10"
            >
              <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z"></path>
            </svg>
          </a>
          <a href="https://twitter.com/tuentrada" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 30 30"
            >
              <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
            </svg>
          </a>
        </div>

        <a
          className="pt-5"
          href="https://www.tuentrada.com/terminosycondiciones/"
          target="blank"
          rel="noreferrer"
        >
          <p className="text-base lg:text-lg">Términos y condiciones</p>
        </a>
        <a
          className="pt-5"
          href="https://www.tuentrada.com/wallet/"
          target="blank"
          rel="noreferrer"
        >
          <p className="text-base lg:text-lg">TuEntrada Wallet</p>
        </a>
      </div>
      <span className="text-xs">
        Preventa exclusiva con tus Tarjetas Visa Galicia desde el lunes 3/7 a
        las 10:00 am al miércoles 6/7 o hasta agotar stock con 20% de ahorro
        SOLO en la preventa y hasta 6 cuotas sin interés. Cartera de consumo.
        Promoción del 20% de ahorro y hasta 6 cuotas sin interés abonando con
        tarjetas VISA Galicia. Válida en el país desde el 03/07/2023 a las 10
        horas, hasta las 23:59hs del 5/07/2023 o hasta agotar stock de 7.500
        tickets, lo que suceda primero. Compra máxima por persona: 4 tickets.
        Ejemplo: En una compra de $18.000 y se paga en 6 cuotas: el importe del
        ahorro es de $3.600 y el valor de las cuotas será de $3.000. Más
        información en{" "}
        <a
          className="underline"
          target="blank"
          href="https://www.galicia.ar/personas"
          rel="noreferrer"
        >
          Galicia.ar
        </a>{" "}
        El “CFTEA”: 0,00%, “CFTEA”+IVA:0,00%
      </span>
    </section>
  );
};
