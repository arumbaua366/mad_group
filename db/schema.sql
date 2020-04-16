DROP DATABASE IF EXISTS userinfo_db;

CREATE DATABASE userinfo_db;
USE userinfo_db;

DROP DATABASE if exists user;
DROP DATABASE if exists trips;


CREATE TABLE user
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	email VARCHAR(255) NOT NULL,
	PRIMARY KEY (id) 
);

CREATE TABLE trips
(
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(255) NOT NULL,
	destination_city VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);
