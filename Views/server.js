const express = require("express");
const app = express();

// EJS käyttöön
app.set("view engine", "ejs");

// lomakedatan käsittely
app.use(express.urlencoded({ extended: true }));

// etusivu -> ohjaa palautesivulle
app.get("/", (req, res) => {
    res.redirect("/palaute");
});

// GET /palaute -> näyttää lomakkeen
app.get("/palaute", (req, res) => {
    res.render("palaute");
});

// POST /palaute -> käsittelee lomakkeen
app.post("/palaute", (req, res) => {

    const nimi = req.body.nimi;
    const sahkoposti = req.body.sahkoposti;

    res.send(`Kiitos palautteestasi, ${nimi}! Otamme sinuun tarvittaessa yhteyttä sähköpostitse osoitteeseen ${sahkoposti}.`);
});

// palvelin käyntiin
app.listen(3000, () => {
    console.log("Server käynnissä: http://localhost:3000");
});