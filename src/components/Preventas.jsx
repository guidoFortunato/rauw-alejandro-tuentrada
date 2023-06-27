import { CardsPreventa } from "./CardsPreventa";

export const Preventas = () => {
  return (
    <section className="text-white p-5 container mx-auto py-10 lg:py-40">
      <div className="grid grid-cols-1 justify-items-center">
        <h3 className="text-2xl sm:text-3xl lg:text-5xl mb-2">Preventas exclusivas</h3>
        {/* <p className="text-lg lg:text-4xl">Adquirí tus entradas en tuentrada.com</p> */}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 justify-items-center xl:gap-0 text-center my-10">
        <CardsPreventa text={"Spotify"} src={"https://picsum.photos/500/400"} />
        <CardsPreventa text={"Galicia"} src={"https://picsum.photos/500/400"} />
        <CardsPreventa
          text={"Venta general"}
          src={"https://picsum.photos/500/400"}
        />
      </div>
    </section>
  );
};
