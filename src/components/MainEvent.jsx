import { DetalleSpotify, DetalleConcierto, Preventas, Footer } from ".";

export const MainEvent = () => {
  return (
    <main >
      <div className="bg-2 px-5 md:px-20  lg:px-32 ">
        <Preventas />
        <DetalleConcierto />
      </div>
      <div className="bg-1 px-5 md:px-20  lg:px-32 ">
        <DetalleSpotify />
        <Footer />
      </div>
    </main>
  );
};
