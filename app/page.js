"use client"

import Table from "@/components/table/Table";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {  useUser, useAuth } from "@clerk/nextjs"


export default function Home() {
  const [applys, setApplys] = useState([])
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter()

  const { isLoaded, isSignedIn, user } = useUser()
  const { userId } = useAuth();

  useEffect(() => {
    const data = async () => {
      setSubmitting(true)
      const response = await fetch('/api/get')

      const dataArray = await response.json()

      setApplys(dataArray)
      setSubmitting(false)
    }

    data()
  }, [])

  const handleEdit = (id) => {
    router.push(`/edit?id=${id}`)
  }


  const handleDelete = async (id) => {
    try {
      await fetch(`/api/action/${id.toString()}`, {method: 'DELETE'})
      const newData = applys.filter((res) => res._id !== id);

      setApplys(newData)
    } catch (error) {
      return new Response(error.message, {status: 500})
    }
  }

  const newData =  applys?.filter(data => data.userId === userId)
  
  return (
    <div className="bg-[#eee]">
      <div className="md:mx-7 mx-0">
        <h2 className="text-center text-2xl pt-7 mb-4 text-stone-600">
          How is your job search ?, Track your job application process.
        </h2>
        <div className="flex justify-center">
          <div>
            <input
              placeholder="Search application"
              className="border-none p-2 outline-none border-slate-800"
            />
            <button className="bg-[#6DED5C] text-white p-2 rounded">
              Search
            </button>
          </div>
        </div>
        <Link href="/create">
          <button className="bg-[#8BD649] text-white p-2 rounded float-right">
            New Apply
          </button>
        </Link>
        {isLoaded && isSignedIn ? 
        <div>
          <Table data={newData} handleDelete={handleDelete} handleEdit={handleEdit} handleSubmit={submitting}/>
        </div> : <div>  <h1>Please Login to continue...</h1></div>}
      </div>
    </div>
  );
}
