const heroes = require('../data/science')

const heroeController = {
    index: function(req, res) {
        return res.send(heroes.lista)
    }
}

module.exports = heroeController;