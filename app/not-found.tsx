"use client";

import Backdrop from "@page_component/root/backdrop/i10e-backdrop";
import Button from "@ui/button/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <Backdrop error>
      <div className="text-center">
        <h1 className="font-bold font-mono text-3xl mb-2">
          Did you find something?
        </h1>
        <p className="font-mono">
          If not, it may be moved or deleted. Please check the URL and try
          again.
        </p>
        <div className="mt-4 flex justify-center gap-2">
          <Button onClick={() => router.back()}>Go back</Button>
          <Link href="/" passHref legacyBehavior>
            <Button>Back to homepage</Button>
          </Link>
        </div>
      </div>
    </Backdrop>
  );
}
