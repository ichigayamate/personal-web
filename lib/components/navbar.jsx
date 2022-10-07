import SidebarContext from "./sidebarcontext";

import Link from "next/link";
import Image from "next/image";

import { Navbar, Button, Menu } from "react-daisyui";
import { useContext } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBars, faGear } from "@fortawesome/free-solid-svg-icons";
import { RWebShare } from "react-web-share";

export const navbarLink = [
    {
        name: "About", url: "/about"
    },
    {
        name: "Projects", url: "/projects"
    },
    {
        name: "Blog", url: "/blog"
    },
    {
        name: "Contact Me", url: "/about"
    }
]

export default function NavBar() {
    const { setShowSide } = useContext(SidebarContext);
    const router = useRouter();
    return (
        <nav className="sticky top-0 left-0 flex w-full component-preview items-center justify-center gap-2 font-sans z-50" style={{ transition: "padding-left 0.1s, padding-right 0.1s" }}>
            <Navbar className="shadow-xl bg-navbar bg-opacity-80 backdrop-blur-lg" style={{ transition: "border-radius 0.1s" }}>
                <Navbar.Start>
                    <span className="lg:hidden">
                        <Button shape="square" color="ghost" onClick={() => setShowSide(true)}>
                            <FontAwesomeIcon icon={faBars} size="lg" />
                        </Button>
                    </span>
                    {router.pathname == "/" ?
                        <div className="px-4 border border-transparent flex">
                            <Image src="/icon-navbar.png" width={42} height={42} alt="Ichigayamate Personal Website" className="rounded-sm" />
                        </div>
                        :
                        <Link href="/">
                            <a className="btn btn-ghost no-animation normal-case text-xl">
                                <Image src="/icon-navbar.png" width={42} height={42} alt="Ichigayamate Personal Website" className="rounded-sm" />
                            </a>
                        </Link>
                    }
                    <div className="hidden lg:inline-flex">

                        <Menu horizontal={true} className="p-0 horizontal">
                            {navbarLink.map((link) => {
                                return (
                                    <Menu.Item key={link.name}>
                                        <Link href={link.url}>
                                            <a onMouseDown={(e) => { e.preventDefault() }}>{link.name}</a>
                                        </Link>
                                    </Menu.Item>
                                )
                            })}
                        </Menu>
                    </div>
                </Navbar.Start>
                <Navbar.End>
                    <RWebShare data={{
                        text: "Ichigayamate Personal Web",
                        url: "https://ichigayamate.xyz" + router.pathname,
                        title: "Ichigayamate Personal Web"
                    }}>
                    <Button color="ghost" title="Share">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
                    </Button>
                    </RWebShare>
                    <Button color="ghost" title="Site Settings">
                        <FontAwesomeIcon icon={faGear} size="lg" />
                    </Button>
                </Navbar.End>
            </Navbar>
        </nav>
    )
}