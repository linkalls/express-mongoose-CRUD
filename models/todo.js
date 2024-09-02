import mongoose from "mongoose"
import { Schema } from "mongoose"

const todoSchema = new Schema({
  title: {
    type: String,
    required: [true, 'title は必須です。'],
  },
  body: {
    type: String,
    required: [true,"内容は必要です"],
  },
  date: {
    type: Date,
    required: true
  },
})

export const Todo = mongoose.model("Todo", todoSchema)
