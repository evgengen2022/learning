const express = require("express");
const app = express();

app.get("/test", function(req, res){
    console.log('test');
    res.status(200);
});

app.listen(8080, function(){
    console.log("API endpoints waiting request...");
});
