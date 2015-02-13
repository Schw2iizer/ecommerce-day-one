var mongoose = require("mongoose");
var Schema = Mongoose.Schema;
var Product = require("./product");


var schema = new Schema({
	items = [Products],
	customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
	status: { type: String, enum: ['active', 'shipped', 'in transit'] },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});




module.exports = Mongoose.model("Orders", Schema);


User.findOne({CreatedAt: {"$gt": new Date(2015, 02, 12)}}).exec(); <---- find customer before this date