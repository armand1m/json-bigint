var JsonStringify = require('./lib/stringify.js').stringify;
var JsonParse     = require('./lib/parse.js');

var JsonBigint = function(options) {
    return  {
        parse: JsonParse(options),
        stringify: JsonStringify
    }
};

if ( typeof define == 'function' && define.amd ) {
    define( function () { 
        return JsonBigint; 
    } );
}
 
if ( typeof module != 'undefined' && module.exports ) {
    module.exports = JsonBigint;
    module.exports.parse = JsonParse();
    module.exports.stringify = JsonStringify;
} 

if ( window ) {
    window.JsonBigint = JsonBigint;
}
