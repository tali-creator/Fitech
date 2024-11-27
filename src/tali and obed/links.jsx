import { useState } from "react";
import Button from "./buttons";
import { Link } from "react-router-dom";

export default function Links() {
  const [toggle, setToggle] = useState(false);
  function handleClick() {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }

  return (
    <div className="text-secondary flex space-x-3">
      <div className="sm:flex space-x-3 hidden ">
        <Link className=" hover:text-white" to="/">
          Home
        </Link>
        <Link className=" hover:text-white" to="/about">
          About
        </Link>
        <Link className=" hover:text-white" to="/service">
          Service
        </Link>
        <Link className=" hover:text-white" to="/event">
          Events
        </Link>
      </div>

      <div
        style={{
          position: toggle ? "absolute" : "",
          backgroundColor: toggle ? "rgba(18, 19, 42, 1)" : "",
        }}
        className="top-0 left-0 w-full transition ease-linear duration-300">
        {" "}
        <div  className="w-full flex justify-end p-3 cursor-pointer ">
          <div style={{padding: toggle? "10px" : ""}} onClick={handleClick} className="space-y-1 sm:hidden w-fit">
            <div
              style={{
                display: toggle ? "none" : "block",
                padding: toggle ? "-50px" : "0px",
              }}
              className="w-7 h-1 transition-all hover:bg-white duration-300 bg-secondary rounded"></div>
            <div
              style={{ transform: `${toggle ? 'translateX(-0px)' : 'translateX(0px)'} ${toggle ? 'rotate(45deg)' : 'rotate(0deg)'}`
               }}
              className="w-7 h-1 transition-all hover:bg-white duration-300 bg-secondary rounded"></div>
            <div
              style={{ transform: `${toggle ? 'translateY(-9px)' : 'translateX(0px)'} ${toggle ? 'rotate(-45deg)' : 'rotate(0deg)'}` }}
              className="w-7 h-1 transition-all hover:bg-white duration-300 bg-secondary rounded"></div>
          </div>
        </div>
        <div
          style={{ display: `${toggle ? "flex" : "none"}` }}
          className=" flex-col w-full justify-start items-start px-10">
          <Link onClick={handleClick}
            className=" p-2 w-full hover:border-b-2 transition-all duration-200 hover:text-white"
            to="/">
            Home
          </Link>
          <Link onClick={handleClick}
            className=" p-2 w-full hover:border-b-2 transition-all duration-200 hover:text-white"
            to="/about">
            About
          </Link>
          <Link onClick={handleClick}
            className=" p-2 w-full hover:border-b-2 transition-all duration-200 hover:text-white"
            to="/service">
            Service
          </Link>
          <Link onClick={handleClick}
            className=" p-2 w-full hover:border-b-2 transition-all duration-200 hover:text-white"
            to="/event">
            Events
          </Link>
          <div className="flex space-x-4 justify-end w-full my-4">
          <Link onClick={handleClick} className="flex flex-none" to={"/login"}> <Button button={"Login"} /></Link>
          <Link onClick={handleClick} className="flex flex-none" to={"/signIn"}> <Button button={"Sign in"} /></Link>
          </div>
              </div>
            </div>
            <div className="hidden sm:flex flex-none space-x-2 pr-2">
          <Link className="flex flex-none" to={"/login"}> <Button button={"Login"} /></Link>
          <Link className="flex flex-none" to={"/signIn"}> <Button button={"Sign in"} /></Link>
            </div>
          </div>
  );
}
