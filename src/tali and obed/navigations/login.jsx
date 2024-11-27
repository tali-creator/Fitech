import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="w-full h-auto bg-primary pt-20">
        <div className="flex justify-center ">
        <h1 className="text-white font-black text-3xl flex">login to <img className="w-10 h-10 mx-2" src="/fitech-logo.png" alt="" /> Fitech</h1>
        </div>
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-3/5 sm:w-2/5 md:w-1/2 lg:w-1/3 shadow-sm shadow-black px-4 py-6 rounded-md h-auto">
          <form action="" className="w-full h-full space-y-4">
            <div className="flex flex-col space-y-1">
              <label className="text-white " htmlFor="email">
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
              <label className="text-white " htmlFor="password">
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
          <div className="w-full space-x-2 space-y-2">
            <p className="text-white">
              Don't have an account?  <Link className="text-tertiary hover:underline" to={"/signIn"}>
                Sign In </Link> here
            </p>
            <div className="flex justify-center">
              <p className="text-white">Or</p>
            </div>
            <div className="flex items-center space-x-2">
            <legend className="text-white">Continue with </legend>
              <a href="#">
                <img className="w-10 h-10 rounded " src="/gitHub.jpeg" alt="" />
              </a>
              <a href="#">
                <img className="w-10 h-10 rounded " src="/google.png" alt="" />
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
  );
}
