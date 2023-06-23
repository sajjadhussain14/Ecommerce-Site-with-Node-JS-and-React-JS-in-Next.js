const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let schemaTypes = mongoose.Schema.Types;
let attributesSchema = new Schema({
  id: String,
  name: String,
  slug: String,
  values: String,
});
let attributesModel = "";
try {
  attributesModel = mongoose.model("attributes");
} catch (error) {
  attributesModel = mongoose.model("attributes", attributesSchema);
}

module.exports = attributesModel;
