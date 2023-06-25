"use client";

import Form from "@/components/Form";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useAuth } from '@clerk/nextjs'

function Page() {
  const [submitting, setSubmitting] = useState(false);
  const { userId } = useAuth();

  const [data, setData] = useState({
    company: "",
    position: "",
    date: "",
    status: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true)
    try {
      const response = await fetch("/api/create", {
        method: "POST",
        body: JSON.stringify({
          company: data.company,
          position: data.position,
          date: data.date,
          status: data.status,
          userId
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false)
    }
  };

  return (
    <Form data={data} handleChange={handleChange} handleSubmit={handleSubmit} type={"Submit"} loading={submitting} />
  );
}

export default Page;
