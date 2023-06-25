import { Schema, model, models } from "mongoose";

const jobSchema = new Schema({
  company: {
    type: String,
    required: [true, "Please provide company name"],
  },
  position: {
    type: String,
    required: [true, "Please provide position"],
  },
  date: {
    type: String,
    required: [true, "Please provide date"],
  },
  userId:{
    type: String,
    required: [true, "Please provide userId"]
  },
  status: {
    type: String,
    required: [true, "Please provide status"],
  },
});

const jobModel = models.Job || model("Job", jobSchema);

export default jobModel;
