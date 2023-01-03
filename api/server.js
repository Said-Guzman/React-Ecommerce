const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
const path = require('path')





app.get("/", function(req, res) {
  res.sendFile(path.normalize(__dirname + "/produce.json"))
})

app.listen(3001, () => {
  console.log("app listening on port 3001")
})