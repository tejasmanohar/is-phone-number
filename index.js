'use strict';

var re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

module.exports = function (phone) {
  if (typeof phone !== 'string') {
    throw new TypeError('Expected a string');
  }

  return re.test(phone);
};