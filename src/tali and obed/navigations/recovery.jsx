import { useState } from "react";
import { Link } from "react-router-dom";
import { VerifyEmail, changePassword } from "./utilities/recovery";

export default function Recovery() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmcode, setConfirmCode] = useState("");
  const [step, setStep] = useState(1);
  const [uniqueCode, setUniqueCode] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="w-full h-full flex justify-center items-center mt-26 ">
      {step == 1 && (
        <form
          onSubmit={(e) =>
            VerifyEmail({
              e,
              email,
              setIsLoading,
              setSuccessMessage,
              setErrorMessage,
              setStep,
              setUniqueCode,
            })
          }
          className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 border border-secondary shadow-sm rounded-xl px-5 py-15"
        >
          <h1 className="text-2xl text-center text-white">
            Enter Your Recovery Email
          </h1>
          <div className="flex flex-col space-y-3 my-10">
            <label className="text-white" htmlFor="email">
              Recovery Email
            </label>
            <input
              className="w-full outline-none border-2 bg-white py-1 px-5 border-secondary rounded-lg hover:border-tertiary"
              type="email"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-fit px-20 py-1 rounded-lg bg-tertiary border-2 border-white hover:bg-secondary font-black hover:border-tertiary text-white hover:text-tertiary"
              >
                {isloading ? "Sending..." : "Get code"}
              </button>
            </div>
            <div>
              <p className="text-center text-white">
                {" "}
                Or{" "}
                <Link className="text-tertiary" to={"/login"}>
                  {" "}
                  Login{" "}
                </Link>{" "}
                Here{" "}
              </p>
              <p
                className={`text-xl text-center font-medium ${
                  errorMessage && "text-red-400"
                } ${successMessage && "text-green-500"}`}
              >{`${successMessage && successMessage} ${
                errorMessage && errorMessage
              }`}</p>
            </div>
          </div>
        </form>
      )}

      {step === 2 && (
        <form
          onSubmit={(e) =>
            changePassword({
              e,
              email,
              uniqueCode,
              confirmcode,
              password,
              setConfirmCode,
              setIsLoading,
              setPassword,
              setSuccessMessage,
              setErrorMessage,
            })
          }
          className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 border border-secondary shadow-sm rounded-xl px-5 py-10"
        >
          <h1 className="text-2xl text-center text-white">
            Enter Your New password
          </h1>
          <div className="flex flex-col space-y-3 my-10">
            <label className="text-white" htmlFor="password">
              Password
            </label>
            <input
              className="w-full outline-none border-2 bg-white py-1 px-5 border-secondary rounded-lg hover:border-tertiary"
              type="password"
              // name="email"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="text-white" htmlFor="code">
              Code
            </label>
            <input
              className="w-full outline-none border-2 bg-white py-1 px-5 border-secondary rounded-lg hover:border-tertiary"
              type="text"
              name="code"
              id="code"
              value={confirmcode}
              onChange={(e) => setConfirmCode(e.target.value)}
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-fit px-20 py-1 rounded-lg bg-tertiary border-2 border-white hover:bg-secondary font-black hover:border-tertiary text-white hover:text-tertiary"
              >
                {isloading ? "reseting..." : "reset"}
              </button>
            </div>
            {/* <div>
              <p className="text-center text-white">
                {" "}
                Or{" "}
                <Link className="text-tertiary" to={"/login"}>
                  {" "}
                  Login{" "}
                </Link>{" "}
                Here{" "}
              </p>
            </div> */}
            <p
              className={`text-xl text-center font-medium ${
                errorMessage && "text-red-400"
              } ${successMessage && "text-green-500"}`}
            >{`${successMessage && successMessage} ${
              errorMessage && errorMessage
            }`}</p>
          </div>
        </form>
      )}
    </div>
  );
}
