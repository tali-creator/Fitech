import { useEffect, useState } from "react";

function Footer() {
  const url = import.meta.env.VITE_DATA_API;
  const [navData, setNavData] = useState([]);
  useEffect(() => {
    const FetchData = async () => {
      const saveFooterData = JSON.parse(localStorage.getItem("footerData"));
      if (saveFooterData) {
        setNavData(saveFooterData);
      }
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("failed to fetch Data");
        }
        const data = await response.json();
        localStorage.setItem("footerData", JSON.stringify(data.menu));
        setNavData(data.menu);
      } catch (error) {
        console.error(error);
      }
    };
    FetchData();
  }, []);

  return (
    <footer className="w-full h-full  bg-[#FFFFFF]">
      <nav className="max-w-[1300px]  mx-auto  gap-y-8 lg:gap-0 p-3 md:p-2  content-center grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))]   my-10">
        {/* loop Through the data to create ul for each group  */}
        {navData.map((navList, listIndex) => (
          <ul key={listIndex} className="space-y-2  sm:ml-20">
            {/* loop Through each group to create a li */}
            {navList.items.map((item, index) => (
              <li
                key={index}
                className="nth-1:[&>a]:text-xl   text-center sm:text-start nth-1:mb-3"
              >
                <a
                  href="{item.url}"
                  className={` rounded-sm transition-colors duration-300 cursor-pointer  text-[20px] focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-footer-cl  ${
                    listIndex === 0 && index === 3
                      ? "after:content-['New'] inline-flex items-center after:ml-2 after:bg-[hsla(220,22%,96%,1)] after:rounded-full after:py-[2px] after:px-2 after:text-[14px] "
                      : ""
                  } ${
                    index === 0
                      ? "text-[18px] text-footer-cl hover:text-black"
                      : "hover:text-footer-cl"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </nav>
      <div className="bg-tertiary py-10 ">
        <div className=" px-20 flex flex-col-reverse lg:flex-row gap-12 items-center justify-between">
          <p className="text-[#FFFFFF] lg:text-start leading-8 text-center text-2xl">{`© ${new Date().getFullYear()}  Fitech Community. All rights reserved.`}</p>

          <div className="flex flex-wrap lg:flex-nowrap  justify-center items-center gap-8 [&_*_img]:w-8 [&_*_img]:aspect-square">
            <figure>
              <a href="">
                <img src="/footer-icon/x.png" alt="twitter icon" />
              </a>
            </figure>
            <figure>
              <a href="">
                <img src="/footer-icon/linkdin.png" alt="linkdin icon" />
              </a>
            </figure>
            <figure>
              <a href="">
                <img src="/footer-icon/facebook.png" alt="facebook icon" />
              </a>
            </figure>
            <figure>
              <a href="">
                <img src="/footer-icon/github.png" alt="gitHub icon" />
              </a>
            </figure>
            <figure>
              <a href="">
                <img src="/footer-icon/social-1.png" alt="social icon" />
              </a>
            </figure>
            <figure>
              <a href="">
                <img src="/footer-icon/social-2.png" alt="social icon" />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
