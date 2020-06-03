CREATE TABLE IF NOT EXISTS `user` (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email varchar(100) NOT NULL,
  name varchar(150) NOT NULL
);

CREATE TABLE IF NOT EXISTS `comment` (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  userId int NOT NULL,
  videoId int NOT NULL,
  date datetime NOT NULL,
  message varchar(500) NOT NULL
);