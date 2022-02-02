const express = require("express");
const app = express();

const fs = require('fs');
var d = [];

function data (dt) {
    if (dt == "/?hi") {
        fs.writeFile("books.txt", dt, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully\n");
            console.log("The written has the following contents:");
            console.log(fs.readFileSync("books.txt", "utf8"));
        }
        });
        return d;
    }
    return "hi_-8";
}

app.get('/', (req, res) => {
    res.send(data(req.url));
});


app.listen(process.env.PORT || 5000);
