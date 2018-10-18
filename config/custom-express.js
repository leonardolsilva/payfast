const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");

module.exports = () => {
    const app = express();
    app.use(bodyParser.urlencoded({extended : true}));
    app.use(bodyParser.json());
    consign()
        .include("controllers")
        .then("dao")
        .into(app);

    return app;
};