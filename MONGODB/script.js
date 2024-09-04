const express = require('express');
const DB = require('./db');
const User = require('./user.schma');
const app = express();
app.use(express.json());
app.get('/', function(req, res){
    res.send('Hello World!');
})
app.get("/read", async (req, res) => {
    let data = await User.find();
    res.send(data);
});

app.post("/add", async (req, res) => {
    let data = await User.create(req.body , {username: req.body.username} , {password: req.body.password} , {email : req.body.email});
    res.send(data);
})
app.patch("/update/:id", async (req, res)=> {
    let { id } = req.params;
    let data = await User.findByIdAndUpdate(id, req.body);
    res.send(data);
});

app.delete("/delete/:id", async (req, res)=> {
    let { id } = req.params;
    let data = await User.findByIdAndDelete(id, req.body);
    res.send(data);
});
app.listen(8090 , ()=> {
    console.log('Server is running on port 8090');
    DB()
});