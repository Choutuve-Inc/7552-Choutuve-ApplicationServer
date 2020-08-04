/*jshint esversion: 6 */

const PORT = process.env.PORT || 3000;
const express = require("express");
const bodyParser = require("body-parser");
const logger = require('pino')()

const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/comment.routes.js")(app);
require("./routes/video.routes.js")(app);
require("./routes/user.routes.js")(app);
require("./routes/notification.routes.js")(app);
require("./routes/friendship.routes.js")(app);


app.get("/", (req, res) => {
    logger.info('Endpoint / requested')
    res.json({ message: "Choutuve, like YouTube :)" });
});

const server = app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}.`)
});

module.exports = server;