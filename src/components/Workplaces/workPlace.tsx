import Image from "next/image";
import { jobs } from "./workplaceJobs";
import { Plus } from "lucide-react";
export function WorkPlace() {
  return (
    <div className="flex flex-col gap-5 group">
      {jobs.map(({ id, job, src, title, year, href }) => {
        return (
          <a
            href={href}
            key={id}
            className="flex gap-5 group-hover:opacity-5 transition hover:!opacity-100 duration-500 cursor-pointer"
          >
            <div className=" w-20">
              <Image
                width={56}
                height={56}
                src={src}
                alt={job}
                className="rounded-full   w-14 h-14"
              />
            </div>
            <div className="flex justify-between w-full">
              <div>
                <p className="text-slate-50">{title}</p>
                <p className="text-gray-400 capitalize">{job}</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-gray-400">{year}</p>
                <p className="flex items-center gap-1 text-slate-50 text-xs">
                  know more <Plus className="text-slate-50" size={16} />
                </p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
