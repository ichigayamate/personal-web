"use client";

import { Transition } from "@headlessui/react";

export default function Backdrop({
  error,
  children,
}: Readonly<{
  error?: boolean;
  children: React.ReactNode;
}>) {
  return (
    <Transition show={true}>
      <div
        className={`fixed inset-0 -z-10 flex justify-center items-center ${error ? "bg-danger-100 dark:bg-danger-800" : "bg-primary-100 dark:bg-primary-900"}`}
      >
        <p className="font-thin hidden md:block md:text-[25cqw] text-black/5 dark:text-white/5">
          i10e.dev
        </p>
      </div>
      <section className="relative w-full h-screen flex justify-center items-center p-2">
        <div className="max-w-[60rem] w-full lg:w-3/4 bg-white/50 p-4 rounded-xl backdrop-blur-xl dark:bg-black/50 shadow-xl">
          {children}
        </div>
      </section>
    </Transition>
  );
}
