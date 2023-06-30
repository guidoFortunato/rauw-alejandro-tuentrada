export const NavBar = () => {
  return (
    <nav
      style={{ padding: "40px" }}
      className={` nav border-gray-200 dark:bg-gray-900 top-0 z-30  lg:pb-0 bg-black flex justify-center`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between">
        <a href="https://tuentrada.com/" target="_blank" rel="noreferrer" className="flex items-center">
          <img style={{width:"230px"}}
            src="https://www.tuentrada.com/img/logo_tuboleta_menu.svg"
            className="h-15 mr-3"
            alt="Logo TuEntrada"
          />
        </a>
      </div>
    </nav>
  );
};
