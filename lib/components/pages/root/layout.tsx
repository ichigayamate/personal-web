import { ThemeProvider } from "next-themes";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
