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
              ? "Step by step on how you can achieve an organic agency, with turnover of $9.000 / month"
              : "Step by step på hvordan du kan opnå et organisk agency, med omsætning på 60.000 DKK / måned"}
          </h1>
          <Link
            className="bg-blue-500 text-white p-[30px] py-[10px] rounded-full text-glow"
            href={
              currentPath === "/en"
                ? "https://calendly.com/organicmasterclass/30min?month=2024-01"
                : "https://calendly.com/organicmasterclass/dk?month=2024-01&fbclid=IwAR1QxiXMF-RBNdSKsZY1yYySZ4vWfzard9pSvdwqfGIfEZYjA9vIex6pyqA"
            }
          >
            {currentPath === "/en" ? "Start today" : "Start i dag"}
          </Link>
        </div>

        <div className="border-b-[1px] border-gray-600 py-[60px] grid grid-cols-2 navbar:grid-cols-1">
          <div className="text-white navbar:mb-[50px]">
            <img
              alt="logo"
              className="w-[70px] mb-[20px]"
              src="/logo.png"
            ></img>
            <p className="w-[30%] navbar:w-full">
              {currentPath === "/en"
                ? "The masterclass for you who want to make a profitable business"
                : "Masterclassen til dig der vil skabe en profitabel forretning"}
            </p>
          </div>
          <div className="grid grid-cols-2 items-end navbar:flex navbar:gap-[30px] foots:flex-col foots:items-start">
            <img
              alt="tiktok"
              className="w-[200px] object-cover"
              src="/tiktokpartner.png"
            ></img>
            <img
              alt="shopify"
              className="w-[150px]"
              src="/shopifypartner.png"
            ></img>
          </div>
        </div>
        <div className="flex items-center justify-between py-[20px] text-white foots:flex-col foots:items-start">
          <p>© {new Date().getFullYear()}, Organic Masterclass</p>
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
            <Link href={currentPath === "/en" ? "/en/guarantee" : "/garanti"}>
              {currentPath === "/en" ? "Guarantee" : "Garanti"}
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link href={"https://www.instagram.com/benjamin.madsen_/"}>
            <img
              alt="instagram"
              className="w-[30px]"
              src="/instagram.png"
            ></img>
          </Link>
          <p className="text-white">VAT: S & B Schoensted Consulting ApS</p>
        </div>
      </div>
    </section>
  );
}