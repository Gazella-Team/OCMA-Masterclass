import Language from "../language";
import { Opc } from "../Animations/Opc";
import { Link, Element } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Reveal } from "../Animations/Reveal";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <>
      <Opc>
        <nav style={{backdropFilter: "blur(20px)"}} className="fixed w-full flex items-center h-[80px] z-10">
          <div className="w-[96%] mx-auto max-w-[1500px] p-[20px] rounded-main flex items-center justify-between">
            <a href={"/"} className="text-white font-[700] text-[22px]">
              <img className="w-[100px]" src="/omca.png"></img>
            </a>

            <div className="flex items-center gap-[50px]">
              <div className="flex items-center gap-[30px] font-[500] text-[16px] text-white navbar:hidden">
                <Link
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  {currentPath === "/en" ? "Recommendations" : "Anmeldelser"}
                </Link>

                <Link
                  to="content"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  {currentPath === "/en" ? "Content" : "Indhold"}
                </Link>
                <Link
                  to="omos"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  {currentPath === "/en" ? "About" : "Om os"}
                </Link>
              </div>
              <div className="navbar:hidden">
                <Language />
              </div>

              <div className="flex items-center gap-[10px] navbar:hidden">
                <a
                  className="text-white p-[10px] py-[12px] rounded-full font-[500]"
                  href={
                    currentPath === "/en"
                      ? "https://calendly.com/ocmamasterclass-dk/30min?fbclid=IwAR39mtx2qWsMji5YUCmT7_dDDs4e7fCd_2oH_VBE_DVxq6F4Cc_CNaWwBU0&month=2024-03"
                      : "https://calendly.com/ocmamasterclass-dk/30min?fbclid=IwAR39mtx2qWsMji5YUCmT7_dDDs4e7fCd_2oH_VBE_DVxq6F4Cc_CNaWwBU0&month=2024-03"
                  }
                >
                  {currentPath === "/en" ? "Start today" : "Start i dag"}
                </a>
                <Link
                  to="omos"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer bg-blue-500 text-white p-[34px] py-[12px] rounded-full font-[500]"
                  onClick={() => setMenuClicked(false)}
                >
                  {currentPath === "/en" ? "Hear more" : "Hør mere"}
                </Link>
              </div>
              <div className="nav:hidden">
                {menuClicked ? (
                  <X
                    onClick={() => setMenuClicked(false)}
                    className="cursor-pointer"
                    size={28}
                  />
                ) : (
                  <Menu
                    onClick={() => setMenuClicked(true)}
                    className="cursor-pointer"
                    size={28}
                  />
                )}
              </div>
            </div>
          </div>
        </nav>
      </Opc>
      {menuClicked ? (
        <div className="fixed w-full top-[120px] z-10 nav:hidden">
          <Reveal>
            <div style={{background: "linear-gradient(338deg, rgba(3,2,32,1) 0%, rgba(30,12,119,1) 49%, rgba(8,5,82,1) 100%)"}} className="w-[94%] mx-auto bg-white shadow-navbar rounded-main p-[20px]">
              <div className="flex flex-col gap-[20px] mb-[20px]">
                <Link
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-[20px] font-[400]"
                  onClick={() => setMenuClicked(false)}
                >
                  {currentPath === "/en" ? "Recommendations" : "Anmeldelser"}
                </Link>
                <Link
                  to="content"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-[20px] font-[400]"
                  onClick={() => setMenuClicked(false)}
                >
                  {currentPath === "/en" ? "Content" : "Indhold"}
                </Link>

                <Link
                  to="omos"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-[20px] font-[400]"
                  onClick={() => setMenuClicked(false)}
                >
                  {currentPath === "/en" ? "About" : "Om os"}
                </Link>
              </div>
              <div className="inline-block mb-[30px]">
                <Language />
              </div>
              <div className="flex flex-col gap-[10px]">
                <a
                  className="bg-blue-500 text-white p-[14px] py-[8px] rounded-main font-[500]"
                  href={
                    currentPath === "/en"
                      ? "https://calendly.com/ocmamasterclass-dk/30min?fbclid=IwAR39mtx2qWsMji5YUCmT7_dDDs4e7fCd_2oH_VBE_DVxq6F4Cc_CNaWwBU0&month=2024-03"
                      : "https://calendly.com/ocmamasterclass-dk/30min?fbclid=IwAR39mtx2qWsMji5YUCmT7_dDDs4e7fCd_2oH_VBE_DVxq6F4Cc_CNaWwBU0&month=2024-03"
                  }
                >
                  {currentPath === "/en" ? "Start today" : "Start i dag"}
                </a>
                <Link
                  to="omos"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer bg-blue-500 text-white p-[14px] py-[8px] rounded-main font-[500]"
                  onClick={() => setMenuClicked(false)}
                >
                  {currentPath === "/en" ? "Hear more" : "Hør mere"}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      ) : null}
    </>
  );
}