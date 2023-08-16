"use client";

import Table from "@/components/antTable/Table";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import { useUser } from "@clerk/nextjs";
import { AppContext } from "@/context/app.context";
// import { PiHandWavingThin } from "react-icons/pi";
import { MdCreate } from "react-icons/md";

export default function Home() {
  const [submitting, setSubmitting] = useState(false);
  const { applys, setApplys } = useContext(AppContext);

  const router = useRouter();

  const { isLoaded, isSignedIn, user, isLoading } = useUser();

  const [searchParam, setSearchParam] = useState("");

  const handleSearch = async () => {
    alert("hello");
    try {
      const response = await fetch(`/api/search/${searchParam}`);

      const dataArray = await response.json();

      setApplys(dataArray);
      setSearchParam("");
    } catch (error) {
      return new Response(error.message, { status: 500 });
    }
  };

  useEffect(() => {
    const data = async () => {
      setSubmitting(true);
      const response = await fetch("/api/get?page=1&limit=3");

      const dataArray = await response.json();

      console.log(dataArray);

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
    <div className="">
      <div>
        {isLoaded && isSignedIn ? (
          <div className="md:mx-7 mx-0">
            <div className="flex items-center justify-between">
              <div>
                <h2 className=" pt-7 mb-4 text-[#10B981] flex items-center gap-3 text-3xl font-light">
                  HELLO {isSignedIn && `${user.lastName.toUpperCase()}`}! 👋
                </h2>
                <h3 className="text-[#475569]">
                  Keep Track of your Job Applications Records Here.
                </h3>
              </div>
              <div className="flex justify-center">
                <div>
                  <input
                    placeholder="Search application"
                    className="border-none p-2 bg-[#FAFAFA] outline-none border-slate-800"
                    value={searchParam}
                    onChange={(e) => setSearchParam(e.target.value)}
                  />
                  <button
                    onClick={() => handleSearch()}
                    className="bg-[#10B981] text-white p-2 rounded"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <Link href="/create">
              <button className="bg-[#08D1C7] text-white p-2 rounded float-right flex items-center my-3">
                <MdCreate /> New Apply
              </button>
            </Link>
            {
              <div>
                <Table
                  data={applys}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  handleSubmit={submitting}
                />
              </div>
            }
          </div>
        ) : (
          <div className="bg-[url('https://images.unsplash.com/photo-1635350736475-c8cef4b21906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9iJTIwYXBwbGljYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')] bg-cover bg-center h-screen">
            <div className="backdrop-brightness-50 h-full flex flex-col md:items-end items-center justify-center md:px-10 px-2 leading-loose">
              <h1 className="text-white text-3xl max-w-[500px] text-center font-medium">
                WELCOME TO <span className="text-[#08D1C7]">JOBS</span>{" "}
                APPLICATION <span className="text-[#08D1C7]">TRACKER</span>
              </h1>
              <em>
                <p className=" text-xl text-slate-300 mt-3">
                  We help you track your job applications
                </p>
              </em>
              <Link href="/sign-up">
                <button className="bg-[#08D1C7] text-white p-2 rounded w-fit my-5">
                  Sign In For Free
                </button>
              </Link>
              <em>
                <p className="max-w-[400px] text-slate-300">
                  ”The brick walls are there for a reason. The brick walls are
                  not there to keep us out. The brick walls are there to show us
                  how badly we want something.”—Randy Pausch
                </p>
              </em>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// <PiHandWavingThin className="text-[#08D1C7]" />
