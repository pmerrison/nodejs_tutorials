var http = require('http');
var bl = require('bl');

var responses = ['a', 'b', 'c'];

//This function accepts a URL and a sequence ID.
//The sequence ID is required so that we print them in the right order
//and therefore pass the test.
function getHTTPAsString(url, sequenceID, callback){
       var response = http.get(url, function(response){
        //Pipe the resonse into a Buffer List
        //Buffer List only invokes the call back function once all the data is received
        response.pipe(bl(function(err, data){
            var dataString = data.toString();
            return callback(sequenceID, dataString)
        }));
    }); 
}

function printIfDone(sequenceID, dataString){
        responses[sequenceID] = dataString
        if (responses[0]!='a' && responses[1]!='b' && responses[2]!='c') {
                console.log(responses[0]);
                console.log(responses[1]);
                console.log(responses[2]);
        }
}

getHTTPAsString(process.argv[2], 0, printIfDone)
getHTTPAsString(process.argv[3], 1, printIfDone)
getHTTPAsString(process.argv[4], 2, printIfDone)

