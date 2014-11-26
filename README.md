is-phone-number
===============

> check if string is a phone number


Common use is server-side data validation as well. This module has no dependencies and is [well tested](https://github.com/tejas-manohar/is-phone-number/blob/master/test.js).


## Install

```sh
$ npm install --save is-phone-number
```


## Usage

```js
var isPhoneNumber = require('is-phone-number');

isPhoneNumber('123-456-7890');
//=> true

isPhoneNumber('(123) 456-7890');
//=> true

isPhoneNumber('123 456 7890');
//=> true

isPhoneNumber('123.456.7890');
//=> true

isPhoneNumber('+91 (123) 456-78900');
//=> true

isPhoneNumber('5222-222-333');
//=> false
```


## License

MIT © [Tejas Manohar](https://tejas.io)
