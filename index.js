const express = require("express");
const app = express();

const fs = require('fs');
var d = [];

function data (dt) {
    if (dt == "/?hi") {
        fs.writeFile("books.txt", dt, (err) => {
            if (err) {
                
            }
            else {
                
            }
        });
        return dt;
    }
    return "hi_-8";
}

app.get('/', (req, res) => {
    res.send(data(req.url));
});


app.listen(process.env.PORT || 5000);
