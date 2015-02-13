var mongoose = require("mongoose");
var Schema = Mongoose.Schema;


var Schema = new Schema({
	name: {type: String, required: true},
	email: {type: String, required: true, unique: true}
	addresses: [{
		billing: [{
			street: {type: String, required: true},
			city: {type: String, required: true},
			state: {type: String, required: true},
			zipcode: {type: String, required: true}
		}],
		shipping: {[
			street: {type: String, required: true},
			ity: {type: String, required: true},
			state: {type: String, required: true},
			zipcode: {type: String, required: true}
	}],
	phoneNumbers: [{
		home: {type: Number, required: true},
		work: {type: Number, required: true}
	}],
	password: {type: String, required: true},
	active: Boolean,
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
})


module.exports = Mongoose.model("Customer", Schema);
