import { WorkPlace } from "../Workplaces/workPlace";

export function Work() {
  return (
    <div id="#work" className="">
      <p className="text-gray-500 text-xl mt-3">Work</p>
      <div className="flex flex-col gap-5">
        <p className="text-slate-200 text-md  mt-3">
          3+ years of professional development experience.
        </p>
        <p className="text-slate-200 text-md mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
          impedit? Nesciunt, sapiente quidem, natus voluptatum corporis facere
          beatae doloremque perferendis explicabo dolor deleniti laborum! Facere
          modi architecto hic ex ut?
        </p>

        <div>
          <WorkPlace/>
        </div>
      </div>
    </div>
  );
}
