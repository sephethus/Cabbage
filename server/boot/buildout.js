module.exports = function(app) {

	app.models.Person.create([{ id: 0, email: 'me@home.com', password: 'test'  }, { email: 'lazy@home.com', password: 'test' }, { email: 'bored@home.com', password: 'test' }], function(err) {
		if (err) throw err;
	});

	app.models.food_type.create([
		{ type: 'American (New)' },
		{ type: 'American (Traditional)' },
		{ type: 'Asian Fusion' },
		{ type: 'Belgian' },
		{ type: 'Burgers' },
		{ type: 'Breakfast' },
		{ type: 'Brunch' },
		{ type: 'Chinese' },
		{ type: 'Deli' },
		{ type: 'Ethiopian' },
		{ type: 'Fast Food' },
		{ type: 'French' },
		{ type: 'German' },
		{ type: 'Indian' },
		{ type: 'Italian' },
		{ type: 'Japanese' },
		{ type: 'Mediterranean' },
		{ type: 'Mexican' },
		{ type: 'Pizza' },
		{ type: 'Sandwiches' },
		{ type: 'Seafood' },
		{ type: 'Steakhouse' },
		{ type: 'Sushi' },
		{ type: 'Tex-Mex' },
		{ type: 'Thai' },		
		{ type: 'Vegetarian' },
		{ type: 'Vietnamese' }], function(err) {
		if (err) throw err;
	});

	app.models.allergy.create([
		{ kind: 'Peanuts'}, 
		{ kind: 'Chocolate' }, 
		{ kind: 'Tree Nuts' }, 
		{ kind: 'Shell Fish' }, 
		{ kind: 'Gluten' }, 
		{ kind: 'Milk' }, 
		{ kind: 'Soy' }, 
		{ kind: 'Eggs' }, 
		{ kind: 'Wheat' }], function(err) {
		if (err) throw err;
	});

}