import { getEnvVariables } from "../helpers/getEnvVariables";

const { VITE_ID_VENTA } = getEnvVariables();
export const BotonComprar = () => {
  return (
    <>
      <a
        href={`https://wallet.tuentrada.com/selection/event/date?productId=${VITE_ID_VENTA}`}
        target="_blank"
        rel="noreferrer"
        className="inline-block"
      >
        <button
          className={` bg-white border-white border hover:bg-transparent hover:text-white  text-md lg:text-lg text-black font-bold py-2  px-20  md:px-24 rounded-full`}
        >
          Comprar
        </button>
      </a>
    </>
  );
};
