"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";
import Navbar from "./navbar";
import { Provider } from "react-redux";
import store from "@scripts/store/store";
import { Toaster } from "react-hot-toast";
import Container from "@ui/container/container";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <Provider store={store}>
      <Toaster />
      {pathname === "/" ? (
        children
      ) : (
        <div className="bg-primary-100 dark:bg-primary-900">
          <Navbar />
          <main className="pt-16">
            <Container>{children}</Container>
          </main>
          <Footer />
        </div>
      )}
    </Provider>
  );
}
