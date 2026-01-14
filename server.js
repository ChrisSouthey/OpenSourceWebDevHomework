const express = require("express"); 
const app = express(); 
const path = require('path');
const fs = require('fs');
const PORT = 3000; 



// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

//Standard routes
app.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    console.log("Reached Index");
});

app.get("/todo", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'todo.html'));
    console.log("Reached Todo");
});

app.get("/readtodo", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'readtodo.html'));
    console.log("Reached Read-Todo");
});


//API route fot data
app.get("/api/todo", (req, res) => {
    fs.readFile("todo.json", "utf8", (err, data) => {
        if (err){
            res.status(500).send("Error reading data file");
        };
        res.json(JSON.parse(data));
    });
});

//Run Server
app.get("/", (req, res) => { res.send("Express server is running!"); }); app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`); });