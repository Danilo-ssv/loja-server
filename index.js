const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

const router = require("./routes/router.js")

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use("/", router)

mongoose.connect("mongodb://localhost:27017/loja", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
})
.then(connection => {console.log("Successful connection!")})
.catch(err => {console.log(err)})

const PORT = 5000
app.listen(PORT, err => {
	if(!err){console.log("Running")}
	else{console.log(err)}
})