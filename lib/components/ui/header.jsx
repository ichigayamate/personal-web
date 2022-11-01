import { useColorModeValue } from "@chakra-ui/react"

export default function Header(props) {
    const darkValue = useColorModeValue("light", "dark");

    return (
        <header>
            <div className="fixed top-0 left-0 h-[50vh] lg:h-[40vh] min-h-[300px] w-[screen] -z-[1] bg-zinc-200 dark:bg-zinc-800">
                <div className="relative top-0 left-0 h-[50vh] lg:h-[40vh] min-h-[300px] w-screen" style={{ background: `linear-gradient(315deg, ${darkValue == "dark" ? "rgba(25,93,139,0.3) 0%, rgba(25,93,139,0.01) 100%)" : "rgba(25,93,139,0.4) 30%, rgba(25,93,139,0.1) 100%)"}` }} />
            </div>
            <section className="relative top-0 left-0 h-[50vh] lg:h-[40vh] min-h-[300px] pt-[3.5rem] flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold">{props.children}</h1>
                {props.desc && <p className="mt-2">{props.desc}</p>}
            </section>
        </header>
    )
}