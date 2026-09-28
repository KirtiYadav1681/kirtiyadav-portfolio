"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="sec">
      <header className="sec-head">
        <p className="label">Error</p>
        <h1 className="display">Something went wrong.</h1>
        <p className="lead">The page could not be loaded. You can try again.</p>
      </header>
      <button className="btn btn-paper" type="button" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
