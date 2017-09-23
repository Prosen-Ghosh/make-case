# make-case

![npm](https://img.shields.io/npm/v/make-case.svg) ![license](https://img.shields.io/npm/l/make-case.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/make-case.svg)  ![Circle CI build status](https://circleci.com/gh/Prosen-Ghosh/make-case.svg?style=svg)

A JavaScript Package For Convert a string to Different Case Style

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

#### Production Script tag
```javascript
<script src="https://cdn.rawgit.com/Prosen-Ghosh/make-case/4f189deb/make-case.js"></script>
```

#### Development Script tag

```javascript
<script src="https://rawgit.com/Prosen-Ghosh/make-case/master/make-case.js"></script>
```

## Development Dependencies

Package | Version | Dev
--- |:---:|:---:
[chai](https://www.npmjs.com/package/chai) | ^4.1.2 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^3.5.3 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔

## API

**Available methods**
- [`toCamelCase(string)`](https://www.npmjs.com/package/make-case#tocamelcase)
- [`toDotCase(string)`](https://www.npmjs.com/package/make-case#todotcase)
- [`toConstantCase(string)`](https://www.npmjs.com/package/make-case#toconstantcase)
- [`toDashCase(string)`](https://www.npmjs.com/package/make-case#todashcase)
- [`toSnakeCase(string)`](https://www.npmjs.com/package/make-case#tosnakecase)


# Usage

#### [`toCamelCase(string)`](https://www.npmjs.com/package/make-case#tocamelcase)

```javascript
const makeCase = require('make-case');

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

#### [`toDotCase(string)`](https://www.npmjs.com/package/make-case#todotcase)

```javascript
const makeCase = require('make-case');

makeCase.toDotCase("something_js")
//;=> "something.js"

makeCase.toDotCase("something~js")
//=> "something.js"

makeCase.toDotCase("something-js")
//=> "something.js"

makeCase.toDotCase("something[js")
//=> "something.js"

makeCase.toDotCase("something/js")
//=> "something.js"

makeCase.toDotCase("something]js")
//=> "something.js"

makeCase.toDotCase("something js")
//=> "something.js"

makeCase.toDotCase("something JS")
//=> "something.js"

```

#### [`toConstantCase(string)`](https://www.npmjs.com/package/make-case#toconstantcase)

```javascript
const makeCase = require('make-case');

makeCase.toConstantCase('api~key');
//=> API_KEY

makeCase.toConstantCase('api-key');
//=> API_KEY

makeCase.toConstantCase('api key');
//=> API_KEY

makeCase.toConstantCase('api 1key');
//=> API_1KEY

makeCase.toConstantCase('api/key');
//=> API_KEY

makeCase.toConstantCase('api_key');
//=> API_KEY

makeCase.toConstantCase('Api Key');
//=> API_KEY
```

#### [`toDashCase(string)`](https://www.npmjs.com/package/make-case)
```javascript
const makeCase = require('make-case');

makeCase.toDashCase("first name 1");
//=> "first-name-1"

makeCase.toDashCase("first Name");
//=> "first-name"

makeCase.toDashCase("First Name");
//=> "first-name"

makeCase.toDashCase("First~Name");
//=> "first-name"

makeCase.toDashCase("First_Name");
//=> "first-name"

makeCase.toDashCase("First/Name");
//=> "first-name"

makeCase.toDashCase("First-Name");
//=> "first-name"
```

#### [`toSnakeCase(string)`](https://www.npmjs.com/package/make-case#tosnakecase)

```javascript
const makeCase = require('make-case');

makeCase.toSnakeCase("first name 1");
//=> "first_name_1"

makeCase.toSnakeCase("first name");
//=> "first_name"

makeCase.toSnakeCase("firstName");
//=> "first_name"

makeCase.toSnakeCase("first~name");
//=> "first_name"

makeCase.toSnakeCase("first.name");
//=> "first_name"

makeCase.toSnakeCase("first-name");
//=> "first_name"
```

## Author

Prosen Ghosh <prosenghosh25@gmail.com>

## License

 - **MIT**
