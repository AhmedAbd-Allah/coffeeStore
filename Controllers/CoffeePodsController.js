const podsService = require('../Services/PodService')
module.exports = {
    getCoffeePods: async function (req, res) {
        try {
            let pods = await podsService.getCoffeePods(req, res);
            res.status(200).json(pods)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    addCoffeePods: async function (req, res) {
        try {
            let pods = await podsService.addCoffeePods(req, res);
            res.status(200).json(pods)
        } catch (error) {
            res.status(500).json(error)
        }
    },
}