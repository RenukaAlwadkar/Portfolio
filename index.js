const express = require('express')
const app = express()
const path=require("path")
const port = 3000

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"))

app.get('/', (req, res) => {
  let siteName = "Addidas"
  let searchText = "Search now"
  res.render("index", {siteName, searchText})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})