import { useState } from "react";
import Button from "./buttons";
import { NavLink } from "react-router-dom";

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
    <div className="text-secondary flex space-x-4 justify-center items-center">
      <div className="sm:flex space-x-6 hidden text-md">
        <NavLink className=" transition-colors duration-300 hover:text-white" to="/">
          Home
        </NavLink>
        <NavLink className=" transition-colors duration-300 hover:text-white" to="/about">
          About
        </NavLink>
        <NavLink className=" transition-colors duration-300 hover:text-white" to="/service">
          Service
        </NavLink>
        <NavLink className=" transition-colors duration-300 hover:text-white" to="/event">
          Events
        </NavLink>
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
             
              className={`w-7 h-1 transform transition-all hover:bg-white duration-300 bg-secondary rounded ${toggle && "-rotate-45 translate-y-2"}`}></div>
            <div
              
              className={`w-7 h-1 transform transition-all hover:bg-white duration-300 bg-secondary rounded ${toggle && "hidden"}`}></div>
            <div
             
              className={`w-7 h-1 transform transition-all hover:bg-white duration-300 bg-secondary rounded ${toggle && "rotate-45"}`}></div>
          </div>
        </div>
        <div
          style={{ display: `${toggle ? "flex" : "none"}` }}
          className=" flex-col w-full justify-start items-start px-10">
          <NavLink onClick={handleClick}
            className=" p-2 w-full hover:border-b-2 transition-all duration-200 hover:text-white"
            to="/">
            Home
          </NavLink>
          <NavLink onClick={handleClick}
            className=" p-2 w-full hover:border-b-2 transition-all duration-200 hover:text-white"
            to="/about">
            About
          </NavLink>
          <NavLink onClick={handleClick}
            className=" p-2 w-full hover:border-b-2 transition-all duration-200 hover:text-white"
            to="/service">
            Service
          </NavLink>
          <NavLink onClick={handleClick}
            className=" p-2 w-full hover:border-b-2 transition-all duration-200 hover:text-white"
            to="/event">
            Events
          </NavLink>
          <div className="flex space-x-4 justify-end w-full my-4">
          <NavLink onClick={handleClick} className="flex flex-none" to={"/login"}> <Button button={"Login"} /></NavLink>
          <NavLink onClick={handleClick} className="flex flex-none" to={"/signIn"}> <Button button={"Sign in"} /></NavLink>
          </div>
              </div>
            </div>
            <div className="hidden sm:flex flex-none space-x-4 pr-2">
          <NavLink className="flex flex-none " to={"/login"}> <Button button={"Login"} /></NavLink>
          <NavLink className="flex flex-none" to={"/signIn"}> <Button button={"Sign in"} /></NavLink>
            </div>
          </div>
  );
}
