import AboutSectionOne from "@/src/components/About/AboutSectionOne";
import AboutSectionTwo from "@/src/components/About/AboutSectionTwo";
import Blog from "@/src/components/Blog";
import Brands from "@/src/components/Brands";
import ScrollUp from "@/src/components/Common/ScrollUp";
import Contact from "@/src/components/Contact";
import Features from "@/src/components/Features";
import Hero from "@/src/components/Hero";
import Pricing from "@/src/components/Pricing";
import Testimonials from "@/src/components/Testimonials";
import Video from "@/src/components/Video";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
