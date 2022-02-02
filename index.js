const express = require("express");
const app = express();


var d = {"Server": {"passwords": "9876.server.5000"}};


function data (dt) {
    dt = dt.split("");
    delete dt[0];
    delete dt[0];

    var st = "";
    for (var i = 0; i < dt.length; i++) {
        st += dt[i];
    }

    return st;
}

app.get('/', (req, res) => {
    res.send(data(req.url));
});


app.listen(process.env.PORT || 5000);
