import Logo from "./logo";
import Links from "./links";

export default function NavBar(){
    return(
        <div className="flex justify-between px-8  items-center fixed top-0 py-3 left-0 bg-primary z-50 w-full">
            <Logo />
            <div className=""> 
            <Links />
            </div>
        </div>
    )
}