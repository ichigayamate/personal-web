import { NextSeo } from "next-seo";
import Header from "../lib/components/ui/components/header";

export default function About() {
    return (
      <>
        <NextSeo title="About" />

        <Header>About</Header>
        <section className="h-screen relative z-[1] bg-white dark:bg-black">
          <p>Coming soon</p>
        </section>
      </>
    )
}