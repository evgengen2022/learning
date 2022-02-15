const express = require("express");

const app = express();

app.get("/leafs/:address", function(req, res){

    const address = req.params.address;
    console.log(address);

});

app.listen(8080, function(){
    console.log("API endpoints waiting request...");
});
