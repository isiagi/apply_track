"use client";

import { useRouter } from "next/navigation";

import { useUser } from "@clerk/nextjs";

import Intro from "@/components/intro/Intro";
import { useEffect, useLayoutEffect } from "react";
import Home from "@/components/home/Home";

export default function HomeComponent() {
  const router = useRouter();

  const { isLoaded, isSignedIn } = useUser();

  //   isSignedIn && router.push("/apply");

  return (
    <div className="">
      <div className="md:mx-auto mx-2">
        {isLoaded && isSignedIn ? <Home /> : <Intro />}
      </div>
    </div>
  );
}

// <PiHandWavingThin className="text-[#08D1C7]" />
