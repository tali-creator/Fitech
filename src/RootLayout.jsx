import { Outlet } from "react-router-dom";
import NavBar from "./tali and obed/nav";
import Footer from "./obed/Footer";


export default function RootLayout() {

  return (
    <div className="w-full h-auto font-serif">
    <div className="w-full relative py-5 px-5 flex flex-col md:px-16  bg-primary mx-auto h-full">
      <div className="w-full relative">
        {/* Tali and Chukwu obed code goes  under here */}
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
      <div className="z-90">
        {/*Chukwu Obed content goes under here */}
        <Footer />
      </div>
  </div>  )
}
