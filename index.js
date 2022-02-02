const express = require("express");
const app = express();

var d = [];

function data (dt) {
    if (dt == "/?hi") {
        d.push(String(dt).replace('/?', ''));
        return d;
    }
    return "hi_-8";
}

app.get('/', (req, res) => {
    res.send(data(req.url));
});


app.listen(process.env.PORT || 5000);
