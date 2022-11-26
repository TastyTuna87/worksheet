CREATE TABLE IF NOT EXISTS users(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  username VARCHAR(250) NOT NULL,
  password VARCHAR(250) NOT NULL,
  role VARCHAR(250) NOT NULL
);
INSERT INTO users (USERNAME, PASSWORD, ROLE) VALUES
( 'admin', '1234', 'ADMIN');

CREATE TABLE IF NOT EXISTS worksheet (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    type_name VARCHAR(250) NOT NULL,
    color VARCHAR(250) NOT NULL,
    slice_width VARCHAR(250) NOT NULL,
    width VARCHAR(250) NOT NULL,
    thickness VARCHAR(250) NOT NULL,
    gem VARCHAR(250) NOT NULL,
    gem_number VARCHAR(250) NOT NULL
);



INSERT INTO worksheet (type_name, color, slice_width, width, thickness,
    gem, gem_number) VALUES
 ('Type01', 'yellow', '0', '4', '1.2', '0', '0');
 INSERT INTO worksheet (type_name, color, slice_width, width, thickness,
     gem, gem_number) VALUES
  ('MC648', 'YW', '3.85/2.85', '6', '1.3', 'Flush set', '3');
