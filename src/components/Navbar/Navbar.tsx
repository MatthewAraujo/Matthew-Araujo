import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { AlignJustify } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  return (
    <>
      <div className="fixed w-full">
        <div className="mx-auto flex	max-w-3xl justify-between p-8">
          <h1 className="text-2xl text-slate-200">
            <a href="/">
              <Image src="/logo.png" alt="" width={30} height={30} />
            </a>
          </h1>

          <Menubar className="border-none bg-transparent outline-none sm:hidden ">
            <MenubarMenu>
              <MenubarTrigger>
                <AlignJustify size={32} className="text-white" />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <a href="#about">About</a>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <a href="#work">Work</a>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <a href="#projects">Projects</a>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <a href="#contact">Contact</a>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <nav className="hidden sm:block">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#about"
                  className="text-slate-200 transition-colors duration-200 hover:text-slate-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-slate-200 transition-colors duration-200 hover:text-slate-400"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-200 transition-colors duration-200 hover:text-slate-400"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-200 transition-colors duration-200 hover:text-slate-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
