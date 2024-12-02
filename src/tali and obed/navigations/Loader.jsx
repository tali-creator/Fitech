function Loader() {
  return (
    <div className="absolute  z-50 inset-0 items-center flex justify-center">
      <div className="w-8 h-8 top-20 border-4 border-transparent border-t-white border-b-white animate-spin rounded-full  [animation-duration:0.7s] ease-linear "></div>
      {/* <p className="ml-3 text-gray-100 text-xl font-semibold ">Redirecting...</p> */}
    </div>
  );
}

export default Loader;
