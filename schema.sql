DROP DATABASE IF EXISTS great_baydb;
CREATE DATABASE IF NOT EXISTS great_baydb;

USE great_baydb;

CREATE TABLE IF NOT EXISTS user_id (
	userID INT AUTO_INCREMENT 
    , userName VARCHAR(50) NOT NULL
    , userPass VARCHAR(50) NOT NULL
    , PRIMARY KEY (userID)
);

CREATE TABLE IF NOT EXISTS bid_item (
	itemID INT AUTO_INCREMENT
    , linkedUser INT NULL
    , price DECIMAL(10,2) NOT NULL
    , itemName VARCHAR(40) NOT NULL
    , itemDesc VARCHAR(100) NULL
    , PRIMARY KEY (itemID)
);

CREATE TABLE IF NOT EXISTS current_bid (
	bidID INT AUTO_INCREMENT
    , linkedUser INT NULL
    , linkedItem INT NULL
	, userBid INT NOT NULL
    , PRIMARY KEY (bidID)
);

INSERT INTO user_id (userName, userPass)
VALUE ("Shawn", "password");

INSERT INTO bid_item ( linkedUser, price, itemName, itemDesc )
VALUE ( 1, 420, "Dorito", "A singular Dorito");

INSERT INTO current_bid (linkedUser, linkedItem, userBid)
VALUE (1, 1, 450);

SELECT * FROM user_id;
SELECT * FROM bid_item;
SELECT * FROM current_bid;