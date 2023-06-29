// eslint-disable-next-line react/prop-types
export const CardsHorario = ({ text, texto }) => {
  return (
    <div className="max-w-xs ml-1 mr-1 sm:ml-3 sm:mr-3 bg-transparent border-gray-200 rounded-lg shadow dark:bg-gray-800 border-2 dark:border-gray-700 mb-10 w-[100%] sm:w-[70px] md:sm:w-[100px] lg:w-[130px]  ">
      <div className="text-center px-1 sm-px-3">
        <p className=" text-2xl md:text-4xl lg:text-6xl font-bold text-white dark:text-gray-400  py-2 md:py-3 lg:px-10 lg:py-2 flex justify-center align-middle ">
          {text}
        </p>
        {/* <a
          href="#"
          className="inline-flex items-center px-16 py-4 text-xl font-semibold text-center text-white bg-[#242222] rounded-full hover:bg-[#3b3a3a] focus:ring-4 focus:outline-none"
        >
          Comprar 

        </a> */}

        <hr className=" border border-white  " />
        <div className="flex justify-center h-10 items-center">
          <p className="font-bold text-base md:text-xl lg:text-md text-white  whitespace-nowrap ">
            {texto}
          </p>
        </div>
      </div>
    </div>
  );
};
