module.exports = {
	getCustomer: function(req, res){
		///api/customers/:id
		Custom.findOne({_id: req.params.id}).exec().then(function(err, user){
			return res.json(user);
		});
	}, 
	getCustomers: function(req, res){
		var sort = req.query.sort || "-createdAt";
		var skip = req.query.skip || 0;
		var limit = Number(req.query.limit) || 100;
		///api/cutomsers
		Customer
			.find()
			.limit(limit) //optional
			.skip() //optional
			.sort("-createdAt") //optional
			.select() //allows you grab certain fields //optional
			.exec().then(function(err, users){
				return res.json(users);
			});
	}
}