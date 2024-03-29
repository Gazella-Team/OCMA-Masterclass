import SectionStarter from "./sectionstarter";
import { Reveal } from "./Animations/Reveal";
import { use, useState } from "react";
import { Play, Clock, PlusCircle, XCircle } from "lucide-react";
import { useRouter } from "next/router";

const classContentData = [
  {
    image: "/contents/new01.jpg",
    mainHeading: "Dit fundament",
    videoQuantity: "1",
    timeOfModule: "0:09:28",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Introduktion",
        moduleContentTime: "09:28",
      },
    ],
  },
  {
    image: "/contents/new02.jpg",
    mainHeading: "Agency fundamenter",
    videoQuantity: "3",
    timeOfModule: "0:17:26",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: " Skab dit tilbud",
        moduleContentTime: "08:02",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Systemer og værktøjer vi bruger",
        moduleContentTime: "06:24",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Lav din egen hjemmeside let",
        moduleContentTime: "03.00",
      },
    ],
  },
  {
    image: "/contents/new03.jpg",
    mainHeading: "Fremskaffelse af betalende kunder",
    videoQuantity: "3",
    timeOfModule: "1:04:15",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Introduktion til outreach",
        moduleContentTime: "04:07",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Hvordan du finder kunder",
        moduleContentTime: "31:17",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Succes Formularen til en masse kunder",
        moduleContentTime: "28:51",
      },
    ],
  },
  {
    image: "/contents/new04.jpg",
    mainHeading: "Lukke de store aftaler ",
    videoQuantity: "4",
    timeOfModule: "0:26:06",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Svært ved at lukke kunder - gør dette!",
        moduleContentTime: "05:07",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Hvordan du skal Kommunikere med kunden",
        moduleContentTime: "04:55",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Hvordan du lukker en stor kunde på stedet",
        moduleContentTime: "10:01",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Hvordan du lukker den bedste aftale muligt",
        moduleContentTime: "06:03",
      },
    ],
  },
  {
    image: "/contents/08.jpeg",
    mainHeading: "Levere resultater",
    videoQuantity: "7",
    timeOfModule: "2:55:35",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading:
          "Hvordan algoritmerne virker og hvordan du profiterer på dette",
        moduleContentTime: "19:00",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Din første video",
        moduleContentTime: "27:10",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Hvilke systemer du skal bruge og hvorfor",
        moduleContentTime: "1:01:16",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Hvordan du redigerer som en ekspert",
        moduleContentTime: "40:38",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Hemmelige teknikker ved postning",
        moduleContentTime: "10:29",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Bedste metoder til Ideudvikling",
        moduleContentTime: "07:06",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Hvordan du garanterer dig gode resultater",
        moduleContentTime: "10:36",
      },
    ],
  },
  {
    image: "/contents/09.jpeg",
    mainHeading: "Drift af et profitabelt OCMA",
    videoQuantity: "3",
    timeOfModule: "07:38",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Håndtering af betaling fra kunder",
        moduleContentTime: "02:23",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading:
          "Håndtering af udgifter for optimal profit margin",
        moduleContentTime: "03:09",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading:
          "Hvordan du accepterer store betalinger fra kunder",
        moduleContentTime: "02:06",
      },
    ],
  },
  {
    image: "/contents/new03.jpg",
    mainHeading: "Implementering Af vores metoder",
    videoQuantity: "1",
    timeOfModule: "12:19",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Hvordan du implementerer alle disse tiltag selv",
        moduleContentTime: "12:19",
      },
    ],
  },
  {
    image: "/contents/new01.jpg",
    mainHeading: "Alle vores egne private systemer og metoder",
    videoQuantity: "3",
    timeOfModule: "1:12:33",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading:
          "Kvalificeret hjemmeside skabelon gennemgang fra a-z",
        moduleContentTime: "39:47",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading:
          "Alle vores salgs, kommunikation, kundehåndtering, forhandling scripts",
        moduleContentTime: "20:00",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Redigerings skabeloner til dine videoer",
        moduleContentTime: "12:52",
      },
    ],
  },
  {
    image: "/contents/new02.jpg",
    mainHeading: "Hvordan du skalerer dit organic agency til 60k/ måned",
    videoQuantity: "4",
    timeOfModule: "17:36",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Hvornår skal jeg uddelegere mit arbejde?",
        moduleContentTime: "03:17",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Hvordan du skalerer *step by step",
        moduleContentTime: "04:58",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Sådan ansætter du din første ansatte",
        moduleContentTime: "06:37",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Skaler dit agency og lav det sjove arbejde",
        moduleContentTime: "03:24",
      },
    ],
  },
];
const englishClassContentData = [
  {
    image: "/contents/new01.jpg",
    mainHeading: "Your Foundations",
    videoQuantity: "1",
    timeOfModule: "0:09:28",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Introduction",
        moduleContentTime: "09:28",
      },
    ],
  },
  {
    image: "/contents/new02.jpg",
    mainHeading: "Agency foundations",
    videoQuantity: "3",
    timeOfModule: "0:17:26",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Crafting your offer",
        moduleContentTime: "08:02",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Systems and tools",
        moduleContentTime: "06:24",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Making your website",
        moduleContentTime: "03.00",
      },
    ],
  },
  {
    image: "/contents/new03.jpg",
    mainHeading: "Outreach",
    videoQuantity: "3",
    timeOfModule: "1:03:75",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Introduction to outreach",
        moduleContentTime: "04:07",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Finding leads",
        moduleContentTime: "31:17",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "The succes formula for outreach",
        moduleContentTime: "28:51",
      },
    ],
  },
  {
    image: "/contents/new04.jpg",
    mainHeading: "Closing the big deals",
    videoQuantity: "4",
    timeOfModule: "0:25:66",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Turning Leads into customers",
        moduleContentTime: "05:07",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Client communication",
        moduleContentTime: "04:55",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Preparing yourself for the closing meeting",
        moduleContentTime: "10:01",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Closing the meeting",
        moduleContentTime: "06:03",
      },
    ],
  },
  {
    image: "/contents/08.jpeg",
    mainHeading: "Service delivery",
    videoQuantity: "7",
    timeOfModule: "2:55:35",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Introduction to the algorithm",
        moduleContentTime: "19:00",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Production expenses of your first video",
        moduleContentTime: "27:10",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Editing systems",
        moduleContentTime: "1:01:16",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Editing walkthrough (step by step)",
        moduleContentTime: "40:38",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Posting the video",
        moduleContentTime: "10:29",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Idea development",
        moduleContentTime: "07:06",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Finding the content creators",
        moduleContentTime: "10:36",
      },
    ],
  },
  {
    image: "/contents/09.jpeg",
    mainHeading: "Running a profitable 10,000 $ /month organic agency",
    videoQuantity: "3",
    timeOfModule: "07:38",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Managing payments from clients",
        moduleContentTime: "02:23",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Managing expenses",
        moduleContentTime: "03:09",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "How to accept payments",
        moduleContentTime: "02:06",
      },
    ],//
  },
  {
    image: "/contents/new03.jpg",
    mainHeading: "Implementation",
    videoQuantity: "1",
    timeOfModule: "12:19",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "How we apply this to the videos",
        moduleContentTime: "12:19",
      },//
    ],
  },
  {
    image: "/contents/new01.jpg",
    mainHeading: "Our streamlined systems & processes",
    videoQuantity: "3",
    timeOfModule: "1:12:33",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Website template walkthrough",
        moduleContentTime: "39:47",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "All the scripts we use",
        moduleContentTime: "20:00",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Editing presets",
        moduleContentTime: "12:52",
      },
    ],
  },
  {
    image: "/contents/new02.jpg",
    mainHeading: "Scalability ",
    videoQuantity: "4",
    timeOfModule: "17:36",
    moduleContent: [
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "When to outsource",
        moduleContentTime: "03:17",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "How to outsource",
        moduleContentTime: "04:58",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "How to find freelancers",
        moduleContentTime: "06:37",
      },
      {
        moduleContentImage: "/lock.webp",
        moduleContentHeading: "Managing while scaling",
        moduleContentTime: "03:24",
      },
    ],
  },
];

