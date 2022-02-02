const express = require("express");
const app = express();


var d = {"Server": {"password": "server"}};


function data (dt) {
    dt = dt.replaceAll("%20", " ").replaceAll("%22", '"').replaceAll('%27', "'");
    dt = dt.split("");
    // delete dt[0];
    // delete dt[0];
    // return dt;

    var st = "";
    for (var i = 2; i < dt.length; i++) {
        st += dt[i];
    }

    st = st.split(" ");

    for (var i = 0; i < st.length; i++) {
        st[i] = st[i].replaceAll("%s", " ");
    }

    var name = st[0];
    var password = st[1];
    var mode_ = st[2];
    var filename = st[3];
    var filetext = st[4];

    if (mode_ == "write") {
        var np = d[name].password;
        if (password == np) {
            d[name][filename] = filetext;
            console.log(d);
            return "No Error";
        }
        if (np == undefined) {
            return "Name, Password error";
        }
        else {
            return "Name, Password error";
        }
    }
    if (mode_ == "read") {
        var np = d[name].password;
        if (password == np) {
            return d[name][filename];
            // return "No Error";
        }
        if (np == undefined) {
            return "Name, Password error";
        }
        else {
            return "Name, Password error";
        }
    }
    if (mode_ == "delete") {
        var np = d[name].password;
        if (password == np) {
            d[name][filename] = null;
            return "No Error";
        }
        if (np == undefined) {
            return "Name, Password error";
        }
        else {
            return "Name, Password error";
        }
    }

    return st;
}

app.get('/', (req, res) => {
    res.send(data(req.url));
});


app.listen(process.env.PORT || 5000);
