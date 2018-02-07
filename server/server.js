var express = require("express");
var myserver = express();

myserver.listen(3030,function () {
    console.log("server is runing")
})
myserver.get('/',function (req,res) {
            res.send("it/'s ok!!!")   ;
});
