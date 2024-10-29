"use client";

import {usePathname, useRouter} from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    toast.error(`Page ${pathname} not found`);
    router.replace("/");
  });
  return <></>;
}
