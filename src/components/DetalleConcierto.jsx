export const DetalleConcierto = () => {
  return (
    <section className="text-white p-5 container mx-auto">
      <h3 className="text-2xl lg:text-4xl">Detalle del concierto</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-5">
        <div className="space-y-3">
          <h5 className="text-base">Ubicación</h5>
          <hr />
          <p>
            Estadio Velez Sarfield 
          </p>
          <p>
          Av. Juan Bautista Justo 9200
          </p>
        </div>
        <div className="space-y-3">
          <h5 className="text-base">Fechas</h5>
          <hr />
          <p>25 de Agosto 2023</p>
          <p>25 de Agosto 2023</p>
        </div>
        <div className="space-y-3">
          <h5 className="text-base">Horarios</h5>
          <hr />
          <p>Horario y llegada</p>
          <p>Apertura puertas</p>
        </div>
      </div>
      <a href="#" className="underline inline-block">
        Cómo llegar
      </a>
    </section>
  );
};
