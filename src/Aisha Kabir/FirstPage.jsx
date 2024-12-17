

export default function FirstPage() {
  return (
    <div className=" flex flex-col md:flex-row space-y-15">
      <div className=" relative w-full h-auto space-y-6 px-5 pt-10">
        <h1 className="text-4xl md:text-5xl font-black text-white">Live And
          on-demand
          trading</h1>
        <p className="text-secondary w-full md:w-2/3 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod pariatur magni, doloremque aperiam earum exercitationem!
          Non nisi eos earum aut nesciunt quae veniam, expedita rerum?</p>
        <div className="flex md:justify-evenly flex-col md:flex-row space-y-5 md:space-y-0 ">
          <div className="w-full flex justify-start">
          <button className="flex flex-none md:text-2xl py-1.5 px-8 border-2 border-white text-white hover:bg-white hover:text-primary">Explore Now</button>
          </div>
          <div className="flex md:justify-center justify-start w-full space-x-5 items-center">
            <img src="/Vector1.svg" alt="" />
            <p className="md:text-2xl font-thin text-secondary">01-03</p>
            <img src="/Vector2.svg" alt="" />
          </div>

          <div className="w-fit absolute -top-15 right-0 md:-top-10 md:right-15" >
            <img src="/Arrow.svg" alt="" />
          </div>
        </div>

      </div>
      <div className="relative w-full">
        <img src="/iPhone_12_Pro_Wooden_Hands.svg" alt="" className="w-fit"/>
        <img src="/Star4.svg" alt="" className="absolute top-8 right-32 w-5  animate-spin-slow" />
        <img src="/Star5.svg" alt="" className="absolute top-36 -left-5 w-6  animate-pulse" />
        <img src="/Star6.svg" alt="" className="absolute bottom-20 left-28 w-6  animate-pulse" />
      </div>

    </div>
  )
}
