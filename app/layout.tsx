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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://i10e.dev" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={metadata.title} />

        <link rel="icon" href="/manifest/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/manifest/apple-touch-icon.png"
          sizes="76x76"
        />
        <link rel="manifest" href="/manifest/manifest.webmanifest" />
      </head>
      <body>
        <ThemeProvider attribute="class">
          <noscript>You need to enable JavaScript to run this app</noscript>
          <div id="root">
            <Layout>{children}</Layout>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
