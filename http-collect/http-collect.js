var http = require('http');
var bl = require('bl');

//Generate an HTTP request to the first CLI argument
//Callback function is invoked
var response = http.get(process.argv[2], function(response){
        //Pipe the resonse into a Buffer List
        //Buffer List only invokes the call back function once all the data is received
        response.pipe(bl(function(err, data){
            var dataString = data.toString();
            console.log(dataString.length);
            console.log(dataString);
        }));
        response.on("error", function(data){
            return console.error(data);
        });
    });