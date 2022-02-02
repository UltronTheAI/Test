const express = require("express");
const app = express();


var d = {"Server": {"passwords": "9876.server.5000"}};


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
    var mode = st[2];
    var filename = st[3];
    var filetext = st[4];
    
    return st;
}

app.get('/', (req, res) => {
    res.send(data(req.url));
});


app.listen(process.env.PORT || 5000);
