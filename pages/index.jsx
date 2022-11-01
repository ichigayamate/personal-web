import { Button, LightMode, useColorModeValue } from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
  const darkValue = useColorModeValue("light", "dark");

  return (
    <>
    <div className="fixed top-0 left-0 h-screen w-screen -z-[1] bg-zinc-200 dark:bg-zinc-800">
      <div className="relative top-0 left-0 h-screen w-screen" style={{background: `linear-gradient(315deg, ${darkValue == "dark" ? "rgba(25,93,139,0.3) 0%, rgba(25,93,139,0.01) 100%)" : "rgba(25,93,139,0.4) 30%, rgba(25,93,139,0.1) 100%)"}`}} />
    </div>
    <div className="relative top-0 left-0 h-screen z-10 w-full">
      <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
        <div className="text-center">
          <header className="max-w-md lg:max-w-3xl px-4 lg:px-0 pt-[3.5rem]">
            <h1 className="text-5xl font-bold">Hello World</h1>
            <p className="pt-6 pb-4">
              I am Ichigayamate, a user that create websites using modern technology such as React.js, Tailwind, and more.
            </p>
            <LightMode>
              <Link href="/about" passHref>
                <Button as="a" variant="solid" colorScheme="primary" rightIcon={<FontAwesomeIcon icon={faArrowRight} fixedWidth />}>Learn more about me</Button>
              </Link>
            </LightMode>
          </header>
        </div>
      </div>
    </div>
    </>
  )
}
