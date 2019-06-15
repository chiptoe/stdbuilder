/* eslint-disable no-underscore-dangle */
var noconflict__ = 'PUT_MD5_HASH_HERE';

var global__ = (typeof(global) === 'object' ? global : window);
global__[noconflict__] = {};

// @ts-ignore
global__.set__ = function(k, v) { global__[noconflict__][k] = v; };
// @ts-ignore
global__.get__ = function(k) { return global__[noconflict__][k]; };
