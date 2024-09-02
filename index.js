import express, { urlencoded } from "express"
import mongoose from "mongoose"
import { Todo } from "./models/todo.js"
const app = express()

mongoose
  .connect("mongodb://localhost:27017/express-mongoose-CRUD")
  .then(() => {
    console.log("mongodbに接続成功")
  })
  .catch((err) => {
    console.log("mongodbに接続失敗", err)
  })

app.set("view engine", "ejs")
app.set("views", "./views")
app.use(urlencoded())

app.get("/", (req, res) => {
  res.render("index")
})

app.post("/new", async (req, res) => {
  // const newTodo = new Todo({
  //   title: req.body.title,
  //   body: req.body.body
  // })
  // await newTodo.save()
  try {
    await Todo.create({
      title: req.body.title,
      body: req.body.body,
      date: new Date().toLocaleString({ timeZone: "Asia/Tokyo" }),
    })
    res.redirect("/all")
  } catch (e) {
    res.status(402).json(e)
  }
})

app.get("/all", async (req, res) => {
  const allTodo = await Todo.find({}) //* 全取得
  res.json(allTodo)
})

app.listen(3000, () => {
  console.log("Listening on port 3000")
})
