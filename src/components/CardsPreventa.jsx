// eslint-disable-next-line react/prop-types
export const CardsPreventa = ({ text, precio, total }) => {
  return (
    <div className="max-w-xs  bg-transparent border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-10">
      <a href="#">
        {/* <img
          className="rounded-t-lg"
          src={src}
          alt={text}
        /> */}
      </a>
      <div className="p-5 lg:p-9">
        <p className="mb-3 text-2xl font-normal text-white dark:text-gray-400">
          {text}
        </p>
        {/* <a
          href="#"
          className="inline-flex items-center px-16 py-4 text-xl font-semibold text-center text-white bg-[#242222] rounded-full hover:bg-[#3b3a3a] focus:ring-4 focus:outline-none"
        >
          Comprar 

        </a> */}
        <p className="text-2xl text-white">{precio}</p>
        <hr className="mt-2 border border-white   " />
        <div className="flex justify-center h-10 items-center pb-5">
          <p className="text-sm lg:text-md text-white h-1.5 whitespace-nowrap p-1 md:p-10 ">
          <strong>   Preventa fase 1</strong><br />
           <span className="text-xs">{total}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
