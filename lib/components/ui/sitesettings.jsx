import { Button, ButtonGroup, Divider, FormControl, FormLabel, LightMode, PopoverArrow, PopoverBody, PopoverContent, useColorMode, useRadioGroup, useToast } from "@chakra-ui/react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RadioButton from "./radiobuttons";

import { useCallback, useEffect, useState } from "react";

export default function SiteSettingsPopover() {
    const colorModes = ["light", "system", "dark"];
    const [colorValue, setColorValue] = useState("system");
    const { setColorMode } = useColorMode();
    const resetToast = useToast();

    const handleThemeChange = useCallback((e) => {
        if (localStorage.getItem("colorScheme") == "system") {
            if (e.matches) {
                setColorMode("dark");
            } else {
                setColorMode("light");
            }
        }
    }, [setColorMode]);

    const handleColorChange = useCallback((value) => {
        setColorMode(value);
        localStorage.setItem("colorScheme", value);
        if (value == "system") {
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleThemeChange);
        }
    }, [handleThemeChange, setColorMode])

    const handleReset = () => {
        resetToast.closeAll()
        setValue("system");
        handleColorChange("system");
        document.querySelector("#ba-color").value = "#195d8b"
        resetToast({
            description: "All settings have has been reset!",
            status: "success"
        })
    }

    const { getRootProps, getRadioProps, setValue } = useRadioGroup({
        name: "color-mode",
        defaultValue: colorValue,
        onChange: handleColorChange,
    });

    useEffect(() => {
        if (localStorage.getItem("colorScheme") !== null) {
            setColorValue(localStorage.getItem("colorScheme"));
            setValue(colorValue);
            if (localStorage.getItem("colorScheme") == "system") {
                window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleThemeChange);
            }
        } else {
            setValue("system");
            setColorMode("system");
        }

        if (localStorage.getItem("backgroundAccent") !== null) {
            // coming soon
        } else {
            localStorage.setItem("backgroundAccent", "#195d8b");
        }
    }, [setValue, colorValue, handleThemeChange, setColorMode])

    return (
        <PopoverContent className="mt-2 border-transparent">
            <PopoverArrow />
            <PopoverBody className="w-full">
                <ButtonGroup isAttached colorScheme="primary" className="w-full justify-center mt-2" {...getRootProps}>
                    {colorModes.map((value) => {
                        let valueread;
                        switch (value) {
                            case "light":
                                valueread = <FontAwesomeIcon icon={faSun} />
                                break;
                            case "dark":
                                valueread = (<FontAwesomeIcon icon={faMoon} />)
                                break;
                            case "system":
                                valueread = "Auto"
                                break;
                        }
                        return (
                            <RadioButton key={value} {...getRadioProps({ value })}>
                                {valueread}
                            </RadioButton>
                        )
                    })}
                </ButtonGroup>
                <FormControl display="flex" alignItems="center" className="mt-2 mb-1 w-full">
                    <FormLabel htmlFor="ba-color" mb="2" mt="2" mr="14">
                        Background Accent Color
                    </FormLabel>
                    <input type="color" id="ba-color" className="box-[unset] p-0 bg-transparent h-[30px] border-none rounded-md cursor-pointer" defaultValue="#195d8b" />
                </FormControl>
                <Divider />
                <LightMode className="mt-4">
                    <Button colorScheme="red" className="w-full" onClick={() => handleReset()}>Reset Settings</Button>
                </LightMode>
            </PopoverBody>
        </PopoverContent>
    )
}