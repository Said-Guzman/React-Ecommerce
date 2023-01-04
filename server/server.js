const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
const path = require('path')





app.get("/api", function(req, res) {
  res.json({message : 'it is fully connected'})
})


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
