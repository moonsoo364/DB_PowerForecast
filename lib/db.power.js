var mysql = require('mysql');
var db = mysql.createConnection({
  host:'database-1.co9pinwozv4n.ap-northeast-2.rds.amazonaws.com',
  user:'root',
  password:'abcd1234',
  database:'home_db'
});
db.connect();
module.exports = db;
// db.query(`desc lstm`,function(err,data){
//     if(err){console.log(err)};
//     console.log(data);
// });
