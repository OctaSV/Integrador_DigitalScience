const heroes = require('../data/science')

const heroeController = {
    index: function(req, res) {
        return res.send(heroes.lista)
    },
    show: function (req, res) {
        let heroe = heroes.lista[req.params.id -1];
        if (heroe != undefined) {
            res.send(`Hola, mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`);
        } else{
            res.send('No encontramos al cientifico indicado. Por favor , elija otro id.')
        }
    //     for (let i = 0; i < heroes.dataScience.lista.lenght ; i++) {
    //        if (heroes.lista[i].id == req.params.id) {
    //            res.send(`Hola, mi nombre es ${heroes.lista[i].nombre} y soy ${heroes.lista[i].profesion}`)
    //        } else{
    //            res.send('No encontramos al científico indicado. Por favor, elija otro id')
    //        }
    //     }
    }
}

module.exports = heroeController;