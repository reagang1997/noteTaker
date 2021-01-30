const express = require('express');
const path = require('path');
const db = require('../db/db.json');

const app = express();

const PORT = process.env.port || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/notes', (req, res) => res.json(db));

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    db.push(newNote);
    res.json(newNote);
})

app.delete('/api/notes/:id', (req, res) => {
    const id = db.indexOf(req.params.id - 1);
    db.splice(id);
    res.json(db);
})

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


