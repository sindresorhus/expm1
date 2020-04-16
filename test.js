import test from 'ava';

Math.expm1 = undefined;
const expm1 = require('.');

test('main', t => {
	t.is(expm1(0), 0);
	t.is(expm1(-1), -0.6321205588285577);
	t.is(expm1(1), 1.718281828459045);
	t.is(expm1(0), 0);
	t.is(expm1(-0), -0);
	t.is(expm1(Infinity), Infinity);
	t.is(expm1(-Infinity), -1);
});
