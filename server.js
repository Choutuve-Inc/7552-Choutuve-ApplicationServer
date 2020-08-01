/*jshint esversion: 6 */

const PORT = process.env.PORT || 3000;

const express = require("express");
const bodyParser = require("body-parser");

const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// require("./routes/user.routes.js")(app);
require("./routes/profile.routes.js")(app);
// require("./routes/vote.routes.js")(app);
// require("./routes/comment.routes.js")(app);
require("./routes/video.routes.js")(app);
require("./routes/user.routes.js")(app);
require("./routes/notification.routes.js")(app);

app.get("/", (req, res) => {
    res.json({ message: "Choutuve, like YouTube." });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
