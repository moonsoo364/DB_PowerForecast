const express = require('express');
const db=require('./lib/db.power');
const topic = require('./lib/topic');
const app=express();
let array=[];
app.use(express.json())
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
   
  topic.header(req,res); 
 
});

app.listen(3040,(err)=>{
  if(err) return conwole.log(err);
  console.log("node.js server is running on port 3040...");
});

app.post('/cnn',function(req,res){
  
  db.query(`select * from cnn where report_date like ?`,'2016-01%',function(err,rows){
    if(err)console.log(err);

  for(var i=0;i<rows.length;i++){
    // const row_time=new Date(rows[i].report_date);
    // const utc=row_time.getTime()+(row_time.getTimezoneOffset()*60*1000);
    // const kr_diff=9*60*60*1000;
    // const kr_time=new Date(utc+kr_diff);
    // console.log(kr_time);
   

    
     array.push([i,rows[i].report_date,rows[i].predict_value,rows[i].real_value]);
    
  }
 
 
  console.log('typeof(array[0][0]) : '+typeof(array[0][0]));
  console.log('typeof(array[0][1]) : '+typeof(array[0][1]));
  console.log('typeof(array[0][2]) : '+typeof(array[0][2]));
  console.log('typeof(array[0][3]) : '+typeof(array[0][3]));
  console.table(array);
  res.send(array);
   
  })
 
 
})

app.get('/btn', (req, res)=>{
  
  res.sendFile(__dirname + '/btn.js');
})
  



          
            
            




