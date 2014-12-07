'use strict';

var test = require('ava');
var isPhoneNumber = require('./');

test(function (t) {
  t.assert(isPhoneNumber('123-456-7890'));
  t.assert(isPhoneNumber('(123) 456-7890'));
  t.assert(isPhoneNumber('123 456 7890'));
  t.assert(isPhoneNumber('123.456.7890'));
  t.assert(isPhoneNumber('+91 (123) 456-7890'));
  t.assert(!isPhoneNumber('5222-222-333'));
  t.assert(!isPhoneNumber('lol lol-loll'))
  t.end();
});