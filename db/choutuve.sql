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