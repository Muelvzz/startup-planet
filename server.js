import express from "express"

const PORT = 8000
const app = express()

app.listen(PORT, () => console.log(`Connected to port ${PORT}`))