Create DATABASE hw1;
USE hw1;
CREATE TABLE users (
    id integer primary key auto_increment,
    username varchar(16) not null unique,
    password varchar(255) not null,
    email varchar(255) not null unique,
    name varchar(255) not null,
    surname varchar(255) not null,
    propic varchar(255)
) Engine = InnoDB;

CREATE TABLE citta (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) UNIQUE
);

CREATE TABLE attrazioni (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user integer not null,
  citta_id INT not null,
  content json,
  index idx_c (citta_id),
  foreign key (citta_id) references citta(id),
  index idx_q (user),
  foreign key (user) references users(id)
);

CREATE TABLE hotel(
  id INT AUTO_INCREMENT PRIMARY KEY,
  user integer not null,
  citta_id INT not null,
  partenza DATE not null,
  content json,
  foreign key (citta_id) references citta(id),
  index idx_q (user),
  foreign key (user) references users(id)
  
);

CREATE TABLE voli(
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id integer not null,
  citta_destinazione INT not null,
  data_partenza DATE not null,
  content json,
  index idx_b (citta_destinazione),
  foreign key (citta_destinazione) references citta(id),
   index idx_x (user_id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE viaggi (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    citta_id INT NOT NULL,
    data_di_partenza DATE NOT NULL,
    hotel_id INT,
    volo_id INT,
    index idx_p (user_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    index idx_l(citta_id),
    FOREIGN KEY (citta_id) REFERENCES citta(id),
	index idx_t(hotel_id),
    FOREIGN KEY (hotel_id) REFERENCES hotel(id),
    index idx_z(volo_id),
    FOREIGN KEY (volo_id) REFERENCES voli(id)
    
    
);