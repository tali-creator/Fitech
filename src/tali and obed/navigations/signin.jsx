import { Link } from "react-router-dom";

export default function SignInPage() {
  return (
    <div className="w-full h-auto bg-primary pt-20">
      <div className="flex justify-center ">
        <h1 className="text-white font-black text-3xl flex">
          Sign In to{" "}
          <img className="w-10 h-10 mx-2" src="/fitech-logo.png" alt="" />{" "}
          Fitech
        </h1>
      </div>
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-full sm:w-4/5  lg:w-2/3 shadow-sm shadow-black lg:px-[70px] xl:px-[120px] px-4 py-6 rounded-md h-auto">
          <form action="" className="w-full h-full space-y-4">
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="flex flex-col  space-y-1">
                <label className="text-white " htmlFor="fname">
                  First Name:
                </label>
                <input
                  className=" border-secondary px-3 outline-none bg-white rounded-md hover:border-tertiary border-2 transition ease-linear duration-200"
                  type="fname"
                  name=""
                  id="fname   required"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-white " htmlFor="lname">
                  Last Name:
                </label>
                <input
                  className=" border-secondary px-3 outline-none bg-white rounded-md hover:border-tertiary border-2 transition ease-linear duration-200"
                  type="lname"
                  name=""
                  id="lname   required"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="flex flex-col space-y-1">
                <label className="text-white " htmlFor="email">
                  Email Adress:
                </label>
                <input
                  className=" border-secondary px-3 outline-none bg-white rounded-md hover:border-tertiary border-2 transition ease-linear duration-200"
                  type="email"
                  name=""
                  id="email   required"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-white " htmlFor="age">
                  Age:
                </label>
                <input
                  className=" border-secondary px-3 outline-none bg-white rounded-md hover:border-tertiary border-2 transition ease-linear duration-200"
                  type="number"
                  name=""
                  id="age   required"
                />
              </div>
            </div>
            <div className="flex space-x-2 items-center ">
              <p className="text-white">Gender:</p>
              <label className="text-white " htmlFor="male/female">
                Male
              </label>
              <input
                className=" border-secondary px-3 outline-none bg-white rounded-md hover:border-tertiary border-2 transition ease-linear duration-200"
                type="radio"
                value="female"
                name="male/female"
                id="   required"
              />
              <label className="text-white " htmlFor="female">
                Female
              </label>
              <input
                className=" border-secondary px-3 outline-none bg-white rounded-md hover:border-tertiary border-2 transition ease-linear duration-200"
                type="radio"
                name="male/female"
                value="male"
                id="   required"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between">
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
              <div className="flex flex-col space-y-1">
                <label className="text-white " htmlFor="ConfirmPassword">
                  Confirm Password:
                </label>
                <input
                  className=" border-secondary px-3 outline-none bg-white rounded-md hover:border-tertiary border-2 transition ease-linear duration-200"
                  type="ConfirmPassword"
                  name=""
                  id="ConfirmPassword   required"
                />
              </div>
            </div>
            <div className="flex items-center flex-col sm:flex-row justify-between">
              <div className=" w-full h-12 flex justify-center py-2">
                <button className="bg-tertiary px-10 font-black rounded-lg text-primary hover:bg-secondary hover:text-tertiary hover:border-tertiary border-2 transition ease-linear duration-200 text-lg">
                  Sign In
                </button>
              </div>
              <div className="w-full space-x-2 space-y-2">
                <div className="flex items-center space-x-2 my-3 justify-center">
                  <legend className="text-white">Continue with -</legend>
                  <a href="#">
                    <img
                      className="w-10 h-10 rounded "
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
          </form>
          <div className="text-white text-center my-2">
            Already have an account?{" "}
            <Link className="text-tertiary hover:underline" to={"/login"}>
              Login
            </Link>{" "}
            here
          </div>
        </div>
      </div>
    </div>
  );
}
