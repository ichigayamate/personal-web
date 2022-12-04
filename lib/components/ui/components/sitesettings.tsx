import Button from "../buttons/button";
import { useTheme } from 'next-themes';
import { RadioGroup } from "@headlessui/react";

import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function SiteSettingsPopover() {
    const { theme, setTheme } = useTheme();

    const handleReset = () => {
        setTheme("system");
        // document.querySelector("#ba-color").value = "#195d8b"
    }

    useEffect(() => {
        if (localStorage.getItem("backgroundAccent") !== null) {
            // coming soon
        } else {
            localStorage.setItem("backgroundAccent", "#195d8b");
        }
    }, [])

    return (
        <div className="bg-gray-200 dark:bg-gray-800 bg-opacity-80 backdrop-blur-md p-4 mt-5 -ml-2 shadow-xl rounded-md">
            <RadioGroup className="w-full flex justify-center" value={theme} onChange={setTheme}>
                <RadioGroup.Option value="light" className="inline-block">
                    {({ checked }) => (
                        <Button outline={!checked ? true : false} overrideHoverColor
                            className={`rounded-l-md rounded-r-none border-r-0 ${checked ? "hover:bg-primary-500 active:bg-primary-500" : ""}`}
                            icon="iconOnly" iconValue={<FontAwesomeIcon icon={faSun} fixedWidth />}>Light</Button>
                    )}
                </RadioGroup.Option>
                <RadioGroup.Option value="system" className="inline-block">
                    {({ checked }) => (
                        <Button outline={!checked ? true : false} overrideHoverColor
                            className={`rounded-none ${checked ? "hover:bg-primary-500 active:bg-primary-500" : ""}`}>Auto</Button>
                    )}
                </RadioGroup.Option>
                <RadioGroup.Option value="dark" className="inline-block">
                    {({ checked }) => (
                        <Button outline={!checked ? true : false} overrideHoverColor
                            className={`rounded-r-md rounded-l-none border-l-0 ${checked ? "hover:bg-primary-500 active:bg-primary-500" : ""}`}
                            icon="iconOnly" iconValue={<FontAwesomeIcon icon={faMoon} fixedWidth />}>Dark</Button>
                    )}
                </RadioGroup.Option>
            </RadioGroup>
            <Button variant="danger" className="w-full mt-2" onClick={() => handleReset()}>Reset Settings</Button>
        </div>
    )
}