export default function ClassContent() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <section className="py-[100px] bg-transparent">
      <div className="w-[90%] mx-auto max-w-[800px] text-white text-center">
        <Reveal>
          <h1 className="text-heroHeading font-[700] mb-[14px]">
            {currentPath === "/en"
              ? "Get a taste of what you get in "
              : "Se en smagsprøve af hvad du kan forvente i"}{" "}
            <span className="text-blue-500">
              {currentPath === "/en" ? " OCMA Masterclass?" : " OCMA Masterclass"}
            </span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-sectionDescription text-gray-200 mb-[60px]">
            {currentPath === "/en"
              ? "30+ step by step modules includes what you get access to in the organic masterclass"
              : "30+ step by step moduler er bla. hvad du får adgang til i OCMA masterclass"}
          </p>
        </Reveal>
        {currentPath === "/en" ? (
          <div className="grid grid-cols-1 gap-[30px]">
            {englishClassContentData.map((v, index) => (
              <ClassContentCard key={v} Obj={v} i={index + 1} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-[30px]">
            {classContentData.map((v, index) => (
              <ClassContentCard key={v} Obj={v} i={index + 1} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const ClassContentCard = (props: any) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [cardExpanded, setCardExpanded] = useState(false);
  return (
    <Reveal>
      <div style={{background: "linear-gradient(338deg, rgba(3,2,32,1) 0%, rgba(30,12,119,1) 49%, rgba(8,5,82,1) 100%)"}} className="p-[20px] text-blue-950 bg-white rounded-main">
        <div className="grid grid-cols-contentCard gap-[30px] trustbadgesTwo:grid-cols-1">
          <img
            alt="courseelement"
            className="rounded-main h-[200px] w-full object-cover"
            src={props.Obj.image}
          ></img>
          <div className="text-left flex flex-col justify-center gap-[10px]">
            <p className="bg-blue-500 text-white w-[100px] text-center p-[6px] rounded-[100px] font-[700] mb-[10px]">
              {currentPath === "/en" ? "Chapter " : "Kapitel "}
              {props.i}
            </p>
            <h1 className="text-[20px] font-[700] mb-[6px]">
              {props.Obj.mainHeading}
            </h1>
            <div className="flex items-center gap-[20px]">
              <div className="flex items-center gap-[6px]">
                <Play />
                <p>{props.Obj.videoQuantity} videoer</p>
              </div>
              <div className="flex items-center gap-[6px]">
                <Clock />
                <p>{props.Obj.timeOfModule}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end trustbadgesTwo:items-end">
            {cardExpanded ? (
              <XCircle
                className="cursor-pointer"
                onClick={() => setCardExpanded(false)}
                size={28}
              />
            ) : (
              <PlusCircle
                className="cursor-pointer"
                onClick={() => setCardExpanded(true)}
                size={28}
              />
            )}
          </div>
        </div>

        {cardExpanded ? (
          <div className="mt-[20px] flex flex-col gap-[20px]">
            {props.Obj.moduleContent.map((v: any) => (
              <div style={{background: "linear-gradient(338deg, rgba(3,2,32,1) 0%, rgba(30,12,119,1) 49%, rgba(8,5,82,1) 100%)"}} key={v} className="text-left p-[10px] border-[1px] border-gray-600 rounded-main text-main grid grid-cols-subcontent gap-[40px]">
                <img
                  alt={v.moduleContentImage}
                  className="rounded-main h-[120px] w-full object-cover"
                  src={v.moduleContentImage}
                ></img>
                <div className="flex flex-col justify-center">
                  {" "}
                  <h1 className="font-[700] mb-[10px]">
                    {v.moduleContentHeading}
                  </h1>
                  <div className="flex items-center gap-[6px]">
                    <Clock />
                    <p>{v.moduleContentTime}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </Reveal>
  );
};