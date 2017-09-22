var makeCase = (function(){
    'use strict';
    var toCamelCase = function(str){
        if(str === undefined){
            throw "toCamelCase function will take an string argument";
        }
        if(typeof str === 'string' && str.length === 0){
            throw "string argument can't be empty.";
        }
        return str.toLowerCase().replace(/[-_ ./~ ][a-z]/g,function(v){
            return v.slice(1).toUpperCase();
        });
    }
    var toDotCase = function(str){
        if(str === undefined){
            throw "toCamelCase function will take an string argument";
        }
        if(typeof str === 'string' && str.length === 0){
            throw "string argument can't be empty.";
        }
        return str.toLowerCase().replace(/[-_ /~ \[\]][a-z]/g,function(v){
            return '.' + v.slice(1);
        });
    }
    return {
        toCamelCase,
        toDotCase
	};
})();

if (typeof module === 'object' && module.exports) {
    module.exports = makeCase;
}