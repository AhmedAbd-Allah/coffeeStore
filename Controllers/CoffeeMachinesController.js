const MachinesService = require('../Services/MachineService')


module.exports = {
    getCoffeeMachines: async function (req, res) {
        try {
            let machines = await MachinesService.getCoffeeMachines(req, res);
            res.status(200).json(machines)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    addCoffeeMachines: async function (req, res) {
        try {
            let machines = await MachinesService.addCoffeeMachines(req, res);
            res.status(200).json(machines)
        } catch (error) {
            res.status(500).json(error)
        }
    },
}