import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";

export default function LoginPage() {
  const url = "https://6749c1828680202966327f1c.mockapi.io/Users";

  const navigate = useNavigate();
  const [isLoader, setLoader] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [userMessage, setUserMessage] = useState("");

  async function userLogin(e) {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");
    setUserMessage("");

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("failed to connect to server");
      }
      const getUsers = await response.json();
      console.log(getUsers);

      const userExist = getUsers.find((user) => user.email === email);

      // set a message to indicate user had and account
      if (userExist) {
        if (userExist.password === password) {
          setSuccessMessage("Login successfully");
        } else {
          setErrorMessage("invalid password");
        }
      } else {
        setUserMessage("Account not found. please sign up ");
        setTimeout(() => {
          setLoader(true);
          setTimeout(() => {
            setLoader(false);
            navigate("/signin");
          }, 1200);
        }, 1000);
        return;
      }

      // clear the input fields
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);

      setErrorMessage(`An error occurred while loging user: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="w-full h-auto  bg-primary pt-20 animate-slide-in">
      <div className="flex  justify-center ">
        <h1 className="text-white font-black text-3xl flex">
          Login to{" "}
          <img className="w-10 h-10 mx-2" src="/fitech-logo.png" alt="" />{" "}
          Fitech
        </h1>
      </div>
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-[calc(100%-10px)] relative mt-5  sm:w-2/5 md:w-1/2 lg:w-1/3 shadow-[0px_0px_3px_rgba(225,225,225,0.7)] px-4 py-6 rounded-md h-auto">
          <form onSubmit={userLogin} className="w-full h-full space-y-4">
            <div className="flex flex-col space-y-1">
              <label className="text-white font-medium text-xl" htmlFor="email">
                Email Address:
              </label>
              <input
                className=" border-secondary px-3 outline-none bg-white rounded-md hover:border-tertiary border-2 transition ease-linear duration-200"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                className="text-white font-medium text-xl"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                className=" border-secondary px-3 outline-none bg-white rounded-md hover:border-tertiary border-2 transition ease-linear duration-200"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                id="password"
                required
              />
            </div>
            <Link
              to={"/recovery"}
              className="text-[#FFFFFF] text-xl hover:underline"
            >
              forgot password
            </Link>
            <div>
              <p
                className={` text-xl font-semibold text-center mt-2  ${
                  errorMessage && "text-red-400"
                } ${userMessage && "text-red-400"} ${
                  successMessage && "text-green-500"
                }`}
              >{`${errorMessage && errorMessage} ${
                successMessage && successMessage
              } ${userMessage && userMessage}`}</p>
            </div>
            <div className=" flex justify-center py-2">
              <button
                disabled={loading}
                type="submit"
                className={`bg-tertiary px-10 font-black rounded-lg text-[#FFFFFF] hover:bg-secondary hover:text-tertiary hover:border-tertiary border-2 transition ease-linear duration-200 text-lg
                ${loading && "opacity-80 cursor-not-allowed"}`}
              >
                {loading ? "Loging..." : "Login"}
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
              <legend className="text-white text-xl  font-medium">
                Continue with:{" "}
              </legend>
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
          {isLoader && <Loader />}
        </div>
      </div>
    </div>
  );
}
