'use strict';
var test = require('ava');
Math.expm1 = undefined;
var expm1 = require('./');

test(function (t) {
	t.assert(expm1(0) === 0);
	t.assert(expm1(-1) === -0.6321205588285577);
	t.assert(expm1(1) === 1.718281828459045);
	t.assert(expm1(0) === 0);
	t.assert(expm1(-0) === -0);
	t.assert(expm1(Infinity) === Infinity);
	t.assert(expm1(-Infinity) === -1);
	t.end();
});
