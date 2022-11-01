import { useEffect } from "react";
import Link from "next/link";
import Image from "next/future/image";

import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Grid, GridItem, Popover, PopoverTrigger, useDisclosure, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars, faGear } from "@fortawesome/free-solid-svg-icons";
import SiteSettingsPopover from "./sitesettings";

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

export default function Navbar() {
    const navbarButtonClassName = "inline-block align-middle bg-transparent text-gray-200 hover:bg-white hover:bg-opacity-10 active:bg-white active:bg-opacity-25 px-4 py-3 mx-0.5 transition-all rounded-md"

    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (isOpen && window.innerWidth > 991) {
                onClose();
            }
        })
    })

    return (
        <>
            <nav className="fixed top-0 left-0 w-full font-sans z-50 bg-navbar-500 bg-opacity-80 backdrop-blur-md" style={{ transition: "padding-left 0.1s, padding-right 0.1s" }}>
                <Grid templateColumns="repeat(12, 1fr)" className="mx-3 xl:mx-8 my-1 items-center">
                    <GridItem colSpan={11} className="float-left w-auto">
                        <button title="Menu" onClick={onOpen} className="inline-block lg:hidden align-middle bg-transparent text-gray-200 hover:bg-white hover:bg-opacity-10 active:bg-white active:bg-opacity-25 px-3 py-3 mx-1 transition-all rounded-md">
                            <FontAwesomeIcon icon={faBars} size="lg" />
                        </button>
                        {router.pathname == "/" ?
                            <div className="inline-block align-middle px-4 py-2 mr-1 transition-all rounded-md">
                                <Image src="/icon-navbar.png" width={42} height={42} alt="Ichigayamate Personal Website" className="rounded-sm" />
                            </div>
                            :
                            <Link href="/">
                                <a className="inline-block align-middle bg-transparent hover:bg-white hover:bg-opacity-10 active:bg-white active:bg-opacity-25 px-4 py-2 mr-1 transition-all rounded-md">
                                    <Image src="/icon-navbar.png" width={42} height={42} alt="Ichigayamate Personal Website" className="rounded-sm" />
                                </a>
                            </Link>
                        }
                        <div className="hidden lg:inline-block align-middle">
                            {navbarLink.map((link) => (
                                    <Link key={link.name} passHref href={link.url}>
                                        <Button as="a" className={navbarButtonClassName + " h-auto font-normal"}>
                                            {link.name}
                                        </Button>
                                    </Link>
                                )
                            )}
                        </div>
                    </GridItem>
                    <GridItem colSpan={1} className="flex justify-end w-auto">
                        <Popover>
                            <PopoverTrigger>
                                <button title="Site Settings" className={navbarButtonClassName}>
                                    <FontAwesomeIcon icon={faGear} size="lg" />
                                </button>
                            </PopoverTrigger>
                            <SiteSettingsPopover />
                        </Popover>
                    </GridItem>
                </Grid>
            </nav>
            <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent className="bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-60 backdrop-blur-md">
                    <DrawerHeader className="py-8 bg-white dark:bg-[#000000] z-10">
                        <button id="sidebar-close-button" className="inline-block align-middle bg-transparent text-zinc-600 dark:text-zinc-300 hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 active:bg-black dark:active:bg-white active:bg-opacity-25 dark:active:bg-opacity-25 px-4 py-3 transition-all rounded-md" onClick={onClose}>
                            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                        </button>
                    </DrawerHeader>
                    <DrawerBody className="px-0 pt-4">
                        <VStack align="strech">
                            <Link href="/" passHref>
                                <Button as="a" onClick={onClose} colorScheme="primary" variant="ghost" isActive={router.pathname == "/" ? true : false} className="rounded-none justify-start px-10 py-6 text-gray-700 dark:text-gray-300">Home</Button>
                            </Link>
                            {navbarLink.map((link) => {
                                return (
                                <Link key={link.name} href={link.url} passHref>
                                    <Button as="a" onClick={onClose} colorScheme="primary" variant="ghost" isActive={router.pathname.indexOf(link.url) !== -1 ? true : false} className="rounded-none justify-start px-10 py-6 mt-0 text-gray-700 dark:text-gray-300">{link.name}</Button>
                                </Link>
                                )
                            })}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}