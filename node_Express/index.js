const express = require('express');
const app = express();

//app.get('/',(req,res)=>{
  //  res.send('Hello There!')
//})

app.use(express.json());
app.use(express.urlencoded({extended: false}));


const usersRouter = require('./routers/api/users');
app.use('/api/users', usersRouter);


app.listen(3000,() => {
    console.log('server started on port 3000')
});