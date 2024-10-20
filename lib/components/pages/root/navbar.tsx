import NavbarButton from "@ui/navbar/navbar-button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex fixed top-0 px-4 py-2 left-0 w-full bg-black/70 backdrop-blur-xl z-[1000]">
      <div>
        <Link href="/" passHref legacyBehavior>
          <NavbarButton>i10e.dev</NavbarButton>
        </Link>
      </div>
    </nav>
  );
}
