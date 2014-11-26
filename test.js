'use strict';

var test = require('ava');
var isPhoneNumber = require('./');

test(function (t) {
  t.assert(isPhoneNumber('614-223-4244'));
  t.assert(isPhoneNumber('(842) 984-153'));
  t.assert(isPhoneNumber('123 434 3584'));
  t.assert(isPhoneNumber('523.753.9082'));
  t.assert(isPhoneNumber('+91 (123) 456-7890'));
  t.assert(!isUrl('5222-222-333'));
  t.end();
});