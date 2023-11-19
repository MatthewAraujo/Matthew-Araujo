import Link from "next/link";
import Image from "next/image";
import { compareDesc } from "date-fns";
import { allProjects } from "contentlayer/generated";
import clsx from "clsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matthew Araujo | Projects",
  description: "Matthew Araujo's personal website",
};

export default function Project() {
  const projects = allProjects
    .sort((a, b) => compareDesc(new Date(a.time), new Date(b.time)))

  return (
    <div className="mx-auto max-w-3xl">
      <div id="#work" className="">
        <p className="mt-3 text-xl text-gray-500">Projects</p>
        <div className="flex flex-col gap-5">
          <p className="text-md mt-3  text-slate-200">
            Here are some of the projects I&rsquo;ve worked on.
          </p>
          <div className="flex flex-col gap-3">
            <ul
              className="animated-list group flex flex-col animate-in"
              style={{ "--index": 3 } as React.CSSProperties}
            >
              {projects.map((project, i) => (
                <li
                  key={project.slug}
                  className={clsx(
                    "flex cursor-pointer flex-col gap-4 py-6 transition duration-500 first:pt-0 last:pb-0 hover:!opacity-100 group-hover:opacity-5 md:flex-row md:gap-6",
                  )}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="bg-tertiary w-full select-none rounded-lg md:w-2/5"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={550}
                      height={248}
                      layout="responsive"
                      className="rounded-lg"
                    />
                  </Link>
                  <div className="w-full space-y-2  md:w-3/5">
                    <div>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="font-medium text-white hover:underline"
                      >
                        {project.title}
                      </Link>
                      <time className="text-secondary"> · {project.time}</time>
                    </div>

                    <p className="line-clamp- text-slate-400">
                      {project.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/project" className="text-slate-300 underline">
              See All Projects &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
