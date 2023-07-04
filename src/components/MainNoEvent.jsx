import { FooterNoAccess } from "./FooterNoAccess";

export const MainNoEvent = () => {
  return (
    <main className="relative  flex flex-col justify-center h-main">
      <div
        className="flex t-5 h-80 justify-center items-center p-4 mb-4 text-sm text-red-800 rounded-lg"
        role="alert"
      >
        {/* <svg
            aria-hidden="true"
            className="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg> */}
        <span className="sr-only ">Info</span>
        <div className="text-lg lg:text-xl bg-red-200 p-10 text-ellipsis">
          Posee el acceso bloqueado para esta página, comuniquese con{" "}
          <strong>info@tuentrada.com</strong> para mas información
        </div>
      </div>
      <div>
        <FooterNoAccess />
      </div>
    </main>
  );
};
