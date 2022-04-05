DROP TABLE IF EXISTS grupos;
DROP TABLE IF EXISTS sorteos;
DROP TABLE IF EXISTS selecciones;
DROP TABLE IF EXISTS federaciones;

CREATE TABLE federaciones(
    codigo_federacion varchar(10) NOT NULL,
    acronimo varchar(8) NOT NULL,
    nombre varchar(30) NOT NULL,
    cantidad_selecciones TINYINT NOT NULL,
    fecha_creacion DATE NOT NULL,
    PRIMARY KEY(codigo_federacion)
);

CREATE TABLE selecciones(
    codigo_seleccion varchar(10) NOT NULL,
    cod_federacion varchar(10) NOT NULL,
    nombre varchar(30) NOT NULL,
    ranking_fifa TINYINT,
    fecha_clasificacion DATE,
    img varchar(255) NOT NULL,
    PRIMARY KEY(codigo_seleccion),
    FOREIGN KEY(cod_federacion)
    REFERENCES federaciones (codigo_federacion)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

CREATE TABLE sorteos(
    id INTEGER UNSIGNED AUTO_INCREMENT NOT NULL,
    nombre varchar(30) NOT NULL,
    descripcion TEXT NOT NULL,
    PRIMARY KEY(id)
);


CREATE TABLE grupos(
    id INTEGER UNSIGNED AUTO_INCREMENT NOT NULL,
    cod_seleccion varchar(10) NOT NULL,
    id_sorteo INTEGER UNSIGNED NOT NULL,
    letra SET('A','B','C','D','E','F','G','H','I','J') NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(cod_seleccion)
    REFERENCES selecciones(codigo_seleccion),
    FOREIGN KEY(id_sorteo)
    REFERENCES sorteos(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);