import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Details from "./tali/details";
import Dashboard from "./dashboard";
import NavBar from "./tali and obed/nav";

function App() {
  return (
    <div className="w-full h-auto ">
      <div className="w-full py-5 px-5 md:px-16 bg-primary mx-auto h-full">
        {/* Tali and Chukwu obed code goes  under here */}
        <NavBar />
        <Routes>
          {/* others should put their code in dashboard.jsx */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/user/:id" element={<Details />} />
        </Routes>
        {/*Chukwu Obed content goes under here */}
      </div>
    </div>
  );
}

export default App;
