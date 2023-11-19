import { ArrowUpRight, Github, Linkedin, Mail, Twitch, Youtube } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="flex flex-col space-y-5 w-full">
      <div>
        <p className="text-gray-500 text-xl mt-3">Contact</p>
        <p className="text-slate-200 text-md  mt-3">Feel free to contact me</p>
      </div>
      <div className="group grid grid-cols-1  gap-2 sm:grid-cols-2 w-full">
        <a
          href="mailto:matthewaraujo.dev@gmail.com"
          target="_blank"
          className="group-hover:opacity-5 transition hover:!opacity-100 duration-500 flex items-center justify-between gap-2 border w-full border-white rounded-lg"
        >
          <div className="flex gap-5 items-center p-4 text-slate-50">
            <p>
              <Mail />
            </p>
            <p>Email</p>
          </div>
          <ArrowUpRight className="text-gray-300" />
        </a>
        <a
          href="https://github.com/MatthewAraujo"
          target="_blank"
          className="group-hover:opacity-5 transition hover:!opacity-100 duration-500 flex items-center justify-between gap-2 border w-full border-white rounded-lg"
        >
          <div className="flex gap-5 items-center p-4 text-slate-50">
            <p>
              <Github />
            </p>
            <p>Github</p>
          </div>
          <ArrowUpRight className="text-gray-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/matthewaraujo20/"
          target="_blank"
          className="group-hover:opacity-5 transition hover:!opacity-100 duration-500 flex items-center justify-between gap-2 border w-full border-white rounded-lg"
        >
          <div className="flex gap-5 items-center p-4 text-slate-50">
            <p>
              <Linkedin />
            </p>
            <p>Linkedin</p>
          </div>
          <ArrowUpRight className="text-gray-300" />
        </a>
        <a
          href="mailto:matthewaraujo.dev@gmail.com"
          target="_blank"
          className="group-hover:opacity-5 transition hover:!opacity-100 duration-500 flex items-center justify-between gap-2 border w-full border-white rounded-lg"
        >
          <div className="flex gap-5 items-center p-4 text-slate-50">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M224,72a48.05,48.05,0,0,1-48-48,8,8,0,0,0-8-8H128a8,8,0,0,0-8,8V156a20,20,0,1,1-28.57-18.08A8,8,0,0,0,96,130.69V88a8,8,0,0,0-9.4-7.88C50.91,86.48,24,119.1,24,156a76,76,0,0,0,152,0V116.29A103.25,103.25,0,0,0,224,128a8,8,0,0,0,8-8V80A8,8,0,0,0,224,72Zm-8,39.64a87.19,87.19,0,0,1-43.33-16.15A8,8,0,0,0,160,102v54a60,60,0,0,1-120,0c0-25.9,16.64-49.13,40-57.6v27.67A36,36,0,1,0,136,156V32h24.5A64.14,64.14,0,0,0,216,87.5Z"></path>
              </svg>
            </p>
            <p>Tiktok</p>
          </div>
          <ArrowUpRight className="text-gray-300" />
        </a>
        <a
          href="https://www.twitch.tv/matthewaraujo"
          target="_blank"
          className="group-hover:opacity-5 transition hover:!opacity-100 duration-500 flex items-center justify-between gap-2 border w-full border-white rounded-lg"
        >
          <div className="flex gap-5 items-center p-4 text-slate-50">
            <p>
              <Twitch className="text-gray-300" />
            </p>
            <p>Twitch</p>
          </div>
          <ArrowUpRight className="text-gray-300" />
        </a>
        <a
          href="https://www.youtube.com/@matthewaraujo7361"
          target="_blank"
          className="group-hover:opacity-5 transition hover:!opacity-100 duration-500 flex items-center justify-between gap-2 border w-full border-white rounded-lg"
        >
          <div className="flex gap-5 items-center p-4 text-slate-50">
            <p>
              <Youtube className="text-gray-300" />
            </p>
            <p>Youtube</p>
          </div>
          <ArrowUpRight className="text-gray-300" />
        </a>
      </div>
    </section>
  );
}
