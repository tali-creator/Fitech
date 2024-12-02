function Loader() {
    return (
        <div className="absolute bg-[rgba(0,0,0,0.2)] z-50 inset-0 items-center flex justify-center">
        <div className="w-10 h-10 to border-4 border-gray-400 border-t-white border-r-white animate-spin rounded-full  duration-1000 ease-linear "></div>
        <p className="ml-3 text-gray-100 text-xl font-semibold ">Redirecting...</p>
      </div>
    );
  }
  
  export default Loader;
  