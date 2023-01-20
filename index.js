const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const teamRoute = require("./router/Team")
const sportsRoute = require("./router/Sports")
const displayRoute = require("./router/Display")

const path = require("path")
const multer = require("multer")

dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")))


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}).then(console.log("CONNECTED TO MONGODB"))
.catch((e)=> console.log(e));


const storage = multer.diskStorage({
    destination: (req, file, callb) => {
      callb(null, "images")
    },
    filename: (req, file, callb) => {
      //callb(null, "file.png")
      callb(null, req.body.name)
    },
  })
  const upload = multer({ storage: storage })
  app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded")
  })



// app.use("/auth", authRoute);
// app.use("/users", authUser);
// app.use("/posts", authPosts);
app.use("/team", teamRoute);
app.use("/sports", sportsRoute);
app.use("/display", displayRoute);


app.listen("5000", ()=>{
    console.log("backend started");
})