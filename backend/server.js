const http = require('http'),
      fs = require('fs');

const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors');

const port = 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

let obj;
fs.readFile('./json/name.json', (err, data) => {
    if(err) throw err.message;
    opj = JSON.parse(data);
})

app.post('/posts', (req, res) => {
    if(req.body.title == undefined || req.body.content == undefined || req.body.title == '' || req.body.content == '') {
        console.log(obj + '01');
        res.status(200).send(opj);
    } else {
        let box = {title: req.body.title, content: req.body.content};
        opj.push(box);
        console.log(opj + '02');
        fs.writeFile('./json/name.json', JSON.stringify(opj), (err) => { if(err) throw err.message; });
        res.status(200).send(opj);
    }
})

const server = http.createServer(app);
server.listen(port, () => {
    console.log('http://localhost:'+port);
})