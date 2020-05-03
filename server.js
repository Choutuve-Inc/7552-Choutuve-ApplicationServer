/*jshint esversion: 6 */

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/user.routes.js")(app);
require("./routes/profile.routes.js")(app);
require("./routes/vote.routes.js")(app);

app.get("/", (req, res) => {
    res.json({ message: "Choutuve, like YouTube." });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});