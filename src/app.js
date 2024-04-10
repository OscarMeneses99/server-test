import express from "express";

const app = express();

const movies = [
  {
    titulo: "Avengers: Endgame",
    anio_estreno: 2019,
    recaudacion_mundial: "$2,798,000,000",
    genero: ["Acción", "Aventura", "Ciencia ficción"],
  },
  {
    titulo: "Avatar",
    anio_estreno: 2009,
    recaudacion_mundial: "$2,790,439,000",
    genero: ["Acción", "Aventura", "Fantasía", "Ciencia ficción"],
  },
  {
    titulo: "Titanic",
    anio_estreno: 1997,
    recaudacion_mundial: "$2,195,170,000",
    genero: ["Drama", "Romance"],
  },
  {
    titulo: "Star Wars: El despertar de la fuerza",
    anio_estreno: 2015,
    recaudacion_mundial: "$2,068,223,624",
    genero: ["Acción", "Aventura", "Ciencia ficción", "Fantasía"],
  },
  {
    titulo: "Avengers: Infinity War",
    anio_estreno: 2018,
    recaudacion_mundial: "$2,048,359,754",
    genero: ["Acción", "Aventura", "Ciencia ficción"],
  },
  {
    titulo: "Jurassic World",
    anio_estreno: 2015,
    recaudacion_mundial: "$1,670,400,637",
    genero: ["Acción", "Aventura", "Ciencia ficción", "Thriller"],
  },
  {
    titulo: "El Rey León",
    anio_estreno: 2019,
    recaudacion_mundial: "$1,656,943,394",
    genero: ["Animación", "Aventura", "Drama", "Familiar", "Musical"],
  },
  {
    titulo: "Los Vengadores",
    anio_estreno: 2012,
    recaudacion_mundial: "$1,518,812,988",
    genero: ["Acción", "Aventura", "Ciencia ficción"],
  },
  {
    titulo: "Fast & Furious 7",
    anio_estreno: 2015,
    recaudacion_mundial: "$1,515,100,000",
    genero: ["Acción", "Aventura", "Crimen", "Thriller"],
  },
  {
    titulo: "Frozen II",
    anio_estreno: 2019,
    recaudacion_mundial: "$1,450,026,933",
    genero: [
      "Animación",
      "Aventura",
      "Comedia",
      "Familiar",
      "Fantasía",
      "Musical",
    ],
  },
  {
    titulo: "Spiderman",
    anio_estreno: 2000,
    recaudacion_mundial: "$2,000,000,000",
    genero: ["Accion"],
  },
];

app.get("/api/peliculas", (req, res) => {
  res.status(200).json(movies);
});

export default app;
