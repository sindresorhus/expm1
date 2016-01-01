import test from 'ava';

Math.expm1 = undefined;
const m = require('./');

test(t => {
	t.is(m(0), 0);
	t.is(m(-1), -0.6321205588285577);
	t.is(m(1), 1.718281828459045);
	t.is(m(0), 0);
	t.is(m(-0), -0);
	t.is(m(Infinity), Infinity);
	t.is(m(-Infinity), -1);
});
