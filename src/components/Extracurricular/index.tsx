import Link from "next/link";
import { compareDesc } from "date-fns";
import { allExtracurriculars } from "contentlayer/generated";
import clsx from "clsx";
import Image from "next/image";

export function Extracurriculars() {
  const extracurriculars = allExtracurriculars.sort((a, b) =>
    compareDesc(new Date(a.time), new Date(b.time)),
  );

  return (
    <div id="#work" className="">
      <p className="mt-3 text-xl text-gray-500">Extracurriculars</p>
      <div className="flex flex-col gap-5">
        <p className="text-md mt-3  text-slate-200">
          Here are some of the extracurriculars I&rsquo;ve worked on.
        </p>
        <div className="flex flex-col gap-3">
          <ul
            className="animated-list group flex flex-col animate-in"
            style={{ "--index": 3 } as React.CSSProperties}
          >
            {extracurriculars.map((extracurricular, i) => (
              <li
                key={extracurricular.slug}
                className={clsx(
                  "flex cursor-pointer flex-col gap-4 py-6 transition duration-500 first:pt-0 last:pb-0 hover:!opacity-100 group-hover:opacity-5 md:flex-row md:gap-6",
                )}
              >
                <Link
                  href={`/extracurriculars/${extracurricular.slug}`}
                  className="bg-tertiary w-full select-none rounded-lg md:w-2/5"
                >
                  <Image
                    src={extracurricular.image}
                    alt={extracurricular.title}
                    width={550}
                    height={248}
                    layout="responsive"
                    className="rounded-lg"
                  />
                </Link>
                <div className="w-full space-y-2  md:w-3/5">
                  <div>
                    <Link
                      href={`/extracurriculars/${extracurricular.slug}`}
                      className="font-medium text-white hover:underline"
                    >
                      {extracurricular.title}
                    </Link>
                    <time className="text-secondary">
                      {" "}
                      · {extracurricular.time}
                    </time>
                  </div>

                  <p className="line-clamp- text-slate-400">
                    {extracurricular.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
