const heroes = require('../data/science')

const heroeController = {
    index: function(req, res) {
        return res.send(heroes.lista)
    },
    show: function (req, res) {
        for (let i = 0; i < heroes.lista.length; i++) {
           if (heroes.lista[i].id == req.params.id) {
               res.send(`Hola, mi nombre es ${heroes.lista[i].nombre} y soy ${heroes.lista[i].profesion}`)
           } else{
               res.send('No encontramos al científico indicado. Por favor, elija otro id')
           }
        }
    }
}

module.exports = heroeController;