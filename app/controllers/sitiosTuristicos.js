var sitiosTuristicos = function (server) {
    // console.log('homeController listo');
    server.get('/sitiosTuristicos', function (req, res) {
        // res.send('Hola Mundo');

        let sitiosTur = 
        {
            0:{"Nombre":'Agua ',"Direccion":"Calle viva por siempre"},
            1:{"Nombre":'Parque San Antonio',"Direccion":"Loma de la cruz"},
        }

        res.status(200).json({
            Estado: true,
            Respuesta: sitiosTur
        });
    });
};

module.exports = sitiosTuristicos;