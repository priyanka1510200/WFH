const express = require ('express');
const app = express();

//midelware

const reqFilter = (reqobject,resobject, next) => {
    console.log('reqFilter');;
    next();
}

app.use(reqFilter)

app.get('/',(req, res)=> {
    res.send("welcome ");
});

app.get('/home',(req, res)=>{
    res.send("Welcome to home page");
})


app.listen(3000,()=> {
    console.log("listening to port 3000");
});