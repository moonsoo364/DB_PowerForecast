var mysql = require('mysql');
var db = mysql.createConnection({
  host:'database-1.co9pinwozv4n.ap-northeast-2.rds.amazonaws.com',
  user:'root',
  password:'abcd1234',
  database:'home_db'
});
db.connect();
module.exports = db;


// db.query(`insert into header (name) value (?)`,'hello world!');
//  db.query(`delete from header where name=?`,'good bye!');
// db.query(`update header set name=? where name=?`,['good bye!','hello world!']);
// db.query(`select count (*) from header`,function(err,count){
//     if(err){console.log(err);}
//     console.log(count);
// })
// db.query(`select * from header`,function(err,name){
//     if (err){
//         console.log(err);
//     }
//     console.log(name);
// })



