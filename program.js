var fs = require('fs');
var path = require('path');
var filterValue = process.argv[3];
//console.log(process.argv);
var directoryString = fs.readdir(process.argv[2], function(err, directoryString){
    if (err) {
        throw err;
    }
    var directoryArray = directoryString;
    var filteredArray = directoryArray.filter(function(directoryArray){
        if (path.extname(directoryArray).indexOf(filterValue) > -1) {
            return true;
        }else return false;
    });
    for(var i=0; i<filteredArray.length; i++){
        if (filteredArray[i]) {
            console.log(filteredArray[i]);
        } 
    }
});

