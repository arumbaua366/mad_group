DROP DATABASE IF EXISTS userinfo_db;

CREATE DATABASE userinfo_db;
USE userinfo_db;

DROP DATABASE if exists user;
DROP DATABASE if exists trips;
<<<<<<< HEAD
DROP DATABASE if exists flights;
DROP DATABASE if exists hotel;
DRop DATABASE if exists activities;
=======
>>>>>>> andrea


CREATE TABLE users
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
<<<<<<< HEAD
	destination_state VARCHAR(255) NOT NULL,
	arrival_date VARCHAR(255) NOT NULL,
	departure_date VARCHAR(255) NOT NULL,
	
	PRIMARY KEY (id)
);

CREATE TABLE flights
(
	id INT NOT NULL AUTO_INCREMENT,
	price DECIMAL (10, 2),
	airline VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE activities
(
	id INT NOT NULL AUTO_INCREMENT,
	categories VARCHAR(255) NOT NULL,
	businesses VARCHAR(255) NOT Null,
	events VARCHAR(255) NOT NULL
	PRIMARY KEY(id)


);
=======
	PRIMARY KEY (id)
);
>>>>>>> andrea
