import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="w-full h-auto bg-primary pt-20">
      <div className="flex justify-center ">
        <h1 className="text-white font-black text-3xl flex">
          Login to{" "}
          <img className="w-10 h-10 mx-2" src="/fitech-logo.png" alt="" />{" "}
          Fitech
        </h1>
      </div>
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-[calc(100%-10px)] mt-5  sm:w-2/5 md:w-1/2 lg:w-1/3 shadow-[0px_0px_3px_rgba(225,225,225,0.7)] px-4 py-6 rounded-md h-auto">
          <form action="" className="w-full h-full space-y-4">
            <div className="flex flex-col space-y-1">
              <label className="text-white font-medium text-xl" htmlFor="email">
                Email Address:
              </label>
              <input
                className=" border-secondary px-3 outline-none bg-white rounded-md hover:border-tertiary border-2 transition ease-linear duration-200"
                type="email"
                name=""
                id="email   required"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-white font-medium text-xl" htmlFor="password">
                Password:
              </label>
              <input
                className=" border-secondary px-3 outline-none bg-white rounded-md hover:border-tertiary border-2 transition ease-linear duration-200"
                type="password"
                name=""
                id="password   required"
              />
            </div>
            <Link to={"/recovery"} className="text-tertiary hover:underline">
              forgot password
            </Link>
            <div className=" flex justify-center py-2">
              <button className="bg-tertiary px-10 font-black rounded-lg text-primary hover:bg-secondary hover:text-tertiary hover:border-tertiary border-2 transition ease-linear duration-200 text-lg">
                Log In
              </button>
            </div>
          </form>
          <div className="w-full space-x-2 mt-3 space-y-3 ">
            <p className="text-white text-center text-[1.2rem]">
              Don't have an account?{" "}
              <Link className="text-tertiary hover:underline" to={"/signIn"}>
                Sign In{" "}
              </Link>{" "}
              here
            </p>
            <div className="flex justify-center">
              <p className="text-white font-medium text-xl">Or</p>
            </div>
            <div className="flex items-center space-x-2 justify-center gap-3">
              <legend className="text-white text-xl  font-medium">Continue with: </legend>
              <div className="flex gap-2 ">
                <a href="#">
                  <img
                    className="w-10 h-10  rounded "
                    src="/gitHub.jpeg"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    className="w-10 h-10 rounded "
                    src="/google.png"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    className="w-10 h-10 rounded "
                    src="/facebook.jpeg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
