import { Link, Element } from "react-scroll";
import { Reveal } from "./Animations/Reveal";
import { useRouter } from "next/router";
import { ArrowDown, ArrowRight } from "lucide-react";
import YoutubeVideo from "./demovid";
import YoutubeVideoEng from "./demovideng";
import WistiaVideoEmbed from "./wistia-embed";
import WistiaVideo from "./wistia-embed";
import EnglishWistiaVideo from "./wistia-english";

export default function Hero() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <section className="py-[220px] pb-[40px] bg-transparent">
      <div className="w-[90%] mx-auto max-w-4xl">
        <div className="py-[20px] heroOne:py-0">
          <Reveal>
            <img className="w-24 mb-6" src="/stars-5.svg"></img>
          </Reveal>
          <Reveal>
            <h1 className="text-heroHeading text-white font-[700] mb-[20px] heroTwo:text-[30px]">
              {currentPath === "/en"
                ? "Perfected masterclass that guides you step by step in building an"
                : "Veludarbejdet masterclass, der guider dig trin for trin i opbygningen af et"}{" "}
              <span className="text-blue-500">
                {currentPath === "/en"
                  ? "OCMA"
                  : "OCMA"}
              </span>
            </h1>
          </Reveal>
          <div className="items-center justify-center flex mb-10 sm:hidden sm:mb-[0px]">
          <Reveal>
            {currentPath === "/en" ? (
              <div className="flex flex-col items-center">
                <div>
                  <EnglishWistiaVideo />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <WistiaVideo />
              </div>
            )}
          </Reveal>
        </div>
          <Reveal>
            <p className="text-heroDescription text-gray-200 mb-[40px] w-[90%]">
              {currentPath === "/en"
                ? "Using our comprehensive framework, you'll get guidance on how to build a business, generate profits and scale it to new heights - just like we did it ourselves."
                : "Ved hjælp af vores omfattende framework får du vejledning i, hvordan du opbygger en virksomhed, genererer profit og skalerer den til nye højder - nøjagtigt som vi gjorde det selv."}
            </p>
          </Reveal>
          <div>
            <Reveal>
              <div className="flex gap-[10px] heroTwo:flex-col">
                <a
                  className="text-glow bg-blue-500 text-white p-[30px] py-[10px] rounded-full flex items-center gap-[10px]"
                  href={
                    currentPath === "/en"
                      ? "https://calendly.com/ocmamasterclass-dk/optagelses-mode-clone?month=2024-05"
                      : "https://calendly.com/ocmamasterclass-dk/optagelses-mode-clone?month=2024-05"
                  }
                >
                  {currentPath === "/en" ? "Apply today" : "Ansøg i dag"}
                  <span>
                    <ArrowRight size={20} />
                  </span>
                </a>

                <Link
                  to="omos"
                  smooth={true}
                  duration={500}
                  className="text-glow bg-blue-500 text-white p-[30px] py-[10px] rounded-full flex items-center gap-[10px]"
                >
                  {currentPath === "/en" ? "Hear more" : "Hør mere"}
                  <span>
                    <ArrowRight size={20} />
                  </span>
                </Link>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex items-center mt-10">
                <img className="w-14 rounded-full" src="/tooltip/1.jpg"></img>
                <img className="w-14 rounded-full ml-[-14px]" src="/tooltip/2.jpg"></img>
                <img className="w-14 rounded-full ml-[-14px]" src="/tooltip/3.jpg"></img>
                <img className="w-14 rounded-full ml-[-14px]" src="/tooltip/4.jpg"></img>
                <img className="w-14 rounded-full ml-[-14px]" src="/tooltip/5.jpg"></img>
                <p className="ml-4 text-xl">{currentPath === "/en" ? "+170 active students":"+170 aktive elever"}</p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="items-center justify-center hidden sm:flex">
          <Reveal>
            {currentPath === "/en" ? (
              <div className="flex flex-col items-center">
                <EnglishWistiaVideo />
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <WistiaVideo />
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}