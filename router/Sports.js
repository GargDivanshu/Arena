const router = require("express").Router()
const Sports = require("../model/Sports")

router.post("/", async (req, res) => {
  const newSports = new Sports(req.body)
  try {
    const savedSports = await newSports.save()
    res.status(200).json(savedSports)
  } catch (error) {
    res.status(500).json(error)
  }
})


// get all cat
router.get("/", async (req, res) => {
  try {
    const findSports = await Sports.find()
    res.status(200).json(findSports)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get("/:id", async (req, res) => {
    try {
      const findSports = await Sports.findById(req.params.id)
      res.status(200).json(findSports)
    } catch (error) {
      res.status(400).json(error)
    }
  })

module.exports = router