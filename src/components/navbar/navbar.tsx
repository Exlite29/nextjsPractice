import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav>
      <ul
        className="flex justify-center"
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   listStyle: "none",
        //   gap: "10rem",
        // }}
      >
        <li className="">
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
  );
}
