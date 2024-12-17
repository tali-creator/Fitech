import React from "react";
import Rectangle6310 from "../assets/Rectangle_6310.svg";
import List from "../assets/List.svg";

export default function FirstPageFooter() {
  return (
    <footer className="relative overflow-hidden bg-primary">
      <img
        src={Rectangle6310}
        alt="Footer Background"
        className="w-full h-auto"
      />
      
      <div className="absolute inset-0 flex justify-center items-center px-4">
        <img
          src={List}
          alt="Logos List"
          className="w-3/4 md:w-3/5 lg:w-3/4 max-w-4xl"
        />
      </div>
    </footer>
  );
}
