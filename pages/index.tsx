import Button from "../lib/components/ui/buttons/button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <div className="fixed top-0 left-0 z-0 h-screen w-screen bg-zinc-200 dark:bg-zinc-900">
        <div className="relative top-0 left-0 h-screen w-screen" style={{ background: `linear-gradient(315deg, ${theme === "dark" ? "rgba(25,93,139,0.3) 0%, rgba(25,93,139,0.01) 100%)" : "rgba(25,93,139,0.4) 30%, rgba(25,93,139,0.1) 100%)"}` }} />
      </div>
      <div className="relative top-0 left-0 h-screen w-full">
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
          <div className="text-center">
            <header className="max-w-md lg:max-w-3xl px-4 lg:px-0 pt-[3.5rem]">
              <h1 className="text-5xl font-bold">Hello World</h1>
              <p className="pt-6 pb-4">
                I am Ichigayamate, a user that create websites using modern technology such as React.js, Tailwind, and more.
              </p>
              <Link href="/about" passHref legacyBehavior>
                <Button icon="right" iconValue={<FontAwesomeIcon icon={faArrowRight} fixedWidth />}>Learn more about me</Button>
              </Link>
            </header>
          </div>
        </div>
      </div>
    </>
  );
}