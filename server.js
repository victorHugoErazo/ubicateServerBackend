/* 
    Iniciar el proyecto npm run start

*/
var express = require('express'),
    swig = require('swig'),
    mongoose = require('mongoose');
var server = express();

//Config Swing
server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/app/views');

//Imagens, CSS, JS
server.use(express.static('./public'));

//Conexion a la BD
mongoose.connection.openUri('mongodb://localhost:27017/dbUbicate',
    (err, res) => {
        if(err) throw err;
        console.log("Base de datos: \x1b[32%s\x1b[0m",'Online')
    });


require('./app/controllers/home')(server);
require('./app/controllers/sitiosTuristicos')(server);

server.listen(8000);