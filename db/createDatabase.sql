create database if not exists films;
use films;

create table if not exists Genre(
  ID int auto_increment primary key,
  Name varchar(40) not null
);

create table if not exists Film(
  ID int auto_increment primary key,
  Name varchar(80) not null,
  Director varchar(80) not null,
  IdGenre int not null,
  Description varchar(200) null,
  Type char(1) not null,
  Year char(4) not null,
  Review longtext null,
  Score tinyInt(1) null,
  foreign key(IdGenre) references Genre(ID)
);

create table if not exists Favorites(
  ID int auto_increment primary key,
  IdFild int not null,
  foreign key(IdFild) references Film(ID)
);