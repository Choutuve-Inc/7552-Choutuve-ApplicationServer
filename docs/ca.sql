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

CREATE TABLE friendlist (               
    idUserA varchar(300) NOT NULL,              
    idUserB varchar(300) NOT NULL
);    

CREATE TABLE requested (               
    idUserA varchar(300) NOT NULL,           
    idUserB varchar(300) NOT NULL
);  

CREATE TABLE devices (               
    idUser varchar(300) NOT NULL,             
    device varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;    

 CREATE TABLE IF NOT EXISTS `customers` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  active BOOLEAN DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




INSERT INTO friendlist (idUserA, idUserB)
VALUES (1,2);