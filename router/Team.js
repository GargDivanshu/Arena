const router = require("express").Router()
const Team = require("../model/Team")

router.post("/", async (req, res) => {
  const newTeam = new Team(req.body)
  try {
    const savedTeam = await newTeam.save()
    res.status(200).json(savedTeam)
  } catch (error) {
    res.status(500).json(error)
  }
})


// get all cat
router.get("/", async (req, res) => {
  try {
    const findTeam = await Team.find()
    res.status(200).json(findTeam)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get("/:id", async (req, res) => {
  try {
    const findTeam = await Team.findById(req.params.id)
    res.status(200).json(findTeam)
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router