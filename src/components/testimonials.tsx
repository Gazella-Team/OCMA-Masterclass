import { Reveal } from "./Animations/Reveal";
import SectionStarter from "./sectionstarter";
import { useRouter } from "next/router";

export default function Testimonials() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  const testimonialsData = [
    {
      personImage: "/thomastheil.png",
      name: "Thomas Theil",
      position: "Ejer - Cinnamon Coffee",
      companyImage: "/meta.png",
      words:
        "Dybt overrasket over deres vidunderlige tilgang til tingene. Man kan mærke det er et ungt team der har styr på deres ting, og deres moderne tilgang til tingene slår bare igennem!",
    },
    {
      personImage: "/emilstrande.png",
      name: "Emil Strande",
      position: "Ejer - Letzsneak",
      companyImage: "/meta.png",
      words:
        "De hjalp os med at producere ugc videoer. Vi fik hurtigt mange følgere. Teamet bag er unge og entusiastiske og går op i at levere et produkt som du er tilfreds med.",
    },
  ];
  const englishTestimonialsData = [
    {
      personImage: "/thomastheil.png",
      name: "Thomas Theil",
      position: "Owner - Cinnamon & coffee",
      companyImage: "/meta.png",
      words:
        "Deeply surprised by their wonderful approach to things. You can tell it's a young team that has their stuff under control, and their modern approach to things just shines through! They are in the process of revolutionizing the way marketing is done. - big recommendation from here!c",
    },
    {
      personImage: "/emilstrande.png",
      name: "Emil Strande",
      position: "Founder - Letzsneak",
      companyImage: "/meta.png",
      words:
        "They helped us produce ugc videos. We quickly gained many followers. The team behind it is young and enthusiastic and is committed to delivering a product that you're satisfied with.",
    },
  ];
  return (
    <section  className="py-[100px]">
      <div className="w-sectionMain mx-auto max-w-main text-white text-center">
        <Reveal>
          <h1 className="bg-transparent inline-block text-heroHeading font-[700] mb-[14px]">
            {currentPath === "/en" ? "Business" : "Erhvervs"}{" "}
            <span className="text-blue-500">
              {currentPath === "/en" ? "Recommendations" : "Anbefalinger"}
            </span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-sectionDescription text-gray-200 mb-[60px]">
            {currentPath === "/en"
              ? "What students say about us and our expertise"
              : "Hvad elever siger om os og vores expertise"}
          </p>
        </Reveal>
        {currentPath === "/en" ? (
          <div className="grid grid-cols-3 gap-[30px] heroOne:grid-cols-1 heroOne:max-w-[400px] heroOne:mx-auto">
            {englishTestimonialsData.map((v, index) => (
              <TestimonialsCard key={index} Obj={v} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-[30px] heroOne:grid-cols-1 heroOne:max-w-[400px] heroOne:mx-auto">
            {testimonialsData.map((v, index) => (
              <TestimonialsCard key={index} Obj={v} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const TestimonialsCard = (props: any) => {
  return (
    <Reveal>
      <div style={{background: "linear-gradient(338deg, rgba(3,2,32,1) 0%, rgba(30,12,119,1) 49%, rgba(8,5,82,1) 100%)"}} className="rounded-main text-glow  p-[14px] pb-[20px] text-left">
        <img
          alt={props.Obj.personImage}
          className="rounded-main h-[300px] w-full object-cover object-top mb-[20px]"
          src={props.Obj.personImage}
        ></img>
        <div className="p-[10px]">
          <h1 className="text-white font-[600] text-[22px]">
            {props.Obj.name}
          </h1>
          <p className="text-gray-200 mb-[30px]">{props.Obj.position}</p>
          <p className="text-white text-[18px] font-[600] italic w-[100%]">
          &quot;{props.Obj.words}&quot;
          </p>
        </div>
      </div>
    </Reveal>
  );
};