import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Home() {


  return (
    <main className="h-[100vh] w-full overflow-hidden border-2">
      <h1 className="mt-20 hidden text-center text-3xl font-bold leading-tight tracking-tighter text-muted-foreground md:block md:text-6xl lg:leading-[1.1]">Start managing your  <span className="text-black">team</span> <br /> with <span className="text-black">CommuneSphere</span> </h1>
      <div className="mt-4 flex w-full justify-center border-2">
        <Button variant="default" className="m-auto" asChild>
          <Link href="/auth/login">Login</Link>
        </Button>
      </div>
      <div className="m-auto mt-4  w-[80%] shadow-2xl">
        <Image src="/hero-area.jpeg" alt="intro" width={4000} height={4000} className="size-full" />
      </div>
    </main>
  );
}
