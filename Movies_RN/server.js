const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get("/Suggestions", (req, res) => {
  console.log("got a request");
  //when there is a request- do the callback function
  // Read users.json file
  fs.readFile("movieSuggestions.json", function (err, data) {
    // read from the local file which is the current database
    // Check for errors
    if (err) throw err;
    // Converting to JSON
    const products = JSON.parse(data);
    res.send(products);
    //what is really sent to the client
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
