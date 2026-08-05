import express from "express"

const PORT = 8000
const app = express()

const celebrity = {
  type: "action hero",
  name: "JSON Statham"
}

app.get("/", (req, res) => {
  res.json(celebrity)
})

app.listen(PORT, () => console.log(`Connected to port ${PORT}`))