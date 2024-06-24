import Layout from "@page_component/root/layout";
import "./globals.css";

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
    <html lang="en">
      <body>
        <noscript>You need to enable JavaScript to run this app</noscript>
        <div id="root">
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
