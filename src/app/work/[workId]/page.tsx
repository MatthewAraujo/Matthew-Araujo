import { Page404 } from "@/components/404";
import { jobs } from "@/components/Workplaces/workplaceJobs";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Work({ params }: { params: { workId: string } }) {
  const paramsId = params || { workId: "workId" };
  const workId = jobs.filter(
    (job) => job.job === paramsId.workId.replaceAll(/%20/g, " ")
  );

  if (workId.length === 0) {
    return <Page404 />;
  }

  return (
    <div className="mx-auto max-w-3xl px-8 pb-8 overflow-hidden">
      <div className="flex flex-col gap-5 group">
        {workId.map(
          ({ id, job, src, title, year, description, stacks, projects }) => {
            return (
              <div key={id}>
                <div>
                  <p className="text-gray-400">{year}</p>
                  <h1 className="text-4xl font-bold text-slate-50">{title}</h1>
                  <div className="flex flex-col sm:flex-row  sm:items-center gap-2 h-fit">
                    <p className="text-gray-400">{description}</p>
                    <div>
                      <Image
                        src={src}
                        alt={job}
                        width={300}
                        height={300}
                        className="rounded-lg w-48 sm:w-96"
                      />
                    </div>
                  </div>
                  <div className="flex gap-5 mt-5 flex-wrap">
                    {stacks?.map((stack) => {
                      return (
                        <Badge
                          key={stack}
                          variant="secondary"
                          className="capitalize sm:text-base"
                        >
                          {stack}
                        </Badge>
                      );
                    })}
                  </div>

                  <div className="flex flex-col space-y-5 mt-5">
                    <p className="text-gray-400 text-lg">
                      Some projects I participated in during my time at <span className="capitalize text-slate-50">{job}</span>
                    </p>
                    {projects?.map(({ id, title, description }) => {
                      return (
                        <div key={id} className="flex flex-col gap-5">
                          <h1 className="text-2xl font-bold text-slate-50">
                            {title}
                          </h1>
                          <p className="text-gray-400 ">{description.first}</p>
                          <p className="text-gray-400 ">{description.second}</p>

                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
