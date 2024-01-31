import Link from "next/link";

export default function NavigationBar() {
  return (
    <>
      <div>
        <nav>
          <ul
            className="flex"
            style={{
              display: "flex",
              justifyContent: "center",
              listStyle: "none",
              gap: "10rem",
            }}
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/profile"}>Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
