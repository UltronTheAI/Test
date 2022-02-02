const express = require("express");
const app = express();


var d = {"Server": {"passwords": "9876.server.5000"}};

function data (dt) {
    dt = dt.split("");
    return dt;
}

app.get('/', (req, res) => {
    res.send(data(req.url));
});


app.listen(process.env.PORT || 5000);
