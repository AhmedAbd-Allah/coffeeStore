const machinesModel = require('../Models/CoffeeMachine')
let uuid = require('uuidv4');

module.exports = {

  getCoffeeMachines: async request => {
    try {
      let searchQuery = {};
      request.query.product_type ? searchQuery.product_type = request.query.product_type : undefined;
      if ('water_line_compatible' in request.query) {
        searchQuery.water_line_compatible = request.query.water_line_compatible == 'true' ? true : false;
      }
      let machines = await machinesModel.find(searchQuery)
      return machines;

    } catch (error) {
      return error
    }

  },

  addCoffeeMachines: async request => {
    try {
      let requestBody = request.body;
      let newMachine = { _id: uuid() };
      newMachine.product_type = requestBody.product_type ? requestBody.product_type : '';
      if ('water_line_compatible' in requestBody) {
        newMachine.water_line_compatible = requestBody.water_line_compatible == true ? true : false;
      }
      let machine = await machinesModel.create(newMachine)
      return machine;

    } catch (error) {
      return error
    }

  },


}


