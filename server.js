import express from "express"
import { startups } from "./data.js"

const PORT = 8000
const app = express()

app.get("/api", (req, res) => {
  const { 
    industry, 
    country, 
    continent, 
    is_seeking_funding, 
    has_mvp 
  } = req.query

  let filteredData = startups

  if (industry) {
    filteredData = filteredData.filter((data) => data.industry.toLowerCase() === industry.toLowerCase())
  }

  if (country) {
    filteredData = filteredData.filter((data) => data.country.toLowerCase() === country.toLowerCase())
  }

  if (continent) {
    filteredData = filteredData.filter((data) => data.continent.toLowerCase() === continent.toLowerCase())
  }

  if (is_seeking_funding !== undefined) {
    const isSeeking = is_seeking_funding === "true"
    filteredData = filteredData.filter((data) => data.is_seeking_funding === isSeeking)
  }

  if (has_mvp !== undefined) {
    const hasMvp = has_mvp === "true"
    filteredData = filteredData.filter((data) => data.has_mvp === hasMvp)
  }

  res.json(filteredData)
})

app.get("/api/:field/:term", (req, res) => {
  let filteredData = startups
  const { field, term } = req.params

  filteredData = filteredData.filter(
    (data) => data[field].toLowerCase() === term.toLowerCase()
  )

  res.json(filteredData)
})

app.listen(PORT, () => console.log(`Connected to port ${PORT}`))