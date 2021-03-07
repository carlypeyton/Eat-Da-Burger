-- Create Burger Database
DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

-- Create Burgers Table
CREATE TABLE burgers (
  id INTEGER NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);