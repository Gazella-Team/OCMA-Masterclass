import Navbar from "@/components/Layout/Navbar";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import FeaturesSlider from "@/components/featuresslider";
import Footer from "@/components/Layout/Footer";
import TrustBadges from "@/components/trustbadges";
import FAQ from "@/components/faq";
import Why from "@/components/why";
import TieredSystem from "@/components/tieredsystem";
import About from "@/components/about";
import Free from "@/components/free";
import ClassContent from "@/components/classcontent";
import Articles from "@/components/articles";
import Calls from "@/components/calls";
import Contents from "@/components/contents";
import { Element } from "react-scroll";
import Meta from "@/components/Layout/Meta";
import StudentTests from "@/components/studenttests";
import WistiaVideo from "@/components/wistia-embed";

export default function Home() {
  return (
    <main className="bg-black">
      <Meta />
      <Navbar />
      <Hero />
      <FeaturesSlider />
           {/*
                 <Element name="testimonials">
        <Testimonials />
      </Element>
         */}
      <TrustBadges />
      <About />
      <Element name="omos">
        <Articles />
      </Element>
      <Calls />
      <Contents />
      <Element name="content">
        <ClassContent />
      </Element>
      <Why />
      <FAQ />
      <Footer />
    </main>
  );
}