# new-line-obj 

an object wrapper for a new line character sequence

[![Build Status](https://travis-ci.org/jamestalmage/new-line-obj.svg?branch=master)](https://travis-ci.org/jamestalmage/new-line-obj)
[![Coverage Status](https://coveralls.io/repos/jamestalmage/new-line-obj/badge.svg?branch=master&service=github)](https://coveralls.io/github/jamestalmage/new-line-obj?branch=master)
[![Code Climate](https://codeclimate.com/github/jamestalmage/new-line-obj/badges/gpa.svg)](https://codeclimate.com/github/jamestalmage/new-line-obj)
[![Dependency Status](https://david-dm.org/jamestalmage/new-line-obj.svg)](https://david-dm.org/jamestalmage/new-line-obj)
[![devDependency Status](https://david-dm.org/jamestalmage/new-line-obj/dev-status.svg)](https://david-dm.org/jamestalmage/new-line-obj#info=devDependencies)

[![NPM](https://nodei.co/npm/new-line-obj.png)](https://nodei.co/npm/new-line-obj/)

## Usage

```js
var NewLine = require('new-line-obj');

new NewLine('\r\n').valueOf();
//=> '\r\n';

new NewLine('\r\n').isNewLine;
//=> true

new NewLine('\r\n').isWindowsNewLine;
//=> true

new NewLine('\n').isUnixNewLine;
//=> true
```

## License

MIT © [James Talmage](http://github.com/jamestalmage)
