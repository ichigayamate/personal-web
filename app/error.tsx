"use client";

import Backdrop from "@page_component/landing-page/i10e-backdrop";

export default function ErrorPage({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  const errorType = error.stack.split(error.message)[0];
  return (
    <Backdrop error>
      <div className="text-center">
        <h1 className="font-bold font-mono text-3xl mb-2 text-danger-500">
          {process.env.NODE_ENV === "development" ? (
            <>
              {errorType}
              {error.message}
            </>
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
            {error.stack.split("at").map((stack, idx) => {
              if (idx === 0) return null;
              return (
                <span
                  key={stack}
                  className={`block ${stack.includes(".tsx") ? "text-bold" : null}`}
                >{`at${stack}`}</span>
              );
            })}
          </p>
        </div>
        <div className="text-left mt-2">
          <p>
            This screen is visible only in development. It will not appear if
            the app crashes in production.
          </p>
          <p>
            Open your browser&apos;s developer console to further inspect this
            error.
          </p>
        </div>
      </div>
    </Backdrop>
  );
}
