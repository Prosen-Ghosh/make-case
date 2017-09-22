var makeCase = (function(){
    'use strict';
    var toCamelCase = function(str){
        return str.toLowerCase().replace(/[-_ ./~ ][a-z]/g,function(v){
            return v.slice(1).toUpperCase();
        });
    }
    return {
		toCamelCase
	};
})();

if (typeof module === 'object' && module.exports) {
    module.exports = makeCase;
}