const express = require("express");
const app = express();


var d = {"hi": "hi"};

function data (dt) {
    dt = dt.replace('/?', '');
    d["hi"] = dt;
    return d;
}

app.get('/', (req, res) => {
    res.send(data(req.url));
});


app.listen(process.env.PORT || 5000);
