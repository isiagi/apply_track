import jobModel from "@/models/job";
import connectDB from "@/utils/database";

import { getAuth } from "@clerk/nextjs/server";

export const GET = async (req, {params}) => {
  const { userId } = getAuth(req);
  const { searchParams } = new URL(req.url)

  const email = searchParams.get('page')
  const ema = searchParams.get('limit')

  try {
    await connectDB();

    // const { page = 1, limit = 10 } = new URL(req.url, 'http://localhost:3000/').searchParams;
    // const startIndex = (parseInt(page) - 1) * parseInt(limit);

    console.log(email);
    console.log(ema);

    const response = await jobModel.find({userId});

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
