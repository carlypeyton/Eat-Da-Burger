//Dependencies
const express = require("express");
const exphbs = require('express-handlebars');

//PORT and Express
const app = express();
const PORT = process.env.PORT || 3000;

//Set Routes and Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static directory
app.use(express.static("public"));

//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

//Listen on Server
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});