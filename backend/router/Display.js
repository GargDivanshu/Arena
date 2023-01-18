const router = require("express").Router()
const Display = require("../model/Display")

router.post("/", async (req, res) => {
  const newDisplay = new Display(req.body)
  try {
    const savedDisplay = await newDisplay.save()
    res.status(200).json(savedDisplay)
  } catch (error) {
    res.status(500).json(error)
  }
})


// get all cat
router.get("/", async (req, res) => {
  try {
    const findDisplay = await Display.find()
    res.status(200).json(findDisplay)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router