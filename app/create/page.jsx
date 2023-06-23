"use client";

import Form from "@/components/Form";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Page() {
  const [submitting, setSubmitting] = useState(false);

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

    try {
      const response = await fetch("/api/create", {
        method: "POST",
        body: JSON.stringify({
          company: data.company,
          position: data.position,
          date: data.date,
          status: data.status,
        }),
      });

      if (response.ok) {
        alert('good')
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form data={data} handleChange={handleChange} handleSubmit={handleSubmit} />
  );
}

export default Page;
