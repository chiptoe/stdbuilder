require('../src/noconflict');

var {
	test,
	expect,
	set__,
	get__
} = global;

test('set__() should set and get__() should get value from noconflict scope', () => {
	var value = (function ifee() {}());
	set__('models/User', value);
	var result = get__('models/User');
	expect(result).toBe(value);
});
