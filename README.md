# make-case

![npm](https://img.shields.io/npm/v/make-case.svg) ![license](https://img.shields.io/npm/l/make-case.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/make-case.svg)  ![Circle CI build status](https://circleci.com/gh/Prosen-Ghosh/make-case.svg?style=svg)

A JavaScript Package For Convert a string to Different Case Styles Edit

![nodei.co](https://nodei.co/npm/make-case.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/Prosen-Ghosh/make-case.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/make-case.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/make-case.svg)

![forks](https://img.shields.io/github/forks/Prosen-Ghosh/make-case.svg)

![](https://david-dm.org/Prosen-Ghosh/make-case/status.svg)
![](https://david-dm.org/Prosen-Ghosh/make-case/dev-status.svg)

## Features


## `npm` Install

`npm install --save make-case`

## Browser Install

#### Production Use
`https://cdn.rawgit.com/Prosen-Ghosh/make-case/4f189deb/make-case.js`

#### Development Use

`https://rawgit.com/Prosen-Ghosh/make-case/master/make-case.js`

## Development Dependencies

Package | Version | Dev
--- |:---:|:---:
[chai](https://www.npmjs.com/package/chai) | ^4.1.2 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^3.5.3 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔

## API

**Available methods**
- [`toCamelCase`](https://www.npmjs.com/package/make-case#tocamelcase)
- [`toDotCase`](https://www.npmjs.com/package/make-case#todotcase)


# Usage

#### [`toCamelCase`](https://www.npmjs.com/package/make-case#tocamelcase)

```javascript
const makeCase = require('./make-case');

makeCase.toCamelCase("first-name")
//=> "firstName"

makeCase.toCamelCase("first name");
//=> "firstName"

makeCase.toCamelCase("first/name")
//=> "firstName"

makeCase.toCamelCase("first.name")
//=> "firstName"

makeCase.toCamelCase("first~name")
//=> "firstName"

makeCase.toCamelCase("first_name")
//=> "firstName"

makeCase.toCamelCase("FirsT-NAme")
//=> "firstName"

makeCase.toCamelCase("First-Name")
//=> "firstName"
```

#### [`toDotCase`](https://www.npmjs.com/package/make-case#todotcase)

```javascript
const makeCase = require('./make-case');

toDotCase("something_js")
//;=> "something.js"
toDotCase("something~js")
//=> "something.js"
toDotCase("something-js")
//=> "something.js"
toDotCase("something[js")
//=> "something.js"
toDotCase("something/js")
//=> "something.js"
toDotCase("something]js")
//=> "something.js"
toDotCase("something js")
//=> "something.js"
toDotCase("something JS")
//=> "something.js"

```
## Author

Prosen Ghosh <prosenghosh25@gmail.com>

## License

 - **MIT**
