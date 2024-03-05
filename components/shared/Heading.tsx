import React from "react";

// 3 types of heading are present , small, large and medium
interface HeadingProps {
    type: "small" | "large" | "medium";
    children: React.ReactNode;
}
export const Heading = ({ type, children }: HeadingProps) => {
    if (type === "small") {
        return <h2 className="text-[1rem] font-semibold">{children}</h2>;
    } else if (type === "large") {
        return <h1 className="text-[1.8rem] font-bold">{children}</h1>;
    } else {
        return <h3 className="text-[1.2rem] font-bold">{children}</h3>;
    }
}
