//Update the name of the controller below and rename the file.
const store = require("../controllers/store.js")
const product = require("../controllers/product.js")
module.exports = function(app){

  app.get('/', store.index);

  app.get('/create/store', store.getStore);

  app.post('/create/store', store.createStore);

  app.get('/create/product', product.getProduct);

  app.post('/create/product', product.createProduct);

}
