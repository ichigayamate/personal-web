"use client";

import Backdrop from "@page_component/root/i10e-backdrop";
import Button from "@ui/button/button";

import "./error.css";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const errorType = error.stack.split(error.message)[0];
  return (
    <Backdrop error>
      <div className="text-center">
        <h1 className="font-bold font-mono text-3xl mb-2 text-danger-500">
          {process.env.NODE_ENV === "development" ? (
            <span className="block whitespace-pre-wrap text-left text-lg pb-2 border-b border-red-700">
              {errorType}
              {error.message}
            </span>
          ) : (
            "Something went wrong!"
          )}
        </h1>
        <p className="font-mono">
          {process.env.NODE_ENV !== "development" &&
            "An error occurred in the client and was caught by React. Please try again later."}
        </p>
        <div className="text-left overflow-y-auto max-h-80">
          <p className="font-mono mb-2">Stack trace: </p>
          <p className="font-mono">
            {error.stack.split("at ").map((stack, idx) => {
              if (idx === 0) return null;
              return (
                <span
                  key={idx.toFixed()}
                  className={`block ${stack.includes(".tsx") ? "text-bold" : null}`}
                >{`at ${stack}`}</span>
              );
            })}
          </p>
        </div>
        {process.env.NODE_ENV === "development" && (
          <div className="text-left my-2">
            <p>
              This screen is visible only in development. It will not appear if
              the app crashes in production.
            </p>
            <p>
              Open your browser&apos;s developer console to further inspect this
              error.
            </p>
          </div>
        )}
        <Button onClick={reset}>Reload page</Button>
      </div>
    </Backdrop>
  );
}
