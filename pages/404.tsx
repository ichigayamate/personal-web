import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const insertText = (text) => {
    const preOutput = document.querySelectorAll(".pre-output")[0];
    const preOuter = document.querySelector("#black-window div");
    preOutput.insertAdjacentHTML('beforeend', text + "<br>");
    preOuter.scrollTop = preOuter.clientHeight;
}

function ActionButtons() {
    const router = useRouter();
    const { setTheme } = useTheme();

    const helpHandler = () => {
        insertText("Ichigayamate Personal Website, version 1.0.0-release (x86_64-nodejs-nextjs)");
        insertText("These shell are just for decoration purposes. Type help or sitemap to see this list");
        insertText("Type `/' followed by name to go to that pathname");
        insertText("Use `info bash' to find out more about the shell in general");
        insertText("");
        insertText("about");
        insertText("back");
        insertText("exit");
        insertText("darkmode [-auto|-disable]");
        insertText("home");
        insertText("help [-dms] [pattern...]");
        insertText("reload");
        insertText("sitemap<br>");
    }

    const darkmodeHandler = (v) => {
        const value = v.split(" ");
        if (value.length == 1) {
            setTheme("dark");
            insertText(" ");
        } else if (value[1] == "-h" || value[1] == "-help" || value[1] == "--h" || value[1] == "--help") {
            insertText("Usage: " + value[0] + " [OPTION]...");
            insertText("Sets or disables dark mode in this website<br>");
            insertText("    --disable   Disables dark mode (enables light mode)");
            insertText("    --auto      Use system dark mode preferences<br>");
        } else if (value[1] == "-disable" || value[1] == "--disable" || value[1] == "-off" || value[1] == "--off") {
            setTheme("light");
            insertText(" ");
        } else if (value[1] == "-auto" || value[1] == "--auto" || value[1] == "-system" || value[1] == "--system") {
            setTheme("system");
            insertText(" ");
        } else {
            insertText(value[0] + ": unknown option " + value[1]);
            insertText("Try '" + value[0] + " --help' for more information.<br>");
        }
    }

    const changeHandler = (e) => {
        if (e.key === 'Enter') {
            let route = e.target.value;
            insertText("$ " + route);
            document.getElementById("input-wrapper").style.display = 'none';
            (document.getElementById("input") as HTMLInputElement).value = '';
            const timer = setTimeout(() => {
                const preOuter = document.querySelector("#black-window div");
                const input = document.querySelector("#input-wrapper") as HTMLDivElement;
                input.style.display = 'block';
                input.querySelector("input").focus();
                preOuter.scrollTop = preOuter.clientHeight;
            }, 250);
            switch (route.split(" ")[0]) {
                case "":
                    insertText("");
                    break;
                case "bash":
                    insertText("");
                    break;
                case "/home":
                    router.push("/");
                    clearTimeout(timer);
                    break;
                case "home":
                    router.push("/");
                    clearTimeout(timer);
                    break;
                case "help":
                    helpHandler();
                    break;
                case "/help":
                    helpHandler();
                    break;
                case "sitemap":
                    helpHandler();
                    break;
                case "nightmode":
                    darkmodeHandler(route);
                    break;
                case "darkmode":
                    darkmodeHandler(route);
                    break;
                case "npm":
                    insertText("Command not allowed for use inside browser.");
                    insertText("");
                    insertText("npm@8.5.0 ~/nodejs/node_modules/npm");
                    break;
                case "npx":
                    insertText("npm <span class=\"text-red-500\">ERR!</span> Command not allowed for use inside browser.");
                    insertText("");
                    insertText("npm <span class=\"text-red-500\">ERR!</span> A complete log of this run can be found in:");
                    insertText("npm <span class=\"text-red-500\">ERR!</span> &nbsp;&nbsp;&nbsp; <span className=\"hover:underline hover:cursor-pointer\">/ichigayamate-personal-web/_logs/"+ new Date().toISOString().replace(/:/gi, "_") +"-navigation.log</span>")
                    break;
                case "reload":
                    router.reload();
                    break;
                case "/reload":
                    router.reload();
                    break;
                case "back":
                    router.back();
                    break;
                case "/back":
                    router.back();
                    break;
                case "exit": 
                    router.back();
                    break;
                case "clear":
                    if (route.split(" ").length == 1) {
                        document.querySelectorAll(".pre-output")[0].innerHTML = '';
                    } else {
                        if (route.split(" ")[1].indexOf("-") != 1) {
                            insertText("clear: unknown option " + route.split(" ")[1]);
                        }
                        insertText("Usage: clear<br>");
                    }
                    break;
                case "/clear":
                    document.querySelectorAll(".pre-output")[0].innerHTML = '';
                    break;
                default:
                    if (route.split(" ").length > 1) {
                        if (route.startsWith("/")) {
                            insertText('bash: ' + route.split(" ")[0] + ': URL can only be typed without spaces<br>');
                        } else {
                            insertText('<span>bash: ' + route.split(" ")[0] + ': command not found</span><br>');
                        }
                    } else {
                        fetch(route).then((res) => {
                            if (res.status == 200) {
                                router.push(route);
                                clearTimeout(timer);
                            } else {
                                if (route.startsWith("/")) {
                                    insertText('<span>bash: ' + route.split(" ")[0] + ': No such file or directory</span><br>');
                                }
                                else {
                                    insertText('<span>bash: ' + route.split(" ")[0] + ': command not found</span><br>');
                                }
                            }
                        })
                    }
                    break;
            }
        }
    }

    return (
        <motion.div initial={{ display: "none" }} animate={{ display: "block", transition: { duration: 0.1, delay: 1.7 } }}>
            <div className="block lg:hidden">
                Choose action: <br />
                <Link href="/" className="text-purple-500 hover:underline">&gt; Home</Link><br />
                <button className="text-purple-500 hover:underline" onClick={() => router.back()}>&gt; Go Back</button><br />
                <Link href="/sitemap" className="text-purple-500 hover:underline">&gt; Sitemap</Link><br />
            </div>
            <div id="input-wrapper" className="hidden lg:block">$ <input autoComplete="off" id="input" type="text" className="w-11/12 bg-transparent focused outline-none" onKeyDown={changeHandler} /></div>
        </motion.div>
    );
}

