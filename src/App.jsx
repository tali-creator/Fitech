import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Details from "./tali/details";
import Dashboard from "./dashboard";
import NavBar from "./tali and obed/nav";
import About from "./tali and obed/navigations/about";
import Service from "./tali and obed/navigations/service";
import Events from "./tali and obed/navigations/event";

function App() {
  return (
    <div className="w-full h-auto ">
      <div className="w-full py-5 px-5 md:px-16 bg-primary mx-auto h-full">
        {/* Tali and Chukwu obed code goes  under here */}
        <NavBar />
        <Routes>
          {/* others should put their code in dashboard.jsx */}
          <Route path="/" element={<Dashboard />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/event" element={<Events />} />
          <Route  path="/user/:id" element={<Details />} />
        </Routes>
        {/*Chukwu Obed content goes under here */}
        
      </div>
    </div>
  );
}

export default App;
