import { Outlet } from "react-router-dom";
import NavBar from "./tali and obed/nav";
import Footer from "./obed/Footer";


export default function RootLayout() {

  return (
    <div className="w-full relative h-auto font-serif  bg-primary">
    <div className="w-full relative py-5  px-5 flex flex-col md:px-16  mx-auto h-full">
      <div className="w-full fixed top-0">
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
