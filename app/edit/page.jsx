"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@/components/Form";

function page() {
  const [data, setData] = useState({
    company: "",
    position: "",
    date: "",
    status: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const searchParams = useSearchParams();

  const search = searchParams.get("id");

  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(`/api/action/${search}`, {
        method: "PATCH",
        body: JSON.stringify({
          company: data.company,
          position: data.position,
          date: data.date,
          status: data.status,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const data = async () => {
      const response = await fetch(`/api/action/${search}`);

      const dataArray = await response.json();

      setData(dataArray[0]);
    };

    data();
  }, []);
  return (
    <Form
      data={data}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      type={"Edit"}
      loading={submitting}
    />
  );
}

export default page;
