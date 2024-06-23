import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`min-h-screen flex flex-col
      w-[900px] mx-auto
      bg-neutral-950 text-neutral-200`}
    >
      {children}
    </div>
  );
}
