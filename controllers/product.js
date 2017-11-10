const knex = require("../db/knex.js");

module.exports = {
  getProduct: function(req, res) {
    knex('store')
        .then((results)=>{
          res.render("createProduct", {stores: results});
        })
  },
  createProduct: function(req, res) {
    knex("product")
      .insert({
        productname: req.body.productname,
        description: req.body.description,
        price: req.body.price,
        store_id: req.body.store_id
      })
      .then(()=>{
        res.redirect("/create/product");
      })
  }
}
