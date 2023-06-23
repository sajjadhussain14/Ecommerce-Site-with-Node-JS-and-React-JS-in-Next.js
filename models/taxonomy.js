const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let schemaTypes = mongoose.Schema.Types;
let taxonomySchema = new Schema({}); // add schema for validation and understandig for others user but I dont give it
let taxonomyModel = "";
try {
  taxonomyModel = mongoose.model("taxonomies");
} catch (error) {
  taxonomyModel = mongoose.model("taxonomies", taxonomySchema);
}

module.exports = taxonomyModel;
