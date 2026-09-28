import Link from "next/link";

export default function NotFound() {
  return (
    <main className="sec">
      <header className="sec-head">
        <p className="label">404</p>
        <h1 className="display">This page is not on the site.</h1>
        <p className="lead">The portfolio lives on the home page.</p>
      </header>
      <Link className="btn btn-paper" href="/">
        Back home
      </Link>
    </main>
  );
}
