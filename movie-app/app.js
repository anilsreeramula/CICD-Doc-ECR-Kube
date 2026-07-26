const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const movies = [
    {
        title: "Interstellar",
        year: 2014,
        rating: "8.7/10"
    },
    {
        title: "Inception",
        year: 2010,
        rating: "8.8/10"
    },
    {
        title: "The Dark Knight",
        year: 2008,
        rating: "9.0/10"
    }
];

app.get("/", (req, res) => {

    const movie = movies[Math.floor(Math.random() * movies.length)];

    res.render("index", {
        movie
    });

});

app.listen(3000, () => {
    console.log("Server started");
});
