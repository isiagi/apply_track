"use client";

import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { useContext, useState } from "react";
import { AppContext } from "@/context/app.context";

function NavComponent() {
  const { isSignedIn } = useUser();

  const {applys, setApplys} = useContext(AppContext)

  const [searchParam, setSearchParam] = useState("");

  const handleSearch = async () => {
    alert('hello')
    try {
      const response = await fetch(`/api/search/${searchParam}`);

      const dataArray = await response.json()

      setApplys(dataArray)
      
    } catch (error) {
      return new Response(error.message, { status: 500 });
    }
  };

  return (
    <nav className="px-10 flex items-center justify-between h-14 bg-[#fff]">
      <h1 className="text-stone-600 text-lg">Jobs Applys</h1>
      <div className="flex justify-center">
        <div>
          <input
            placeholder="Search application"
            className="border-none p-2 outline-none border-slate-800 bg-[#eee] xs:w-[50px]"
            onChange={(e) => setSearchParam(e.target.value)}
          />
          <button onClick={() => handleSearch()} className="bg-[#6DED5C] text-white p-2 rounded">
              Search
            </button>
        </div>
      </div>
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
