import { DetalleSpotify, DetalleConcierto, Preventas, Footer } from ".";

export const MainEvent = () => {
  return (
    <main>
      <div className="bg-2 ">
        <Preventas />
        <DetalleConcierto />
      </div>
      <div className="bg-1">
        <DetalleSpotify />
        <Footer />
      </div>
    </main>
  );
};
