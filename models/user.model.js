const User = function(video) {
    this.user = video.user,
    this.title = video.title,
    this.description = video.description,
    this.date = video.date,
    this.url = video.url,
    this.thumbnail = video.thumbnail,
    this.size = video.size
};

module.exports = User;