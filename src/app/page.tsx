import ServicesCard from "@/components/ServicesCard";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center mt-[3rem] mb-[6rem] p-3 w-full max-w-[650px] text-white">
      <div className="flex justify-between items-center w-full border p-5 rounded border-zinc-800">
        <div className="mr-20 flex justify-center items-center gap-3 w-full">
          <div className="">
            <Image
              src={"/profile.jpeg"}
              alt="profil fotoğrafı"
              width={40}
              height={40}
              className="relative h-12 w-12 flex  shrink-0 overflow-hidden rounded-full"
            />
          </div>
          <div className="flex flex-col text-start ">
            <h2 className="font-bold">Doğanay Balaban</h2>
            <p className="font-thin">Full Stack Web & Mobile Engineer</p>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <Link
            href={"https://www.linkedin.com/in/doganay-balaban/"}
            target="_blank"
          >
            <Linkedin size={20} />
          </Link>
          <Link href={"mailto:balabandoganay@gmail.com"} target="_blank">
            <Mail size={20} />
          </Link>
          <Link href={"https://github.com/DoganayBalaban/"} target="_blank">
            <Github size={20} />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-start items-start p-5 w-full">
        <div>
          <h2 className=" text-start text-xl">Currently working 💻</h2>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 h-[1px] mt-2 w-full bg-zinc-800"
        ></div>
        <div className="flex flex-col justify-center items-start w-full mt-[0.75rem] gap-2">
          <Link
            href={"https://retouchly-omega.vercel.app/"}
            className="font-bold"
            target="_blank"
          >
            Retouchly
          </Link>
          <p className="font-thin">AI productivty app</p>
        </div>
      </div>
      <div className="max-w-[700px] mt-[2rem] w-full p-5 ">
        <div>
          <h2 className="text-xl">Services ⚙️</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div>
            <Link href={"mailto:balabandoganay@gmail.com"}>
              <ServicesCard
                image=""
                title="hire me"
                emoji="👨‍💻"
                text="i can build your next project."
              />
            </Link>
          </div>
          <div>
            <Link href={"mailto:balabandoganay@gmail.com"}>
              <ServicesCard
                image=""
                title="ask me"
                emoji="💬"
                text="need advice on your product?"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-[700px] mt-[2rem] w-full p-5">
        <div>
          <h2 className="text-xl">Projects</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div>
            <Link href={"https://retouchly-omega.vercel.app/"}>
              <ServicesCard
                image="/project3.png"
                title="Retouchly"
                emoji="🤖"
                text="AI-powered productivity assistant that helps you automate tasks and boost efficiency."
              />
            </Link>
          </div>
          <div>
            <Link href={"https://kitapp-k9h0.onrender.com/"}>
              <ServicesCard
                image="/project1.png"
                title="Kitapp"
                emoji="📕"
                text="Manage your books easily."
              />
            </Link>
          </div>
          <div>
            <Link href={""}>
              <ServicesCard
                image=""
                title="Spotlight"
                emoji="📱"
                text="Social media platform for everyone."
              />
            </Link>
          </div>
          <div>
            <Link href={"https://chat-app-rk3l.onrender.com"}>
              <ServicesCard
                image="/project2.png"
                title="Chatty"
                emoji="💬"
                text="Chat with your friends."
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
