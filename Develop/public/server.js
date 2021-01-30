const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.port || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


