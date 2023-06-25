import jobModel from "@/models/job";
import connectDB from "@/utils/database";

export const POST = async (req) => {
  const { company, position, status, date, userId } = await req.json();

  try {
    await connectDB();

    const newApply = new jobModel({
      company,
      position,
      status,
      date,
      userId
    });

    await newApply.save();

    return new Response(JSON.stringify(newApply), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
