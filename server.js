import express from "express"
import { apiRouter } from "./routes/apiRoutes.js"

const app = express()

app.use("/api", apiRouter)
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found. Please check the API documentation." })
})

app.listen(8000, () => console.log(`Connected to port 8000`))