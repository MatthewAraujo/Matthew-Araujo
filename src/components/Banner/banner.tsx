import { GithubIcon, Linkedin } from "lucide-react";
import Image from "next/image";

export function Banner() {


  
  return (
    <div id="about" className="flex flex-col items-left gap-5 pt-24">
      <div>
        <h1 className="text-slate-200 text-xl font-bold">Matthew Araujo</h1>
        <h2 className="text-gray-500">FullStack Developer</h2>
      </div>

      <div className="sm:flex-row flex flex-col gap-5">
        <div>
          <Image
            width={80}
            height={80}
            src="https://avatars.githubusercontent.com/u/90223014?v=4"
            alt="Matthew Araujo"
            className="rounded-full  w-20 h-20"
          />
        </div>

        <nav>
          <ul className="flex flex-col space-y-2 group w-fit">
            <li className="group-hover:opacity-5 transition hover:!opacity-100 duration-500 flex items-center gap-2">
              <GithubIcon
                size={32}
                className="shrink bg-white rounded-full aspect-square p-2 box-border "
              />{" "}
              <a
                href="https://github.com/MatthewAraujo"
                className="text-slate-200"
              >
                github.com/MatthewAraujo
              </a>{" "}
            </li>
            <li className="group-hover:opacity-5 transition hover:!opacity-100 duration-500 flex items-center gap-2">
              <Linkedin
                size={32}
                className="shrink bg-white rounded-full aspect-square p-2 box-border "
              />{" "}
              <a
                href="https://www.linkedin.com/in/matthewaraujo20/"
                className="text-slate-200"
              >
                linkedin.com/MatthewAraujo
              </a>{" "}
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <p className="text-slate-200 text-md">
          Hello, I&rsquo;m Matthew, a tech enthusiast with a passion for
          programming. As a full-stack developer, I create and maintain
          websites, handling everything from user interfaces to robust back-end
          logic. I&rsquo;m driven by the freedom programming offers and find
          fulfillment in transforming concepts into practical solutions. My
          constant commitment to learning defines my career in development.
        </p>
      </div>
    </div>
  );
}
