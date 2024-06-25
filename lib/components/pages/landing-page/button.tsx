"use client";

import { Button as HButton } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import Link from "next/link";

interface NewButtonProps {
  icon: IconDefinition;
  children: React.ReactNode;
  link: string;
}

const Button: React.FC<NewButtonProps> = ({ icon, children, link }) => {
  return (
    <Link href={link} passHref legacyBehavior>
      <HButton
        as="a"
        className="flex items-center w-full p-4 hover:bg-black/10 dark:hover:bg-white/10 transition-colors rounded-xl"
      >
        <span>
          <FontAwesomeIcon
            icon={icon}
            className="p-4 mr-4 rounded-xl bg-black/10 dark:bg-white/10"
            size="lg"
          />
        </span>
        <span>{children}</span>
      </HButton>
    </Link>
  );
};

export default Button;
