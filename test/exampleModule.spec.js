const assert = require('chai').assert;
const exampleModule = require('../service/exampleModule');

describe('test exampleModule', () => {
	it('test example module', () => {
		var result = exampleModule.test('FooBar');
		assert.equal('Hello FooBar', result);
	});
});
