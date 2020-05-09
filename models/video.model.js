// const sql = require("./db.js");

const Video = function(video) {
    this.date = video.date,
    this.size = video.size,
    this.thumbnail = video.thumbnail,
    this.title = video.title,
    this.url = video.url,
    this.user = video.user
};

// TODO

module.exports = Video;