module.exports = function(app){
    app.get("/",(req,res)=>{
        res.render("index.html");
    });
    app.get("/index",(req,res)=>{
        res.render("index.html");
    });
    
   app.post("/",(req,res)=>{
    res.send({'Name':req.body.name},{'Email':req.body.email},{'Comments':req.body.message});
   });
    
}
