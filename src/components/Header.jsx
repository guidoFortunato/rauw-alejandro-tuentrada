import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <>
      <header
        className={`bg-1 bg-no-repeat bg-cover bg-end z-40 h-screen`}
      
        // style={{
        //   backgroundImage: `url("https://www.tuentrada.com/concierto/rauw-alejandro/banner.png"})`,
        // }}
      >
        <div className="bg-img p-5 bg-no-repeat bg-cover lg:bg-contain bg-botom bg-left lg:bg-right  h-full flex flex-col justify-between container mx-auto">
          
        {/* <div
          className={`min-h-[50vh] flex justify-center items-start flex-col `}
          >
          
        </div> */}
        <NavBar />

        <div className="w-full ">
          <h1 className="text-4xl 2xl:text-9xl font-bold text-white">
            Rauw <br />
            Alejandro
          </h1>
          <p className="text-2xl text-white">25 y 26 de Agosto</p>
          <p className="text-2xl text-white">Estadio Vélez Sarsfield</p>
        </div>
        <div className="w-full">
          <button
            type="button"
            className="py-2.5 h-16 px-5 mr-2 mb-2 text-base font-medium  focus:outline-none text-white rounded-full border border-gray-200 bg-transparent mt-3"
          >
            Próximamente
          </button>
        </div>
        </div>
      </header>
    </>
  );
};