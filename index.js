const express = require("express");
const res = require("express/lib/response");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });


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
            delete d[name][filename];
            return "No Error";
        }
        if (np == undefined) {
            return "Name, Password error";
        }
        else {
            return "Name, Password error";
        }
    }
    if (mode_ == "sign_up") {
        d[name] = {};
        d[name].password = password;
        return "No Error";
    }
    if (mode_ == "acc_remove") {
        var np = d[name].password;
        if (password == np) {
            delete d[name];
            return "No Error";
        }
        if (np == undefined) {
            return "Name, Password error";
        }
        else {
            return "Name, Password error";
        }
    }
    if (mode_ == "system") {
        var np = d[name].password;
        if (password == np) {
            return d[name];
        }
        if (np == undefined) {
            return "Name, Password error";
        }
        else {
            return "Name, Password error";
        }
    }
    if (mode_ == "sys") {
        if (password == 'yo') {
            return JSON.stringify(d);
        }
    }

    return st;
}

app.get('/', (req, res) => {
    res.send(data(req.url));
});


server.listen(process.env.PORT || 5000);

io.on("connection", (socket) => {
    // console.log("User connected... user id = " + socket.id);

    socket.on('Sign-up', (st) => {
        var name = st[0];
        var password = st[1];
        var mode_ = st[2];
        var filename = st[3];
        var filetext = st[4];

        d[name] = {};
        d[name].password = password;
        socket.emit("result", "No Error 1");
    });
    socket.on('Acc-Remove', (st) => {
        var name = st[0];
        var password = st[1];
        var mode_ = st[2];
        var filename = st[3];
        var filetext = st[4];

        var np = d[name].password;
        if (password == np) {
            delete d[name];
            socket.emit("result", "No Error 2");
        }
        if (np == undefined) {
            socket.emit("result", "Name, Password error 2");
        }
        else {
            socket.emit("result", "Name, Password error 2");
        }
    });
    socket.on('Read', (st) => {
        var name = st[0];
        var password = st[1];
        var mode_ = st[2];
        var filename = st[3];
        var filetext = st[4];
        
        var np = d[name].password;
        if (password == np) {
            socket.emit("result", d[name][filename] + " 3");
            // return "No Error";
        }
        if (np == undefined) {
            socket.emit("result", "Name, Password error 3");
        }
        else {
            socket.emit("result", "Name, Password error 3");
        }
    });
    socket.on('System', (st) => {
        var name = st[0];
        var password = st[1];
        var mode_ = st[2];
        var filename = st[3];
        var filetext = st[4];
        
        var np = d[name].password;
        if (password == np) {
            socket.emit("result", d[name] + " 3");
            // return "No Error";
        }
        if (np == undefined) {
            socket.emit("result", "Name, Password error 3");
        }
        else {
            socket.emit("result", "Name, Password error 3");
        }
    });
    socket.on('Write', (st) => {
        var name = st[0];
        var password = st[1];
        var mode_ = st[2];
        var filename = st[3];
        var filetext = st[4];

        var np = d[name].password;
        if (password == np) {
            d[name][filename] = filetext;
            console.log(d);
            socket.emit("result", "No Error 4");
        }
        if (np == undefined) {
            socket.emit("result", "Name, Password error 4");
        }
        else {
            socket.emit("result", "Name, Password error 4");
        }
    });
    socket.on('Delete', (st) => {
        var name = st[0];
        var password = st[1];
        var mode_ = st[2];
        var filename = st[3];
        var filetext = st[4];

        var np = d[name].password;
        if (password == np) {
            delete d[name][filename];
            socket.emit("result", "No Error 5");
        }
        if (np == undefined) {
            socket.emit("result", "Name, Password error 5");
        }
        else {
            socket.emit("result", "Name, Password error 5");
        }
    });
    
    socket.on('disconnect', () =>{
        
    });
    
});
