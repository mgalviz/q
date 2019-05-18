const express = require('express');
var multer  = require('multer')
const cors = require('cors')

const port = process.env.PORT || 8030;

const app = express();

//Static
app.use(express.static(__dirname + '/dist/'));

//DB
require('./src/server/config/db')

//Config
app.use(cors());
app.use(express.json())

//Routes
const route = require('./src/server/routes/index');

app.use('/', route)

app.get('/proa', (req,res) =>{
    res.json({
        mensaje: 'Holix'
    })
});

//Output
app.listen(port, () => {
console.log(`Server on port ${port}`);
});

