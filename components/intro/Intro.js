import Link from "next/link";
import React from "react";

function Intro() {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1635350736475-c8cef4b21906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9iJTIwYXBwbGljYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')] bg-cover bg-center h-screen">
      <div className="backdrop-brightness-50 h-full flex flex-col md:items-end items-center justify-center md:px-10 px-2 leading-loose">
        <h1 className="text-white text-3xl max-w-[500px] text-center font-medium">
          WELCOME TO <span className="text-[#08D1C7]">JOBS</span> APPLICATION{" "}
          <span className="text-[#08D1C7]">TRACKER</span>
        </h1>
        <em>
          <p className=" text-xl text-slate-300 mt-3">
            We help you track your job applications
          </p>
        </em>
        <Link href="/sign-up">
          <button className="bg-[#08D1C7] text-white p-2 rounded w-fit my-5">
            Sign Up For Free
          </button>
        </Link>
        <em>
          <p className="max-w-[400px] text-slate-300">
            ”The brick walls are there for a reason. The brick walls are not
            there to keep us out. The brick walls are there to show us how badly
            we want something.”—Randy Pausch
          </p>
        </em>
      </div>
    </div>
  );
}

export default Intro;
