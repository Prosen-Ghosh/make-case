const assert = require('chai').assert,
      makeCase = require('../make-case');

describe('Camel Case Test',function(){
    it('Function Should Return A String.',function(){
        assert.typeOf(typeof makeCase.toCamelCase('first name'),'string');
    });

    it('Returned String Should Be A Camle Case String',function(){
        assert.equal(makeCase.toCamelCase('first name'),'firstName');
        assert.equal(makeCase.toCamelCase('first.name'),'firstName');
        assert.equal(makeCase.toCamelCase('first/name'),'firstName');
        assert.equal(makeCase.toCamelCase('first_name'),'firstName');
        assert.equal(makeCase.toCamelCase('first-name'),'firstName');
        assert.equal(makeCase.toCamelCase('first~name'),'firstName');
        assert.equal(makeCase.toCamelCase('First Name'),'firstName');
        assert.equal(makeCase.toCamelCase('FirsT NaMe'),'firstName');
    });
});

describe('Dot Case Test',function(){
    it('Function Should Return A String.',function(){
        assert.typeOf(typeof makeCase.toCamelCase('first name'),'string');
    });

    it('Returned String Should Be A Dot Case String',function(){
        assert.equal(makeCase.toDotCase('something js'),'something.js');
        assert.equal(makeCase.toDotCase('something.js'),'something.js');
        assert.equal(makeCase.toDotCase('something/js'),'something.js');
        assert.equal(makeCase.toDotCase('something JS'),'something.js');
        assert.equal(makeCase.toDotCase('something-js'),'something.js');
        assert.equal(makeCase.toDotCase('something~js'),'something.js');
        assert.equal(makeCase.toDotCase('something]js'),'something.js');
        assert.equal(makeCase.toDotCase('something[js'),'something.js');
    });
});

describe('Constant Case Test',function(){
    it('Function Should Return A String.',function(){
        assert.typeOf(typeof makeCase.toCamelCase('api key'),'string');
    });

    it('Returned String Should Be A Constant Case String',function(){
        assert.equal(makeCase.toConstantCase('api 1key'),'API_1KEY');
        assert.equal(makeCase.toConstantCase('api key'),'API_KEY');
        assert.equal(makeCase.toConstantCase('api-key'),'API_KEY');
        assert.equal(makeCase.toConstantCase('api.key'),'API_KEY');
        assert.equal(makeCase.toConstantCase('api_key'),'API_KEY');
        assert.equal(makeCase.toConstantCase('api~key'),'API_KEY');
        assert.equal(makeCase.toConstantCase('api/key'),'API_KEY');
        assert.equal(makeCase.toConstantCase('Api keY'),'API_KEY');
    });
});