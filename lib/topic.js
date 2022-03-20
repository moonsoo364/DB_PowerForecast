var db=require('./db.power');
var template=require(`./template`);
exports.header =function(req,res){
    db.query(`select * from header`,function(err,title){
        if(err){
            console.log(err);
        }
        
        db.query(`select * from list`,function(err,slide){
            // console.log(slide);
            // console.log(title);
            if(err){
                console.log(err);
            }
            var list=template.list(title,slide);
            var html=template.html(list);
            res.send(html);

        })
      
    })
}
