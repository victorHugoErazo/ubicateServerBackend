var homeController = function (server) {
    console.log('homeController listo');
    server.get('/', function (req, res) {
        // res.send('Hola Mundo');

        let numeros = ['Uno','Dos','Tres','Cuatro','Cinco']

        res.render('home/index',
        {
            nameProyect:'Ubicate Server',
            numeros : numeros
        });
    });
};

module.exports = homeController;