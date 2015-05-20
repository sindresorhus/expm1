'use strict';
var isFinite = require('is-finite');

module.exports = Math.expm1 || function (x) {
	if (x === -Infinity) {
		return -1;
	}

	if (!isFinite(x) || x === 0) {
		return x;
	}

	return Math.exp(x) - 1;
};
