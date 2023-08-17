"use client";

import { useRouter } from "next/navigation";

import { useUser } from "@clerk/nextjs";

import Intro from "@/components/intro/Intro";
import { useLayoutEffect } from "react";

export default function HomeComponent() {
  const router = useRouter();

  const { isLoaded, isSignedIn } = useUser();

  useLayoutEffect(() => {
    isLoaded && isSignedIn && router.push("/apply");
  }, []);

  return (
    <div className="">
      <div>
        <Intro />
      </div>
    </div>
  );
}

// <PiHandWavingThin className="text-[#08D1C7]" />
