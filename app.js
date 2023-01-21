const express = require('express')
const app = express()
const port = process.env.PORT || 3000;


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql8.freemysqlhosting.net",
  user: "sql8592135",
  password: "yqLrSE3zLc",
  database: "sql8592135"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM user", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('RAS HOME PAGE')
})









app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})