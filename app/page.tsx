import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Home() {


  return (
    <main className="w-full border-2 h-[100vh] overflow-hidden">
      <h1 className="text-center mt-20 text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block text-muted-foreground">Start managing your  <span className="text-black">team</span> <br /> with <span className="text-black">CommuneSphere</span> </h1>
      <div className="w-full border-2 flex justify-center mt-4">
        <Button variant="default" className="m-auto" asChild>
          <Link href="/auth/login">Login</Link>
        </Button>
      </div>
      <div className="w-[80%] m-auto  shadow-2xl mt-4">
        <Image src="/hero-area.jpeg" alt="intro" width={4000} height={4000} className="w-full h-full" />
      </div>
    </main>
  );
}
