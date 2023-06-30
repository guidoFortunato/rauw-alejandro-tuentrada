export const Header = () => {
  // const [showButton, setShowButton] = useState(false);
  // const targetDate = new Date('2023-06-27');

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const currentDate = new Date();

  //     if (currentDate >= targetDate) {
  //       setShowButton(true);
  //       clearInterval(interval);
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <header
        className={`nav bg-no-repeat bg-cover bg-end z-40`}
        // style={{
        //   backgroundImage: `url("https://www.tuentrada.com/concierto/rauw-alejandro/banner.png"})`,
        // }}
      style={{padding:" 0 20px"}} >
        <img className="sm:block md:hidden" src="https://tuentrada.com/concierto/rauw-alejandro/900x800.jpg" alt="banner principal de Rauw Alejandro" />
        <img className="hidden md:block w-screen lg:hidden"  src="https://tuentrada.com/concierto/rauw-alejandro/800x400.jpg" alt="banner principal de Rauw Alejandro" />
        <img className="hidden  lg:block w-screen"  src="https://tuentrada.com/concierto/rauw-alejandro/1920x710.webp" alt="banner principal de Rauw Alejandro" />
        <h1 className="hidden">Rauw Alejandro</h1>
        <h2 className="hidden">Parque Sarmiento</h2>
          
        {/* <div
          className={`min-h-[50vh] flex justify-center items-start flex-col `}
          >
          
        </div> */}
      </header>
    </>
  );
};
