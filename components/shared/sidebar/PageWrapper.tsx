import { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="shadow-custom flex h-[calc(100vh-2.6rem)] grow flex-col space-y-5 overflow-hidden rounded-[1rem] border-2 border-red-500">
      <div className="scrollable-content overflow-y-auto">{children}</div>
    </div>
  );
}
