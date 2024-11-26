import FooterNavDate from "./FooterNavData.json";

function Footer() {
  return (
    <footer className="w-full py-15  bg-[#FFFFFF]">
      <nav className="max-w-[1066px]   mx-auto gap-5 md:gap-0 p-3 md:p-2 grid content-center grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {FooterNavDate.map((navList, listIndex) => (
          <ul key={listIndex} className="space-y-1">
            {navList.map((item, index) => (
              <li
                key={index}
                className="nth-1:text-footer-cl text-center sm:text-start font-[500] nth-1:mb-3 "
              >
                <a
                  href="{item.url}"
                  className={` rounded-sm transition-colors duration-300 cursor-pointer hover:text-footer-cl text-[15px] focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-footer-cl font-medium ${
                    listIndex === 0 && index === 3
                      ? "after:content-['New'] inline-flex items-center after:ml-2 after:bg-[hsla(220,22%,96%,1)] after:rounded-full after:py-[2px] after:px-2 after:text-[14px]  after:font-normal"
                      : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </nav>
    </footer>
  );
}

export default Footer;
