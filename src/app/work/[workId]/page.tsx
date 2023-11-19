import { Page404 } from "@/components/404";
import { jobs } from "@/components/Workplaces/workplaceJobs";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Work({ params }: { params: { workId: string } }) {
  const paramsId = params || { workId: "workId" };
  const workId = jobs.filter(
    (job) => job.job === paramsId.workId.replaceAll(/%20/g, " "),
  );

  if (workId.length === 0) {
    return <Page404 />;
  }

  return (
    <div className="mx-auto max-w-3xl overflow-hidden px-8 pb-8 pt-24">
      <div className="group flex flex-col gap-5">
        {workId.map(
          ({ id, job, src, title, year, description, stacks, projects }) => {
            return (
              <div key={id}>
                <div>
                  <p className="text-gray-400">{year}</p>
                  <h1 className="text-4xl font-bold text-slate-50">{title}</h1>
                  <div className="flex h-fit flex-col  gap-2 sm:flex-row sm:items-center">
                    <p className="text-gray-400">{description}</p>
                    <div>
                      <Image
                        src={src}
                        alt={job}
                        width={300}
                        height={300}
                        className="w-48 rounded-lg sm:w-96"
                      />
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-5">
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

                  <div className="mt-5 flex flex-col space-y-5">
                    <p className="text-lg text-gray-400">
                      Some projects I participated in during my time at{" "}
                      <span className="capitalize text-slate-50">{job}</span>
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
          },
        )}
      </div>
    </div>
  );
}
