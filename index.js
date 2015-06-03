'use strict';
module.exports = Math.expm1 || function (x) {
	return Math.exp(x) - 1;
};
