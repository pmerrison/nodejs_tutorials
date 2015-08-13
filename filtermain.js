//Uses the filtermodule.js module to generate a filtered directory listing
var fm = require('./filtermodule.js');

var output = fm(process.argv[2], process.argv[3], function(err, data){
    for(var i = 0; i < data.length; i++){
        console.log(data[i]);
    }
});