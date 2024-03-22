import { ReactNode } from "react";

export default function MarginWidthWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className=" flex min-h-screen flex-col py-[1.3rem] pr-[2rem]">
      {children}
    </div>
  );
}
