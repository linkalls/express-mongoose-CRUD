import mongoose from "mongoose"
import { Schema } from "mongoose"

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true
  },
})

export const Todo = mongoose.model("Todo", todoSchema)
