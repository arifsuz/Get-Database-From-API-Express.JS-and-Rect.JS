const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

app.use(cors());

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "api",
})

database.connect((err) => {
    if (err) throw err;
    console.log("Database Connected!")
})

app.get("/api/users",(req,res) => {
    console.log("GET API USERS DI REQUEST")
    database.query("SELECT * FROM users", (err,rows) => {
        if (err) throw err;
        res.json({
            success: true,
            message: "Getting Users Data!",
            data: rows,
        })
    })
})

app.listen(3030,() => {
    console.log("Server is running on port 3030");
})