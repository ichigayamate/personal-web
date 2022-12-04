import Link from "next/link";
import Image from "next/image";
import Button from "../buttons/button";
import SiteSettingsPopover from "./sitesettings";

import { useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars, faGear } from "@fortawesome/free-solid-svg-icons";

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
        name: "Contact Me", url: "/contact-me"
    }
]

export default function Navbar() {
    const router = useRouter();
    const [sidebar, setSidebar] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (sidebar && window.innerWidth > 991) {
                setSidebar(false);
            }
        })
    })

    return (
        <>
            <nav className="fixed top-0 left-0 w-full font-sans z-50 bg-navbar-500 bg-opacity-80 backdrop-blur-md" style={{ transition: "padding-left 0.1s, padding-right 0.1s" }}>
                <div className="mx-3 xl:mx-8 my-1 grid grid-cols-12 items-center">
                    <div className="col-span-10 float-left w-auto">
                        <Button title="Menu" variant="transparent" className="lg:hidden" onClick={() => setSidebar(true)}>
                            <FontAwesomeIcon icon={faBars} size="lg" />
                        </Button>
                        {router.pathname == "/" ?
                            <div className="inline-block align-middle px-4 py-2 mr-1 transition-all rounded-md">
                                <Image src="/icon-navbar.png" width={40} height={40} alt="Ichigayamate Personal Website" className="rounded-sm" />
                            </div>
                            :
                            <Link href="/" className="inline-block align-middle bg-transparent hover:bg-white hover:bg-opacity-10 active:bg-white active:bg-opacity-25 px-4 py-2 mr-1 transition-all rounded-md">
                                <Image src="/icon-navbar.png" width={40} height={40} alt="Ichigayamate Personal Website" className="rounded-sm" />
                            </Link>
                        }
                        <div className="hidden lg:inline-block align-middle">
                            {navbarLink.map((link) => (
                                <Link key={link.name} passHref href={link.url} legacyBehavior>
                                    <Button variant="transparent" className={`h-auto font-normal text-white`}>
                                        {link.name}
                                    </Button>
                                </Link>
                            )
                            )}
                        </div>
                    </div>
                    <div className="col-span-2 flex justify-end w-auto">
                        <Popover>
                            <Popover.Button className="inline-block align-middle bg-transparent hover:bg-white hover:bg-opacity-10 active:bg-white active:bg-opacity-25 px-4 py-2 mr-1 transition-all rounded-md text-white">
                                <FontAwesomeIcon icon={faGear} size="lg" />
                            </Popover.Button>
                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Popover.Panel className="fixed top-0 -right-6">
                                    <SiteSettingsPopover />
                                </Popover.Panel>
                            </Transition>
                        </Popover>
                    </div>
                </div>
            </nav>
            <Transition show={sidebar} appear={true}>
                <Transition.Child
                    enter="transition-opacity ease-linear duration-150"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="fixed top-0 left-0 w-screen h-screen z-[99] bg-black bg-opacity-50"
                    onClick={() => setSidebar(false)} />
                <Transition.Child
                    enter="transition ease-in-out duration-150 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-150 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                    className="fixed top-0 left-0 w-72 z-[100] h-full bg-white dark:bg-black !bg-opacity-50 backdrop-blur-lg rounded-r-2xl py-4">
                    <div className="px-4">
                        <Button onClick={() => setSidebar(false)} variant="transparent"
                            icon="iconOnly" className="!py-4 !text-black dark:!text-white" iconValue={<FontAwesomeIcon icon={faArrowLeft} fixedWidth size="xl" />}>
                            Close sidebar
                        </Button>
                    </div>
                    <div className="my-4" onClick={() => setSidebar(false)}>
                        <Link href="/" legacyBehavior passHref>
                            <Button className="!rounded-none w-full text-left !px-8 !py-3 !text-black dark:!text-white" variant="transparent">
                                Home
                            </Button>
                        </Link>
                        {navbarLink.map((link) => (
                            <Link key={link.name} href={link.url} legacyBehavior passHref>
                                <Button className="!rounded-none w-full text-left !px-8 !py-3 !text-black dark:!text-white border-top" variant="transparent">
                                    {link.name}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </Transition.Child>
            </Transition>
        </>
    )
}