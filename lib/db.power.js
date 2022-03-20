var mysql = require('mysql');
var db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'1234',
  database:'powerforecast'
});
db.connect();
module.exports = db;
// db.query(`desc lstm`,function(err,data){
//     if(err){console.log(err)};
//     console.log(data);
// });
