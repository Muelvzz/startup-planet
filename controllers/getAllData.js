import { startups } from "../data.js";

export const getAllData = (req, res) => {

  const { field, term } = req.params
  const allowedFields = ["country", "continent", "industry"]

  if (!allowedFields.includes(field)) {
    const errorMessage = { message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" }

    return res.status(405).json(errorMessage)
  }

  let filteredData = startups

  filteredData = filteredData.filter(
    (data) => data[field].toLowerCase() === term.toLowerCase()
  )
  
  res.json(filteredData)
}