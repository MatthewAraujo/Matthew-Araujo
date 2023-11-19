import { Banner } from "@/components/Banner/banner";
import { Contact } from "@/components/Contact/contact";
import { Extracurriculars } from "@/components/Extracurricular";
import {Projects} from "@/components/Projects/projects";
import { Work } from "@/components/Work/work";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-8 flex pb-8 flex-col gap-12">
      <Banner />
      <Work />
      <Projects />
      <Extracurriculars />
      <Contact />
    </div>
  );
}
