import { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="shadow-custom flex h-[calc(100vh-2.6rem)] grow flex-col space-y-5 overflow-hidden rounded-[1rem] bg-white px-[2rem] py-[1rem]">
      <div className="scrollable-content overflow-y-auto">{children}</div>
    </div>
  );
}
