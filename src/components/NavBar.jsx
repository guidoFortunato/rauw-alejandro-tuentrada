export const NavBar = () => {
  return (
    <nav style={{padding:"40px"}}
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
        {/* <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button> */}
      </div>
    </nav>
  );
};
