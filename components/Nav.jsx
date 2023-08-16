"use client";

import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

function NavComponent() {
  const { isSignedIn } = useUser();

  return (
    <nav className="md:px-10 px-2 flex items-center justify-between h-16 bg-[#FAFAFA]">
      <Link href="/"><h1 className="text-lg text-[#10B981] font-medium">JOBS APPLY</h1></Link>
      {isSignedIn ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <ul className="flex flex-wrap gap-10">
          <Link href="/sign-up">
            <li className="text-stone-600 text-lg">
              <button className="bg-[#08D1C7] text-white p-2 rounded outline-none">Sign In</button>
            </li>
          </Link>
        </ul>
      )}
    </nav>
  );
}

export default NavComponent;
