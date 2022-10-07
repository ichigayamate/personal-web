import Link from "next/link";
import { useRouter } from "next/router";
import { Drawer, Button } from "react-daisyui";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Foot from "./components/footer";
import NavBar, { navbarLink } from "./components/navbar";
import SidebarContext from "./components/sidebarcontext";

export default function Layout({ children }) {
    const [showSide, setShowSide] = useState(false);
    const side = { showSide, setShowSide };
    const router = useRouter();

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 1024) {
                setShowSide(false);
            }
        })

        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                e.preventDefault();
                setShowSide(false);
            }
        })
    });

    return (
        <SidebarContext.Provider value={side}>
            <Drawer open={showSide} onClickOverlay={() => setShowSide(false)} side={
                <div className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <div className="mb-4">
                        <Button shape="square" color="ghost" onClick={() => setShowSide(false)}>
                            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                        </Button>
                    </div>
                    <ul>
                        <li><Link href="/"><a onClick={() => setShowSide(false)} className={router.pathname == "/" ? "active" : ""}>Home</a></Link></li>
                        {navbarLink.map((sidebarContent) => {
                            return (
                                <li key={sidebarContent.name}><Link href={sidebarContent.url}><a onClick={() => setShowSide(false)}
                                    className={router.pathname == sidebarContent.url ? "active" : ""}>{sidebarContent.name}</a></Link></li>
                            )
                        })}
                    </ul>
                </div>
            }>
                <NavBar />
                <main>
                    {children}
                </main>
                <Foot />
            </Drawer>
        </SidebarContext.Provider>
    )
}