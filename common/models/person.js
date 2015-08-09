module.exports = function(Person) {
	Person.getPrefs = function(personId, cb) {
		Person.findById(personId,{ include: [{ relation: 'foodPrefs', scope: { include: { relation: 'food_pref_to_food_type' }}}]}, function(err, personFound) {
			if (err) {
				return cb(err);
			}

			cb(null, personFound);
		});
		
	}

	Person.remoteMethod(
	    'getPrefs', {
	        http: {path: '/:personId/getPrefs', verb: 'get'},
	        accepts: [{arg: 'personId', type: 'number'}],
	        returns: {arg: 'type', type: 'object'},
	        description: ['a person object']
	    }
	);
};
