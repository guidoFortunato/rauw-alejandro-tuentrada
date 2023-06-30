export const DetalleConcierto = () => {
  return (
    <section className="text-white p-5 container mx-auto py-10 lg:py-10">
      <h3 className="text-2xl lg:text-4xl pb-10">Detalle del concierto</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5 mb-7">
        <div className="space-y-3">
          <h5 className="text-xl lg:text-2xl">Dirección</h5>
          <hr className="border border-white" />
          <p className="text-base lg:text-lg">Parque Sarmiento</p>
          <p className="text-base lg:text-lg">Av. Dr. Ricardo Balbín 4750</p>
        </div>
        <div className="space-y-3 pt-10 lg:pt-0">
          <h5 className="text-xl lg:text-2xl">Fecha y hora</h5>
          <hr className="border border-white" />
          <p className="text-base lg:text-lg">4 de Noviembre 2023</p>
          <p className="text-base lg:text-lg">21:00 hs</p>
        </div>
        {/* <div className="space-y-3 pt-10 lg:pt-0">
          <h5 className="text-xl lg:text-2xl">Ubicaciones y precios</h5>
          <hr />
          <p className="text-base lg:text-lg">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tuentrada.com/concierto/rauw-alejandro/plano.jpg"
              className="underline inline-block"
            >
              Ver mapa
            </a>
          </p>
        </div> */}
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.0214770169478!2d-58.50299251114504!3d-34.55301159999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6e5b3eef73d%3A0xd3c3514dbd8403ef!2sParque%20Sarmiento!5e0!3m2!1ses!2sar!4v1688131109244!5m2!1ses!2sar"
        width="100%"
        height="300"
        style={{ border: "0",   border: "0", filter: "invert(1)"}}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};
