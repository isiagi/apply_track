import jobModel from "@/models/job";
import connectDB from "@/utils/database";

import { getAuth } from "@clerk/nextjs/server";

export const GET = async (req, { params }) => {
  const { userId } = getAuth(req);

  console.log(params.query);
  console.log(userId);

  try {
    await connectDB();

    const response = await jobModel.find({
      userId,
      $or: [
        {
          position: { $regex: params.query, $options: "i" },
        },
        {
          status: { $regex: params.query, $options: "i" },
        },
        {
          company: { $regex: params.query, $options: "i" },
        },
        {
          date: { $regex: params.query, $options: "i" },
        },
      ],
    });

    return new Response(JSON.stringify(response), { status: 200 });
    
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
