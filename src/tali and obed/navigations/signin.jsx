import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";

export default function SignInPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isLoader, setLoader] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const validateFirstName = () => {
    if (!firstname.trim()) {
      setFirstNameError("Enter a valid first name");
    } else {
      setFirstNameError("");
    }
  };

  const validateLastName = () => {
    if (!lastname.trim()) {
      setLastNameError("Enter a valid last name");
    } else {
      setLastNameError("");
    }
  };

  const validateAge = () => {
    if (!age.trim()) {
      setAgeError("Enter a valid Age");
    } else if (age == isNaN) {
      setAgeError("Age must be a number");
    } else {
      setAgeError("");
    }
  };

  const validateGender = () => {
    if (!gender) {
      setGenderError("Choose a Gender");
    } else {
      setGenderError("");
    }
  };

  const validateEmail = () => {
    const regex = "/^[^s@]+@[^s@]+.[^s@]+$/";
    if (!email.trim()) {
      setEmailError("Email is required");
    } else if (!regex) {
      setEmailError("Please enter a valid Email");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError("password must not be less than 8 characters ");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPassword !== password) {
      setConfirmPasswordError("passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const userData = {
    email,
    firstname,
    lastname,
    password,
    age,
    gender,
  };

  const url = "https://6749c1828680202966327f1c.mockapi.io/Users";

  const signUpUser = async () => {
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");
    setUserMessage("");

    try {
      // chect if user had an account
      const getResponse = await fetch(url);
      if (!getResponse.ok) {
        throw new Error(
          `An error occurred while signing up. status: ${getResponse.statusText}`
        );
      }
      const getUsers = await getResponse.json();
      const userExist = getUsers.some((user) => user.email === email);
      console.log(userExist);

      if (userExist) {
        // set a message to indicate user had and account
        setUserMessage("User with this email already exist. please login");
        // setTimeout(() => {
        //   setLoader(true);
        //   setTimeout(() => {
        //     setLoader(false);
        //     navigate("/login");
        //   }, 1200);
        // }, 1000);
        return;
      }

      // post the usser data
      const postResponse = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (!postResponse.ok) {
        throw new Error(
          `An error occurred while signing up. status: ${postResponse.statusText}`
        );
      }
      // const data = await postResponse.json();

      setFirstName("");
      setLastName("");
      setEmail("");
      setAge("");
      setGender("");
      setPassword("");
      setConfirmPassword("");

      setSuccessMessage("Sign-up successful!");
      navigate("/login")
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while signing up. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  function validate(e) {
    e.preventDefault();
    validateAge();
    validateFirstName();
    validateEmail();
    validateGender();
    validateLastName();
    validateConfirmPassword();
    validatePassword();

    setSuccessMessage("");
    setErrorMessage("");
    setUserMessage("");

    if (
      !(
        ageError ||
        firstNameError ||
        emailError ||
        genderError ||
        lastNameError ||
        confirmPasswordError ||
        passwordError
      ) &&
      firstname &&
      lastname &&
      email &&
      age &&
      gender &&
      password &&
      confirmPassword
    ) {
      signUpUser();
    }
  }

  useEffect(() => {}, []);
  return (
    <div className="w-full h-auto bg-primary pt-20 animate-slide-in">
      <div className="flex justify-center ">
        <h1 className="text-white font-black text-3xl flex">
          Sign In to
          <img className="w-10 h-10 mx-2" src="/fitech-logo.png" alt="" />
          Fitech
        </h1>
      </div>
      <div className="w-full h-auto flex  justify-center items-center">
        <div className="w-full sm:w-4/5 relative lg:w-2/3 shadow-[0px_0px_3px_rgba(225,225,225,0.7)] mt-5 lg:px-[70px] xl:px-[170px] px-4 py-6 rounded-md h-auto">
          <form
            onSubmit={validate}
            action=""
            className="w-full h-full space-y-4"
          >
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="flex flex-col  space-y-1">
                <label className="text-white " htmlFor="fname">
                  First Name:
                </label>
                <input
                  onBlur={validateFirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className=" border-secondary px-3 outline-none bg-white rounded-md hover:border-tertiary border-2 transition ease-linear duration-200"
                  type="fname"
                  name=""
                  id="fname   required"
                  value={firstname}
                />
                <span className="text-sm text-red-700 italic pb-2">
                  {firstNameError}
                </span>
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-white " htmlFor="lname">
                  Last Name:
                </label>
                <input
                  onBlur={validateLastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className=" border-secondary px-3 outline-none bg-white rounded-md hover:border-tertiary border-2 transition ease-linear duration-200"
                  type="lname"
                  name=""
                  id="lname   required"
                  value={lastname}
                />
                <span className="text-sm text-red-700 italic pb-2">
                  {lastNameError}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="flex flex-col space-y-1">
                <label className="text-white " htmlFor="email">
                  Email Adress:
                </label>
                <input
                  onBlur={validateEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" border-secondary px-3 outline-none bg-white rounded-md hover:border-tertiary border-2 transition ease-linear duration-200"
                  type="email"
                  name=""
                  id="email   required"
                  value={email}
                />
                <span className="text-sm text-red-700 italic pb-2">
                  {emailError}
                </span>
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-white " htmlFor="age">
                  Age:
                </label>
                <input
                  onBlur={validateAge}
                  onChange={(e) => setAge(e.target.value)}
                  className=" border-secondary px-3 outline-none bg-white rounded-md hover:border-tertiary border-2 transition ease-linear duration-200"
                  type="number"
                  name=""
                  id="age   required"
                  value={age}
                />
                <span className="text-sm text-red-700 italic pb-2">
                  {ageError}
                </span>
              </div>
            </div>
            <div className="flex space-x-2 items-center ">
              <p className="text-white">Gender:</p>
              <label className="text-white " htmlFor="male">
                Male
              </label>
              <input
                onBlur={validateGender}
                onChange={(e) => setGender(e.target.value)}
                className=" border-secondary px-3 outline-none bg-white rounded-md hover:border-tertiary border-2 transition ease-linear duration-200"
                type="radio"
                value="male"
                name="gender"
                id="male"
                required
              />

              <label className="text-white " htmlFor="female">
                Female
              </label>
              <input
                onChange={(e) => setGender(e.target.value)}
                className=" border-secondary px-3 outline-none bg-white rounded-md hover:border-tertiary border-2 transition ease-linear duration-200"
                type="radio"
                name="gender"
                value="female"
                id="female"
                required
              />

              <span className="text-sm text-red-700 italic pb-2">
                {genderError}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between">
              <div className="flex flex-col space-y-1">
                <label className="text-white " htmlFor="password">
                  Password:
                </label>
                <input
                  onBlur={validatePassword}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" border-secondary px-3 outline-none bg-white rounded-md hover:border-tertiary border-2 transition ease-linear duration-200"
                  type="password"
                  name=""
                  id="password   required"
                  value={password}
                />
                <span className="text-sm text-red-700 italic pb-2">
                  {passwordError}
                </span>
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-white " htmlFor="ConfirmPassword">
                  Confirm Password:
                </label>
                <input
                  onBlur={validateConfirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className=" border-secondary px-3 outline-none bg-white rounded-md hover:border-tertiary border-2 transition ease-linear duration-200"
                  type="Password"
                  name=""
                  id="ConfirmPassword   required"
                  value={confirmPassword}
                />
                <span className="text-sm text-red-700 italic pb-2">
                  {confirmPasswordError}
                </span>
              </div>
            </div>
            <div>
              {/* for sign up message */}
              <p
                className={` font-semibold text-xl text-center ${
                  errorMessage || userMessage ? "text-red-400" : ""
                } ${successMessage && "text-green-500"}`}
              >{`${errorMessage && errorMessage} ${
                successMessage && successMessage
              } ${userMessage && userMessage}`}</p>
            </div>
            <div className="flex items-center flex-col sm:flex-row justify-between">
              <div className=" w-full h-12 flex justify-center py-2">
                <button
                  disabled={loading}
                  className={`bg-tertiary px-10 font-black rounded-lg text-[#FFFFFF] hover:bg-secondary hover:text-tertiary hover:border-tertiary border-2 transition ease-linear duration-200 text-lg ${
                    loading && "opacity-70 cursor-not-allowed"
                  }`}
                >
                  {loading ? "submitting..." : "Sign Up"}
                  {loading && <Loader />}
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
            Already have an account?
            <Link className="text-tertiary hover:underline" to={"/login"}>
              Login
            </Link>
            here
          </div>
          {isLoader && <Loader />}
        </div>
      </div>
    </div>
  );
}
