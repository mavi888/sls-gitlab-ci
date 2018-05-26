'use strict';

const exampleModule = require('exampleModule');

module.exports.hello = (event, context, callback) => {
	const result = exampleModule.test('FooBar');

	const response = {
		statusCode: 200,
		body: JSON.stringify({
			message: result
		})
	};

	callback(null, response);
};
