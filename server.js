import express from "express"
import { startups } from "./data.js"

const PORT = 8000
const app = express()

app.get("/", (req, res) => {
  res.json(startups)
})

app.listen(PORT, () => console.log(`Connected to port ${PORT}`))