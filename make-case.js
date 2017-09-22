var makeCase = (function(){
    'use strict';
    function camCase(){
        console.log("camCase")
    }
	function jamCase(){
        	console.log("JamCase")
    }
    return {
		camCase,
		jamCase
	};
})();

if (typeof module === 'object' && module.exports) {
    module.exports = makeCase;
}