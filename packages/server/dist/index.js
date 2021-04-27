"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 6465;
app.get("/", function (req, res) {
    res.status(200).send("Hello Battleships");
});
app.listen(port, function () { return console.log("listening on port: " + port); });
