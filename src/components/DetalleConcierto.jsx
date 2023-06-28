export const DetalleConcierto = () => {
  return (
    <section className="text-white p-5 container mx-auto py-10 lg:py-20 ">
      <h3 className="text-2xl lg:text-4xl pb-10">Detalle del concierto</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-5">
        <div className="space-y-3">
          <h5 className="text-base lg:text-lg">Dirección</h5>
          <hr />
          <p className="text-base lg:text-lg">
            Parque Sarmiento
          </p>
          <p className="text-base lg:text-lg">
          Av. Dr. Ricardo Balbín 4750
          </p>
        </div>
        <div className="space-y-3">
          <h5 className="text-base lg:text-lg">Fecha y hora</h5>
          <hr />
          <p className="text-base lg:text-lg">4 de Noviembre 2023</p>
          <p className="text-base lg:text-lg">21:00 hs</p>
          
        </div>
        <div className="space-y-3">
          <h5 className="text-base lg:text-lg">Ubicaciones y precios</h5>
          <hr />
          <p className="text-base lg:text-lg"><a target="blank" href="https://www.tuentrada.com/concierto/rauw-alejandro/plano.jpg" className="underline inline-block"> Ver mapa</a></p> 
         
        </div>
      </div>
      <a target="blank" href="https://www.google.com/maps/place/Parque+Sarmiento/@-34.5489145,-58.5074663,14z/data=!4m6!3m5!1s0x95bcb6e5b3eef73d:0xd3c3514dbd8403ef!8m2!3d-34.5530116!4d-58.4984864!16s%2Fg%2F121_42kn?entry=ttu" className="underline inline-block text-base lg:text-lg ">
        Cómo llegar
      </a>
    </section>
  );
};
