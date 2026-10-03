"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div className="mx-auto max-w-xl py-16 text-center">
      <h2 className="text-2xl font-semibold">
        Couldn&apos;t load repositories
      </h2>

      <p className="mt-2 text-secondary">
        {error.message}
      </p>

      <button
        onClick={reset}
        className="mt-6 rounded-lg bg-accent px-4 py-2 text-white"
      >
        Try again
      </button>
    </div>
  );
};

export default Error;