const sql = require("./db.js");

const Profile = function(profile) {
    this.photo = profile.photo;
    // this.friends = profile.friends;
};

// TODO

module.exports = Profile;