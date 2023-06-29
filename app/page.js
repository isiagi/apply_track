"use client";

import Table from "@/components/table/Table";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import { useUser } from "@clerk/nextjs";
import { AppContext } from "@/context/app.context";
import { PiHandWavingThin } from "react-icons/pi";
import { MdCreate } from "react-icons/md";

export default function Home() {
  const [submitting, setSubmitting] = useState(false);
  const { applys, setApplys } = useContext(AppContext);

  const router = useRouter();

  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    const data = async () => {
      setSubmitting(true);
      const response = await fetch("/api/get");

      const dataArray = await response.json();

      setApplys(dataArray);
      setSubmitting(false);
    };

    data();
  }, []);

  const handleEdit = (id) => {
    router.push(`/edit?id=${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/action/${id.toString()}`, { method: "DELETE" });
      const newData = applys.filter((res) => res._id !== id);

      setApplys(newData);
    } catch (error) {
      return new Response(error.message, { status: 500 });
    }
  };

  return (
    <div className="bg-[#f9fafb]">
      <div className="md:mx-7 mx-0">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl pt-7 mb-4 text-[#10B981] flex items-center gap-3 text-3xl font-light">
              WELCOME {isSignedIn && `${user.lastName.toUpperCase()}`} !{" "}
              <PiHandWavingThin className="text-[#08D1C7]" />
            </h2>
            <h3 className="text-[#475569]">
              Keep Track of your Job Applications Records Here.
            </h3>
          </div>
          <div className="flex justify-center">
            <div>
              <input
                placeholder="Search application"
                className="border-none p-2 outline-none border-slate-800"
              />
              <button className="bg-[#08D155] text-white p-2 rounded">
                Search
              </button>
            </div>
          </div>
        </div>
        <Link href="/create">
          <button className="bg-[#08D1C7] text-white p-2 rounded float-right flex items-center">
            <MdCreate /> New Apply
          </button>
        </Link>
        {isLoaded && isSignedIn ? (
          <div>
            <Table
              data={applys}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleSubmit={submitting}
            />
          </div>
        ) : (
          <div>
            {" "}
            <h1>Please Login to continue...</h1>
          </div>
        )}
      </div>
    </div>
  );
}
