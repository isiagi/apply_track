import Link from "next/link";

function Nav() {
  return (
    <nav className="px-10 flex items-center justify-between h-14 bg-[#6DED5C]">
      <h1 className="text-white text-lg">Jobs Applys</h1>
      <ul className="flex gap-10">
        <Link href="/sign-up">
          <li className="text-white text-lg">Register</li>
        </Link>
        <li className="text-white text-lg">Login</li>
      </ul>
    </nav>
  );
}

export default Nav;
