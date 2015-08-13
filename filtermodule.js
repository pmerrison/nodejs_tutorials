var fs = require('fs');
var path = require('path');
module.exports=function (directoryName, extension, callback){
    var filterValue = extension;
    var directoryString = fs.readdir(directoryName, function(err, directoryString){
        if (err) {
            callback(err);
        }
        var directoryArray = directoryString;
        var filteredArray = directoryArray.filter(function(directoryArray){
            if (path.extname(directoryArray).indexOf(filterValue) > -1) {
                return true;
            }else return false;
        });
        callback(null, filteredArray);
    });
}

