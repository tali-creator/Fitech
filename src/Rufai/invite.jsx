

function Invite() {
  return (
    <div className="flex flex-col md:flex-row p-5 w-full">
      <div className="flex flex-col space-y-5 w-full justify-around">
        <h1 className="text-3xl md:text-6xl text-white">Invite team members & enlarge your groups</h1>
        <p className="text-secondary text-lg md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque id accusantium voluptas aperiam, iusto repellendus.</p>
        <button className="py-1 px-8 border-2 border-white rounded-lg text-white font-bold w-fit">Explore Now</button>
      </div>
      <div className=" flex md:-space-x-13 -space-x-7 relative w-full items-center sm:-space-x-10"> 
    <img src="/invite.png" className="h-[100%]  rounded-2xl  sm:w-[50%] pb-5 sm:pb-10 w-[40%]" alt="" />
    <img src="/eclipse.png" className="md:w-24 md:h-24 rounded-full h-14 w-14 relative sm:w-20 sm:h-20 " alt="" />
    <img src="/Comments.png" className="h-[100%] rounded-2xl sm:w-[50%] pt-5 sm:pt-10 w-[40%]" alt="" />
      </div>
    </div>
  )
}

export default Invite
