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


use films;

insert into genre (Name) values ('Terror');
insert into genre (Name) values ('Accion');
insert into genre (Name) values ('Fantasia');
insert into genre (Name) values ('Ciencia Ficcion');

select * from genre;

insert into film (Name, Director, IdGenre, Description, Type, Year, Review, Score) values 
('Maligno', 'James Wan', 1, 'Madison está paralizada por visiones de asesinatos espeluznantes, y su tormento empeora cuando descubre que estos sueños de vigilia son, de hecho, realidades aterradoras.',
'1','2021','James Wan es probablemente el mejor director de terror que tenemos actualmente en activo. Sus incursiones en este género han sido elucubradas como grandes películas que han creado tendencia (y largas sagas), y cuando no ha hecho terror ha demostrado a la perfección que sabe grabar mejor que muchos otros. Su última gran apuesta por el terror, la película Maligno (2021), llegaba acompañada de una gran promoción con terroríficos trailers que prometían una cinta que nos iba a asustar tanto o más que Expediente Warren… pero lo que hemos visto en las pantallas ha sido diferente. Diferente y decepcionante si realmente hemos venido a ver una película aterradora. Pero Wan ha ido más allá.',8);
insert into film (Name, Director, IdGenre, Description, Type, Year, Review, Score) values 
('Venom Carnage liberado', 'Andy Serkis', 2, 'Después de encontrar un cuerpo anfitrión en el periodista de investigación Eddie Brock, el simbionte alienígena debe enfrentarse a un nuevo enemigo, Carnage.',
'1','2021','Venom: Carnage liberado está fuera de los rieles de cualquier película de cómics que hayas visto antes (…) Si te gustan los personajes turbios, deformes y magníficamente trastornados, la secuela de Venom es para ti.',4);

insert into film (Name, Director, IdGenre, Description, Type, Year, Review, Score) values 
('Duna', 'Denis Villeneuve', 4, 'Arrakis, también denominado "Dune", se ha convertido en el planeta más importante del universo. A su alrededor comienza una gigantesca lucha por el poder que culmina en una guerra interestelar.',
'1','2021','Its a larger than life film, and though it easily could have rested on spectacle, it manages to have substance in its detailing of tyranny, rebellion, and respecting ones culture.',8);

select * from film;

insert into favorites (IdFild) values (2);

select * from favorites;