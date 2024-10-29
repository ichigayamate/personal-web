import {
  Field,
  Popover,
  PopoverButton,
  PopoverPanel,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { AnchorProps } from "@headlessui/react/dist/internal/floating";
import { useTheme } from "next-themes";
import { faDesktop, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import NavbarButton from "@ui/navbar/navbar-button";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const LIGHTMODE_VALUES = [
  { value: "light", icon: faSun, description: "Use light mode" },
  {
    value: "system",
    icon: faDesktop,
    description: "Follows system preferences",
  },
  { value: "dark", icon: faMoon, description: "Use dark mode" },
];

export default function DarkModePopup({
  anchor,
  className,
  disableColoredTheme,
}: Readonly<{ anchor?: AnchorProps; className?: string; disableColoredTheme?: boolean }>) {
  const DARKMODE_RADIO_BUTTON_CLASSNAME =
    "border border-primary-500 hover:bg-primary-500 hover:text-white data-[checked]:text-white data-[checked]:bg-primary-500 px-2 py-1 transition-colors cursor-pointer";

  const [mounted, setMounted] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <NavbarButton>
        <FontAwesomeIcon icon={faDesktop} />
      </NavbarButton>
    );

  let buttonIcon: IconDefinition;
  switch (theme.resolvedTheme) {
    case "dark":
      buttonIcon = faMoon;
      break;
    case "light":
      buttonIcon = faSun;
      break;
  }

  return (
    <Popover className="relative" suppressHydrationWarning>
      <PopoverButton
        className={`${className} ${!disableColoredTheme && theme.theme !== "system" ? "text-primary-500" : ""}`}
      >
        <FontAwesomeIcon icon={buttonIcon} fixedWidth />
      </PopoverButton>
      <PopoverPanel
        anchor={anchor}
        className="z-[1010] px-4 py-2 bg-white/75 dark:bg-neutral-600/75 backdrop-blur-xl rounded-md shadow-xl dark:shadow-none"
      >
        <RadioGroup
          className="flex"
          value={theme.theme}
          onChange={(value) => theme.setTheme(value)}
        >
          {LIGHTMODE_VALUES.map((mode, idx) => {
            const roundedStyle =
              idx === 0
                ? "rounded-l-md"
                : idx === LIGHTMODE_VALUES.length - 1
                  ? "rounded-r-md"
                  : "";
            return (
              <Field key={mode.value}>
                <Radio
                  value={mode.value}
                  className={`${DARKMODE_RADIO_BUTTON_CLASSNAME} ${roundedStyle}`}
                  title={mode.description}
                >
                  <FontAwesomeIcon icon={mode.icon} fixedWidth />
                </Radio>
              </Field>
            );
          })}
        </RadioGroup>
      </PopoverPanel>
    </Popover>
  );
}
