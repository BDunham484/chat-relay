const express = require("express");
const path = require("path");
const app = express();
const { rando_name } = require('./utils/helpers');

const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let name = 

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post('/relay', (req, res) => {
    console.info(`${req.method} request received`);

    if(req.body) {
        const response = {
            status: 'succes',
            body: req.body
        }

        res.status(200).json(response);
    } else {
        res.status(500).json("It's messed up, man")
    };
});;

app.listen(port, () => {
    console.log(`Server running on port ${port}!`);
});