import { Link } from "react-router-dom";

export default function Recovery() {
  return (
    <div className="w-full h-full flex justify-center items-center mt-26">
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 border border-secondary shadow-sm rounded-xl px-5 py-15">
      <h1 className="text-2xl text-center text-white">Enter Your Recovery Email</h1>
        <div className="flex flex-col space-y-3 my-10">
          <label className="text-white" htmlFor="email">
            Recovery Email
          </label>
          <input className="w-full outline-none border-2 bg-white py-1 px-5 border-secondary rounded-lg hover:border-tertiary" type="email" name="email" id="email" />
         <div className="flex justify-center">
          <button className="w-fit px-20 py-1 rounded-lg bg-tertiary border-2 border-white hover:bg-secondary font-black hover:border-tertiary text-white hover:text-tertiary">send</button>
         </div>
         <div>
          <p className="text-center text-white"> Or <Link className="text-tertiary" to={"/login"}> Login </Link> Here </p>
         </div>
        </div>
      </div>
    </div>
  );
}
