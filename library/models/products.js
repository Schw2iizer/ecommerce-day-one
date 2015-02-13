var mongoose = require("mongoose");
var Schema = Mongoose.Schema;

var Schema = new Schema({
	name: {type: String, required: true},
	description: {type: String, required: true},
	price: {type, Number, required: true},
	active: Boolean,
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
})



















module.exports = Mongoose.model("Products", Schema);
