const express = require('express');
const path = require('path');
const db = require('../noteTaker/db/db.json');
const { v4: uuidv4 } = require('uuid');

const app = express();

const PORT = process.env.port || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get('/api/notes', (req, res) => res.json(db));

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();
    db.push(newNote);
    res.json(newNote);
});

app.delete('/api/notes/:id', (req, res) => {
    console.log(req.url);
    for(let i = 0; i < db.length; i++){
        if(db[i].id === req.params.id){
            db.splice(i, 1);
        }
    }
    res.json(db);
})

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname + "/public", 'notes.html')));


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


