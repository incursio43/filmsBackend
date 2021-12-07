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

insert into genre (Name) values ('Todos');
insert into genre (Name) values ('Terror');
insert into genre (Name) values ('Accion');
insert into genre (Name) values ('Fantasia');
insert into genre (Name) values ('Ciencia Ficcion');

select * from genre;

insert into film (Name, Director, IdGenre, Description, Type, Year, Review, Score) values 
('Maligno', 'James Wan', 1, 'Madison está paralizada por visiones de asesinatos espeluznantes, y su tormento empeora cuando descubre que estos sueños de vigilia son, de hecho, realidades aterradoras.',
'2','2021','James Wan es probablemente el mejor director de terror que tenemos actualmente en activo. Sus incursiones en este género han sido elucubradas como grandes películas que han creado tendencia (y largas sagas), y cuando no ha hecho terror ha demostrado a la perfección que sabe grabar mejor que muchos otros. Su última gran apuesta por el terror, la película Maligno (2021), llegaba acompañada de una gran promoción con terroríficos trailers que prometían una cinta que nos iba a asustar tanto o más que Expediente Warren… pero lo que hemos visto en las pantallas ha sido diferente. Diferente y decepcionante si realmente hemos venido a ver una película aterradora. Pero Wan ha ido más allá.',8);
insert into film (Name, Director, IdGenre, Description, Type, Year, Review, Score) values 
('Venom Carnage liberado', 'Andy Serkis', 2, 'Después de encontrar un cuerpo anfitrión en el periodista de investigación Eddie Brock, el simbionte alienígena debe enfrentarse a un nuevo enemigo, Carnage.',
'2','2021','Venom: Carnage liberado está fuera de los rieles de cualquier película de cómics que hayas visto antes (…) Si te gustan los personajes turbios, deformes y magníficamente trastornados, la secuela de Venom es para ti.',4);

insert into film (Name, Director, IdGenre, Description, Type, Year, Review, Score) values 
('Duna', 'Denis Villeneuve', 4, 'Arrakis, también denominado "Dune", se ha convertido en el planeta más importante del universo. A su alrededor comienza una gigantesca lucha por el poder que culmina en una guerra interestelar.',
'2','2021','Its a larger than life film, and though it easily could have rested on spectacle, it manages to have substance in its detailing of tyranny, rebellion, and respecting ones culture.',8);

insert into film ( ID, Name ) values ( 4, "Violet Evergarden", "Kana Akatsuki", 4, "La historia se centra alrededor de las llamadas Auto Memory Dolls; muñecas inicialmente creadas por un científico para asistir a su esposa ciega a escribir sus novelas y, luego.", "8", "2020", "Por su impecable animación. El trabajo de Kyoto Animation es impecable. Su gran calidad en franquicias como K-ON!, Free! y Kobayashi-san Chi no Maid Dragon quedan patentes en Evergarden, con una calidad de animación que no desciende en sus 13 episodios. Estupenda, la dirección de Taichi Ishidate.", 9);
insert into film ( ID, Name ) values ( 3, "Jujutsu Kaisen", "Gege Akutami", 3, "Yuuji Itadori es un estudiante de instituto con unas habilidades físicas excepcionales. Todos los días, como rutina, va al hospital a visitar a su abuelo enfermo y decide...", "8", "2021", "Jujutsu Kaisen combina a la perfección elementos clásicos del shonen con los más nuevos del género. Su historia, introducción al mundo y el desarrollo de personajes te hará querer saber más sobre las maldiciones, monstruos y hechiceros en estas contiendas de brujería. ¡Es una obra increíble que va en ascenso!", 9);
insert into film ( ID, Name ) values ( 4, "The Witcher", "Lauren Schmidt Hissrich", 4, "Geralt de Rivia, el legendario brujo cazador de monstruos, gravita inexorablemente hacia su destino en un mondo de tormentos y humanas traiciones", "4", "2019", "Nuestra crítica está clara: The Witcher es una serie mala (o muy mala) si la ves como un drama fantástico intenso, serio y con algo que aportar a la historia de la televisión. The Witcher es una serie buena (muy buena va a ser que no) si la ves como un artefacto mágico de entretenimiento juvenil.", 8);
insert into film ( ID, Name ) values ( 0, "Its Okay to Not Be Okay", "Park Shin-woo", 6, "Un autor antisocial y un empleado de una institución psiquiátrica transitan un camino de sanación.", "4", "2020", "Esta es una representación de un cuento infantil de la escritora ficticia Ko Moon-young (Seo Ye Ji), en el que una niña solitaria intenta hacer amigos pero un monstruo que tiene la sombra de la muerte asusta a todo aquel que se le acerque, lo que provoca que se llene de rencor y desee lastimar a otros.", 9);
insert into film ( ID, Name ) values ( 0, "Mi maestro el pulpo", "Craig Foster", 7, "Un cineasta entabla una peculiar amistad con un pulpo que habita en un bosque de algas marinas y les enseña los misterios de su mundo subacuático", "6", "2020", "Mi maestro el pulpo (My Octopus Teacher), el documental de Netflix, es un canto a la vida acuática y una invitación a poder conectar desde un lugar sensible con el mundo animal, pero por sobre todas las cosas, a reconocer y entender cuál es nuestro lugar en el planeta.", 9);
insert into film ( ID, Name ) values ( 0, "El dilema de las redes sociales", "Jeff Orlowski", 7, "Expertos en tecnología de Silicon Valley hacen sonar la alarma sobre el peligroso impacto de las redes sociales, que Big Tech utiliza en un intento de manipular e influir.", "6", "2020", "El dilema de las redes sociales (2020), de Jeff Orlowski, es un documental que está disponible en Netflix y que fue producido para esa plataforma. Trata de manera entretenida un asunto pertinente y de actualidad: los riesgos psicológicos y políticos de redes como Facebook, Twitter e Instagram.", 8);
select * from film;

insert into favorites (IdFild) values (2);

select * from favorites;