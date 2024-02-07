const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api/posts",verifyToken,(req, res)=>{
   jwt.verify(req.token,"secretkey",(err, authData)=> {
    if(err){
        res.sendStatus(403);
    }else {
        res.json({
            message: "posts created...",
            authData
        });
    }
   });
});

app.post('/api/posts', verifyToken,(req,res)=> {
    res.json({
        message: 'posts created..'
    });
});

app.post("/api/login",(req,res)=>{
    const user = {
        id: 1,
        username: "abc",
        email: "abc@gmail.com",
    };

        jwt.sign({user: user},"secretkey",(err,token)=>{
            res.json({
                token,
            });
        });
});


function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefine'){
        const bearerToken = bearerHeader.split(' ')[i];
        req.token = bearerToken;
        next(); 
    }else {
        res.sendStatus(403); //forbiddend
    }
}

app.listen(3000,(req,res)=>{
    console.log('Server started on port 3000')
})