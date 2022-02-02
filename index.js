const express = require("express");
const app = express();

function data (dt) {
    if (dt == "/?hi") {
        return dt;
    }
    return "hi_-8";
}

app.get('/', (req, res) => {
    res.send(data(req.url));
});


app.listen(process.env.PORT || 5000);
