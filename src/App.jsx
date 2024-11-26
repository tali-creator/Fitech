import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Testimonies from "./tali/Testimonies";
import Details from "./tali/details";

function App() {
  return (
    <div className="w-full h-auto ">
      <div className="w-full py-5 px-5 md:px-16 bg-primary mx-auto h-full">
        {/* <img src="/fitech-logo.png" className="w-[100px] h-[100px]" alt="" />
        <h1 className="text-3xl font-black w-fit text-center text-white">
          Fitech
        </h1> */}

        {/* Chuku obesd and Tali content goes under here */}

        {/* Aisha Kabir content goes under here */}

        {/* Ruben Luka content goes under here */}

        {/* Taibat Olayinka content under goes here */}

        {/* Rufai Usman content goes under here */}

        {/* Jethro irmiya content goes under here */}

        {/* Fatima's content goes under here */}

        {/* Tali Nanzing Moses content under goes here */}
        <Testimonies />
        {/*Chukwu Obed content goes under here */}

        <Routes>
          <Route path="/user/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
