const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex('product')
    .select("product.*", "store.storename AS store_name")
    .join("store", "product.store_id", "store.id")
    .then((result)=>{
      res.render('showAll', {products: result});
    })
  },
  getStore: function(req, res) {
    res.render('createstore')
  },
  createStore: function(req, res) {
    knex('store')
      .insert({
        storename: req.body.storename,
        description: req.body.description
      })
      .then(()=>{
        res.redirect('/create/store')
      })
      .catch((err) => {
        console.error(err)
      });
  }
}
