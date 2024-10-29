"use client";

import Container from "@ui/container/container";
import NavbarButton, {
  NAVBAR_BUTTON_CLASSNAME,
} from "@ui/navbar/navbar-button";
import Link from "next/link";
import DarkModePopup from "@ui/button/dark-mode-popup";

export default function Navbar() {
  return (
    <nav className="fixed top-0 px-4 py-2 left-0 w-full bg-black/70 backdrop-blur-xl z-[1000] flex justify-center">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-start">
            <Link href="/" passHref legacyBehavior>
              <NavbarButton className="font-mono">&gt; i10e.dev</NavbarButton>
            </Link>
            <div className="hidden lg:block">
              <Link href={"/about"} passHref legacyBehavior>
                <NavbarButton>About</NavbarButton>
              </Link>
            </div>
          </div>
          <div className="flex justify-end">
            <DarkModePopup className={NAVBAR_BUTTON_CLASSNAME} anchor={{to: "bottom end", gap: "0.25rem"}} />
          </div>
        </div>
      </Container>
    </nav>
  );
}
