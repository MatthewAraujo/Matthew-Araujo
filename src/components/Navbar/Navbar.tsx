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
      <div className="mx-auto max-w-3xl	flex justify-between p-8">
        <h1 className="text-2xl text-slate-200">
          <a href="/">
            <Image src="/logo.png" alt="" width={30} height={30} />
          </a>
        </h1>

        <Menubar className="sm:hidden bg-transparent border-none outline-none ">
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

        <nav className="sm:block hidden">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#about"
                className="text-slate-200 hover:text-slate-400 transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="text-slate-200 hover:text-slate-400 transition-colors duration-200"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-slate-200 hover:text-slate-400 transition-colors duration-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-slate-200 hover:text-slate-400 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
