// eslint-disable-next-line react/prop-types
export const CardsPreventa = ({ src, text }) => {
  return (
    <div className="max-w-xs  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={src}
          alt={text}
        />
      </a>
      <div className="p-5">
        
        <p className="mb-3 text-2xl font-normal text-gray-700 dark:text-gray-400">
        {text}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-16 py-4 text-xl font-semibold text-center text-white bg-[#242222] rounded-full hover:bg-[#3b3a3a] focus:ring-4 focus:outline-none"
        >
          Comprar
         
        </a>
        <hr className="mt-3 border border-stone-700" />
        <div className="flex justify-center h-10 items-center">
        <p className="text-sm lg:text-md text-black h-1.5 whitespace-nowrap">Hasta 6 entradas por persona</p>

        </div>
      </div>
    </div>
  );
};
