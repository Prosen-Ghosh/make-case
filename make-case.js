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
            throw "toDotCase function will take an string argument";
        }
        if(typeof str === 'string' && str.length === 0){
            throw "string argument can't be empty.";
        }
        return str.toLowerCase().replace(/[-_ /~ \[\]][a-z]/g,function(v){
            return '.' + v.slice(1);
        });
    }

    var toConstantCase = function(str){
        if(str === undefined){
            throw "toConstantCase function will take an string argument";
        }
        if(typeof str === 'string' && str.length === 0){
            throw "string argument can't be empty.";
        }
        return str.toUpperCase().replace(/[-_ /~ .][A-Z0-9]/g,function(v){
            return '_' + v.slice(1);
        });
    }
    
    var toDashCase = function(str){
        if(str === undefined){
            throw "toConstantCase function will take an string argument";
        }
        if(typeof str === 'string' && str.length === 0){
            throw "string argument can't be empty.";
        }
        return str.replace(/[-_ /~ . ][A-z0-9]/g,function(v){
            return '-' + v.slice(1);
        }).toLowerCase();
    }

    var toSnakeCase = function(str){
        if(str === undefined){
            throw "toConstantCase function will take an string argument";
        }
        if(typeof str === 'string' && str.length === 0){
            throw "string argument can't be empty.";
        }
        return str.replace(/[A-Z]/,function(v){
			return ' ' + v.toLowerCase() 
		}).replace(/[-_ /~ . ][A-z0-9]/g,function(v){
            return '_' + v.slice(1);
        }).toLowerCase();
    }
    return {
        toCamelCase,
        toDotCase,
        toConstantCase,
        toDashCase,
        toSnakeCase
	};
})();

if (typeof module === 'object' && module.exports) {
    module.exports = makeCase;
}