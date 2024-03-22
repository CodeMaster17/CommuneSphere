import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Features from "@/components/shared/features/Features";
import Linkedin from "@/public/icon/ant-design--linkedin-filled.svg"
import Facebook from "@/public/icon/ic--baseline-facebook.svg"
import Instagram from "@/public/icon/mdi--instagram.svg"


export default function Home() {


  return (
    <main className="h-screen w-full">

      <div className="">
        <h1 className="mt-28 hidden text-center text-3xl font-bold leading-tight tracking-tighter md:block md:text-6xl lg:leading-[1.1]">Start managing your  <span className="text-[#9ded48]">team</span> <br /> with <span className="text-[#9ded48]">CommuneSphere</span> </h1>
        <h3 className="mx-auto mt-10 hidden w-[40%] text-center text-lg font-medium leading-tight tracking-tighter md:block md:text-2xl lg:leading-[1.1]">Join CommuneSphere and explore new ways of thinking to unleash your fierce, untapped skills.</h3>
        <div className="mt-8 flex w-full justify-center">
          <Button variant="default" asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
        </div>
        <div className="m-auto mt-10 w-[80%] shadow-2xl">
          <Image src="/hero-area-img.png" alt="intro" width={4000} height={4000} className="size-full " />
        </div>

        <Features />

        <footer className="mt-52 flex h-20 justify-between bg-[#1f273c] py-8 text-lg text-white">
          <div className="md:ml-[5rem] lg:ml-[8rem] 2xl:ml-[10.5rem]">
            © 2024 CommuneSphere. All rights reserved.
          </div>
          <div className="flex cursor-pointer space-x-5 md:mr-[5rem] lg:mr-[8rem] 2xl:mr-[10.5rem]">
            <Image src={Linkedin} alt="linkedin" className="size-8" />
            <Image src={Facebook} alt="linkedin" className="size-8" />
            <Image src={Instagram} alt="linkedin" className="size-8" />
          </div>
        </footer>
      </div>

    </main>
  );
}
