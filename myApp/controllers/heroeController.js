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

    //     for (let i = 0; i < heroes.lista.lenght ; i++) {
    //        if (heroes.lista[i].id == req.params.id) {
    //            res.send(`Hola, mi nombre es ${heroes.lista[i].nombre} y soy ${heroes.lista[i].profesion}`)
    //        } else{
    //            res.send('No encontramos al científico indicado. Por favor, elija otro id')
    //        }
    //     }

    // show: function (req, res) {
    //     let heroe = heroes.lista[req.params.id];
    //     if (heroe != undefined) {
    //         let nombre = heroe.nombre;
    //         let profesion = heroe.profesion;
    //             return res.send(`Hola, mi nombre es ${nombre} y soy  ${profesion}`)
    //     } else  {
    //         return res.send('No encontramos al científico indicado. Por favor, elija otro id')
    //     };

    },
    bio: function (req, res) {
        
    }
}

module.exports = heroeController;