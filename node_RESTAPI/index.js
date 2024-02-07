const express = require("express");

const app = express();
const port = 3000;

//parse JSON 
app.use(express.json());
app.use(express.urlencoded({extended: false}));


let movies = [
    {
        id: "1",
        title: "abc",
        director: "sfffedc",
        release_date: "2020-07-16",
    },
    {
        id: "2",
        title: "xyz",
        director: "wdfdsf",
        release_date: "2019-08-13",
    },
];

//get the movie list
app.get("/movie",(req,res)=>{
    res.json(movies);
});

//add movie

app.post("/movie",(req,res)=>{
    const movie = req.body;
     console.log(movie);
     movies.push(movie);
     res.send("Movie is added");
});

//search movie

app.get('/movie/:id',(req,res)=> {
    const id = req.params.id

    for(let movie of movies){
        if(movie.id === id){
            res.json(movie)
            return
        }
    }
})

//remove movie

app.delete('/movie/:id',(req,res)=>{
    const id = req.params.id

    movies = movies.filter(movie =>{
        if(movie.id !== id){
            return true
        }
        return false
    })
    res.send('movie is deleted')
})

//set the server

app.listen(port,()=> console.log(`Server listening at port ${port}`));