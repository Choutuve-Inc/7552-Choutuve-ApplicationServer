const sql = require("./db.js");

const Vote = function(vote) {
    this.value = vote.value;
    this.userId = vote.userId;
};

// TODO

module.exports = Vote;