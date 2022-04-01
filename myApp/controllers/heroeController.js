const heroes = require('../data/science')

const heroeController = {
    index: (req, res) => {
        return res.send(heroes.lista)
    },
    show: (req, res) => {
        let listaHeroes = heroes.lista;
        let heroeMostrar = '';
        for (let i = 0; i < listaHeroes.length; i++) {
            if (listaHeroes[i].id == req.params.id){
                heroeMostrar = `Hola, mi nombre es ${listaHeroes[i].nombre} y soy ${listaHeroes[i].profesion}`;                
            } 
            if (req.params.id > 10){
                heroeMostrar = 'No encontramos al cientifico indicado. Por favor , elija otro id.';
            }
        }
        return res.send(heroeMostrar);
    },
    showResenia: (req, res) => {
        let listaHeroes = heroes.lista;
        let heroeMostrar = '';
        for (let i = 0; i < listaHeroes.length ; i++) {
            if (heroes.lista[i].id == req.params.id && req.params.ok == null) {
                heroeMostrar = `Soy ${listaHeroes[i].nombre} y lamento que no desees saber más de mi :(`;
            } 
            if (heroes.lista[i].id == req.params.id && req.params.ok == 'ok') {
                heroeMostrar = `${heroes.lista[i].nombre}: ${heroes.lista[i].resenia}`;
            }
            if (heroes.lista[i].id < req.params.id){
                heroeMostrar = 'No encontramos al científico indicado para mostrar su biografía.';
            }
        }
        return res.send(heroeMostrar);
    },
    showCredits: (req, res) => {
            res.send(`¡Gracias a nuestros héroes! Créditos: Francisco Jofré, Octavio Soncini y Valentin del Pino.`);  
    }
}

module.exports = heroeController;