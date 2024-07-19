import Link from "next/link";
import { useRouter } from "next/router";
export default function Footer() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <section className="py-[100px] pb-[30px] bg-transparent">
      <div className="w-sectionMain mx-auto max-w-main">
        <div className="w-[90%] mx-auto max-w-[800px] mb-[60px] flex flex-col items-center">
          <h1 className="text-center text-white text-[40px] font-[700] mb-[40px]">
            {currentPath === "/en"
              ? "Step by step on how you can achieve an OCMA"
              : "Step by step på hvordan du kan opnå et OCMA"}
          </h1>
          <Link
            className="bg-blue-500 text-white p-[30px] py-[10px] rounded-full text-glow"
            href={
              currentPath === "/en"
                ? "https://calendly.com/ocmamasterclass-dk/30min?fbclid=IwAR39mtx2qWsMji5YUCmT7_dDDs4e7fCd_2oH_VBE_DVxq6F4Cc_CNaWwBU0&month=2024-03"
                : "https://calendly.com/ocmamasterclass-dk/30min?fbclid=IwAR39mtx2qWsMji5YUCmT7_dDDs4e7fCd_2oH_VBE_DVxq6F4Cc_CNaWwBU0&month=2024-03"
            }
          >
            {currentPath === "/en" ? "Apply today" : "Ansøg i dag"}
          </Link>
        </div>

        <div className="border-b-[1px] border-gray-600 py-[60px] grid grid-cols-2 navbar:grid-cols-1">
          <div className="text-white navbar:mb-[50px]">
            <img
              alt="logo"
              className="w-[100px] mb-[20px]" src="/omca.png"
            ></img>
            <p className="w-[30%] navbar:w-full">
              {currentPath === "/en"
                ? "The masterclass for you who want to make a profitable business"
                : "Masterclassen til dig der vil skabe en profitabel forretning"}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between py-[20px] text-white foots:flex-col foots:items-start">
          <p>© {new Date().getFullYear()}, OCMA Masterclass</p>
          <div className="flex items-center gap-[20px] text-white">
            <Link
              href={
                currentPath === "/en" ? "/en/privacy" : "/privatlivspolitik"
              }
            >
              {currentPath === "/en" ? "Privacy policy" : "Privatlivspolitik"}
            </Link>
            <Link
              href={
                currentPath === "/en"
                  ? "/en/tradeconditions"
                  : "/handelsbetingelser"
              }
            >
              {currentPath === "/en"
                ? "Trade conditions"
                : "Handelsbetingelser"}
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link href={"https://www.instagram.com/benjamin.madsen_/"}>
            <img
              alt="instagram"
              className="w-[30px] text-glow"
              src="/instagram.png"
            ></img>
          </Link>
          <p className="text-white">VAT: S & B Schoensted Consulting ApS</p>
        </div>
      </div>
    </section>
  );
}