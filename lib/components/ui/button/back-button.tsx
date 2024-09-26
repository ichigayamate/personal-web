"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./button";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function BackButton() {
  return (
    <Link href="../" passHref legacyBehavior>
      <Button className="!px-4 !py-2 text-lg !bg-transparent hover:!bg-black/15 dark:hover:!bg-white/15">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>
    </Link>
  );
}
