import Image from "next/image";
import Hero from "@/sections/hero";
import Jobify from "@/sections/jobify";
import Pricing from "@/sections/pricing";
import Projects from "@/sections/projects";
import Call from "@/sections/call";

export default function Home() {
  return (
      <>
          <Hero/>
          <Jobify/>
          <Pricing/>
          <Projects/>
          <Call/>
      </>
  );
}