function Display() {
    const [url, setUrl] = useState<string>();
    const [href, setHref] = useState<string>();
    const [dateNow, setDateNow] = useState<string>();

    const dirClickHandler = (val) => {
        insertText("$ " + val);
        insertText("<span class=\"text-red-500\">This file is read-protected</span><br>");
    }

    useEffect(() => {
        setDateNow(new Date().toISOString().replace(/:/gi, "_"));
        setUrl(location.pathname);
        setHref(location.href);
        const timeout = setTimeout(() => { (document.querySelector("#input") as HTMLInputElement).focus() }, 1700);

        return(
            clearTimeout(timeout)
        )
    }, [])

    return (
        <pre className="whitespace-pre-wrap" style={{ wordWrap: "break-word" }}>
            <div className="pre-output">
                <div className="hidden md:block">$ {url}
                    <br />
                    <br /></div>
                <motion.div initial={{ display: "none" }} animate={{ display: "block", transition: { duration: 0.1, delay: 0.5 } }}>
                    &gt; ichigayamate-personal-website@1.0.0 visitor<br />
                    &gt; nav {url}
                </motion.div>
                <br />
                <motion.div initial={{ display: "none" }} animate={{ display: "block", transition: { duration: 0.1, delay: 1.5 } }}>
                    <span className="hidden md:block">web <span className="text-red-500">ERR!</span> <span className="text-purple-500">code</span> E404</span>
                    <span className="hidden md:inline-block">web <span className="text-red-500">ERR!</span> <span className="text-purple-500">404</span>&nbsp;</span><span className="text-red-500 md:text-current">Not Found - GET {href} - Not Found</span><br />
                    <span className="hidden md:inline-block">web <span className="text-red-500">ERR!</span> <span className="text-purple-500">404</span> </span><br />
                    <span className="hidden md:inline-block">web <span className="text-red-500">ERR!</span> <span className="text-purple-500">404</span>&nbsp;</span>{url} is not in this site.<br />
                    <span className="hidden md:inline-block">web <span className="text-red-500">ERR!</span> <span className="text-purple-500">404</span> You shuld check any URL typed (or just visit <Link href="/" className="text-white hover:underline">home</Link>!)<br /></span>
                    <span className="hidden md:block">web <span className="text-red-500">ERR!</span> <span className="text-purple-500">404</span></span>
                    <span className="hidden md:inline-block">web <span className="text-red-500">ERR!</span> <span className="text-purple-500">404</span> Note that you can also visit from a<br /></span>
                    <span className="hidden md:block">web <span className="text-red-500">ERR!</span> <span className="text-purple-500">404</span> sitemap if desired.</span><br />
                    <div className="hidden lg:block">
                        web <span className="text-red-500">ERR!</span> A complete log of this run can be found in:<br />
                        web <span className="text-red-500">ERR!</span> &nbsp;&nbsp;&nbsp; <span className="hover:underline hover:cursor-pointer" onClick={() => { dirClickHandler("/ichigayamate-personal-web/_logs/" + dateNow + "-navigation.log") }}>/ichigayamate-personal-web/_logs/{dateNow}-navigation.log</span><br />
                        <br />
                    </div>
                </motion.div>
            </div>
            <ActionButtons />
        </pre>
    );
}

export default function NotFoundPage() {
    return (
        <>
            <NextSeo title="404 Not Found" />
            <div className="hidden absolute w-full top-0 left-0 h-screen lg:flex justify-center items-center bg-primary-800 dark:bg-zinc-900 z-[100]">
                <div id="black-window" className="relative overflow-hidden overflow-x-auto pt-5 m-4 w-10/12 xl:w-[1064px] h-4/5 bg-black bg-opacity-80 backdrop-blur-md rounded-2xl" style={{ color: "white" }}>
                    <div className="h-full overflow-y-scroll">
                        <div className="px-8 py-4 h-full">
                            <Display />
                        </div>
                    </div>
                </div>
            </div>
            <div className="block lg:hidden h-screen w-full absolute top-0 left-0 overflow-y-scroll px-8 py-4 bg-black text-white z-[100]">
                <Display />
            </div>
        </>
    )
}