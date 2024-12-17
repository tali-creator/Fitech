export function Button() {
  return <img className="w-[100px] cursor-pointer sm:w-[130px] md:w-[170px] bg-transparent" src={"/Play.svg" }alt="" />;
}

export function Brief({name , profession}) {
  return (
      <div className="flex flex-col min-w-[70px] sm:pl-3 justify-center space-y-1 text-start">
        <span className="font-black text-xs md:text-lg text-white flex-none flex">
          {name}
        </span>
        <span className="font-thin text-xs md:text-lg text-white flex-none flex">
          {profession}
        </span>
      </div>
  );
}
