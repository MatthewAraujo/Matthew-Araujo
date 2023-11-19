import Link from "next/link";
import { allProjects } from "contentlayer/generated";
import clsx from "clsx";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = allProjects.sort((a, b) => a.order - b.order);

  return (
    <div id="#work" className="mx-auto max-w-3xl pb-20">
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
                  "flex flex-col gap-4 py-6 transition duration-500 first:pt-0 last:pb-0 hover:!opacity-100 group-hover:opacity-5 md:flex-row md:gap-6",
                )}
              >
                <Link
                  href={project.url}
                  target="_blank"
                  className="bg-tertiary aspect-video w-full select-none overflow-clip rounded-lg md:w-2/5"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={550}
                    height={248}
                    className="rounded-lg"
                  />
                </Link>
                <div className="w-full space-y-2  md:w-3/5">
                  <div>
                    <Link
                      href={project.url}
                      target="_blank"
                      className="font-medium text-white hover:underline"
                    >
                      {project.title}
                    </Link>
                  </div>

                  <p className="line-clamp- text-slate-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 ">
                    {project.tags.map((tech: string) => (
                      <Badge
                        key={tech}
                        className="text-xs capitalize "
                        variant="secondary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
