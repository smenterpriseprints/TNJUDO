var clientapp = require('clientapp');
var app=clientapp();

app.get('/',function(req,res){
    debugger;
    res.sendFile(__dirname+'/indix.html');
});

app.listen(3000,function(){
    console.log('Example app listening on port 3000!');
})
app.run(function($rootScope, $location){
    $rootScope.$on('$routeChangeStart', function(event, next, current){
      if ($location.path() == './tournament-index') {
        $rootScope.hideit = true;
      };
    });
  });