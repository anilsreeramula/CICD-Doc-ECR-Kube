const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const movies = [
    { title: "Interstellar", year: 2014, rating: "8.7/10" },
    { title: "Inception", year: 2010, rating: "8.8/10" },
    { title: "The Dark Knight", year: 2008, rating: "9.0/10" },
    { title: "The Matrix", year: 1999, rating: "8.7/10" },
    { title: "Avengers: Endgame", year: 2019, rating: "8.4/10" },
    { title: "The Shawshank Redemption", year: 1994, rating: "9.3/10" },
    { title: "Fight Club", year: 1999, rating: "8.8/10" },
    { title: "Forrest Gump", year: 1994, rating: "8.8/10" },
    { title: "Gladiator", year: 2000, rating: "8.5/10" },
    { title: "The Lord of the Rings: The Return of the King", year: 2003, rating: "9.0/10" }
];

app.get("/", (req, res) => {
    res.render("index", {
        movies
    });
});

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
