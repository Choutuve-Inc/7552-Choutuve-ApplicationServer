"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

require("./routes/user.routes.js")(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Choutuve, like YouTube." });
});


app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});