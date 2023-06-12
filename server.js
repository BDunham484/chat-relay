const express = require("express");
const path = require("path");
const app = express();

const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("ublic"));

app.get('/', (req, res) => {
    res.sendFile(path.join__dirname, '/public/index.html');
});

app.post('/relay', (req, res) => {
    console.info(`${req.method} request received`);

    console.log('REQDOTBODY');
    console.log(req.body);

    if(req.body) {
        const response = {
            status: 'succes',
            body: req.body
        }

        console.log('RESPONSE');
        console.log(response);
        res.status(200).json(response);
    } else {
        res.status(500).json("It's messed up, man")
    };
});;

app.listen(port, () => {
    console.log(`Server running on port ${port}!`);
});