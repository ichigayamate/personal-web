import { Hero } from "react-daisyui";

export default function Home() {
  return (
    <>
      <div className="relative top-0 left-0 h-screen z-0">
        <Hero className="absolute top-0 left-0 h-full z-0">
          <Hero.Overlay className="bg-opacity-60" />
          <Hero.Content className="text-center">
            <div className="max-w-md lg:max-w-3xl">
              <h1 className="text-5xl font-bold">Hello World</h1>
              <p className="py-6">
                I am Ichigayamate, a user that create websites using modern technology such as React.js, Tailwind, and more.
              </p>
            </div>
          </Hero.Content>
        </Hero>
      </div>
    </>
  )
}
