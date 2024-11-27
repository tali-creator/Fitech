import { useEffect, useState } from "react";

function Footer() {
  const url = "http://localhost:8000/menu";
  const [navData, setNaveData] = useState([]);
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("failed to fetch Data");
        }
        const data = await response.json();
        setNaveData(data);
      } catch (error) {
        console.error(error);
        
      }
    };
    FetchData();
  },[]);

  return (
    <footer className="w-full py-8 h-full  bg-[#FFFFFF]">
      <nav className="max-w-[1066px] mx-auto  md:gap-0 p-3 md:p-2  content-center grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] ">
        {navData.map((navList, listIndex) => 
        (<ul key={listIndex} className="space-y-1 gap-5 sm:ml-16">
          {navList.items.map((item, index) => (
            <li
              key={index}
              className="nth-1:   text-center sm:text-start font-[500] nth-1:mb-3 "
            >
              <a
                href="{item.url}"
                className={` rounded-sm transition-colors duration-300 cursor-pointer  text-[15px] focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-footer-cl font-medium ${
                  listIndex === 0 && index === 3
                    ? "after:content-['New'] inline-flex items-center after:ml-2 after:bg-[hsla(220,22%,96%,1)] after:rounded-full after:py-[2px] after:px-2 after:text-[14px] text- after:font-normal"
                    : ""
                } ${index === 0 ? "text-[18px] text-footer-cl hover:text-black": "hover:text-footer-cl"}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        )
         
        )}
      </nav>
    </footer>
  );
}

export default Footer;
