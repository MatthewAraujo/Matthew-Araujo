import { WorkPlace } from "../Workplaces/workPlace";

export function Work() {
  return (
    <div id="#work" className="">
      <p className="mt-3 text-xl text-gray-500">Work</p>
      <div className="flex flex-col gap-5">
        <p className="text-md mt-3  text-slate-200">
          3+ years of professional development experience.
        </p>
        <div>
          <WorkPlace />
        </div>
      </div>
    </div>
  );
}
