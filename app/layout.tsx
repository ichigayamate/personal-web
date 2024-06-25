import Layout from "@page_component/root/layout";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import React from "react";
config.autoAddCss = false;

export const metadata = {
  title: "Ichigayamate Personal Website",
  description: "Ichigayamate Personal Website",
};

export default function RootLayout({
  children,
  main,
  sidebar,
}: Readonly<{
  main: React.ReactNode;
  sidebar: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          <noscript>You need to enable JavaScript to run this app</noscript>
          <div id="root">
            <Layout>
              {main}
              {sidebar}
              {children}
            </Layout>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
