import jobModel from "@/models/job";
import connectDB from "@/utils/database";

import { getAuth } from "@clerk/nextjs/server";

export const GET = async (req, res) => {
  const { userId } = getAuth(req);

  try {
    await connectDB();

    const response = await jobModel.find({userId});

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
