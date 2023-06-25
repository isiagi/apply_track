import jobModel from "@/models/job";
import connectDB from "@/utils/database";

export const GET = async (req, { params }) => {
  const { id } = params;

  try {
    await connectDB();

    const response = await jobModel.find({ _id: id });

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const { company, position, status, date } = await req.json();

  const { id } = params;

  try {
    await connectDB();
    const patch = { company, position, status, date };

    await jobModel.updateOne({ _id: id }, patch);

    return new Response("document successfully updated", { status: 200 });
  } catch (error) {
    return new Response("Error: " + error.message, { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  const { id } = params;

  console.log(id);

  try {
    await connectDB();

    await jobModel.findByIdAndRemove(id);

    return new Response("Item successfully deleted", { status: 200 });
  } catch (error) {
    return new Response("Error: " + error.message, { status: 500 });
  }
};
