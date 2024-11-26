import { Link } from "react-router-dom";

export default function Logo(){
    return(
        <Link to={"/"} className="flex items-center space-x-1 font-serif">
            <img className="w-[40px] sm:w-[50px] md:w-[70px]" src="/fitech-logo.png" alt="" />
            <span className="text-white font-black text-sm sm:text-md md:text-lg">Fitech</span>
        </Link>
    )
}