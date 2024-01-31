import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="flex justify-center"> Welcome Home!</h1>
      <nav className="flex justify-center">
        <Link href="/about">About</Link>
      </nav>
    </>
  );
}
