import jobModel from "@/models/job";
import connectDB from "@/utils/database";

export const GET = async (req, res) => {
  try {
    await connectDB();

    const response = await jobModel.find({});

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
