"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  if (pathname === "/") return children;

  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
