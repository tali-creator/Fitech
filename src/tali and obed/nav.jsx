import Logo from "./logo";
import Links from "./links";

export default function NavBar(){
    return(
        <div className="flex justify-between px-8  items-center  py-3 left-0 bg-primary z-90 w-full">

            <Logo />
            <div className=""> 
            <Links />
            </div>
        </div>
    )
}