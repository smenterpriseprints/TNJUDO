var clientapp = require('clientapp');
var app=clientapp();

app.get('/',function(req,res){
    debugger;
    res.sendFile(__dirname+'/indix.html');
});

app.listen(3000,function(){
    console.log('Example app listening on port 3000!');
})