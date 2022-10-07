import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { WindowMockup } from "react-daisyui";
import { motion } from "framer-motion";

function ActionButtons() {
    const router = useRouter();

    const insertText = (text) => {
        const preOutput = document.querySelectorAll(".pre-output")[0];
        const preOuter = document.querySelector(".mockup-window div");
        preOutput.insertAdjacentHTML('beforeend', text + "<br>");
        preOuter.scrollTop = preOuter.clientHeight;
    }

    const helpHandler = () => {
        insertText("Coming soon<br>");
    }

    const changeHandler = (e) => {
        if (e.key === 'Enter') {
            let route = e.target.value;
            insertText("$ " + route);
            document.getElementById("input-wrapper").style.display = 'none';
            document.getElementById("input").value = '';
            const timer = setTimeout(() => {
                const preOuter = document.querySelector(".mockup-window div");
                const input = document.querySelector("#input-wrapper");
                input.style.display = 'block';
                input.querySelector("input").focus();
                preOuter.scrollTop = preOuter.clientHeight;
            }, 250);
            switch (route) {
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
                case "clear":
                    document.querySelectorAll(".pre-output")[0].innerHTML = '';
                    break;
                case "/clear":
                    document.querySelectorAll(".pre-output")[0].innerHTML = '';
                    break;
                default:
                    fetch(route).then((res) => {
                        if (res.status == 200) {
                            router.push(route);
                            clearTimeout(timer);
                        } else {
                            console.log(route)
                            if (route.startsWith("/")) {
                                insertText('<span class="text-error">GET ' + route + ' HTTP ERROR ' + res.status + '</span><br>');
                            }
                            else {
                                insertText('<span>bash: ' + route + ': command not found</span><br>');
                            }
                        }
                    })
                    break;
            }
        }
    }

    return (
        <motion.div className="hidden" animate={{ display: "block", transition: { duration: 0.1, delay: 1.7 } }}>
            <div className="block md:hidden">
                Choose action: <br />
                <Link href="/"><a className="text-purple-500 hover:underline">&gt; Home</a></Link><br />
                <button className="text-purple-500 hover:underline" onClick={() => router.back()}>&gt; Go Back</button><br />
                <Link href="/sitemap"><a className="text-purple-500 hover:underline">&gt; Sitemap</a></Link><br />
            </div>
            <div id="input-wrapper" className="hidden md:block">$ <input autoComplete="off" id="input" type="text" className="w-11/12 bg-transparent focused outline-none" onKeyDown={changeHandler} /></div>
        </motion.div>
    )
}

function Display() {
    const [url, setUrl] = useState();
    const [href, setHref] = useState();
    const [dateNow, setDateNow] = useState();

    useEffect(() => {
        setDateNow(new Date().toISOString().replace(/:/gi, "_"));
        setUrl(location.pathname);
        setHref(location.href);
        setTimeout(() => { document.querySelector("#input").focus() }, 1700);
    }, [])

    return (
        <pre className="whitespace-pre-wrap" style={{ wordWrap: "break-word" }}>
            <div className="pre-output">
                <div className="hidden md:block">$ {url}
                    <br />
                    <br /></div>
                <motion.div className="hidden" animate={{ display: "block", transition: { duration: 0.1, delay: 0.5 } }}>
                    &gt; ichigayamate-personal-website@1.0.0 visitor<br />
                    &gt; nav {url}
                </motion.div>
                <br />
                <motion.div className="hidden" animate={{ display: "block", transition: { duration: 0.1, delay: 1.5 } }}>
                    <span className="hidden md:block">web <span className="text-error">ERR!</span> <span className="text-purple-500">code</span> E404<br /></span>
                    <span className="hidden md:inline-block">web <span className="text-error">ERR!</span> <span className="text-purple-500">404</span>&nbsp;</span><span className="text-error md:text-current">Not Found - GET {href} - Not Found</span><br />
                    <span className="hidden md:inline-block">web <span className="text-error">ERR!</span> <span className="text-purple-500">404</span> </span><br />
                    <span className="hidden md:inline-block">web <span className="text-error">ERR!</span> <span className="text-purple-500">404</span>&nbsp;</span>{url} is not in this site.<br />
                    <span className="hidden md:block">web <span className="text-error">ERR!</span> <span className="text-purple-500">404</span> You shuld check any URL typed (or just visit <Link href="/"><a className="hover:underline">home</a></Link>!)</span><br />
                    <div className="hidden md:block">
                        web <span className="text-error">ERR!</span> A complete log of this run can be found in:<br />
                        web <span className="text-error">ERR!</span> &nbsp;&nbsp;&nbsp; <span className="hover:underline">/ichigayamate-personal-web/_logs/{dateNow}-navigation.log</span><br />
                        <br />
                    </div>
                </motion.div>
            </div>
            <ActionButtons />
        </pre>
    )
}

export default function NotFoundPage() {
    return (
        <>
            <NextSeo title="404 Not Found" />
            <div className="hidden absolute w-full top-0 left-0 h-screen md:flex justify-center items-center bg-zinc-900" style={{ zIndex: 100 }}>
                <WindowMockup className="m-4 w-9/12 xl:w-6/12 h-4/5" style={{ background: "black" }} borderColor="base-100">
                    <div className="h-full overflow-y-scroll">
                        <div className="px-8 py-4">
                            <Display />
                        </div>
                    </div>
                </WindowMockup>
            </div>
            <div className="block md:hidden h-full w-full absolute top-0 left-0 overflow-y-scroll px-8 py-4 bg-black" style={{ zIndex: 100 }}>
                <Display />
            </div>
        </>
    )
}