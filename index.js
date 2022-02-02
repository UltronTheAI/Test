const express = require("express");
const app = express();

const fs = require('fs');
const { exec } = require("child_process");

var d = [];

function data (dt) {
    if (dt == "/?hi") {
        exec("ls", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            return stdout;
        });
    }
    return "hi_-8";
}

app.get('/', (req, res) => {
    res.send(data(req.url));
});


app.listen(process.env.PORT || 5000);
