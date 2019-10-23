const podsModel = require('../Models/CoffeePod')
let uuid = require('uuidv4');

module.exports = {

  getCoffeePods: async request => {
    try {
      let searchQuery = {};
      request.query.product_type ? searchQuery.product_type = request.query.product_type : '';
      request.query.coffee_flavor ? searchQuery.coffee_flavor = request.query.coffee_flavor : '';
      request.query.pack_size ? searchQuery.pack_size = Number(request.query.pack_size * 12) : '';
      let pods = await podsModel.find(searchQuery)
      return pods;

    } catch (error) {
      return error
    }
  },


  addCoffeePods: async request => {
    try {
      let requestBody = request.body;
      let newPod = { _id: uuid() };
      requestBody.product_type ? newPod.product_type = requestBody.product_type : '';
      requestBody.coffee_flavor ? newPod.coffee_flavor = requestBody.coffee_flavor : '';
      requestBody.pack_size ? newPod.pack_size = requestBody.pack_size * 12 : '';
      let pod = await podsModel.create(newPod)
      return pod;

    } catch (error) {
      return error
    }
  },


}


