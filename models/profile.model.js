const sql = require("./db.js");

const Profile = function(profile) {
    this.photo = profile.photo;
    // this.friends = profile.friends;
};

Profile.create = (userId, deviceId) => {
    const result = sql.query("INSERT INTO devices (idUser, device) VALUES (\"" + userId + "\" , \"" + deviceId + "\");");
    console.log("CREATE:", result)
    return true
};

module.exports = Profile;