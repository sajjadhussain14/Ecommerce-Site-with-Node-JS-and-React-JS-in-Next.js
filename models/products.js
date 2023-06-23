const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let schemaTypes = mongoose.Schema.Types;
let productsSchema = new Schema({
  id: String,
  name: String,
  slug: String,
  description: String,
  productType: String,
  price: schemaTypes.Decimal128,
  salePrice: schemaTypes.Decimal128,
});
let productsModel = "";
try {
  productsModel = mongoose.model("products");
} catch (error) {
  productsModel = mongoose.model("products", productsSchema);
}

module.exports = productsModel;
