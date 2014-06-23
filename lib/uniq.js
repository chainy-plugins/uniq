"use strict";
module.exports = function(value, opts, next){
	// Default opts to an object if it doesn't exist
	if ( opts == null )  opts = {}

	// If the opts is a string, then it must be field we want
	if ( (typeof opts) === 'string' )  opts = {field: opts}

	var counts = {}
	var result = value.filter(function(item){
		var qualifier

		if ( opts.field != null ) {
			qualifier = item[opts.field]
		}
		else {
			qualifier = item
		}

		counts[qualifier] = counts[qualifier] || 0
		counts[qualifier]++

		return counts[qualifier] === 1
	})

	next(null, result)  // as opts is optional, next is required
}
module.exports.extensionType = 'action'