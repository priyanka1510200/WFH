const express = require("express");
const path = require("path");
const handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const {
    allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const bodyparser = require("body-parser");


var app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.get("/",(req,res) => {
    res.send(`
    <h2> Welcome to students Database!!</h2>
    <h3>click here to get access to the <b> <a href="/student/list">Database</a></b></h3>

    `)
});

app.set('views',path.join(__dirname, '/views/'))

app.engine(
    "hbs",
    exphbs({
        handlebars: allowInsecurePrototypeAccess(handlebars),
        extname: "hbs",
        defaultLayout: "MainLayout",
        layoutDir: __dirname + "/views/layouts/",
    })
);

app.set("view engine","hbs");

app.listen(3000,() =>{
    console.log("server start at port 3000")
})