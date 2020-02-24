var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    port: "3307",
    user: "root",
    password: "root"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE sch_mngr", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});