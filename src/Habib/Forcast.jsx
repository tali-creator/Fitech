const Forcast = () => {
  return (
    <div className="w-full flex flex-col md:flex-row space-y-10 md:space-y-0">
      <div className="w-full flex justify-center relative">
        <div className="absolute w-full h-full border bg-blue-400/10 blur-xl rounded-[200px] border-red-50"></div>
        <div className="flex w-full z-90 justify-center relative -space-x-20 max-h-[600px]">
          <img
            className="pb-20 md:w-[300px] min-w-[150px] "
            src="/iPhone12Pro.png"
            alt=""
          />
          <img
            className="pt-20 md:w-[300px] min-w-[150px] "
            src="/iPhone12Pro1.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col w-full space-y-10 md:pt-17 md:pl-5">
        <h1 className="text-tertiary text-2xl ">How it works</h1>
        <h1 className=" text-3xl sm:text-5xl text-white md:text-6xl font-black ">
          Viewing Long-term and Short-term forcast
        </h1>
        <p className="text-secondary text-lg md:w-4/5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id aut non
          cupiditate consectetur dolores. Dolorum enim possimus fuga placeat
          asperiores nihil ipsam suscipit magnam dolores!
        </p>
        <div className="w-full ">
          <button className="text-white text-2xl font-black border-2 border-white py-2 px-5 ">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forcast;
