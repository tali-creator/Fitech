import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Details from "./tali/details";
import Dashboard from "./dashboard";
import NavBar from "./tali and obed/nav";
import Footer from "./obed/Footer";
import About from "./tali and obed/navigations/about";
import Service from "./tali and obed/navigations/service";
import Events from "./tali and obed/navigations/event";
import LoginPage from "./tali and obed/navigations/login";
import SignInPage from "./tali and obed/navigations/signin";
import Recovery from "./tali and obed/navigations/recovery";

function App() {
  return (
    <div className="w-full h-auto font-serif">
      <div className="w-full py-5 px-5 flex flex-col md:px-16 bg-primary mx-auto h-full">
        <div>
          {/* Tali and Chukwu obed code goes  under here */}
          <NavBar />
        </div>
        <div>
          <Routes>
            {/* others should put their code in dashboard.jsx */}
            <Route path="/" element={<Dashboard />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/event" element={<Events />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/recovery" element={<Recovery />} />
            <Route exact path="/signIn" element={<SignInPage />} />
            <Route path="/user/:id" element={<Details />} />
          </Routes>
        </div>
        <div className="z-90">
          {/*Chukwu Obed content goes under here */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
