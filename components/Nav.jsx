"use client";

import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

function NavComponent() {
  const { isSignedIn } = useUser();

  return (
    <nav className="px-10 flex items-center justify-between h-14 bg-[#FAFAFA]">
      <h1 className="text-lg text-[#10B981] ">Jobs Applys</h1>
      {isSignedIn ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <ul className="flex flex-wrap gap-10">
          <Link href="/sign-up">
            <li className="text-stone-600 text-lg">
              <button>Sign In</button>
            </li>
          </Link>
        </ul>
      )}
    </nav>
  );
}

export default NavComponent;
