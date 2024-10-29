"use client";

import { Transition } from "@headlessui/react";
import type { ReactNode } from "react";
import DarkModePopup from "@ui/button/dark-mode-popup";
import { BUTTON_CLASSNAME } from "@ui/button/button";

export default function Backdrop({
  disableDarkMode,
  children,
}: Readonly<{
  disableDarkMode?: boolean;
  children: ReactNode;
}>) {
  return (
    <Transition show={true}>
      <div className="fixed inset-0 -z-10 flex justify-center items-center bg-primary-100 dark:bg-primary-900">
        <p className="font-thin hidden lg:block lg:text-[25cqw] text-black/5 dark:text-white/5">
          i10e.dev
        </p>
      </div>
      <section className="relative w-full lg:min-h-screen flex justify-center items-center p-2">
        <div className="max-w-[60rem] w-full lg:w-3/4 bg-white/50 p-4 rounded-xl backdrop-blur-xl dark:bg-black/50 shadow-xl">
          {children}
          {!disableDarkMode && (
            <div className="absolute top-4 right-4">
              <DarkModePopup anchor={{to: "top", gap: "0.5rem"}} className={BUTTON_CLASSNAME} disableColoredTheme />
            </div>
          )}
        </div>
      </section>
    </Transition>
  );
}
