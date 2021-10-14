/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csscolumns-flexbox-domprefixes-mq-testallprops-testprop-teststyles !*/
!function(e,n,t){function r(e){var n=w.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?w.className.baseVal=n:w.className=n)}function o(e,n){return typeof e===n}function s(){var e,n,t,r,s,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),g.push((r?"":"no-")+a.join("-"))}}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(b?"svg":"body"),e.fake=!0),e}function l(e,t,r,o){var s,l,u,f,c="modernizr",d=i("div"),p=a();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=o?o[r]:c+(r+1),d.appendChild(u);return s=i("style"),s.type="text/css",s.id="s"+c,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",f=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),l=t(d,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=f,w.offsetHeight):d.parentNode.removeChild(d),!!l}function u(e,n){return!!~(""+e).indexOf(n)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(e,n){return function(){return e.apply(n,arguments)}}function d(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?c(r,t||n):r);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+p(n[o])+":"+r+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,r,s){function a(){c&&(delete E.style,delete E.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var l=m(e,r);if(!o(l,"undefined"))return l}for(var c,d,p,h,v,y=["modernizr","tspan"];!E.style;)c=!0,E.modElem=i(y.shift()),E.style=E.modElem.style;for(p=e.length,d=0;p>d;d++)if(h=e[d],v=E.style[h],u(h,"-")&&(h=f(h)),E.style[h]!==t){if(s||o(r,"undefined"))return a(),"pfx"==n?h:!0;try{E.style[h]=r}catch(g){}if(E.style[h]!=v)return a(),"pfx"==n?h:!0}return a(),!1}function v(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+P.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?h(a,n,r,s):(a=(e+" "+_.join(i+" ")+i).split(" "),d(a,n,t))}function y(e,n,r){return v(e,t,t,n,r)}var g=[],C=[],S={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var w=n.documentElement,b="svg"===w.nodeName.toLowerCase(),x="Moz O ms Webkit",_=S._config.usePrefixes?x.toLowerCase().split(" "):[];S._domPrefixes=_;var k=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return l("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();S.mq=k;var P=(S.testStyles=l,S._config.usePrefixes?x.split(" "):[]);S._cssomPrefixes=P;var z={elem:i("modernizr")};Modernizr._q.push(function(){delete z.elem});var E={style:z.elem.style};Modernizr._q.unshift(function(){delete E.style});S.testProp=function(e,n,r){return h([e],t,n,r)};S.testAllProps=v,S.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,n=y("columnCount");try{(e=!!n)&&(e=new Boolean(e))}catch(t){}return e});for(var e,n,t=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<t.length;r++)e=t[r].toLowerCase(),n=y("column"+t[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(n=n||y(t[r])),Modernizr.addTest("csscolumns."+e,n)}(),s(),r(g),delete S.addTest,delete S.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);
/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//

var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	version = "2.1.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];
	nodeType = context.nodeType;

	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	if ( !seed && documentIsHTML ) {

		// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
		if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType !== 1 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;
	parent = doc.defaultView;

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Support tests
	---------------------------------------------------------------------- */
	documentIsHTML = !isXML( doc );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\f]' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed, false );
	window.removeEventListener( "load", completed, false );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// We once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[0], key ) : emptyGet;
};


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};


function Data() {
	// Support: Android<4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;
Data.accepts = jQuery.acceptData;

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android<4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};
var data_priv = new Data();

var data_user = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend({
	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};

var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
})();
var strundefined = typeof undefined;



support.focusinBubbles = "onfocusin" in window;


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Support: Firefox, Chrome, Safari
// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					data_priv.remove( doc, fix );

				} else {
					data_priv.access( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}

function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, type, key,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( jQuery.acceptData( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each(function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				});
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optimization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if ( elem.ownerDocument.defaultView.opener ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		}

		return window.getComputedStyle( elem, null );
	};



function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	var pixelPositionVal, boxSizingReliableVal,
		docElem = document.documentElement,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
		"position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable() {
		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";
		div.innerHTML = "";
		docElem.appendChild( container );

		var divStyle = window.getComputedStyle( div, null );
		pixelPositionVal = divStyle.top !== "1%";
		boxSizingReliableVal = divStyle.width === "4px";

		docElem.removeChild( container );
	}

	// Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if ( window.getComputedStyle ) {
		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computePixelPositionAndBoxSizingReliable();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computePixelPositionAndBoxSizingReliable();
				}
				return boxSizingReliableVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				docElem.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

				docElem.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		});
	}
})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
	// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[0].toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend({

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur(),
				// break the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// Ensure the complete handler is called before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
})();


var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {
			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
});




var rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = arguments.length === 0 || typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// Toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// Handle most common string cases
					ret.replace(rreturn, "") :
					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = window.location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE9
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
	});
}

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr(),
					id = ++xhrId;

				xhr.open( options.type, options.url, options.async, options.username, options.password );

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");

				// Create the abort callback
				callback = xhrCallbacks[ id ] = callback("abort");

				try {
					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};




var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// Support: BlackBerry 5, iOS 3 (original iPhone)
		// If we don't have gBCR, just use 0,0 rather than error
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Support: Safari<7+, Chrome<37+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));

;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

/*! http://mths.be/placeholder v2.0.9 by @mathias */
(function(factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function($) {

	// Opera Mini v7 doesn’t support placeholder although its DOM seems to indicate so
	var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
	var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
	var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
	var valHooks = $.valHooks;
	var propHooks = $.propHooks;
	var hooks;
	var placeholder;

	if (isInputSupported && isTextareaSupported) {

		placeholder = $.fn.placeholder = function() {
			return this;
		};

		placeholder.input = placeholder.textarea = true;

	} else {

		placeholder = $.fn.placeholder = function() {
			var $this = this;
			$this
				.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
				.not('.placeholder')
				.bind({
					'focus.placeholder': clearPlaceholder,
					'blur.placeholder': setPlaceholder
				})
				.data('placeholder-enabled', true)
				.trigger('blur.placeholder');
			return $this;
		};

		placeholder.input = isInputSupported;
		placeholder.textarea = isTextareaSupported;

		hooks = {
			'get': function(element) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value;
				}

				return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
			},
			'set': function(element, value) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value = value;
				}

				if (!$element.data('placeholder-enabled')) {
					return element.value = value;
				}
				if (value === '') {
					element.value = value;
					// Issue #56: Setting the placeholder causes problems if the element continues to have focus.
					if (element != safeActiveElement()) {
						// We can't use `triggerHandler` here because of dummy text/password inputs :(
						setPlaceholder.call(element);
					}
				} else if ($element.hasClass('placeholder')) {
					clearPlaceholder.call(element, true, value) || (element.value = value);
				} else {
					element.value = value;
				}
				// `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
				return $element;
			}
		};

		if (!isInputSupported) {
			valHooks.input = hooks;
			propHooks.value = hooks;
		}
		if (!isTextareaSupported) {
			valHooks.textarea = hooks;
			propHooks.value = hooks;
		}

		$(function() {
			// Look for forms
			$(document).delegate('form', 'submit.placeholder', function() {
				// Clear the placeholder values so they don't get submitted
				var $inputs = $('.placeholder', this).each(clearPlaceholder);
				setTimeout(function() {
					$inputs.each(setPlaceholder);
				}, 10);
			});
		});

		// Clear placeholder values upon page reload
		$(window).bind('beforeunload.placeholder', function() {
			$('.placeholder').each(function() {
				this.value = '';
			});
		});

	}

	function args(elem) {
		// Return an object of element attributes
		var newAttrs = {};
		var rinlinejQuery = /^jQuery\d+$/;
		$.each(elem.attributes, function(i, attr) {
			if (attr.specified && !rinlinejQuery.test(attr.name)) {
				newAttrs[attr.name] = attr.value;
			}
		});
		return newAttrs;
	}

	function clearPlaceholder(event, value) {
		var input = this;
		var $input = $(input);
		if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
			if ($input.data('placeholder-password')) {
				$input = $input.hide().nextAll('input[type="password"]:first').show().attr('id', $input.removeAttr('id').data('placeholder-id'));
				// If `clearPlaceholder` was called from `$.valHooks.input.set`
				if (event === true) {
					return $input[0].value = value;
				}
				$input.focus();
			} else {
				input.value = '';
				$input.removeClass('placeholder');
				input == safeActiveElement() && input.select();
			}
		}
	}

	function setPlaceholder() {
		var $replacement;
		var input = this;
		var $input = $(input);
		var id = this.id;
		if (input.value === '') {
			if (input.type === 'password') {
				if (!$input.data('placeholder-textinput')) {
					try {
						$replacement = $input.clone().attr({ 'type': 'text' });
					} catch(e) {
						$replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
					}
					$replacement
						.removeAttr('name')
						.data({
							'placeholder-password': $input,
							'placeholder-id': id
						})
						.bind('focus.placeholder', clearPlaceholder);
					$input
						.data({
							'placeholder-textinput': $replacement,
							'placeholder-id': id
						})
						.before($replacement);
				}
				$input = $input.removeAttr('id').hide().prevAll('input[type="text"]:first').attr('id', id).show();
				// Note: `$input[0] != input` now!
			}
			$input.addClass('placeholder');
			$input[0].value = $input.attr('placeholder');
		} else {
			$input.removeClass('placeholder');
		}
	}

	function safeActiveElement() {
		// Avoid IE9 `document.activeElement` of death
		// https://github.com/mathiasbynens/jquery-placeholder/pull/99
		try {
			return document.activeElement;
		} catch (exception) {}
	}

}));

!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);

/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2015, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

(function ($, window, document, undefined) {
  'use strict';

  var header_helpers = function (class_array) {
    var head = $('head');
    head.prepend($.map(class_array, function (class_name) {
      if (head.has('.' + class_name).length === 0) {
        return '<meta class="' + class_name + '" />';
      }
    }));
  };

  header_helpers([
    'foundation-mq-small',
    'foundation-mq-small-only',
    'foundation-mq-medium',
    'foundation-mq-medium-only',
    'foundation-mq-large',
    'foundation-mq-large-only',
    'foundation-mq-xlarge',
    'foundation-mq-xlarge-only',
    'foundation-mq-xxlarge',
    'foundation-data-attribute-namespace']);

  // Enable FastClick if present

  $(function () {
    if (typeof FastClick !== 'undefined') {
      // Don't attach to body if undefined
      if (typeof document.body !== 'undefined') {
        FastClick.attach(document.body);
      }
    }
  });

  // private Fast Selector wrapper,
  // returns jQuery object. Only use where
  // getElementById is not available.
  var S = function (selector, context) {
    if (typeof selector === 'string') {
      if (context) {
        var cont;
        if (context.jquery) {
          cont = context[0];
          if (!cont) {
            return context;
          }
        } else {
          cont = context;
        }
        return $(cont.querySelectorAll(selector));
      }

      return $(document.querySelectorAll(selector));
    }

    return $(selector, context);
  };

  // Namespace functions.

  var attr_name = function (init) {
    var arr = [];
    if (!init) {
      arr.push('data');
    }
    if (this.namespace.length > 0) {
      arr.push(this.namespace);
    }
    arr.push(this.name);

    return arr.join('-');
  };

  var add_namespace = function (str) {
    var parts = str.split('-'),
        i = parts.length,
        arr = [];

    while (i--) {
      if (i !== 0) {
        arr.push(parts[i]);
      } else {
        if (this.namespace.length > 0) {
          arr.push(this.namespace, parts[i]);
        } else {
          arr.push(parts[i]);
        }
      }
    }

    return arr.reverse().join('-');
  };

  // Event binding and data-options updating.

  var bindings = function (method, options) {
    var self = this,
        bind = function(){
          var $this = S(this),
              should_bind_events = !$this.data(self.attr_name(true) + '-init');
          $this.data(self.attr_name(true) + '-init', $.extend({}, self.settings, (options || method), self.data_options($this)));

          if (should_bind_events) {
            self.events(this);
          }
        };

    if (S(this.scope).is('[' + this.attr_name() +']')) {
      bind.call(this.scope);
    } else {
      S('[' + this.attr_name() +']', this.scope).each(bind);
    }
    // # Patch to fix #5043 to move this *after* the if/else clause in order for Backbone and similar frameworks to have improved control over event binding and data-options updating.
    if (typeof method === 'string') {
      return this[method].call(this, options);
    }

  };

  var single_image_loaded = function (image, callback) {
    function loaded () {
      callback(image[0]);
    }

    function bindLoad () {
      this.one('load', loaded);

      if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        var src = this.attr( 'src' ),
            param = src.match( /\?/ ) ? '&' : '?';

        param += 'random=' + (new Date()).getTime();
        this.attr('src', src + param);
      }
    }

    if (!image.attr('src')) {
      loaded();
      return;
    }

    if (image[0].complete || image[0].readyState === 4) {
      loaded();
    } else {
      bindLoad.call(image);
    }
  };

  /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */

  window.matchMedia || (window.matchMedia = function() {
      "use strict";

      // For browsers that support matchMedium api such as IE 9 and webkit
      var styleMedia = (window.styleMedia || window.media);

      // For those that don't support matchMedium
      if (!styleMedia) {
          var style       = document.createElement('style'),
              script      = document.getElementsByTagName('script')[0],
              info        = null;

          style.type  = 'text/css';
          style.id    = 'matchmediajs-test';

          script.parentNode.insertBefore(style, script);

          // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
          info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

          styleMedia = {
              matchMedium: function(media) {
                  var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

                  // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
                  if (style.styleSheet) {
                      style.styleSheet.cssText = text;
                  } else {
                      style.textContent = text;
                  }

                  // Test if media query is true or false
                  return info.width === '1px';
              }
          };
      }

      return function(media) {
          return {
              matches: styleMedia.matchMedium(media || 'all'),
              media: media || 'all'
          };
      };
  }());

  /*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */

  (function(jQuery) {


  // requestAnimationFrame polyfill adapted from Erik Möller
  // fixes from Paul Irish and Tino Zijdel
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

  var animating,
      lastTime = 0,
      vendors = ['webkit', 'moz'],
      requestAnimationFrame = window.requestAnimationFrame,
      cancelAnimationFrame = window.cancelAnimationFrame,
      jqueryFxAvailable = 'undefined' !== typeof jQuery.fx;

  for (; lastTime < vendors.length && !requestAnimationFrame; lastTime++) {
    requestAnimationFrame = window[ vendors[lastTime] + 'RequestAnimationFrame' ];
    cancelAnimationFrame = cancelAnimationFrame ||
      window[ vendors[lastTime] + 'CancelAnimationFrame' ] ||
      window[ vendors[lastTime] + 'CancelRequestAnimationFrame' ];
  }

  function raf() {
    if (animating) {
      requestAnimationFrame(raf);

      if (jqueryFxAvailable) {
        jQuery.fx.tick();
      }
    }
  }

  if (requestAnimationFrame) {
    // use rAF
    window.requestAnimationFrame = requestAnimationFrame;
    window.cancelAnimationFrame = cancelAnimationFrame;

    if (jqueryFxAvailable) {
      jQuery.fx.timer = function (timer) {
        if (timer() && jQuery.timers.push(timer) && !animating) {
          animating = true;
          raf();
        }
      };

      jQuery.fx.stop = function () {
        animating = false;
      };
    }
  } else {
    // polyfill
    window.requestAnimationFrame = function (callback) {
      var currTime = new Date().getTime(),
        timeToCall = Math.max(0, 16 - (currTime - lastTime)),
        id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };

  }

  }( $ ));

  function removeQuotes (string) {
    if (typeof string === 'string' || string instanceof String) {
      string = string.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, '');
    }

    return string;
  }

  function MediaQuery(selector) {
    this.selector = selector;
    this.query = '';
  }

  MediaQuery.prototype.toString = function () {
    return this.query || (this.query = S(this.selector).css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''));
  };

  window.Foundation = {
    name : 'Foundation',

    version : '5.5.3',

    media_queries : {
      'small'       : new MediaQuery('.foundation-mq-small'),
      'small-only'  : new MediaQuery('.foundation-mq-small-only'),
      'medium'      : new MediaQuery('.foundation-mq-medium'),
      'medium-only' : new MediaQuery('.foundation-mq-medium-only'),
      'large'       : new MediaQuery('.foundation-mq-large'),
      'large-only'  : new MediaQuery('.foundation-mq-large-only'),
      'xlarge'      : new MediaQuery('.foundation-mq-xlarge'),
      'xlarge-only' : new MediaQuery('.foundation-mq-xlarge-only'),
      'xxlarge'     : new MediaQuery('.foundation-mq-xxlarge')
    },

    stylesheet : $('<style></style>').appendTo('head')[0].sheet,

    global : {
      namespace : undefined
    },

    init : function (scope, libraries, method, options, response) {
      var args = [scope, method, options, response],
          responses = [];

      // check RTL
      this.rtl = /rtl/i.test(S('html').attr('dir'));

      // set foundation global scope
      this.scope = scope || this.scope;

      this.set_namespace();

      if (libraries && typeof libraries === 'string' && !/reflow/i.test(libraries)) {
        if (this.libs.hasOwnProperty(libraries)) {
          responses.push(this.init_lib(libraries, args));
        }
      } else {
        for (var lib in this.libs) {
          responses.push(this.init_lib(lib, libraries));
        }
      }

      S(window).load(function () {
        S(window)
          .trigger('resize.fndtn.clearing')
          .trigger('resize.fndtn.dropdown')
          .trigger('resize.fndtn.equalizer')
          .trigger('resize.fndtn.interchange')
          .trigger('resize.fndtn.joyride')
          .trigger('resize.fndtn.magellan')
          .trigger('resize.fndtn.topbar')
          .trigger('resize.fndtn.slider');
      });

      return scope;
    },

    init_lib : function (lib, args) {
      if (this.libs.hasOwnProperty(lib)) {
        this.patch(this.libs[lib]);

        if (args && args.hasOwnProperty(lib)) {
            if (typeof this.libs[lib].settings !== 'undefined') {
              $.extend(true, this.libs[lib].settings, args[lib]);
            } else if (typeof this.libs[lib].defaults !== 'undefined') {
              $.extend(true, this.libs[lib].defaults, args[lib]);
            }
          return this.libs[lib].init.apply(this.libs[lib], [this.scope, args[lib]]);
        }

        args = args instanceof Array ? args : new Array(args);
        return this.libs[lib].init.apply(this.libs[lib], args);
      }

      return function () {};
    },

    patch : function (lib) {
      lib.scope = this.scope;
      lib.namespace = this.global.namespace;
      lib.rtl = this.rtl;
      lib['data_options'] = this.utils.data_options;
      lib['attr_name'] = attr_name;
      lib['add_namespace'] = add_namespace;
      lib['bindings'] = bindings;
      lib['S'] = this.utils.S;
    },

    inherit : function (scope, methods) {
      var methods_arr = methods.split(' '),
          i = methods_arr.length;

      while (i--) {
        if (this.utils.hasOwnProperty(methods_arr[i])) {
          scope[methods_arr[i]] = this.utils[methods_arr[i]];
        }
      }
    },

    set_namespace : function () {

      // Description:
      //    Don't bother reading the namespace out of the meta tag
      //    if the namespace has been set globally in javascript
      //
      // Example:
      //    Foundation.global.namespace = 'my-namespace';
      // or make it an empty string:
      //    Foundation.global.namespace = '';
      //
      //

      // If the namespace has not been set (is undefined), try to read it out of the meta element.
      // Otherwise use the globally defined namespace, even if it's empty ('')
      var namespace = ( this.global.namespace === undefined ) ? $('.foundation-data-attribute-namespace').css('font-family') : this.global.namespace;

      // Finally, if the namsepace is either undefined or false, set it to an empty string.
      // Otherwise use the namespace value.
      this.global.namespace = ( namespace === undefined || /false/i.test(namespace) ) ? '' : namespace;
    },

    libs : {},

    // methods that can be inherited in libraries
    utils : {

      // Description:
      //    Fast Selector wrapper returns jQuery object. Only use where getElementById
      //    is not available.
      //
      // Arguments:
      //    Selector (String): CSS selector describing the element(s) to be
      //    returned as a jQuery object.
      //
      //    Scope (String): CSS selector describing the area to be searched. Default
      //    is document.
      //
      // Returns:
      //    Element (jQuery Object): jQuery object containing elements matching the
      //    selector within the scope.
      S : S,

      // Description:
      //    Executes a function a max of once every n milliseconds
      //
      // Arguments:
      //    Func (Function): Function to be throttled.
      //
      //    Delay (Integer): Function execution threshold in milliseconds.
      //
      // Returns:
      //    Lazy_function (Function): Function with throttling applied.
      throttle : function (func, delay) {
        var timer = null;

        return function () {
          var context = this, args = arguments;

          if (timer == null) {
            timer = setTimeout(function () {
              func.apply(context, args);
              timer = null;
            }, delay);
          }
        };
      },

      // Description:
      //    Executes a function when it stops being invoked for n seconds
      //    Modified version of _.debounce() http://underscorejs.org
      //
      // Arguments:
      //    Func (Function): Function to be debounced.
      //
      //    Delay (Integer): Function execution threshold in milliseconds.
      //
      //    Immediate (Bool): Whether the function should be called at the beginning
      //    of the delay instead of the end. Default is false.
      //
      // Returns:
      //    Lazy_function (Function): Function with debouncing applied.
      debounce : function (func, delay, immediate) {
        var timeout, result;
        return function () {
          var context = this, args = arguments;
          var later = function () {
            timeout = null;
            if (!immediate) {
              result = func.apply(context, args);
            }
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, delay);
          if (callNow) {
            result = func.apply(context, args);
          }
          return result;
        };
      },

      // Description:
      //    Parses data-options attribute
      //
      // Arguments:
      //    El (jQuery Object): Element to be parsed.
      //
      // Returns:
      //    Options (Javascript Object): Contents of the element's data-options
      //    attribute.
      data_options : function (el, data_attr_name) {
        data_attr_name = data_attr_name || 'options';
        var opts = {}, ii, p, opts_arr,
            data_options = function (el) {
              var namespace = Foundation.global.namespace;

              if (namespace.length > 0) {
                return el.data(namespace + '-' + data_attr_name);
              }

              return el.data(data_attr_name);
            };

        var cached_options = data_options(el);

        if (typeof cached_options === 'object') {
          return cached_options;
        }

        opts_arr = (cached_options || ':').split(';');
        ii = opts_arr.length;

        function isNumber (o) {
          return !isNaN (o - 0) && o !== null && o !== '' && o !== false && o !== true;
        }

        function trim (str) {
          if (typeof str === 'string') {
            return $.trim(str);
          }
          return str;
        }

        while (ii--) {
          p = opts_arr[ii].split(':');
          p = [p[0], p.slice(1).join(':')];

          if (/true/i.test(p[1])) {
            p[1] = true;
          }
          if (/false/i.test(p[1])) {
            p[1] = false;
          }
          if (isNumber(p[1])) {
            if (p[1].indexOf('.') === -1) {
              p[1] = parseInt(p[1], 10);
            } else {
              p[1] = parseFloat(p[1]);
            }
          }

          if (p.length === 2 && p[0].length > 0) {
            opts[trim(p[0])] = trim(p[1]);
          }
        }

        return opts;
      },

      // Description:
      //    Adds JS-recognizable media queries
      //
      // Arguments:
      //    Media (String): Key string for the media query to be stored as in
      //    Foundation.media_queries
      //
      //    Class (String): Class name for the generated <meta> tag
      register_media : function (media, media_class) {
        if (Foundation.media_queries[media] === undefined) {
          $('head').append('<meta class="' + media_class + '"/>');
          Foundation.media_queries[media] = removeQuotes($('.' + media_class).css('font-family'));
        }
      },

      // Description:
      //    Add custom CSS within a JS-defined media query
      //
      // Arguments:
      //    Rule (String): CSS rule to be appended to the document.
      //
      //    Media (String): Optional media query string for the CSS rule to be
      //    nested under.
      add_custom_rule : function (rule, media) {
        if (media === undefined && Foundation.stylesheet) {
          Foundation.stylesheet.insertRule(rule, Foundation.stylesheet.cssRules.length);
        } else {
          var query = Foundation.media_queries[media];

          if (query !== undefined) {
            Foundation.stylesheet.insertRule('@media ' +
              Foundation.media_queries[media] + '{ ' + rule + ' }', Foundation.stylesheet.cssRules.length);
          }
        }
      },

      // Description:
      //    Performs a callback function when an image is fully loaded
      //
      // Arguments:
      //    Image (jQuery Object): Image(s) to check if loaded.
      //
      //    Callback (Function): Function to execute when image is fully loaded.
      image_loaded : function (images, callback) {
        var self = this,
            unloaded = images.length;

        function pictures_has_height(images) {
          var pictures_number = images.length;

          for (var i = pictures_number - 1; i >= 0; i--) {
            if(images.attr('height') === undefined) {
              return false;
            };
          };

          return true;
        }

        if (unloaded === 0 || pictures_has_height(images)) {
          callback(images);
        }

        images.each(function () {
          single_image_loaded(self.S(this), function () {
            unloaded -= 1;
            if (unloaded === 0) {
              callback(images);
            }
          });
        });
      },

      // Description:
      //    Returns a random, alphanumeric string
      //
      // Arguments:
      //    Length (Integer): Length of string to be generated. Defaults to random
      //    integer.
      //
      // Returns:
      //    Rand (String): Pseudo-random, alphanumeric string.
      random_str : function () {
        if (!this.fidx) {
          this.fidx = 0;
        }
        this.prefix = this.prefix || [(this.name || 'F'), (+new Date).toString(36)].join('-');

        return this.prefix + (this.fidx++).toString(36);
      },

      // Description:
      //    Helper for window.matchMedia
      //
      // Arguments:
      //    mq (String): Media query
      //
      // Returns:
      //    (Boolean): Whether the media query passes or not
      match : function (mq) {
        return window.matchMedia(mq).matches;
      },

      // Description:
      //    Helpers for checking Foundation default media queries with JS
      //
      // Returns:
      //    (Boolean): Whether the media query passes or not

      is_small_up : function () {
        return this.match(Foundation.media_queries.small);
      },

      is_medium_up : function () {
        return this.match(Foundation.media_queries.medium);
      },

      is_large_up : function () {
        return this.match(Foundation.media_queries.large);
      },

      is_xlarge_up : function () {
        return this.match(Foundation.media_queries.xlarge);
      },

      is_xxlarge_up : function () {
        return this.match(Foundation.media_queries.xxlarge);
      },

      is_small_only : function () {
        return !this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
      },

      is_medium_only : function () {
        return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
      },

      is_large_only : function () {
        return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
      },

      is_xlarge_only : function () {
        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up();
      },

      is_xxlarge_only : function () {
        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up();
      }
    }
  };

  $.fn.foundation = function () {
    var args = Array.prototype.slice.call(arguments, 0);

    return this.each(function () {
      Foundation.init.apply(Foundation, [this].concat(args));
      return this;
    });
  };

}(jQuery, window, window.document));

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.offcanvas = {
    name : 'offcanvas',

    version : '5.5.3',

    settings : {
      open_method : 'move',
      close_on_click : false
    },

    init : function (scope, method, options) {
      this.bindings(method, options);
    },

    events : function () {
      var self = this,
          S = self.S,
          move_class = '',
          right_postfix = '',
          left_postfix = '',
          top_postfix = '',
          bottom_postfix = '';

      if (this.settings.open_method === 'move') {
        move_class = 'move-';
        right_postfix = 'right';
        left_postfix = 'left';
        top_postfix = 'top';
        bottom_postfix = 'bottom';
      } else if (this.settings.open_method === 'overlap_single') {
        move_class = 'offcanvas-overlap-';
        right_postfix = 'right';
        left_postfix = 'left';
        top_postfix = 'top';
        bottom_postfix = 'bottom';
      } else if (this.settings.open_method === 'overlap') {
        move_class = 'offcanvas-overlap';
      }

      S(this.scope).off('.offcanvas')
        .on('click.fndtn.offcanvas', '.left-off-canvas-toggle', function (e) {
          self.click_toggle_class(e, move_class + right_postfix);
          if (self.settings.open_method !== 'overlap') {
            S('.left-submenu').removeClass(move_class + right_postfix);
          }
          $('.left-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.left-off-canvas-menu a', function (e) {
          var settings = self.get_settings(e);
          var parent = S(this).parent();

          if (settings.close_on_click && !parent.hasClass('has-submenu') && !parent.hasClass('back')) {
            self.hide.call(self, move_class + right_postfix, self.get_wrapper(e));
            parent.parent().removeClass(move_class + right_postfix);
          } else if (S(this).parent().hasClass('has-submenu')) {
            e.preventDefault();
            S(this).siblings('.left-submenu').toggleClass(move_class + right_postfix);
          } else if (parent.hasClass('back')) {
            e.preventDefault();
            parent.parent().removeClass(move_class + right_postfix);
          }
          $('.left-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        //end of left canvas
        .on('click.fndtn.offcanvas', '.right-off-canvas-toggle', function (e) {
          self.click_toggle_class(e, move_class + left_postfix);
          if (self.settings.open_method !== 'overlap') {
            S('.right-submenu').removeClass(move_class + left_postfix);
          }
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.right-off-canvas-menu a', function (e) {
          var settings = self.get_settings(e);
          var parent = S(this).parent();

          if (settings.close_on_click && !parent.hasClass('has-submenu') && !parent.hasClass('back')) {
            self.hide.call(self, move_class + left_postfix, self.get_wrapper(e));
            parent.parent().removeClass(move_class + left_postfix);
          } else if (S(this).parent().hasClass('has-submenu')) {
            e.preventDefault();
            S(this).siblings('.right-submenu').toggleClass(move_class + left_postfix);
          } else if (parent.hasClass('back')) {
            e.preventDefault();
            parent.parent().removeClass(move_class + left_postfix);
          }
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        //end of right canvas
        .on('click.fndtn.offcanvas', '.top-off-canvas-toggle', function (e) {
          self.click_toggle_class(e, move_class + bottom_postfix);
          if (self.settings.open_method !== 'overlap') {
            S('.top-submenu').removeClass(move_class + bottom_postfix);
          }
          $('.top-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.top-off-canvas-menu a', function (e) {
          var settings = self.get_settings(e);
          var parent = S(this).parent();

          if (settings.close_on_click && !parent.hasClass('has-submenu') && !parent.hasClass('back')) {
            self.hide.call(self, move_class + bottom_postfix, self.get_wrapper(e));
            parent.parent().removeClass(move_class + bottom_postfix);
          } else if (S(this).parent().hasClass('has-submenu')) {
            e.preventDefault();
            S(this).siblings('.top-submenu').toggleClass(move_class + bottom_postfix);
          } else if (parent.hasClass('back')) {
            e.preventDefault();
            parent.parent().removeClass(move_class + bottom_postfix);
          }
          $('.top-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        //end of top canvas
        .on('click.fndtn.offcanvas', '.bottom-off-canvas-toggle', function (e) {
          self.click_toggle_class(e, move_class + top_postfix);
          if (self.settings.open_method !== 'overlap') {
            S('.bottom-submenu').removeClass(move_class + top_postfix);
          }
          $('.bottom-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.bottom-off-canvas-menu a', function (e) {
          var settings = self.get_settings(e);
          var parent = S(this).parent();

          if (settings.close_on_click && !parent.hasClass('has-submenu') && !parent.hasClass('back')) {
            self.hide.call(self, move_class + top_postfix, self.get_wrapper(e));
            parent.parent().removeClass(move_class + top_postfix);
          } else if (S(this).parent().hasClass('has-submenu')) {
            e.preventDefault();
            S(this).siblings('.bottom-submenu').toggleClass(move_class + top_postfix);
          } else if (parent.hasClass('back')) {
            e.preventDefault();
            parent.parent().removeClass(move_class + top_postfix);
          }
          $('.bottom-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        //end of bottom
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
          self.click_remove_class(e, move_class + left_postfix);
          S('.right-submenu').removeClass(move_class + left_postfix);
          if (right_postfix) {
            self.click_remove_class(e, move_class + right_postfix);
            S('.left-submenu').removeClass(move_class + left_postfix);
          }
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
          self.click_remove_class(e, move_class + left_postfix);
          $('.left-off-canvas-toggle').attr('aria-expanded', 'false');
          if (right_postfix) {
            self.click_remove_class(e, move_class + right_postfix);
            $('.right-off-canvas-toggle').attr('aria-expanded', 'false');
          }
        })
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
          self.click_remove_class(e, move_class + top_postfix);
          S('.bottom-submenu').removeClass(move_class + top_postfix);
          if (bottom_postfix) {
            self.click_remove_class(e, move_class + bottom_postfix);
            S('.top-submenu').removeClass(move_class + top_postfix);
          }
          $('.bottom-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
          self.click_remove_class(e, move_class + top_postfix);
          $('.top-off-canvas-toggle').attr('aria-expanded', 'false');
          if (bottom_postfix) {
            self.click_remove_class(e, move_class + bottom_postfix);
            $('.bottom-off-canvas-toggle').attr('aria-expanded', 'false');
          }
        });
    },

    toggle : function (class_name, $off_canvas) {
      $off_canvas = $off_canvas || this.get_wrapper();
      if ($off_canvas.is('.' + class_name)) {
        this.hide(class_name, $off_canvas);
      } else {
        this.show(class_name, $off_canvas);
      }
    },

    show : function (class_name, $off_canvas) {
      $off_canvas = $off_canvas || this.get_wrapper();
      $off_canvas.trigger('open.fndtn.offcanvas');
      $off_canvas.addClass(class_name);
    },

    hide : function (class_name, $off_canvas) {
      $off_canvas = $off_canvas || this.get_wrapper();
      $off_canvas.trigger('close.fndtn.offcanvas');
      $off_canvas.removeClass(class_name);
    },

    click_toggle_class : function (e, class_name) {
      e.preventDefault();
      var $off_canvas = this.get_wrapper(e);
      this.toggle(class_name, $off_canvas);
    },

    click_remove_class : function (e, class_name) {
      e.preventDefault();
      var $off_canvas = this.get_wrapper(e);
      this.hide(class_name, $off_canvas);
    },

    get_settings : function (e) {
      var offcanvas  = this.S(e.target).closest('[' + this.attr_name() + ']');
      return offcanvas.data(this.attr_name(true) + '-init') || this.settings;
    },

    get_wrapper : function (e) {
      var $off_canvas = this.S(e ? e.target : this.scope).closest('.off-canvas-wrap');

      if ($off_canvas.length === 0) {
        $off_canvas = this.S('.off-canvas-wrap');
      }
      return $off_canvas;
    },

    reflow : function () {}
  };
}(jQuery, window, window.document));

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.abide = {
    name : 'abide',

    version : '5.5.3',

    settings : {
      live_validate : true, // validate the form as you go
      validate_on_blur : true, // validate whenever you focus/blur on an input field
      // validate_on: 'tab', // tab (when user tabs between fields), change (input changes), manual (call custom events)

      focus_on_invalid : true, // automatically bring the focus to an invalid input field
      error_labels : true, // labels with a for="inputId" will receive an `error` class
      error_class : 'error', // labels with a for="inputId" will receive an `error` class
      // the amount of time Abide will take before it validates the form (in ms).
      // smaller time will result in faster validation
      timeout : 1000,
      patterns : {
        alpha : /^[a-zA-Z]+$/,
        alpha_numeric : /^[a-zA-Z0-9]+$/,
        integer : /^[-+]?\d+$/,
        number : /^[-+]?\d*(?:[\.\,]\d+)?$/,

        // amex, visa, diners
        card : /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
        cvv : /^([0-9]){3,4}$/,

        // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
        email : /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,

        // http://blogs.lse.ac.uk/lti/2008/04/23/a-regular-expression-to-match-any-url/
        url: /^(https?|ftp|file|ssh):\/\/([-;:&=\+\$,\w]+@{1})?([-A-Za-z0-9\.]+)+:?(\d+)?((\/[-\+~%\/\.\w]+)?\??([-\+=&;%@\.\w]+)?#?([\w]+)?)?/,
        // abc.de
        domain : /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,

        datetime : /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
        // YYYY-MM-DD
        date : /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
        // HH:MM:SS
        time : /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
        dateISO : /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
        // MM/DD/YYYY
        month_day_year : /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
        // DD/MM/YYYY
        day_month_year : /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,

        // #FFF or #FFFFFF
        color : /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
      },
      validators : {
        equalTo : function (el, required, parent) {
          var from  = document.getElementById(el.getAttribute(this.add_namespace('data-equalto'))).value,
              to    = el.value,
              valid = (from === to);

          return valid;
        }
      }
    },

    timer : null,

    init : function (scope, method, options) {
      this.bindings(method, options);
    },

    events : function (scope) {
      var self = this,
          form = self.S(scope).attr('novalidate', 'novalidate'),
          settings = form.data(this.attr_name(true) + '-init') || {};

      this.invalid_attr = this.add_namespace('data-invalid');

      function validate(originalSelf, e) {
        clearTimeout(self.timer);
        self.timer = setTimeout(function () {
          self.validate([originalSelf], e);
        }.bind(originalSelf), settings.timeout);
      }

      form
        .off('.abide')
        .on('submit.fndtn.abide', function (e) {
          var is_ajax = /ajax/i.test(self.S(this).attr(self.attr_name()));
          return self.validate(self.S(this).find('input, textarea, select').not(":hidden, [data-abide-ignore]").get(), e, is_ajax);
        })
        .on('validate.fndtn.abide', function (e) {
          if (settings.validate_on === 'manual') {
            self.validate([e.target], e);
          }
        })
        .on('reset', function (e) {
          return self.reset($(this), e);
        })
        .find('input, textarea, select').not(":hidden, [data-abide-ignore]")
          .off('.abide')
          .on('blur.fndtn.abide change.fndtn.abide', function (e) {
              var id = this.getAttribute('id'),
                  eqTo = form.find('[data-equalto="'+ id +'"]');
            // old settings fallback
            // will be deprecated with F6 release
            if (settings.validate_on_blur && settings.validate_on_blur === true) {
              validate(this, e);
            }
            // checks if there is an equalTo equivalent related by id
            if(typeof eqTo.get(0) !== "undefined" && eqTo.val().length){
              validate(eqTo.get(0),e);
            }
            // new settings combining validate options into one setting
            if (settings.validate_on === 'change') {
              validate(this, e);
            }
          })
          .on('keydown.fndtn.abide', function (e) {
            var id = this.getAttribute('id'),
                eqTo = form.find('[data-equalto="'+ id +'"]');
            // old settings fallback
            // will be deprecated with F6 release
            if (settings.live_validate && settings.live_validate === true && e.which != 9) {
              validate(this, e);
            }
            // checks if there is an equalTo equivalent related by id
            if(typeof eqTo.get(0) !== "undefined" && eqTo.val().length){
              validate(eqTo.get(0),e);
            }
            // new settings combining validate options into one setting
            if (settings.validate_on === 'tab' && e.which === 9) {
              validate(this, e);
            }
            else if (settings.validate_on === 'change') {
              validate(this, e);
            }
          })
          .on('focus', function (e) {
            if (navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i)) {
              $('html, body').animate({
                  scrollTop: $(e.target).offset().top
              }, 100);
            }
          });
    },

    reset : function (form, e) {
      var self = this;
      form.removeAttr(self.invalid_attr);

      $('[' + self.invalid_attr + ']', form).removeAttr(self.invalid_attr);
      $('.' + self.settings.error_class, form).not('small').removeClass(self.settings.error_class);
      $(':input', form).not(':button, :submit, :reset, :hidden, [data-abide-ignore]').val('').removeAttr(self.invalid_attr);
    },

    validate : function (els, e, is_ajax) {
      var validations = this.parse_patterns(els),
          validation_count = validations.length,
          form = this.S(els[0]).closest('form'),
          submit_event = /submit/.test(e.type);

      // Has to count up to make sure the focus gets applied to the top error
      for (var i = 0; i < validation_count; i++) {
        if (!validations[i] && (submit_event || is_ajax)) {
          if (this.settings.focus_on_invalid) {
            els[i].focus();
          }
          form.trigger('invalid.fndtn.abide');
          this.S(els[i]).closest('form').attr(this.invalid_attr, '');
          return false;
        }
      }

      if (submit_event || is_ajax) {
        form.trigger('valid.fndtn.abide');
      }

      form.removeAttr(this.invalid_attr);

      if (is_ajax) {
        return false;
      }

      return true;
    },

    parse_patterns : function (els) {
      var i = els.length,
          el_patterns = [];

      while (i--) {
        el_patterns.push(this.pattern(els[i]));
      }

      return this.check_validation_and_apply_styles(el_patterns);
    },

    pattern : function (el) {
      var type = el.getAttribute('type'),
          required = typeof el.getAttribute('required') === 'string';

      var pattern = el.getAttribute('pattern') || '';

      if (this.settings.patterns.hasOwnProperty(pattern) && pattern.length > 0) {
        return [el, this.settings.patterns[pattern], required];
      } else if (pattern.length > 0) {
        return [el, new RegExp(pattern), required];
      }

      if (this.settings.patterns.hasOwnProperty(type)) {
        return [el, this.settings.patterns[type], required];
      }

      pattern = /.*/;

      return [el, pattern, required];
    },

    // TODO: Break this up into smaller methods, getting hard to read.
    check_validation_and_apply_styles : function (el_patterns) {
      var i = el_patterns.length,
          validations = [];
      if (i == 0) {
        return validations;
      }
      var form = this.S(el_patterns[0][0]).closest('[data-' + this.attr_name(true) + ']'),
          settings = form.data(this.attr_name(true) + '-init') || {};
      while (i--) {
        var el = el_patterns[i][0],
            required = el_patterns[i][2],
            value = el.value.trim(),
            direct_parent = this.S(el).parent(),
            validator = el.getAttribute(this.add_namespace('data-abide-validator')),
            is_radio = el.type === 'radio',
            is_checkbox = el.type === 'checkbox',
            label = this.S('label[for="' + el.getAttribute('id') + '"]'),
            valid_length = (required) ? (el.value.length > 0) : true,
            el_validations = [];

        var parent, valid;

        // support old way to do equalTo validations
        if (el.getAttribute(this.add_namespace('data-equalto'))) { validator = 'equalTo' }

        if (!direct_parent.is('label')) {
          parent = direct_parent;
        } else {
          parent = direct_parent.parent();
        }

        if (is_radio && required) {
          el_validations.push(this.valid_radio(el, required));
        } else if (is_checkbox && required) {
          el_validations.push(this.valid_checkbox(el, required));

        } else if (validator) {
          // Validate using each of the specified (space-delimited) validators.
          var validators = validator.split(' ');
          var last_valid = true, all_valid = true;
          for (var iv = 0; iv < validators.length; iv++) {
              valid = this.settings.validators[validators[iv]].apply(this, [el, required, parent])
              el_validations.push(valid);
              all_valid = valid && last_valid;
              last_valid = valid;
          }
          if (all_valid) {
              this.S(el).removeAttr(this.invalid_attr);
              parent.removeClass('error');
              if (label.length > 0 && this.settings.error_labels) {
                label.removeClass(this.settings.error_class).removeAttr('role');
              }
              $(el).triggerHandler('valid');
          } else {
              this.S(el).attr(this.invalid_attr, '');
              parent.addClass('error');
              if (label.length > 0 && this.settings.error_labels) {
                label.addClass(this.settings.error_class).attr('role', 'alert');
              }
              $(el).triggerHandler('invalid');
          }
        } else {

          if (el_patterns[i][1].test(value) && valid_length ||
            !required && el.value.length < 1 || $(el).attr('disabled')) {
            el_validations.push(true);
          } else {
            el_validations.push(false);
          }

          el_validations = [el_validations.every(function (valid) {return valid;})];
          if (el_validations[0]) {
            this.S(el).removeAttr(this.invalid_attr);
            el.setAttribute('aria-invalid', 'false');
            el.removeAttribute('aria-describedby');
            parent.removeClass(this.settings.error_class);
            if (label.length > 0 && this.settings.error_labels) {
              label.removeClass(this.settings.error_class).removeAttr('role');
            }
            $(el).triggerHandler('valid');
          } else {
            this.S(el).attr(this.invalid_attr, '');
            el.setAttribute('aria-invalid', 'true');

            // Try to find the error associated with the input
            var errorElem = parent.find('small.' + this.settings.error_class, 'span.' + this.settings.error_class);
            var errorID = errorElem.length > 0 ? errorElem[0].id : '';
            if (errorID.length > 0) {
              el.setAttribute('aria-describedby', errorID);
            }

            // el.setAttribute('aria-describedby', $(el).find('.error')[0].id);
            parent.addClass(this.settings.error_class);
            if (label.length > 0 && this.settings.error_labels) {
              label.addClass(this.settings.error_class).attr('role', 'alert');
            }
            $(el).triggerHandler('invalid');
          }
        }
        validations = validations.concat(el_validations);
      }

      return validations;
    },

    valid_checkbox : function (el, required) {
      var el = this.S(el),
          valid = (el.is(':checked') || !required || el.get(0).getAttribute('disabled'));

      if (valid) {
        el.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class);
        $(el).triggerHandler('valid');
      } else {
        el.attr(this.invalid_attr, '').parent().addClass(this.settings.error_class);
        $(el).triggerHandler('invalid');
      }

      return valid;
    },

    valid_radio : function (el, required) {
      var name = el.getAttribute('name'),
          group = this.S(el).closest('[data-' + this.attr_name(true) + ']').find("[name='" + name + "']"),
          count = group.length,
          valid = false,
          disabled = false;

      // Has to count up to make sure the focus gets applied to the top error
      for (var i=0; i < count; i++) {
        if( group[i].getAttribute('disabled') ){
          disabled=true;
          valid=true;
        } else {
          if (group[i].checked){
            valid = true;
          } else {
            if( disabled ){
              valid = false;
            }
          }
        }
      }

      // Has to count up to make sure the focus gets applied to the top error
      for (var i = 0; i < count; i++) {
        if (valid) {
          this.S(group[i]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class);
          $(group[i]).triggerHandler('valid');
        } else {
          this.S(group[i]).attr(this.invalid_attr, '').parent().addClass(this.settings.error_class);
          $(group[i]).triggerHandler('invalid');
        }
      }

      return valid;
    },

    valid_equal : function (el, required, parent) {
      var from  = document.getElementById(el.getAttribute(this.add_namespace('data-equalto'))).value,
          to    = el.value,
          valid = (from === to);

      if (valid) {
        this.S(el).removeAttr(this.invalid_attr);
        parent.removeClass(this.settings.error_class);
        if (label.length > 0 && settings.error_labels) {
          label.removeClass(this.settings.error_class);
        }
      } else {
        this.S(el).attr(this.invalid_attr, '');
        parent.addClass(this.settings.error_class);
        if (label.length > 0 && settings.error_labels) {
          label.addClass(this.settings.error_class);
        }
      }

      return valid;
    },

    valid_oneof : function (el, required, parent, doNotValidateOthers) {
      var el = this.S(el),
        others = this.S('[' + this.add_namespace('data-oneof') + ']'),
        valid = others.filter(':checked').length > 0;

      if (valid) {
        el.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class);
      } else {
        el.attr(this.invalid_attr, '').parent().addClass(this.settings.error_class);
      }

      if (!doNotValidateOthers) {
        var _this = this;
        others.each(function () {
          _this.valid_oneof.call(_this, this, null, null, true);
        });
      }

      return valid;
    },

    reflow : function(scope, options) {
      var self = this,
          form = self.S('[' + this.attr_name() + ']').attr('novalidate', 'novalidate');
          self.S(form).each(function (idx, el) {
            self.events(el);
          });
    }
  };
}(jQuery, window, window.document));

;(function ($, window, document, undefined) {
  'use strict';

  var openModals = [];

  Foundation.libs.reveal = {
    name : 'reveal',

    version : '5.5.3',

    locked : false,

    settings : {
      animation : 'fadeAndPop',
      animation_speed : 250,
      close_on_background_click : true,
      close_on_esc : true,
      dismiss_modal_class : 'close-reveal-modal',
      multiple_opened : false,
      bg_class : 'reveal-modal-bg',
      root_element : 'body',
      open : function(){},
      opened : function(){},
      close : function(){},
      closed : function(){},
      on_ajax_error: $.noop,
      bg : $('.reveal-modal-bg'),
      css : {
        open : {
          'opacity' : 0,
          'visibility' : 'visible',
          'display' : 'block'
        },
        close : {
          'opacity' : 1,
          'visibility' : 'hidden',
          'display' : 'none'
        }
      }
    },

    init : function (scope, method, options) {
      $.extend(true, this.settings, method, options);
      this.bindings(method, options);
    },

    events : function (scope) {
      var self = this,
          S = self.S;

      S(this.scope)
        .off('.reveal')
        .on('click.fndtn.reveal', '[' + this.add_namespace('data-reveal-id') + ']:not([disabled])', function (e) {
          e.preventDefault();

          if (!self.locked) {
            var element = S(this),
                ajax = element.data(self.data_attr('reveal-ajax')),
                replaceContentSel = element.data(self.data_attr('reveal-replace-content'));

            self.locked = true;

            if (typeof ajax === 'undefined') {
              self.open.call(self, element);
            } else {
              var url = ajax === true ? element.attr('href') : ajax;
              self.open.call(self, element, {url : url}, { replaceContentSel : replaceContentSel });
            }
          }
        });

      S(document)
        .on('click.fndtn.reveal', this.close_targets(), function (e) {
          e.preventDefault();
          if (!self.locked) {
            var settings = S('[' + self.attr_name() + '].open').data(self.attr_name(true) + '-init') || self.settings,
                bg_clicked = S(e.target)[0] === S('.' + settings.bg_class)[0];

            if (bg_clicked) {
              if (settings.close_on_background_click) {
                e.stopPropagation();
              } else {
                return;
              }
            }

            self.locked = true;
            self.close.call(self, bg_clicked ? S('[' + self.attr_name() + '].open:not(.toback)') : S(this).closest('[' + self.attr_name() + ']'));
          }
        });

      if (S('[' + self.attr_name() + ']', this.scope).length > 0) {
        S(this.scope)
          // .off('.reveal')
          .on('open.fndtn.reveal', this.settings.open)
          .on('opened.fndtn.reveal', this.settings.opened)
          .on('opened.fndtn.reveal', this.open_video)
          .on('close.fndtn.reveal', this.settings.close)
          .on('closed.fndtn.reveal', this.settings.closed)
          .on('closed.fndtn.reveal', this.close_video);
      } else {
        S(this.scope)
          // .off('.reveal')
          .on('open.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.open)
          .on('opened.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.opened)
          .on('opened.fndtn.reveal', '[' + self.attr_name() + ']', this.open_video)
          .on('close.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.close)
          .on('closed.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.closed)
          .on('closed.fndtn.reveal', '[' + self.attr_name() + ']', this.close_video);
      }

      return true;
    },

    // PATCH #3: turning on key up capture only when a reveal window is open
    key_up_on : function (scope) {
      var self = this;

      // PATCH #1: fixing multiple keyup event trigger from single key press
      self.S('body').off('keyup.fndtn.reveal').on('keyup.fndtn.reveal', function ( event ) {
        var open_modal = self.S('[' + self.attr_name() + '].open'),
            settings = open_modal.data(self.attr_name(true) + '-init') || self.settings ;
        // PATCH #2: making sure that the close event can be called only while unlocked,
        //           so that multiple keyup.fndtn.reveal events don't prevent clean closing of the reveal window.
        if ( settings && event.which === 27  && settings.close_on_esc && !self.locked) { // 27 is the keycode for the Escape key
          self.close.call(self, open_modal);
        }
      });

      return true;
    },

    // PATCH #3: turning on key up capture only when a reveal window is open
    key_up_off : function (scope) {
      this.S('body').off('keyup.fndtn.reveal');
      return true;
    },

    open : function (target, ajax_settings) {
      var self = this,
          modal;

      if (target) {
        if (typeof target.selector !== 'undefined') {
          // Find the named node; only use the first one found, since the rest of the code assumes there's only one node
          modal = self.S('#' + target.data(self.data_attr('reveal-id'))).first();
        } else {
          modal = self.S(this.scope);

          ajax_settings = target;
        }
      } else {
        modal = self.S(this.scope);
      }

      var settings = modal.data(self.attr_name(true) + '-init');
      settings = settings || this.settings;


      if (modal.hasClass('open') && target !== undefined && target.attr('data-reveal-id') == modal.attr('id')) {
        return self.close(modal);
      }

      if (!modal.hasClass('open')) {
        var open_modal = self.S('[' + self.attr_name() + '].open');

        if (typeof modal.data('css-top') === 'undefined') {
          modal.data('css-top', parseInt(modal.css('top'), 10))
            .data('offset', this.cache_offset(modal));
        }

        modal.attr('tabindex','0').attr('aria-hidden','false');

        this.key_up_on(modal);    // PATCH #3: turning on key up capture only when a reveal window is open

        // Prevent namespace event from triggering twice
        modal.on('open.fndtn.reveal', function(e) {
          if (e.namespace !== 'fndtn.reveal') return;
        });

        modal.on('open.fndtn.reveal').trigger('open.fndtn.reveal');

        if (open_modal.length < 1) {
          this.toggle_bg(modal, true);
        }

        if (typeof ajax_settings === 'string') {
          ajax_settings = {
            url : ajax_settings
          };
        }

        var openModal = function() {
          if(open_modal.length > 0) {
            if(settings.multiple_opened) {
              self.to_back(open_modal);
            } else {
              self.hide(open_modal, settings.css.close);
            }
          }

          // bl: add the open_modal that isn't already in the background to the openModals array
          if(settings.multiple_opened) {
            openModals.push(modal);
          }

          self.show(modal, settings.css.open);
        };

        if (typeof ajax_settings === 'undefined' || !ajax_settings.url) {
          openModal();
        } else {
          var old_success = typeof ajax_settings.success !== 'undefined' ? ajax_settings.success : null;
          $.extend(ajax_settings, {
            success : function (data, textStatus, jqXHR) {
              if ( $.isFunction(old_success) ) {
                var result = old_success(data, textStatus, jqXHR);
                if (typeof result == 'string') {
                  data = result;
                }
              }

              if (typeof options !== 'undefined' && typeof options.replaceContentSel !== 'undefined') {
                modal.find(options.replaceContentSel).html(data);
              } else {
                modal.html(data);
              }

              self.S(modal).foundation('section', 'reflow');
              self.S(modal).children().foundation();

              openModal();
            }
          });

          // check for if user initalized with error callback
          if (settings.on_ajax_error !== $.noop) {
            $.extend(ajax_settings, {
              error : settings.on_ajax_error
            });
          }

          $.ajax(ajax_settings);
        }
      }
      self.S(window).trigger('resize');
    },

    close : function (modal) {
      var modal = modal && modal.length ? modal : this.S(this.scope),
          open_modals = this.S('[' + this.attr_name() + '].open'),
          settings = modal.data(this.attr_name(true) + '-init') || this.settings,
          self = this;

      if (open_modals.length > 0) {

        modal.removeAttr('tabindex','0').attr('aria-hidden','true');

        this.locked = true;
        this.key_up_off(modal);   // PATCH #3: turning on key up capture only when a reveal window is open

        modal.trigger('close.fndtn.reveal');

        if ((settings.multiple_opened && open_modals.length === 1) || !settings.multiple_opened || modal.length > 1) {
          self.toggle_bg(modal, false);
          self.to_front(modal);
        }

        if (settings.multiple_opened) {
          var isCurrent = modal.is(':not(.toback)');
          self.hide(modal, settings.css.close, settings);
          if(isCurrent) {
            // remove the last modal since it is now closed
            openModals.pop();
          } else {
            // if this isn't the current modal, then find it in the array and remove it
            openModals = $.grep(openModals, function(elt) {
              var isThis = elt[0]===modal[0];
              if(isThis) {
                // since it's not currently in the front, put it in the front now that it is hidden
                // so that if it's re-opened, it won't be .toback
                self.to_front(modal);
              }
              return !isThis;
            });
          }
          // finally, show the next modal in the stack, if there is one
          if(openModals.length>0) {
            self.to_front(openModals[openModals.length - 1]);
          }
        } else {
          self.hide(open_modals, settings.css.close, settings);
        }
      }
    },

    close_targets : function () {
      var base = '.' + this.settings.dismiss_modal_class;

      if (this.settings.close_on_background_click) {
        return base + ', .' + this.settings.bg_class;
      }

      return base;
    },

    toggle_bg : function (modal, state) {
      if (this.S('.' + this.settings.bg_class).length === 0) {
        this.settings.bg = $('<div />', {'class': this.settings.bg_class})
          .appendTo('body').hide();
      }

      var visible = this.settings.bg.filter(':visible').length > 0;
      if ( state != visible ) {
        if ( state == undefined ? visible : !state ) {
          this.hide(this.settings.bg);
        } else {
          this.show(this.settings.bg);
        }
      }
    },

    show : function (el, css) {
      // is modal
      if (css) {
        var settings = el.data(this.attr_name(true) + '-init') || this.settings,
            root_element = settings.root_element,
            context = this;

        if (el.parent(root_element).length === 0) {
          var placeholder = el.wrap('<div style="display: none;" />').parent();

          el.on('closed.fndtn.reveal.wrapped', function () {
            el.detach().appendTo(placeholder);
            el.unwrap().unbind('closed.fndtn.reveal.wrapped');
          });

          el.detach().appendTo(root_element);
        }

        var animData = getAnimationData(settings.animation);
        if (!animData.animate) {
          this.locked = false;
        }
        if (animData.pop) {
          css.top = $(window).scrollTop() - el.data('offset') + 'px';
          var end_css = {
            top: $(window).scrollTop() + el.data('css-top') + 'px',
            opacity: 1
          };

          return setTimeout(function () {
            return el
              .css(css)
              .animate(end_css, settings.animation_speed, 'linear', function () {
                context.locked = false;
                el.trigger('opened.fndtn.reveal');
              })
              .addClass('open');
          }, settings.animation_speed / 2);
        }

        css.top = $(window).scrollTop() + el.data('css-top') + 'px';

        if (animData.fade) {
          var end_css = {opacity: 1};

          return setTimeout(function () {
            return el
              .css(css)
              .animate(end_css, settings.animation_speed, 'linear', function () {
                context.locked = false;
                el.trigger('opened.fndtn.reveal');
              })
              .addClass('open');
          }, settings.animation_speed / 2);
        }

        return el.css(css).show().css({opacity : 1}).addClass('open').trigger('opened.fndtn.reveal');
      }

      var settings = this.settings;

      // should we animate the background?
      if (getAnimationData(settings.animation).fade) {
        return el.fadeIn(settings.animation_speed / 2);
      }

      this.locked = false;

      return el.show();
    },

    to_back : function(el) {
      el.addClass('toback');
    },

    to_front : function(el) {
      el.removeClass('toback');
    },

    hide : function (el, css) {
      // is modal
      if (css) {
        var settings = el.data(this.attr_name(true) + '-init'),
            context = this;
        settings = settings || this.settings;

        var animData = getAnimationData(settings.animation);
        if (!animData.animate) {
          this.locked = false;
        }
        if (animData.pop) {
          var end_css = {
            top: - $(window).scrollTop() - el.data('offset') + 'px',
            opacity: 0
          };

          return setTimeout(function () {
            return el
              .animate(end_css, settings.animation_speed, 'linear', function () {
                context.locked = false;
                el.css(css).trigger('closed.fndtn.reveal');
              })
              .removeClass('open');
          }, settings.animation_speed / 2);
        }

        if (animData.fade) {
          var end_css = {opacity : 0};

          return setTimeout(function () {
            return el
              .animate(end_css, settings.animation_speed, 'linear', function () {
                context.locked = false;
                el.css(css).trigger('closed.fndtn.reveal');
              })
              .removeClass('open');
          }, settings.animation_speed / 2);
        }

        return el.hide().css(css).removeClass('open').trigger('closed.fndtn.reveal');
      }

      var settings = this.settings;

      // should we animate the background?
      if (getAnimationData(settings.animation).fade) {
        return el.fadeOut(settings.animation_speed / 2);
      }

      return el.hide();
    },

    close_video : function (e) {
      var video = $('.flex-video', e.target),
          iframe = $('iframe', video);

      if (iframe.length > 0) {
        iframe.attr('data-src', iframe[0].src);
        iframe.attr('src', iframe.attr('src'));
        video.hide();
      }
    },

    open_video : function (e) {
      var video = $('.flex-video', e.target),
          iframe = video.find('iframe');

      if (iframe.length > 0) {
        var data_src = iframe.attr('data-src');
        if (typeof data_src === 'string') {
          iframe[0].src = iframe.attr('data-src');
        } else {
          var src = iframe[0].src;
          iframe[0].src = undefined;
          iframe[0].src = src;
        }
        video.show();
      }
    },

    data_attr : function (str) {
      if (this.namespace.length > 0) {
        return this.namespace + '-' + str;
      }

      return str;
    },

    cache_offset : function (modal) {
      var offset = modal.show().height() + parseInt(modal.css('top'), 10) + modal.scrollY;

      modal.hide();

      return offset;
    },

    off : function () {
      $(this.scope).off('.fndtn.reveal');
    },

    reflow : function () {}
  };

  /*
   * getAnimationData('popAndFade') // {animate: true,  pop: true,  fade: true}
   * getAnimationData('fade')       // {animate: true,  pop: false, fade: true}
   * getAnimationData('pop')        // {animate: true,  pop: true,  fade: false}
   * getAnimationData('foo')        // {animate: false, pop: false, fade: false}
   * getAnimationData(null)         // {animate: false, pop: false, fade: false}
   */
  function getAnimationData(str) {
    var fade = /fade/i.test(str);
    var pop = /pop/i.test(str);
    return {
      animate : fade || pop,
      pop : pop,
      fade : fade
    };
  }
}(jQuery, window, window.document));

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs['magellan-expedition'] = {
    name : 'magellan-expedition',

    version : '5.5.2',

    settings : {
      active_class : 'active',
      threshold : 0, // pixels from the top of the expedition for it to become fixes
      destination_threshold : 20, // pixels from the top of destination for it to be considered active
      throttle_delay : 30, // calculation throttling to increase framerate
      fixed_top : 0, // top distance in pixels assigend to the fixed element on scroll
      offset_by_height : true,  // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
      duration : 700, // animation duration time
      easing : 'swing' // animation easing
    },

    init : function (scope, method, options) {
      Foundation.inherit(this, 'throttle');
      this.bindings(method, options);
    },

    events : function () {
      var self = this,
          S = self.S,
          settings = self.settings;

      // initialize expedition offset
      self.set_expedition_position();

      S(self.scope)
        .off('.magellan')
        .on('click.fndtn.magellan', '[' + self.add_namespace('data-magellan-arrival') + '] a[href*=#]', function (e) {
          var sameHost = ((this.hostname === location.hostname) || !this.hostname),
              samePath = self.filterPathname(location.pathname) === self.filterPathname(this.pathname),
              testHash = this.hash.replace(/(:|\.|\/)/g, '\\$1'),
              anchor = this;

          if (sameHost && samePath && testHash) {
            e.preventDefault();
            var expedition = $(this).closest('[' + self.attr_name() + ']'),
                settings = expedition.data('magellan-expedition-init'),
                hash = this.hash.split('#').join(''),
                target = $('a[name="' + hash + '"]');

            if (target.length === 0) {
              target = $('#' + hash);

            }

            // Account for expedition height if fixed position
            var scroll_top = target.offset().top - settings.destination_threshold + 1;
            if (settings.offset_by_height) {
              scroll_top = scroll_top - expedition.outerHeight();
            }
            $('html, body').stop().animate({
              'scrollTop' : scroll_top
            }, settings.duration, settings.easing, function () {
              if (history.pushState) {
                        history.pushState(null, null, anchor.pathname + '#' + hash);
              }
                    else {
                        location.hash = anchor.pathname + '#' + hash;
                    }
            });
          }
        })
        .on('scroll.fndtn.magellan', self.throttle(this.check_for_arrivals.bind(this), settings.throttle_delay));
    },

    check_for_arrivals : function () {
      var self = this;
      self.update_arrivals();
      self.update_expedition_positions();
    },

    set_expedition_position : function () {
      var self = this;
      $('[' + this.attr_name() + '=fixed]', self.scope).each(function (idx, el) {
        var expedition = $(this),
            settings = expedition.data('magellan-expedition-init'),
            styles = expedition.attr('styles'), // save styles
            top_offset, fixed_top;

        expedition.attr('style', '');
        top_offset = expedition.offset().top + settings.threshold;

        //set fixed-top by attribute
        fixed_top = parseInt(expedition.data('magellan-fixed-top'));
        if (!isNaN(fixed_top)) {
          self.settings.fixed_top = fixed_top;
        }

        expedition.data(self.data_attr('magellan-top-offset'), top_offset);
        expedition.attr('style', styles);
      });
    },

    update_expedition_positions : function () {
      var self = this,
          window_top_offset = $(window).scrollTop();

      $('[' + this.attr_name() + '=fixed]', self.scope).each(function () {
        var expedition = $(this),
            settings = expedition.data('magellan-expedition-init'),
            styles = expedition.attr('style'), // save styles
            top_offset = expedition.data('magellan-top-offset');

        //scroll to the top distance
        if (window_top_offset + self.settings.fixed_top >= top_offset) {
          // Placeholder allows height calculations to be consistent even when
          // appearing to switch between fixed/non-fixed placement
          var placeholder = expedition.prev('[' + self.add_namespace('data-magellan-expedition-clone') + ']');
          if (placeholder.length === 0) {
            placeholder = expedition.clone();
            placeholder.removeAttr(self.attr_name());
            placeholder.attr(self.add_namespace('data-magellan-expedition-clone'), '');
            expedition.before(placeholder);
          }
          expedition.css({position :'fixed', top : settings.fixed_top}).addClass('fixed');
        } else {
          expedition.prev('[' + self.add_namespace('data-magellan-expedition-clone') + ']').remove();
          expedition.attr('style', styles).css('position', '').css('top', '').removeClass('fixed');
        }
      });
    },

    update_arrivals : function () { 
      var self = this,
          window_top_offset = $(window).scrollTop();

      $('[' + this.attr_name() + ']', self.scope).each(function () {
        var expedition = $(this),
            settings = expedition.data(self.attr_name(true) + '-init'),
            offsets = self.offsets(expedition, window_top_offset),
            arrivals = expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']');

        offsets.each(function (idx, item) {

          if (item.viewport_offset >= item.top_offset) {
            if (!item.arrival.hasClass(settings.active_class)){
              var arrivals = expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']');
              arrivals.find('.' + settings.active_class).trigger('magellan-arrival-off');
              arrivals.not(item.arrival).removeClass(settings.active_class);
              item.arrival.addClass(settings.active_class);
              item.arrival.trigger('magellan-arrival-on');
            }
            return false;
          }
        });

      });
    },

    offsets : function (expedition, window_offset) {
      var self = this,
          settings = expedition.data(self.attr_name(true) + '-init'),
          viewport_offset = window_offset;

      return expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']').map(function (idx, el) {
        var name = $(this).data(self.data_attr('magellan-arrival')),
            dest = $('[' + self.add_namespace('data-magellan-destination') + '=' + name + ']');
        if (dest.length > 0) {
          var top_offset = dest.offset().top - settings.destination_threshold;
          if (settings.offset_by_height) {
            top_offset = top_offset - expedition.outerHeight();
          }
          top_offset = Math.floor(top_offset);
          return {
            destination : dest,
            arrival : $(this),
            top_offset : top_offset,
            viewport_offset : viewport_offset
          }
        }
      }).sort(function (a, b) {
        if (a.top_offset > b.top_offset) {
          return -1;
        }
        if (a.top_offset < b.top_offset) {
          return 1;
        }
        return 0;
      });
    },

    data_attr : function (str) {
      if (this.namespace.length > 0) {
        return this.namespace + '-' + str;
      }

      return str;
    },

    off : function () {
      this.S(this.scope).off('.magellan');
      this.S(window).off('.magellan');
    },

    filterPathname : function (pathname) {
      pathname = pathname || '';
      return pathname
          .replace(/^\//,'')
          .replace(/(?:index|default).[a-zA-Z]{3,4}$/,'')
          .replace(/\/$/,'');
    },

    reflow : function () {
      var self = this;
      // remove placeholder expeditions used for height calculation purposes
      $('[' + self.add_namespace('data-magellan-expedition-clone') + ']', self.scope).remove();
    }
  };
}(jQuery, window, window.document));

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.slider = {
    name : 'slider',

    version : '5.5.2',

    settings : {
      start : 0,
      end : 100,
      step : 1,
      precision : null,
      initial : null,
      display_selector : '',
      vertical : false,
      trigger_input_change : false,
      on_change : function () {}
    },

    cache : {},

    init : function (scope, method, options) {
      Foundation.inherit(this, 'throttle');
      this.bindings(method, options);
      this.reflow();
    },

    events : function () {
      var self = this;

      $(this.scope)
        .off('.slider')
        .on('mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider',
        '[' + self.attr_name() + ']:not(.disabled, [disabled]) .range-slider-handle', function (e) {
          if (!self.cache.active) {
            e.preventDefault();
            self.set_active_slider($(e.target));
          }
        })
        .on('mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider', function (e) {
          if (!!self.cache.active) {
            e.preventDefault();
            if ($.data(self.cache.active[0], 'settings').vertical) {
              var scroll_offset = 0;
              if (!e.pageY) {
                scroll_offset = window.scrollY;
              }
              self.calculate_position(self.cache.active, self.get_cursor_position(e, 'y') + scroll_offset);
            } else {
              self.calculate_position(self.cache.active, self.get_cursor_position(e, 'x'));
            }
          }
        })
        .on('mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider', function (e) {
          self.remove_active_slider();
        })
        .on('change.fndtn.slider', function (e) {
          self.settings.on_change();
        });

      self.S(window)
        .on('resize.fndtn.slider', self.throttle(function (e) {
          self.reflow();
        }, 300));

      // update slider value as users change input value
      this.S('[' + this.attr_name() + ']').each(function () {
        var slider = $(this),
            handle = slider.children('.range-slider-handle')[0],
            settings = self.initialize_settings(handle);

        if (settings.display_selector != '') {
          $(settings.display_selector).each(function(){
            if (this.hasOwnProperty('value')) {
              $(this).change(function(){
                // is there a better way to do this?
                slider.foundation("slider", "set_value", $(this).val());
              });
            }
          });
        }
      });
    },

    get_cursor_position : function (e, xy) {
      var pageXY = 'page' + xy.toUpperCase(),
          clientXY = 'client' + xy.toUpperCase(),
          position;

      if (typeof e[pageXY] !== 'undefined') {
        position = e[pageXY];
      } else if (typeof e.originalEvent[clientXY] !== 'undefined') {
        position = e.originalEvent[clientXY];
      } else if (e.originalEvent.touches && e.originalEvent.touches[0] && typeof e.originalEvent.touches[0][clientXY] !== 'undefined') {
        position = e.originalEvent.touches[0][clientXY];
      } else if (e.currentPoint && typeof e.currentPoint[xy] !== 'undefined') {
        position = e.currentPoint[xy];
      }

      return position;
    },

    set_active_slider : function ($handle) {
      this.cache.active = $handle;
    },

    remove_active_slider : function () {
      this.cache.active = null;
    },

    calculate_position : function ($handle, cursor_x) {

      var self = this,
          settings = $.data($handle[0], 'settings'),
          handle_l = $.data($handle[0], 'handle_l'),
          handle_o = $.data($handle[0], 'handle_o'),
          bar_l = $.data($handle[0], 'bar_l'),
          bar_o = $.data($handle[0], 'bar_o');

      requestAnimationFrame(function () {
        var pct;

        if (Foundation.rtl && !settings.vertical) {
          pct = self.limit_to(((bar_o + bar_l - cursor_x) / bar_l), 0, 1);
        } else {
          pct = self.limit_to(((cursor_x - bar_o) / bar_l), 0, 1);
        }

        pct = settings.vertical ? 1 - pct : pct;
        var norm = self.normalized_value(pct, settings.start, settings.end, settings.step, settings.precision);

        self.set_ui($handle, norm);
      });
    },

    set_ui : function ($handle, value) {
      var settings = $.data($handle[0], 'settings'),
          handle_l = $.data($handle[0], 'handle_l'),
          bar_l = $.data($handle[0], 'bar_l'),
          norm_pct = this.normalized_percentage(value, settings.start, settings.end),
          handle_offset = norm_pct * (bar_l - handle_l) - 1,
          progress_bar_length = norm_pct * 100,
          $handle_parent = $handle.parent(),
          $hidden_inputs = $handle.parent().children('input[type=hidden]');

      if (Foundation.rtl && !settings.vertical) {
        handle_offset = -handle_offset;
      }

      handle_offset = settings.vertical ? -handle_offset + bar_l - handle_l + 1 : handle_offset;
      this.set_translate($handle, handle_offset, settings.vertical);

      if (settings.vertical) {
        $handle.siblings('.range-slider-active-segment').css('height', progress_bar_length + '%');
      } else {
        $handle.siblings('.range-slider-active-segment').css('width', progress_bar_length + '%');
      }
      $handle_parent.attr(this.attr_name(), value).trigger('change.fndtn.slider');

      $hidden_inputs.val(value);
      if (settings.trigger_input_change) {
          $hidden_inputs.trigger('change.fndtn.slider');
      }

      if (!$handle[0].hasAttribute('aria-valuemin')) {
        $handle.attr({
          'aria-valuemin' : settings.start,
          'aria-valuemax' : settings.end
        });
      }
      $handle.attr('aria-valuenow', value);

      if (settings.display_selector != '') {
        $(settings.display_selector).each(function () {
          if (this.hasAttribute('value')) {
            $(this).val(value);
          } else {
            $(this).text(value);
          }
        });
      }

    },

    normalized_percentage : function (val, start, end) {
      return Math.min(1, (val - start) / (end - start));
    },

    normalized_value : function (val, start, end, step, precision) {
      var range = end - start,
          point = val * range,
          mod = (point - (point % step)) / step,
          rem = point % step,
          round = ( rem >= step * 0.5 ? step : 0);
      return ((mod * step + round) + start).toFixed(precision);
    },

    set_translate : function (ele, offset, vertical) {
      if (vertical) {
        $(ele)
          .css('-webkit-transform', 'translateY(' + offset + 'px)')
          .css('-moz-transform', 'translateY(' + offset + 'px)')
          .css('-ms-transform', 'translateY(' + offset + 'px)')
          .css('-o-transform', 'translateY(' + offset + 'px)')
          .css('transform', 'translateY(' + offset + 'px)');
      } else {
        $(ele)
          .css('-webkit-transform', 'translateX(' + offset + 'px)')
          .css('-moz-transform', 'translateX(' + offset + 'px)')
          .css('-ms-transform', 'translateX(' + offset + 'px)')
          .css('-o-transform', 'translateX(' + offset + 'px)')
          .css('transform', 'translateX(' + offset + 'px)');
      }
    },

    limit_to : function (val, min, max) {
      return Math.min(Math.max(val, min), max);
    },

    initialize_settings : function (handle) {

      var settings = $.extend({}, this.settings, this.data_options($(handle).parent())),
          decimal_places_match_result;
      var $slickTrack = $(handle).parents('.slick-track');

      if (settings.precision === null) {
        decimal_places_match_result = ('' + settings.step).match(/\.([\d]*)/);
        settings.precision = decimal_places_match_result && decimal_places_match_result[1] ? decimal_places_match_result[1].length : 0;
      }


      if (settings.vertical) {
        $.data(handle, 'bar_o', $(handle).parent().offset().top);
        $.data(handle, 'bar_l', $(handle).parent().outerHeight());
        $.data(handle, 'handle_o', $(handle).offset().top);
        $.data(handle, 'handle_l', $(handle).outerHeight());
      } else {
        // Check if in slick carousel and calc differently if it is
        if ($slickTrack.length){
          $.data(handle, 'bar_o', $slickTrack.find('.slick-active .range-slider').first().offset().left);
        } else {
          $.data(handle, 'bar_o', $(handle).parent().offset().left);            
        }
        $.data(handle, 'bar_l', $(handle).parent().outerWidth());
        $.data(handle, 'handle_o', $(handle).offset().left);
        $.data(handle, 'handle_l', $(handle).outerWidth());
      }
    
      

      $.data(handle, 'bar', $(handle).parent());
      return $.data(handle, 'settings', settings);
    },

    set_initial_position : function ($ele) {
      var settings = $.data($ele.children('.range-slider-handle')[0], 'settings'),
          initial = ((typeof settings.initial == 'number' && !isNaN(settings.initial)) ? settings.initial : Math.floor((settings.end - settings.start) * 0.5 / settings.step) * settings.step + settings.start),
          $handle = $ele.children('.range-slider-handle');
      this.set_ui($handle, initial);
    },

    set_value : function (value) {
      var self = this;
      $('[' + self.attr_name() + ']', this.scope).each(function () {
        $(this).attr(self.attr_name(), value);
      });
      if (!!$(this.scope).attr(self.attr_name())) {
        $(this.scope).attr(self.attr_name(), value);
      }
      self.reflow();
    },

    reflow : function () {
      var self = this;
      self.S('[' + this.attr_name() + ']').each(function () {
        var handle = $(this).children('.range-slider-handle')[0],
            val = $(this).attr(self.attr_name());
        self.initialize_settings(handle);
        if (val) {
          self.set_ui($(handle), parseFloat(val));
        } else {
          self.set_initial_position($(this));
        }
      });
    }
  };

}(jQuery, window, window.document));

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.9
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!1,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=c.options.asNavFor;d&&null!==d&&(d=a(d).not(c.$slider)),null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(a.currentSlide-1===0&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&(a("li",b.$dots).off("click.slick",b.changeSlide),b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",a.proxy(b.setPaused,b,!0)).off("mouseleave.slick",a.proxy(b.setPaused,b,!1))),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.setPaused,b,!0)).on("mouseleave.slick",a.proxy(b.setPaused,b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.$list.on("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}}))},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:0},100,function(){b.attr("src",c).animate({opacity:1},200,function(){b.removeAttr("data-lazy").removeClass("slick-loading")})})},d.src=c})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay(),b.options.accessibility===!0&&b.initADA()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",null),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,c.options.infinite||(c.slideCount<=c.options.slidesToShow?c.currentSlide=0:c.currentSlide>e&&(c.currentSlide=e)),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b]),b.options.autoplay===!0&&b.focusHandler()},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(b,c,d){var f,g,e=this;if("responsive"===b&&"array"===a.type(c))for(g in c)if("array"!==a.type(e.options.responsive))e.options.responsive=[c[g]];else{for(f=e.options.responsive.length-1;f>=0;)e.options.responsive[f].breakpoint===c[g].breakpoint&&e.options.responsive.splice(f,1),f--;e.options.responsive.push(c[g])}else e.options[b]=c;d===!0&&(e.unload(),e.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,a?b.autoPlayClear():b.autoPlay())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d);
}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(a){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):a.options.autoplay===!0&&(a.paused=!1,a.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.focusHandler=function(){var b=this;b.$slider.on("focus.slick blur.slick","*",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.isPlay&&(d.is(":focus")?(b.autoPlayClear(),b.paused=!0):(b.paused=!1,b.autoPlay()))},0)})},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
/*!

 handlebars v3.0.3

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):"object"==typeof exports?exports.Handlebars=b():a.Handlebars=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";function d(){var a=new g.HandlebarsEnvironment;return m.extend(a,g),a.SafeString=i["default"],a.Exception=k["default"],a.Utils=m,a.escapeExpression=m.escapeExpression,a.VM=o,a.template=function(b){return o.template(b,a)},a}var e=c(7)["default"];b.__esModule=!0;var f=c(1),g=e(f),h=c(2),i=e(h),j=c(3),k=e(j),l=c(4),m=e(l),n=c(5),o=e(n),p=c(6),q=e(p),r=d();r.create=d,q["default"](r),r["default"]=r,b["default"]=r,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b){this.helpers=a||{},this.partials=b||{},e(this)}function e(a){a.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new k["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')}),a.registerHelper("blockHelperMissing",function(b,c){var d=c.inverse,e=c.fn;if(b===!0)return e(this);if(b===!1||null==b)return d(this);if(o(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):d(this);if(c.data&&c.ids){var g=f(c.data);g.contextPath=i.appendContextPath(c.data.contextPath,c.name),c={data:g}}return e(b,c)}),a.registerHelper("each",function(a,b){function c(b,c,e){j&&(j.key=b,j.index=c,j.first=0===c,j.last=!!e,l&&(j.contextPath=l+b)),h+=d(a[b],{data:j,blockParams:i.blockParams([a[b],b],[l+b,null])})}if(!b)throw new k["default"]("Must pass iterator to #each");var d=b.fn,e=b.inverse,g=0,h="",j=void 0,l=void 0;if(b.data&&b.ids&&(l=i.appendContextPath(b.data.contextPath,b.ids[0])+"."),p(a)&&(a=a.call(this)),b.data&&(j=f(b.data)),a&&"object"==typeof a)if(o(a))for(var m=a.length;m>g;g++)c(g,g,g===a.length-1);else{var n=void 0;for(var q in a)a.hasOwnProperty(q)&&(n&&c(n,g-1),n=q,g++);n&&c(n,g-1,!0)}return 0===g&&(h=e(this)),h}),a.registerHelper("if",function(a,b){return p(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||i.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})}),a.registerHelper("with",function(a,b){p(a)&&(a=a.call(this));var c=b.fn;if(i.isEmpty(a))return b.inverse(this);if(b.data&&b.ids){var d=f(b.data);d.contextPath=i.appendContextPath(b.data.contextPath,b.ids[0]),b={data:d}}return c(a,b)}),a.registerHelper("log",function(b,c){var d=c.data&&null!=c.data.level?parseInt(c.data.level,10):1;a.log(d,b)}),a.registerHelper("lookup",function(a,b){return a&&a[b]})}function f(a){var b=i.extend({},a);return b._parent=a,b}var g=c(7)["default"];b.__esModule=!0,b.HandlebarsEnvironment=d,b.createFrame=f;var h=c(4),i=g(h),j=c(3),k=g(j),l="3.0.1";b.VERSION=l;var m=6;b.COMPILER_REVISION=m;var n={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};b.REVISION_CHANGES=n;var o=i.isArray,p=i.isFunction,q=i.toString,r="[object Object]";d.prototype={constructor:d,logger:s,log:t,registerHelper:function(a,b){if(q.call(a)===r){if(b)throw new k["default"]("Arg not supported with multiple helpers");i.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){if(q.call(a)===r)i.extend(this.partials,a);else{if("undefined"==typeof b)throw new k["default"]("Attempting to register a partial as undefined");this.partials[a]=b}},unregisterPartial:function(a){delete this.partials[a]}};var s={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:1,log:function(a,b){if("undefined"!=typeof console&&s.level<=a){var c=s.methodMap[a];(console[c]||console.log).call(console,b)}}};b.logger=s;var t=s.log;b.log=t},function(a,b){"use strict";function c(a){this.string=a}b.__esModule=!0,c.prototype.toString=c.prototype.toHTML=function(){return""+this.string},b["default"]=c,a.exports=b["default"]},function(a,b){"use strict";function c(a,b){var e=b&&b.loc,f=void 0,g=void 0;e&&(f=e.start.line,g=e.start.column,a+=" - "+f+":"+g);for(var h=Error.prototype.constructor.call(this,a),i=0;i<d.length;i++)this[d[i]]=h[d[i]];Error.captureStackTrace&&Error.captureStackTrace(this,c),e&&(this.lineNumber=f,this.column=g)}b.__esModule=!0;var d=["description","fileName","lineNumber","message","name","number","stack"];c.prototype=new Error,b["default"]=c,a.exports=b["default"]},function(a,b){"use strict";function c(a){return j[a]}function d(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function e(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1}function f(a){if("string"!=typeof a){if(a&&a.toHTML)return a.toHTML();if(null==a)return"";if(!a)return a+"";a=""+a}return l.test(a)?a.replace(k,c):a}function g(a){return a||0===a?o(a)&&0===a.length?!0:!1:!0}function h(a,b){return a.path=b,a}function i(a,b){return(a?a+".":"")+b}b.__esModule=!0,b.extend=d,b.indexOf=e,b.escapeExpression=f,b.isEmpty=g,b.blockParams=h,b.appendContextPath=i;var j={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},k=/[&<>"'`]/g,l=/[&<>"'`]/,m=Object.prototype.toString;b.toString=m;var n=function(a){return"function"==typeof a};n(/x/)&&(b.isFunction=n=function(a){return"function"==typeof a&&"[object Function]"===m.call(a)});var n;b.isFunction=n;var o=Array.isArray||function(a){return a&&"object"==typeof a?"[object Array]"===m.call(a):!1};b.isArray=o},function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=p.COMPILER_REVISION;if(b!==c){if(c>b){var d=p.REVISION_CHANGES[c],e=p.REVISION_CHANGES[b];throw new o["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new o["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){function c(c,d,e){e.hash&&(d=m.extend({},d,e.hash)),c=b.VM.resolvePartial.call(this,c,d,e);var f=b.VM.invokePartial.call(this,c,d,e);if(null==f&&b.compile&&(e.partials[e.name]=b.compile(c,a.compilerOptions,b),f=e.partials[e.name](d,e)),null!=f){if(e.indent){for(var g=f.split("\n"),h=0,i=g.length;i>h&&(g[h]||h+1!==i);h++)g[h]=e.indent+g[h];f=g.join("\n")}return f}throw new o["default"]("The partial "+e.name+" could not be compiled when running in runtime-only mode")}function d(b){var c=void 0===arguments[1]?{}:arguments[1],f=c.data;d._setup(c),!c.partial&&a.useData&&(f=j(b,f));var g=void 0,h=a.useBlockParams?[]:void 0;return a.useDepths&&(g=c.depths?[b].concat(c.depths):[b]),a.main.call(e,b,e.helpers,e.partials,f,h,g)}if(!b)throw new o["default"]("No environment passed to template");if(!a||!a.main)throw new o["default"]("Unknown template object: "+typeof a);b.VM.checkRevision(a.compiler);var e={strict:function(a,b){if(!(b in a))throw new o["default"]('"'+b+'" not defined in '+a);return a[b]},lookup:function(a,b){for(var c=a.length,d=0;c>d;d++)if(a[d]&&null!=a[d][b])return a[d][b]},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:m.escapeExpression,invokePartial:c,fn:function(b){return a[b]},programs:[],program:function(a,b,c,d,e){var g=this.programs[a],h=this.fn(a);return b||e||d||c?g=f(this,a,h,b,c,d,e):g||(g=this.programs[a]=f(this,a,h)),g},data:function(a,b){for(;a&&b--;)a=a._parent;return a},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=m.extend({},b,a)),c},noop:b.VM.noop,compilerInfo:a.compiler};return d.isTop=!0,d._setup=function(c){c.partial?(e.helpers=c.helpers,e.partials=c.partials):(e.helpers=e.merge(c.helpers,b.helpers),a.usePartial&&(e.partials=e.merge(c.partials,b.partials)))},d._child=function(b,c,d,g){if(a.useBlockParams&&!d)throw new o["default"]("must pass block params");if(a.useDepths&&!g)throw new o["default"]("must pass parent depths");return f(e,b,a[b],c,0,d,g)},d}function f(a,b,c,d,e,f,g){function h(b){var e=void 0===arguments[1]?{}:arguments[1];return c.call(a,b,a.helpers,a.partials,e.data||d,f&&[e.blockParams].concat(f),g&&[b].concat(g))}return h.program=b,h.depth=g?g.length:0,h.blockParams=e||0,h}function g(a,b,c){return a?a.call||c.name||(c.name=a,a=c.partials[a]):a=c.partials[c.name],a}function h(a,b,c){if(c.partial=!0,void 0===a)throw new o["default"]("The partial "+c.name+" could not be found");return a instanceof Function?a(b,c):void 0}function i(){return""}function j(a,b){return b&&"root"in b||(b=b?p.createFrame(b):{},b.root=a),b}var k=c(7)["default"];b.__esModule=!0,b.checkRevision=d,b.template=e,b.wrapProgram=f,b.resolvePartial=g,b.invokePartial=h,b.noop=i;var l=c(4),m=k(l),n=c(3),o=k(n),p=c(1)},function(a,b){(function(c){"use strict";b.__esModule=!0,b["default"]=function(a){var b="undefined"!=typeof c?c:window,d=b.Handlebars;a.noConflict=function(){b.Handlebars===a&&(b.Handlebars=d)}},a.exports=b["default"]}).call(b,function(){return this}())},function(a,b){"use strict";b["default"]=function(a){return a&&a.__esModule?a:{"default":a}},b.__esModule=!0}])});
/*! Picturefill - v2.3.1 - 2015-04-09
* http://scottjehl.github.io/picturefill
* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b,c){"use strict";function d(b){"object"==typeof module&&"object"==typeof module.exports?module.exports=b:"function"==typeof define&&define.amd&&define("picturefill",function(){return b}),"object"==typeof a&&(a.picturefill=b)}function e(a){var b,c,d,e,f,i=a||{};b=i.elements||g.getAllElements();for(var j=0,k=b.length;k>j;j++)if(c=b[j],d=c.parentNode,e=void 0,f=void 0,"IMG"===c.nodeName.toUpperCase()&&(c[g.ns]||(c[g.ns]={}),i.reevaluate||!c[g.ns].evaluated)){if(d&&"PICTURE"===d.nodeName.toUpperCase()){if(g.removeVideoShim(d),e=g.getMatch(c,d),e===!1)continue}else e=void 0;(d&&"PICTURE"===d.nodeName.toUpperCase()||!g.sizesSupported&&c.srcset&&h.test(c.srcset))&&g.dodgeSrcset(c),e?(f=g.processSourceSet(e),g.applyBestCandidate(f,c)):(f=g.processSourceSet(c),(void 0===c.srcset||c[g.ns].srcset)&&g.applyBestCandidate(f,c)),c[g.ns].evaluated=!0}}function f(){function c(){clearTimeout(d),d=setTimeout(h,60)}g.initTypeDetects(),e();var d,f=setInterval(function(){return e(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(f):void 0},250),h=function(){e({reevaluate:!0})};a.addEventListener?a.addEventListener("resize",c,!1):a.attachEvent&&a.attachEvent("onresize",c)}if(a.HTMLPictureElement)return void d(function(){});b.createElement("picture");var g=a.picturefill||{},h=/\s+\+?\d+(e\d+)?w/;g.ns="picturefill",function(){g.srcsetSupported="srcset"in c,g.sizesSupported="sizes"in c,g.curSrcSupported="currentSrc"in c}(),g.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},g.makeUrl=function(){var a=b.createElement("a");return function(b){return a.href=b,a.href}}(),g.restrictsMixedContent=function(){return"https:"===a.location.protocol},g.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},g.getDpr=function(){return a.devicePixelRatio||1},g.getWidthFromLength=function(a){var c;if(!a||a.indexOf("%")>-1!=!1||!(parseFloat(a)>0||a.indexOf("calc(")>-1))return!1;a=a.replace("vw","%"),g.lengthEl||(g.lengthEl=b.createElement("div"),g.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden",g.lengthEl.className="helper-from-picturefill-js"),g.lengthEl.style.width="0px";try{g.lengthEl.style.width=a}catch(d){}return b.body.appendChild(g.lengthEl),c=g.lengthEl.offsetWidth,0>=c&&(c=!1),b.body.removeChild(g.lengthEl),c},g.detectTypeSupport=function(b,c){var d=new a.Image;return d.onerror=function(){g.types[b]=!1,e()},d.onload=function(){g.types[b]=1===d.width,e()},d.src=c,"pending"},g.types=g.types||{},g.initTypeDetects=function(){g.types["image/jpeg"]=!0,g.types["image/gif"]=!0,g.types["image/png"]=!0,g.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),g.types["image/webp"]=g.detectTypeSupport("image/webp","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")},g.verifyTypeSupport=function(a){var b=a.getAttribute("type");if(null===b||""===b)return!0;var c=g.types[b];return"string"==typeof c&&"pending"!==c?(g.types[b]=g.detectTypeSupport(b,c),"pending"):"function"==typeof c?(c(),"pending"):c},g.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},g.findWidthFromSourceSize=function(c){for(var d,e=g.trim(c).split(/\s*,\s*/),f=0,h=e.length;h>f;f++){var i=e[f],j=g.parseSize(i),k=j.length,l=j.media;if(k&&(!l||g.matchesMedia(l))&&(d=g.getWidthFromLength(k)))break}return d||Math.max(a.innerWidth||0,b.documentElement.clientWidth)},g.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c.slice(-1);if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},g.parseDescriptor=function(a,b){var c,d=b||"100vw",e=a&&a.replace(/(^\s+|\s+$)/g,""),f=g.findWidthFromSourceSize(d);if(e)for(var h=e.split(" "),i=h.length-1;i>=0;i--){var j=h[i],k=j&&j.slice(j.length-1);if("h"!==k&&"w"!==k||g.sizesSupported){if("x"===k){var l=j&&parseFloat(j,10);c=l&&!isNaN(l)?l:1}}else c=parseFloat(parseInt(j,10)/f)}return c||1},g.getCandidatesFromSourceSet=function(a,b){for(var c=g.parseSrcset(a),d=[],e=0,f=c.length;f>e;e++){var h=c[e];d.push({url:h.url,resolution:g.parseDescriptor(h.descriptor,b)})}return d},g.dodgeSrcset=function(a){a.srcset&&(a[g.ns].srcset=a.srcset,a.srcset="",a.setAttribute("data-pfsrcset",a[g.ns].srcset))},g.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[g.ns]&&a[g.ns].srcset&&(b=a[g.ns].srcset),b&&(d=g.getCandidatesFromSourceSet(b,c)),d},g.backfaceVisibilityFix=function(a){var b=a.style||{},c="webkitBackfaceVisibility"in b,d=b.zoom;c&&(b.zoom=".999",c=a.offsetWidth,b.zoom=d)},g.setIntrinsicSize=function(){var c={},d=function(a,b,c){b&&a.setAttribute("width",parseInt(b/c,10))};return function(e,f){var h;e[g.ns]&&!a.pfStopIntrinsicSize&&(void 0===e[g.ns].dims&&(e[g.ns].dims=e.getAttribute("width")||e.getAttribute("height")),e[g.ns].dims||(f.url in c?d(e,c[f.url],f.resolution):(h=b.createElement("img"),h.onload=function(){if(c[f.url]=h.width,!c[f.url])try{b.body.appendChild(h),c[f.url]=h.width||h.offsetWidth,b.body.removeChild(h)}catch(a){}e.src===f.url&&d(e,c[f.url],f.resolution),e=null,h.onload=null,h=null},h.src=f.url)))}}(),g.applyBestCandidate=function(a,b){var c,d,e;a.sort(g.ascendingSort),d=a.length,e=a[d-1];for(var f=0;d>f;f++)if(c=a[f],c.resolution>=g.getDpr()){e=c;break}e&&(e.url=g.makeUrl(e.url),b.src!==e.url&&(g.restrictsMixedContent()&&"http:"===e.url.substr(0,"http:".length).toLowerCase()?void 0!==window.console&&console.warn("Blocked mixed content image "+e.url):(b.src=e.url,g.curSrcSupported||(b.currentSrc=b.src),g.backfaceVisibilityFix(b))),g.setIntrinsicSize(b,e))},g.ascendingSort=function(a,b){return a.resolution-b.resolution},g.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},g.getAllElements=function(){for(var a=[],c=b.getElementsByTagName("img"),d=0,e=c.length;e>d;d++){var f=c[d];("PICTURE"===f.parentNode.nodeName.toUpperCase()||null!==f.getAttribute("srcset")||f[g.ns]&&null!==f[g.ns].srcset)&&a.push(f)}return a},g.getMatch=function(a,b){for(var c,d=b.childNodes,e=0,f=d.length;f>e;e++){var h=d[e];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var i=h.getAttribute("media");if(h.getAttribute("srcset")&&(!i||g.matchesMedia(i))){var j=g.verifyTypeSupport(h);if(j===!0){c=h;break}if("pending"===j)return!1}}}}return c},f(),e._=g,d(e)}(window,window.document,new window.Image);
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):"object"==typeof exports?exports.jwplayer=t():e.jwplayer=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n=window.webpackJsonpjwplayer;window.webpackJsonpjwplayer=function(i,r){for(var s,a,l=0,c=[];l<i.length;l++)a=i[l],o[a]&&c.push.apply(c,o[a]),o[a]=0;for(s in r)e[s]=r[s];for(n&&n(i,r);c.length;)c.shift().call(null,t)};var i={},o={0:0};return t.e=function(e,n){if(0===o[e])return n.call(null,t);if(void 0!==o[e])o[e].push(n);else{o[e]=[n];var i=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.async=!0,r.src=t.p+""+({1:"provider.dashjs",2:"provider.shaka"}[e]||e)+".js",i.appendChild(r)}},t.m=e,t.c=i,t.p="",t(0)}([function(e,t,n){e.exports=n(40)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){var i,o;i=[n(41),n(168),n(48),n(45)],o=function(e,t,i,o){return o.extend(e,t),n.p=i.getScriptPath("jwplayer.js"),e}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(42),n(48),n(45),n(68),n(159),n(160)],o=function(e,t,i){return n.p=t.getScriptPath("jwplayer.js"),window.jwplayer=window.jwplayer||i.constant({registerPlugin:e.registerPlugin}),e.selectPlayer}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(43),n(60),n(69),n(83),n(45)],o=function(e,t,n,i,o){function r(e){if(!o.isFunction(e.supports))throw{message:"Tried to register a provider with an invalid object"};var i=function(){};i.prototype=n,e.prototype=new i,t.defaultList.unshift(e)}var s=e.selectPlayer,a=function(){var e=s.apply(this,arguments);return e?e:{registerPlugin:function(e,t,n){"jwpsrv"!==e&&i.registerPlugin(e,t,n)}}};return o.extend(e,{selectPlayer:a,registerProvider:r})}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(44),n(83)],o=function(e,t){var n=[],i=0,o=function(i){var o,l;return i?"string"==typeof i?(o=r(i),o||(l=document.getElementById(i))):"number"==typeof i?o=n[i]:i.nodeType&&(l=i,o=r(l.id)):o=n[0],o?o:l?s(new e(l,a)):{registerPlugin:t.registerPlugin}},r=function(e){for(var t=0;t<n.length;t++)if(n[t].id===e)return n[t];return null},s=function(e){return i++,e.uniqueId=i,n.push(e),e},a=function(e){for(var t=n.length;t--;)if(n[t].uniqueId===e.uniqueId){n.splice(t,1);break}};return{selectPlayer:o,registerPlugin:t.registerPlugin}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(46),n(64),n(65),n(67),n(48),n(76),n(45),n(77),n(156),n(157),n(158),n(52)],o=function(e,t,n,i,o,r,s,a,l,c,u,d){function A(e){o.addClass(e,"jw-tab-focus")}function p(e){o.removeClass(e,"jw-tab-focus")}var w=function(w,f){var g,h=this,m=!1,j={};s.extend(this,i),this.utils=o,this._=s,this.version=d,this.trigger=function(e,t){return t=s.isObject(t)?s.extend({},t):{},t.type=e,i.trigger.call(h,e,t)},this.on=function(e,t){if(s.isString(t))throw new TypeError("eval callbacks depricated");var n=function(){try{t.apply(this,arguments)}catch(n){o.log('There was an error calling back an event handler for "'+e+'". Error: '+n.message)}};return i.on.call(h,e,n)},this.dispatchEvent=this.trigger,this.removeEventListener=this.off.bind(this);var v=function(){g&&(g.off(),g.reset()),g=new a(w),l(h,g),c(h,g),g.on(t.JWPLAYER_PLAYLIST_ITEM,function(){j={}}),g.on(t.JWPLAYER_MEDIA_META,function(e){s.extend(j,e.metadata)}),g.on(t.JWPLAYER_VIEW_TAB_FOCUS,function(e){e.hasFocus===!0?A(this.getContainer()):p(this.getContainer())}),g.on(t.JWPLAYER_READY,function(e){m=!0,b.tick("ready"),e.setupTime=b.between("setup","ready")}),g.on("all",h.trigger)};v(),u(this),this.id=w.id;var b=this._qoe=new r;b.tick("init");var k=function(){m=!1,j={},h.off(),v()},E=function(e){var t=h.plugins;return t&&t[e]};return this.setup=function(t){b.tick("setup"),k(),o.foreach(t.events,function(e,t){var n=h[e];"function"==typeof n&&n.call(h,t)});var n=new e(t);return n.id=h.id,g.setup(n,this),h},this.qoe=function(){var e=g.getItemQoe(),n=b.between("setup","ready"),i=e.between(t.JWPLAYER_MEDIA_PLAY_ATTEMPT,t.JWPLAYER_MEDIA_FIRST_FRAME);return{setupTime:n,firstFrame:i,player:b.dump(),item:e.dump()}},this.getContainer=function(){return g.getContainer?g.getContainer():w},this.getMeta=this.getItemMeta=function(){return j},this.getPlaylistItem=function(e){return o.exists(e)||(e=h.getPlaylistIndex()),h.getPlaylist()[e]},this.getRenderingMode=function(){return"html5"},this.load=function(e){var t=E("vast")||E("googima");return t&&t.destroy(),g.load(e),h},this.play=function(e){if(void 0!==e)return g.play(e),h;e=h.getState();var t=g._instreamAdapter,i=t&&t.getState();if(i){switch(i){case n.IDLE:case n.PLAYING:case n.BUFFERING:t.pause();break;default:t.play()}return h}switch(e){case n.PLAYING:case n.BUFFERING:g.pause();break;default:g.play()}return h},this.pause=function(e){if(void 0===e)switch(e=h.getState()){case n.PLAYING:case n.BUFFERING:g.pause();break;default:g.play()}else g.pause(e);return h},this.createInstream=function(){return g.createInstream()},this.playAd=this.pauseAd=s.noop,this.remove=function(){return f(h),g.playerDestroy&&g.playerDestroy(),h.trigger("remove"),k(),h},this};return w}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[],o=function(){var e={},t=Array.prototype,n=Object.prototype,i=Function.prototype,o=t.slice,r=t.concat,s=n.toString,a=n.hasOwnProperty,l=t.map,c=t.forEach,u=t.filter,d=t.every,A=t.some,p=t.indexOf,w=Array.isArray,f=Object.keys,g=i.bind,h=function(e){return e instanceof h?e:this instanceof h?void 0:new h(e)},m=h.each=h.forEach=function(t,n,i){if(null==t)return t;if(c&&t.forEach===c)t.forEach(n,i);else if(t.length===+t.length){for(var o=0,r=t.length;r>o;o++)if(n.call(i,t[o],o,t)===e)return}else for(var s=h.keys(t),o=0,r=s.length;r>o;o++)if(n.call(i,t[s[o]],s[o],t)===e)return;return t};h.map=h.collect=function(e,t,n){var i=[];return null==e?i:l&&e.map===l?e.map(t,n):(m(e,function(e,o,r){i.push(t.call(n,e,o,r))}),i)},h.find=h.detect=function(e,t,n){var i;return j(e,function(e,o,r){return t.call(n,e,o,r)?(i=e,!0):void 0}),i},h.filter=h.select=function(e,t,n){var i=[];return null==e?i:u&&e.filter===u?e.filter(t,n):(m(e,function(e,o,r){t.call(n,e,o,r)&&i.push(e)}),i)},h.reject=function(e,t,n){return h.filter(e,function(e,i,o){return!t.call(n,e,i,o)},n)},h.compact=function(e){return h.filter(e,h.identity)},h.every=h.all=function(t,n,i){n||(n=h.identity);var o=!0;return null==t?o:d&&t.every===d?t.every(n,i):(m(t,function(t,r,s){return(o=o&&n.call(i,t,r,s))?void 0:e}),!!o)};var j=h.some=h.any=function(t,n,i){n||(n=h.identity);var o=!1;return null==t?o:A&&t.some===A?t.some(n,i):(m(t,function(t,r,s){return o||(o=n.call(i,t,r,s))?e:void 0}),!!o)};h.size=function(e){return null==e?0:e.length===+e.length?e.length:h.keys(e).length},h.after=function(e,t){return function(){return--e<1?t.apply(this,arguments):void 0}},h.before=function(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),1>=e&&(t=null),n}};var v=function(e){return null==e?h.identity:h.isFunction(e)?e:h.property(e)};h.sortedIndex=function(e,t,n,i){n=v(n);for(var o=n.call(i,t),r=0,s=e.length;s>r;){var a=r+s>>>1;n.call(i,e[a])<o?r=a+1:s=a}return r};var j=h.some=h.any=function(t,n,i){n||(n=h.identity);var o=!1;return null==t?o:A&&t.some===A?t.some(n,i):(m(t,function(t,r,s){return o||(o=n.call(i,t,r,s))?e:void 0}),!!o)};h.contains=h.include=function(e,t){return null==e?!1:(e.length!==+e.length&&(e=h.values(e)),h.indexOf(e,t)>=0)},h.where=function(e,t){return h.filter(e,h.matches(t))},h.findWhere=function(e,t){return h.find(e,h.matches(t))},h.max=function(e,t,n){if(!t&&h.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);var i=-(1/0),o=-(1/0);return m(e,function(e,r,s){var a=t?t.call(n,e,r,s):e;a>o&&(i=e,o=a)}),i},h.difference=function(e){var n=r.apply(t,o.call(arguments,1));return h.filter(e,function(e){return!h.contains(n,e)})},h.without=function(e){return h.difference(e,o.call(arguments,1))},h.indexOf=function(e,t,n){if(null==e)return-1;var i=0,o=e.length;if(n){if("number"!=typeof n)return i=h.sortedIndex(e,t),e[i]===t?i:-1;i=0>n?Math.max(0,o+n):n}if(p&&e.indexOf===p)return e.indexOf(t,n);for(;o>i;i++)if(e[i]===t)return i;return-1};var b=function(){};h.bind=function(e,t){var n,i;if(g&&e.bind===g)return g.apply(e,o.call(arguments,1));if(!h.isFunction(e))throw new TypeError;return n=o.call(arguments,2),i=function(){if(!(this instanceof i))return e.apply(t,n.concat(o.call(arguments)));b.prototype=e.prototype;var r=new b;b.prototype=null;var s=e.apply(r,n.concat(o.call(arguments)));return Object(s)===s?s:r}},h.partial=function(e){var t=o.call(arguments,1);return function(){for(var n=0,i=t.slice(),o=0,r=i.length;r>o;o++)i[o]===h&&(i[o]=arguments[n++]);for(;n<arguments.length;)i.push(arguments[n++]);return e.apply(this,i)}},h.once=h.partial(h.before,2),h.memoize=function(e,t){var n={};return t||(t=h.identity),function(){var i=t.apply(this,arguments);return h.has(n,i)?n[i]:n[i]=e.apply(this,arguments)}},h.delay=function(e,t){var n=o.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},h.defer=function(e){return h.delay.apply(h,[e,1].concat(o.call(arguments,1)))},h.throttle=function(e,t,n){var i,o,r,s=null,a=0;n||(n={});var l=function(){a=n.leading===!1?0:h.now(),s=null,r=e.apply(i,o),i=o=null};return function(){var c=h.now();a||n.leading!==!1||(a=c);var u=t-(c-a);return i=this,o=arguments,0>=u?(clearTimeout(s),s=null,a=c,r=e.apply(i,o),i=o=null):s||n.trailing===!1||(s=setTimeout(l,u)),r}},h.keys=function(e){if(!h.isObject(e))return[];if(f)return f(e);var t=[];for(var n in e)h.has(e,n)&&t.push(n);return t},h.invert=function(e){for(var t={},n=h.keys(e),i=0,o=n.length;o>i;i++)t[e[n[i]]]=n[i];return t},h.defaults=function(e){return m(o.call(arguments,1),function(t){if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n])}),e},h.extend=function(e){return m(o.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},h.pick=function(e){var n={},i=r.apply(t,o.call(arguments,1));return m(i,function(t){t in e&&(n[t]=e[t])}),n},h.clone=function(e){return h.isObject(e)?h.isArray(e)?e.slice():h.extend({},e):e},h.isArray=w||function(e){return"[object Array]"==s.call(e)},h.isObject=function(e){return e===Object(e)},m(["Arguments","Function","String","Number","Date","RegExp"],function(e){h["is"+e]=function(t){return s.call(t)=="[object "+e+"]"}}),h.isArguments(arguments)||(h.isArguments=function(e){return!(!e||!h.has(e,"callee"))}),h.isFunction=function(e){return"function"==typeof e},h.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},h.isNaN=function(e){return h.isNumber(e)&&e!=+e},h.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==s.call(e)},h.isNull=function(e){return null===e},h.isUndefined=function(e){return void 0===e},h.has=function(e,t){return a.call(e,t)},h.identity=function(e){return e},h.constant=function(e){return function(){return e}},h.property=function(e){return function(t){return t[e]}},h.propertyOf=function(e){return null==e?function(){}:function(t){return e[t]}},h.matches=function(e){return function(t){if(t===e)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0}},h.now=Date.now||function(){return(new Date).getTime()},h.result=function(e,t){if(null==e)return void 0;var n=e[t];return h.isFunction(n)?n.call(e):n};var k=0;return h.uniqueId=function(e){var t=++k+"";return e?e+t:t},h}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(47),n(54),n(48),n(45)],o=function(e,t,n,i){var o=function(o){var r=window.jwplayer||{},s=/\.(js|swf)$/,a=i.extend({},r.defaults),l=new t(i.extend({},a,o)),c=l.plugins||{},u=l.analytics,d=n.repo(),A=d+"jwpsrv.js",p=d+"sharing.js",w=d+"related.js",f=d+"gapro.js",g=l.key||r.key||a.key,h=new e(g),m=h.edition();return l.plugins=c,l.key=g,"ads"===m&&l.advertising&&(s.test(l.advertising.client)?c[l.advertising.client]=l.advertising:c[d+l.advertising.client+".js"]=l.advertising),delete l.advertising,l.analytics&&s.test(l.analytics.client)&&(A=l.analytics.client),delete l.analytics,c[A]=u?u:{},delete c.sharing,delete c.related,l.ga&&(s.test(l.ga.client)&&(f=l.ga.client),c[f]=l.ga),l.sharing&&(s.test(l.sharing.client)&&(p=l.sharing.client),c[p]=l.sharing),l.related&&(s.test(l.related.client)&&(w=l.related.client),c[w]=l.related),l};return o}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(48),n(53)],o=function(e,t){function n(e){return t.decrypt(e,o)}var i="invalid",o="RnXcsftYjWRDA^Uy",r=function(t){function o(t){e.exists(t)||(t="");try{t=n(t);var o=t.split("/");if(r=o[0],"pro"===r&&(r="premium"),o.length>2&&/^(free|pro|premium|enterprise|ads)/i.test(r)){s=o[1];var l=parseInt(o[2]);l>0&&(a=new Date,a.setTime(l))}else r=i}catch(c){r=i}}var r,s,a;this.edition=function(){return a&&a.getTime()<(new Date).getTime()?i:r},this.token=function(){return s},this.expiration=function(){return a},o(t)};return r}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(49),n(50),n(45),n(51),n(52)],o=function(e,t,n,i,o){function r(e){return/^(?:(?:https?|file)\:)?\/\//.test(e)}function s(e){return function(){return p(e)}}function a(e){return e&&e.indexOf("://")>=0&&e.split("/")[2]!==window.location.href.split("/")[2]}function l(e,t,n){return function(){e("Error loading file",t,n)}}function c(e,t,n,i,o){return function(){if(4===e.readyState)switch(e.status){case 200:u(e,t,n,i,o)();break;case 404:i("File not found",t,e)}}}function u(e,t,i,o,r){return function(){var s,a;if(r)i(e);else{try{if(s=e.responseXML,s&&(a=s.firstChild,s.lastChild&&"parsererror"===s.lastChild.nodeName))return void(o&&o("Invalid XML",t,e))}catch(l){}if(s&&a)return i(e);var c=b(e.responseText);if(!c||!c.firstChild)return void(o&&o(e.responseText?"Invalid XML":t,t,e));e=n.extend({},e,{responseXML:c}),i(e)}}}var d={},A=d.exists=function(e){switch(typeof e){case"string":return e.length>0;case"object":return null!==e;case"undefined":return!1}return!0};d.createElement=function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstChild},d.styleDimension=function(e){return e+(e.toString().indexOf("%")>0?"":"px")},d.getAbsolutePath=function(e,t){if(A(t)||(t=document.location.href),A(e)){if(r(e))return e;var n,i=t.substring(0,t.indexOf("://")+3),o=t.substring(i.length,t.indexOf("/",i.length+1));if(0===e.indexOf("/"))n=e.split("/");else{var s=t.split("?")[0];s=s.substring(i.length+o.length+1,s.lastIndexOf("/")),n=s.split("/").concat(e.split("/"))}for(var a=[],l=0;l<n.length;l++)n[l]&&A(n[l])&&"."!==n[l]&&(".."===n[l]?a.pop():a.push(n[l]));return i+o+"/"+a.join("/")}},d.log=function(){window.console&&("object"==typeof console.log?console.log(Array.prototype.slice.call(arguments,0)):console.log.apply(console,arguments))};var p=n.memoize(function(e){var t=navigator.userAgent.toLowerCase();return null!==t.match(e)});d.isFF=s(/firefox/i),d.isChrome=s(/chrome/i),d.isIPod=s(/iP(hone|od)/i),d.isIPad=s(/iPad/i),d.isSafari602=s(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i);var w=d.isIETrident=function(e){return e?(e=parseFloat(e).toFixed(1),p(new RegExp("trident/.+rv:\\s*"+e,"i"))):p(/trident/i)},f=d.isMSIE=function(e){return e?(e=parseFloat(e).toFixed(1),p(new RegExp("msie\\s*"+e,"i"))):p(/msie/i)};d.isIE=function(e){return e?(e=parseFloat(e).toFixed(1),e>=11?w(e):f(e)):f()||w()},d.isSafari=function(){return p(/safari/i)&&!p(/chrome/i)&&!p(/chromium/i)&&!p(/android/i)};var g=d.isIOS=function(e){return p(e?new RegExp("iP(hone|ad|od).+\\sOS\\s"+e,"i"):/iP(hone|ad|od)/i)};d.isAndroidNative=function(e){return h(e,!0)};var h=d.isAndroid=function(e,t){return t&&p(/chrome\/[123456789]/i)&&!p(/chrome\/18/)?!1:e?(m(e)&&!/\./.test(e)&&(e=""+e+"."),p(new RegExp("Android\\s*"+e,"i"))):p(/Android/i)};d.isMobile=function(){return g()||h()},d.isIframe=function(){return window.frameElement&&"IFRAME"===window.frameElement.nodeName};var m=d.isInt=function(e){return parseFloat(e)%1===0},j=d.typeOf=function(e){if(null===e)return"null";var t=typeof e;return"object"===t&&n.isArray(e)?"array":t};d.flashVersion=function(){if(h())return 0;var e,t=navigator.plugins;if(t&&(e=t["Shockwave Flash"],e&&e.description))return parseFloat(e.description.replace(/\D+(\d+)\..*/,"$1"));if("undefined"!=typeof window.ActiveXObject){var n=d.tryCatch(function(){return e=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"),e?parseFloat(e.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/,".")):void 0});return n instanceof d.Error?0:n}return 0},d.isFlashSupported=function(){var e=d.flashVersion();return e&&e>=11.2},d.getScriptPath=n.memoize(function(e){for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n++){var i=t[n].src;if(i&&i.indexOf(e)>=0)return i.substr(0,i.indexOf(e))}return""}),d.isYouTube=function(e,t){return"youtube"===t||/^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(e)},d.youTubeID=function(e){var t=d.tryCatch(function(){return/v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(e).slice(1).join("").replace("?","")});return t instanceof d.Error?"":t},d.isRtmp=function(e,t){return 0===e.indexOf("rtmp")||"rtmp"===t},d.adaptiveType=function(e){if(-1!==e){var t=-120;if(t>=e)return"DVR";if(0>e||e===1/0)return"LIVE"}return"VOD"},d.foreach=function(e,t){var n,i;for(n in e)"function"===j(e.hasOwnProperty)?e.hasOwnProperty(n)&&(i=e[n],t(n,i)):(i=e[n],t(n,i))};var v=d.isHTTPS=function(){return 0===window.location.href.indexOf("https")};d.repo=function(){var e=o.split("+")[0],t="http://p.jwpcdn.com/player/v/"+e+"/";return v()?t.replace("http://","https://ssl."):t},d.getSkinUrl=function(t){return e.repo+"skins/"+e.skinsVersion+"/"+t+".css"},d.addStyleSheet=function(e){var t=document.createElement("link");t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)},d.versionCheck=function(e){var t=("0"+e).split(/\W/),n=o.split(/\W/),i=parseFloat(t[0]),r=parseFloat(n[0]);return i>r?!1:i===r&&parseFloat("0"+t[1])>parseFloat(n[1])?!1:!0},d.ajax=function(e,t,n,i){var o,r=!1;if(e.indexOf("#")>0&&(e=e.replace(/#.*$/,"")),a(e)&&A(window.XDomainRequest))o=new window.XDomainRequest,o.onload=u(o,e,t,n,i),o.ontimeout=o.onprogress=function(){},o.timeout=5e3;else{if(!A(window.XMLHttpRequest))return n&&n("",e,o),o;o=new window.XMLHttpRequest,o.onreadystatechange=c(o,e,t,n,i)}o.overrideMimeType&&o.overrideMimeType("text/xml"),o.onerror=l(n,e,o);var s=d.tryCatch(function(){o.open("GET",e,!0)});return s instanceof d.Error&&(r=!0),setTimeout(function(){if(r)return void(n&&n(e,e,o));var t=d.tryCatch(function(){o.send()});t instanceof d.Error&&n&&n(e,e,o)},0),o};var b=d.parseXML=function(e){var t=null;return d.tryCatch(function(){if(window.DOMParser){t=(new window.DOMParser).parseFromString(e,"text/xml");var n=t.childNodes;n&&n.length&&n[0].firstChild&&"parsererror"===n[0].firstChild.nodeName&&(t=null)}else t=new window.ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)}),t};d.between=function(e,t,n){return Math.max(Math.min(e,n),t)},d.prefix=function(e,t){return n.map(e,function(e){return t+e})},d.suffix=function(e,t){return n.map(e,function(e){return e+t})},d.seconds=function(e){if(n.isNumber(e))return e;e=e.replace(",",".");var t=e.split(":"),i=0;return"s"===e.slice(-1)?i=parseFloat(e):"m"===e.slice(-1)?i=60*parseFloat(e):"h"===e.slice(-1)?i=3600*parseFloat(e):t.length>1?(i=parseFloat(t[t.length-1]),i+=60*parseFloat(t[t.length-2]),3===t.length&&(i+=3600*parseFloat(t[t.length-3]))):i=parseFloat(e),i},d.serialize=function(e){if(void 0===e)return null;if("string"==typeof e&&e.length<6){var t=e.toLowerCase();if("true"===t)return!0;if("false"===t)return!1;if(!isNaN(Number(e))&&!isNaN(parseFloat(e)))return Number(e)}return e},d.classList=function(e){return e.classList?e.classList:e.className.split(" ")},d.hasClass=i.hasClass,d.addClass=function(e,i){var o=n.isString(e.className)?e.className.split(" "):[],r=n.isArray(i)?i:i.split(" ");n.each(r,function(e){n.contains(o,e)||o.push(e)}),e.className=t.trim(o.join(" "))},d.removeClass=function(e,i){var o=n.isString(e.className)?e.className.split(" "):[],r=n.isArray(i)?i:i.split(" ");e.className=t.trim(n.difference(o,r).join(" "))},d.toggleClass=function(e,t,i){var o=d.hasClass(e,t);i=n.isBoolean(i)?i:!o,i!==o&&(i?d.addClass(e,t):d.removeClass(e,t))},d.emptyElement=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},d.indexOf=n.indexOf,d.noop=function(){},d.parseDimension=function(e){return"string"==typeof e?""===e?0:e.lastIndexOf("%")>-1?e:parseInt(e.replace("px",""),10):e},d.timeFormat=function(e){if(e>0){var t=Math.floor(e/3600),n=Math.floor((e-3600*t)/60),i=Math.floor(e%60);return(t?t+":":"")+(10>n?"0":"")+n+":"+(10>i?"0":"")+i}return"00:00"},d.bounds=function(e){var t={left:0,right:0,width:0,height:0,top:0,bottom:0};if(!e||!document.body.contains(e))return t;if(e.getBoundingClientRect){var n=e.getBoundingClientRect(e),i=window.pageYOffset,o=window.pageXOffset;if(!(n.width||n.height||n.left||n.top))return t;t.left=n.left+o,t.right=n.right+o,t.top=n.top+i,t.bottom=n.bottom+i,t.width=n.right-n.left,t.height=n.bottom-n.top}else{t.width=0|e.offsetWidth,t.height=0|e.offsetHeight;do t.left+=0|e.offsetLeft,t.top+=0|e.offsetTop;while(e=e.offsetParent);t.right=t.left+t.width,t.bottom=t.top+t.height}return t},d.empty=function(e){if(e)for(;e.childElementCount>0;)e.removeChild(e.children[0])};var k=d.Error=function(e,t){this.name=e,this.message=t};return d.tryCatch=function(e,t,n){if(t=t||this,n=n||[],window.jwplayer&&window.jwplayer.debug)return e.apply(t,n);try{return e.apply(t,n)}catch(i){return new k(e.name,i)}},d}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[],o=function(){return{repo:"//p.jwpcdn.com/7/",skinsVersion:"0.1.0",SkinsIncluded:["beelden","bekle","five","glow","roundster","seven","six","stormtrooper","vapor"],SkinsLoadable:[]}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[],o=function(){function e(e){return e.indexOf("(format=m3u8-")>-1?"m3u8":!1}var t=function(e){return e.replace(/^\s+|\s+$/g,"")},n=function(e,t,n){for(n||(n="0");e.length<t;)e=n+e;return e},i=function(e,t){for(var n=0;n<e.attributes.length;n++)if(e.attributes[n].name&&e.attributes[n].name.toLowerCase()===t.toLowerCase())return e.attributes[n].value.toString();return""},o=function(t){if(!t||"rtmp"===t.substr(0,4))return"";var n=e(t);return n?n:(t=t.substring(t.lastIndexOf("/")+1,t.length).split("?")[0].split("#")[0],t.lastIndexOf(".")>-1?t.substr(t.lastIndexOf(".")+1,t.length).toLowerCase():void 0)};return{trim:t,pad:n,xmlAttribute:i,extension:o}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[],o=function(){return{hasClass:function(e,t){var n=" "+t+" ";return 1===e.nodeType&&(" "+e.className+" ").replace(/[\t\r\n\f]/g," ").indexOf(n)>=0}}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[],o=function(){return"7.0.0+commercial_v7-0-0.24.commercial.3e1de5.jwplayer.bb6cf1.analytics.0d93c8.vast.1f89fa.googima.916050.plugins.975a51"}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[],o=function(){var e={};e.encrypt=function(i,o){if(0==i.length)return"";var r=e.strToLongs(n.encode(i));r.length<=1&&(r[1]=0);for(var s,a,l=e.strToLongs(n.encode(o).slice(0,16)),c=r.length,u=r[c-1],d=r[0],A=2654435769,p=Math.floor(6+52/c),w=0;p-->0;){w+=A,a=w>>>2&3;for(var f=0;c>f;f++)d=r[(f+1)%c],s=(u>>>5^d<<2)+(d>>>3^u<<4)^(w^d)+(l[3&f^a]^u),u=r[f]+=s}var g=e.longsToStr(r);return t.encode(g)},e.decrypt=function(i,o){if(0==i.length)return"";for(var r,s,a=e.strToLongs(t.decode(i)),l=e.strToLongs(n.encode(o).slice(0,16)),c=a.length,u=a[c-1],d=a[0],A=2654435769,p=Math.floor(6+52/c),w=p*A;0!=w;){s=w>>>2&3;for(var f=c-1;f>=0;f--)u=a[f>0?f-1:c-1],r=(u>>>5^d<<2)+(d>>>3^u<<4)^(w^d)+(l[3&f^s]^u),d=a[f]-=r;w-=A}var g=e.longsToStr(a);return g=g.replace(/\0+$/,""),n.decode(g)},e.strToLongs=function(e){for(var t=new Array(Math.ceil(e.length/4)),n=0;n<t.length;n++)t[n]=e.charCodeAt(4*n)+(e.charCodeAt(4*n+1)<<8)+(e.charCodeAt(4*n+2)<<16)+(e.charCodeAt(4*n+3)<<24);return t},e.longsToStr=function(e){for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]=String.fromCharCode(255&e[n],e[n]>>>8&255,e[n]>>>16&255,e[n]>>>24&255);return t.join("")};var t={};t.code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t.encode=function(e,i){i="undefined"==typeof i?!1:i;var o,r,s,a,l,c,u,d,A,p,w,f=[],g="",h=t.code;if(p=i?n.encode(e):e,A=p.length%3,A>0)for(;A++<3;)g+="=",p+="\x00";for(A=0;A<p.length;A+=3)o=p.charCodeAt(A),r=p.charCodeAt(A+1),s=p.charCodeAt(A+2),a=o<<16|r<<8|s,l=a>>18&63,c=a>>12&63,u=a>>6&63,d=63&a,f[A/3]=h.charAt(l)+h.charAt(c)+h.charAt(u)+h.charAt(d);return w=f.join(""),w=w.slice(0,w.length-g.length)+g},t.decode=function(e,i){i="undefined"==typeof i?!1:i;var o,r,s,a,l,c,u,d,A,p,w=[],f=t.code;p=i?n.decode(e):e;for(var g=0;g<p.length;g+=4)a=f.indexOf(p.charAt(g)),l=f.indexOf(p.charAt(g+1)),c=f.indexOf(p.charAt(g+2)),u=f.indexOf(p.charAt(g+3)),d=a<<18|l<<12|c<<6|u,o=d>>>16&255,r=d>>>8&255,s=255&d,w[g/4]=String.fromCharCode(o,r,s),64==u&&(w[g/4]=String.fromCharCode(o,r)),64==c&&(w[g/4]=String.fromCharCode(o));return A=w.join(""),i?n.decode(A):A};var n={};return n.encode=function(e){var t=e.replace(/[\u0080-\u07ff]/g,function(e){var t=e.charCodeAt(0);return String.fromCharCode(192|t>>6,128|63&t)});return t=t.replace(/[\u0800-\uffff]/g,function(e){var t=e.charCodeAt(0);return String.fromCharCode(224|t>>12,128|t>>6&63,128|63&t)})},n.decode=function(e){var t=e.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(e){var t=(15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2);return String.fromCharCode(t)});return t=t.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(e){var t=(31&e.charCodeAt(0))<<6|63&e.charCodeAt(1);return String.fromCharCode(t)})},e}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(48),n(55),n(45)],o=function(e,t,n){function i(t){n.each(t,function(n,i){t[i]=e.serialize(n)})}function o(e){return e.slice&&"px"===e.slice(-2)&&(e=e.slice(0,-2)),e}function r(t,n){if(-1===n.toString().indexOf("%"))return 0;if("string"!=typeof t||!e.exists(t))return 0;var i=t.indexOf(":");if(-1===i)return 0;var o=parseFloat(t.substr(0,i)),r=parseFloat(t.substr(i+1));return 0>=o||0>=r?0:r/o*100+"%"}var s={width:480,height:270,cookies:!0},a=function(t){var a=n.extend({},(window.jwplayer||{}).defaults,t);i(a);var l=n.extend({},s,a);return l.width=o(l.width),l.height=o(l.height),l.base=l.base||e.getScriptPath("jwplayer.js"),l.flashplayer=l.flashplayer||l.base+"jwplayer.flash.swf",l.aspectratio=r(l.aspectratio,l.width),n.isObject(l.skin)&&(l.skinUrl=l.skin.url,l.skinColorInactive=l.skin.inactive,l.skinColorActive=l.skin.active,l.skinColorBackground=l.skin.background,l.skin.name?l.skin=l.skin.name:delete l.skin),n.isString(l.skin)&&l.skin.indexOf(".xml")>0&&(console.log("JW Player does not support XML skins, please update your config"),l.skin=l.skin.replace(".xml","")),l.aspectratio||delete l.aspectratio,l.playlist||(l.playlist=n.clone(l)),l};return a}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(56),n(57),n(45),n(59)],o=function(e,t,n,i){function o(e,t){var i=n.map(e,function(e){var n=t.choose(e),i=t.priority(n);return{priority:i,type:e.type}}),o=n.max(i,n.property("priority"));return o.priority>-1?o.type:null}var r=function(t){return t=n.isArray(t)?t:[t],n.compact(n.map(t,e))};r.filterPlaylist=function(e,t,i,o){var r=[];return n.each(e,function(e){e=n.extend({},e),e.sources=s(e.sources,t,i,e.drm||o),e.sources.length&&(e.file=e.sources[0].file,r.push(e))}),r};var s=r.filterSources=function(e,r,s,a){r&&r.choose||(r=new i({primary:r?"flash":null})),e=n.compact(n.map(e,function(e){return n.isObject(e)?(s&&(e.androidhls=s),(e.drm||a)&&(e.drm=e.drm||a),t(e)):void 0}));var l=o(e,r);return n.where(e,{type:l})};return r}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(45),n(57),n(58)],o=function(e,t,n){var i={sources:[],tracks:[]},o=function(o){o=o||{},e.isArray(o.tracks)||delete o.tracks;var r=e.extend({},i,o);e.isObject(r.sources)&&!e.isArray(r.sources)&&(r.sources=[t(r.sources)]),e.isArray(r.sources)&&0!==r.sources.length||(o.levels?r.sources=o.levels:r.sources=[t(o)]);for(var s=0;s<r.sources.length;s++){var a=r.sources[s];if(a){var l=a["default"];l?a["default"]="true"===l.toString():a["default"]=!1,r.sources[s].label||(r.sources[s].label=s.toString()),r.sources[s]=t(r.sources[s])}}return r.sources=e.compact(r.sources),e.isArray(r.tracks)||(r.tracks=[]),e.isArray(r.captions)&&(r.tracks=r.tracks.concat(r.captions),delete r.captions),r.tracks=e.compact(e.map(r.tracks,n)),r};return o}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(48),n(50),n(45)],o=function(e,t,n){var i={"default":!1},o=function(o){if(o&&o.file){var r=n.extend({},i,o);if(r.file=t.trim(""+r.file),r.type&&r.type.indexOf("/")>0&&(r.type=r.type.split("/")[1]),!r.type)if(e.isYouTube(r.file))r.type="youtube";else if(e.isRtmp(r.file))r.type="rtmp";else{var s=t.extension(r.file);r.type=s}if(r.type)return"m3u8"===r.type&&(r.type="hls"),"smil"===r.type&&(r.type="rtmp"),"m4a"===r.type&&(r.type="aac"),n.each(r,function(e,t){""===e&&delete r[t]}),r}};return o}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(48),n(45)],o=function(e,t){var n={kind:"captions","default":!1},i=function(e){return e&&e.file?t.extend({},n,e):void 0};return i}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(60)],o=function(e){return e.prototype.providerSupports=function(e,t){return e.supports(t,this.config.edition)},e}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(61),n(71),n(74),n(45)],o=function(e,t,n,i){function o(n){this.providers=o.defaultList.slice(),this.config=n||{},"flash"===this.config.primary&&r(this.providers,e,t)}function r(e,t,n){var o=i.indexOf(e,t),r=i.indexOf(e,n),s=e[o];e[o]=e[r],e[r]=s}return o.defaultList=[e,t,n],i.extend(o.prototype,{providerSupports:function(e,t){return e.supports(t)},choose:function(e){e=i.isObject(e)?e:{};var t=i.find(this.providers,function(t){return this.providerSupports(t,e)},this);return t},priority:function(e){var t=i.indexOf(this.providers,e);return 0>t?t:this.providers.length-t-1}}),o}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(62),n(48),n(63),n(45),n(64),n(65),n(66),n(69),n(70)],o=function(e,t,n,i,o,r,s,a,l){function c(e,n){t.foreach(e,function(e,t){n.addEventListener(e,t,!1)});var i=k(n,e.stalled);p=setInterval(i,f)}function u(e,n){t.foreach(e,function(e,t){n.removeEventListener(e,t,!1)}),p&&w(p)}function d(e){if("hls"===e.type)if(e.androidhls){var n=t.isAndroidNative;if(n(2)||n(3)||n("4.0"))return!1;if(t.isAndroid())return!0}else if(t.isAndroid())return!1;return null}function A(a,l){function A(e){q.sendEvent("click",e)}function p(){if(ie){var e=ce.duration;V!==e&&(V=e),j&&ee>0&&e>ee&&q.seek(ee),f()}}function f(e){C(e),ie&&(q.state===r.PLAYING&&(H=ce.currentTime,e&&($=!0),q.sendEvent(o.JWPLAYER_MEDIA_TIME,{position:H,duration:V})),q.state===r.STALLED&&q.setState(r.PLAYING))}function k(){q.sendEvent(o.JWPLAYER_MEDIA_META,{duration:ce.duration,height:ce.videoHeight,width:ce.videoWidth})}function E(){ie&&($||($=!0,x()))}function y(){ie&&(E(),ce.muted&&(ce.muted=!1,ce.muted=!0),k())}function C(){$&&ee>0&&!j&&(g?setTimeout(function(){ee>0&&q.seek(ee)},200):q.seek(ee))}function x(){K||(K=!0,q.sendEvent(o.JWPLAYER_MEDIA_BUFFER_FULL))}function L(){ie&&(q.setState(r.PLAYING),q.sendEvent(o.JWPLAYER_PROVIDER_FIRST_FRAME,{}))}function R(){ie&&(re||ce.paused||ce.ended||q.state!==r.LOADING&&(q.seeking||q.setState(r.STALLED)))}function I(){ie&&(t.log("Error playing media: %o %s",ce.error,ce.src||G.file),q.sendEvent(o.JWPLAYER_MEDIA_ERROR,{message:"Error loading media: File could not be played"}))}function B(e){var n;return"array"===t.typeOf(e)&&e.length>0&&(n=i.map(e,function(e,t){return{label:e.label||t}})),n}function M(e){X=e,oe=P(e);var t=B(e);t&&q.sendEvent(o.JWPLAYER_MEDIA_LEVELS,{levels:t,currentQuality:oe})}function P(e){var t=Math.max(0,oe),n=l.qualityLabel;
if(e)for(var i=0;i<e.length;i++)if(e[i]["default"]&&(t=i),n&&e[i].label===n)return i;return t}function D(){return h||m}function T(e,n){G=X[oe],w(te),te=setInterval(F,100),ee=0;var i=ce.src!==G.file;i||D()?(h||q.setState(r.LOADING),$=!1,K=!1,V=n,re=d(G),ce.src=G.file,ce.load()):(0===e&&(ee=-1,q.seek(e)),k(),ce.play()),H=ce.currentTime,h&&x(),t.isIOS()&&q.getFullScreen()&&(ce.controls=!0),e>0&&q.seek(e)}function _(){q.seeking=!1,q.sendEvent(o.JWPLAYER_MEDIA_SEEKED)}function S(){q.sendEvent("volume",{volume:Math.round(100*ce.volume)}),q.sendEvent("mute",{mute:ce.muted})}function F(){if(ie){var e=Y();e>=1&&w(te),e!==ne&&(ne=e,q.sendEvent(o.JWPLAYER_MEDIA_BUFFER,{bufferPercent:Math.round(100*ne)}))}}function Y(){var e=ce.buffered;return e&&ce.duration&&0!==e.length?e.end(e.length-1)/ce.duration:0}function Q(){if(ie&&q.state!==r.IDLE&&q.state!==r.COMPLETE){if(w(te),oe=-1,se=!0,q.sendEvent(o.JWPLAYER_MEDIA_BEFORECOMPLETE),!ie)return;N()}}function N(){q.setState(r.COMPLETE),se=!1,q.sendEvent(o.JWPLAYER_MEDIA_COMPLETE)}function O(e){ae=!0,U(e),t.isIOS()&&(ce.controls=!1)}function J(e){ae=!1,U(e),t.isIOS()&&(ce.controls=!1)}function U(e){q.sendEvent("fullscreenchange",{target:e.target,jwstate:ae})}this.state=r.IDLE,this.seeking=!1;var W=new s("provider."+b);i.extend(this,W);var z,G,V,H,K,X,q=this,Z={click:A,durationchange:p,ended:Q,error:I,loadedmetadata:y,canplay:E,playing:L,progress:C,seeked:_,stalled:R,timeupdate:f,volumechange:S,waiting:R,webkitbeginfullscreen:O,webkitendfullscreen:J},$=!1,ee=0,te=-1,ne=-1,ie=!0,oe=-1,re=null,se=!1,ae=!1;this.sendEvent=function(){ie&&W.sendEvent.apply(this,arguments)};var le=document.getElementById(a),ce=le?le.querySelector("video"):void 0;ce=ce||document.createElement("video"),ce.className="jw-video jw-reset",c(Z,ce),v||(ce.controls=!0,ce.controls=!1),ce.setAttribute("x-webkit-airplay","allow"),ce.setAttribute("webkit-playsinline",""),this.stop=function(){ie&&(w(te),ce.removeAttribute("src"),g||ce.load(),oe=-1,this.setState(r.IDLE))},this.destroy=function(){u(Z,ce),this.remove()},this.load=function(e){ie&&(M(e.sources),T(e.starttime||0,e.duration||0))},this.play=function(){return q.seeking?(q.setState(r.LOADING),void q.once(o.JWPLAYER_MEDIA_SEEKED,q.play)):void ce.play()},this.pause=function(){ce.pause(),this.setState(r.PAUSED)},this.seek=function(e){if(ie)if(0===ee&&this.sendEvent(o.JWPLAYER_MEDIA_SEEK,{position:ce.currentTime,offset:e}),$){ee=0;var n=t.tryCatch(function(){q.seeking=!0,ce.currentTime=e});n instanceof t.Error&&(ee=e)}else ee=e},this.volume=function(e){ce.volume=Math.min(Math.max(0,e/100),1)},this.mute=function(e){ce.muted=!!e},this.checkComplete=function(){return se},this.detachMedia=function(){return w(te),ie=!1,ce},this.attachMedia=function(e){ie=!0,e||($=!1),se&&N()},this.setContainer=function(e){z=e,e.appendChild(ce)},this.getContainer=function(){return z},this.remove=function(){ce&&(ce.removeAttribute("src"),g||ce.load()),w(te),oe=-1,z===ce.parentNode&&z.removeChild(ce)},this.setVisibility=function(t){t=!!t,t||j?e.style(z,{visibility:"visible",opacity:1}):e.style(z,{visibility:"",opacity:0})},this.resize=function(e,t,i){return n.stretch(i,ce,e,t,ce.videoWidth,ce.videoHeight)},this.setControls=function(e){ce.controls=!!e},this.supportsFullscreen=i.constant(!0),this.setFullscreen=function(e){if(e=!!e){var n=t.tryCatch(function(){var e=ce.webkitEnterFullscreen||ce.webkitEnterFullScreen;e&&e.apply(ce)});return n instanceof t.Error?!1:q.getFullScreen()}var i=ce.webkitExitFullscreen||ce.webkitExitFullScreen;return i&&i.apply(ce),e},q.getFullScreen=function(){return ae||!!ce.webkitDisplayingFullscreen},this.isAudioFile=function(){if(!X)return!1;var e=X[0].type;return"oga"===e||"aac"===e||"mp3"===e||"mpeg"===e||"vorbis"===e},this.setCurrentQuality=function(e){if(oe!==e&&(e=parseInt(e,10),e>=0&&X&&X.length>e)){oe=e,this.sendEvent(o.JWPLAYER_MEDIA_LEVEL_CHANGED,{currentQuality:e,levels:B(X)});var t=ce.currentTime||0,n=ce.duration;0>=n&&(n=V),T(t,n||0)}},this.getCurrentQuality=function(){return oe},this.getQualityLevels=function(){return B(X)},this.getName=function(){return{name:b}}}var p,w=window.clearInterval,f=256,g=t.isMSIE(),h=t.isMobile(),m=t.isSafari(),j=t.isAndroidNative(),v=t.isIOS(7),b="html5",k=function(e,t){var n=-1;return function(){e.currentTime===n&&t(),n=e.currentTime}},E={aac:"audio/mp4",mp4:"video/mp4",f4v:"video/mp4",m4v:"video/mp4",mov:"video/mp4",mp3:"audio/mpeg",mpeg:"audio/mpeg",ogv:"video/ogg",ogg:"video/ogg",oga:"video/ogg",vorbis:"video/ogg",webm:"video/webm",f4a:"video/aac",m3u8:"application/vnd.apple.mpegurl",m3u:"application/vnd.apple.mpegurl",hls:"application/vnd.apple.mpegurl"},y=function(){};return y.prototype=a,A.prototype=new y,A.supports=function(e){var n=e.file,i=e.type,o=d(e);if(null!==o)return o;if(t.isRtmp(n,i))return!1;if(!E[i])return!1;if(l.canPlayType){var r=l.canPlayType(E[i]);return!!r}return!1},A}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(48),n(50),n(45)],o=function(e,t,n){function i(e){var t=document.createElement("style");return e&&t.appendChild(document.createTextNode(e)),t.type="text/css",document.getElementsByTagName("head")[0].appendChild(t),t}function o(e,t,n){var i,o,r=!1;for(i in t)o=a(i,t[i],n),""!==o?o!==e[i]&&(e[i]=o,r=!0):void 0!==e[i]&&(delete e[i],r=!0);return r}function r(e,t){for(var n in t)e[n]=a(n,t[n])}function s(e){e=e.split("-");for(var t=1;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return e.join("")}function a(e,n,i){if(!j(n))return"";var o=i?" !important":"";return"string"==typeof n&&isNaN(n)?/png|gif|jpe?g/i.test(n)&&n.indexOf("url")<0?"url("+n+")":n+o:0===n||"z-index"===e||"opacity"===e?""+n+o:/color/i.test(e)?"#"+t.pad(n.toString(16).replace(/^0x/i,""),6)+o:Math.ceil(n)+"px"+o}function l(e,t){for(var n=0;n<e.length;n++){var i,o,r=e[n];if(void 0!==r&&null!==r)for(i in t)o=s(i),r.style[o]!==t[i]&&(r.style[o]=t[i])}}function c(e){var t,n,i,o=w[e].sheet;if(o){if(t=o.cssRules,n=h[e],i=d(e),void 0!==n&&n<t.length&&t[n].selectorText===e){if(i===t[n].cssText)return;o.deleteRule(n)}else n=t.length,h[e]=n;u(o,i,n)}}function u(t,n,i){e.tryCatch(function(){t.insertRule(n,i)})}function d(e){var t=f[e];e+=" { ";for(var n in t)e+=n+": "+t[n]+"; ";return e+"}"}var A,p=5e4,w={},f={},g=null,h={},m=!1,j=function(e){switch(typeof e){case"string":return e.length>0;case"object":return null!==e;case"undefined":return!1}return!0},v=function(e,t){var n=w.keyframes;n||(n=i(),w.keyframes=n);var o=n.sheet,r="@keyframes "+e+" { "+t+" }";u(o,r,o.cssRules.length),u(o,r.replace(/(keyframes|transform)/g,"-webkit-$1"),o.cssRules.length)},b=function(e,t,n){if(n=n||!1,f[e]||(f[e]={}),o(f[e],t,n)){if(m)return w[e]&&w[e].parentNode.removeChild(w[e]),void(w[e]=i(d(e)));if(!w[e]){var r=A&&A.sheet&&A.sheet.cssRules&&A.sheet.cssRules.length||0;(!A||r>p)&&(A=i()),w[e]=A}return null!==g?void(g.styleSheets[e]=f[e]):void c(e)}},k=function(e,t,i){if(void 0!==e&&null!==e){void 0===e.length&&(e=[e]);var o={};return r(o,t),null===g||i?void l(e,o):(e.__cssRules||(e.__cssRules={}),n.extend(e.__cssRules,o),void(n.indexOf(g.elements,e)<0&&g.elements.push(e)))}},E=function(e){null===g&&(g={id:e,styleSheets:{},elements:[]})},y=function(e){if(g&&(!e||g.id===e)){for(var t in g.styleSheets)c(t);for(var n=0;n<g.elements.length;n++){var i=g.elements[n];l(i,i.__cssRules)}g=null}},C=function(e){for(var t in f)t.indexOf(e)>=0&&delete f[t];for(var n in w)n.indexOf(e)>=0&&c(n)},x=function(e,t){var n="transform",i={};t=t||"",i[n]=t,i["-webkit-"+n]=t,i["-ms-"+n]=t,i["-moz-"+n]=t,i["-o-"+n]=t,"string"==typeof e?b(e,i):k(e,i)},L=function(e,t){b(e,{"-webkit-user-select":t,"-moz-user-select":t,"-ms-user-select":t,"-webkit-user-drag":t,"user-select":t,"user-drag":t})},R=function(e,t){navigator.userAgent.match(/5\.\d(\.\d)? safari/i)||b(e,{"-webkit-transition":t,"-moz-transition":t,"-o-transition":t,transition:t})},I=function(e,t){x(e,"rotate("+t+"deg)")},B=function(e){var t=String(e).replace("#","");return 3===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),"#"+t.substr(-6)},M=function(e,t){var n="rgb",i=[parseInt(e.substr(1,2),16),parseInt(e.substr(3,2),16),parseInt(e.substr(5,2),16)];return void 0!==t&&100!==t&&(n+="a",i.push(t/100)),n+"("+i.join(",")+")"};return e.style=k,{cssKeyframes:v,css:b,style:k,block:E,unblock:y,clearCss:C,transform:x,dragStyle:L,transitionStyle:R,rotate:I,rgbHex:B,hexToRgba:M}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(45),n(48),n(62)],o=function(e,t,n){var i={NONE:"none",FILL:"fill",UNIFORM:"uniform",EXACTFIT:"exactfit"},o=function(e,t,i,o,r){var s="";t=t||1,i=i||1,o=0|o,r=0|r,(1!==t||1!==i)&&(s="scale("+t+", "+i+")"),(o||r)&&(s&&(s+=" "),s="translate("+o+"px, "+r+"px)"),n.transform(e,s)},r=o,s=function(o,s,a,l,c,u){if(!s)return!1;if(!(a&&l&&c&&u))return!1;o=o||i.UNIFORM;var d=2*Math.ceil(a/2)/c,A=2*Math.ceil(l/2)/u,p="video"===s.tagName.toLowerCase(),w=!1,f="jw-stretch-"+o.toLowerCase(),g=!1;switch(o.toLowerCase()){case i.FILL:d>A?A=d:d=A,w=!0;break;case i.NONE:d=A=1;case i.EXACTFIT:w=!0;break;case i.UNIFORM:default:d>A?(c*A/a>.95?(w=!0,f="jw-stretch-exactfit"):(c*=A,u*=A),g=!0):(u*d/l>.95?(w=!0,f="jw-stretch-exactfit"):(c*=d,u*=d),g=!1),w&&(d=2*Math.ceil(a/2)/c,A=2*Math.ceil(l/2)/u)}if(p){var h={left:"",right:"",width:"",height:""};if(w?(c>a&&(h.left=h.right=Math.ceil((a-c)/2)),u>l&&(h.top=h.bottom=Math.ceil((l-u)/2)),h.width=c,h.height=u,r(s,d,A,0,0)):(w=!1,n.transform(s)),t.isIOS(8)&&w===!1){var m={width:"auto",height:"auto"};o.toLowerCase()===i.UNIFORM&&(m[g===!1?"width":"height"]="100%"),e.extend(h,m)}n.style(s,h)}else s.className=s.className.replace(/\s*jw\-stretch\-(none|exactfit|uniform|fill)/g,"")+" "+f;return w};return{scale:o,stretching:i,stretch:s}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[],o=function(){var e={DRAG:"drag",DRAG_START:"dragStart",DRAG_END:"dragEnd",CLICK:"click",DOUBLE_CLICK:"doubleClick",TAP:"tap",DOUBLE_TAP:"doubleTap"},t={COMPLETE:"complete",ERROR:"error",JWPLAYER_AD_CLICK:"adClick",JWPLAYER_AD_COMPANIONS:"adCompanions",JWPLAYER_AD_COMPLETE:"adComplete",JWPLAYER_AD_ERROR:"adError",JWPLAYER_AD_IMPRESSION:"adImpression",JWPLAYER_AD_META:"adMeta",JWPLAYER_AD_PAUSE:"adPause",JWPLAYER_AD_PLAY:"adPlay",JWPLAYER_AD_SKIPPED:"adSkipped",JWPLAYER_AD_TIME:"adTime",JWPLAYER_CAST_AD_CHANGED:"castAdChanged",JWPLAYER_MEDIA_COMPLETE:"complete",JWPLAYER_READY:"ready",JWPLAYER_MEDIA_SEEK:"seek",JWPLAYER_MEDIA_BEFOREPLAY:"beforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"beforeComplete",JWPLAYER_MEDIA_BUFFER_FULL:"bufferFull",JWPLAYER_DISPLAY_CLICK:"displayClick",JWPLAYER_PLAYLIST_COMPLETE:"playlistComplete",JWPLAYER_CAST_SESSION:"cast",JWPLAYER_MEDIA_ERROR:"mediaError",JWPLAYER_MEDIA_FIRST_FRAME:"firstFrame",JWPLAYER_MEDIA_PLAY_ATTEMPT:"playAttempt",JWPLAYER_MEDIA_LOADED:"loaded",JWPLAYER_MEDIA_SEEKED:"seeked",JWPLAYER_SETUP_ERROR:"setupError",JWPLAYER_ERROR:"error",JWPLAYER_PLAYER_STATE:"state",JWPLAYER_CAST_AVAILABLE:"castAvailable",JWPLAYER_MEDIA_BUFFER:"bufferChange",JWPLAYER_MEDIA_TIME:"time",JWPLAYER_MEDIA_VOLUME:"volume",JWPLAYER_MEDIA_MUTE:"mute",JWPLAYER_MEDIA_META:"meta",JWPLAYER_MEDIA_LEVELS:"levels",JWPLAYER_MEDIA_LEVEL_CHANGED:"levelsChanged",JWPLAYER_CONTROLS:"controls",JWPLAYER_FULLSCREEN:"fullscreen",JWPLAYER_RESIZE:"resize",JWPLAYER_PLAYLIST_ITEM:"playlistItem",JWPLAYER_PLAYLIST_LOADED:"playlist",JWPLAYER_AUDIO_TRACKS:"audioTracks",JWPLAYER_AUDIO_TRACK_CHANGED:"audioTrackChanged",JWPLAYER_LOGO_CLICK:"logoClick",JWPLAYER_CAPTIONS_LIST:"captionsList",JWPLAYER_CAPTIONS_CHANGED:"captionsChanged",JWPLAYER_PROVIDER_CHANGED:"providerChanged",JWPLAYER_PROVIDER_FIRST_FRAME:"providerFirstFrame",JWPLAYER_USER_ACTION:"userAction",JWPLAYER_PROVIDER_CLICK:"providerClick",JWPLAYER_VIEW_TAB_FOCUS:"tabFocus",JWPLAYER_CONTROLBAR_DRAGGING:"scrubbing",JWPLAYER_INSTREAM_CLICK:"instreamClick"};return t.touchEvents=e,t}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[],o=function(){return{BUFFERING:"buffering",IDLE:"idle",COMPLETE:"complete",PAUSED:"paused",PLAYING:"playing",ERROR:"error",LOADING:"loading",STALLED:"stalled"}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(67),n(45),n(68)],o=function(e,t){var n="GLOBAL_EVENT",i=function(i){var o=t.extend({},e);this.resetEventListeners=this.removeEventListener=o.off.bind(o),this.on=o.on.bind(o),this.once=o.once.bind(o),this.off=o.off.bind(o),this.addEventListener=function(e,n){return t.isString(n)&&console.log("Error, please fix this callback",i,e,n),o.on(e,n)},this.addGlobalListener=function(e){return this.addEventListener(n,e)},this.removeGlobalListener=function(e){return this.removeEventListener(n,e)},this.sendEvent=function(e,i,r){i=t.extend({},i,{type:e}),o.trigger(n,i,r),o.trigger(e,i,r)}};return i}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(45)],o=function(e){var t=[],n=t.slice,i={on:function(e,t,n){if(!r(this,"on",e,[t,n])||!t)return this;this._events||(this._events={});var i=this._events[e]||(this._events[e]=[]);return i.push({callback:t,context:n,ctx:n||this}),this},once:function(t,n,i){if(!r(this,"once",t,[n,i])||!n)return this;var o=this,s=e.once(function(){o.off(t,s),n.apply(this,arguments)});return s._callback=n,this.on(t,s,i)},off:function(t,n,i){var o,s,a,l,c,u,d,A;if(!this._events||!r(this,"off",t,[n,i]))return this;if(!t&&!n&&!i)return this._events=void 0,this;for(l=t?[t]:e.keys(this._events),c=0,u=l.length;u>c;c++)if(t=l[c],a=this._events[t]){if(this._events[t]=o=[],n||i)for(d=0,A=a.length;A>d;d++)s=a[d],(n&&n!==s.callback&&n!==s.callback._callback||i&&i!==s.context)&&o.push(s);o.length||delete this._events[t]}return this},trigger:function(e){if(!this._events)return this;var t=n.call(arguments,1);if(!r(this,"trigger",e,t))return this;var i=this._events[e],o=this._events.all;return i&&s(i,t),o&&s(o,arguments),this}},o=/\s+/,r=function(e,t,n,i){if(!n)return!0;if("object"==typeof n){for(var r in n)e[t].apply(e,[r,n[r]].concat(i));return!1}if(o.test(n)){for(var s=n.split(o),a=0,l=s.length;l>a;a++)e[t].apply(e,[s[a]].concat(i));return!1}return!0},s=function(e,t){var n,i=-1,o=e.length,r=t[0],s=t[1],a=t[2];switch(t.length){case 0:for(;++i<o;)(n=e[i]).callback.call(n.ctx);return;case 1:for(;++i<o;)(n=e[i]).callback.call(n.ctx,r);return;case 2:for(;++i<o;)(n=e[i]).callback.call(n.ctx,r,s);return;case 3:for(;++i<o;)(n=e[i]).callback.call(n.ctx,r,s,a);return;default:for(;++i<o;)(n=e[i]).callback.apply(n.ctx,t);return}};return i}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t){Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("not callable");var t=Array.prototype.slice.call(arguments,1),n=this,i=function(){},o=function(){return n.apply(this instanceof i?this:e,t.concat(Array.prototype.slice.call(arguments)))};return i.prototype=this.prototype,o.prototype=new i,o})},function(e,t,n){var i,o;i=[n(48),n(64),n(65),n(45)],o=function(e,t,n,i){var o=e.noop,r=i.constant(!1),s={supports:r,play:o,load:o,stop:o,volume:o,mute:o,seek:o,resize:o,remove:o,destroy:o,setVisibility:o,setFullscreen:r,getFullscreen:o,getContainer:o,setContainer:r,isAudioFile:r,supportsFullscreen:r,getName:o,getQualityLevels:o,getCurrentQuality:o,setCurrentQuality:o,getAudioTracks:o,getCurrentAudioTrack:o,setCurrentAudioTrack:o,checkComplete:o,setControls:o,attachMedia:o,detachMedia:o,setState:function(e){var i=this.state||n.IDLE;this.state=e,e!==i&&this.sendEvent(t.JWPLAYER_PLAYER_STATE,{newstate:e})}};return s}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[],o=function(){return document.createElement("video")}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(48),n(72),n(45)],o=function(e,t,n){var i=["hls","m3u8"],o=t.supports;return t.supports=function(t,r){if(!e.isFlashSupported())return!1;if(o.apply(this,arguments))return!0;if("ads"===r||"enterprise"===r||"premium"===r){var s=t&&t.type;return n.contains(i,s)}return!1},t}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(48),n(45),n(64),n(65),n(66),n(73),n(69)],o=function(e,t,n,i,o,r,s){function a(e){return e+"_swf_"+c++}function l(l,c){function u(e){if(L)for(var t=0;t<e.length;t++){var n=e[t];if(n.bitrate){var i=Math.round(n.bitrate/1024);n.label=d(i)}}}function d(e){var t=L[e];if(!t){for(var n=1/0,i=L.bitrates.length;i--;){var o=Math.abs(L.bitrates[i]-e);if(o>n)break;n=o}t=L.labels[L.bitrates[i+1]],L[e]=t}return t}function A(){var e=c.hlslabels;if(!e)return null;var t={},n=[];for(var i in e){var o=parseFloat(i);if(!isNaN(o)){var r=Math.round(o);t[r]=e[i],n.push(r)}}return 0===n.length?null:(n.sort(function(e,t){return e-t}),{labels:t,bitrates:n})}var p,w,f,g=null,h=!1,m=-1,j=null,v=-1,b=null,k=!0,E=!1,y=function(){return w&&w.__ready},C=function(){w.triggerFlash.apply(w,arguments)},x=new o("flash.provider"),L=A();t.extend(this,x,{load:function(e){g=e,h=!1,this.setState(i.LOADING),C("load",e)},play:function(){C("play")},pause:function(){C("pause"),this.setState(i.PAUSED)},stop:function(){C("stop"),m=-1,g=null,this.setState(i.IDLE)},seek:function(e){C("seek",e)},volume:function(e){if(t.isNumber(e)){var n=Math.min(Math.max(0,e),100);c.volume=n,y()&&C("volume",n)}},mute:function(t){var n=e.exists(t)?!!t:!c.mute;c.mute=n,y()&&C("mute",n)},setState:function(){return s.setState.apply(this,arguments)},checkComplete:function(){return h},attachMedia:function(){k=!0,h&&(this.setState(i.COMPLETE),this.sendEvent(n.JWPLAYER_MEDIA_COMPLETE),h=!1)},detachMedia:function(){return k=!1,null},getSwfObject:function(e){var t=e.getElementsByTagName("object")[0];return t?(t.off(null,null,this),t):r.embed(c.flashplayer,e,a(l))},getContainer:function(){return p},setContainer:function(o){if(p!==o){p=o,w=this.getSwfObject(o),w.once("ready",function(){w.once("pluginsLoaded",function(){w.queueCommands=!1,C("setupCommandQueue",w.__commandQueue),w.__commandQueue=[]});var e=t.extend({},c);C("setup",e),w.__ready=!0},this);var r=[n.JWPLAYER_MEDIA_META,n.JWPLAYER_MEDIA_ERROR,"subtitlesTracks","subtitlesTrackChanged","subtitlesTrackData"],s=[n.JWPLAYER_MEDIA_BUFFER,n.JWPLAYER_MEDIA_TIME],a=[n.JWPLAYER_MEDIA_BUFFER_FULL];w.on(n.JWPLAYER_MEDIA_LEVELS,function(e){u(e.levels),m=e.currentQuality,j=e.levels,this.sendEvent(e.type,e)},this).on(n.JWPLAYER_MEDIA_LEVEL_CHANGED,function(e){u(e.levels),m=e.currentQuality,j=e.levels,this.sendEvent(e.type,e)},this).on(n.JWPLAYER_AUDIO_TRACKS,function(e){v=e.currentTrack,b=e.tracks,this.sendEvent(e.type,e)},this).on(n.JWPLAYER_AUDIO_TRACK_CHANGED,function(e){v=e.currentTrack,b=e.tracks,this.sendEvent(e.type,e)},this).on(n.JWPLAYER_PLAYER_STATE,function(e){var t=e.newstate;t!==i.IDLE&&this.setState(t)},this).on(s.join(" "),function(e){"Infinity"===e.duration&&(e.duration=1/0),this.sendEvent(e.type,e)},this).on(r.join(" "),function(e){this.sendEvent(e.type,e)},this).on(a.join(" "),function(e){this.sendEvent(e.type)},this).on(n.JWPLAYER_MEDIA_BEFORECOMPLETE,function(e){h=!0,this.sendEvent(e.type),k===!0&&(h=!1)},this).on(n.JWPLAYER_MEDIA_COMPLETE,function(e){h||(this.setState(i.COMPLETE),this.sendEvent(e.type))},this).on(n.JWPLAYER_MEDIA_SEEK,function(e){this.sendEvent(n.JWPLAYER_MEDIA_SEEK,e)},this).on("visualQuality",function(e){e.reason=e.reason||"api",this.sendEvent("visualQuality",e),this.sendEvent(n.JWPLAYER_PROVIDER_FIRST_FRAME,{})},this).on(n.JWPLAYER_PROVIDER_CHANGED,function(e){f=e.message,this.sendEvent(n.JWPLAYER_PROVIDER_CHANGED,e)},this).on(n.JWPLAYER_ERROR,function(t){e.log("Error playing media: %o %s",t.code,t.message,t),this.sendEvent(n.JWPLAYER_MEDIA_ERROR,{message:"Error loading media: File could not be played"})},this)}},remove:function(){m=-1,j=null,r.remove(w)},setVisibility:function(e){e=!!e,p.style.opacity=e?1:0},resize:function(e,t,n){n&&C("stretch",n)},setControls:function(){},setFullscreen:function(e){E=e,C("fullscreen",e)},getFullScreen:function(){return E},isAudioFile:function(){if(g){var e=g.sources[0].type;return"oga"===e||"aac"===e||"mp3"===e||"vorbis"===e}return!1},setCurrentQuality:function(e){C("setCurrentQuality",e)},getCurrentQuality:function(){return m},setSubtitlesTrack:function(e){C("setSubtitlesTrack",e)},getName:function(){return f?{name:"flash_"+f}:{name:"flash"}},getQualityLevels:function(){return j||g.sources},getAudioTracks:function(){return b},getCurrentAudioTrack:function(){return v},setCurrentAudioTrack:function(e){C("setCurrentAudioTrack",e)},supportsFullscreen:t.constant(!0),destroy:function(){this.remove(),w&&(w.off(),w=null),p=null,g=null,x.resetEventListeners(),x=null}}),this.sendEvent=function(){k&&x.sendEvent.apply(this,arguments)}}var c=0,u={flv:"video",f4v:"video",mov:"video",m4a:"video",m4v:"video",mp4:"video",aac:"video",f4a:"video",mp3:"sound",mpeg:"sound",smil:"rtmp"},d=t.keys(u),A=function(){};return A.prototype=s,l.prototype=new A,l.supports=function(n){if(!e.isFlashSupported())return!1;var i=n.file,o=n.type;return e.isRtmp(i,o)?!0:t.contains(d,o)},l}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(48),n(67),n(45)],o=function(e,t,n){function i(e,t,n){var i=document.createElement("param");i.setAttribute("name",t),i.setAttribute("value",n),e.appendChild(i)}function o(o,r,a,l){var c;if(l=l||"opaque",e.isMSIE()){var u=document.createElement("div");r.appendChild(u),u.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="'+a+'" name="'+a+'" tabindex="0"><param name="movie" value="'+o+'"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="wmode" value="'+l+'"><param name="bgcolor" value="'+s+'"><param name="menu" value="false"></object>';for(var d=r.getElementsByTagName("object"),A=d.length;A--;)d[A].id===a&&(c=d[A])}else c=document.createElement("object"),c.setAttribute("type","application/x-shockwave-flash"),c.setAttribute("data",o),c.setAttribute("width","100%"),c.setAttribute("height","100%"),c.setAttribute("bgcolor",s),c.setAttribute("id",a),c.setAttribute("name",a),i(c,"allowfullscreen","true"),i(c,"allowscriptaccess","always"),i(c,"wmode",l),i(c,"menu","false"),r.appendChild(c,r);return c.className="jw-swf jw-reset",c.style.display="block",c.style.position="absolute",c.style.left=0,c.style.right=0,c.style.top=0,c.style.bottom=0,n.extend(c,t),c.queueCommands=!0,c.triggerFlash=function(t){var n=this;if("setup"!==t&&n.queueCommands||!n.__externalCall){for(var i=n.__commandQueue,o=i.length;o--;)i[o][0]===t&&i.splice(o,1);return i.push(Array.prototype.slice.call(arguments)),n}var r=Array.prototype.slice.call(arguments,1),s=e.tryCatch(function(){if(r.length){var e=JSON.stringify(r);n.__externalCall(t,e)}else n.__externalCall(t)});return s instanceof e.Error&&console.error({command:t,error:s}),n},c.__commandQueue=[],c}function r(t){if(t&&t.parentNode){if(t.style.display="none",e.isMSIE(8))for(var n in t)"function"==typeof t[n]&&(t[n]=null);t.parentNode.removeChild(t)}}var s="#000000";return{embed:o,remove:r}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(48),n(62),n(63),n(45),n(64),n(65),n(66),n(75),n(69)],o=function(e,t,n,i,o,r,s,a,l){function c(c,u){function p(){window.YT&&window.YT.loaded?(_=window.YT,g()):setTimeout(p,100)}function w(){d=null}function f(){var e=F&&F.parentNode;return e?e:(Q||(window.jwplayer(c).onReady(g),Q=!0),!1)}function g(){_&&f()&&N&&N.apply(T)}function h(){if(S&&S.getPlayerState){var e=S.getPlayerState();null!==e&&void 0!==e&&e!==U&&x({data:e});var t=_.PlayerState;e===t.PLAYING?j():e===t.BUFFERING&&v()}}function m(e){return Math.round(10*e)/10}function j(){v(),T.sendEvent(o.JWPLAYER_MEDIA_TIME,{position:m(S.getCurrentTime()),duration:S.getDuration()})}function v(){var e=0;S&&S.getVideoLoadedFraction&&(e=Math.round(100*S.getVideoLoadedFraction())),Y!==e&&(Y=e,T.sendEvent(o.JWPLAYER_MEDIA_BUFFER,{bufferPercent:e}))}function b(){T.state!==r.IDLE&&T.state!==r.COMPLETE&&(W=!0,T.sendEvent(o.JWPLAYER_MEDIA_BEFORECOMPLETE),T.setState(r.COMPLETE),W=!1,T.sendEvent(o.JWPLAYER_MEDIA_COMPLETE))}function k(){T.sendEvent(o.JWPLAYER_MEDIA_META,{duration:S.getDuration(),width:F.clientWidth,height:F.clientHeight})}function E(){var e=arguments,t=e.length-1;return function(){for(var n=t,i=e[t].apply(this,arguments);n--;)i=e[n].call(this,i);return i}}function y(e,t){if(!e)throw"invalid Youtube ID";var n=F.parentNode;if(n){var o={height:"100%",width:"100%",videoId:e,playerVars:i.extend({html5:1,autoplay:0,controls:0,showinfo:0,rel:0,modestbranding:0,playsinline:1,origin:location.protocol+"//"+location.hostname},t),events:{onReady:C,onStateChange:x,onPlaybackQualityChange:L,onError:R}};T.setVisibility(!0),S=new _.Player(F,o),F=S.getIframe(),N=null,I()}}function C(){O&&(O.apply(T),O=null)}function x(e){var t=_.PlayerState;switch(U=e.data){case t.UNSTARTED:return;case t.ENDED:return void b();case t.PLAYING:return i.isFunction(S.unloadModule)&&S.unloadModule("captions"),z=!1,k(),T.sendEvent(o.JWPLAYER_MEDIA_LEVELS,{levels:T.getQualityLevels(),currentQuality:T.getCurrentQuality()}),void T.setState(r.PLAYING);case t.PAUSED:return void T.setState(r.PAUSED);case t.BUFFERING:return void(T.seeking?T.setState(r.LOADING):T.setState(r.STALLED));case t.CUED:return void T.setState(r.IDLE)}}function L(){U!==_.PlayerState.ENDED&&T.play(),T.sendEvent(o.JWPLAYER_MEDIA_LEVEL_CHANGED,{currentQuality:T.getCurrentQuality(),levels:T.getQualityLevels()})}function R(){T.sendEvent(o.JWPLAYER_MEDIA_ERROR,{message:"Error loading YouTube: Video could not be played"})}function I(){A&&(T.setVisibility(!0),t.css("#"+c+" .jwcontrols",{display:"none"}))}function B(){t.css("#"+c+" .jwcontrols",{display:""})}function M(){clearInterval(J),S&&S.stopVideo&&e.tryCatch(function(){S.stopVideo(),S.clearVideo()})}function P(t){O=null;var n=t.sources[0].file,i=e.youTubeID(n);if(t.image||(t.image="//i.ytimg.com/vi/"+i+"/0.jpg"),T.volume(u.volume),T.mute(u.mute),T.setVisibility(!0),!_||!S)return N=function(){y(i)},void g();if(!S.getPlayerState){var o=function(){T.load(t)};return void(O=O?E(o,O):o)}var r=S.getVideoData().video_id;if(r!==i){z?(M(),S.cueVideoById(i)):S.loadVideoById(i);var s=S.getPlayerState(),a=_.PlayerState;(s===a.UNSTARTED||s===a.CUED)&&I()}else S.getCurrentTime()>0&&S.seekTo(0),k()}this.state=r.IDLE;var D,T=i.extend(this,new s("provider."+this.name)),_=window.YT,S=null,F=document.createElement("div"),Y=-1,Q=!1,N=null,O=null,J=-1,U=-1,W=!1,z=A;this.setState=function(e){clearInterval(J),e!==r.IDLE&&e!==r.COMPLETE&&(J=setInterval(h,250),e===r.PLAYING?(this.seeking=!1,B()):(e===r.LOADING||e===r.STALLED)&&v()),l.setState.apply(this,arguments)},!_&&d&&d.getStatus()===a.loaderstatus.NEW&&(d.addEventListener(o.COMPLETE,p),d.addEventListener(o.ERROR,w),d.load()),F.id=c+"_youtube",this.init=function(e){P(e)},this.destroy=function(){this.remove(),D=F=_=T=null},this.load=function(e){this.setState(r.LOADING),P(e),T.play()},this.stop=function(){M(),this.setState(r.IDLE)},this.play=function(){z||(S&&S.playVideo?S.playVideo():O=O?E(this.play,O):this.play)},this.pause=function(){z||S.pauseVideo&&S.pauseVideo()},this.seek=function(e){z||S.seekTo&&(this.seeking=!0,S.seekTo(e))},this.volume=function(e){if(i.isNumber(e)){var t=Math.min(Math.max(0,e),100);u.volume=t,S&&S.getVolume&&S.setVolume(t)}},this.mute=function(t){var n=e.exists(t)?!!t:!u.mute;u.mute=n,S&&S.mute&&(n?S.mute():S.unMute())},this.detachMedia=function(){return null},this.attachMedia=function(){W&&(this.setState(r.COMPLETE),this.sendEvent(o.JWPLAYER_MEDIA_COMPLETE),W=!1)},this.setContainer=function(e){D=e,e.appendChild(F),this.setVisibility(!0)},this.getContainer=function(){return D},this.supportsFullscreen=function(){return!(!D||!(D.requestFullscreen||D.requestFullScreen||D.webkitRequestFullscreen||D.webkitRequestFullScreen||D.webkitEnterFullscreen||D.webkitEnterFullScreen||D.mozRequestFullScreen||D.msRequestFullscreen))},this.remove=function(){M(),F&&D&&D===F.parentNode&&D.removeChild(F),N=O=S=null},this.setVisibility=function(e){e=!!e,e?(t.style(F,{display:"block"}),t.style(D,{visibility:"visible",opacity:1})):A||t.style(D,{opacity:0})},this.resize=function(e,t,i){return n.stretch(i,F,e,t,F.clientWidth,F.clientHeight)},this.checkComplete=function(){return W},this.getCurrentQuality=function(){if(!S)return-1;if(S.getAvailableQualityLevels){var e=S.getPlaybackQuality(),t=S.getAvailableQualityLevels();return t.indexOf(e)}return-1},this.getQualityLevels=function(){if(S){if(!i.isFunction(S.getAvailableQualityLevels))return[];var e=S.getAvailableQualityLevels();if(2===e.length&&i.contains(e,"auto"))return{label:i.without(e,"auto")};var t=i.map(e,function(e){return{label:e}});return t.reverse()}},this.setCurrentQuality=function(e){if(S&&S.getAvailableQualityLevels){var t=S.getAvailableQualityLevels();if(t.length){var n=t[t.length-e-1];S.setPlaybackQuality(n)}}},this.getName=function(){return{name:"youtube"}}}function u(t){return e.isYouTube(t.file,t.type)}var d=new a(window.location.protocol+"//www.youtube.com/iframe_api"),A=e.isMobile(),p=function(){};return p.prototype=l,c.prototype=new p,c.supports=u,c}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(64),n(67),n(45)],o=function(e,t,n){var i={},o={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},r=function(r,s){function a(t){u=o.ERROR,c.trigger(e.ERROR,t)}function l(t){u=o.COMPLETE,c.trigger(e.COMPLETE,t)}var c=n.extend(this,t),u=o.NEW;this.addEventListener=this.on,this.removeEventListener=this.off,this.makeStyleLink=function(e){var t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,t},this.makeScriptTag=function(e){var t=document.createElement("script");return t.src=e,t},this.makeTag=s?this.makeStyleLink:this.makeScriptTag,this.load=function(){if(u===o.NEW){var t=i[r];if(t&&(u=t.getStatus(),2>u))return t.on(e.ERROR,a),void t.on(e.COMPLETE,l);var n=document.getElementsByTagName("head")[0]||document.documentElement,c=this.makeTag(r),d=!1;c.onload=c.onreadystatechange=function(e){d||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(d=!0,l(e),c.onload=c.onreadystatechange=null,n&&c.parentNode&&!s&&n.removeChild(c))},c.onerror=a,n.insertBefore(c,n.firstChild),u=o.LOADING,i[r]=this}},this.getStatus=function(){return u}};return r.loaderstatus=o,r}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(45)],o=function(e){var t=function(){var t={},n={},i={},o={};return{start:function(n){t[n]=e.now(),i[n]=i[n]+1||1},end:function(i){if(t[i]){var o=e.now()-t[i];n[i]=n[i]+o||o}},dump:function(){return{counts:i,sums:n,events:o}},tick:function(t,n){o[t]=n||e.now()},between:function(e,t){return o[t]&&o[e]?o[t]-o[e]:-1}}};return t}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(78),n(150)],o=function(e,t){var n=e.prototype.setup;return e.prototype.setup=function(){n.apply(this,arguments);var e=this.edition();("enterprise"===e||"ads"===e||"premium"===e)&&(this._castController=new t(this,this._model),this.jwStartCasting=this._castController.startCasting,this.jwStopCasting=this._castController.stopCasting,this.jwOpenExtension=this._castController.openExtension)},e.prototype.edition=function(){return this._model.edition()},e}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(79),n(105),n(45),n(80),n(97),n(100),n(88),n(48),n(119),n(67),n(107),n(65),n(64),n(148)],o=function(e,t,n,i,o,r,s,a,l,c,u,d,A,p){function w(e){return function(){var t=Array.prototype.slice.call(arguments,0);this.eventsQueue.push([e,t])}}function f(e){return e===d.LOADING||e===d.STALLED?d.BUFFERING:e}var g=function(e){this.originalContainer=this.currentContainer=e,this.eventsQueue=[],n.extend(this,c),this._model=new r};return g.prototype={play:w("play"),pause:w("pause"),setVolume:w("setVolume"),setMute:w("setMute"),seek:w("seek"),stop:w("stop"),load:w("load"),playlistNext:w("playlistNext"),playlistPrev:w("playlistPrev"),playlistItem:w("playlistItem"),setFullscreen:w("setFullscreen"),setCurrentCaptions:w("setCurrentCaptions"),setCurrentQuality:w("setCurrentQuality"),setup:function(r,c){function p(){J.mediaModel.on("change:state",function(e,t){var n=f(t);J.set("state",n)})}function w(){z=null,J.on("change:state",u,this),
J.on("change:castState",function(e,t){X.trigger(A.JWPLAYER_CAST_SESSION,t)}),J.on("change:fullscreen",function(e,t){X.trigger(A.JWPLAYER_FULLSCREEN,{fullscreen:t})}),J.on("change:playlistItem",function(e,t){X.trigger(A.JWPLAYER_PLAYLIST_ITEM,{index:e.get("item"),item:t})}),J.on("change:playlist",function(e,t){t.length&&X.trigger(A.JWPLAYER_PLAYLIST_LOADED,{playlist:t})}),J.on("change:volume",function(e,t){X.trigger(A.JWPLAYER_MEDIA_VOLUME,{volume:t})}),J.on("change:mute",function(e,t){X.trigger(A.JWPLAYER_MEDIA_MUTE,{mute:t})}),J.on("change:scrubbing",function(e,t){t?b():j()}),J.on("change:captionsList",function(e,t){X.trigger(A.JWPLAYER_CAPTIONS_LIST,{tracks:t,track:F()})}),J.mediaController.on("all",X.trigger.bind(X)),U.on("all",X.trigger.bind(X)),this.showView(U.element()),window.addEventListener("beforeunload",function(){N()||v(!0)}),n.defer(g)}function g(){for(X.trigger(A.JWPLAYER_READY,{setupTime:0}),X.trigger(A.JWPLAYER_PLAYLIST_LOADED,{playlist:J.get("playlist")}),X.trigger(A.JWPLAYER_PLAYLIST_ITEM,{index:J.get("item"),item:J.get("playlistItem")}),X.trigger(A.JWPLAYER_CAPTIONS_LIST,{tracks:J.get("captionsList"),track:J.get("captionsIndex")}),J.get("autostart")&&j();X.eventsQueue.length>0;){var e=X.eventsQueue.shift(),t=e[0],n=e[1]||[];X[t].apply(X,n)}}function h(e){switch(v(!0),J.get("autostart")&&J.once("setItem",j),typeof e){case"string":m(e);break;case"object":J.setPlaylist(e);break;case"number":J.setItem(e)}}function m(e){var t=new s;t.on(A.JWPLAYER_PLAYLIST_LOADED,function(e){h(e.playlist)}),t.on(A.JWPLAYER_ERROR,function(e){J.set("state",d.ERROR),h([]),e.message="Could not load playlist: "+e.message,X.trigger.call(X,e.type,e)}),t.load(e)}function j(e){var t;if(e===!1)return b();if(J.get("state")!==d.ERROR){if(J.get("state")===d.COMPLETE&&(v(!0),J.setItem(0)),!H&&(H=!0,X.trigger(A.JWPLAYER_MEDIA_BEFOREPLAY,{}),H=!1,V))return V=!1,void(G=null);if(k()){if(0===J.get("playlist").length)return!1;t=a.tryCatch(function(){J.loadVideo()})}else J.get("state")===d.PAUSED&&(t=a.tryCatch(function(){J.playVideo()}));return t instanceof a.Error?(X.trigger(A.JWPLAYER_ERROR,t),G=null,!1):!0}}function v(e){J.off("setItem",j);var t=!e;G=null;var n=a.tryCatch(function(){q().stop()},X);return n instanceof a.Error?(X.trigger(A.JWPLAYER_ERROR,n),!1):(t&&(K=!0),H&&(V=!0),!0)}function b(e){if(G=null,a.exists(e)){if(!e)return j()}else e=!0;switch(J.get("state")){case d.ERROR:return!1;case d.PLAYING:case d.BUFFERING:var t=a.tryCatch(function(){q().pause()},this);if(t instanceof a.Error)return X.trigger(A.JWPLAYER_ERROR,t),!1;break;default:H&&(V=!0)}return!0}function k(){var e=J.get("state");return e===d.IDLE||e===d.COMPLETE||e===d.ERROR}function E(e){J.get("state")!==d.ERROR&&(J.get("scrubbing")||J.get("state")===d.PLAYING||j(!0),q().seek(e))}function y(e){v(!0),J.setItem(e),j()}function C(){y(J.get("item")-1)}function x(){y(J.get("item")+1)}function L(){if(k()){if(K)return void(K=!1);G=L;var e=J.get("item");return e===J.get("playlist").length-1?void(J.get("repeat")?x():(J.set("state",d.COMPLETE),X.trigger(A.JWPLAYER_PLAYLIST_COMPLETE,{}))):void x()}}function R(e){q().setCurrentQuality(e)}function I(){return q()?q().getCurrentQuality():-1}function B(){return this._model?this._model.get("config"):void 0}function M(){if(this._model.mediaModel)return this._model.mediaModel.visualQuality;var e=P();if(e){var t=I(),i=e[t];if(i)return{level:n.extend({index:t},i),mode:"",reason:""}}return null}function P(){return q()?q().getQualityLevels():null}function D(e){q().setCurrentAudioTrack(e)}function T(){return q()?q().getCurrentAudioTrack():-1}function _(){return q()?q().getAudioTracks():null}function S(e){J.setVideoSubtitleTrack(e),X.trigger(A.JWPLAYER_CAPTIONS_CHANGED,{tracks:Y(),track:e})}function F(){return W.getCurrentIndex()}function Y(){return W.getCaptionsList()}function Q(){var e=J.getVideo();if(e){var t=e.detachMedia();if(t instanceof HTMLVideoElement)return t}return null}function N(){var e=J.getVideo();return e?e.isCaster:!1}function O(e){var t=a.tryCatch(function(){J.getVideo().attachMedia(e)});return t instanceof a.Error?void a.log("Error calling _attachMedia",t):void("function"==typeof G&&G())}var J,U,W,z,G,V,H=!1,K=!1,X=this,q=function(){return J.getVideo()};J=this._model.setup(r),U=this._view=new l(c,J),W=new o(c,J),z=new i(c,J,U),X.id=this._model.id,z.on(A.JWPLAYER_READY,w,this),z.on(A.JWPLAYER_SETUP_ERROR,function(e){X.setupError(e.message)}),J.mediaController.on(A.JWPLAYER_MEDIA_COMPLETE,function(){n.defer(L)}),J.mediaController.on(A.JWPLAYER_MEDIA_ERROR,function(e){J.set("state",d.ERROR);var t=n.extend({},e);t.type=A.JWPLAYER_ERROR,this.trigger(t.type,t)},this),p(),J.on("change:mediaModel",p),this.play=j,this.pause=b,this.seek=E,this.stop=v,this.load=h,this.playlistNext=x,this.playlistPrev=C,this.playlistItem=y,this.setCurrentCaptions=S,this.setCurrentQuality=R,this.detachMedia=Q,this.attachMedia=O,this.getCurrentQuality=I,this.getQualityLevels=P,this.setCurrentAudioTrack=D,this.getCurrentAudioTrack=T,this.getAudioTracks=_,this.getCurrentCaptions=F,this.getCaptionsList=Y,this.getVisualQuality=M,this.getConfig=B,this.setVolume=J.setVolume,this.setMute=J.setMute,this.seekDrag=J.seekDrag,this.getProvider=function(){return J.get("provider")},this.getContainer=function(){return this.currentContainer},this.resize=U.resize,this.getSafeRegion=U.getSafeRegion,this.setCues=U.addCues,this.setFullscreen=U.fullscreen,this.addButton=function(e,t,i,o){var r={img:e,tooltip:t,callback:i,id:o},s=J.get("dock");s=s?s.slice(0):[],s=n.reject(s,n.matches({id:r.id})),s.push(r),J.set("dock",s)},this.removeButton=function(e){var t=J.get("dock")||[];t=n.reject(t,n.matches({id:e})),J.set("dock",t)},this.checkBeforePlay=function(){return H},this.getItemQoe=function(){return J._qoeItem},this.setControls=function(e){J.set("controls",e)},this.playerDestroy=function(){this.stop(),U&&U.destroy(),J&&J.destroy(),z&&(z.destroy(),z=null)},this.isBeforePlay=this.checkBeforePlay,this.isBeforeComplete=function(){return J.getVideo().checkComplete()},this.createInstream=function(){return X.instreamDestroy(),X._instreamAdapter=new t(this,J,U),X._instreamAdapter},this.instreamDestroy=function(){X._instreamAdapter&&X._instreamAdapter.destroy()},e(c,this),z.start()},showView:function(e){(document.documentElement.contains(this.currentContainer)||(this.currentContainer=document.getElementById(this.id),this.currentContainer))&&(this.currentContainer.parentElement&&this.currentContainer.parentElement.replaceChild(e,this.currentContainer),this.currentContainer=e)},setupError:function(e){var t=a.createElement(p(this._model.get("id"),this._model.get("skin"),e)),i=this._model.get("width"),o=this._model.get("height");a.style(t,{width:i.toString().indexOf("%")>0?i:i+"px",height:o.toString().indexOf("%")>0?o:o+"px"}),this.showView(t);var r=this;n.defer(function(){r.trigger(A.JWPLAYER_SETUP_ERROR,{message:e})})},reset:function(){this.showView(this.originalContainer)}},g}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[],o=function(){return function(e,t){e.getPlaylistIndex=e.getItem;var n={jwPlay:t.play,jwPause:t.pause,jwSetMute:t.setMute,jwLoad:t.load,jwPlaylistItem:t.item,jwGetAudioTracks:t.getAudioTracks,jwDetachMedia:t.detachMedia,jwAttachMedia:t.attachMedia,jwAddEventListener:t.on,jwRemoveEventListener:t.off,jwStop:t.stop,jwSeek:t.seek,jwSetVolume:t.setVolume,jwPlaylistNext:t.next,jwPlaylistPrev:t.prev,jwSetFullscreen:t.setFullscreen,jwGetQualityLevels:t.getQualityLevels,jwGetCurrentQuality:t.getCurrentQuality,jwSetCurrentQuality:t.setCurrentQuality,jwSetCurrentAudioTrack:t.setCurrentAudioTrack,jwGetCurrentAudioTrack:t.getCurrentAudioTrack,jwGetCaptionsList:t.getCaptionsList,jwGetCurrentCaptions:t.getCurrentCaptions,jwSetCurrentCaptions:t.setCurrentCaptions,jwSetCues:t.setCues};e.callInternal=function(e){console.log("You are using the deprecated callInternal method for "+e);var i=Array.prototype.slice.call(arguments,1);n[e].apply(t,i)}}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(81),n(48),n(67),n(45),n(64)],o=function(e,t,n,i,o){var r=function(t,n,r,s){function a(){A("Setup Timeout Error","Setup took longer than "+s+" seconds to complete.")}function l(){i.each(f,function(e){e.complete!==!0&&e.running!==!0&&null!==t&&u(e.depends)&&(e.running=!0,c(e))})}function c(e){var i=function(t){t=t||{},d(e,t)};e.method(i,n,t,r)}function u(e){return i.all(e,function(e){return f[e].complete})}function d(e,t){"error"===t.type?A(t.msg,t.reason):"complete"===t.type?(clearTimeout(p),w.trigger(o.JWPLAYER_READY)):(e.complete=!0,l())}function A(e,t){clearTimeout(p),w.trigger(o.JWPLAYER_SETUP_ERROR,{message:e+": "+t}),w.destroy()}var p,w=this,f=e.getQueue();s=s||10,this.start=function(){p=setTimeout(a,1e3*s),l()},this.destroy=function(){clearTimeout(p),this.off(),f=0,t=null,n=null,r=null}};return r.prototype=n,r}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(82)],o=function(e){function t(t,n){var i=n.get("key"),o=n.edition();"invalid"===o?e.error(t,"Error setting up player",(void 0===i?"Missing":"Invalid")+" license key"):t()}function i(e,t){var i=t.get("config");"dashjs"===i.dash?n.e(1,function(i){var o=n(93);o.register(window.jwplayer),t.updateProviders(),e()}):i.dash?n.e(2,function(i){var o=n(95);o.register(window.jwplayer),t.updateProviders(),e()}):e()}function o(){var n=e.getQueue();return n.LOAD_PLAYLIST.depends.push("LOAD_PROVIDERS"),n.LOAD_PROVIDERS={method:i,depends:[]},n.LOAD_PROVIDERS.depends.push("CHECK_KEY"),n.CHECK_KEY={method:t,depends:[]},n}return{getQueue:o}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(83),n(88),n(55),n(75),n(48),n(67),n(49),n(45),n(64)],o=function(e,t,n,i,o,r,s,a,l){function c(){var e={LOAD_PLUGINS:{method:u,depends:[]},LOAD_SKIN:{method:j,depends:[]},LOAD_PLAYLIST:{method:w,depends:[]},SETUP_COMPONENTS:{method:v,depends:["LOAD_PLAYLIST","LOAD_SKIN"]},SEND_READY:{method:b,depends:["LOAD_PLUGINS","SETUP_COMPONENTS"]}};return e}function u(t,n,i){E=e.loadPlugins(n.config.id,n.config.plugins),E.on(l.COMPLETE,a.partial(d,t,n,i)),E.on(l.ERROR,a.partial(p,t)),E.load()}function d(e,t,n){E.setupPlugins(n,t.config,a.partial(A,n)),e()}function A(e,t,n,i){var o=e.id;return function(){var e=document.querySelector("#"+o+" .jw-overlays");e&&i&&e.appendChild(n),"function"==typeof t.resize&&(t.resize(e.clientWidth,e.clientHeight),setTimeout(function(){t.resize(e.clientWidth,e.clientHeight)},400)),e&&e.style&&(n.left=e.style.left,n.top=e.style.top)}}function p(e,t){k(e,"Could not load plugin",t.message)}function w(e,n){var i=n.config.playlist;a.isString(i)?(y=new t,y.on(l.JWPLAYER_PLAYLIST_LOADED,function(t){f(e,n,t.playlist)}),y.on(l.JWPLAYER_ERROR,a.partial(g,e)),y.load(i)):f(e,n,i)}function f(e,t,n){t.setPlaylist(n);var i=t.get("playlist");return a.isArray(i)&&0!==i.length?void e():void g(e,"Playlist type not supported")}function g(e,t){t&&t.message?k(e,"Error loading playlist",t.message):k(e,"Error loading player","No playable sources found")}function h(e){return a.contains(s.SkinsLoadable,e)?o.getSkinUrl(e):void console.log("The skin parameter does not match any of our skins : "+e)}function m(e){for(var t=document.styleSheets,n=0,i=t.length;i>n;n++)if(t[n].href===e)return!0;return!1}function j(e,t){var n=t.get("skin"),o=t.get("skinUrl");if(a.contains(s.SkinsIncluded,n))return void e();if(o||(o=h(n)),a.isString(o)&&!m(o)){t.set("skin-loading",!0);var r=!0,c=new i(o,r);c.addEventListener(l.COMPLETE,function(){t.set("skin-loading",!1)}),c.addEventListener(l.ERROR,function(){console.log("The given skin failed to load : ",o),t.set("skin","seven"),t.set("skin-loading",!1)}),c.load()}a.defer(function(){e()})}function v(e,t,n,i){i.setup(),e()}function b(e){e({type:"complete"})}function k(e,t,n){e({type:"error",msg:t,reason:n})}var E,y;return{getQueue:c,error:k}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(84),n(86),n(87),n(85)],o=function(e,t,n,i){var o={},r={},s=function(n,i){return r[n]=new e(new t(o),i),r[n]},a=function(e,t,r,s){var a=i.getPluginName(e);o[a]||(o[a]=new n(e)),o[a].registerPlugin(e,t,r,s)};return{loadPlugins:s,registerPlugin:a}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(85),n(48),n(64),n(67),n(45),n(75)],o=function(e,t,n,i,o,r){var s=function(s,a){function l(){w||(w=!0,p=r.loaderstatus.COMPLETE,A.trigger(n.COMPLETE))}function c(){if(!g&&(a&&0!==o.keys(a).length||l(),!w)){var i=s.getPlugins();d=o.after(f,l),o.each(a,function(o,s){var a=e.getPluginName(s),l=i[a],c=l.getJS(),u=l.getTarget(),p=l.getStatus();p!==r.loaderstatus.LOADING&&p!==r.loaderstatus.NEW&&(c&&!t.versionCheck(u)&&A.trigger(n.ERROR,{message:"Incompatible player version"}),d())})}}function u(e){if(!g){var i="File not found";e.url&&t.log(i,e.url),this.off(),this.trigger(n.ERROR,{message:i}),c()}}var d,A=o.extend(this,i),p=r.loaderstatus.NEW,w=!1,f=o.size(a),g=!1;this.setupPlugins=function(n,i,r){var a=[],l={},c=s.getPlugins();o.each(i.plugins,function(s,u){var d=e.getPluginName(u),A=c[d],p=A.getFlashPath(),w=A.getJS(),f=A.getURL();if(p){var g=o.extend({name:d,swf:p,pluginmode:A.getPluginmode()},s);a.push(g)}var h=t.tryCatch(function(){if(w&&i.plugins&&i.plugins[f]){var e=document.createElement("div");e.id=n.id+"_"+d,e.className="jw-plugin jw-reset",l[d]=A.getNewInstance(n,o.extend({},i.plugins[f]),e),n.onReady(r(l[d],e,!0)),n.onResize(r(l[d],e))}});h instanceof t.Error&&t.log("ERROR: Failed to load "+d+".")}),n.plugins=l,i.flashPlugins=a},this.load=function(){if(t.exists(a)&&"object"!==t.typeOf(a))return void c();p=r.loaderstatus.LOADING,o.each(a,function(e,i){if(t.exists(i)){var o=s.addPlugin(i);o.on(n.COMPLETE,c),o.on(n.ERROR,u)}});var e=s.getPlugins();o.each(e,function(e){e.load()}),c()},this.destroy=function(){g=!0,this.off()},this.pluginFailed=u,this.getStatus=function(){return p}};return s}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(50)],o=function(e){var t={},n=t.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};return t.getPluginPathType=function(t){if("string"==typeof t){t=t.split("?")[0];var i=t.indexOf("://");if(i>0)return n.ABSOLUTE;var o=t.indexOf("/"),r=e.extension(t);return!(0>i&&0>o)||r&&isNaN(r)?n.RELATIVE:n.CDN}},t.getPluginName=function(e){return e.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/,"$2")},t.getPluginVersion=function(e){return e.replace(/[^-]*-?([^\.]*).*$/,"$1")},t}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(85),n(87)],o=function(e,t){var n=function(n){this.addPlugin=function(i){var o=e.getPluginName(i);return n[o]||(n[o]=new t(i)),n[o]},this.getPlugins=function(){return n}};return n}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(48),n(85),n(64),n(67),n(75),n(45)],o=function(e,t,n,i,o,r){var s={FLASH:0,JAVASCRIPT:1,HYBRID:2},a=function(a){function l(){switch(t.getPluginPathType(a)){case t.pluginPathType.ABSOLUTE:return a;case t.pluginPathType.RELATIVE:return e.getAbsolutePath(a,window.location.href)}}function c(){r.defer(function(){g=o.loaderstatus.COMPLETE,f.trigger(n.COMPLETE)})}function u(){g=o.loaderstatus.ERROR,f.trigger(n.ERROR,{url:a})}var d,A,p,w,f=r.extend(this,i),g=o.loaderstatus.NEW;this.load=function(){if(g===o.loaderstatus.NEW){if(a.lastIndexOf(".swf")>0)return d=a,g=o.loaderstatus.COMPLETE,void f.trigger(n.COMPLETE);if(t.getPluginPathType(a)===t.pluginPathType.CDN)return g=o.loaderstatus.COMPLETE,void f.trigger(n.COMPLETE);g=o.loaderstatus.LOADING;var e=new o(l());e.on(n.COMPLETE,c),e.on(n.ERROR,u),e.load()}},this.registerPlugin=function(e,t,i,r){w&&(clearTimeout(w),w=void 0),p=t,i&&r?(d=r,A=i):"string"==typeof i?d=i:"function"==typeof i?A=i:i||r||(d=e),g=o.loaderstatus.COMPLETE,f.trigger(n.COMPLETE)},this.getStatus=function(){return g},this.getPluginName=function(){return t.getPluginName(a)},this.getFlashPath=function(){if(d)switch(t.getPluginPathType(d)){case t.pluginPathType.ABSOLUTE:return d;case t.pluginPathType.RELATIVE:return a.lastIndexOf(".swf")>0?e.getAbsolutePath(d,window.location.href):e.getAbsolutePath(d,l())}return null},this.getJS=function(){return A},this.getTarget=function(){return p},this.getPluginmode=function(){return void 0!==typeof d&&void 0!==typeof A?s.HYBRID:void 0!==typeof d?s.FLASH:void 0!==typeof A?s.JAVASCRIPT:void 0},this.getNewInstance=function(e,t,n){return new A(e,t,n)},this.getURL=function(){return a}};return a}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(55),n(89),n(90),n(48),n(64),n(67),n(45)],o=function(e,t,n,i,o,r,s){var a=function(){function e(e){var r=i.tryCatch(function(){for(var i=e.responseXML.childNodes,r="",s=0;s<i.length&&(r=i[s],8===r.nodeType);s++);if("xml"===t.localName(r)&&(r=r.nextSibling),"rss"!==t.localName(r))return void l("Not a valid RSS feed");var a=n.parse(r);u.trigger(o.JWPLAYER_PLAYLIST_LOADED,{playlist:a})});r instanceof i.Error&&l()}function a(e){l(e.match(/invalid/i)?"Not a valid RSS feed":"")}function l(e){u.trigger(o.JWPLAYER_ERROR,{message:e?e:"Error loading file"})}var c,u=s.extend(this,r);this.load=function(t){c=i.ajax(t,e,a)},this.destroy=function(){this.off(),c=null}};return a}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(50)],o=function(e){return{localName:function(e){return e?e.localName?e.localName:e.baseName?e.baseName:"":""},textContent:function(t){return t?t.textContent?e.trim(t.textContent):t.text?e.trim(t.text):"":""},getChildNode:function(e,t){return e.childNodes[t]},numChildren:function(e){return e.childNodes?e.childNodes.length:0}}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(50),n(89),n(91),n(92),n(56)],o=function(e,t,n,i,o){function r(t){for(var r={},a=0;a<t.childNodes.length;a++){var l=t.childNodes[a],u=c(l);if(u)switch(u.toLowerCase()){case"enclosure":r.file=e.xmlAttribute(l,"url");break;case"title":r.title=s(l);break;case"guid":r.mediaid=s(l);break;case"pubdate":r.date=s(l);break;case"description":r.description=s(l);break;case"link":r.link=s(l);break;case"category":r.tags?r.tags+=s(l):r.tags=s(l)}}return r=i(t,r),r=n(t,r),new o(r)}var s=t.textContent,a=t.getChildNode,l=t.numChildren,c=t.localName,u={};return u.parse=function(e){for(var t=[],n=0;n<l(e);n++){var i=a(e,n),o=c(i).toLowerCase();if("channel"===o)for(var s=0;s<l(i);s++){var u=a(i,s);"item"===c(u).toLowerCase()&&t.push(r(u))}}return t},u}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(89),n(50),n(48)],o=function(e,t,n){var i="jwplayer",o=function(o,r){for(var s=[],a=[],l=t.xmlAttribute,c="default",u="label",d="file",A="type",p=0;p<o.childNodes.length;p++){var w=o.childNodes[p];if(w.prefix===i){var f=e.localName(w);"source"===f?(delete r.sources,s.push({file:l(w,d),"default":l(w,c),label:l(w,u),type:l(w,A)})):"track"===f?(delete r.tracks,a.push({file:l(w,d),"default":l(w,c),kind:l(w,"kind"),label:l(w,u)})):(r[f]=n.serialize(e.textContent(w)),"file"===f&&r.sources&&delete r.sources)}r[d]||(r[d]=r.link)}if(s.length)for(r.sources=[],p=0;p<s.length;p++)s[p].file.length>0&&(s[p][c]="true"===s[p][c]?!0:!1,s[p].label.length||delete s[p].label,r.sources.push(s[p]));if(a.length)for(r.tracks=[],p=0;p<a.length;p++)a[p].file.length>0&&(a[p][c]="true"===a[p][c]?!0:!1,a[p].kind=a[p].kind.length?a[p].kind:"captions",a[p].label.length||delete a[p].label,r.tracks.push(a[p]));return r};return o}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(89),n(50),n(48)],o=function(e,t,n){var i=t.xmlAttribute,o=e.localName,r=e.textContent,s=e.numChildren,a="media",l=function(e,t){function c(e){var t={zh:"Chinese",nl:"Dutch",en:"English",fr:"French",de:"German",it:"Italian",ja:"Japanese",pt:"Portuguese",ru:"Russian",es:"Spanish"};return t[e]?t[e]:e}var u,d,A="tracks",p=[];for(d=0;d<s(e);d++)if(u=e.childNodes[d],u.prefix===a){if(!o(u))continue;switch(o(u).toLowerCase()){case"content":i(u,"duration")&&(t.duration=n.seconds(i(u,"duration"))),s(u)>0&&(t=l(u,t)),i(u,"url")&&(t.sources||(t.sources=[]),t.sources.push({file:i(u,"url"),type:i(u,"type"),width:i(u,"width"),label:i(u,"label")}));break;case"title":t.title=r(u);break;case"description":t.description=r(u);break;case"guid":t.mediaid=r(u);break;case"thumbnail":t.image||(t.image=i(u,"url"));break;case"player":break;case"group":l(u,t);break;case"subtitle":var w={};w.file=i(u,"url"),w.kind="captions",i(u,"lang").length>0&&(w.label=c(i(u,"lang"))),p.push(w)}}for(t.hasOwnProperty(A)||(t[A]=[]),d=0;d<p.length;d++)t[A].push(p[d]);return t};return l}.apply(t,i),!(void 0!==o&&(e.exports=o))},,,,,function(e,t,n){var i,o;i=[n(89),n(98),n(99),n(48)],o=function(e,t,n,i){var o=function(o,r){function s(e){i.log("CAPTIONS("+e+")")}function a(e,t){g=[],h={},m={},j=0;var n,i,o,r=t.tracks;for(o=0;o<r.length;o++)n=r[o],i=n.kind.toLowerCase(),("captions"===i||"subtitles"===i)&&(n.file?(c(n),u(n)):n.data&&c(n));var s=w();this.setCaptionsList(s),f()}function l(e,t){return 0===t?void p(e,null):void p(e,g[t-1])}function c(e){"number"!=typeof e.id&&(e.id=e.name||e.file||"cc"+g.length),e.data=e.data||[],e.label||(e.label="Unknown CC",j++,j>1&&(e.label+=" ("+j+")")),g.push(e),h[e.id]=e}function u(e){i.ajax(e.file,function(t){d(t,e)},A,!0)}function d(o,r){var a,l=o.responseXML?o.responseXML.firstChild:null;if(l)for("xml"===e.localName(l)&&(l=l.nextSibling);l.nodeType===l.COMMENT_NODE;)l=l.nextSibling;a=l&&"tt"===e.localName(l)?i.tryCatch(function(){r.data=n(o.responseXML)}):i.tryCatch(function(){r.data=t(o.responseText)}),a instanceof i.Error&&s(a.message+": "+r.file)}function A(e){s(e)}function p(e,t){e.set("captionsTrack",t),t?e.set("captionLabel",t.label):e.set("captionLabel","Off")}function w(){for(var e=[{id:"off",label:"Off"}],t=0;t<g.length;t++)e.push({id:g[t].id,label:g[t].label});return e}function f(){for(var e=0,t=r.get("captionLabel"),n=0;n<g.length;n++){var i=g[n];if(t&&t===i.label){e=n+1;break}i["default"]||i.defaulttrack?e=n+1:i.autoselect}r.set("captionsIndex",e)}r.on("change:playlistItem",a,this),r.on("change:captionsIndex",l,this),r.mediaController.on("subtitlesTracks",function(e){if(e.tracks.length){g=[],h={},m={},j=0;for(var t=e.tracks||[],n=0;n<t.length;n++){var i=t[n];i.id=i.name,i.label=i.name||i.language,c(i)}var o=w();this.setCaptionsList(o),f()}},this),r.mediaController.on("subtitlesTrackData",function(e){var t=h[e.name];if(t){for(var n=e.captions||[],i=!1,o=0;o<n.length;o++){var r=n[o],s=e.name+"_"+r.begin+"_"+r.end;m[s]||(m[s]=r,t.data.push(r),i=!0)}i&&t.data.sort(function(e,t){return e.begin-t.begin})}},this),r.mediaController.on("meta",function(e){var t=e.metadata;if(t&&"textdata"===t.type){var n=h[t.trackid];if(!n){n={kind:"captions",id:t.trackid,data:[]},c(n);var i=w();this.setCaptionsList(i)}var o=e.position||r.get("position"),s=""+Math.round(10*o)+"_"+t.text,a=m[s];a||(a={begin:o,text:t.text},m[s]=a,n.data.push(a))}},this);var g=[],h={},m={},j=0;this.getCurrentIndex=function(){return r.get("captionsIndex")},this.getCaptionsList=function(){return r.get("captionsList")},this.setCurrentIndex=function(e){o.setCurrentCaptions(e)},this.setCaptionsList=function(e){r.set("captionsList",e)}};return o}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(48),n(50)],o=function(e,t){function n(e){var t={},n=e.split("\r\n");1===n.length&&(n=e.split("\n"));var o=1;if(n[0].indexOf(" --> ")>0&&(o=0),n.length>o+1&&n[o+1]){var r=n[o],s=r.indexOf(" --> ");s>0&&(t.begin=i(r.substr(0,s)),t.end=i(r.substr(s+5)),t.text=n.slice(o+1).join("<br/>"))}return t}var i=e.seconds;return function(e){var i=[];e=t.trim(e);var o=e.split("\r\n\r\n");1===o.length&&(o=e.split("\n\n"));for(var r=0;r<o.length;r++)if("WEBVTT"!==o[r]){var s=n(o[r]);s.text&&i.push(s)}if(!i.length)throw new Error("Invalid SRT file");return i}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(48),n(50)],o=function(e,t){function n(e){e||i()}function i(){throw new Error("Invalid DFXP file")}var o=e.seconds;return function(e){n(e);var r=[],s=e.getElementsByTagName("p");n(s),s.length||(s=e.getElementsByTagName("tt:p"),s.length||(s=e.getElementsByTagName("tts:p")));for(var a=0;a<s.length;a++){var l=s[a],c=l.innerHTML||l.textContent||l.text||"",u=t.trim(c).replace(/>\s+</g,"><").replace(/tts?:/g,"");if(u){var d=l.getAttribute("begin"),A=l.getAttribute("dur"),p=l.getAttribute("end"),w={begin:o(d),text:u};p?w.end=o(p):A&&(w.end=w.begin+o(A)),r.push(w)}}return r.length||i(),r}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(101),n(47)],o=function(e,t){var n=e,i=function(){var e=new n,i=e.setup;return e.setup=function(e){var n=new t(e.key),o=n.edition();return e.edition=o,e.token=n.token(),i.apply(this,arguments),this.edition=function(){return o},this},e};return i}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(48),n(63),n(55),n(59),n(102),n(103),n(45),n(67),n(104),n(64),n(65)],o=function(e,t,n,i,o,r,s,a,l,c,u){var d={autostart:!1,controls:!0,scrubbing:!1,fullscreen:!1,height:320,mobilecontrols:!1,mute:!1,playlist:[],repeat:!1,skin:"seven",stretching:t.UNIFORM,width:480,volume:90},A=function(){function t(e){switch(e.type){case"volume":case"mute":return void this.set(e.type,e[e.type]);case c.JWPLAYER_PLAYER_STATE:return void this.mediaModel.set("state",e.newstate);case c.JWPLAYER_MEDIA_BUFFER:this.set("buffer",e.bufferPercent);break;case c.JWPLAYER_MEDIA_BUFFER_FULL:this.playVideo();break;case c.JWPLAYER_MEDIA_TIME:this.mediaModel.set("position",e.position),this.mediaModel.set("duration",e.duration),this.set("position",e.position),this.set("duration",e.duration);break;case c.JWPLAYER_PROVIDER_CHANGED:this.set("provider",A.getName());break;case c.JWPLAYER_MEDIA_LEVELS:this.setQualityLevel(e.currentQuality,e.levels),this.mediaModel.set("levels",e.levels);break;case c.JWPLAYER_MEDIA_LEVEL_CHANGED:this.setQualityLevel(e.currentQuality,e.levels);break;case c.JWPLAYER_AUDIO_TRACKS:this.setCurrentAudioTrack(e.currentTrack,e.tracks),this.mediaModel.set("audioTracks",e.tracks);break;case c.JWPLAYER_AUDIO_TRACK_CHANGED:this.setCurrentAudioTrack(e.currentTrack,e.tracks);break;case"visualQuality":var t=s.extend({},e);delete t.type,this.mediaModel.set("visualQuality",t)}this.mediaController.trigger(e.type,e)}var l,A,w=this,f={},g={controlbar:{},display:{}},h=e.noop;this.mediaController=s.extend({},a),this.mediaModel=new p,r.model(this),this.setup=function(t){return t.cookies&&(o.model(this),f=o.getAllItems()),this.config=s.extend({},d,f,t),s.extend(this,this.config,{state:u.IDLE,duration:0,position:0,buffer:0}),e.isMobile()&&(this.autostart=!1),this.updateProviders(),this},this.updateProviders=function(){l=new i(w.config)},this.setQualityLevel=function(e,t){e>-1&&t.length>1&&"youtube"!==A.getName().name&&this.mediaModel.set("currentLevel",parseInt(e))},this.setCurrentAudioTrack=function(e,t){e>-1&&t.length>1&&this.mediaModel.set("currentAudioTrack",parseInt(e))},this.changeVideoProvider=function(e){var n;A&&(A.removeGlobalListener(t),n=A.getContainer(),n&&A.remove()),h=new e(w.id,w.config),n&&h.setContainer(n),this.set("provider",h.getName()),A=h,A.volume(w.volume),A.mute(w.mute),A.addGlobalListener(t.bind(this))},this.destroy=function(){A&&(A.removeGlobalListener(t),A.destroy())},this.getVideo=function(){return A},this.setFullscreen=function(e){e=!!e,e!==w.fullscreen&&w.set("fullscreen",e)},this.setPlaylist=function(e){var t=n(e);return t=n.filterPlaylist(t,l,w.get("androidhls"),this.get("drm")),0===t.length?(this.playlist=[],void this.mediaController.trigger(c.JWPLAYER_ERROR,{message:"Error loading playlist: No playable sources found"})):(this.set("playlist",t),void this.setItem(0))},this.chooseProvider=function(e){return l.choose(e)},this.setItem=function(e){var t=w.get("playlist"),n=(e+t.length)%t.length;this.mediaModel.off(),this.set("mediaModel",new p),this.set("item",n);var i=this.get("playlist")[n];this.set("playlistItem",i);var o=i&&i.sources&&i.sources[0];if(void 0!==o){var r=this.chooseProvider(o);if(!r)throw new Error("No suitable provider found");h instanceof r||w.changeVideoProvider(r),h.init&&h.init(i),this.trigger("setItem")}},this.setVolume=function(e){e=Math.round(e),w.set("volume",e),A&&A.volume(e);var t=0===e;t!==w.get("mute")&&w.setMute(t)},this.setMute=function(t){if(e.exists(t)||(t=!w.mute),w.set("mute",t),A&&A.mute(t),!t){var n=Math.max(20,w.get("volume"));this.setVolume(n)}},this.componentConfig=function(e){return"logo"===e?this.config.logo:g[e]},this.loadVideo=function(e){if(this.mediaController.trigger(c.JWPLAYER_MEDIA_PLAY_ATTEMPT),!e){var t=this.get("item");e=this.get("playlist")[t]}this.set("position",e.starttime||0),this.set("duration",e.duration||0),A.load(e)},this.playVideo=function(){A.play()},this.setVideoSubtitleTrack=function(e){this.set("captionsIndex",e),A.setSubtitlesTrack&&A.setSubtitlesTrack(e)}},p=A.MediaModel=function(){this.state=u.IDLE};return s.extend(A.prototype,l),s.extend(p.prototype,l),A}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(45),n(48)],o=function(e,t){function n(){for(var e={},n=document.cookie.split("; "),i=0;i<n.length;i++){var o=n[i].split("=");if("jwplayer."===o[0].substr(0,9)){var r=o[0].substr(9);e[r]=t.serialize(o[1])}}return e}function i(e){return n()[e]}function o(e,t){document.cookie="jwplayer."+e+"="+t+"; path=/"}function r(e){o(e,"; expires=Thu, 01 Jan 1970 00:00:01 GMT")}function s(){var t=n();e.each(t,function(e,t){r(t)})}function a(t){e.each(l,function(e){t.on("change:"+e,function(t,n){o(e,n)})})}var l=["volume","mute","captionLabel","qualityLabel"];return{model:a,getAllItems:n,getItem:i,setItem:o,removeItem:r,clear:s}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(76),n(64),n(45)],o=function(e,t,n){function i(e){e.mediaController.off(t.JWPLAYER_MEDIA_PLAY_ATTEMPT,e._onPlayAttempt),e.mediaController.off(t.JWPLAYER_PROVIDER_FIRST_FRAME,e._triggerFirstFrame),e.mediaController.off(t.JWPLAYER_MEDIA_TIME,e._onTime)}function o(e){i(e),e._triggerFirstFrame=n.once(function(){var n=e._qoeItem;n.tick(t.JWPLAYER_MEDIA_FIRST_FRAME);var o=n.between(t.JWPLAYER_MEDIA_PLAY_ATTEMPT,t.JWPLAYER_MEDIA_FIRST_FRAME);e.mediaController.trigger(t.JWPLAYER_MEDIA_FIRST_FRAME,{loadTime:o}),i(e)}),e._onTime=s(e._triggerFirstFrame),e._onPlayAttempt=function(){e._qoeItem.tick(t.JWPLAYER_MEDIA_PLAY_ATTEMPT)},e.mediaController.once(t.JWPLAYER_MEDIA_PLAY_ATTEMPT,e._onPlayAttempt),e.mediaController.once(t.JWPLAYER_PROVIDER_FIRST_FRAME,e._triggerFirstFrame),e.mediaController.on(t.JWPLAYER_MEDIA_TIME,e._onTime)}function r(n){n.on("change:mediaModel",function(n,i,r){n._qoeItem&&n._qoeItem.end(r.get("state")),n._qoeItem=new e,n._qoeItem.tick(t.JWPLAYER_PLAYLIST_ITEM),n._qoeItem.start(i.get("state")),o(n),i.on("change:state",function(e,t,i){n._qoeItem.end(i),n._qoeItem.start(t)})})}var s=function(e){var t=Number.MIN_VALUE;return function(n){n.position>t&&e(),t=n.position}};return{model:r}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(45),n(67)],o=function(e,t){var n=e.extend({get:function(e){return this[e]},set:function(e,t){if(this[e]!==t){var n=this[e];this[e]=t,this.trigger("change:"+e,this,t,n)}}},t);return n}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(106),n(108),n(109),n(64),n(65),n(48),n(67),n(45)],o=function(e,t,n,i,o,r,s,a){function l(n){var i=n.get("provider").name||"";return i.indexOf("flash")>=0?t:e}var c={skipoffset:null,tag:null},u=function(e,t,s){function u(e,t){t=t||{},k.tag&&!t.tag&&(t.tag=k.tag),this.trigger(e,t)}function d(e){this._skipButton&&this._skipButton.updateMediaTime(e.position,e.duration)}function A(e){if(v._adModel.state="complete",p&&b+1<p.length){this._skipButton&&this._skipButton.destroy(),b++;var t,n=p[b];w&&(t=w[b]),this.loadItem(n,t)}else e.type===i.JWPLAYER_MEDIA_COMPLETE&&(u.call(this,e.type,e),this.trigger(i.JWPLAYER_PLAYLIST_COMPLETE,{})),this.destroy()}var p,w,f,g,h,m,j=l(t),v=new j(e,t),b=0,k={},E=a.bind(function(e){e=e||{},e.hasControls=!!t.get("controls"),this.trigger(i.JWPLAYER_INSTREAM_CLICK,e),v&&v._adModel&&(v._adModel.state===o.PAUSED?e.hasControls&&v.instreamPlay():v.instreamPause())},this),y=a.bind(function(){v&&v._adModel&&v._adModel.state===o.PAUSED&&t.get("controls")&&(e.setFullscreen(),
e.play())},this);this.type="instream",this.init=function(){return f=t.getVideo(),g=t.position,m=t.playlist[t.item],v.on("all",u,this),v.on(i.JWPLAYER_MEDIA_TIME,d,this),v.on(i.JWPLAYER_MEDIA_COMPLETE,A,this),v.init(),f.detachMedia(),e.checkBeforePlay()||0===g&&!f.checkComplete()?(g=0,h=o.PLAYING):h=f&&f.checkComplete()?o.IDLE:t.get("state")===o.IDLE?o.IDLE:o.PLAYING,h===o.PLAYING&&f.pause(),s.setupInstream(v._adModel),s.clickHandler().setAlternateClickHandlers(r.noop,null),this.setText("Loading ad"),this},this.loadItem=function(e,t){return r.isAndroid(2.3)?void this.trigger({type:i.JWPLAYER_ERROR,message:"Error loading instream: Cannot play instream on Android 2.3"}):(a.isArray(e)&&(p=e,w=t,e=p[b],w&&(t=w[b])),this.trigger(i.JWPLAYER_PLAYLIST_ITEM,{index:b,item:e}),k=a.extend({},c,t),v.load(e),this.addClickHandler(),void(k.skipoffset&&(this._skipButton&&this._skipButton.destroy(),this._skipButton=new n(k.skipMessage,k.skipText),this._skipButton.on(i.JWPLAYER_AD_SKIPPED,this.skipAd,this),this._skipButton.setWaitTime(k.skipoffset),s.controlsContainer().appendChild(this._skipButton.element()))))},this.play=function(){v.instreamPlay()},this.pause=function(){v.instreamPause()},this.hide=function(){v.hide()},this.addClickHandler=function(){s.clickHandler().setAlternateClickHandlers(E,y),v.on(i.JWPLAYER_MEDIA_META,this.metaHandler,this)},this.skipAd=function(e){var t=i.JWPLAYER_AD_SKIPPED;this.trigger(t,e),A.call(this,{type:t})},this.metaHandler=function(e){e.width&&e.height&&s.resizeMedia()},this.destroy=function(){if(this.off(),this._skipButton&&(s.controlsContainer().removeChild(this._skipButton.element()),this._skipButton=null),v){if(s.clickHandler()&&s.clickHandler().revertAlternateClickHandlers(),v.instreamDestroy(),s.destroyInstream(),v=null,e.attachMedia(),h!==o.IDLE){var n=a.extend({},m);n.starttime=g,t.loadVideo(n)}else f.stop();h===o.PLAYING&&f.play()}},this.getState=function(){return v&&v._adModel?v._adModel.get("state"):!1},this.setText=function(e){s.setAltText(e?e:"")},this.hide=function(){s.useExternalControls()}};return a.extend(u.prototype,s),u}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(45),n(67),n(107),n(64),n(65),n(100)],o=function(e,t,n,i,o,r){var s=function(s,a){function l(){var e=w.getVideo();if(f!==e){if(f=e,!e)return;e.resetEventListeners(),e.addGlobalListener(u),e.addEventListener(i.JWPLAYER_MEDIA_BUFFER_FULL,p),e.addEventListener(i.JWPLAYER_PLAYER_STATE,c),e.attachMedia(),e.mute(a.mute),e.volume(a.volume),w.on("change:state",n,g)}}function c(e){switch(e.newstate){case o.PLAYING:w.set("state",e.newstate);break;case o.PAUSED:w.set("state",e.newstate)}}function u(e){g.trigger(e.type,e)}function d(e){a.trigger(e.type,e),g.trigger(i.JWPLAYER_FULLSCREEN,{fullscreen:e.jwstate})}function A(e){u(e)}function p(){w.getVideo().play()}var w,f,g=e.extend(this,t);return s.on(i.JWPLAYER_FULLSCREEN,A),this.init=function(){w=(new r).setup({id:a.id,volume:a.volume,fullscreen:a.fullscreen,mute:a.mute}),w.on("fullscreenchange",d),this._adModel=w},g.load=function(e){w.setPlaylist([e]),l(),w.off(i.JWPLAYER_ERROR),w.on(i.JWPLAYER_ERROR,u),w.loadVideo()},this.instreamDestroy=function(){w&&(w.off(),g.off(),f&&(f.detachMedia(),f.resetEventListeners(),f.destroy()),w=null)},g.instreamPlay=function(){w.getVideo()&&w.getVideo().play(!0)},g.instreamPause=function(){w.getVideo()&&w.getVideo().pause(!0)},g};return s}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(65)],o=function(e){function t(t){return t===e.COMPLETE||t===e.ERROR?e.IDLE:t}return function(e,n,i){if(n=t(n),i=t(i),n!==i){var o=n.replace(/(?:ing|d)$/,""),r={type:o,newstate:n,oldstate:i,reason:e.mediaModel.get("state")};this.trigger(o,r)}}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(67),n(100),n(107),n(64),n(65),n(45)],o=function(e,t,n,i,o,r){var s=function(e,i){this.controller=e,this.model=i,this._adModel=(new t).setup({id:i.id,volume:i.volume,fullscreen:i.fullscreen,mute:i.mute}),this._adModel.on("change:state",n,this);var o=e.getContainer();this.swf=o.querySelector("object")};return s.prototype=r.extend({init:function(){this.swf.on("instream:state",function(e){switch(e.newstate){case o.PLAYING:this._adModel.set("state",e.newstate);break;case o.PAUSED:this._adModel.set("state",e.newstate)}},this).on("instream:time",function(e){this._adModel.set("position",e.position),this._adModel.set("duration",e.duration),this.trigger(i.JWPLAYER_MEDIA_TIME,e)},this).on("instream:complete",function(e){this.trigger(i.JWPLAYER_MEDIA_COMPLETE,e)},this).on("instream:error",function(e){this.trigger(i.JWPLAYER_MEDIA_ERROR,e)},this),this.swf.triggerFlash("instream:init")},instreamDestroy:function(){this._adModel&&(this.off(),this.swf.off(null,null,this),this.swf.triggerFlash("instream:destroy"),this.swf=null,this._adModel.off(),this._adModel=null,this.model=null,this.controller=null)},load:function(e){this.swf.triggerFlash("instream:load",e)},instreamPlay:function(){this.swf.triggerFlash("instream:play")},instreamPause:function(){this.swf.triggerFlash("instream:pause")}},e),s}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(48),n(64),n(110),n(67),n(45),n(111)],o=function(e,t,n,i,o,r){var s=function(e,t){this.skipMessage=t,this.skipMessageCountdown=e,this.skipMessage=t,this.setup()};return o.extend(s.prototype,i,{setup:function(){this.destroy();var t=r();this.el=e.createElement(t),this.skiptext=this.el.getElementsByClassName("jw-skiptext")[0],this.skipAdOnce=o.once(this.skipAd),new n(this.el).on("click tap",o.bind(function(){this.skippable&&this.skipAdOnce()},this))},updateMessage:function(e){this.skiptext.innerHTML=e},updateCountdown:function(e){this.updateMessage(this.skipMessageCountdown.replace(/xx/gi,Math.ceil(this.waitTime-e)))},updateMediaTime:function(t,n){if(this.waitPercentage){if(!n)return;this.itemDuration=n,this.setWaitTime(this.waitPercentage),delete this.waitPercentage}e.removeClass(this.el,"jw-hidden"),this.waitTime-t>0?this.updateCountdown(t):(this.updateMessage(this.skipMessage),this.skippable=!0,e.addClass(this.el,"jw-skippable"))},element:function(){return this.el},setWaitTime:function(t){if(o.isString(t)&&"%"===t.slice(-1)){var n=parseFloat(t);return void(this.itemDuration&&!isNaN(n)?this.waitTime=this.itemDuration*n/100:this.waitPercentage=t)}o.isNumber(t)?this.waitTime=t:"string"===e.typeOf(t)?this.waitTime=e.seconds(t):isNaN(Number(t))?this.waitTime=0:this.waitTime=Number(t)},skipAd:function(){this.trigger(t.JWPLAYER_AD_SKIPPED)},destroy:function(){this.el&&(this.el.removeEventListener("click",this.skipAdOnce),this.el.parentElement&&this.el.parentElement.removeChild(this.el)),delete this.skippable,delete this.itemDuration,delete this.waitPercentage}}),s}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(67),n(64),n(45),n(48)],o=function(e,t,n,i){function o(e,t){return/touch/.test(e.type)?(e.originalEvent||e).changedTouches[0]["page"+t]:e["page"+t]}function r(e){var t=e||window.event;return"which"in t?3===t.which:"button"in t?2===t.button:!1}function s(e,t,n){var i;return i=t instanceof MouseEvent||!t.touches&&!t.changedTouches?t:t.touches&&t.touches.length?t.touches[0]:t.changedTouches[0],{type:e,target:t.target,currentTarget:n,pageX:i.pageX,pageY:i.pageY}}function a(e){(e instanceof MouseEvent||e instanceof l)&&(e.preventManipulation&&e.preventManipulation(),e.cancelable&&e.preventDefault&&e.preventDefault())}var l=window.TouchEvent||{},c=function(e,l){function c(e){var t=e instanceof MouseEvent;p=e.target,m=o(e,"X"),j=o(e,"Y"),(!t||t&&!r(e))&&(k&&document.addEventListener("mousemove",u),p.addEventListener("touchmove",u)),k&&document.addEventListener("mouseup",d),p.addEventListener("touchcancel",d),p.addEventListener("touchend",d)}function u(e){var n=t.touchEvents,i=6;if(h)A(n.DRAG,e);else{var r=o(e,"X"),s=o(e,"Y"),l=r-m,c=s-j;l*l+c*c>i*i&&(A(n.DRAG_START,e),h=!0,A(n.DRAG,e))}g&&a(e)}function d(e){var n=t.touchEvents;k&&(document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",d)),p.removeEventListener("touchmove",u),p.removeEventListener("touchcancel",d),p.removeEventListener("touchend",d),h?A(n.DRAG_END,e):e instanceof MouseEvent?r(e)||A(n.CLICK,e):(A(n.TAP,e),a(e)),p=null,h=!1}function A(e,i){var o;if(f&&(e===t.touchEvents.CLICK||e===t.touchEvents.TAP))if(n.now()-v<b){var r=e===t.touchEvents.CLICK?t.touchEvents.DOUBLE_CLICK:t.touchEvents.DOUBLE_TAP;o=s(r,i,w),E.trigger(r,o),v=0}else v=n.now();o=s(e,i,w),E.trigger(e,o)}var p,w=e,f=l&&l.enableDoubleTap,g=l&&l.preventScrolling,h=!1,m=0,j=0,v=0,b=300,k=!i.isMobile();k&&e.addEventListener("mousedown",c),e.addEventListener("touchstart",c);var E=this;return this.triggerEvent=A,this.destroy=function(){e.removeEventListener("touchstart",c),e.removeEventListener("mousedown",c),p&&(p.removeEventListener("touchmove",u),p.removeEventListener("touchcancel",d),p.removeEventListener("touchend",d)),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",d)},this};return n.extend(c.prototype,e),c}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i=n(112);e.exports=(i["default"]||i).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){return'<div class="jw-skip jw-background-color jw-hidden jw-reset">\n    <span class="jw-text jw-skiptext jw-reset"></span>\n    <span class="jw-icon-inline jw-skip-icon jw-reset"></span>\n</div>'},useData:!0})},function(e,t,n){e.exports=n(113)},function(e,t,n){"use strict";var i=n(114),o=n(116)["default"],r=n(117)["default"],s=n(115),a=n(118),l=function(){var e=new i.HandlebarsEnvironment;return s.extend(e,i),e.SafeString=o,e.Exception=r,e.Utils=s,e.escapeExpression=s.escapeExpression,e.VM=a,e.template=function(t){return a.template(t,e)},e},c=l();c.create=l,c["default"]=c,t["default"]=c},function(e,t,n){"use strict";function i(e,t){this.helpers=e||{},this.partials=t||{},o(this)}function o(e){e.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new s("Missing helper: '"+arguments[arguments.length-1].name+"'")}),e.registerHelper("blockHelperMissing",function(t,n){var i=n.inverse,o=n.fn;if(t===!0)return o(this);if(t===!1||null==t)return i(this);if(u(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):i(this);if(n.data&&n.ids){var s=g(n.data);s.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:s}}return o(t,n)}),e.registerHelper("each",function(e,t){if(!t)throw new s("Must pass iterator to #each");var n,i,o=t.fn,a=t.inverse,l=0,c="";if(t.data&&t.ids&&(i=r.appendContextPath(t.data.contextPath,t.ids[0])+"."),d(e)&&(e=e.call(this)),t.data&&(n=g(t.data)),e&&"object"==typeof e)if(u(e))for(var A=e.length;A>l;l++)n&&(n.index=l,n.first=0===l,n.last=l===e.length-1,i&&(n.contextPath=i+l)),c+=o(e[l],{data:n});else for(var p in e)e.hasOwnProperty(p)&&(n&&(n.key=p,n.index=l,n.first=0===l,i&&(n.contextPath=i+p)),c+=o(e[p],{data:n}),l++);return 0===l&&(c=a(this)),c}),e.registerHelper("if",function(e,t){return d(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||r.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers["if"].call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}),e.registerHelper("with",function(e,t){d(e)&&(e=e.call(this));var n=t.fn;if(r.isEmpty(e))return t.inverse(this);if(t.data&&t.ids){var i=g(t.data);i.contextPath=r.appendContextPath(t.data.contextPath,t.ids[0]),t={data:i}}return n(e,t)}),e.registerHelper("log",function(t,n){var i=n.data&&null!=n.data.level?parseInt(n.data.level,10):1;e.log(i,t)}),e.registerHelper("lookup",function(e,t){return e&&e[t]})}var r=n(115),s=n(117)["default"],a="2.0.0";t.VERSION=a;var l=6;t.COMPILER_REVISION=l;var c={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};t.REVISION_CHANGES=c;var u=r.isArray,d=r.isFunction,A=r.toString,p="[object Object]";t.HandlebarsEnvironment=i,i.prototype={constructor:i,logger:w,log:f,registerHelper:function(e,t){if(A.call(e)===p){if(t)throw new s("Arg not supported with multiple helpers");r.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){A.call(e)===p?r.extend(this.partials,e):this.partials[e]=t},unregisterPartial:function(e){delete this.partials[e]}};var w={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,t){if(w.level<=e){var n=w.methodMap[e];"undefined"!=typeof console&&console[n]&&console[n].call(console,t)}}};t.logger=w;var f=w.log;t.log=f;var g=function(e){var t=r.extend({},e);return t._parent=e,t};t.createFrame=g},function(e,t,n){"use strict";function i(e){return c[e]}function o(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}function r(e){return e instanceof l?e.toString():null==e?"":e?(e=""+e,d.test(e)?e.replace(u,i):e):e+""}function s(e){return e||0===e?w(e)&&0===e.length?!0:!1:!0}function a(e,t){return(e?e+".":"")+t}var l=n(116)["default"],c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},u=/[&<>"'`]/g,d=/[&<>"'`]/;t.extend=o;var A=Object.prototype.toString;t.toString=A;var p=function(e){return"function"==typeof e};p(/x/)&&(p=function(e){return"function"==typeof e&&"[object Function]"===A.call(e)});var p;t.isFunction=p;var w=Array.isArray||function(e){return e&&"object"==typeof e?"[object Array]"===A.call(e):!1};t.isArray=w,t.escapeExpression=r,t.isEmpty=s,t.appendContextPath=a},function(e,t){"use strict";function n(e){this.string=e}n.prototype.toString=function(){return""+this.string},t["default"]=n},function(e,t){"use strict";function n(e,t){var n;t&&t.firstLine&&(n=t.firstLine,e+=" - "+n+":"+t.firstColumn);for(var o=Error.prototype.constructor.call(this,e),r=0;r<i.length;r++)this[i[r]]=o[i[r]];n&&(this.lineNumber=n,this.column=t.firstColumn)}var i=["description","fileName","lineNumber","message","name","number","stack"];n.prototype=new Error,t["default"]=n},function(e,t,n){"use strict";function i(e){var t=e&&e[0]||1,n=d;if(t!==n){if(n>t){var i=A[n],o=A[t];throw new u("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+o+").")}throw new u("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function o(e,t){if(!t)throw new u("No environment passed to template");if(!e||!e.main)throw new u("Unknown template object: "+typeof e);t.VM.checkRevision(e.compiler);var n=function(n,i,o,r,s,a,l,d,A){s&&(r=c.extend({},r,s));var p=t.VM.invokePartial.call(this,n,o,r,a,l,d,A);if(null==p&&t.compile){var w={helpers:a,partials:l,data:d,depths:A};l[o]=t.compile(n,{data:void 0!==d,compat:e.compat},t),p=l[o](r,w)}if(null!=p){if(i){for(var f=p.split("\n"),g=0,h=f.length;h>g&&(f[g]||g+1!==h);g++)f[g]=i+f[g];p=f.join("\n")}return p}throw new u("The partial "+o+" could not be compiled when running in runtime-only mode")},i={lookup:function(e,t){for(var n=e.length,i=0;n>i;i++)if(e[i]&&null!=e[i][t])return e[i][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:c.escapeExpression,invokePartial:n,fn:function(t){return e[t]},programs:[],program:function(e,t,n){var i=this.programs[e],o=this.fn(e);return t||n?i=r(this,e,o,t,n):i||(i=this.programs[e]=r(this,e,o)),i},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=c.extend({},t,e)),n},noop:t.VM.noop,compilerInfo:e.compiler},o=function(t,n){n=n||{};var r=n.data;o._setup(n),!n.partial&&e.useData&&(r=l(t,r));var s;return e.useDepths&&(s=n.depths?[t].concat(n.depths):[t]),e.main.call(i,t,i.helpers,i.partials,r,s)};return o.isTop=!0,o._setup=function(n){n.partial?(i.helpers=n.helpers,i.partials=n.partials):(i.helpers=i.merge(n.helpers,t.helpers),e.usePartial&&(i.partials=i.merge(n.partials,t.partials)))},o._child=function(t,n,o){if(e.useDepths&&!o)throw new u("must pass parent depths");return r(i,t,e[t],n,o)},o}function r(e,t,n,i,o){var r=function(t,r){return r=r||{},n.call(e,t,e.helpers,e.partials,r.data||i,o&&[t].concat(o))};return r.program=t,r.depth=o?o.length:0,r}function s(e,t,n,i,o,r,s){var a={partial:!0,helpers:i,partials:o,data:r,depths:s};if(void 0===e)throw new u("The partial "+t+" could not be found");return e instanceof Function?e(n,a):void 0}function a(){return""}function l(e,t){return t&&"root"in t||(t=t?p(t):{},t.root=e),t}var c=n(115),u=n(117)["default"],d=n(114).COMPILER_REVISION,A=n(114).REVISION_CHANGES,p=n(114).createFrame;t.checkRevision=i,t.template=o,t.program=r,t.invokePartial=s,t.noop=a},function(e,t,n){var i,o;i=[n(48),n(64),n(67),n(65),n(122),n(123),n(124),n(125),n(127),n(120),n(129),n(142),n(143),n(146),n(62),n(45),n(147)],o=function(e,t,n,i,o,r,s,a,l,c,u,d,A,p,w,f,g){var h=e.style,m=e.bounds,j=e.isMobile(),v=e.isIPad(),b=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],k=function(k,E){function y(t){var n=e.between(E.get("position")+t,0,this.getDuration());this.seek(n)}function C(t){var n=e.between(this.getVolume()+t,0,100);this.setVolume(n)}function x(e){return e.ctrlKey||e.metaKey?!1:E.get("controls")?!0:!1}function L(e){if(!x(e))return!0;switch(Ye||oe(),e.keyCode){case 27:k.setFullscreen(!1);break;case 13:case 32:k.play();break;case 37:Ye||y.call(k,-5);break;case 39:Ye||y.call(k,5);break;case 38:C.call(k,10);break;case 40:C.call(k,-10);break;case 77:k.setMute();break;case 70:k.setFullscreen();break;default:if(e.keyCode>=48&&e.keyCode<=59){var t=e.keyCode-48,n=t/10*k.getDuration();k.seek(n)}}return/13|32|37|38|39|40/.test(e.keyCode)?(e.preventDefault(),!1):void 0}function R(){Ue=!0,We.trigger(t.JWPLAYER_VIEW_TAB_FOCUS,{hasFocus:!1})}function I(){var e=!Ue;Ue=!1,e&&We.trigger(t.JWPLAYER_VIEW_TAB_FOCUS,{hasFocus:!0}),Ye||oe()}function B(){Ue=!1,We.trigger(t.JWPLAYER_VIEW_TAB_FOCUS,{hasFocus:!1})}function M(){var e=m(pe),n=Math.round(e.width),i=Math.round(e.height);return document.body.contains(pe)?n&&i&&(n!==me||i!==je)&&(me=n,je=i,clearTimeout(Oe),Oe=setTimeout(q,50),We.trigger(t.JWPLAYER_RESIZE,{width:n,height:i})):(window.removeEventListener("resize",M),j&&window.removeEventListener("orientationchange",M)),e}function P(t,n,i){i&&e.removeClass(pe,"jw-stretch-"+i),e.addClass(pe,"jw-stretch-"+n)}function D(e){e&&!j&&(e.element().addEventListener("mousemove",S,!1),e.element().addEventListener("mouseout",F,!1))}function T(){E.get("state")!==i.IDLE&&E.get("state")!==i.COMPLETE||!E.get("controls")||k.play(),Ne?ie():oe()}function _(e){e.link?(k.pause(!0),k.setFullscreen(!1),window.open(e.link,e.linktarget)):k.play()}function S(){clearTimeout(Se)}function F(){oe()}function Y(e){We.trigger(e.type,e)}function Q(){E.get("controls")&&k.setFullscreen()}function N(){Ve(),E.on("change:controls",Ve),Ee=new s(E,ge),Ee.on("click",function(){Y({type:t.JWPLAYER_DISPLAY_CLICK}),E.get("controls")&&k.play()}),Ee.on("tap",function(){Y({type:t.JWPLAYER_DISPLAY_CLICK}),T()}),Ee.on("doubleClick",Q);var n=new a(E);n.on("click",function(){Y({type:t.JWPLAYER_DISPLAY_CLICK}),k.play()}),n.on("tap",function(){Y({type:t.JWPLAYER_DISPLAY_CLICK}),T()}),fe.appendChild(n.element()),Ce=new l(E),xe=new c(E),xe.on(t.JWPLAYER_LOGO_CLICK,_);var i=document.createElement("div");i.className="jw-controls-right jw-reset",E.get("config").logo&&i.appendChild(xe.element()),i.appendChild(Ce.element()),fe.appendChild(i),Re=new r(E),Re.setup(E.get("config").captions),fe.parentNode.insertBefore(Re.element(),Le.element()),j?e.addClass(pe,"jw-flag-touch-screen"):(Me=new A,Me.setup(E,pe,pe)),be=new u(k,E),be.on(t.JWPLAYER_USER_ACTION,oe),E.on("change:scrubbing",U),fe.appendChild(be.element()),E.get("castAvailable")&&We.forceControls(!0),pe.onfocusin=I,pe.onfocusout=B,pe.addEventListener("focus",I),pe.addEventListener("blur",B),pe.addEventListener("keydown",L),pe.onmousedown=R}function O(t,n){e.toggleClass(fe,"jw-hidden",n),n&&le(t,t.get("state"))}function J(t){return t.get("state")===i.PAUSED?void t.once("change:state",J):void(t.get("scrubbing")===!1&&e.removeClass(pe,"jw-flag-dragging"))}function U(t,n){t.off("change:state",J),n?e.addClass(pe,"jw-flag-dragging"):J(t)}function W(e){if(e.done)return void G();if(!e.complete){Ye||z(),this.setAltText(e.message);var t=e.onClick;void 0!==t&&Ee.setAlternateClickHandlers(function(){t(e)},k.setFullscreen);var n=e.onSkipAd;void 0!==n&&ye&&ye.setSkipoffset(e,e.onSkipAd)}ye&&ye.adChanged(e)}function z(){e.addClass(pe,"jw-flag-ads")}function G(){this.setAltText(""),e.removeClass(pe,"jw-flag-ads"),ye&&(ye.adsEnded(),ye.setState(E.get("state"))),Ee.revertAlternateClickHandlers()}function V(t,n,i){var o,r=pe.className,s=E.get("id")+"_view";w.block(s),i=!!i,i&&(r=r.replace(/\s*aspectMode/,""),pe.className!==r&&(pe.className=r),w.style(pe,{display:"block"},i)),e.exists(t)&&e.exists(n)&&(E.set("width",t),E.set("height",n)),o={width:t},e.hasClass(pe,"jw-flag-aspect-mode")||(o.height=n),h(pe,o,!0),xe&&xe.offset(be&&xe.position().indexOf("bottom")>=0?be.element().clientHeight:0),H(n),q(t,n),w.unblock(s)}function H(t){if(Ie=K(t),be&&!Ie){var n=Ye?ve:E;Ae(n.get("state"))}e.toggleClass(pe,"jw-flag-audio-player",Ie)}function K(e){return E.get("aspectratio")?!1:f.isNumber(e)?X(e):f.isString(e)&&e.indexOf("%")>-1?!1:X(m(we).height)}function X(e){return e&&40>=e}function q(t,n){if(!t||isNaN(Number(t))){if(!ge)return;t=ge.clientWidth}if(!n||isNaN(Number(n))){if(!ge)return;n=ge.clientHeight}e.isMSIE(9)&&document.all&&!window.atob&&(t=n="100%");var i=E.getVideo();if(i){var o=i.resize(t,n,E.get("stretching"));o&&(clearTimeout(Oe),Oe=setTimeout(q,250)),Re.resize()}}function Z(){if(Je){var e=document.fullscreenElement||document.webkitCurrentFullScreenElement||document.mozFullScreenElement||document.msFullscreenElement;return!(!e||e.id!==E.get("id"))}return Ye?ve.getVideo().getFullScreen():E.getVideo().getFullScreen()}function $(e){var t=void 0!==e.jwstate?e.jwstate:Z();Je?ee(pe,t):te(t)}function ee(t,n){e.removeClass(t,"jw-flag-fullscreen"),n?(e.addClass(t,"jw-flag-fullscreen"),h(document.body,{"overflow-y":"hidden"}),oe()):h(document.body,{"overflow-y":""}),q(),te(n)}function te(e){E.setFullscreen(e),ve&&ve.setFullscreen(e);var t=Ye?ve:E;e?(clearTimeout(Oe),Oe=setTimeout(q,200)):v&&t.get("state")===i.PAUSED&&setTimeout(ne,500)}function ne(){j&&E.get("fullscreen")||E.getVideo().setControls(!1)}function ie(){Ne=!1,clearTimeout(Se),e.addClass(pe,"jw-flag-user-inactive")}function oe(){Ne=!0,e.removeClass(pe,"jw-flag-user-inactive"),clearTimeout(Se),Se=setTimeout(ie,Fe)}function re(){Be=!0,He(!1),E.get("controls")}function se(){ye&&ye.setState(E.get("state"));var t=ue();e.toggleClass(pe,"jw-flag-media-audio",t),E.on("change:duration",ae,this)}function ae(t,n){var i="LIVE"===e.adaptiveType(n);e.toggleClass(pe,"jw-flag-live",i),We.setAltText(i?"Live Broadcast":"")}function le(e,t){Be=!1,Ae(t)}function ce(e){le(E,i.ERROR),Le.updateText(E,{title:e.message})}function ue(){var e=Ye?ve:E,t=e.getVideo();return t?t.isAudioFile():!1}function de(){var e=E.getVideo();return e?e.isCaster:!1}function Ae(t){if(e.removeClass(pe,"jw-state-"+Pe),e.addClass(pe,"jw-state-"+t),Pe=t,de())return void e.addClass(ge,"jw-media-show");switch(t){case i.PLAYING:q();break;case i.IDLE:case i.ERROR:case i.COMPLETE:Ie||ne();break;case i.BUFFERING:ne();break;case i.PAUSED:oe(),ne()}}var pe,we,fe,ge,he,me,je,ve,be,ke,Ee,ye,Ce,xe,Le,Re,Ie,Be,Me,Pe,De,Te,_e,Se=-1,Fe=j?4e3:2e3,Ye=!1,Qe=!1,Ne=!1,Oe=-1,Je=!1,Ue=!1,We=f.extend(this,n);pe=e.createElement(g({id:E.get("id")}));var ze=E.get("width"),Ge=E.get("height");h(pe,{width:ze.toString().indexOf("%")>0?ze:ze+"px",height:Ge.toString().indexOf("%")>0?Ge:Ge+"px"}),Te=pe.requestFullscreen||pe.webkitRequestFullscreen||pe.webkitRequestFullScreen||pe.mozRequestFullScreen||pe.msRequestFullscreen,_e=document.exitFullscreen||document.webkitExitFullscreen||document.webkitCancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen,Je=Te&&_e,this.onChangeSkin=function(t,n,i){i&&e.removeClass(pe,"jw-skin-"+i),n&&e.addClass(pe,"jw-skin-"+n)},this.handleColorOverrides=function(){function t(t,i,o){if(o){i=e.prefix(i,"#"+n+" ");var r={};r[t]=o,w.css(i.join(", "),r)}}var n=E.get("id");t("color",[".jw-button-color"],E.get("skinColorInactive")),t("color",[".jw-button-color:hover"],E.get("skinColorActive")),t("color",[".jw-option"],E.get("skinColorInactive")),t("background-color",[".jw-active-option"],E.get("skinColorActive")),t("color",[".jw-toggle"],E.get("skinColorActive")),t("color",[".jw-toggle.jw-off"],E.get("skinColorInactive")),t("background",[".jw-progress"],E.get("skinColorActive")),t("background",[".jw-cue",".jw-knob"],E.get("skinColorInactive")),t("background",[".jw-background-color"],E.get("skinColorBackground"))},this.setup=function(){if(!Qe){this.handleColorOverrides(),E.get("skin-loading")===!0&&(e.addClass(pe,"jw-flag-skin-loading"),E.once("change:skin-loading",function(){e.removeClass(pe,"jw-flag-skin-loading")})),this.onChangeSkin(E,E.get("skin"),""),E.on("change:skin",this.onChangeSkin,this),we=pe,ge=pe.getElementsByClassName("jw-media")[0],fe=pe.getElementsByClassName("jw-controls")[0],he=pe.getElementsByClassName("jw-aspect")[0];var n=pe.getElementsByClassName("jw-preview")[0];if(ke=new d(E),ke.setup(n),!E.get("hidetitle")){var r=pe.getElementsByClassName("jw-title")[0];Le=new p(E),Le.setup(r)}N(),E.getVideo().setContainer(ge),E.mediaController.on("fullscreenchange",$);for(var s=b.length;s--;)document.addEventListener(b[s],$,!1);window.removeEventListener("resize",M),window.addEventListener("resize",M,!1),j&&(window.removeEventListener("orientationchange",M),window.addEventListener("orientationchange",M,!1)),E.on("change:controls",O),E.on("change:state",le),E.mediaController.on(t.JWPLAYER_MEDIA_ERROR,ce),k.onPlaylistComplete(re),k.onPlaylistItem(se),E.on("change:castAvailable",function(t,n){e.toggleClass(fe,"jw-cast-available",n)}),E.get("stretching")&&P(E,E.get("stretching")),E.on("change:stretching",P),E.on("change:castState",function(e){ye||(ye=new o(E.get("id")),ye.statusDelegate=function(e,t){ye.setState(t)}),e.active?(ye.setState("connecting").setName(e.deviceName).show(),E.on("change:state",ye.statusDelegate),E.mediaController.on(t.JWPLAYER_CAST_AD_CHANGED,W)):(E.off("change:state",ye.statusDelegate),E.mediaController.off(t.JWPLAYER_CAST_AD_CHANGED,W),ye.hide(),Ye||G(),le(null,E.get("state")),M())}),le(null,i.IDLE),j||(Ee.element().addEventListener("mouseout",oe,!1),Ee.element().addEventListener("mousemove",oe,!1)),D(be),D(xe),E.get("aspectratio")&&(e.addClass(pe,"jw-flag-aspect-mode"),e.style(he,{"padding-top":E.get("aspectratio")})),setTimeout(function(){V(E.get("width"),E.get("height"))},0)}};var Ve=function(){E.get("controls")?e.removeClass(fe,"jw-controls-disabled"):e.addClass(fe,"jw-controls-disabled")},He=this.fullscreen=function(t){if(e.exists(t)||(t=!E.get("fullscreen")),t=!!t,t!==E.get("fullscreen")){var n=E.getVideo();Je?(t?Te.apply(pe):_e.apply(document),ee(pe,t)):e.isIE()?ee(pe,t):(ve&&ve.getVideo()&&ve.getVideo().setFullscreen(t),n.setFullscreen(t)),n&&0===n.getName().name.indexOf("flash")&&n.setFullscreen(t)}};this.resize=function(e,t){var n=!0;V(e,t,n),M()},this.resizeMedia=q,this.reset=function(){document.contains(pe)&&pe.parentNode.replaceChild(De,pe),e.emptyElement(pe)},this.setupInstream=function(t){ve=t,ve.on("change:controls",O,this),ve.on("change:state",le,this),Ye=!0,e.addClass(pe,"jw-flag-ads"),oe()},this.setAltText=function(e){be.setAltText(e)},this.useExternalControls=function(){e.addClass(pe,"jw-flag-ads-hide-controls")},this.destroyInstream=function(){if(Ye=!1,ve&&(ve.off(null,null,this),ve=null),this.setAltText(""),e.removeClass(pe,"jw-flag-ads"),e.removeClass(pe,"jw-flag-ads-hide-controls"),E.getVideo){var t=E.getVideo();t.setContainer(ge)}ae(E,E.get("duration")),Ee.revertAlternateClickHandlers()},this.addCues=function(e){be&&be.addCues(e)},this.clickHandler=function(){return Ee},this.controlsContainer=function(){return fe},this.getContainer=this.element=function(){return pe},this.getSafeRegion=function(t){var n={x:0,y:0,width:0,height:0};t=t||!e.exists(t);var i,o=m(we),r=o.top,s=be.getVisibleBounds(),a=E.get("dock");if(a&&a.length&&E.get("controls")&&(i=m(Ce.element()),n.y=Math.max(0,i.bottom-r)),n.width=o.width,s.height&&t&&E.get("controls")){var l=s.top;n.height=l-r-n.y}else n.height=o.height-n.y;return n},this.destroy=function(){window.removeEventListener("resize",M),window.removeEventListener("orientationchange",M);for(var e=b.length;e--;)document.removeEventListener(b[e],$,!1);E.mediaController&&E.mediaController.off("fullscreenchange",$),pe.removeEventListener("keydown",L,!1),Me&&Me.destroy(),ye&&(E.off("change:state",ye.statusDelegate),ye.destroy(),ye=null),fe&&(Ee.element().removeEventListener("mousemove",oe),Ee.element().removeEventListener("mouseout",oe)),Ye&&this.destroyInstream()}};return k}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(110),n(48),n(64),n(45),n(67),n(121)],o=function(e,t,n,i,o,r){var s=t.style,a={linktarget:"_blank",margin:8,hide:!1,position:"top-right"},l=function(l){function c(){p=i.extend({},a,f),p.hide="true"===p.hide.toString(),u()}function u(){if(A=t.createElement(r({file:p.file})),p.file){if(p.hide&&t.addClass(A,"jw-hide"),p.position!==a.position||p.margin!==a.margin){var n=/(\w+)-(\w+)/.exec(p.position),i={top:"auto",right:"auto",bottom:"auto",left:"auto"};3===n.length&&(i[n[1]]=p.margin,i[n[2]]=p.margin,s(A,i))}var o=new e(A);o.on("click tap",d)}}function d(e){t.exists(e)&&e.stopPropagation&&e.stopPropagation(),w.trigger(n.JWPLAYER_LOGO_CLICK,{link:p.link,linktarget:p.linktarget})}var A,p,w=this,f=i.extend({},l.get("config").logo);return i.extend(this,o),this.element=function(){return A},this.offset=function(e){s(A,{"margin-bottom":e})},this.position=function(){return p.position},this.margin=function(){return parseInt(p.margin,10)},c(),this};return l}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i=n(112);e.exports=(i["default"]||i).template({1:function(e,t,n,i){var o,r="function",s=t.helperMissing,a=this.escapeExpression;return'src="'+a((o=null!=(o=t.file||(null!=e?e.file:e))?o:s,typeof o===r?o.call(e,{name:"file",hash:{},data:i}):o))+'"'},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var o,r='<div class="jw-logo jw-reset">\n    <img class="jw-logo-image" ';return o=t["if"].call(e,null!=e?e.file:e,{name:"if",hash:{},fn:this.program(1,i),inverse:this.noop,data:i}),null!=o&&(r+=o),r+">\n</div>"},useData:!0})},function(e,t,n){var i,o;i=[n(48),n(64),n(65),n(109),n(45),n(62)],o=function(e,t,n,i,o,r){function s(e){var t,n,i,o=Number.MAX_VALUE,r=null;for(n=e.length;n--;)if(t=e[n],t.width&&t.height&&t.source)switch(t.type){case"html":case"iframe":case"application/x-shockwave-flash":break;default:i=Math.abs(t.width/t.height-f),o>i&&(o=i,.75>i&&(r=t))}return r}function a(e){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA"+p[e]}function l(){var e='"Karbon", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif';A(".jwplayer .jwcast-display",{display:"none",position:"absolute",width:"100%",height:"100%","background-repeat":"no-repeat","background-size":"auto","background-position":"50% 50%","background-image":a("display")}),A(".jwplayer .jwcast-label",{position:"absolute",left:10,right:10,bottom:"50%","margin-bottom":100,"text-align":"center"}),A(".jwplayer .jwcast-label span",{"font-family":e,"font-size":20,"font-weight":300,color:"#7a7a7a"}),A(".jwplayer span.jwcast-name",{color:"#ccc"}),A(".jwcast-button",{position:"absolute",width:"100%",height:"100%",opacity:0,"background-repeat":"no-repeat","background-size":"auto","background-position":"50% 50%"}),A(".jwcast-wheel",{"background-image":a("wheel")}),A(".jwcast-pause",{"background-image":a("pause")}),A(".jwcast-play",{"background-image":a("play")}),A(".jwcast-replay",{"background-image":a("replay")
}),A(".jwcast-paused .jwcast-play",{opacity:1}),A(".jwcast-playing .jwcast-pause",{opacity:1}),A(".jwcast-idle .jwcast-replay",{opacity:1}),r.cssKeyframes("spin","from {transform: rotate(0deg);} to {transform: rotate(360deg);}"),A(".jwcast-connecting .jwcast-wheel, .jwcast-buffering .jwcast-wheel",{opacity:1,"-webkit-animation":"spin 1.5s linear infinite",animation:"spin 1.5s linear infinite"}),A(".jwcast-companion",{position:"absolute","background-position":"50% 50%","background-size":"316px 176px","background-repeat":"no-repeat",top:0,left:0,right:0,bottom:4}),A(".jwplayer .jwcast-click-label",{"font-family":e,"font-size":14,"font-weight":300,"text-align":"center",position:"absolute",left:10,right:10,top:"50%",color:"#ccc","margin-top":100,"-webkit-user-select":"none","user-select":"none",cursor:"pointer"}),A(".jwcast-paused .jwcast-click-label",{color:"#7a7a7a",cursor:"default"})}function c(e,t){var n=document.createElement(e);return t&&u(n,t),n}function u(e,t){o.isArray(t)||(t=[t]),t=o.map(t,function(e){return e?"jw-cast-"+e.toLowerCase():""}),t.push("jw-reset"),e.className=t.join(" ")}function d(e,t){t.join||(t=[t]);for(var n=0;n<t.length;n++)e.appendChild(t[n])}var A=r.css,p={wheel:"DgAAAA4CAYAAACohjseAAACiUlEQVR42u3aP2sTYRzAcZ87Md6mhE5GhRqli0NC22yNKO1iaStSY+ggdKggal6BDXRoUuwbEG1LpE4B30LAxEGbKYgO7SVoUhJD04hOusRv4ZlCwP5LevfDgw9kCnzD5Z4/95xqtVqideNLTQzjKV4gCxtNtNwaqBBGCg3UkcYz3EUIV+F1W6AHj7CFb1hAEIbbb1GFByjjAyZgSvkPXkMGW7gt7SETwQ8swpL0FFV4jjpuShsmTiOFz7gobRxUWEceXokDfQKf0CdxJhNFFT6JU7Ur2MUtiXNRhXdYlDrZnkERZyUGerCNcanLpYfISV0PGtjEpNTAGyjBkBq4ggWpWxYmGghIDRzEDgypgTG8lbyrtoZ5yYFZ3JccWMKg5MCfGJAcuHf5/ge6xwX8lnyLDmCn/SEzJChwCKX2YSIqKDCKbPtAHxcUGAdNOhBPkBYUmAZNOhDXUYMSEKdQBU06EAp1BAUEBnWLgg4EXmJJQOASXnVa0YdRcfma0NAN4U6BCpu44+LASd2g0BYIPEbexYHvdQOfOwdaqLh063AcFVj73bq3XBRnoYiZ/b58ySDposAkMlD/DNT8aGLUBXGjaMJ/0Beg9/Dd4etEH2qIHOUVdgHnHRh3DgUkjnoIIYUNh0V6sYHXUIcO1Eyso4BLDoi7jC94A/O4DgIZWEYdYycYN4YalmF04yjXNJpIwOrxOJdAE9PdPoznRxZFTPUgbgI2svD38jjlLMrI61DjmFcFU/iICmZhnMSB2DOYg41tJBGAOuSPFkASZdiYg8cpR5pHsIIGqkgjjghC6Eef1o8QIphHGlU0sIYRGE4/lB7DKnL4il/Yu/5gFzZyWEUMwzC7sXUv2l9q1CPRZSGkLwAAAABJRU5ErkJggg==",display:"UAAAAC4AQMAAACo6KcpAAAABlBMVEV6enp6enqEWMsmAAAAAXRSTlMAQObYZgAAAEdJREFUeF7t2bEJACAMRcGAg7j/Fo6VTkvbIKSRe/XBH+DHLlaHK0qN7yAIgiAIgiAIgiAIgiAIgiAIgiAIgg0PZHfzbuUjPCPnO5qQcE/AAAAAAElFTkSuQmCC",pause:"CoAAAA2CAQAAAAb3sMwAAAAMElEQVR4Ae3MMQEAMAzDsIY/6AxB9/aRfyvt7GX2Ph8UCoVCoVAo9AiFQqFQKBQKfdYvoctOjDeGAAAAAElFTkSuQmCC",play:"DYAAAA2BAMAAAB+a3fuAAAAFVBMVEX///////////////////////////9nSIHRAAAABnRSTlMAP79AwMFfxd6iAAAAX0lEQVR4Xn3JQQGAABAEoaliFiPYYftHMMHBl55uQw455JBDDjnkkEMOOeSQQw455JBDDjnkkEMOOeSQQ+5O3HffW6hQoUKFChUqVKhQoUKFChUqVKhQoUKFChUqVKgfWHsiYI6VycIAAAAASUVORK5CYII=",replay:"DQAAAA8CAYAAAApK5mGAAADkklEQVRoBd3BW2iVBRwA8P/cWHMsv9QilLCITLCU0khpST6JCEXrQbKMCgrKFwsfZq/LMnRRIdkFvBQUvmShgg9iV02zB7FScyWlqNHNqbCJ7PKLkFHp952dnZ3tfOv3ixgGSLAVt8b/ARIX9WADJsVIhsR/daIV42MkQiJdO5ZjdIwkSBR2Ek+gJkYCJIpzEE2Rd0gMzB7MibxCojRbcEtUGsZgJu7HYixVuh6sx6QYLrgSD+Fd/GhodKIV42Ko4B68h07Dpx3NGB3lgnnYpbJOYFoMBm7ANpW3D3NjMPAgzqqsn7EIVVEqVGOtymrHMtTGYKAeWxSvB3vxIh7ANIzFNUpzAa0YF4OFWuxUnFNYjkmRAomB6cX7uDHKAdX4QP/asRRXRAFIFO8TzI5yQov+bcO1UQQk+ncITVFumIce2XqxHFVRJCSy/YolqIlyQwOOy9aNR2KAkLhcJ1agIYYKVsvWi6eiBEj8owfrMDEGAVVYiMcjDa7HBdlejhIhcdF2TI9BQiP2uOgsro5LYa1sX6M2SoQ6zItBwmRsdrnn498wDuel68aMqDBMQZd0v6Mu+mCJbBsiJ7BdtkXRB7ul68HNkRNolO3D+BvGoke6HZEz+Fa6c6gJNMn2WOQMmmW7K/CSbBMiZ3CbbM8EPpKuLXIIo3BWujcCh6TbEjmFr6TbGfhDulcip7BJugOBbulaIqfwlnRHQ7bnIqewVrpjgU7pVkZOYaN0hwOnpFsfOYWt0u0LfCnd55FT+EG6zYEN0p1BdeQMEnRLtzKwTLZZkTO4V7bFgTtka4mcwTrZrgtU47R0P6E6cgINOCfdkeiDjbItipzAs7K1Rh/Mle0gaqLC0IBTsk2PPhiFI7ItiwrDKtl2xaXwqGwdmBoVgrvRJdv8uBRq0CbbISQxzDARJ2TbG1kwX2GfoT6GCa7CN7J1Y0YUgk0K+wJjY4hhAg4o7LXoD8bjuMIOY1oMETTiuMIOoj6KgTvRobDzaEZtlAnq8QK6FHYGU2IgcB+69e97LEJNlAh1eBrH9K8DjVEKPIxuxTmJVZiFmugHajEHa/Cb4nRiQQwGmtBpYM7hU7yNFjSjGSuwDrvRYWD+RGOUA25Hm8rZj8lRThiDd9Br+PTgVdTFUMFcfGfo7cHMGA4YhYXYr/x2YQGqohIwG2vwi9Idw2pMjzzBVCzBm/gYR3EaXbiA02jDDryOJ3FTlNFfAO8ENqnn13UAAAAASUVORK5CYII="},w=!1,f=316/176,g=function(o){function a(){if(M){var e=M.element();e.parentNode&&e.parentNode.removeChild(e),M.resetEventListeners(),M=null}}function p(){null===D&&(D=c("div","click-label"),D.innerText="Click here to learn more >",d(v,D))}function g(){D&&(D.parentNode&&D.parentNode.removeChild(D),D=null)}function h(e){null===P&&(P=c("div","companion"),d(v,P));var t,n;e.width/e.height>f?(t=316,n=e.height*t/e.width):(n=176,t=e.width*n/e.height),r.style(P,{"background-image":e.source,"background-size":t+"px "+n+"px"})}function m(){P&&(P.parentNode&&P.parentNode.removeChild(P),P=null)}w||(l(),w=!0);var j=document.getElementById(o+"_display_button"),v=c("div","display"),b=c("div",["pause","button"]),k=c("div",["play","button"]),E=c("div",["replay","button"]),y=c("div",["wheel","button"]),C=c("div","label"),x=c("span"),L=c("span","name"),R="#"+o+"_display.jwdisplay",I=-1,B=null,M=null,P=null,D=null;d(v,[y,b,k,E,C]),d(C,[x,L]),j.parentNode.insertBefore(v,j),this.statusDelegate=null,this.setName=function(e){return L.innerText=e||"Google Cast",this},this.setState=function(e){var t="Casting to ";if(null===B)if("connecting"===e)t="Loading on ";else if(e!==n.IDLE){var i=window.jwplayer(o).getPlaylistItem().title||"";i&&(t=t.replace("to",i+" to"))}return x.innerText=t,clearTimeout(I),e===n.IDLE&&(I=setTimeout(function(){u(v,["display","idle"])},3e3),e=""),u(v,["display",e||""]),this},this.show=function(){return A(R+" .jwpreview",{"background-size":"316px 176px !important",opacity:.6,"margin-top":-2}),A(R+" .jwdisplayIcon",{display:"none !important"}),r.style(v,{display:"block"}),this},this.hide=function(){return r.clearCss(R+" .jwpreview"),A(R+" .jwdisplayIcon",{display:""}),r.style(v,{display:"none"}),this},this.setSkipoffset=function(n,r){if(null===M){var s=document.getElementById(o+"_controlbar"),a=10+e.bounds(v).bottom-e.bounds(s).top;M=new i(o,0|a,n.skipMessage,n.skipText),M.on(t.JWPLAYER_AD_SKIPPED,function(){r(n)}),M.reset(n.skipoffset||-1),M.show(),s.parentNode.insertBefore(M.element(),s)}else M.reset(n.skipoffset||-1)},this.setCompanions=function(e){var t=s(e);t?h(t):m()},this.adChanged=function(e){if(e.complete)return M&&M.reset(-1),void(B=null);M&&(void 0===e.skipoffset?a():(e.position||e.duration)&&M.updateSkipTime(0|e.position,0|e.duration));var t=e.tag+e.sequence;t!==B&&(A(R+" .jwpreview",{opacity:0}),e.companions?this.setCompanions(e.companions):m(),e.clickthrough?p():g(),B=t,this.setState(e.newstate))},this.adsEnded=function(){a(),m(),g(),A(R+" .jwpreview",{opacity:.6}),B=null},this.destroy=function(){this.hide(),v.parentNode&&v.parentNode.removeChild(v)}};return g}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(48),n(62),n(65),n(45)],o=function(e,t,n,i){var o=t.style,r={back:!0,fontSize:15,fontFamily:"Arial,sans-serif",fontOpacity:100,backgroundColor:"#000",backgroundOpacity:100,edgeStyle:null,windowColor:"#FFF",windowOpacity:0},s=function(s){function a(t){t=t||"";var n="jw-captions-window jw-reset";t?(f.innerHTML=t,w.className=n+" jw-captions-window-active"):(w.className=n,e.empty(f))}function l(e){if(e){var t=-1;if(!(A>=0&&c(e,h,A))){for(var n=0;n<e.length;n++)if(c(e,h,n)){t=n;break}-1===t?a(""):t!==A&&(A=t,a(e[A].text))}}}function c(e,t,n){return e[n].begin<=t&&(!e[n].end||e[n].end>=t)&&(n===e.length-1||e[n+1].begin>=t)}function u(e,n,i){var o=t.hexToRgba("#000000",i);"dropshadow"===e?n.textShadow="0 2px 1px "+o:"raised"===e?n.textShadow="0 0 5px "+o+", 0 1px 5px "+o+", 0 2px 5px "+o:"depressed"===e?n.textShadow="0 -2px 1px "+o:"uniform"===e&&(n.textShadow="-2px 0 1px "+o+",2px 0 1px "+o+",0 -2px 1px "+o+",0 2px 1px "+o+",-1px 1px 1px "+o+",1px 1px 1px "+o+",1px -1px 1px "+o+",1px 1px 1px "+o)}var d,A,p,w,f,g={},h=0;p=document.createElement("div"),p.className="jw-captions jw-reset",this.show=function(){p.className="jw-captions jw-captions-enabled jw-reset"},this.hide=function(){p.className="jw-captions jw-reset"},this.populate=function(e){return A=-1,d=e,e?void l(e.data):void a("")},this.resize=function(){var e=p.clientWidth,t=Math.pow(e/400,.6);if(t){var n=g.fontSize*t;o(p,{fontSize:Math.round(n)+"px"})}},this.setup=function(e){g=i.extend({},r,e);var n=g.fontOpacity,a=g.windowOpacity,l=g.edgeStyle,c=g.backgroundColor,d={},A={color:t.hexToRgba(t.rgbHex(g.color),n),fontFamily:g.fontFamily,fontStyle:g.fontStyle,fontWeight:g.fontWeight,textDecoration:g.textDecoration};a&&(d.backgroundColor=t.hexToRgba(t.rgbHex(g.windowColor),a)),u(l,A,n),g.back?A.backgroundColor=t.hexToRgba(t.rgbHex(c),g.backgroundOpacity):null===l&&u("uniform",A),w=document.createElement("div"),f=document.createElement("span"),w.className="jw-captions-window jw-reset",f.className="jw-captions-text jw-reset",o(w,d),o(f,A),w.appendChild(f),p.appendChild(w),this.populate(s.get("captionsTrack"))},this.update=function(e){h=e,d&&l(d.data)},this.element=function(){return p},s.on("change:captionsTrack",function(e,t){this.populate(t)},this),s.on("change:position",function(e,t){this.update(t)},this),s.mediaController.on("seek",function(e){this.update(e.position)},this),s.mediaController.on("subtitlesTrackData",function(){d&&l(d.data)},this),s.on("change:state",function(e,t){switch(t){case n.IDLE:case n.ERROR:case n.COMPLETE:this.hide();break;default:this.show()}},this)};return s}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(110),n(64),n(67),n(45)],o=function(e,t,n,i){var o=function(o,r){function s(e){return c?void c(e):void A.trigger(e.type===t.touchEvents.CLICK?"click":"tap")}function a(){return u?void u():void A.trigger("doubleClick")}var l,c,u;i.extend(this,n),l=r,this.element=function(){return l};var d=new e(l,{enableDoubleTap:!0});d.on("click tap",s),d.on("doubleClick doubleTap",a),this.clickHandler=s;var A=this;this.setAlternateClickHandlers=function(e,t){c=e,u=t||null},this.revertAlternateClickHandlers=function(){c=null,u=null}};return o}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(48),n(67),n(110),n(126),n(45)],o=function(e,t,n,i,o){var r=function(r){o.extend(this,t),this.model=r,this.el=e.createElement(i({}));var s=this;this.iconUI=new n(this.el).on("click tap",function(e){s.trigger(e.type)})};return o.extend(r.prototype,{element:function(){return this.el}}),r}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i=n(112);e.exports=(i["default"]||i).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){return'<div class="jw-display-icon-container jw-background-color jw-reset">\n    <div class="jw-icon jw-icon-display jw-button-color jw-reset"></div>\n</div>\n'},useData:!0})},function(e,t,n){var i,o;i=[n(128),n(48),n(45),n(110)],o=function(e,t,n,i){var o=function(e){this.model=e,this.setup(),this.model.on("change:dock",this.render,this)};return n.extend(o.prototype,{setup:function(){var n=this.model.get("dock"),o=this.click.bind(this),r=e(n);this.el=t.createElement(r),new i(this.el).on("click tap",o)},getDockButton:function(e){return t.hasClass(e.target,"jw-dock-button")?e.target:t.hasClass(e.target,"jw-dock-text")?e.target.parentElement.parentElement:e.target.parentElement},click:function(e){var t=this.getDockButton(e),i=t.getAttribute("button"),o=this.model.get("dock"),r=n.findWhere(o,{id:i});r&&r.callback&&r.callback()},render:function(){var n=this.model.get("dock"),i=e(n),o=t.createElement(i);this.el.innerHTML=o.innerHTML},element:function(){return this.el}}),o}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i=n(112);e.exports=(i["default"]||i).template({1:function(e,t,n,i){var o,r,s="function",a=t.helperMissing,l=this.escapeExpression,c='    <div class="jw-dock-button jw-background-color jw-reset" button="'+l((r=null!=(r=t.id||(null!=e?e.id:e))?r:a,typeof r===s?r.call(e,{name:"id",hash:{},data:i}):r))+'">\n        <div class="jw-icon jw-dock-image jw-reset" style="background-image: url('+l((r=null!=(r=t.img||(null!=e?e.img:e))?r:a,typeof r===s?r.call(e,{name:"img",hash:{},data:i}):r))+')"></div>\n        <div class="jw-arrow jw-reset"></div>\n';return o=t["if"].call(e,null!=e?e.tooltip:e,{name:"if",hash:{},fn:this.program(2,i),inverse:this.noop,data:i}),null!=o&&(c+=o),c+"    </div>\n"},2:function(e,t,n,i){var o,r="function",s=t.helperMissing,a=this.escapeExpression;return'        <div class="jw-overlay jw-background-color jw-reset">\n            <span class="jw-text jw-dock-text jw-reset">'+a((o=null!=(o=t.tooltip||(null!=e?e.tooltip:e))?o:s,typeof o===r?o.call(e,{name:"tooltip",hash:{},data:i}):o))+"</span>\n        </div>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var o,r='<div class="jw-dock jw-reset">\n';return o=t.each.call(e,e,{name:"each",hash:{},fn:this.program(1,i),inverse:this.noop,data:i}),null!=o&&(r+=o),r+"</div>"},useData:!0})},function(e,t,n){var i,o;i=[n(48),n(45),n(67),n(110),n(130),n(133),n(137),n(139),n(141)],o=function(e,t,n,i,o,r,s,a,l){function c(e,t){var n=document.createElement("div");return n.className="jw-icon jw-icon-inline jw-button-color jw-reset "+e,n.style.display="none",t&&new i(n).on("click tap",function(){t()}),{element:function(){return n},toggle:function(e){e?this.show():this.hide()},show:function(){n.style.display=""},hide:function(){n.style.display="none"}}}function u(e){var t=document.createElement("span");return t.className="jw-text jw-reset "+e,t}function d(e){var t=new s(e);return t}function A(e,n){var i=document.createElement("div");return i.className="jw-group jw-controlbar-"+e+"-group jw-reset",t.each(n,function(e){e.element&&(e=e.element()),i.appendChild(e)}),i}function p(e,t){this._api=e,this._model=t,this.setup()}return t.extend(p.prototype,n,{setup:function(){this.build(),this.initialize()},build:function(){var n,i,s,p=new r(this._model,this._api),w=new a("jw-icon-playlist");e.isMobile()||(s=c("jw-icon-volume",this._api.setMute),n=new o("jw-slider-volume","horizontal"),i=new l(this._model,"jw-icon-volume")),this.elements={alt:u("jw-text-alt"),play:c("jw-icon-playback",this._api.play),prev:c("jw-icon-prev",this._api.playlistPrev),next:c("jw-icon-next",this._api.playlistNext),playlist:w,elapsed:u("jw-text-elapsed"),time:p,duration:u("jw-text-duration"),hd:d("jw-icon-hd"),cc:d("jw-icon-cc"),audiotracks:d("jw-icon-audio-tracks"),mute:s,volume:n,volumetooltip:i,cast:c("jw-icon-cast jw-off"),fullscreen:c("jw-icon-fullscreen",this._api.setFullscreen)},this.layout={left:[this.elements.play,this.elements.prev,this.elements.playlist,this.elements.next,this.elements.elapsed],center:[this.elements.time,this.elements.alt],right:[this.elements.duration,this.elements.hd,this.elements.cc,this.elements.audiotracks,this.elements.mute,this.elements.volume,this.elements.volumetooltip,this.elements.fullscreen]},this.layout.right=t.reject(this.layout.right,function(e){return t.isUndefined(e)}),this.el=document.createElement("div"),this.el.className="jw-controlbar jw-background-color jw-reset";var f=A("left",this.layout.left),g=A("center",this.layout.center),h=A("right",this.layout.right);this.el.appendChild(f),this.el.appendChild(g),this.el.appendChild(h)},initialize:function(){this.elements.play.show(),this.elements.fullscreen.show(),this.elements.mute&&this.elements.mute.show(),this.onVolume(this._model,this._model.get("volume")),this.onPlaylist(this._model,this._model.get("playlist")),this.onPlaylistItem(this._model,this._model.get("playlistItem")),this.onCastAvailable(this._model,this._model.get("castAvailable")),this.onCaptionsList(this._model,this._model.get("captionsList")),this._model.on("change:volume",this.onVolume,this),this._model.on("change:mute",this.onMute,this),this._model.on("change:playlist",this.onPlaylist,this),this._model.on("change:playlistItem",this.onPlaylistItem,this),this._model.on("change:castAvailable",this.onCastAvailable,this),this._model.on("change:duration",this.onDuration,this),this._model.on("change:position",this.onElapsed,this),this._model.on("change:fullscreen",this.onFullscreen,this),this._model.on("change:captionsList",this.onCaptionsList,this),this._model.on("change:captionsIndex",this.onCaptionsIndex,this),this.elements.volume&&this.elements.volume.on("update",function(e){var t=e.percentage;this._api.setVolume(t)},this),this.elements.volumetooltip&&(this.elements.volumetooltip.on("update",function(e){var t=e.percentage;this._api.setVolume(t)},this),this.elements.volumetooltip.on("toggleValue",function(){this._api.setMute()},this)),this.elements.playlist.on("select",function(e){this._model.once("setItem",function(){this._api.play()},this),this._api.load(e)},this),this.elements.hd.on("select",function(e){this._model.getVideo().setCurrentQuality(e)},this),this.elements.hd.on("toggleValue",function(){this._model.getVideo().setCurrentQuality(0===this._model.getVideo().getCurrentQuality()?1:0)},this),this.elements.cc.on("select",function(e){this._api.setCurrentCaptions(e)},this),this.elements.cc.on("toggleValue",function(){var e=this._model.get("captionsIndex");this._api.setCurrentCaptions(e?0:1)},this),this.elements.audiotracks.on("select",function(e){this._model.getVideo().setCurrentAudioTrack(e)},this)},onCaptionsList:function(e,t){var n=e.get("captionsIndex");this.elements.cc.setup(t,n)},onCaptionsIndex:function(e,t){this.elements.cc.selectItem(t)},onPlaylist:function(e,t){var n=t.length>1;this.elements.next.toggle(n),this.elements.prev.toggle(n),this.elements.playlist.setup(t,e.get("item"))},onPlaylistItem:function(e){this.elements.time.updateBuffer(0),this.elements.time.render(0),this.elements.duration.innerHTML="00:00",this.elements.elapsed.innerHTML="00:00";var n=e.get("item");this.elements.playlist.selectItem(n),this.elements.audiotracks.setup(),this._model.mediaModel.on("change:levels",function(e,t){this.elements.hd.setup(t,e.get("currentLevel"))},this),this._model.mediaModel.on("change:currentLevel",function(e,t){this.elements.hd.selectItem(t)},this),this._model.mediaModel.on("change:audioTracks",function(e,n){var i=t.map(n,function(e){return{label:e.name}});this.elements.audiotracks.setup(i,e.get("currentAudioTrack"),{toggle:!1})},this),this._model.mediaModel.on("change:currentAudioTrack",function(e,t){this.elements.audiotracks.selectItem(t)},this)},onVolume:function(e,t){this.renderVolume(e.get("mute"),t)},onMute:function(e,t){this.renderVolume(t,e.get("volume"))},renderVolume:function(t,n){this.elements.mute&&e.toggleClass(this.elements.mute.element(),"jw-off",t),this.elements.volume&&this.elements.volume.render(t?0:n),this.elements.volumetooltip&&(this.elements.volumetooltip.volumeSlider.render(t?0:n),e.toggleClass(this.elements.volumetooltip.element(),"jw-off",t))},onCastAvailable:function(e,t){this.elements.cast.toggle(t)},onElapsed:function(t,n){var i,o=t.get("duration");i="DVR"===e.adaptiveType(o)?"-"+e.timeFormat(-o):e.timeFormat(n),this.elements.elapsed.innerHTML=i},onDuration:function(t,n){var i;i="DVR"===e.adaptiveType(n)?"Live":e.timeFormat(n),this.elements.duration.innerHTML=i},onFullscreen:function(t,n){e.toggleClass(this.elements.fullscreen.element(),"jw-off",n)},element:function(){return this.el},getVisibleBounds:function(){var t,n=this.el,i=getComputedStyle?getComputedStyle(n):n.currentStyle;return"table"===i.display?e.bounds(n):(n.style.visibility="hidden",n.style.display="table",t=e.bounds(n),n.style.visibility=n.style.display="",t)},setAltText:function(e){this.elements.alt.innerHTML=e},addCues:function(e){this.elements.time&&(t.each(e,function(e){this.elements.time.addCue(e)},this),this.elements.time.drawCues())}}),p}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(131),n(110),n(132),n(48)],o=function(e,t,n,i){var o=e.extend({constructor:function(e,t){this.className=e+" jw-background-color jw-reset",this.orientation=t,this.dragStartListener=this.dragStart.bind(this),this.dragMoveListener=this.dragMove.bind(this),this.dragEndListener=this.dragEnd.bind(this),this.tapListener=this.tap.bind(this),this.setup()},setup:function(){var e={"default":this["default"],className:this.className,orientation:"jw-slider-"+this.orientation};this.el=i.createElement(n(e)),this.elementRail=this.el.getElementsByClassName("jw-slider-container")[0],this.elementBuffer=this.el.getElementsByClassName("jw-buffer")[0],this.elementProgress=this.el.getElementsByClassName("jw-progress")[0],this.elementThumb=this.el.getElementsByClassName("jw-knob")[0],this.userInteract=new t(this.element(),{preventScrolling:!0}),this.userInteract.on("dragStart",this.dragStartListener),this.userInteract.on("drag",this.dragMoveListener),this.userInteract.on("dragEnd",this.dragEndListener),this.userInteract.on("tap click",this.tapListener)},dragStart:function(){this.trigger("dragStart"),this.railBounds=i.bounds(this.elementRail)},dragEnd:function(e){this.dragMove(e),this.trigger("dragEnd")},dragMove:function(e){var t,n,o=this.railBounds=this.railBounds?this.railBounds:i.bounds(this.elementRail);return"horizontal"===this.orientation?(t=e.pageX,n=t<o.left?0:t>o.right?100:100*i.between((t-o.left)/o.width,0,1)):(t=e.pageY,n=t>=o.bottom?0:t<=o.top?100:100*i.between((o.height-(t-o.top))/o.height,0,1)),this.render(n),this.update(n),!1},tap:function(e){this.railBounds=i.bounds(this.elementRail),this.dragMove(e)},update:function(e){this.trigger("update",{percentage:e})},render:function(e){e=Math.max(0,Math.min(e,100)),"horizontal"===this.orientation?(this.elementThumb.style.left=e+"%",this.elementProgress.style.width=e+"%"):(this.elementThumb.style.bottom=e+"%",this.elementProgress.style.height=e+"%")},updateBuffer:function(e){this.elementBuffer.style.width=e+"%"},element:function(){return this.el}});return o}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(67),n(45)],o=function(e,t){function n(){}var i=function(e,n){var i,o=this;i=e&&t.has(e,"constructor")?e.constructor:function(){return o.apply(this,arguments)},t.extend(i,o,n);var r=function(){this.constructor=i};return r.prototype=o.prototype,i.prototype=new r,e&&t.extend(i.prototype,e),i.__super__=o.prototype,i};return n.extend=i,t.extend(n.prototype,e),n}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i=n(112);e.exports=(i["default"]||i).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var o,r="function",s=t.helperMissing,a=this.escapeExpression;return'<div class="'+a((o=null!=(o=t.className||(null!=e?e.className:e))?o:s,typeof o===r?o.call(e,{name:"className",hash:{},data:i}):o))+" "+a((o=null!=(o=t.orientation||(null!=e?e.orientation:e))?o:s,typeof o===r?o.call(e,{name:"orientation",hash:{},data:i}):o))+' jw-reset">\n    <div class="jw-slider-container jw-reset">\n        <div class="jw-rail jw-reset"></div>\n        <div class="jw-buffer jw-reset"></div>\n        <div class="jw-progress jw-reset"></div>\n        <div class="jw-knob jw-reset"></div>\n    </div>\n</div>'},useData:!0})},function(e,t,n){var i,o;i=[n(45),n(130),n(48),n(134),n(135),n(136)],o=function(e,t,n,i,o,r){var s=i.extend({setup:function(){this.text=document.createElement("span"),this.text.className="jw-text jw-reset",this.img=document.createElement("div"),this.img.className="jw-reset";var e=document.createElement("div");e.className="jw-time-tip jw-background-color jw-reset",e.appendChild(this.img),e.appendChild(this.text),n.removeClass(this.el,"jw-hidden"),this.addContent(e)},image:function(e){n.style(this.img,e)},update:function(e){this.text.innerHTML=e}}),a=t.extend({constructor:function(n,i){this._model=n,this._api=i,this.timeTip=new s("jw-tooltip-time"),this.timeTip.setup(),this.seekThrottled=e.throttle(this.performSeek,400),this._model.on("change:playlistItem",this.onPlaylistItem,this).on("change:position",this.onPosition,this).on("change:buffer",this.onBuffer,this),t.call(this,"jw-slider-time","horizontal")},setup:function(){t.prototype.setup.apply(this,arguments),this.onPlaylistItem(this._model,this._model.get("playlistItem")),this.elementRail.appendChild(this.timeTip.element()),this.elementRail.addEventListener("mousemove",this.showTimeTooltip.bind(this),!1),this.elementRail.addEventListener("mouseout",this.hideTimeTooltip.bind(this),!1)},update:function(n){this.activeCue&&e.isNumber(this.activeCue.pct)?this.seekTo=this.activeCue.pct:this.seekTo=n,this.seekThrottled(),t.prototype.update.apply(this,arguments)},dragStart:function(){this._model.set("scrubbing",!0),t.prototype.dragStart.apply(this,arguments)},dragEnd:function(){t.prototype.dragEnd.apply(this,arguments),this._model.set("scrubbing",!1)},onSeeked:function(){this._model.get("scrubbing")&&this.performSeek()},onBuffer:function(e,t){this.updateBuffer(t)},onPosition:function(e,t){var i=0,o=this._model.get("duration");if(o){var r=n.adaptiveType(o);"DVR"===r?i=(o-t)/o*100:"VOD"===r&&(i=t/o*100)}this.render(i)},onPlaylistItem:function(t,n){this.reset(),t.mediaModel.on("seeked",this.onSeeked,this);var i=n.tracks;e.each(i,function(e){e&&e.kind&&"thumbnails"===e.kind.toLowerCase()?this.loadThumbnails(e.file):e&&e.kind&&"chapters"===e.kind.toLowerCase()&&this.loadChapters(e.file)},this)},performSeek:function(){var e,t=this._api.getDuration(),i=n.adaptiveType(t);"LIVE"===i||0===t?this._api.play():"DVR"===i?(e=(1-this.seekTo/100)*t,this._api.seek(Math.min(e,-.25))):(e=this.seekTo/100*t,this._api.seek(Math.min(e,t-.25)))},showTimeTooltip:function(e){var t=this._model.get("duration");if(!(0>=t)){var i=n.bounds(this.elementRail),o=e.pageX?e.pageX-i.left:e.x;o=n.between(o,0,i.width);var r,s=o/i.width,a=t*s;r=this.activeCue?this.activeCue.text:n.timeFormat(a),this.timeTip.update(r),this.showThumbnail(a),n.addClass(this.timeTip.el,"jw-open"),this.timeTip.el.style.left=100*s+"%"}},hideTimeTooltip:function(){n.removeClass(this.timeTip.el,"jw-open")},reset:function(){this.resetChapters(),this.resetThumbnails()}});return e.extend(a.prototype,o,r),a}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(131),n(48)],o=function(e,t){var n=e.extend({constructor:function(e){this.el=document.createElement("div"),this.el.className="jw-icon jw-icon-tooltip "+e+" jw-button-color jw-reset jw-hidden",this.container=document.createElement("div"),this.container.className="jw-overlay jw-reset",this.el.appendChild(this.container)},addContent:function(e){this.content&&this.removeContent(),this.content=e,this.container.appendChild(e)},removeContent:function(){this.content&&(this.container.removeChild(this.content),this.content=null)},element:function(){return this.el},openTooltip:function(){this.isOpen=!0,t.toggleClass(this.el,"jw-open",this.isOpen)},closeTooltip:function(){this.isOpen=!1,t.toggleClass(this.el,"jw-open",this.isOpen)},toggleOpenState:function(){this.isOpen=!this.isOpen,t.toggleClass(this.el,"jw-open",this.isOpen)}});return n}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(45),n(48),n(98)],o=function(e,t,n){function i(e,t){this.time=e,this.text=t,this.el=document.createElement("div"),this.el.className="jw-cue jw-reset"}e.extend(i.prototype,{align:function(e){"%"===this.time.toString().slice(-1)?this.pct=this.time:this.pct=this.time/e*100,this.el.style.left=this.pct+"%"}});var o={loadChapters:function(e){t.ajax(e,this.chaptersLoaded.bind(this),this.chaptersFailed,!0)},chaptersLoaded:function(t){var i=n(t.responseText);e.isArray(i)&&(e.each(i,this.addCue,this),this.drawCues())},chaptersFailed:function(){},addCue:function(e){this.cues.push(new i(e.begin,e.text))},drawCues:function(){var t=this._model.mediaModel.get("duration");if(!t||0>=t)return void this._model.mediaModel.once("change:duration",this.drawCues,this);var n=this;e.each(this.cues,function(e){e.align(t),e.el.addEventListener("mouseover",function(){n.activeCue=e}),e.el.addEventListener("mouseout",function(){n.activeCue=null}),n.elementRail.appendChild(e.el)})},resetChapters:function(){e.each(this.cues,function(e){e.el.parentNode&&e.el.parentNode.removeChild(e.el)},this),this.cues=[]}};return o}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(45),n(48),n(98)],o=function(e,t,n){function i(e){this.begin=e.begin,this.end=e.end,this.img=e.text}var o={loadThumbnails:function(e){e&&(this.vttPath=e.split("?")[0].split("/").slice(0,-1).join("/"),this.individualImage=null,t.ajax(e,this.thumbnailsLoaded.bind(this),this.thumbnailsFailed.bind(this),!0))},thumbnailsLoaded:function(t){var o=n(t.responseText);e.isArray(o)&&(e.each(o,function(e){this.thumbnails.push(new i(e))},this),this.drawCues())},thumbnailsFailed:function(){},chooseThumbnail:function(t){var n=e.sortedIndex(this.thumbnails,{end:t},e.property("end"));n>=this.thumbnails.length&&(n=this.thumbnails.length-1);var i=this.thumbnails[n].img;return i.indexOf("://")<0&&(i=this.vttPath?this.vttPath+"/"+i:i),i},loadThumbnail:function(t){var n=this.chooseThumbnail(t),i={display:"block",margin:"0 auto","background-position":"0 0"},o=n.indexOf("#xywh");if(o>0)try{var r=/(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(n);n=r[1],i["background-position"]=-1*r[2]+"px "+-1*r[3]+"px",i.width=r[4],i.height=r[5]}catch(s){return}else this.individualImage||(this.individualImage=new Image,this.individualImage.onload=e.bind(function(){this.individualImage.onload=null,this.timeTip.image({width:this.individualImage.width,height:this.individualImage.height})},this),this.individualImage.src=n);return i["background-image"]=n,i},showThumbnail:function(e){this.thumbnails.length<1||this.timeTip.image(this.loadThumbnail(e))},resetThumbnails:function(){this.timeTip.image({"background-image":"",width:0,height:0}),this.thumbnails=[]}};return o}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(134),n(48),n(45),n(110),n(138)],o=function(e,t,n,i,o){var r=e.extend({setup:function(e,r,s){this.iconUI||(this.iconUI=new i(this.el),this.toggleValueListener=this.toggleValue.bind(this),this.toggleOpenStateListener=this.toggleOpenState.bind(this),this.openTooltipListener=this.openTooltip.bind(this),this.closeTooltipListener=this.closeTooltip.bind(this),this.selectListener=this.select.bind(this)),this.reset(),e=n.isArray(e)?e:[],t.toggleClass(this.el,"jw-hidden",e.length<2);var a=e.length>2||2===e.length&&s&&s.toggle===!1,l=!a&&2===e.length;if(t.toggleClass(this.el,"jw-toggle",l),t.toggleClass(this.el,"jw-button-color",!l),a){t.removeClass(this.el,"jw-off"),this.iconUI.on("tap",this.toggleOpenStateListener),this.el.addEventListener("mouseover",this.openTooltipListener),this.el.addEventListener("mouseout",this.closeTooltipListener);var c=o(e),u=t.createElement(c);this.addContent(u),this.contentUI=new i(this.content).on("click tap",this.selectListener)}else l&&this.iconUI.on("click tap",this.toggleValueListener);this.selectItem(r)},toggleValue:function(){this.trigger("toggleValue")},select:function(e){if(e.target.parentElement===this.content){var i=t.classList(e.target),o=n.find(i,function(e){return 0===e.indexOf("jw-item")});o&&(this.trigger("select",parseInt(o.split("-")[2])),this.closeTooltipListener())}},selectItem:function(e){if(this.content)for(var n=0;n<this.content.children.length;n++)t.toggleClass(this.content.children[n],"jw-active-option",e===n);else t.toggleClass(this.el,"jw-off",0===e)},reset:function(){t.addClass(this.el,"jw-off"),this.iconUI.off(),this.contentUI&&this.contentUI.off().destroy(),this.removeContent(),this.el.removeEventListener("mouseover",this.openTooltipListener),this.el.removeEventListener("mouseout",this.closeTooltipListener)}});return r}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i=n(112);e.exports=(i["default"]||i).template({1:function(e,t,n,i){var o=this.lambda,r=this.escapeExpression;return"        <li class='jw-text jw-option jw-item-"+r(o(i&&i.index,e))+" jw-reset'>"+r(o(null!=e?e.label:e,e))+"</li>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var o,r='<ul class="jw-menu jw-background-color jw-reset">\n';return o=t.each.call(e,e,{name:"each",hash:{},fn:this.program(1,i),inverse:this.noop,data:i}),null!=o&&(r+=o),r+"</ul>"},useData:!0})},function(e,t,n){var i,o;i=[n(48),n(45),n(134),n(110),n(140)],o=function(e,t,n,i,o){var r=n.extend({setup:function(n,o){if(this.iconUI||(this.iconUI=new i(this.el),this.toggleOpenStateListener=this.toggleOpenState.bind(this),this.openTooltipListener=this.openTooltip.bind(this),
this.closeTooltipListener=this.closeTooltip.bind(this),this.selectListener=this.onSelect.bind(this)),this.reset(),n=t.isArray(n)?n:[],e.toggleClass(this.el,"jw-hidden",n.length<2),n.length>=2){this.iconUI=new i(this.el).on("tap",this.toggleOpenStateListener),this.el.addEventListener("mouseover",this.openTooltipListener),this.el.addEventListener("mouseout",this.closeTooltipListener);var r=this.menuTemplate(n,o),s=e.createElement(r);this.addContent(s),this.contentUI=new i(this.content),this.contentUI.on("click tap",this.selectListener)}this.originalList=n},menuTemplate:function(e,n){var i=t.map(e,function(e,t){return{active:t===n,label:t+1+".",title:e.title}});return o(i)},onSelect:function(n){var i=n.target;if("UL"!==i.tagName){"LI"!==i.tagName&&(i=i.parentElement);var o=e.classList(i),r=t.find(o,function(e){return 0===e.indexOf("jw-item")});r&&(this.trigger("select",parseInt(r.split("-")[2])),this.closeTooltip())}},selectItem:function(e){this.setup(this.originalList,e)},reset:function(){this.iconUI.off(),this.contentUI&&this.contentUI.off().destroy(),this.el.removeEventListener("mouseover",this.openTooltipListener),this.el.removeEventListener("mouseout",this.closeTooltipListener),this.removeContent()}});return r}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i=n(112);e.exports=(i["default"]||i).template({1:function(e,t,n,i){var o,r="";return o=t["if"].call(e,null!=e?e.active:e,{name:"if",hash:{},fn:this.program(2,i),inverse:this.program(4,i),data:i}),null!=o&&(r+=o),r},2:function(e,t,n,i){var o=this.lambda,r=this.escapeExpression;return"                <li class='jw-option jw-text jw-active-option jw-item-"+r(o(i&&i.index,e))+' jw-reset\'>\n                    <span class="jw-label jw-reset"><span class="jw-icon jw-icon-play jw-reset"></span></span>\n                    <span class="jw-name jw-reset">'+r(o(null!=e?e.title:e,e))+"</span>\n                </li>\n"},4:function(e,t,n,i){var o=this.lambda,r=this.escapeExpression;return"                <li class='jw-option jw-text jw-item-"+r(o(i&&i.index,e))+' jw-reset\'>\n                    <span class="jw-label jw-reset">'+r(o(null!=e?e.label:e,e))+'</span>\n                    <span class="jw-name jw-reset">'+r(o(null!=e?e.title:e,e))+"</span>\n                </li>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var o,r='<div class="jw-menu jw-playlist-container jw-background-color jw-reset">\n\n    <div class="jw-tooltip-title jw-reset">\n        <span class="jw-icon jw-icon-inline jw-icon-playlist jw-reset"></span>\n        <span class="jw-text jw-reset">PLAYLIST</span>\n    </div>\n\n    <ul class="jw-playlist jw-reset">\n';return o=t.each.call(e,e,{name:"each",hash:{},fn:this.program(1,i),inverse:this.noop,data:i}),null!=o&&(r+=o),r+"    </ul>\n</div>"},useData:!0})},function(e,t,n){var i,o;i=[n(134),n(130),n(110),n(48)],o=function(e,t,n,i){var o=e.extend({constructor:function(o,r){this._model=o,e.call(this,r),this.volumeSlider=new t("jw-slider-volume jw-volume-tip","vertical"),this.addContent(this.volumeSlider.element()),this.volumeSlider.on("update",function(e){this.trigger("update",e)}.bind(this)),i.toggleClass(this.el,"jw-hidden",!1),new n(this.el).on("click",this.toggleValue.bind(this)).on("tap",this.toggleOpenState.bind(this)),this.el.addEventListener("mouseover",this.openTooltip.bind(this)),this.el.addEventListener("mouseout",this.closeTooltip.bind(this)),this._model.on("change:volume",this.onVolume,this)},toggleValue:function(e){e.target===this.el&&this.trigger("toggleValue")}});return o}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(45)],o=function(e){var t=function(e){this.model=e,this.model.on("change:playlistItem",this.loadImage,this)};return e.extend(t.prototype,{setup:function(e){this.el=e,this.loadImage(this.model,this.model.get("playlistItem"))},loadImage:function(t,n){var i=n.image;e.isString(i)?this.el.style["background-image"]="url("+i+")":this.el.style["background-image"]=""},element:function(){return this.el}}),t}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(144),n(45),n(52)],o=function(e,t,n){function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}function o(e){return"pro"===e?"p":"premium"===e?"r":"enterprise"===e?"e":"ads"===e?"a":"f"}var r=function(){};return t.extend(r.prototype,e.prototype,{buildArray:function(){var t=e.prototype.buildArray.apply(this,arguments),r=this.model.edition(),s=n.split("+")[0],a="//jwplayer.com/learn-more/?m=h&e="+o(r)+"&v="+n;if(t.items[0].link=a,t.items[0].title="About JW Player "+i(r)+" "+s,"free"===r)return t;if(this.model.get("abouttext")){var l={title:this.model.get("abouttext"),link:this.model.get("aboutlink")||a};t.items.splice(1,0,l)}return t}}),r}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(48),n(145),n(45),n(52)],o=function(e,t,n,i){var o=function(){};return n.extend(o.prototype,{buildArray:function(){var t=i.split("+"),n=t[0],o={items:[{title:"About JW Player "+n,featured:!0,link:"//jwplayer.com/learn-more/?m=h&e=o&v="+i}]},r=n.indexOf("-")>0,s=t[1];if(r&&s){var a=s.split(".");o.items.push({title:"build: ("+a[0]+"."+a[1]+")",link:"#"})}var l=this.model.get("provider").name;if(l.indexOf("flash")>=0){var c="Flash Version "+e.flashVersion();o.items.push({title:c,link:"#"})}return o},buildMenu:function(){var n=this.buildArray();return e.createElement(t(n))},updateHtml:function(){this.el.innerHTML=this.buildMenu().innerHTML},rightClick:function(e){return this.lazySetup(),this.mouseOverContext?!1:(this.hideMenu(),this.showMenu(e),!1)},getOffset:function(e){for(var t=e.target,n=e.offsetX||e.layerX,i=e.offsetY||e.layerY;t!==this.playerElement;)n+=t.offsetLeft,i+=t.offsetTop,t=t.parentNode;return{x:n,y:i}},showMenu:function(t){var n=this.getOffset(t);return this.el.style.left=n.x+"px",this.el.style.top=n.y+"px",e.addClass(this.playerElement,"jw-flag-rightclick-open"),e.addClass(this.el,"jw-open"),!1},hideMenu:function(){this.mouseOverContext||(e.removeClass(this.playerElement,"jw-flag-rightclick-open"),e.removeClass(this.el,"jw-open"))},lazySetup:function(){this.el||(this.el=this.buildMenu(),this.layer.appendChild(this.el),this.playerElement.onclick=this.hideMenu.bind(this),document.addEventListener("mousedown",this.hideMenu.bind(this),!1),this.model.on("change:provider",this.updateHtml,this),this.el.onmouseover=function(){this.mouseOverContext=!0}.bind(this),this.el.onmouseout=function(){this.mouseOverContext=!1}.bind(this))},setup:function(e,t,n){this.playerElement=t,this.model=e,this.mouseOverContext=!1,this.layer=n,t.oncontextmenu=this.rightClick.bind(this)},destroy:function(){this.model.off("change:provider",this.updateHtml),document.removeEventListener("mousedown",this.hideMenu),this.model=null,this.playerElement=null,this.el=null}}),o}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i=n(112);e.exports=(i["default"]||i).template({1:function(e,t,n,i){var o,r,s="function",a=t.helperMissing,l=this.escapeExpression,c='        <li class="jw-reset';return o=t["if"].call(e,null!=e?e.featured:e,{name:"if",hash:{},fn:this.program(2,i),inverse:this.noop,data:i}),null!=o&&(c+=o),c+='">\n            <a href="'+l((r=null!=(r=t.link||(null!=e?e.link:e))?r:a,typeof r===s?r.call(e,{name:"link",hash:{},data:i}):r))+'" class="jw-reset">\n',o=t["if"].call(e,null!=e?e.featured:e,{name:"if",hash:{},fn:this.program(4,i),inverse:this.noop,data:i}),null!=o&&(c+=o),c+"                "+l((r=null!=(r=t.title||(null!=e?e.title:e))?r:a,typeof r===s?r.call(e,{name:"title",hash:{},data:i}):r))+"\n            </a>\n        </li>\n"},2:function(e,t,n,i){return" jw-featured"},4:function(e,t,n,i){return'                <span class="jw-icon jw-rightlick-logo jw-reset"></span>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var o,r='<div class="jw-rightclick jw-reset">\n    <ul class="jw-reset">\n';return o=t.each.call(e,null!=e?e.items:e,{name:"each",hash:{},fn:this.program(1,i),inverse:this.noop,data:i}),null!=o&&(r+=o),r+"    </ul>\n</div>"},useData:!0})},function(e,t,n){var i,o;i=[n(45)],o=function(e){var t=function(e){this.model=e};return e.extend(t.prototype,{hide:function(){this.el.style.display="none"},show:function(){this.el.style.display=""},setup:function(e){this.el=e;var t=this.el.getElementsByTagName("div");this.title=t[0],this.description=t[1],this.model.on("change:playlistItem",this.updateText,this),this.updateText(this.model,this.model.get("playlistItem"))},updateText:function(e,t){var n=t.title,i=t.description||"";n?(this.show(),this.title.innerHTML=n,this.description.innerHTML=i):this.hide()},element:function(){return this.el}}),t}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i=n(112);e.exports=(i["default"]||i).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var o,r="function",s=t.helperMissing,a=this.escapeExpression;return'<div id="'+a((o=null!=(o=t.id||(null!=e?e.id:e))?o:s,typeof o===r?o.call(e,{name:"id",hash:{},data:i}):o))+'" class="jwplayer jw-reset" tabindex="0">\n    <div class="jw-aspect jw-reset"></div>\n    <div class="jw-media jw-reset"></div>\n    <div class="jw-preview jw-reset"></div>\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset"></div>\n        <div class="jw-title-secondary jw-reset"></div>\n    </div>\n    <div class="jw-overlays jw-reset"></div>\n    <div class="jw-controls jw-reset"></div>\n</div>'},useData:!0})},function(e,t,n){var i,o;i=[n(149)],o=function(e){function t(t,n,i,o){return e({id:t,skin:n,title:i,body:o})}return t}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i=n(112);e.exports=(i["default"]||i).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var o,r="function",s=t.helperMissing,a=this.escapeExpression;return'<div id="'+a((o=null!=(o=t.id||(null!=e?e.id:e))?o:s,typeof o===r?o.call(e,{name:"id",hash:{},data:i}):o))+'"class="jw-skin-'+a((o=null!=(o=t.skin||(null!=e?e.skin:e))?o:s,typeof o===r?o.call(e,{name:"skin",hash:{},data:i}):o))+' jw-error jw-reset">\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset">'+a((o=null!=(o=t.title||(null!=e?e.title:e))?o:s,typeof o===r?o.call(e,{name:"title",hash:{},data:i}):o))+'</div>\n        <div class="jw-title-secondary jw-reset">'+a((o=null!=(o=t.body||(null!=e?e.body:e))?o:s,typeof o===r?o.call(e,{name:"body",hash:{},data:i}):o))+'</div>\n    </div>\n\n    <div class="jw-icon-container jw-reset">\n        <div class="jw-display-icon-container jw-background-color jw-reset">\n            <div class="jw-icon jw-icon-display jw-reset"></div>\n        </div>\n    </div>\n</div>\n'},useData:!0})},function(e,t,n){var i,o;i=[n(151),n(153),n(154),n(155),n(152),n(48),n(64),n(65),n(45)],o=function(e,t,n,i,o,r,s,a,l){function c(e,t){e[t]&&(e[t]=r.getAbsolutePath(e[t]))}var u=r.noop,d={},A=function(A,p){function w(e,t){o.log("send command",e,t);var n={command:e};void 0!==t&&(n.args=t),J.sendMessage(o.NS,n,u,function(e){o.log("error message",e),"Invalid namespace"===e.description&&C()})}function f(e){var t=o.available(e.availability);m(t)}function g(e){o.log("existing session",e),J||X||(X=e.session,X.addMessageListener(o.NS,h))}function h(e,t){var n=JSON.parse(t);if(!n)throw"Message not proper JSON";if(n.reconcile){X.removeMessageListener(o.NS,h);var i=n.diff,r=X;i.id&&n.appid&&n.pageUrl||(i.id=window.jwplayer().id,n.appid=O.appid,n.pageUrl=z,X=J=null),i.id===A.id&&n.appid===O.appid&&n.pageUrl===z&&(J||(A.jwInstreamState()&&A.instreamDestroy(),L(r),p.set("state",a.IDLE)),P(n)),X=null}}function m(e){var t=!!e;U.available!==t&&(U.available=t,p.set("castAvailable",t))}function j(e){U.active=!!e,U.deviceName=v(),p.set("castState",U)}function v(){return J&&J.receiver?J.receiver.friendlyName:""}function b(){if(!J&&!A.jwInstreamState()){var e=window.chrome;e.cast.requestSession(L,k)}}function k(e){var t=window.chrome;e.code!==t.cast.ErrorCode.CANCEL&&(o.log("Cast Session Error:",e,J),e.code===t.cast.ErrorCode.SESSION_ERROR&&C())}function E(){if(!A.jwInstreamState()){var e=window.chrome;e.cast.requestSession(L,y)}}function y(e){var t=window.chrome;e.code!==t.cast.ErrorCode.CANCEL&&(o.log("Cast Session Error:",e,J),e.code===t.cast.ErrorCode.SESSION_ERROR&&C())}function C(){return J?(B(),J.stop(I,x),D({item:0}),void P({type:"state",diff:{buffer:0,position:0,duration:0}})):void I()}function x(e){o.error("Cast Session Stop error:",e,J),I()}function L(n){o.log("Session started:",n),J?(C(),q=n):(J=n,J.addMessageListener(o.NS,M),J.addUpdateListener(R),A.jwPause(!0),A.jwSetFullscreen(!1),H=p.getVideo(),K.volume=p.volume,K.mute=p.mute,G=new t(w),G.init(),p.setVideoProvider(G),Q(),S(),j(!0),n!==X&&(G.setup(i.setupCastConfig(p,O),p),e.sendDummyMedia(n)))}function R(e){o.log("Cast Session status",e),e?S():(G.sendEvent(s.JWPLAYER_PLAYER_STATE,{oldstate:p.state,newstate:a.BUFFERING}),I())}function I(){o.log("_sessionStopped"),J&&(B(),J=null),H&&(N(),p.volume=K.volume,p.mute=K.mute,p.setVideoProvider(H),p.duration=0,G&&(G.destroy(),G=null),V&&(V.destroy(),V=null),p.state!==a.IDLE?r.isIPad()||r.isIPod()?(A.jwStop(!0),H.sendEvent(s.JWPLAYER_PLAYER_STATE,{oldstate:a.BUFFERING,newstate:a.IDLE})):(p.state=a.IDLE,A.jwPlay(!0),A.jwSeek(p.position)):H.sendEvent(s.JWPLAYER_PLAYER_STATE,{oldstate:a.BUFFERING,newstate:a.IDLE}),H=null),j(!1),null!==q&&(L(q),q=null)}function B(){J.removeUpdateListener(R),J.removeMessageListener(o.NS,M)}function M(e,t){var n=JSON.parse(t);if(!n)throw"Message not proper JSON";P(n)}function P(e){if("state"===e.type)V&&(e.diff.newstate||e.diff.position)&&(V.destroy(),V=null,p.setVideoProvider(G),p.trigger(s.JWPLAYER_CAST_AD_CHANGED,{done:!0})),G.updateModel(e.diff,e.type),D(e.diff);else if("ad"===e.type){null===V&&(V=new n(o.NS,J),V.init(),p.setVideoProvider(V)),V.updateModel(e.diff,e.type);var t=V.getAdModel();e.diff.clickthrough&&(t.onClick=A.jwClickAd),e.diff.skipoffset&&(t.onSkipAd=A.jwSkipAd),p.trigger(s.JWPLAYER_CAST_AD_CHANGED,t),e.diff.complete&&V.resetAdModel()}else"connection"===e.type?e.closed===!0&&C():o.error("received unhandled message",e.type,e)}function D(e){void 0!==e.item&&p.item!==e.item&&(p.item=e.item,p.trigger(s.JWPLAYER_PLAYLIST_ITEM,{index:p.item}))}function T(e){e=Math.max(0,Math.min(e,1)),J.setReceiverVolumeLevel(e,S,function(e){o.error("set volume error",e),S()})}function _(e){J.setReceiverMuted(!!e,S,function(e){o.error("set muted error",e),S()})}function S(){if(J&&J.receiver){var e=J.receiver.volume;if(e){var t=100*e.level|0,n=!!e.muted;Y(n),F(t)}}}function F(e){var t=W.volume!==e;return t&&(W.volume=e,G.sendEvent(s.JWPLAYER_MEDIA_VOLUME,{volume:e})),t}function Y(e){var t=W.mute!==e;return t&&(W.mute=e,G.sendEvent(s.JWPLAYER_MEDIA_MUTE,{mute:e})),t}function Q(){A.jwPlay=function(e){e===!1?G.pause():G.play()},A.jwPause=function(e){A.jwPlay(!!e)},A.jwLoad=function(e){l.isNumber(e)?p.setItem(e):l.isObject(e)&&p.setPlaylist(e),p.loadVideo()},A.jwPlaylistItem=function(e){"number"===r.typeOf(e)&&p.setItem(e),G.playlistItem(e)},A.jwPlaylistNext=function(){A.jwPlaylistItem(p.item+1)},A.jwPlaylistPrev=function(){A.jwPlaylistItem(p.item-1)},A.jwSetVolume=function(e){r.exists(e)&&(e=0|Math.min(Math.max(0,e),100),F(e)&&T(e/100))},A.jwSetMute=function(e){r.exists(e)||(e=!W.mute),Y(e)&&_(e)},A.jwGetVolume=function(){return 0|W.volume},A.jwGetMute=function(){return!!W.mute},A.jwIsBeforePlay=function(){return!1};var e=A.jwSetCurrentCaptions;A.jwSetCurrentCaptions=function(t){e(t),G.sendCommand("caption",t)},A.jwSkipAd=function(e){if(V){V.skipAd(e);var t=V.getAdModel();t.complete=!0,p.trigger(s.JWPLAYER_CAST_AD_CHANGED,t)}},A.jwClickAd=function(e){if(V&&V.timeSinceClick()>300&&(V.clickAd(e),p.state!==a.PAUSED)){var t={tag:e.tag};e.sequence&&(t.sequence=e.sequence),e.podcount&&(t.podcount=e.podcount),window.jwplayer(A.id).dispatchEvent(s.JWPLAYER_AD_CLICK,t),window.open(e.clickthrough)}},A.jwPlayAd=A.jwPauseAd=A.jwSetControls=A.jwForceState=A.jwReleaseState=A.jwSetFullscreen=A.jwDetachMedia=A.jwAttachMedia=u;var t=window.jwplayer(A.id).plugins;t.vast&&t.vast.jwPauseAd!==u&&(Z={jwPlayAd:t.vast.jwPlayAd,jwPauseAd:t.vast.jwPauseAd},t.vast.jwPlayAd=t.vast.jwPauseAd=u)}function N(){delete A.jwSkipAd,delete A.jwClickAd,A.initializeAPI();var e=window.jwplayer(A.id).plugins;e.vast&&l.extend(e.vast,Z)}var O,J=null,U={available:!1,active:!1,deviceName:""},W={volume:null,mute:null},z=r.getAbsolutePath(window.location.href),G=null,V=null,H=null,K={volume:p.volume,mute:p.mute},X=null,q=null,Z=null;O=l.extend({},d,p.cast),c(O,"loadscreen"),c(O,"endscreen"),c(O,"logo"),!O.appid||window.cast&&window.cast.receiver||(e.addEventListener("availability",f),e.addEventListener("session",g),e.initialize(O.appid)),this.startCasting=b,this.stopCasting=C,this.openExtension=E};return A}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(152),n(64),n(75),n(66),n(45)],o=function(e,t,n,i,o){function r(i){j=i,null!==e.availability?v.sendEvent("availability",{availability:e.availability}):f&&f.cast?a():p||(p=new n(g),p.addEventListener(t.ERROR,l),p.addEventListener(t.COMPLETE,a),p.load())}function s(e){var t=new f.cast.media.MediaInfo("");t.contentType="video/mp4";var n=new f.cast.media.LoadRequest(t);n.autoplay=!1,e.loadMedia(n)}function a(){f&&f.cast&&f.cast.isAvailable&&!w?(w=new f.cast.ApiConfig(new f.cast.SessionRequest(j),d,A,f.cast.AutoJoinPolicy.ORIGIN_SCOPED),f.cast.initialize(w,u,c)):m++<15&&(h=setTimeout(a,1e3))}function l(){p&&(p.resetEventListeners(),p=null)}function c(){w=null}function u(){}function d(t){v.sendEvent("session",{session:t}),t.sendMessage(e.NS,{whoami:1}),0===t.media.length&&s(t)}function A(t){e.availability=t,v.sendEvent("availability",{availability:t})}var p,w,f=window.chrome,g="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js",h=-1,m=0,j=null,v=o.extend({initialize:r,sendDummyMedia:s},new i("cast.loader"));return v}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[],o=function(){var e=window.chrome,t={};return t.NS="urn:x-cast:com.longtailvideo.jwplayer",t.debug=!1,t.availability=null,t.available=function(n){n=n||t.availability;var i="available";return e&&e.cast&&e.cast.ReceiverAvailability&&(i=e.cast.ReceiverAvailability.AVAILABLE),n===i},t.log=function(){if(t.debug){var e=Array.prototype.slice.call(arguments,0);console.log.apply(console,e)}},t.error=function(){var e=Array.prototype.slice.call(arguments,0);console.error.apply(console,e)},t}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(48),n(64),n(66),n(65),n(45),n(152),n(62)],o=function(e,t,n,i,o,r,s){function a(){var e=document.createElement("div");return e.className="jw-cast-screen jw-reset",e}var l=function(s){function l(e){A.oldstate=A.newstate,A.newstate=e,c(t.JWPLAYER_PLAYER_STATE,{oldstate:A.oldstate,newstate:A.newstate})}function c(e,t){u.sendEvent(e,t)}var u=o.extend(this,new n("cast.provider")),d=-1,A={newstate:i.IDLE,oldstate:i.IDLE,buffer:0,position:0,duration:-1,audioMode:!1},p=a();p.onclick=function(){u.sendEvent(t.JWPLAYER_PROVIDER_CLICK)},u.isCaster=!0,u.init=function(){},u.destroy=function(){clearTimeout(d)},u.updateModel=function(e,n){e.newstate&&(A.newstate=e.newstate,A.oldstate=e.oldstate||A.oldstate,c(t.JWPLAYER_PLAYER_STATE,{oldstate:A.oldstate,newstate:A.newstate})),"ad"!==n&&((void 0!==e.position||void 0!==e.duration)&&(void 0!==e.position&&(A.position=e.position),void 0!==e.duration&&(A.duration=e.duration),c(t.JWPLAYER_MEDIA_TIME,{position:A.position,duration:A.duration})),void 0!==e.buffer&&(A.buffer=e.buffer,c(t.JWPLAYER_MEDIA_BUFFER,{bufferPercent:A.buffer})))},u.supportsFullscreen=function(){return!1},u.setup=function(e,t){t.state&&(A.newstate=t.state),void 0!==t.buffer&&(A.buffer=t.buffer),void 0!==e.position&&(A.position=e.position),void 0!==e.duration&&(A.duration=e.duration),l(i.BUFFERING),s("setup",e)},u.playlistItem=function(e){l(i.BUFFERING),s("item",e)},u.load=function(e){l(i.BUFFERING),s("load",e)},u.stop=function(){clearTimeout(d),d=setTimeout(function(){l(i.IDLE),s("stop")},0)},u.play=function(){s("play")},u.pause=function(){l(i.PAUSED),s("pause")},u.seek=function(e){l(i.BUFFERING),c(t.JWPLAYER_MEDIA_SEEK,{position:A.position,offset:e}),s("seek",e)},u.audioMode=function(){return A.audioMode},u.sendCommand=function(e,t){s(e,t)},u.detachMedia=function(){return r.error("detachMedia called while casting"),document.createElement("video")},u.attachMedia=function(){r.error("attachMedia called while casting")};var w;u.setContainer=function(e){e.appendChild(p),w=e},u.getContainer=function(){return w},u.remove=function(){w.removeChild(p)},u.volume=u.mute=u.setControls=u.setCurrentQuality=u.resize=u.seekDrag=u.addCaptions=u.resetCaptions=u.setVisibility=u.fsCaptions=e.noop,u.setFullScreen=u.getFullScreen=u.checkComplete=o.constant(!1),u.getWidth=u.getHeight=u.getCurrentQuality=o.constant(0),u.getQualityLevels=o.constant(["Auto"])};return s.css(".jwplayer .jwcast-screen",{width:"100%",height:"100%"}),l}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(48),n(153),n(152),n(45)],o=function(e,t,n,i){var o=function(o,r){function s(){l={message:d,position:0,duration:-1}}function a(t,i){var s={command:t};void 0!==i&&(s.args=i),r.sendMessage(o,s,e.noop,function(e){n.error("message send error",e)})}var l,c=new t(o,r),u=i.extend(this,c),d="Loading ad",A=0;u.init=function(){c.init(),s()},u.destroy=function(){c.destroy()},u.updateModel=function(e,t){(e.tag||e.newstate||e.sequence||e.companions)&&n.log("received ad change:",e),e.tag&&l.tag&&e.tag!==l.tag&&(n.error("ad messages not received in order. new model:",e,"old model:",l),s()),i.extend(l,e),c.updateModel(e,t)},u.getAdModel=function(){var e=i.extend({},l);return l.duration>0?e.message=p(l):e.message=d,e},u.resetAdModel=function(){s()},u.skipAd=function(e){a("skipAd",{tag:e.tag})},u.clickAd=function(e){A=(new Date).getTime(),a("clickAd",{tag:e.tag})},u.timeSinceClick=function(){return(new Date).getTime()-A};var p=function(e){var t=e.message.replace(/xx/gi,""+Math.min(0|e.duration,Math.ceil(e.duration-e.position)));return e.podMessage&&e.podcount>1&&(t=e.podMessage.replace(/__AD_POD_CURRENT__/g,""+e.sequence).replace(/__AD_POD_LENGTH__/g,""+e.podcount)+t),t}};return o}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(48),n(45),n(52)],o=function(e,t,n){function i(e,i){var r=t.extend({},e.config);return r.cast=t.extend({pageUrl:l},i),s(r,["base","autostart","controls","fallback","fullscreen","width","height","mobilecontrols","modes","playlistlayout","playlistposition","playlistsize","primary","stretching","sharing","related","ga","skin","logo","listbar","events"]),o(r),e.position&&(r.position=e.position),e.item>0&&(r.item=e.item),r.captionLabel=e.captionLabel,r.playerVersion=n,r}function o(e){var t=e.plugins;delete e.plugins;for(var n in t)if(t.hasOwnProperty(n)){var i=t[n];i.client&&(/[\.\/]/.test(i.client)&&a(i,"client"),i.client.indexOf("vast")>-1&&(e.advertising=r(i)))}}function r(e){var n=t.extend({},e);if(n.client="vast",delete n.companiondiv,n.schedule)for(var i in n.schedule)if(n.schedule.hasOwnProperty(i)){var o=n.schedule[i].ad||n.schedule[i];a(o,"tag")}return a(n,"tag"),n}function s(e,t){for(var n=t.length;n--;)delete e[t[n]]}function a(t,n){t[n]&&(t[n]=e.getAbsolutePath(t[n]))}var l=window.location.href;return{setupCastConfig:i}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(83),n(45)],o=function(e,t){return function(n,i){var o=["seek","stop","playlistNext","playlistPrev","playlistItem","resize","addButton","removeButton","registerPlugin","attachMedia"];t.each(o,function(e){n[e]=function(){return i[e].apply(i,arguments),n}}),n.registerPlugin=e.registerPlugin}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(45)],o=function(e){return function(t,n){var i=["buffer","controls","position","duration","width","height","fullscreen","volume","mute","state","item","stretching","playlist"];e.each(i,function(e){var i=e.slice(0,1).toUpperCase()+e.slice(1);t["get"+i]=function(){return n._model.get(e)}});var o=["getAudioTracks","getCaptionsList","getCurrentAudioTrack","setCurrentAudioTrack","getCurrentCaptions","setCurrentCaptions","getCurrentQuality","setCurrentQuality","getQualityLevels","getVisualQuality","getConfig","getSafeRegion","isBeforeComplete","isBeforePlay","getProvider","detachMedia"],r=["setControls","setFullscreen","setVolume","setMute","setCues"];e.each(o,function(e){t[e]=function(){return n[e].apply(n,arguments)}}),e.each(r,function(e){t[e]=function(){return n[e].apply(n,arguments),t}})}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(45),n(64)],o=function(e,t){return function(n){var i={onBufferChange:t.JWPLAYER_MEDIA_BUFFER,onBufferFull:t.JWPLAYER_MEDIA_BUFFER_FULL,onError:t.JWPLAYER_ERROR,onSetupError:t.JWPLAYER_SETUP_ERROR,onFullscreen:t.JWPLAYER_FULLSCREEN,onMeta:t.JWPLAYER_MEDIA_META,onMute:t.JWPLAYER_MEDIA_MUTE,onPlaylist:t.JWPLAYER_PLAYLIST_LOADED,onPlaylistItem:t.JWPLAYER_PLAYLIST_ITEM,onPlaylistComplete:t.JWPLAYER_PLAYLIST_COMPLETE,onReady:t.JWPLAYER_READY,onResize:t.JWPLAYER_RESIZE,onComplete:t.JWPLAYER_MEDIA_COMPLETE,onSeek:t.JWPLAYER_MEDIA_SEEK,onTime:t.JWPLAYER_MEDIA_TIME,onVolume:t.JWPLAYER_MEDIA_VOLUME,onBeforePlay:t.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:t.JWPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:t.JWPLAYER_DISPLAY_CLICK,onControls:t.JWPLAYER_CONTROLS,onQualityLevels:t.JWPLAYER_MEDIA_LEVELS,onQualityChange:t.JWPLAYER_MEDIA_LEVEL_CHANGED,onCaptionsList:t.JWPLAYER_CAPTIONS_LIST,onCaptionsChange:t.JWPLAYER_CAPTIONS_CHANGED,onAdError:t.JWPLAYER_AD_ERROR,onAdClick:t.JWPLAYER_AD_CLICK,onAdImpression:t.JWPLAYER_AD_IMPRESSION,onAdTime:t.JWPLAYER_AD_TIME,onAdComplete:t.JWPLAYER_AD_COMPLETE,onAdCompanions:t.JWPLAYER_AD_COMPANIONS,onAdSkipped:t.JWPLAYER_AD_SKIPPED,onAdPlay:t.JWPLAYER_AD_PLAY,onAdPause:t.JWPLAYER_AD_PAUSE,onAdMeta:t.JWPLAYER_AD_META,onCast:t.JWPLAYER_CAST_SESSION,onAudioTrackChange:t.JWPLAYER_AUDIO_TRACK_CHANGED,onAudioTracks:t.JWPLAYER_AUDIO_TRACKS},o={onBuffer:"buffer",onPause:"pause",onPlay:"play",onIdle:"idle"};e.each(o,function(t,i){n[i]=e.partial(n.on,t,e)}),e.each(i,function(t,i){n[i]=e.partial(n.on,t,e)})}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t){window.addEventListener||(window.addEventListener=document.addEventListener=Element.prototype.addEventListener=Function.prototype.addEventListener=function(e,t){this.attachEvent(e,t)}),window.removeEventListener||(window.removeEventListener=document.removeEventListener=Element.prototype.removeEventListener=Function.prototype.removeEventListener=function(e,t){this.detachEvent(e,t)})},function(e,t,n){var i=n(161);"string"==typeof i&&(i=[[e.id,i,""]]);n(167)(i,{})},function(e,t,n){t=e.exports=n(163)(),t.push([e.id,".jwplayer,.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jw-media,.jwplayer{overflow:hidden}.jw-media.jw-media-show,.jw-preview{visibility:visible;opacity:1}.jw-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}@font-face{font-family:'jw-icons';src:url("+n(164)+");font-weight:400;font-style:normal}@font-face{font-family:'jw-icons';src:url("+n(164)+") format('embedded-opentype'),url("+n(162)+") format('woff'),url("+n(165)+") format('truetype'),url("+n(166)+') format(\'svg\');font-weight:400;font-style:normal}.jw-controlbar .jw-menu .jw-option:before,.jw-icon-display,.jw-icon-inline,.jw-icon-tooltip{font-family:\'jw-icons\';-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-text,.jwplayer{font-family:Arial,Helvetica,sans-serif}.jw-icon-audio-tracks:before{content:"\\e600"}.jw-icon-buffer:before{content:"\\e601"}.jw-icon-cast:before{content:"\\e603"}.jw-icon-cast.jw-off:before{content:"\\e602"}.jw-icon-cc:before{content:"\\e605"}.jw-icon-cue:before,.jw-icon-menu-bullet:before{content:"\\e606"}.jw-icon-error:before{content:"\\e607"}.jw-icon-fullscreen:before{content:"\\e608"}.jw-icon-fullscreen.jw-off:before{content:"\\e613"}.jw-icon-hd:before{content:"\\e60a"}.jw-rightlick-logo:before{content:"\\e60b"}.jw-icon-next:before{content:"\\e60c"}.jw-icon-pause:before{content:"\\e60d"}.jw-icon-play:before{content:"\\e60e"}.jw-icon-prev:before{content:"\\e60f"}.jw-icon-replay:before{content:"\\e610"}.jw-icon-volume:before{content:"\\e612"}.jw-icon-volume.jw-off:before{content:"\\e611"}.jw-icon-more:before{content:"\\e614"}.jw-icon-close:before{content:"\\e615"}.jw-icon-playlist:before{content:"\\e616"}.jwplayer{width:100%;font-size:16px;position:relative;min-height:0;box-sizing:border-box;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspect-mode{height:auto!important}.jw-controls,.jw-media,.jw-media video,.jw-overlays,.jw-preview{right:0;left:0;bottom:0;position:absolute;top:0;width:100%;height:100%}.jw-controls.jw-controls-disabled,.jw-instream,.jw-preview,.jwplayer .jw-aspect{display:none}.jwplayer .jw-swf,.jwplayer:focus{outline:0}.jwplayer:hover .jw-display-icon-container{background:#333;background-size:#333}.jw-media video{margin:auto;background:0 0}.jw-media video::-webkit-media-controls-start-playback-button{display:none}.jw-controls .jw-controls-right{position:absolute;top:0;right:0}.jw-text{height:1em;font-size:.75em;font-style:normal;font-weight:400;color:#fff;text-align:center;font-variant:normal;font-stretch:normal}.jw-cast-screen,.jw-click,.jw-preview{width:100%;height:100%}.jw-plugin{position:absolute}.jw-instream{position:absolute;top:0;right:0;bottom:0;left:0}.jw-icon-playback:before{content:"\\e60e"}.jw-tab-focus:focus{outline:#0b7ef4 solid 2px}.jw-captions,.jw-controls,.jw-overlays,.jw-preview,.jw-title{pointer-events:none}.jw-controlbar,.jw-display-icon-container,.jw-dock,.jw-logo,.jw-media,.jw-overlays>div,.jw-skip{pointer-events:all}.jw-click{position:absolute}.jw-preview{position:absolute;background:50% 50% no-repeat #000}.jw-error .jw-preview,.jw-stretch-uniform .jw-preview,.jwplayer .jw-preview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-display-icon-container{position:relative;top:50%;display:table;height:3.5em;margin-top:-1.75em;margin-right:auto;margin-left:auto;cursor:pointer}.jw-display-icon-container .jw-icon-display{position:relative;display:table-cell;padding:.25em;vertical-align:middle!important;background-position:50% 50%;background-repeat:no-repeat;font-size:2em}.jw-flag-audio-player .jw-display-icon-container,.jw-flag-dragging .jw-display-icon-container{display:none}.jw-icon{font-family:\'jw-icons\';font-weight:400;background-color:transparent;font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-icon,.jwplayer.jw-state-error .jw-icon-display,body .jw-error .jw-icon-display{-webkit-font-smoothing:antialiased;font-style:normal;text-transform:none;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga"}.jw-controlbar{display:table;position:absolute;right:0;left:0;bottom:0;height:2em;padding:0 .25em}.jw-controlbar .jw-hidden{display:none}.jw-background-color{background-color:#414040}.jw-group{display:table-cell}.jw-controlbar-center-group{width:100%;padding:0 .25em}.jw-controlbar-center-group .jw-slider-time,.jw-controlbar-center-group .jw-text-alt{padding:0}.jw-controlbar-center-group .jw-text-alt{display:none}.jw-controlbar-left-group,.jw-controlbar-right-group{white-space:nowrap}.jw-icon-display:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-knob:hover,.jw-option:before:hover{color:#eee}.jw-icon-inline,.jw-icon-tooltip,.jw-slider-horizontal,.jw-text-duration,.jw-text-elapsed{display:inline-block;height:2em;position:relative;line-height:2em;vertical-align:middle;cursor:pointer}.jw-icon-inline,.jw-icon-tooltip{min-width:1.25em;text-align:center}.jw-icon-playback{min-width:2.25em}.jw-icon-volume{min-width:1.75em;text-align:left}.jw-time-tip{line-height:1em}.jw-icon-inline:after,.jw-icon-tooltip:after{width:100%;height:100%;font-size:1em}.jw-cast{display:none}.jw-cast.jw-can-cast{display:inline-block}.jw-icon-inline.jw-icon-volume,.jw-slider-volume.jw-slider-horizontal{display:none}.jw-dock{margin:.75em;display:block;opacity:1;clear:right}.jw-dock:after{content:\'\';clear:both;display:block}.jw-dock-button{cursor:pointer;float:right;position:relative;width:2.5em;height:2.5em;margin:.5em}.jw-dock-button .jw-arrow{display:none;position:absolute;bottom:-.2em;width:.5em;height:.2em;left:50%;margin-left:-.25em}.jw-dock-button .jw-overlay{display:none;position:absolute;top:2.5em;right:0;margin-top:.25em;padding:.5em;white-space:nowrap}.jw-dock-button:hover .jw-arrow,.jw-dock-button:hover .jw-overlay{display:block}.jw-dock-image{width:100%;height:100%;background-position:50% 50%;background-repeat:no-repeat;opacity:.75}.jw-title{display:none;position:absolute;top:0;width:100%;font-size:.875em;height:8em;background:-webkit-linear-gradient(top,#000 0,#000 18%,rgba(0,0,0,0) 100%);background:linear-gradient(to bottom,#000 0,#000 18%,rgba(0,0,0,0) 100%)}.jw-title-primary,.jw-title-secondary{padding:.75em 1.5em;width:75%;color:#fff;white-space:nowrap;text-overflow:ellipsis;overflow-x:hidden}.jw-title-primary{font-weight:700}.jw-title-secondary{margin-top:-.5em}.jw-slider-container{display:inline-block;height:1em;position:relative}.jw-captions,.jw-slider-volume .jw-buffer{display:none}.jw-buffer,.jw-progress,.jw-rail{position:absolute;cursor:pointer}.jw-progress{background-color:#fff}.jw-rail{background-color:#aaa}.jw-buffer{background-color:#202020}.jw-cue,.jw-knob{position:absolute;cursor:pointer}.jw-cue{background-color:#fff;width:.1em;height:.4em}.jw-knob{background-color:#aaa;width:.4em;height:.4em}.jw-slider-horizontal{width:4em;height:1em}.jw-slider-horizontal.jw-slider-volume{margin-right:5px}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{width:100%;height:.4em}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress{width:0}.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-slider-container{width:100%}.jw-slider-horizontal .jw-knob{left:0;margin-left:-.325em}.jw-slider-vertical{width:.75em;height:4em;bottom:0;position:absolute;padding:1em}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{bottom:0;height:100%}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress{height:0}.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-slider-container{bottom:0;width:.75em;height:100%;left:0;right:0;margin:0 auto}.jw-slider-vertical .jw-slider-container{height:4em;position:relative}.jw-captions,.jw-overlay:after,.jw-rightclick,.jw-tooltip-time{position:absolute}.jw-slider-vertical .jw-knob{bottom:0;left:0;right:0;margin:0 auto}.jw-slider-time{right:0;left:0;width:100%}.jw-captions{margin:0 auto;width:100%;left:0;bottom:1.75em;right:0;max-width:90%;text-align:center}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-text,.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{color:#fff;background-color:#000;word-wrap:break-word;white-space:pre-line;font-style:normal;font-weight:400;text-align:center;text-decoration:none;line-height:1.3em;padding:.1em .8em}.jw-rightclick{display:none;white-space:nowrap}.jw-rightclick.jw-open{display:block}.jw-rightclick ul{list-style:none;font-weight:700;border-radius:.15em;margin:0;border:1px solid #d9dde6;padding-left:0}.jw-rightclick .jw-rightlick-logo{font-size:2em;color:#ff0147;vertical-align:middle;padding-right:.3em;margin-right:.3em;border-right:1px solid #d9dde6}.jw-rightclick a{color:#000;text-decoration:none;padding:1em;display:block;font-size:.6875em}.jw-icon-tooltip.jw-hidden,.jw-logo .jw-flag-audio-player{display:none}.jw-rightclick li{background-color:#f2f3f6;border-bottom:1px solid #d9dde6}.jw-rightclick li:last-child{border-bottom:none}.jw-rightclick li.jw-featured:hover,.jw-rightclick li:hover a{background-color:#e4e6ed;cursor:pointer;color:#ff0046}.jw-rightclick li.jw-featured{background-color:#fff;vertical-align:middle}.jw-rightclick li.jw-featured a{color:#aab4c8}.jw-logo{float:right;padding:.75em;cursor:pointer}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;visibility:visible}.jw-flag-audio-player .jw-media,.jw-skip.jw-hidden{visibility:hidden}.jw-overlay:after{bottom:-.5em;left:-50%;width:100%;height:15%;background-color:transparent;content:" "}.jw-menu,.jw-time-tip,.jw-volume-tip{position:relative;left:-50%;border:1px solid #000;margin:0}.jw-volume-tip{width:100%;height:100%;display:block}.jw-time-tip{text-align:center;font-family:inherit;color:#aaa;bottom:1em;border:4px solid #000}.jw-time-tip .jw-text{line-height:1em}.jw-controlbar .jw-overlay{margin:0;position:absolute;bottom:2em;left:50%;opacity:0;visibility:hidden}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;color:#aaa;padding:0 .5em;font-size:.8em}.jw-controlbar .jw-option:before:hover,.jw-controlbar .jw-option:hover{color:#eee}.jw-controlbar .jw-option:before{padding-right:.125em}.jw-playlist-container ::-webkit-scrollbar-track{background-color:#333;border-radius:10px}.jw-playlist-container ::-webkit-scrollbar{width:5px;border:10px solid #000;border-bottom:0;border-top:0}.jw-playlist-container ::-webkit-scrollbar-thumb{background-color:#fff;border-radius:5px}.jw-tooltip-title{border-bottom:1px solid #444;text-align:left;padding-left:.7em}.jw-playlist{max-height:11em;min-height:4.5em;overflow-y:scroll;width:calc(100% - 4px)}.jw-playlist .jw-option{height:3em;margin-right:5px;color:#fff;padding-left:1em;font-size:.8em}.jw-playlist .jw-label,.jw-playlist .jw-name{display:inline-block;line-height:3em;text-align:left;overflow:hidden;white-space:nowrap}.jw-playlist .jw-label{width:1em}.jw-playlist .jw-name{width:11em}.jw-skip{cursor:default;position:absolute;float:right;display:inline-block;right:.75em;bottom:3em}.jw-skip.jw-skippable,.jw-skip.jw-skippable:hover{cursor:pointer}.jw-skip .jw-skip-icon{display:none;margin-left:-.75em}.jw-skip .jw-skip-icon:before{content:"\\e60c"}.jw-skip .jw-skip-icon,.jw-skip .jw-text{color:#aaa;vertical-align:middle}.jw-skip.jw-skippable:hover .jw-skip-icon,.jw-skip.jw-skippable:hover .jw-text{color:#eee}.jw-skip.jw-skippable .jw-skip-icon{display:inline;margin:0}.jwplayer.jw-state-idle .jw-preview{display:block}.jwplayer.jw-state-idle .jw-icon-display:before{content:"\\e60e"}.jwplayer.jw-state-idle .jw-captions,.jwplayer.jw-state-idle .jw-controlbar{display:none}.jwplayer.jw-state-idle .jw-title{display:block}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-text,.jwplayer.jw-state-paused .jw-display-icon-container,.jwplayer.jw-state-playing .jw-display-icon-container{display:none}.jwplayer.jw-state-playing .jw-icon-playback:before{content:"\\e60d"}.jwplayer.jw-state-paused .jw-icon-playback:before{content:"\\e60e"}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display:before{content:"\\e601"}@-webkit-keyframes spin{100%{-webkit-transform:rotate(360deg)}}@keyframes spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.jwplayer.jw-state-buffering .jw-icon-playback:before{content:"\\e60d"}.jwplayer.jw-state-complete .jw-preview{display:block}.jwplayer.jw-state-complete .jw-captions,.jwplayer.jw-state-complete .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-complete .jw-display-icon-container .jw-icon-display:before{content:"\\e610"}.jwplayer.jw-state-complete .jw-icon-playback:before{content:"\\e60e"}.jwplayer.jw-state-error .jw-preview,.jwplayer.jw-state-error .jw-title,body .jw-error .jw-preview,body .jw-error .jw-title{display:block}.jwplayer.jw-state-error .jw-title .jw-title-primary,body .jw-error .jw-title .jw-title-primary{white-space:normal}.jwplayer.jw-state-error .jw-captions,.jwplayer.jw-state-error .jw-controlbar,body .jw-error .jw-captions,body .jw-error .jw-controlbar{display:none}.jwplayer.jw-state-error:hover .jw-display-icon-container,body .jw-error:hover .jw-display-icon-container{cursor:default;color:#fff;background:#000}.jwplayer.jw-state-error .jw-icon-display,body .jw-error .jw-icon-display{cursor:default;font-family:\'jw-icons\';font-weight:400;background-color:transparent;font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jwplayer.jw-state-error .jw-icon-display:before,body .jw-error .jw-icon-display:before{content:"\\e607"}.jwplayer.jw-state-error .jw-icon-display:hover,body .jw-error .jw-icon-display:hover{color:#fff}body .jw-error{font-size:16px;background-color:#000;color:#eee;width:100%;height:100%;display:table;opacity:1;position:relative}.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed,.jwplayer.jw-flag-skin-loading .jw-captions,.jwplayer.jw-flag-skin-loading .jw-controls,.jwplayer.jw-flag-skin-loading .jw-title{display:none}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jwplayer.jw-flag-fullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-fullscreen.jw-flag-user-inactive{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:inline}.jw-flag-user-inactive.jw-state-playing .jw-controlbar,.jw-flag-user-inactive.jw-state-playing .jw-dock,.jw-flag-user-inactive.jw-state-playing .jw-logo.jw-hide{display:none}.jw-flag-audio-player{background-color:transparent}.jw-flag-audio-player .jw-controlbar{display:table;bottom:0;margin:0;width:100%;min-width:100%;opacity:1}.jw-flag-audio-player .jw-controlbar .jw-icon-fullscreen,.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jw-flag-audio-player .jw-controlbar .jw-icon-inline.jw-icon-volume,.jw-flag-audio-player .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:inline-block}.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar{display:table;height:auto}.jwplayer.jw-flag-audio-player .jw-preview{display:none}.jwplayer.jw-flag-media-audio .jw-controlbar{display:table}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-horizontal,.jwplayer.jw-flag-ads .jw-controlbar .jw-text,.jwplayer.jw-flag-ads .jw-preview{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-fullscreen,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-playback,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:inline}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline.jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls{display:none!important}.jwplayer.jw-flag-ads.jw-flag-touch-screen .jw-controlbar{display:table}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-skin-beelden .jw-background-color{background:rgba(0,0,0,.5)}.jw-skin-beelden .jw-controlbar{background:-webkit-linear-gradient(top,#6c6c6c 0,#444 100%);background:linear-gradient(to bottom,#6c6c6c 0,#444 100%)}.jw-skin-beelden .jw-button-color,.jw-skin-beelden .jw-knob,.jw-skin-beelden .jw-text,.jw-skin-beelden .jw-tooltip-title{color:#c7c7c7}.jw-skin-beelden .jw-button-color:hover{color:#fff}.jw-skin-beelden .jw-option,.jw-skin-beelden .jw-toggle.jw-off{color:#c7c7c7}.jw-skin-beelden .jw-option.jw-active-option{color:#fff}.jw-skin-beelden .jw-icon-display{color:#c7c7c7}.jw-skin-beelden .jw-display-icon-container{border-radius:.5em;padding:.5em .75em}.jw-skin-beelden .jw-display-icon-container:hover{background:#6c6c6c}.jw-skin-beelden .jw-display-icon-container:hover .jw-icon-display{color:#fff}.jw-skin-beelden .jw-rail{background:-webkit-linear-gradient(top,#353535 0,#434343 100%);background:linear-gradient(to bottom,#353535 0,#434343 100%)}.jw-skin-beelden .jw-buffer{background:-webkit-linear-gradient(top,#7d7d7d 0,#868686 100%);background:linear-gradient(to bottom,#7d7d7d 0,#868686 100%)}.jw-skin-beelden .jw-progress{background:-webkit-linear-gradient(top,#c93835 0,#b22021 50%,#803637 100%);background:linear-gradient(to bottom,#c93835 0,#b22021 50%,#803637 100%)}.jw-skin-beelden .jw-slider-horizontal .jw-knob{margin-left:-.325em}.jw-skin-beelden .jw-slider-vertical .jw-knob{margin-bottom:-.325em}.jw-skin-beelden .jw-menu,.jw-skin-beelden .jw-time-tip,.jw-skin-beelden .jw-volume-tip{background:rgba(0,0,0,.5);border:1px solid #000;padding:.4em}.jw-skin-beelden .jw-dock-button .jw-text,.jw-skin-beelden .jw-time-tip .jw-text{color:#bbb}.jw-skin-beelden .jw-time-tip{bottom:1em}.jw-skin-beelden .jw-dock-button{background:rgba(0,0,0,.5);border-radius:.5em}.jw-skin-beelden .jw-dock-button:hover{background:#6c6c6c}.jw-skin-beelden .jw-playlist-container{padding:0}.jw-skin-beelden .jw-icon-inline,.jw-skin-beelden .jw-icon-tooltip,.jw-skin-beelden .jw-text-duration,.jw-skin-beelden .jw-text-elapsed{padding:0 .25em}.jw-skin-beelden .jw-controlbar{display:block;margin:0 auto;max-width:96%;bottom:.7em;box-shadow:inset 0 7px 1px -5px grey;border-radius:.3em}.jw-skin-beelden.jw-flag-audio-player .jw-controlbar{bottom:0}.jw-skin-beelden .jw-icon-playback{padding-left:0}.jw-skin-beelden .jw-icon-playback:before{background-color:#333;background:-webkit-linear-gradient(top,#333,#333 50%,#2e2e2e 50%,#2e2e2e);background:linear-gradient(to bottom,#333,#333 50%,#2e2e2e 50%,#2e2e2e);background-size:100% 2px;border-radius:.3em;padding:.2em .7em;box-shadow:inset 0 0 1px 0 rgba(0,0,0,.6);border:1px solid #000;box-sizing:border-box}.jw-skin-beelden.jw-state-playing .jw-icon-playback:before{padding-right:.8em}.jw-skin-beelden .jw-playlist-container{left:-45%;background-color:#282828;bottom:.5em}.jw-skin-beelden .jw-playlist-container .jw-option{border-bottom:1px solid #000;background-color:#282828;color:#b6b6b6}.jw-skin-beelden .jw-playlist-container .jw-option.jw-active-option,.jw-skin-beelden .jw-playlist-container .jw-option:hover{color:#c93835;background-color:#000}.jw-skin-beelden .jw-playlist-container ::-webkit-scrollbar-track{background-color:#000}.jw-skin-beelden .jw-playlist-container ::-webkit-scrollbar{border:10px solid #282828;border-radius:.25em}.jw-skin-beelden .jw-playlist-container ::-webkit-scrollbar-thumb{background-color:#b6b6b6}.jw-skin-beelden .jw-tooltip-title{border-bottom:1px solid #000;background-color:#282828}.jw-skin-beelden .jw-buffer,.jw-skin-beelden .jw-progress,.jw-skin-beelden .jw-rail{border-radius:.5em;border:1px solid #000}.jw-skin-beelden .jw-rail{background-color:#353535}.jw-skin-beelden .jw-progress{background-color:#c93835}.jw-skin-beelden .jw-buffer{background-color:#7d7d7d;box-shadow:inset 0 -2px 4px -1px rgba(255,255,255,.5)}.jw-skin-beelden .jw-knob{background-color:#bbb5b7;box-shadow:inset 0 0 5px 0 rgba(255,255,255,.5);border:1px solid #000;border-radius:50%}.jw-skin-beelden .jw-slider-horizontal{background:0 0}.jw-skin-beelden .jw-slider-horizontal .jw-slider-container{top:-.75em;height:.4em}.jw-skin-beelden .jw-slider-horizontal .jw-buffer,.jw-skin-beelden .jw-slider-horizontal .jw-progress,.jw-skin-beelden .jw-slider-horizontal .jw-rail{height:.5em}.jw-skin-beelden .jw-slider-horizontal .jw-cue{top:.15em;background-color:#fff;width:.2em;height:.2em;border-radius:1em}.jw-skin-beelden .jw-slider-horizontal .jw-knob{top:-.15em;box-sizing:border-box;width:.8em;height:.8em}.jw-skin-beelden .jw-slider-vertical{bottom:5px}.jw-skin-beelden .jw-slider-vertical .jw-progress,.jw-skin-beelden .jw-slider-vertical .jw-rail{width:.4em}.jw-skin-beelden .jw-slider-vertical .jw-rail{background:rgba(0,0,0,.5)}.jw-skin-beelden .jw-slider-vertical .jw-progress{background:-webkit-linear-gradient(left,#c93835 0,#b22021 50%,#803637 100%);background:linear-gradient(to right,#c93835 0,#b22021 50%,#803637 100%)}.jw-skin-beelden .jw-slider-vertical .jw-knob{width:.7em;height:.7em}.jw-skin-beelden .jw-display-icon-container{border:1px solid #000;box-shadow:inset 0 0 2px 1px rgba(255,255,255,.3)}.jw-skin-beelden .jw-dock-button,.jw-skin-beelden .jw-menu,.jw-skin-beelden .jw-time-tip,.jw-skin-beelden .jw-volume-tip{border-radius:.25em}.jw-skin-beelden .jw-toggle{color:#fff}.jw-skin-beelden .jw-toggle.jw-off{color:#7d7d7d}.jw-skin-bekle .jw-background-color{background:-webkit-linear-gradient(top,#323b4c,#2f3847 50%,#323b4c 100%);background:linear-gradient(to bottom,#323b4c,#2f3847 50%,#323b4c 100%)}.jw-skin-bekle .jw-controlbar{background:rgba(24,35,53,.8)}.jw-skin-bekle .jw-button-color,.jw-skin-bekle .jw-knob,.jw-skin-bekle .jw-text,.jw-skin-bekle .jw-tooltip-title{color:#fff}.jw-skin-bekle .jw-button-color:hover,.jw-skin-bekle .jw-toggle{color:#139ed5}.jw-skin-bekle .jw-option,.jw-skin-bekle .jw-toggle.jw-off{color:#fff}.jw-skin-bekle .jw-option.jw-active-option{color:#139ed5}.jw-skin-bekle .jw-display-icon-container:hover .jw-icon-display,.jw-skin-bekle .jw-icon-display{color:#fff}.jw-skin-bekle .jw-display-icon-container{border-radius:.5em;padding:.5em .75em}.jw-skin-bekle .jw-display-icon-container:hover{background:#139ed5}.jw-skin-bekle .jw-rail{background:-webkit-linear-gradient(top,#323b4c,#2f3847 50%,#323b4c 100%);background:linear-gradient(to bottom,#323b4c,#2f3847 50%,#323b4c 100%)}.jw-skin-bekle .jw-buffer{background:-webkit-linear-gradient(top,#5e6575,#565e6b 50%,#5e6575 100%);background:linear-gradient(to bottom,#5e6575,#565e6b 50%,#5e6575 100%)}.jw-skin-bekle .jw-progress{background:-webkit-linear-gradient(top,#15b2f0,#149bd1 50%,#15b2f0 100%);background:linear-gradient(to bottom,#15b2f0,#149bd1 50%,#15b2f0 100%)}.jw-skin-bekle .jw-slider-horizontal .jw-knob{margin-left:-.325em}.jw-skin-bekle .jw-slider-vertical .jw-knob{margin-bottom:-.325em}.jw-skin-bekle .jw-menu,.jw-skin-bekle .jw-time-tip,.jw-skin-bekle .jw-volume-tip{background:rgba(80,88,99,.9);border:0;padding:.5em}.jw-skin-bekle .jw-dock-button .jw-text,.jw-skin-bekle .jw-time-tip .jw-text{color:#bbb}.jw-skin-bekle .jw-time-tip{bottom:1em}.jw-skin-bekle .jw-dock-button{background:-webkit-linear-gradient(top,#323b4c,#2f3847 50%,#323b4c 100%);background:linear-gradient(to bottom,#323b4c,#2f3847 50%,#323b4c 100%);border-radius:.5em}.jw-skin-bekle .jw-dock-button:hover{background:#139ed5}.jw-skin-bekle .jw-playlist-container{padding:0}.jw-skin-bekle .jw-icon-inline,.jw-skin-bekle .jw-icon-tooltip,.jw-skin-bekle .jw-text-duration,.jw-skin-bekle .jw-text-elapsed{padding:0 .25em}.jw-skin-bekle .jw-controlbar{display:block;margin:0 auto;max-width:96%;bottom:.7em;border-radius:.3em}.jw-skin-bekle.jw-flag-audio-player .jw-controlbar{bottom:0}.jw-skin-bekle .jw-playlist-container{left:-42%;overflow:hidden;bottom:.2em}.jw-skin-bekle .jw-playlist-container .jw-option{border-bottom:1px solid rgba(24,35,53,.8)}.jw-skin-bekle .jw-playlist-container .jw-option.jw-active-option,.jw-skin-bekle .jw-playlist-container .jw-option:hover{background-color:rgba(24,35,53,.8);color:#139ed5}.jw-skin-bekle .jw-playlist-container ::-webkit-scrollbar-track{background-color:#222c37}.jw-skin-bekle .jw-playlist-container ::-webkit-scrollbar{width:2px;border:10px solid rgba(24,35,53,.8);border-radius:.3em}.jw-skin-bekle .jw-playlist-container ::-webkit-scrollbar-thumb{background-color:#fff}.jw-skin-bekle .jw-tooltip-title{border-bottom:1px solid rgba(24,35,53,.8);background-color:rgba(24,35,53,.8)}.jw-skin-bekle .jw-slider-horizontal .jw-buffer,.jw-skin-bekle .jw-slider-horizontal .jw-progress,.jw-skin-bekle .jw-slider-horizontal .jw-rail,.jw-skin-bekle .jw-slider-vertical .jw-buffer,.jw-skin-bekle .jw-slider-vertical .jw-progress,.jw-skin-bekle .jw-slider-vertical .jw-rail{border-radius:.5em}.jw-skin-bekle .jw-slider-horizontal .jw-knob,.jw-skin-bekle .jw-slider-vertical .jw-knob{background-color:#fff;width:.7em;height:.7em;border-radius:50%}.jw-skin-bekle .jw-slider-horizontal{background:0 0}.jw-skin-bekle .jw-slider-horizontal .jw-buffer,.jw-skin-bekle .jw-slider-horizontal .jw-progress,.jw-skin-bekle .jw-slider-horizontal .jw-rail{height:.3em}.jw-skin-bekle .jw-slider-horizontal .jw-cue{top:.05em;background-color:#fff;width:.2em;height:.2em;border-radius:1em}.jw-skin-bekle .jw-slider-horizontal .jw-knob{top:-.2em}.jw-skin-bekle .jw-slider-vertical .jw-progress,.jw-skin-bekle .jw-slider-vertical .jw-rail{width:.3em}.jw-skin-bekle .jw-slider-vertical .jw-rail{background:-webkit-linear-gradient(left,#323b4c,#2f3847 50%,#323b4c 100%);background:linear-gradient(to right,#323b4c,#2f3847 50%,#323b4c 100%)}.jw-skin-bekle .jw-slider-vertical .jw-progress{background:-webkit-linear-gradient(left,#15b2f0,#149bd1 50%,#15b2f0 100%);background:linear-gradient(to right,#15b2f0,#149bd1 50%,#15b2f0 100%)}.jw-skin-bekle .jw-menu,.jw-skin-bekle .jw-time-tip,.jw-skin-bekle .jw-volume-tip{border-radius:.3em}.jw-skin-bekle .jw-menu,.jw-skin-bekle .jw-volume-tip{bottom:.2em}.jw-skin-five .jw-time-tip,.jw-skin-glow .jw-time-tip{bottom:1em}.jw-skin-five .jw-background-color{background:rgba(51,51,51,.7)}.jw-skin-five .jw-controlbar{background:rgba(238,238,238,.8)}.jw-skin-five .jw-button-color,.jw-skin-five .jw-knob,.jw-skin-five .jw-text,.jw-skin-five .jw-tooltip-title{color:#464646}.jw-skin-five .jw-button-color:hover,.jw-skin-five .jw-toggle{color:#000}.jw-skin-five .jw-option,.jw-skin-five .jw-toggle.jw-off{color:#464646}.jw-skin-five .jw-option.jw-active-option{color:#000}.jw-skin-five .jw-icon-display{color:rgba(238,238,238,.8)}.jw-skin-five .jw-display-icon-container{padding:.5em .75em}.jw-skin-five .jw-display-icon-container:hover{background:#333}.jw-skin-five .jw-display-icon-container:hover .jw-icon-display{color:#fff}.jw-skin-five .jw-dock-button .jw-text,.jw-skin-five .jw-option,.jw-skin-five .jw-time-tip .jw-text{color:#bbb}.jw-skin-five .jw-rail{background:#b8b6b7}.jw-skin-five .jw-buffer{background:#9c9a9d}.jw-skin-five .jw-progress{background:#000}.jw-skin-five .jw-menu,.jw-skin-five .jw-time-tip,.jw-skin-five .jw-volume-tip{background:#333;border:0;padding:.5em}.jw-skin-five .jw-dock-button{background:rgba(51,51,51,.7)}.jw-skin-five .jw-dock-button:hover{background:#333}.jw-skin-five .jw-playlist-container{padding:0;left:-42%;background-color:#fff}.jw-skin-five .jw-icon-inline,.jw-skin-five .jw-icon-tooltip,.jw-skin-five .jw-text-duration,.jw-skin-five .jw-text-elapsed{padding:0 .25em}.jw-skin-five .jw-display-icon-container{border-radius:0}.jw-skin-five .jw-option.jw-active-option,.jw-skin-five .jw-option:hover{color:#fff}.jw-skin-five .jw-playlist{width:calc(100% - 8px)}.jw-skin-five .jw-playlist-container .jw-option{border-bottom:1px solid #ececec;background-color:#fff;margin-right:8px;color:#464646}.jw-skin-five .jw-playlist-container .jw-option.jw-active-option,.jw-skin-five .jw-playlist-container .jw-option:hover{background-color:#ececec;color:#000}.jw-skin-five .jw-playlist-container .jw-label .jw-icon-play,.jw-skin-five .jw-playlist-container .jw-option:hover{color:#000}.jw-skin-glow .jw-button-color,.jw-skin-glow .jw-button-color:hover,.jw-skin-glow .jw-display-icon-container:hover .jw-icon-display,.jw-skin-glow .jw-icon-display,.jw-skin-glow .jw-knob,.jw-skin-glow .jw-option,.jw-skin-glow .jw-option.jw-active-option,.jw-skin-glow .jw-text,.jw-skin-glow .jw-toggle,.jw-skin-glow .jw-toggle.jw-off,.jw-skin-glow .jw-tooltip-title{color:#fff}.jw-skin-five .jw-playlist-container ::-webkit-scrollbar-track{background-color:#ececec}.jw-skin-five .jw-playlist-container ::-webkit-scrollbar{width:2px;border:10px solid #fff}.jw-skin-five .jw-playlist-container ::-webkit-scrollbar-thumb{background-color:#000}.jw-skin-five .jw-tooltip-title{border-bottom:1px solid #000;background-color:#ececec}.jw-skin-five .jw-slider-horizontal{background:0 0}.jw-skin-five .jw-slider-horizontal .jw-slider-container{height:.9em}.jw-skin-five .jw-slider-horizontal .jw-buffer,.jw-skin-five .jw-slider-horizontal .jw-progress,.jw-skin-five .jw-slider-horizontal .jw-rail{height:.2em;border-radius:0}.jw-skin-five .jw-slider-horizontal .jw-rail{box-shadow:none}.jw-skin-five .jw-slider-horizontal .jw-knob{top:-.4em;margin:0;background-color:#000;border-radius:0;width:1px;height:1em}.jw-skin-five .jw-slider-horizontal .jw-cue{top:-.1em;width:.1em;height:.4em;background-color:#000;border-left:1px solid #fff;border-right:1px solid #fff}.jw-skin-five .jw-slider-vertical .jw-progress,.jw-skin-five .jw-slider-vertical .jw-rail{width:.2em}.jw-skin-five .jw-slider-vertical .jw-progress{background:#fff}.jw-skin-five .jw-slider-vertical .jw-rail{background:#737373}.jw-skin-five .jw-slider-vertical .jw-knob{margin-bottom:-1px;background:-webkit-linear-gradient(top,#fff 0,#fff 30%,#333 100%);background:linear-gradient(to bottom,#fff 0,#fff 30%,#333 100%);border-radius:0;height:2px;width:100%}.jw-skin-five .jw-dock-button{border-radius:0}.jw-skin-glow .jw-background-color{background:#333}.jw-skin-glow .jw-controlbar{background:rgba(19,20,21,.8)}.jw-skin-glow .jw-display-icon-container{border-radius:.5em;padding:.5em .75em}.jw-skin-glow .jw-display-icon-container:hover{background:#4d4d4d}.jw-skin-glow .jw-rail{background:#2a2c2e}.jw-skin-glow .jw-buffer{background:#3b3d41}.jw-skin-glow .jw-progress{background:#fff}.jw-skin-glow .jw-slider-horizontal .jw-knob{margin-left:-.325em}.jw-skin-glow .jw-slider-vertical .jw-knob{margin-bottom:-.325em}.jw-skin-glow .jw-menu,.jw-skin-glow .jw-time-tip,.jw-skin-glow .jw-volume-tip{background:#333;border:0;padding:.5em}.jw-skin-glow .jw-dock-button .jw-text,.jw-skin-glow .jw-time-tip .jw-text{color:#bbb}.jw-skin-glow .jw-dock-button{background:#333;border-radius:.5em}.jw-skin-glow .jw-dock-button:hover{background:#4d4d4d}.jw-skin-glow .jw-playlist-container{padding:0}.jw-skin-glow .jw-icon-inline,.jw-skin-glow .jw-icon-tooltip,.jw-skin-glow .jw-text-duration,.jw-skin-glow .jw-text-elapsed{padding:0 .25em}.jw-skin-glow .jw-menu,.jw-skin-glow .jw-time-tip,.jw-skin-glow .jw-volume-tip{border-radius:.25em}.jw-skin-glow .jw-menu,.jw-skin-glow .jw-volume-tip{bottom:.3em}.jw-skin-glow .jw-playlist-container{left:-42%;bottom:0;border-radius:0}.jw-skin-glow .jw-playlist-container .jw-option{border-bottom:1px solid #000;color:#fff}.jw-skin-glow .jw-playlist-container .jw-option.jw-active-option,.jw-skin-glow .jw-playlist-container .jw-option:hover{background-color:rgba(19,20,21,.8);color:#fff}.jw-skin-glow .jw-playlist-container ::-webkit-scrollbar-track{background-color:#000}.jw-skin-glow .jw-playlist-container ::-webkit-scrollbar{border:10px solid #3b3d41}.jw-skin-glow .jw-playlist-container ::-webkit-scrollbar-thumb{background-color:#fff}.jw-skin-glow .jw-tooltip-title{border-bottom:1px solid #000;background-color:#3b3d41}.jw-skin-glow .jw-buffer,.jw-skin-glow .jw-progress,.jw-skin-glow .jw-rail{border-radius:.5em}.jw-skin-glow .jw-knob{display:none}.jw-skin-glow .jw-slider-horizontal{background:0 0}.jw-skin-glow .jw-slider-horizontal .jw-cue{top:.075em;background-color:#000;width:.25em;height:.25em;border-radius:1em}.jw-skin-glow .jw-slider-vertical{bottom:5px}.jw-skin-glow .jw-slider-vertical .jw-rail{background-color:#141516}.jw-skin-glow .jw-slider-vertical .jw-progress,.jw-skin-glow .jw-slider-vertical .jw-rail{width:.4em}.jw-skin-roundster .jw-background-color{background:#8490a0}.jw-skin-roundster .jw-controlbar{background:#dfe2e9}.jw-skin-roundster .jw-button-color,.jw-skin-roundster .jw-knob,.jw-skin-roundster .jw-text,.jw-skin-roundster .jw-tooltip-title{color:#8490a0}.jw-skin-roundster .jw-button-color:hover,.jw-skin-roundster .jw-toggle{color:#f15173}.jw-skin-roundster .jw-option,.jw-skin-roundster .jw-toggle.jw-off{color:#8490a0}.jw-skin-roundster .jw-option.jw-active-option{color:#f15173}.jw-skin-roundster .jw-icon-display{color:rgba(255,255,255,.5)}.jw-skin-roundster .jw-display-icon-container{border-radius:.5em;padding:.5em .75em}.jw-skin-roundster .jw-display-icon-container:hover{background:#f15173}.jw-skin-roundster .jw-display-icon-container:hover .jw-icon-display{color:#fff}.jw-skin-roundster .jw-rail{background:#878fa2}.jw-skin-roundster .jw-buffer{background:#9c9a9d}.jw-skin-roundster .jw-progress{background:#f15173}.jw-skin-roundster .jw-slider-horizontal{background:#dfe2e9}.jw-skin-roundster .jw-slider-horizontal .jw-knob{margin-left:-.45em}.jw-skin-roundster .jw-slider-vertical .jw-knob{margin-bottom:-.45em}.jw-skin-roundster .jw-menu,.jw-skin-roundster .jw-time-tip,.jw-skin-roundster .jw-volume-tip{background:#5c6373;border:0;padding:.5em}.jw-skin-roundster .jw-dock-button .jw-text,.jw-skin-roundster .jw-time-tip .jw-text{color:#bbb}.jw-skin-roundster .jw-time-tip{bottom:1em}.jw-skin-roundster .jw-dock-button{background:#8490a0;border-radius:.5em}.jw-skin-roundster .jw-dock-button:hover{background:#f15173}.jw-skin-roundster .jw-playlist-container{padding:0}.jw-skin-roundster .jw-icon-inline,.jw-skin-roundster .jw-icon-tooltip,.jw-skin-roundster .jw-text-duration,.jw-skin-roundster .jw-text-elapsed{padding:0 .25em}.jw-skin-roundster .jw-controlbar{display:block;margin:0 auto;max-width:96%;bottom:.7em;border-radius:1em;padding:0 1em}.jw-skin-roundster.jw-flag-audio-player .jw-controlbar{bottom:0}.jw-skin-roundster .jw-playlist-container{left:-48%;background-color:#878fa2;border-radius:.3em;overflow:hidden}.jw-skin-roundster .jw-playlist-container .jw-icon,.jw-skin-roundster .jw-playlist-container .jw-option,.jw-skin-roundster .jw-playlist-container .jw-text{color:#cbd0da}.jw-skin-roundster .jw-playlist-container .jw-option{border-bottom:1px solid #747d92;background-color:#878fa2}.jw-skin-roundster .jw-playlist-container .jw-option.jw-active-option,.jw-skin-roundster .jw-playlist-container .jw-option:hover{background-color:#747d92;color:#fff}.jw-skin-roundster .jw-playlist-container .jw-label .jw-icon-play{color:#f15173}.jw-skin-roundster .jw-playlist-container ::-webkit-scrollbar-track{background-color:#747d92}.jw-skin-roundster .jw-playlist-container ::-webkit-scrollbar{border:10px solid #878fa2}.jw-skin-roundster .jw-playlist-container ::-webkit-scrollbar-thumb{background-color:#fff}.jw-skin-roundster .jw-tooltip-title{border-bottom:1px solid #747d92;background-color:#878fa2}.jw-skin-roundster .jw-buffer,.jw-skin-roundster .jw-progress,.jw-skin-roundster .jw-rail{border-radius:1em}.jw-skin-roundster .jw-knob{background-color:#fff;width:.9em;height:.9em;border-radius:50%;box-shadow:0 1px 5px 1px #868ea3}.jw-skin-roundster .jw-slider-horizontal .jw-cue{top:.075em;width:.25em;height:.25em;border-radius:50%;background-color:#fff}.jw-skin-roundster .jw-slider-horizontal .jw-knob{top:-.25em}.jw-skin-roundster .jw-slider-vertical .jw-rail{background-color:#434853}.jw-skin-stormtrooper .jw-background-color,.jw-skin-stormtrooper .jw-controlbar,.jw-skin-stormtrooper .jw-display-icon-container:hover,.jw-skin-stormtrooper .jw-rail{background:#2b3036}.jw-skin-roundster .jw-slider-vertical .jw-progress,.jw-skin-roundster .jw-slider-vertical .jw-rail{width:.4em}.jw-skin-roundster .jw-menu,.jw-skin-roundster .jw-time-tip,.jw-skin-roundster .jw-volume-tip{border-radius:.25em}.jw-skin-roundster .jw-menu,.jw-skin-roundster .jw-volume-tip{bottom:.3em}.jw-skin-roundster .jw-dock .jw-dock-button{border-radius:50%}.jw-skin-roundster .jw-dock .jw-overlay{border-radius:2.5em}.jw-skin-stormtrooper .jw-button-color,.jw-skin-stormtrooper .jw-knob,.jw-skin-stormtrooper .jw-text,.jw-skin-stormtrooper .jw-tooltip-title{color:#6d7a8b}.jw-skin-stormtrooper .jw-button-color:hover,.jw-skin-stormtrooper .jw-toggle{color:#35e5fc}.jw-skin-stormtrooper .jw-option,.jw-skin-stormtrooper .jw-toggle.jw-off{color:#6d7a8b}.jw-skin-stormtrooper .jw-option.jw-active-option{color:#35e5fc}.jw-skin-stormtrooper .jw-icon-display{color:#6d7a8b}.jw-skin-stormtrooper .jw-display-icon-container{border-radius:.5em;padding:.5em .75em}.jw-skin-stormtrooper .jw-display-icon-container:hover .jw-icon-display{color:#35e5fc}.jw-skin-stormtrooper .jw-buffer{background:#000}.jw-skin-stormtrooper .jw-progress{background:#35e5fc}.jw-skin-stormtrooper .jw-slider-horizontal{background:#2b3036}.jw-skin-stormtrooper .jw-menu,.jw-skin-stormtrooper .jw-time-tip,.jw-skin-stormtrooper .jw-volume-tip{background:#333;border:0;padding:.5em}.jw-skin-stormtrooper .jw-dock-button .jw-text,.jw-skin-stormtrooper .jw-time-tip .jw-text{color:#bbb}.jw-skin-stormtrooper .jw-time-tip{bottom:1em}.jw-skin-stormtrooper .jw-dock-button{background:#2b3036;border-radius:.5em}.jw-skin-stormtrooper .jw-dock-button:hover{background:#2b3036}.jw-skin-stormtrooper .jw-playlist-container{padding:0}.jw-skin-stormtrooper .jw-icon-inline,.jw-skin-stormtrooper .jw-icon-tooltip,.jw-skin-stormtrooper .jw-text-duration,.jw-skin-stormtrooper .jw-text-elapsed{padding:0 .25em}.jw-skin-stormtrooper .jw-menu,.jw-skin-stormtrooper .jw-time-tip,.jw-skin-stormtrooper .jw-volume-tip{border-radius:.25em}.jw-skin-stormtrooper .jw-menu,.jw-skin-stormtrooper .jw-volume-tip{bottom:.3em}.jw-skin-stormtrooper .jw-playlist-container{background-color:#6d7a8b;left:-42%;border-radius:0;bottom:0}.jw-skin-stormtrooper .jw-playlist-container .jw-icon,.jw-skin-stormtrooper .jw-playlist-container .jw-option,.jw-skin-stormtrooper .jw-playlist-container .jw-text{color:#cbd0da}.jw-skin-stormtrooper .jw-playlist-container .jw-option{border-bottom:1px solid #5b697a;background-color:#6d7a8b}.jw-skin-stormtrooper .jw-playlist-container .jw-option.jw-active-option,.jw-skin-stormtrooper .jw-playlist-container .jw-option:hover{background:#5b697a}.jw-skin-stormtrooper .jw-playlist-container ::-webkit-scrollbar-track{background-color:#5b697a}.jw-skin-stormtrooper .jw-playlist-container ::-webkit-scrollbar{width:2px;border:10px solid #6d7a8b}.jw-skin-stormtrooper .jw-playlist-container ::-webkit-scrollbar-thumb{background:-webkit-linear-gradient(left,#2b3036 0,#fff 50%,#2b3036 100%);background:linear-gradient(to right,#2b3036 0,#fff 50%,#2b3036 100%)}.jw-skin-stormtrooper .jw-tooltip-title{border-bottom:1px solid #5b697a;background-color:#2b3036}.jw-skin-stormtrooper .jw-buffer,.jw-skin-stormtrooper .jw-knob,.jw-skin-stormtrooper .jw-progress,.jw-skin-stormtrooper .jw-rail{box-sizing:border-box;border:1.5px solid #000;border-radius:2px}.jw-skin-stormtrooper .jw-knob,.jw-skin-stormtrooper .jw-progress{background:#2b3036}.jw-skin-stormtrooper .jw-slider-horizontal .jw-buffer,.jw-skin-stormtrooper .jw-slider-horizontal .jw-progress,.jw-skin-stormtrooper .jw-slider-horizontal .jw-rail{height:.3em}.jw-skin-stormtrooper .jw-slider-horizontal .jw-progress{background:-webkit-linear-gradient(top,#1389af 0,#36e4fc 50%,#1389af 100%);background:linear-gradient(to bottom,#1389af 0,#36e4fc 50%,#1389af 100%)}.jw-skin-stormtrooper .jw-slider-horizontal .jw-knob{margin-left:-.05em;top:-.1em;background:-webkit-linear-gradient(left,#1389af 0,#36e4fc 50%,#1389af 100%);background:linear-gradient(to right,#1389af 0,#36e4fc 50%,#1389af 100%);width:.3em;height:.5em;border-width:1px;border-radius:0}.jw-skin-stormtrooper .jw-slider-horizontal .jw-cue{top:-.05em;background-color:#6d7a8b;border:1px solid #000}.jw-skin-stormtrooper .jw-slider-vertical .jw-progress,.jw-skin-stormtrooper .jw-slider-vertical .jw-rail{width:.3em}.jw-skin-stormtrooper .jw-slider-vertical .jw-progress{background:-webkit-linear-gradient(left,#1389af 0,#36e4fc 50%,#1389af 100%);background:linear-gradient(to right,#1389af 0,#36e4fc 50%,#1389af 100%)}.jw-skin-stormtrooper .jw-slider-vertical .jw-knob{margin-bottom:-.05em;background:-webkit-linear-gradient(top,#1389af 0,#36e4fc 50%,#1389af 100%);background:linear-gradient(to bottom,#1389af 0,#36e4fc 50%,#1389af 100%);height:.2em;width:.5em;border-width:1px}.jw-skin-stormtrooper .jw-icon-cc.jw-off:before{content:"\\e604"}.jw-skin-stormtrooper .jw-icon-hd.jw-off:before{content:"\\e609"}.jw-skin-vapor .jw-background-color{background:rgba(0,0,0,.5)}.jw-skin-vapor .jw-controlbar{background:rgba(255,255,255,.4)}.jw-skin-vapor .jw-button-color,.jw-skin-vapor .jw-knob,.jw-skin-vapor .jw-text,.jw-skin-vapor .jw-tooltip-title{color:rgba(0,0,0,.5)}.jw-skin-vapor .jw-button-color:hover,.jw-skin-vapor .jw-toggle{color:#fff}.jw-skin-vapor .jw-option,.jw-skin-vapor .jw-toggle.jw-off{color:rgba(0,0,0,.5)}.jw-skin-vapor .jw-option.jw-active-option{color:#fff}.jw-skin-vapor .jw-icon-display{color:rgba(255,255,255,.5)}.jw-skin-vapor .jw-display-icon-container{border-radius:.5em;padding:.5em .75em}.jw-skin-vapor .jw-display-icon-container:hover{background:#000}.jw-skin-vapor .jw-display-icon-container:hover .jw-icon-display{color:#0f9e60}.jw-skin-vapor .jw-rail{background:rgba(255,255,255,.4)}.jw-skin-vapor .jw-buffer{background:rgba(0,0,0,.5)}.jw-skin-vapor .jw-progress{background:#0f9e60}.jw-skin-vapor .jw-slider-horizontal{background:rgba(255,255,255,.4)}.jw-skin-vapor .jw-slider-vertical .jw-knob{margin-bottom:-.325em;display:none}.jw-skin-vapor .jw-menu,.jw-skin-vapor .jw-time-tip,.jw-skin-vapor .jw-volume-tip{background:rgba(0,0,0,.5);border:0;padding:.5em}.jw-skin-vapor .jw-dock-button .jw-text,.jw-skin-vapor .jw-time-tip .jw-text{color:#bbb}.jw-skin-vapor .jw-time-tip{bottom:1em}.jw-skin-vapor .jw-dock-button{background:rgba(0,0,0,.5);border-radius:.5em}.jw-skin-vapor .jw-dock-button:hover{background:#000}.jw-skin-vapor .jw-playlist-container{padding:0}.jw-skin-vapor .jw-icon-inline,.jw-skin-vapor .jw-icon-tooltip,.jw-skin-vapor .jw-text-duration,.jw-skin-vapor .jw-text-elapsed{padding:0 .25em}.jw-skin-vapor .jw-menu,.jw-skin-vapor .jw-time-tip,.jw-skin-vapor .jw-volume-tip{border-radius:.25em;bottom:.3em}.jw-skin-vapor .jw-option{color:#fff}.jw-skin-vapor .jw-option.jw-active-option,.jw-skin-vapor .jw-option:hover{color:#0f9e60}.jw-skin-vapor .jw-playlist-container{left:-42%;bottom:0;border-radius:0;background-color:#1e1e1e}.jw-skin-vapor .jw-playlist-container .jw-icon,.jw-skin-vapor .jw-playlist-container .jw-option,.jw-skin-vapor .jw-playlist-container .jw-text{color:#a0a0a0}.jw-skin-vapor .jw-playlist-container .jw-option{border-bottom:1px solid #000;background-color:#1e1e1e;color:#a8a8a8}.jw-skin-vapor .jw-playlist-container .jw-option.jw-active-option,.jw-skin-vapor .jw-playlist-container .jw-option:hover{color:#0f9e60}.jw-skin-vapor .jw-playlist-container ::-webkit-scrollbar-track{background-color:#000}.jw-skin-vapor .jw-playlist-container ::-webkit-scrollbar{width:2px;border:10px solid #1e1e1e}.jw-skin-vapor .jw-playlist-container ::-webkit-scrollbar-thumb{background-color:#a0a0a0}.jw-skin-vapor .jw-tooltip-title{border-bottom:1px solid #000;background-color:#1e1e1e}.jw-skin-vapor .jw-slider-horizontal,.jw-skin-vapor .jw-slider-horizontal .jw-buffer,.jw-skin-vapor .jw-slider-horizontal .jw-progress,.jw-skin-vapor .jw-slider-horizontal .jw-rail,.jw-skin-vapor .jw-slider-horizontal .jw-slider-container{height:100%}.jw-skin-vapor .jw-slider-horizontal .jw-cue,.jw-skin-vapor .jw-slider-horizontal .jw-knob{height:2em}.jw-skin-vapor .jw-slider-horizontal .jw-knob{margin-left:0;background-color:#fff;width:.2em}.jw-skin-vapor .jw-slider-horizontal .jw-cue{top:.67em;background:rgba(255,255,255,.5);height:.66em}.jw-skin-vapor .jw-slider-vertical{padding:.4em;bottom:3px;border-radius:2px;border:0}.jw-skin-vapor .jw-slider-vertical .jw-rail{background-color:rgba(0,0,0,.8)}.jw-skin-vapor .jw-slider-vertical .jw-progress,.jw-skin-vapor .jw-slider-vertical .jw-rail{width:.5em;border:1px solid #000}.jw-skin-vapor .jw-icon-cc.jw-off:before{content:"\\e604"}.jw-skin-vapor .jw-icon-hd.jw-off:before{content:"\\e609"}.jw-skin-vapor.jw-flag-audio-player .jw-controlbar{background:rgba(0,0,0,.5)}.jw-skin-six .jw-background-color{background:#333}.jw-skin-six .jw-controlbar{background:-webkit-linear-gradient(90deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%);background:linear-gradient(0deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%)}.jw-skin-six .jw-button-color,.jw-skin-six .jw-knob,.jw-skin-six .jw-text,.jw-skin-six .jw-tooltip-title{color:#aaa}.jw-skin-six .jw-button-color:hover,.jw-skin-six .jw-toggle{color:#eee}.jw-skin-six .jw-option,.jw-skin-six .jw-toggle.jw-off{color:#aaa}.jw-skin-six .jw-option.jw-active-option{color:#eee}.jw-skin-six .jw-icon-display{color:#aaa}.jw-skin-six .jw-display-icon-container:hover{background:#4d4d4d}.jw-skin-six .jw-display-icon-container:hover .jw-icon-display{color:#eee}.jw-skin-six .jw-rail{background:#666}.jw-skin-six .jw-buffer{background:#202020}.jw-skin-six .jw-menu,.jw-skin-six .jw-slider-horizontal,.jw-skin-six .jw-time-tip,.jw-skin-six .jw-volume-tip{background:-webkit-linear-gradient(90deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%)}.jw-skin-six .jw-slider-horizontal{background:linear-gradient(0deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%)}.jw-skin-six .jw-slider-horizontal .jw-knob{margin-left:-.4em;top:-.075em}.jw-skin-six .jw-slider-vertical .jw-knob{margin-bottom:-.4em}.jw-skin-six .jw-menu,.jw-skin-six .jw-time-tip,.jw-skin-six .jw-volume-tip{background:linear-gradient(0deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%);border:1px solid #000;padding:.5em}.jw-skin-six .jw-dock-button .jw-text,.jw-skin-six .jw-time-tip .jw-text{color:#bbb}.jw-skin-six .jw-time-tip{bottom:1em}.jw-skin-six .jw-dock-button{background:#333;border-radius:.5em}.jw-skin-six .jw-dock-button:hover{background:#4d4d4d}.jw-skin-six .jw-playlist-container{padding:0;left:-41%}.jw-skin-six .jw-icon-inline,.jw-skin-six .jw-icon-tooltip,.jw-skin-six .jw-text-duration,.jw-skin-six .jw-text-elapsed{padding:0 .25em}.jw-skin-six .jw-background-color{background-color:#444}.jw-skin-six .jw-controlbar{display:block;margin:0 auto;max-width:96%;bottom:.7em;border:1px solid #000;border-radius:.3em;background-size:100% 100%}.jw-skin-six.jw-flag-audio-player .jw-controlbar{bottom:0}.jw-skin-six .jw-controlbar .jw-overlay{bottom:2.25em}.jw-skin-six .jw-display-icon-container{background:-webkit-linear-gradient(90deg,rgba(73,73,75,.85) 0,rgba(69,69,71,.9) 3%,rgba(63,63,65,.9) 7%,rgba(62,62,64,.9) 10%,rgba(58,58,61,.9) 59%,rgba(52,52,55,.9) 97%,rgba(52,52,55,.85) 100%);background:linear-gradient(0deg,rgba(73,73,75,.85) 0,rgba(69,69,71,.9) 3%,rgba(63,63,65,.9) 7%,rgba(62,62,64,.9) 10%,rgba(58,58,61,.9) 59%,rgba(52,52,55,.9) 97%,rgba(52,52,55,.85) 100%);background-size:100% 100%;border-radius:.3em;padding:0 1em;border:1px solid #000}.jw-skin-six:hover .jw-display-icon-container{background:-webkit-linear-gradient(90deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%);background:linear-gradient(0deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%);background-size:100% 100%}.jw-skin-six .jw-option{text-align:left}.jw-skin-six .jw-option:before{content:"\\e606";font-size:.4em;vertical-align:middle;margin-right:.4em}.jw-skin-six .jw-playlist-container .jw-icon,.jw-skin-six .jw-playlist-container .jw-text{color:#eee}.jw-skin-six .jw-playlist-container .jw-option{border-bottom:1px solid #2f2f31;color:#878787}.jw-skin-six .jw-playlist-container .jw-option:before{content:""}.jw-skin-six .jw-playlist-container .jw-option.jw-active-option,.jw-skin-six .jw-playlist-container .jw-option:hover{background-color:#2f2f31;color:#fff}.jw-skin-seven .jw-playlist-container .jw-label .jw-icon-play,.jw-skin-seven .jw-playlist-container .jw-option:hover .jw-label{color:#ff0046}.jw-skin-six .jw-playlist-container ::-webkit-scrollbar{border-radius:.25em}.jw-skin-six .jw-playlist-container ::-webkit-scrollbar-track{background-color:#3c3c3e}.jw-skin-six .jw-playlist-container ::-webkit-scrollbar-thumb{background:-webkit-linear-gradient(left,#fff 0,#ccc 50%,#fff 100%);background:linear-gradient(to right,#fff 0,#ccc 50%,#fff 100%)}.jw-skin-six .jw-buffer,.jw-skin-six .jw-progress,.jw-skin-six .jw-rail{border-radius:.5em;border:1px solid #000}.jw-skin-six .jw-progress{background:-webkit-linear-gradient(top,#fff 0,#ccc 50%,#fff 100%);background:linear-gradient(to bottom,#fff 0,#ccc 50%,#fff 100%)}.jw-skin-six .jw-rail{box-shadow:inset 0 3px 10px 1px rgba(51,51,51,.85)}.jw-skin-six .jw-knob{width:.8em;height:.8em;border-radius:1em;background:-webkit-radial-gradient(center,ellipse,#f3f3f3 0,#d2d2d2 90%,#b0b0b0 100%);background:radial-gradient(ellipse at center,#f3f3f3 0,#d2d2d2 90%,#b0b0b0 100%);box-shadow:0 1px 10px 1px rgba(0,0,0,.75)}.jw-skin-six .jw-slider-horizontal .jw-slider-container{height:1.2em}.jw-skin-six .jw-slider-horizontal .jw-buffer,.jw-skin-six .jw-slider-horizontal .jw-progress,.jw-skin-six .jw-slider-horizontal .jw-rail{height:.65em}.jw-skin-six .jw-slider-horizontal .jw-progress{border-radius:.5em 0 0 .5em}.jw-skin-six .jw-slider-horizontal .jw-buffer,.jw-skin-six .jw-slider-horizontal .jw-progress{border:1px solid #000;border-style:solid none #000}.jw-skin-six .jw-slider-horizontal .jw-cue{top:.2em;width:.25em;height:.25em;background-color:#616164;border-radius:50%;box-shadow:0 0 0 1px rgba(0,0,0,.75)}.jw-skin-six .jw-slider-vertical .jw-progress,.jw-skin-six .jw-slider-vertical .jw-rail{width:.65em}.jw-skin-six .jw-slider-vertical .jw-progress{background:-webkit-linear-gradient(left,#fff 0,#ccc 50%,#fff 100%);background:linear-gradient(to right,#fff 0,#ccc 50%,#fff 100%);border-radius:0 0 .5em .5em}.jw-skin-six .jw-menu,.jw-skin-six .jw-time-tip,.jw-skin-six .jw-volume-tip{background-size:100% 100%;border-radius:.25em}.jw-skin-six .jw-dock .jw-dock-button{background:-webkit-linear-gradient(90deg,rgba(73,73,75,.85) 0,rgba(69,69,71,.9) 3%,rgba(63,63,65,.9) 7%,rgba(62,62,64,.9) 10%,rgba(58,58,61,.9) 59%,rgba(52,52,55,.9) 97%,rgba(52,52,55,.85) 100%);background:linear-gradient(0deg,rgba(73,73,75,.85) 0,rgba(69,69,71,.9) 3%,rgba(63,63,65,.9) 7%,rgba(62,62,64,.9) 10%,rgba(58,58,61,.9) 59%,rgba(52,52,55,.9) 97%,rgba(52,52,55,.85) 100%);background-size:100% 100%;border-radius:.25em}.jw-skin-six .jw-dock .jw-dock-button .jw-overlay,.jw-skin-six .jw-dock .jw-dock-button:hover{background:-webkit-linear-gradient(90deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%)}.jw-skin-six .jw-dock .jw-dock-button:hover{background:linear-gradient(0deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%)}.jw-skin-six .jw-dock .jw-dock-button .jw-overlay{background:linear-gradient(0deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%);background-size:100% 100%;border-radius:.25em}.jw-skin-six .jw-skip{background:-webkit-linear-gradient(90deg,rgba(73,73,75,.85) 0,rgba(69,69,71,.9) 3%,rgba(63,63,65,.9) 7%,rgba(62,62,64,.9) 10%,rgba(58,58,61,.9) 59%,rgba(52,52,55,.9) 97%,rgba(52,52,55,.85) 100%);background:linear-gradient(0deg,rgba(73,73,75,.85) 0,rgba(69,69,71,.9) 3%,rgba(63,63,65,.9) 7%,rgba(62,62,64,.9) 10%,rgba(58,58,61,.9) 59%,rgba(52,52,55,.9) 97%,rgba(52,52,55,.85) 100%);background-size:100% 100%;border-radius:.5em;padding:.25em .5em}.jw-skin-six .jw-skip:hover{background:-webkit-linear-gradient(90deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%);background:linear-gradient(0deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%);background-size:100% 100%}.jw-skin-seven .jw-background-color{background:#000}.jw-skin-seven .jw-controlbar{border-top:#333 1px solid;height:2.5em}.jw-skin-seven .jw-group{vertical-align:middle}.jw-skin-seven .jw-playlist{background-color:rgba(0,0,0,.5)}.jw-skin-seven .jw-playlist-container{left:-43%;background-color:rgba(0,0,0,.5)}.jw-skin-seven .jw-playlist-container .jw-option{border-bottom:1px solid #444}.jw-skin-seven .jw-playlist-container .jw-option.jw-active-option,.jw-skin-seven .jw-playlist-container .jw-option:hover{background-color:#000}.jw-skin-seven .jw-playlist-container .jw-icon-playlist{margin-left:0}.jw-skin-seven .jw-playlist-container .jw-label .jw-icon-play:before{padding-left:0}.jw-skin-seven .jw-tooltip-title{background-color:#000;color:#fff}.jw-skin-seven .jw-button-color,.jw-skin-seven .jw-text{color:#fff}.jw-skin-seven .jw-button-color:hover,.jw-skin-seven .jw-toggle{color:#ff0046}.jw-skin-seven .jw-icon-display,.jw-skin-seven .jw-toggle.jw-off{color:#fff}.jw-skin-seven .jw-controlbar .jw-icon:before,.jw-skin-seven .jw-text-duration,.jw-skin-seven .jw-text-elapsed{padding:0 .7em}.jw-skin-seven .jw-controlbar .jw-icon-playlist:before{padding:0}.jw-skin-seven .jw-icon-next,.jw-skin-seven .jw-icon-prev{font-size:.7em}.jw-skin-seven .jw-icon-prev:before{border-left:1px solid #666}.jw-skin-seven .jw-icon-next:before{border-right:1px solid #666}.jw-skin-seven .jw-icon-display:before{padding-left:0}.jw-skin-seven .jw-display-icon-container{border-radius:50%;padding:0 .3em;border:1px solid #333}.jw-skin-seven.jw-state-idle .jw-display-icon-container{padding:0 0 0 .5em}.jw-skin-seven .jw-rail{background-color:#384154;box-shadow:none}.jw-skin-seven .jw-buffer{background-color:#666f82}.jw-skin-seven .jw-progress{background:#ff0046}.jw-skin-seven .jw-knob{width:.6em;height:.6em;background-color:#fff;box-shadow:0 0 0 1px #000;border-radius:1em}.jw-skin-seven .jw-slider-horizontal .jw-slider-container{height:.95em}.jw-skin-seven .jw-slider-horizontal .jw-buffer,.jw-skin-seven .jw-slider-horizontal .jw-progress,.jw-skin-seven .jw-slider-horizontal .jw-rail{height:.2em;border-radius:0}.jw-skin-seven .jw-slider-horizontal .jw-knob{top:-.2em}.jw-skin-seven .jw-slider-horizontal .jw-cue{top:-.05em;width:.3em;height:.3em;background-color:#fff;border-radius:50%}.jw-skin-seven .jw-slider-vertical .jw-buffer,.jw-skin-seven .jw-slider-vertical .jw-progress,.jw-skin-seven .jw-slider-vertical .jw-rail{width:.2em}.jw-skin-seven .jw-volume-tip{width:100%;left:-45%;padding-bottom:.7em}.jw-skin-seven .jw-text-duration{color:#666f82}.jw-skin-seven .jw-controlbar-right-group .jw-icon-inline:before,.jw-skin-seven .jw-controlbar-right-group .jw-icon-tooltip:before{border-left:1px solid #666}.jw-skin-seven .jw-controlbar-right-group .jw-icon-inline:first-child:before{border:none}.jw-skin-seven .jw-dock .jw-dock-button{border-radius:50%;border:1px solid #333}.jw-skin-seven .jw-dock .jw-overlay{border-radius:2.5em}.jw-skin-seven .jw-icon-tooltip .jw-active-option{background-color:#ff0046;color:#fff}.jw-skin-seven .jw-icon-volume{min-width:2.6em}.jw-skin-seven .jw-menu,.jw-skin-seven .jw-skip,.jw-skin-seven .jw-time-tip,.jw-skin-seven .jw-volume-tip{border:1px solid #333}.jw-skin-seven .jw-time-tip{padding:.2em;bottom:1.3em}.jw-skin-seven .jw-menu,.jw-skin-seven .jw-volume-tip{bottom:.24em}.jw-skin-seven .jw-skip{padding:.4em;border-radius:1em}.jw-skin-seven .jw-skip .jw-icon-inline,.jw-skin-seven .jw-skip .jw-text{color:#fff;font-size:.7em}',""]);
},function(e,t){e.exports="data:application/font-woff;base64,d09GRgABAAAAABQ4AAsAAAAAE+wAAQABAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxID2WNtYXAAAAFoAAAAVAAAAFQaVsydZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAD3AAAA9wKFaHg2hlYWQAABE0AAAANgAAADYIGEIZaGhlYQAAEWwAAAAkAAAAJAmCBdxobXR4AAARkAAAAGwAAABscmAG/WxvY2EAABH8AAAAOAAAADg2EDnwbWF4cAAAEjQAAAAgAAAAIAAiANFuYW1lAAASVAAAAcIAAAHCwZOZtHBvc3QAABQYAAAAIAAAACAAAwAAAAMEmQGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA5hYDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOYW//3//wAAAAAAIOYA//3//wAB/+MaBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAABABgAAAFoAOAADoAPwBEAEkAACUVIi4CNTQ2Ny4BNTQ+AjMyHgIVFAYHHgEVFA4CIxEyFhc+ATU0LgIjIg4CFRQWFz4BMxExARUhNSEXFSE1IRcVITUhAUAuUj0jCgoKCkZ6o11do3pGCgoKCiM9Ui4qSh4BAjpmiE1NiGY6AQIeSioCVQIL/fWWAXX+i0oBK/7VHh4jPVIuGS4VH0MiXaN6RkZ6o10iQx8VLhkuUj0jAcAdGQ0bDk2IZjo6ZohNDhsNGR3+XgNilZXglZXglZUAAAABAEAAAAPAA4AAIQAAExQeAjMyPgI1MxQOAiMiLgI1ND4CMxUiDgIVMYs6ZohNTYhmOktGeqNdXaN6RkZ6o11NiGY6AcBNiGY6OmaITV2jekZGeqNdXaN6Rks6ZohNAAAEAEAAAATAA4AADgAcACoAMQAAJS4BJyERIREuAScRIREhByMuAyc1HgMXMSsBLgMnNR4DFzErATUeARcxAn8DBQQCDPxGCysLBDz9v1NaCERrjE9irINTCLVbByc6Sio9a1I1CLaBL0YMQgsoCgLB/ukDCgIBSPzCQk6HaEIIWAhQgKdgKUg5JgdYBzRRZzx9C0QuAAAAAAUAQAAABMADgAAOABkAJwA1ADwAACUuASchESERLgEnESERIQE1IREhLgMnMQEjLgMnNR4DFzErAS4DJzUeAxcxKwE1HgEXMQKAAgYFAg38QAwqCgRA/cD+gANA/iAYRVlsPgEtWghFa4xPYq2DUgmzWgcnO0oqPGpSNgm6gDBEDEAMKAwCwP7tAggDAUb8wAHQ8P3APWdUQRf98E2IaEIHWghQgKhgKUg4JgdaCDVRZzt9DEMuAAAEAEAAAAXAA4AABAAJAGcAxQAANxEhESEBIREhEQU+ATc+ATMyFhceARceARceARcjLgEnLgEnLgEnLgEjIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3Mw4BBw4BBw4BBw4BIyImJy4BJy4BJy4BNTQ2Nz4BNzEhPgE3PgEzMhYXHgEXHgEXHgEXIy4BJy4BJy4BJy4BIyIGBw4BBw4BBw4BFRQWFx4BFx4BFx4BMzI2Nz4BNzMOAQcOAQcOAQcOASMiJicuAScuAScuATU0Njc+ATcxQAWA+oAFNvsUBOz8Iw4hExQsGBIhEA8cDQwUCAgLAlsBBQUECgYHDggIEAkQGgsLEgcHCgMDAwMDAwoHBxILCxoQFiEMDA8DWgIJBwgTDQwcERAkFBgsFBMhDg0VBwcHBwcHFQ0Bug0hFBMsGREhEBAcDAwVCAgKAloCBQQECwYGDggIEQgQGwsLEgcHCgMDAwMDAwoHBxILCxsQFSIMDA4DWwIJCAcUDAwdEBEkExksExQhDQ4UBwcICAcHFA4AA4D8gAM1/RYC6tcQGAgJCQUFBQ8KChgPDiETCQ4HBwwFBQgDAwIGBgYRCgoYDQ0cDg0aDQ0XCgoRBgYGDQ0OIhYUJBEQHAsLEgYGBgkICRcPDyQUFCwXGC0VFCQPEBgICQkFBQUPCgoYDw4hEwkOBwcMBQUIAwMCBgYGEQoKGA0NHA4NGg0NFwoKEQYGBg0NDiIWFCQREBwLCxIGBgYJCAkXDw8kFBQsFxgtFRQkDwAAAAADAEAAAAXAA4AAEABvAM4AACUhIiY1ETQ2MyEyFhURFAYjAT4BNz4BNz4BMzIWFx4BFx4BFx4BFzMuAScuAScuAScuASMiBgcOAQcOAQcOARUUFhceARceARceATMyNjc+ATc+ATc+ATcjDgEHDgEjIiYnLgEnLgEnLgE1NDY3OQEhPgE3PgE3PgEzMhYXHgEXHgEXHgEXMy4BJy4BJy4BJy4BIyIGBw4BBw4BBw4BFRQWFx4BFx4BFx4BMzI2Nz4BNz4BNz4BNyMOAQcOASMiJicuAScuAScuATU0Njc5AQUs+6g9V1c9BFg9V1c9/JoDCgcGEgsLGxAJEAgIDgYHCgQEBgFaAgoICBQNDBwQDyESGCwUEyEODRUHBwcHBwcVDQ4hExQrGRQkEBAdDAwUCAcJAloDDwwMIhUQGwsLEgYHCgMEAwMEAbkDCgcHEgsLGxAIEQgHDwYGCwQEBQFbAgoICBUMDBwQECERGSwTFCENDhQHBwgIBwcUDg0hFBMsGRMkERAdDAwUBwgJAlsDDgwNIRUQGwsLEgcHCgMDAwMDAFc+AlY+V1c+/ao+VwH0DRgKCxAGBgYCAwMIBQUMBwcOCRMhDg8YCgoOBgUFCQkIGBAPJBQVLRgXLBQUJA8PFwkICQYGBhILCxwQESQUFiIODQ0GBgYRCgoXDQ0aDg4bDQ0YCgsQBgYGAgMDCAUFDAcHDgkTIQ4PGAoKDgYFBQkJCBgQDyQUFS0YFywUFCQPDxcJCAkGBgYSCwscEBEkFBYiDg0NBgYGEQoKFw0NGg4OGw0AAAABAOAAoAMgAuAAFAAAARQOAiMiLgI1ND4CMzIeAhUDIC1OaTw8aU4tLU5pPDxpTi0BwDxpTi0tTmk8PGlOLS1OaTwAAAMAQAAQBEADkAADABAAHwAANwkBISUyNjU0JiMiBhUUFjMTNCYjIgYVERQWMzI2NRFAAgACAPwAAgAOFRUODhUVDiMVDg4VFQ4OFRADgPyAcBYQDxgWERAWAeYPGBYR/tcPGBYRASkAAgBAAAADwAOAAAcADwAANxEXNxcHFyEBIREnByc3J0CAsI2wgP5zAfMBjYCwjbCAAAGNgLCNsIADgP5zgLCNsIAAAAAFAEAAAAXAA4AABAAJABYAMwBPAAA3ESERIQEhESERATM1MxEjNSMVIxEzFSUeARceARceARUUBgcOAQcOAQcOASsBETMeARcxBxEzMjY3PgE3PgE3PgE1NCYnLgEnLgEnLgErAUAFgPqABTb7FATs/FS2YGC2ZGQCXBQeDg8UBwcJBgcHEwwMIRMTLBuwsBYqE6BHCRcJChIIBw0FBQUEAwINBwcTDAwgETcAA4D8gAM2/RcC6f7Arf5AwMABwK2dBxQODyIWFTAbGC4TFiIPDhgKCQcBwAIHB0P+5gQDAg0HBxcMDCETER0PDhgKCQ8EBQUABAA9AAAFwAOAABAAHQA7AFkAACUhIiY1ETQ2MyEyFhURFAYjASMVIzUjETM1MxUzEQUuAScuAScuASsBETMyNjc+ATc+ATc+ATUuASc5AQcOAQcOASsBETMyFhceARceARceARUUBgcOAQc5AQUq+6k+WFg+BFc+WFg+/bNgs2Rks2ABsAcXDA4fExMnFrCwGywTEx4PDBMHBwYCCAl3CBIKCRQMRzcTHgwMEwcHCwQDBAUFBQ0HAFg+AlQ+WFg+/aw+WAKdra3+QMDAAcB9FiIODxQHBwb+QAkHCRgPDiUTFiwYHTAW4ggNAgMEAR8EBQUPCgoYDw4fERMfDwwXBwAAAAABAEMABgOgA3oAjwAAExQiNScwJic0JicuAQcOARUcARUeARceATc+ATc+ATE2MhUwFAcUFhceARceATMyNjc+ATc+ATc+AzE2MhUwDgIVFBYXHgEXFjY3PgE3PgE3PgE3PgM3PAE1NCYnJgYHDgMxBiI1MDwCNTQmJyYGBw4BBw4DMQYiNTAmJy4BJyYGBw4BMRWQBgQIBAgCBQ4KBwkDFgcHIQ8QDwcHNgUEAwMHBQsJChcMBQ0FBwsHDBMICR8cFQUFAwQDCAUHFRERJBEMEwgJEgUOGQwGMjgvBAkHDBYEAz1IPAQFLyQRIhEQFgoGIiUcBQUEAgMYKCcmCgcsAboFBQwYDwUKBwUEAgMNBwcLBxRrDhENBwggDxOTCgqdMBM1EQwTCAcFBAIFCgcPIw4UQ0IxCgpTc3glEyMREBgIBwEKBxUKESUQJ00mE6/JrA8FBgIHDQMECAkGla2PCQk1VGYxNTsHAgUKChwQC2BqVQoKehYfTwUDRx8TkAMAAAAAAgBGAAAENgOAAAQACAAAJREzESMJAhEDxnBw/IADgPyAAAOA/IADgP5A/kADgAAAAgCAAAADgAOAAAQACQAAJREhESEBIREhEQKAAQD/AP4AAQD/AAADgPyAA4D8gAOAAAAAAAEAQAAAA8ADgAADAAAJAREBA8D8gAOAAcD+QAOA/kAAAgBKAAAEOgOAAAQACAAANxEjETMJAhG6cHADgPyAA4AAA4D8gAOA/kD+QAOAAAAAAQBDAAADQwOAACkAAAEeARUUDgIjIi4CNTQ+AjM1DQE1Ig4CFRQeAjMyPgI1NCYnNwMNGhw8aYxPT4xoPT1ojE8BQP7APGlOLS1OaTw8aU4tFhNTAkMrYzVPjGg9PWiMT0+MaD2ArbOALU5pPDxpTi0tTmk8KUsfMAAAAAEAQABmAiADEwAGAAATETMlESUjQM0BE/7tzQEzARPN/VPNAAQAQAAABJADgAAXACsAOgBBAAAlJz4DNTQuAic3HgMVFA4CBzEvAT4BNTQmJzceAxUOAwcxJz4BNTQmJzceARUUBgcnBREzJRElIwPaKiY+KxcXKz4mKipDMBkZMEMqpCk5REQ5KSE0JBQBFCQzIcMiKCgiKiYwMCYq/c3NARP+7c0AIyheaXI8PHFpXikjK2ZyfEFBfHJmK4MjNZFUVJE1Ix5IUFgvL1lRRx2zFkgpK0YVIxxcNDVZHykDARPN/VPNAAACAEAAAAPDA4AABwAPAAABFyERFzcXBwEHJzcnIREnAypw/qlwl3mZ/iaWepZwAVdtAnNwAVdwlnqT/iOWepZw/qpsAAMAQAETBcACYAAMABkAJgAAARQGIyImNTQ2MzIWFSEUBiMiJjU0NjMyFhUhFAYjIiY1NDYzMhYVAY1iRUVhYUVFYgIWYUVFYmJFRWECHWFFRWJiRUVhAbpFYmJFRWFhRUViYkVFYWFFRWJiRUVhYUUAAAAAAQBmACYDmgNaACAAAAEXFhQHBiIvAQcGIicmND8BJyY0NzYyHwE3NjIXFhQPAQKj9yQkJGMd9vYkYx0kJPf3JCQkYx329iRjHSQk9wHA9iRjHSQk9/ckJCRjHfb2JGMdJCT39yQkJGMd9gAABgBEAAQDvAN8AAQACQAOABMAGAAdAAABIRUhNREhFSE1ESEVITUBMxUjNREzFSM1ETMVIzUBpwIV/esCFf3rAhX96/6dsrKysrKyA3xZWf6dWVn+nVlZAsaysv6dsrL+nbKyAAEAAAABGZqjMK4nXw889QALBAAAAAAA0Zzx+QAAAADRnPH5AAAAAAXAA5AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABgAAAAAABcAAAQAAAAAAAAAAAAAAAAAAABsEAAAAAAAAAAAAAAACAAAABgAAYAQAAEAFAABABQAAQAYAAEAGAABABAAA4ASAAEAEAABABgAAQAYAAD0D4ABDBIAARgQAAIAEAABABIAASgOAAEMEwABABMAAQAQAAEAGAABABAAAZgQAAEQAAAAAAAoAFAAeAIgAuAEEAWAChgOyA9QECAQqBKQFJgXoBgAGGgYqBkIGgAaSBvQHFgdQB4YHuAABAAAAGwDPAAYAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADAAAAAEAAAAAAAIABwCNAAEAAAAAAAMADABFAAEAAAAAAAQADACiAAEAAAAAAAUACwAkAAEAAAAAAAYADABpAAEAAAAAAAoAGgDGAAMAAQQJAAEAGAAMAAMAAQQJAAIADgCUAAMAAQQJAAMAGABRAAMAAQQJAAQAGACuAAMAAQQJAAUAFgAvAAMAAQQJAAYAGAB1AAMAAQQJAAoANADganctc2l4LWljb25zAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjEAVgBlAHIAcwBpAG8AbgAgADEALgAxanctc2l4LWljb25zAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzanctc2l4LWljb25zAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByanctc2l4LWljb25zAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(var o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){e.exports=n.p+"jw-icons.eot"},function(e,t){e.exports="data:application/octet-stream;base64,AAEAAAALAIAAAwAwT1MvMg8SA9kAAAC8AAAAYGNtYXAaVsydAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZihWh4MAAAF4AAAPcGhlYWQIGEIZAAAQ6AAAADZoaGVhCYIF3AAAESAAAAAkaG10eHJgBv0AABFEAAAAbGxvY2E2EDnwAAARsAAAADhtYXhwACIA0QAAEegAAAAgbmFtZcGTmbQAABIIAAABwnBvc3QAAwAAAAATzAAAACAAAwSZAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADmFgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg5hb//f//AAAAAAAg5gD//f//AAH/4xoEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAGAAAAWgA4AAOgA/AEQASQAAJRUiLgI1NDY3LgE1ND4CMzIeAhUUBgceARUUDgIjETIWFz4BNTQuAiMiDgIVFBYXPgEzETEBFSE1IRcVITUhFxUhNSEBQC5SPSMKCgoKRnqjXV2jekYKCgoKIz1SLipKHgECOmaITU2IZjoBAh5KKgJVAgv99ZYBdf6LSgEr/tUeHiM9Ui4ZLhUfQyJdo3pGRnqjXSJDHxUuGS5SPSMBwB0ZDRsOTYhmOjpmiE0OGw0ZHf5eA2KVleCVleCVlQAAAAEAQAAAA8ADgAAhAAATFB4CMzI+AjUzFA4CIyIuAjU0PgIzFSIOAhUxizpmiE1NiGY6S0Z6o11do3pGRnqjXU2IZjoBwE2IZjo6ZohNXaN6RkZ6o11do3pGSzpmiE0AAAQAQAAABMADgAAOABwAKgAxAAAlLgEnIREhES4BJxEhESEHIy4DJzUeAxcxKwEuAyc1HgMXMSsBNR4BFzECfwMFBAIM/EYLKwsEPP2/U1oIRGuMT2Ksg1MItVsHJzpKKj1rUjUItoEvRgxCCygKAsH+6QMKAgFI/MJCTodoQghYCFCAp2ApSDkmB1gHNFFnPH0LRC4AAAAABQBAAAAEwAOAAA4AGQAnADUAPAAAJS4BJyERIREuAScRIREhATUhESEuAycxASMuAyc1HgMXMSsBLgMnNR4DFzErATUeARcxAoACBgUCDfxADCoKBED9wP6AA0D+IBhFWWw+AS1aCEVrjE9irYNSCbNaByc7Sio8alI2CbqAMEQMQAwoDALA/u0CCAMBRvzAAdDw/cA9Z1RBF/3wTYhoQgdaCFCAqGApSDgmB1oINVFnO30MQy4AAAQAQAAABcADgAAEAAkAZwDFAAA3ESERIQEhESERBT4BNz4BMzIWFx4BFx4BFx4BFyMuAScuAScuAScuASMiBgcOAQcOAQcOARUUFhceARceARceATMyNjc+ATczDgEHDgEHDgEHDgEjIiYnLgEnLgEnLgE1NDY3PgE3MSE+ATc+ATMyFhceARceARceARcjLgEnLgEnLgEnLgEjIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3Mw4BBw4BBw4BBw4BIyImJy4BJy4BJy4BNTQ2Nz4BNzFABYD6gAU2+xQE7PwjDiETFCwYEiEQDxwNDBQICAsCWwEFBQQKBgcOCAgQCRAaCwsSBwcKAwMDAwMDCgcHEgsLGhAWIQwMDwNaAgkHCBMNDBwRECQUGCwUEyEODRUHBwcHBwcVDQG6DSEUEywZESEQEBwMDBUICAoCWgIFBAQLBgYOCAgRCBAbCwsSBwcKAwMDAwMDCgcHEgsLGxAVIgwMDgNbAgkIBxQMDB0QESQTGSwTFCENDhQHBwgIBwcUDgADgPyAAzX9FgLq1xAYCAkJBQUFDwoKGA8OIRMJDgcHDAUFCAMDAgYGBhEKChgNDRwODRoNDRcKChEGBgYNDQ4iFhQkERAcCwsSBgYGCQgJFw8PJBQULBcYLRUUJA8QGAgJCQUFBQ8KChgPDiETCQ4HBwwFBQgDAwIGBgYRCgoYDQ0cDg0aDQ0XCgoRBgYGDQ0OIhYUJBEQHAsLEgYGBgkICRcPDyQUFCwXGC0VFCQPAAAAAAMAQAAABcADgAAQAG8AzgAAJSEiJjURNDYzITIWFREUBiMBPgE3PgE3PgEzMhYXHgEXHgEXHgEXMy4BJy4BJy4BJy4BIyIGBw4BBw4BBw4BFRQWFx4BFx4BFx4BMzI2Nz4BNz4BNz4BNyMOAQcOASMiJicuAScuAScuATU0Njc5ASE+ATc+ATc+ATMyFhceARceARceARczLgEnLgEnLgEnLgEjIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3PgE3PgE3Iw4BBw4BIyImJy4BJy4BJy4BNTQ2NzkBBSz7qD1XVz0EWD1XVz38mgMKBwYSCwsbEAkQCAgOBgcKBAQGAVoCCggIFA0MHBAPIRIYLBQTIQ4NFQcHBwcHBxUNDiETFCsZFCQQEB0MDBQIBwkCWgMPDAwiFRAbCwsSBgcKAwQDAwQBuQMKBwcSCwsbEAgRCAcPBgYLBAQFAVsCCggIFQwMHBAQIREZLBMUIQ0OFAcHCAgHBxQODSEUEywZEyQREB0MDBQHCAkCWwMODA0hFRAbCwsSBwcKAwMDAwMAVz4CVj5XVz79qj5XAfQNGAoLEAYGBgIDAwgFBQwHBw4JEyEODxgKCg4GBQUJCQgYEA8kFBUtGBcsFBQkDw8XCQgJBgYGEgsLHBARJBQWIg4NDQYGBhEKChcNDRoODhsNDRgKCxAGBgYCAwMIBQUMBwcOCRMhDg8YCgoOBgUFCQkIGBAPJBQVLRgXLBQUJA8PFwkICQYGBhILCxwQESQUFiIODQ0GBgYRCgoXDQ0aDg4bDQAAAAEA4ACgAyAC4AAUAAABFA4CIyIuAjU0PgIzMh4CFQMgLU5pPDxpTi0tTmk8PGlOLQHAPGlOLS1OaTw8aU4tLU5pPAAAAwBAABAEQAOQAAMAEAAfAAA3CQEhJTI2NTQmIyIGFRQWMxM0JiMiBhURFBYzMjY1EUACAAIA/AACAA4VFQ4OFRUOIxUODhUVDg4VEAOA/IBwFhAPGBYREBYB5g8YFhH+1w8YFhEBKQACAEAAAAPAA4AABwAPAAA3ERc3FwcXIQEhEScHJzcnQICwjbCA/nMB8wGNgLCNsIAAAY2AsI2wgAOA/nOAsI2wgAAAAAUAQAAABcADgAAEAAkAFgAzAE8AADcRIREhASERIREBMzUzESM1IxUjETMVJR4BFx4BFx4BFRQGBw4BBw4BBw4BKwERMx4BFzEHETMyNjc+ATc+ATc+ATU0JicuAScuAScuASsBQAWA+oAFNvsUBOz8VLZgYLZkZAJcFB4ODxQHBwkGBwcTDAwhExMsG7CwFioToEcJFwkKEggHDQUFBQQDAg0HBxMMDCARNwADgPyAAzb9FwLp/sCt/kDAwAHArZ0HFA4PIhYVMBsYLhMWIg8OGAoJBwHAAgcHQ/7mBAMCDQcHFwwMIRMRHQ8OGAoJDwQFBQAEAD0AAAXAA4AAEAAdADsAWQAAJSEiJjURNDYzITIWFREUBiMBIxUjNSMRMzUzFTMRBS4BJy4BJy4BKwERMzI2Nz4BNz4BNz4BNS4BJzkBBw4BBw4BKwERMzIWFx4BFx4BFx4BFRQGBw4BBzkBBSr7qT5YWD4EVz5YWD79s2CzZGSzYAGwBxcMDh8TEycWsLAbLBMTHg8MEwcHBgIICXcIEgoJFAxHNxMeDAwTBwcLBAMEBQUFDQcAWD4CVD5YWD79rD5YAp2trf5AwMABwH0WIg4PFAcHBv5ACQcJGA8OJRMWLBgdMBbiCA0CAwQBHwQFBQ8KChgPDh8REx8PDBcHAAAAAAEAQwAGA6ADegCPAAATFCI1JzAmJzQmJy4BBw4BFRwBFR4BFx4BNz4BNz4BMTYyFTAUBxQWFx4BFx4BMzI2Nz4BNz4BNz4DMTYyFTAOAhUUFhceARcWNjc+ATc+ATc+ATc+Azc8ATU0JicmBgcOAzEGIjUwPAI1NCYnJgYHDgEHDgMxBiI1MCYnLgEnJgYHDgExFZAGBAgECAIFDgoHCQMWBwchDxAPBwc2BQQDAwcFCwkKFwwFDQUHCwcMEwgJHxwVBQUDBAMIBQcVEREkEQwTCAkSBQ4ZDAYyOC8ECQcMFgQDPUg8BAUvJBEiERAWCgYiJRwFBQQCAxgoJyYKBywBugUFDBgPBQoHBQQCAw0HBwsHFGsOEQ0HCCAPE5MKCp0wEzURDBMIBwUEAgUKBw8jDhRDQjEKClNzeCUTIxEQGAgHAQoHFQoRJRAnTSYTr8msDwUGAgcNAwQICQaVrY8JCTVUZjE1OwcCBQoKHBALYGpVCgp6Fh9PBQNHHxOQAwAAAAACAEYAAAQ2A4AABAAIAAAlETMRIwkCEQPGcHD8gAOA/IAAA4D8gAOA/kD+QAOAAAACAIAAAAOAA4AABAAJAAAlESERIQEhESERAoABAP8A/gABAP8AAAOA/IADgPyAA4AAAAAAAQBAAAADwAOAAAMAAAkBEQEDwPyAA4ABwP5AA4D+QAACAEoAAAQ6A4AABAAIAAA3ESMRMwkCEbpwcAOA/IADgAADgPyAA4D+QP5AA4AAAAABAEMAAANDA4AAKQAAAR4BFRQOAiMiLgI1ND4CMzUNATUiDgIVFB4CMzI+AjU0Jic3Aw0aHDxpjE9PjGg9PWiMTwFA/sA8aU4tLU5pPDxpTi0WE1MCQytjNU+MaD09aIxPT4xoPYCts4AtTmk8PGlOLS1OaTwpSx8wAAAAAQBAAGYCIAMTAAYAABMRMyURJSNAzQET/u3NATMBE839U80ABABAAAAEkAOAABcAKwA6AEEAACUnPgM1NC4CJzceAxUUDgIHMS8BPgE1NCYnNx4DFQ4DBzEnPgE1NCYnNx4BFRQGBycFETMlESUjA9oqJj4rFxcrPiYqKkMwGRkwQyqkKTlERDkpITQkFAEUJDMhwyIoKCIqJjAwJir9zc0BE/7tzQAjKF5pcjw8cWleKSMrZnJ8QUF8cmYrgyM1kVRUkTUjHkhQWC8vWVFHHbMWSCkrRhUjHFw0NVkfKQMBE839U80AAAIAQAAAA8MDgAAHAA8AAAEXIREXNxcHAQcnNychEScDKnD+qXCXeZn+JpZ6lnABV20Cc3ABV3CWepP+I5Z6lnD+qmwAAwBAARMFwAJgAAwAGQAmAAABFAYjIiY1NDYzMhYVIRQGIyImNTQ2MzIWFSEUBiMiJjU0NjMyFhUBjWJFRWFhRUViAhZhRUViYkVFYQIdYUVFYmJFRWEBukViYkVFYWFFRWJiRUVhYUVFYmJFRWFhRQAAAAABAGYAJgOaA1oAIAAAARcWFAcGIi8BBwYiJyY0PwEnJjQ3NjIfATc2MhcWFA8BAqP3JCQkYx329iRjHSQk9/ckJCRjHfb2JGMdJCT3AcD2JGMdJCT39yQkJGMd9vYkYx0kJPf3JCQkYx32AAAGAEQABAO8A3wABAAJAA4AEwAYAB0AAAEhFSE1ESEVITURIRUhNQEzFSM1ETMVIzURMxUjNQGnAhX96wIV/esCFf3r/p2ysrKysrIDfFlZ/p1ZWf6dWVkCxrKy/p2ysv6dsrIAAQAAAAEZmqMwridfDzz1AAsEAAAAAADRnPH5AAAAANGc8fkAAAAABcADkAAAAAgAAgAAAAAAAAABAAADwP/AAAAGAAAAAAAFwAABAAAAAAAAAAAAAAAAAAAAGwQAAAAAAAAAAAAAAAIAAAAGAABgBAAAQAUAAEAFAABABgAAQAYAAEAEAADgBIAAQAQAAEAGAABABgAAPQPgAEMEgABGBAAAgAQAAEAEgABKA4AAQwTAAEAEwABABAAAQAYAAEAEAABmBAAARAAAAAAACgAUAB4AiAC4AQQBYAKGA7ID1AQIBCoEpAUmBegGAAYaBioGQgaABpIG9AcWB1AHhge4AAEAAAAbAM8ABgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAMAAAAAQAAAAAAAgAHAI0AAQAAAAAAAwAMAEUAAQAAAAAABAAMAKIAAQAAAAAABQALACQAAQAAAAAABgAMAGkAAQAAAAAACgAaAMYAAwABBAkAAQAYAAwAAwABBAkAAgAOAJQAAwABBAkAAwAYAFEAAwABBAkABAAYAK4AAwABBAkABQAWAC8AAwABBAkABgAYAHUAAwABBAkACgA0AOBqdy1zaXgtaWNvbnMAagB3AC0AcwBpAHgALQBpAGMAbwBuAHNWZXJzaW9uIDEuMQBWAGUAcgBzAGkAbwBuACAAMQAuADFqdy1zaXgtaWNvbnMAagB3AC0AcwBpAHgALQBpAGMAbwBuAHNqdy1zaXgtaWNvbnMAagB3AC0AcwBpAHgALQBpAGMAbwBuAHNSZWd1bGFyAFIAZQBnAHUAbABhAHJqdy1zaXgtaWNvbnMAagB3AC0AcwBpAHgALQBpAGMAbwBuAHNGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},function(e,t,n){e.exports=n.p+"jw-icons.svg"},function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=d[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(a(i.parts[r],t))}else{for(var s=[],r=0;r<i.parts.length;r++)s.push(a(i.parts[r],t));d[i.id]={id:i.id,refs:1,parts:s}}}}function o(e){for(var t=[],n={},i=0;i<e.length;i++){var o=e[i],r=o[0],s=o[1],a=o[2],l=o[3],c={css:s,media:a,sourceMap:l};n[r]?n[r].parts.push(c):t.push(n[r]={id:r,parts:[c]})}return t}function r(){var e=document.createElement("style"),t=w();return e.type="text/css",t.appendChild(e),e}function s(){var e=document.createElement("link"),t=w();return e.rel="stylesheet",t.appendChild(e),e}function a(e,t){var n,i,o;if(t.singleton){var a=g++;n=f||(f=r()),i=l.bind(null,n,a,!1),o=l.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(),i=u.bind(null,n),o=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=r(),i=c.bind(null,n),o=function(){n.parentNode.removeChild(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}function l(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=h(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function c(e,t){var n=t.css,i=t.media;t.sourceMap;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function u(e,t){var n=t.css,i=(t.media,t.sourceMap);i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(i))+" */");var o=new Blob([n],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(o),r&&URL.revokeObjectURL(r)}var d={},A=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=A(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),w=A(function(){return document.head||document.getElementsByTagName("head")[0]}),f=null,g=0;e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p());var n=o(e);return i(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var a=n[s],l=d[a.id];l.refs--,r.push(l)}if(e){var c=o(e);i(c,t)}for(var s=0;s<r.length;s++){var l=r[s];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete d[l.id]}}}};var h=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var i,o;i=[n(42),n(45),n(52),n(48),n(102),n(50),n(62),n(110),n(47),n(75),n(53),n(70),n(64),n(65),n(66),n(55),n(56),n(152),n(90),n(83)],o=function(e,t,n,i,o,r,s,a,l,c,u,d,A,p,w,f,g,h,m,j){var v={};return v.api=e,v._=t,v.version=n,v.utils=t.extend(i,r,{canCast:h.available,getCookies:o.getAllItems,saveCookie:o.setItem,css:s,key:l,extend:t.extend,scriptloader:c,rssparser:m,tea:u,UI:a}),v.vid=d,v.events=t.extend({},A,{eventdispatcher:w,state:p}),v.playlist=t.extend({},f,{item:g}),v.plugins=j,v.cast=h,v}.apply(t,i),!(void 0!==o&&(e.exports=o))}])});
﻿/*! DatePicker v6a MIT/GPL2 @freqdec */
;(function(window, document, $){

window.datePickerController = (function datePickerController() {

    var debug = false,
        urlLocal = $("html").attr("lang"),
        isOpera = Object.prototype.toString.call(window.opera) === "[object Opera]",
        describedBy = "",
        languageInfo = parseUILanguage(),
        nbsp = String.fromCharCode(160),
        datePickers = {},
        weeksInYearCache = {},
        bespokeTitles = {},
        uniqueId = 0,
        finalOpacity = 100,
        buttonTabIndex = true,
        mouseWheel = true,
        deriveLocale = false,
        localeImport = false,
        nodrag = false,
        returnLocaleDate = false,
        kbEvent = false,
        cellFormat = "%d %F %Y",
        titleFormat = "%F %d, %Y",
        statusFormat = "",
        formatParts = isOpera ? ["%j"] : ["%j", " %F %Y"],
        dPartsRegExp = /%([d|j])/,
        mPartsRegExp = /%([M|F|m|n])/,
        yPartsRegExp = /%[y|Y]/,
        noSelectionRegExp = /date-picker-unused|out-of-range|day-disabled|not-selectable/,
        formatTestRegExp = /%([d|j|M|F|m|n|Y|y])/,
        formatSplitRegExp = /%([d|D|l|j|N|w|S|W|M|F|m|n|t|Y|y])/,
        rangeRegExp = /^((\d\d\d\d)(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01]))$/,
        wcDateRegExp = /^(((\d\d\d\d)|(\*\*\*\*))((0[1-9]|1[012])|(\*\*))(0[1-9]|[12][0-9]|3[01]))$/,
        wsCharClass = "\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029";

    (function() {
        var scriptFiles = document.getElementsByTagName('script'),
            json = parseJSON(String(scriptFiles[scriptFiles.length - 1].innerHTML).replace(/[\n\r\s\t]+/g, " ").replace(/^\s+/, "").replace(/\s+$/, ""));

        if (typeof json === "object" && !("err" in json)) {
            affectJSON(json);
        };

        if (deriveLocale && typeof(fdLocale) != "object") {
            var head = document.getElementsByTagName("head")[0] || document.documentElement,
                loc = scriptFiles[scriptFiles.length - 1].src.substr(0, scriptFiles[scriptFiles.length - 1].src.lastIndexOf("/")) + "/lang/",
                script,
                i;

            for (i = 0; i < languageInfo.length; i++) {
                script = document.createElement('script');
                script.type = "text/javascript";
                script.src = loc + languageInfo[i] + ".js";
                script.charSet = "utf-8";

                /*@cc_on
                /*@if(@_win32)
                var bases = document.getElementsByTagName('base');
                if (bases.length && bases[0].childNodes.length) {
                    bases[0].appendChild(script);
                } else {
                    document.getElementsByTagName('head')[0].appendChild(script);
                };
                bases = null;
                @else @*/
                head.appendChild(script);
                /*@end
                @*/
            };
            script = null;
        } else {
            returnLocaleDate = true;
        };
    })();

    // Simple add/remove class methods - they are slow but used rarely
    function addClass(e, c) {
        if (new RegExp("(^|[" + wsCharClass + "])" + c + "([" + wsCharClass + "]|$)").test(e.className)) {
            return;
        };
        e.className += (e.className ? " " : "") + c;
    };

    function removeClass(e, c) {
        e.className = !c ? "" : e.className.replace(new RegExp("(^|[" + wsCharClass + "])" + c + "([" + wsCharClass + "]|$)"), " ").replace(new RegExp("/^[" + wsCharClass + "][" + wsCharClass + "]*/"), '').replace(new RegExp("/[" + wsCharClass + "][" + wsCharClass + "]*$/"), '');
    };

    // Attempts to parse the current language from the HTML element. Defaults to "en" if none given.
    function parseUILanguage() {
        //var languageTag = document.getElementsByTagName('html')[0].getAttribute('lang') || document.getElementsByTagName('html')[0].getAttribute('xml:lang');
        var languageTag;
        languageTag = !languageTag ? "en" : languageTag.toLowerCase();
        return languageTag.search(/^([a-z]{2,3})-([a-z]{2})$/) != -1 ? [languageTag.match(/^([a-z]{2,3})-([a-z]{2})$/)[1], languageTag] : [languageTag];
    };

    // Cross browser split from http://blog.stevenlevithan.com/archives/cross-browser-split
    cbSplit = function(str, separator, limit) {
        // if `separator` is not a regex, use the native `split`
        if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
            return cbSplit._nativeSplit.call(str, separator, limit);
        };

        var output = [],
            lastLastIndex = 0,
            flags = "",
            separator = RegExp(separator.source, "g"),
            separator2, match, lastIndex, lastLength;

        str = str + "";

        if (!cbSplit._compliantExecNpcg) {
            separator2 = RegExp("^" + separator.source + "$(?!\\s)", flags);
        };

        /* behavior for `limit`: if it's...
        - `undefined`: no limit.
        - `NaN` or zero: return an empty array.
        - a positive number: use `Math.floor(limit)`.
        - a negative number: no limit.
        - other: type-convert, then use the above rules. */
        if (limit === undefined || +limit < 0) {
            limit = Infinity;
        } else {
            limit = Math.floor(+limit);
            if (!limit) {
                return [];
            };
        };

        while (match = separator.exec(str)) {
            lastIndex = match.index + match[0].length; // `separator.lastIndex` is not reliable cross-browser

            if (lastIndex > lastLastIndex) {
                output.push(str.slice(lastLastIndex, match.index));

                // fix browsers whose `exec` methods don't consistently return `undefined` for nonparticipating capturing groups
                if (!cbSplit._compliantExecNpcg && match.length > 1) {
                    match[0].replace(separator2, function() {
                        for (var i = 1; i < arguments.length - 2; i++) {
                            if (arguments[i] === undefined) {
                                match[i] = undefined;
                            };
                        };
                    });
                };

                if (match.length > 1 && match.index < str.length) {
                    Array.prototype.push.apply(output, match.slice(1));
                };

                lastLength = match[0].length;
                lastLastIndex = lastIndex;

                if (output.length >= limit) {
                    break;
                };
            };

            if (separator.lastIndex === match.index) {
                // avoid an infinite loop
                separator.lastIndex++;
            };
        };

        if (lastLastIndex === str.length) {
            if (lastLength || !separator.test("")) {
                output.push("");
            };
        } else {
            output.push(str.slice(lastLastIndex));
        };

        return output.length > limit ? output.slice(0, limit) : output;
    };
    // NPCG: nonparticipating capturing group
    cbSplit._compliantExecNpcg = /()??/.exec("")[1] === undefined;
    cbSplit._nativeSplit = String.prototype.split;

    // Affects the JSON passed to the script
    function affectJSON(json) {
        if (!(typeof json === "object")) {
            return;
        };

        var key,
            switchObj = {
                "debug": function(value) {
                    debug = !! value;
                    return true;
                },
                "lang": function(value) {
                    if (typeof value === "string" && value.search(/^[a-z]{2,3}(-([a-z]{2}))?$/i) != -1) {
                        languageInfo = [value.toLowerCase()];
                        returnLocaleDate = true;
                        deriveLocale = true;
                    };
                    return true;
                },
                "nodrag": function(value) {
                    nodrag = !! value;
                    return true;
                },
                "buttontabindex": function(value) {
                    buttonTabIndex = !! value;
                    return true;
                },
                "derivelocale": function(value) {
                    deriveLocale = !! value;
                    return true;
                },
                "mousewheel": function(value) {
                    mouseWheel = !! value;
                    return true;
                },
                "cellformat": function(value) {
                    if (typeof value === "string") {
                        parseCellFormat(value);
                    };
                    return true;
                },
                "titleformat": function(value) {
                    if (typeof value === "string") {
                        titleFormat = value;
                    };
                    return true;
                },
                "statusformat": function(value) {
                    if (typeof value === "string") {
                        statusFormat = value;
                    };
                    return true;
                },
                "describedby": function(value) {
                    if (typeof value === "string") {
                        describedBy = value;
                    };
                    return true;
                },
                "finalopacity": function(value) {
                    if (typeof value === 'number' && (+value > 20 && +value <= 100)) {
                        finalOpacity = parseInt(value, 10);
                    };
                    return true;
                },
                "bespoketitles": function(value) {
                    if (typeof value === "object") {
                        bespokeTitles = {};
                        for (var dt in value) {
                            if (value.hasOwnProperty(dt) && String(dt).match(wcDateRegExp) != -1) {
                                bespokeTitles[dt] = String(value[dt]);
                            };
                        };
                    };
                    return true;
                },
                "_default": function() {
                    if (debug) {
                        throw "Unknown key located within JSON data: " + key;
                    };
                    return true;
                }
            };

        for (key in json) {
            if (!json.hasOwnProperty(key)) {
                continue;
            };
            (switchObj.hasOwnProperty(String(key).toLowerCase()) && switchObj[key] || switchObj._default)(json[key]);
        };
    };

    // Parses the cell format to use whenever the datepicker has keyboard focus
    function parseCellFormat(value) {
        if (isOpera) {
            // Don't use hidden text for opera due to the default
            // browser focus outline stretching outside of the viewport
            formatParts = ["%j"];
            cellFormat = "%j %F %Y";
            return;
        };

        // If no day part stipulated then use presets
        if (value.match(/%([d|j])/) == -1) {
            return;
        };

        // Basic split on the %j or %d modifiers
        formatParts = cbSplit(value, /%([d|j])/);
        cellFormat = value;
    };

    // Pads a number to "length"
    function pad(value, length) {
        length = Math.min(4, length || 2);
        return "0000".substr(0, length - Math.min(String(value).length, length)) + value;
    };

    // Basic event functions
    function addEvent(obj, type, fn) {
        try {
            if (obj.attachEvent) {
                obj.attachEvent("on" + type, fn);
            } else {
                obj.addEventListener(type, fn, true);
            };
        } catch (err) {};
    };

    function removeEvent(obj, type, fn) {
        try {
            if (obj.detachEvent) {
                obj.detachEvent("on" + type, fn);
            } else {
                obj.removeEventListener(type, fn, true);
            };
        } catch (err) {};
    };

    function stopEvent(e) {
        e = e || document.parentWindow.event;
        if (e.stopPropagation) {
            e.stopPropagation();
            e.preventDefault();
        };
        /*@cc_on
        @if(@_win32)
        e.cancelBubble = true;
        e.returnValue = false;
        @end
        @*/
        return false;
    };

    // Parses the JSON passed between the script tags or by using the setGlobalOptions method
    function parseJSON(str) {
        // Check we have a String
        if (!(typeof str === 'string') || str == "") {
            return {};
        };
        try {
            // Does a JSON (native or not) Object exist
            if (typeof JSON === "object" && JSON.parse) {
                return window.JSON.parse(str);
                // Genious code taken from: http://kentbrewster.com/badges/
            } else if (/lang|buttontabindex|mousewheel|cellformat|titleformat|nodrag|describedby/.test(str.toLowerCase())) {
                var f = Function(['var document,top,self,window,parent,Number,Date,Object,Function,',
                    'Array,String,Math,RegExp,Image,ActiveXObject;',
                    'return (', str.replace(/<\!--.+-->/gim, '').replace(/\bfunction\b/g, 'function-'), ');'
                ].join(''));
                return f();
            };
        } catch (e) {};

        if (debug) {
            throw "Could not parse the JSON object";
        };

        return {
            "err": "Could not parse the JSON object"
        };
    };

    // Sets an ARIA role on an element
    function setARIARole(element, role) {
        if (element && element.tagName) {
            element.setAttribute("role", role);
        };
    };

    // Sets an ARIA property on an element
    function setARIAProperty(element, property, value) {
        if (element && element.tagName) {
            element.setAttribute("aria-" + property, value);
        };
    };

    // Sets a tabindex attribute on an element, bends over for IE.
    function setTabIndex(e, i) {
        e.setAttribute(! /*@cc_on!@*/ false ? "tabIndex" : "tabindex", i);
        e.tabIndex = i;
    };

    function dateToYYYYMMDD(dt) {
        return dt instanceof Date && !isNaN(dt) ? dt.getFullYear() + pad(dt.getMonth() + 1) + "" + pad(dt.getDate()) : dt;
    };

    // The datePicker object itself
    function datePicker(options) {
        this.dateSet = null;
        this.timerSet = false;
        this.visible = false;
        this.fadeTimer = null;
        this.timer = null;
        this.yearInc = 0;
        this.monthInc = 0;
        this.dayInc = 0;
        this.mx = 0;
        this.my = 0;
        this.x = 0;
        this.y = 0;
        this.created = false;
        this.disabled = false;
        this.opacity = 0;
        this.opacityTo = 99;
        this.inUpdate = false;
        this.kbEventsAdded = false;
        this.fullCreate = false;
        this.selectedTD = null;
        this.cursorTD = null;
        this.cursorDate = options.cursorDate ? options.cursorDate : "",
        this.date = options.cursorDate ? new Date(+options.cursorDate.substr(0, 4), +options.cursorDate.substr(4, 2) - 1, +options.cursorDate.substr(6, 2)) : new Date();
        this.defaults = {};
        this.dynDisabledDates = {};
        this.dateList = [];
        this.bespokeClass = options.bespokeClass;
        this.firstDayOfWeek = localeImport.firstDayOfWeek;
        this.interval = new Date();
        this.clickActivated = false;
        this.noFocus = true;
        this.kbEvent = false;
        this.delayedUpdate = false;
        this.bespokeTitles = {};

        for (var thing in options) {
            if (options.hasOwnProperty(thing) && String(thing).search(/callbacks|formElements|enabledDates|disabledDates/) != -1) {
                continue;
            };
            this[thing] = options[thing];
        };

        /*@cc_on
        @if(@_win32)
        this.iePopUp = null;
        this.isIE7 = false;
        @end
        @*/

        /*@cc_on
        @if(@_jscript_version <= 5.7)
        this.isIE7 = document.documentElement && typeof document.documentElement.style.maxHeight != "undefined";
        @end
        @*/

        for (var i = 0, prop; prop = ["callbacks", "formElements"][i]; i++) {
            this[prop] = {};
            if (options.hasOwnProperty(prop)) {
                for (thing in options[prop]) {
                    if (options[prop].hasOwnProperty(thing)) {
                        this[prop][thing] = options[prop][thing];
                    };
                };
            };
        };

        // Adjust time to stop daylight savings madness on windows
        this.date.setHours(5);

        // Called from an associated form elements onchange event
        this.changeHandler = function() {
            if (o.disabled) {
                return;
            };
            o.setDateFromInput();
            o.callback("dateset", o.createCbArgObj());
        };

        // Creates the object passed to the callback functions
        this.createCbArgObj = function() {
            return this.dateSet ? {
                "id": this.id,
                "date": this.dateSet,
                "dd": pad(this.date.getDate()),
                "mm": pad(this.date.getMonth() + 1),
                "yyyy": this.date.getFullYear()
            } : {
                "id": this.id,
                "date": null,
                "dd": null,
                "mm": null,
                "yyyy": null
            };
        };

        // Attempts to grab the window scroll offsets
        this.getScrollOffsets = function() {
            if (typeof(window.pageYOffset) == 'number') {
                //Netscape compliant
                return [window.pageXOffset, window.pageYOffset];
            } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
                //DOM compliant
                return [document.body.scrollLeft, document.body.scrollTop];
            } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                //IE6 standards compliant mode
                return [document.documentElement.scrollLeft, document.documentElement.scrollTop];
            };
            return [0, 0];
        };

        // Calculates the current list of disabled & enabled dates for a specific year/month
        this.getDateExceptions = function(y, m) {

            m = pad(m);

            var obj = {},
                lower = o.firstDateShown,
                upper = o.lastDateShown,
                rLength = o.dateList.length,
                rNumber, workingDt, workingY, workingM, dtLower, dtUpper, i, dt, dt1, dt2, rngLower, rngUpper, cDate;

            if (!upper || !lower) {
                lower = o.firstDateShown = y + pad(m) + "01";
                upper = o.lastDateShown = y + pad(m) + pad(daysInMonth(m, y));
            };

            dtLower = Number(lower.substr(0, 6));
            dtUpper = Number(upper.substr(0, 6));

            workingDt = String(dtLower);

            while (+workingDt <= dtUpper) {
                workingY = workingDt.substr(0, 4);
                workingM = workingDt.substr(4, 2);

                for (rNumber = 0; rNumber < rLength; rNumber++) {
                    dt1 = String(o.dateList[rNumber].rLow).replace(/^(\*\*\*\*)/, workingY).replace(/^(\d\d\d\d)(\*\*)/, "$1" + workingM);
                    dt2 = String(o.dateList[rNumber].rHigh).replace(/^(\*\*\*\*)/, workingY).replace(/^(\d\d\d\d)(\*\*)/, "$1" + workingM);

                    // Single date
                    if (dt2 == 1) {
                        if (+dt1 >= +o.firstDateShown && +dt1 <= +o.lastDateShown) {
                            obj[dt1] = o.dateList[rNumber].type;
                        };
                        continue;
                    };

                    // Range
                    if (+dt1 <= +dt2 && +workingDt >= dt1.substr(0, 6) && +workingDt <= dt2.substr(0, 6)) {
                        rngLower = Math.max(dt1, Math.max(String(workingDt) + "01", this.firstDateShown));
                        rngUpper = Math.min(dt2, Math.min(String(workingDt) + "31", this.lastDateShown));
                        for (var i = rngLower; i <= rngUpper; i++) {
                            obj[i] = o.dateList[rNumber].type;
                        };
                    };
                };

                workingDt = new Date(workingY, +workingM, 02);
                workingDt = workingDt.getFullYear() + "" + pad(workingDt.getMonth() + 1);
            };

            return obj;
        };

        // Repositions the datepicker beside the button
        this.reposition = function() {
            if (!o.created || o.staticPos) {
                return;
            };

            o.div.style.visibility = "hidden";
            o.div.style.left = o.div.style.top = "0px";
            o.div.style.display = "block";

            var osh = o.div.offsetHeight,
                osw = o.div.offsetWidth,
                elem = document.getElementById('fd-but-' + o.id),
                pos = o.truePosition(elem),
                trueBody = (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body,
                sOffsets = o.getScrollOffsets(),
                scrollTop = sOffsets[1],
                scrollLeft = sOffsets[0],
                tSpace = parseInt(pos[1] - 2) - parseInt(scrollTop),
                bSpace = parseInt(trueBody.clientHeight + scrollTop) - parseInt(pos[1] + elem.offsetHeight + 2);

            o.div.style.visibility = "visible";

            o.div.style.left = Number(parseInt(trueBody.clientWidth + scrollLeft) < parseInt(osw + pos[0]) ? Math.abs(parseInt((trueBody.clientWidth + scrollLeft) - osw)) : pos[0]) + "px";
            //o.div.style.top  = (fitsBottom || !fitsTop) ? Math.abs(parseInt(pos[1] + elem.offsetHeight + 2)) + "px" : Math.abs(parseInt(pos[1] - (osh + 2))) + "px";

            // Ensure the top of the calendar isn't loaded outside the viewport
            var inTop = Math.abs(parseInt(pos[1] - (osh + 2)));
            if (inTop < scrollTop) {
                inTop = scrollTop;
            }
            o.div.style.top = (bSpace > tSpace) ? Math.abs(parseInt(pos[1] + elem.offsetHeight + 2)) + "px" : inTop + "px";

            /*@cc_on
            @if(@_jscript_version <= 5.7)
            if (o.isIE7) return;
            o.iePopUp.style.top = o.div.style.top;
            o.iePopUp.style.left = o.div.style.left;
            o.iePopUp.style.width = osw + "px";
            o.iePopUp.style.height = (osh - 2) + "px";
            @end
            @*/
        };

        // Resets the tabindex of the previously focused cell
        this.removeOldFocus = function() {
            var td = document.getElementById(o.id + "-date-picker-hover");
            if (td) {
                try {
                    setTabIndex(td, -1);
                    removeClass(td, "date-picker-hover");
                    td.id = "";
                    td.onblur = null;
                    td.onfocus = null;
                } catch (err) {};
            };
        };

        // Sets the tabindex & focus on the currently highlighted cell
        this.setNewFocus = function() {
            var td = document.getElementById(o.id + "-date-picker-hover");
            if (td) {
                try {
                    setTabIndex(td, 0);
                    addClass(td, "date-picker-hover");
                    // If opened with the keyboard then add focus & blur events to the cell
                    if (!this.clickActivated) {
                        td.onblur = o.onblur;
                        td.onfocus = o.onfocus;
                    };

                    // If opened with the keyboard (and not in opera) then add a screen-reader friendly date format
                    if (!isOpera && !this.clickActivated) {
                        o.addAccessibleDate();
                    };

                    // Try to programmatically set focus on the cell
                    if (!this.noFocus && !this.clickActivated) {
                        setTimeout(function() {
                            try {
                                td.focus();
                            } catch (err) {};
                        }, 200);
                    };
                } catch (err) {};
            };
        };

        // Adds a screen-reader friendly date to the current cell whenever
        // the datepicker has been opened with the keyboard
        this.addAccessibleDate = function() {
            var td = document.getElementById(o.id + "-date-picker-hover");

            if (td && !(td.getElementsByTagName("span").length)) {
                var ymd = td.className.match(/cd-([\d]{4})([\d]{2})([\d]{2})/),
                    noS = td.className.search(noSelectionRegExp) != -1,
                    spn = document.createElement('span'),
                    spnC;

                spn.className = "fd-screen-reader";

                while (td.firstChild) {
                    td.removeChild(td.firstChild);
                };

                if (noS) {
                    spnC = spn.cloneNode(false);
                    spnC.appendChild(document.createTextNode(getTitleTranslation(13)));
                    td.appendChild(spnC);
                };

                for (var pt = 0, part; part = formatParts[pt]; pt++) {

                    if (part == "%j" || part == "%d") {
                        td.appendChild(document.createTextNode(printFormattedDate(new Date(ymd[1], +ymd[2] - 1, ymd[3]), part, true)));
                    } else {
                        spnC = spn.cloneNode(false);
                        spnC.appendChild(document.createTextNode(printFormattedDate(new Date(ymd[1], +ymd[2] - 1, ymd[3]), part, true)));
                        td.appendChild(spnC);
                    };
                };
            };
        };

        // Sets the current cursor to a specific date
        this.setCursorDate = function(yyyymmdd) {
            if (String(yyyymmdd).search(/^([0-9]{8})$/) != -1) {
                this.date = new Date(+yyyymmdd.substr(0, 4), +yyyymmdd.substr(4, 2) - 1, +yyyymmdd.substr(6, 2));
                this.cursorDate = yyyymmdd;

                if (this.staticPos) {
                    this.updateTable();
                };
            };
        };

        // Updates the table used to display the datepicker
        this.updateTable = function(noCallback) {
            if (!o || o.inUpdate || !o.created) {
                return;
            };

            // We are currently updating (used to stop public methods from firing)
            o.inUpdate = true;

            // Remove the focus from the currently highlighted cell
            o.removeOldFocus();

            o.div.dir = localeImport.rtl ? "rtl" : "ltr";

            // If the update timer initiated
            if (o.timerSet && !o.delayedUpdate) {
                // Are we incrementing/decrementing the month
                if (o.monthInc) {
                    var n = o.date.getDate(),
                        d = new Date(o.date);

                    d.setDate(2);
                    d.setMonth(d.getMonth() + o.monthInc * 1);
                    // Don't go over the days in the month
                    d.setDate(Math.min(n, daysInMonth(d.getMonth(), d.getFullYear())));

                    o.date = new Date(d);
                } else {
                    o.date.setDate(Math.min(o.date.getDate() + o.dayInc, daysInMonth(o.date.getMonth() + o.monthInc, o.date.getFullYear() + o.yearInc)));
                    o.date.setMonth(o.date.getMonth() + o.monthInc);
                    o.date.setFullYear(o.date.getFullYear() + o.yearInc);
                };
            };

            // Make sure the internal date is within range
            o.outOfRange();

            // Disable/enable the today button
            if (!o.noToday) {
                o.disableTodayButton();
            };

            // Disable/enable the month & year buttons
            o.showHideButtons(o.date);

            var cd = o.date.getDate(),
                cm = o.date.getMonth(),
                cy = o.date.getFullYear(),
                cursorDate = (String(cy) + pad(cm + 1) + pad(cd)),
                tmpDate = new Date(cy, cm, 1);

            tmpDate.setHours(5);

            var dt, cName, td, i, currentDate, cellAdded, col, currentStub, abbr, bespokeRenderClass, spnC, dateSetD,
                // Weekday of the fist of the month
                weekDayC = (tmpDate.getDay() + 6) % 7,
                // The column index this weekday will occupy
                firstColIndex = (((weekDayC - o.firstDayOfWeek) + 7) % 7) - 1,
                // The number of days in the current month
                dpm = daysInMonth(cm, cy),
                // Today as a Date Object
                today = new Date(),
                // Today as a YYYYMMDD String
                today = today.getFullYear() + pad(today.getMonth() + 1) + pad(today.getDate()),
                // A Sring date stub in a YYYYMM format for the current date
                stub = String(tmpDate.getFullYear()) + pad(tmpDate.getMonth() + 1),
                //
                cellAdded = [4, 4, 4, 4, 4, 4],
                // The first day of the previous month as a Date Object
                lm = new Date(cy, cm - 1, 1),
                // The first day of the next month as a Date Object
                nm = new Date(cy, cm + 1, 1),
                // The number of days in the previous month
                daySub = daysInMonth(lm.getMonth(), lm.getFullYear()),
                // YYYYMM String date stub for the next month
                stubN = String(nm.getFullYear()) + pad(nm.getMonth() + 1),
                // YYYYMM String date stub for the previous month
                stubP = String(lm.getFullYear()) + pad(lm.getMonth() + 1),
                weekDayN = (nm.getDay() + 6) % 7,
                weekDayP = (lm.getDay() + 6) % 7,
                // A SPAN node to clone when adding dates to individual cells
                spn = document.createElement('span');

            // Give the "fd-screen-reader" class to the span in order to hide them in the UI
            // but keep them accessible to screen-readers
            spn.className = "fd-screen-reader";

            // The first & last dates shown on the datepicker UI - could be a date from the previous & next month respectively
            o.firstDateShown = !o.constrainSelection && o.fillGrid && (0 - firstColIndex < 1) ? String(stubP) + (daySub + (0 - firstColIndex)) : stub + "01";
            o.lastDateShown = !o.constrainSelection && o.fillGrid ? stubN + pad(41 - firstColIndex - dpm) : stub + String(dpm);

            // Store a reference to the current YYYYMM String representation of the current month
            o.currentYYYYMM = stub;

            bespokeRenderClass = o.callback("redraw", {
                id: o.id,
                dd: pad(cd),
                mm: pad(cm + 1),
                yyyy: cy,
                firstDateDisplayed: o.firstDateShown,
                lastDateDisplayed: o.lastDateShown
            }) || {};

            // An Object of dates that have been explicitly disabled (1) or enabled (0)
            dts = o.getDateExceptions(cy, cm + 1);

            // Double check current date within limits etc
            o.checkSelectedDate();

            //
            dateSetD = (o.dateSet != null) ? o.dateSet.getFullYear() + pad(o.dateSet.getMonth() + 1) + pad(o.dateSet.getDate()) : false;

            // If we have selected a date then set its ARIA selected property
            // to false. We then set the ARIA selected property to true on the
            // newly selected cell after redrawing the table
            if (this.selectedTD != null) {
                setARIAProperty(this.selectedTD, "selected", false);
                this.selectedTD = null;
            };

            // Redraw all of the table cells representing the date parts of the UI
            for (var curr = 0; curr < 42; curr++) {
                // Current row
                row = Math.floor(curr / 7);
                // Current TD node
                td = o.tds[curr];
                // Clone our SPAN node
                spnC = spn.cloneNode(false);
                // Remove any previous contents from the cell
                while (td.firstChild) {
                    td.removeChild(td.firstChild);
                };
                // If the current cell contains a date
                if ((curr > firstColIndex && curr <= (firstColIndex + dpm)) || o.fillGrid) {
                    currentStub = stub;
                    weekDay = weekDayC;
                    dt = curr - firstColIndex;
                    cName = [];
                    selectable = true;

                    // Are we drawing last month
                    if (dt < 1) {
                        dt = daySub + dt;
                        currentStub = stubP;
                        weekDay = weekDayP;
                        selectable = !o.constrainSelection;
                        cName.push("month-out");
                        // Are we drawing next month
                    } else if (dt > dpm) {
                        dt -= dpm;
                        currentStub = stubN;
                        weekDay = weekDayN;
                        selectable = !o.constrainSelection;
                        cName.push("month-out");
                    };

                    // Calcuate this cells weekday
                    weekDay = (weekDay + dt + 6) % 7;

                    // Push a classname representing the weekday e.g. "day-3"
                    cName.push("day-" + weekDay + " cell-" + curr);

                    // A YYYYMMDD String representation of this cells date
                    currentDate = currentStub + String(dt < 10 ? "0" : "") + dt;

                    // If this cells date is out of range
                    if (o.rangeLow && +currentDate < +o.rangeLow || o.rangeHigh && +currentDate > +o.rangeHigh) {
                        // Add a classname to style the cell and stop selection
                        td.className = "out-of-range";
                        // Reset this TD nodes title attribute
                        //td.title = "";
                        // Append the cells date as a text node to the TD
                        td.appendChild(document.createTextNode(dt));
                        // Jaysus, what the feck does this line do again...
                        if (o.showWeeks) {
                            cellAdded[row] = Math.min(cellAdded[row], 2);
                        };
                        // This cells date is within the lower & upper ranges (or no ranges have been defined)
                    } else {
                        // If it's a date from last or next month and the "constrainSelection" option
                        // is false then give the cell a CD-YYYYMMDD class
                        if (selectable) {
                            //td.title = titleFormat ? printFormattedDate(new Date(+String(currentStub).substr(0,4), +String(currentStub).substr(4, 2) - 1, +dt), titleFormat, true) : "";
                            cName.push("cd-" + currentDate + " yyyymm-" + currentStub + " mmdd-" + currentStub.substr(4, 2) + pad(dt));
                            // Otherwise give a "not-selectable" class (which shouldn't be styled in any way, it's for internal use)
                        } else {
                            //td.title = titleFormat ? getTitleTranslation(13) + " " + printFormattedDate(new Date(+String(currentStub).substr(0,4), +String(currentStub).substr(4, 2) - 1, +dt), titleFormat, true) : "";
                            cName.push("yyyymm-" + currentStub + " mmdd-" + currentStub.substr(4, 2) + pad(dt) + " not-selectable");
                        };

                        // Add a classname if the current cells date is today
                        if (currentDate == today) {
                            cName.push("date-picker-today");
                        };

                        // If this cell represents the currently selected date
                        if (dateSetD == currentDate) {
                            // Add a classname (for styling purposes)
                            cName.push("date-picker-selected-date");
                            // Set the ARIA selected property to true
                            setARIAProperty(td, "selected", "true");
                            // And cache a reference to the current cell
                            this.selectedTD = td;
                        };

                        // If the current cell has been explicitly disabled
                        if (((currentDate in dts) && dts[currentDate] == 1)
                            // or
                            ||
                            // ... the current weekday has been disabled
                            (o.disabledDays[weekDay] &&
                                // ... and the current date has not been explicitly enabled
                                !((currentDate in dts) && dts[currentDate] == 0)
                            )
                        ) {
                            // Add a classname to style the cell and stop selection
                            cName.push("day-disabled");
                            // Update the current cells title to say "Disabled date: ..." (or whatever the translation says)
                            if (titleFormat && selectable) {
                                td.title = getTitleTranslation(13) + " " + td.title;
                            };
                        };

                        // Has the redraw callback given us a bespoke classname to add to this cell
                        if (currentDate in bespokeRenderClass) {
                            cName.push(bespokeRenderClass[currentDate]);
                        }

                        // Do we need to highlight this cells weekday representation
                        if (o.highlightDays[weekDay]) {
                            cName.push("date-picker-highlight");
                        };

                        // Is the current onscreen cursor set to this cells date
                        if (cursorDate == currentDate) {
                            td.id = o.id + "-date-picker-hover";
                        };

                        // Add the date to the TD cell as a text node. Note: If the datepicker has been given keyboard
                        // events, this textnode is replaced by a more screen-reader friendly date during the focus event
                        td.appendChild(document.createTextNode(dt));

                        // Add the classnames to the TD node
                        td.className = cName.join(" ");

                        // If the UI displays week numbers then update the celladded
                        if (o.showWeeks) {
                            cellAdded[row] = Math.min(cName[0] == "month-out" ? 3 : 1, cellAdded[row]);
                        };
                    };
                    // The current TD node is empty i.e. represents no date in the UI
                } else {
                    // Add a classname to style the cell
                    td.className = "date-picker-unused";
                    // Add a non-breaking space to unused TD node (for IEs benefit mostly)
                    td.appendChild(document.createTextNode(nbsp));
                    // Reset the TD nodes title attribute
                    td.title = "";
                };

                // Do we update the week number for this row
                if (o.showWeeks && curr - (row * 7) == 6) {
                    while (o.wkThs[row].firstChild) {
                        o.wkThs[row].removeChild(o.wkThs[row].firstChild);
                    };
                    o.wkThs[row].appendChild(document.createTextNode(cellAdded[row] == 4 && !o.fillGrid ? nbsp : getWeekNumber(cy, cm, curr - firstColIndex - 6)));
                    o.wkThs[row].className = "date-picker-week-header" + (["", "", " out-of-range", " month-out", ""][cellAdded[row]]);
                };
            };

            // Update the UI title bar displaying the year & month
            var span = o.titleBar.getElementsByTagName("span");
            while (span[0].firstChild) {
                span[0].removeChild(span[0].firstChild);
            };
            while (span[1].firstChild) {
                span[1].removeChild(span[1].firstChild);
            };
            span[0].appendChild(document.createTextNode(getMonthTranslation(cm, false) + nbsp));
            span[1].appendChild(document.createTextNode(cy));

            // If we are in an animation
            if (o.timerSet) {
                // Speed the timer up a little bit to make the pause between updates quicker
                o.timerInc = 50 + Math.round(((o.timerInc - 50) / 1.8));
                // Recall this function in a timeout
                o.timer = window.setTimeout(o.updateTable, o.timerInc);
            };

            // We are not currently updating the UI
            o.inUpdate = o.delayedUpdate = false;
            // Focus on the correct TD node
            o.setNewFocus();
        };

        // Removes all scaffold from the DOM & events from memory
        this.destroy = function() {

            // Remove the button if it exists
            if (document.getElementById("fd-but-" + this.id)) {
                document.getElementById("fd-but-" + this.id).parentNode.removeChild(document.getElementById("fd-but-" + this.id));
            };

            if (!this.created) {
                return;
            };

            // Event cleanup for Internet Explorers benefit
            removeEvent(this.table, "mousedown", o.onmousedown);
            removeEvent(this.table, "mouseover", o.onmouseover);
            removeEvent(this.table, "mouseout", o.onmouseout);
            removeEvent(document, "mousedown", o.onmousedown);
            removeEvent(document, "mouseup", o.clearTimer);

            if (window.addEventListener && !window.devicePixelRatio) {
                try {
                    window.removeEventListener('DOMMouseScroll', this.onmousewheel, false);
                } catch (err) {};
            } else {
                removeEvent(document, "mousewheel", this.onmousewheel);
                removeEvent(window, "mousewheel", this.onmousewheel);
            };
            o.removeOnFocusEvents();
            clearTimeout(o.fadeTimer);
            clearTimeout(o.timer);

            /*@cc_on
            @if(@_jscript_version <= 5.7)
            if (!o.staticPos && !o.isIE7) {
                try {
                    o.iePopUp.parentNode.removeChild(o.iePopUp);
                    o.iePopUp = null;
                } catch (err) { };
            };
            @end
            @*/

            if (this.div && this.div.parentNode) {
                this.div.parentNode.removeChild(this.div);
            };

            o = null;
        };
        this.resizeInlineDiv = function() {
            o.div.style.width = o.table.offsetWidth + "px";
            o.div.style.height = o.table.offsetHeight + "px";
        };

        this.reset = function() {
            var elemID, elem;
            for (elemID in o.formElements) {
                elem = document.getElementById(elemID);
                if (elem) {
                    if (elem.tagName.toLowerCase() == "select") {
                        elem.selectedIndex = o.formElements[elemID.defaultVal];
                    } else {
                        elem.value = o.formElements[elemID.defaultVal];
                    };
                };
            };
            o.changeHandler();
        };

        // Creates the DOM scaffold
        this.create = function() {

            if (this.created && document.getElementById("fd-" + this.id)) {
                return;
            };

            this.noFocus = true;

            function createTH(details) {
                var th = document.createElement('th');
                if (details.thClassName) {
                    th.className = details.thClassName;
                };
                if (details.colspan) {
                    /*@cc_on
                    /*@if (@_win32)
                    th.setAttribute('colSpan', details.colspan);
                    @else @*/
                    th.setAttribute('colspan', details.colspan);
                    /*@end
                    @*/
                };
                /*@cc_on
                /*@if (@_win32)
                th.unselectable = "on";
                /*@end@*/
                return th;
            };

            function createThAndButton(tr, obj) {
                for (var i = 0, details; details = obj[i]; i++) {
                    var th = createTH(details);
                    tr.appendChild(th);
                    var but = document.createElement('span');
                    setARIARole(but, "button");
                    but.className = details.className;
                    but.id = o.id + details.id;
                    but.appendChild(document.createTextNode(details.text || o.nbsp));
                    but.title = details.title || "";
                    setARIAProperty(but, "label", details.title || "")
                    /*@cc_on
                    /*@if(@_win32)
                    th.unselectable = but.unselectable = "on";
                    /*@end@*/
                    th.appendChild(but);
                    th.setAttribute("role", "presentation");
                };
            };

            this.div = document.createElement('div');
            this.div.id = "fd-" + this.id;
            this.div.className = "date-picker" + this.bespokeClass;

            // Attempt to hide the div from screen readers during content creation
            this.div.style.visibility = "hidden";
            this.div.style.display = "none";

            // Set the ARIA describedby property if the required block available
            if (this.describedBy && document.getElementById(this.describedBy)) {
                setARIAProperty(this.div, "describedby", this.describedBy);
            };

            // Set the ARIA labelled property if the required label available
            if (this.labelledBy) {
                setARIAProperty(this.div, "labelledby", this.labelledBy.id);
            };

            var tr, row, col, tableHead, tableBody, tableFoot;

            this.table = document.createElement('table');
            this.table.className = "date-picker-table";
            this.table.onmouseover = this.onmouseover;
            this.table.onmouseout = this.onmouseout;
            this.table.onclick = this.onclick;

            if (this.staticPos) {
                this.table.onmousedown = this.onmousedown;
            };

            this.div.appendChild(this.table);

            var dragEnabledCN = !this.dragDisabled ? " drag-enabled" : "";

            if (!this.staticPos) {
                this.div.style.visibility = "hidden";
                this.div.className += dragEnabledCN;
                document.getElementsByTagName('body')[0].appendChild(this.div);

                /*@cc_on
                @if(@_jscript_version <= 5.7)

                if (!this.isIE7) {
                    this.iePopUp = document.createElement('iframe');
                    this.iePopUp.src = "javascript:'<html></html>';";
                    this.iePopUp.setAttribute('className', 'iehack');
                    // Remove iFrame from tabIndex
                    this.iePopUp.setAttribute("tabIndex", -1);
                    // Hide it from ARIA aware technologies
                    setARIARole(this.iePopUp, "presentation");
                    setARIAProperty(this.iePopUp, "hidden", "true");
                    this.iePopUp.scrolling = "no";
                    this.iePopUp.frameBorder = "0";
                    this.iePopUp.name = this.iePopUp.id = this.id + "-iePopUpHack";
                    document.body.appendChild(this.iePopUp);
                };

                @end
                @*/

                // Aria "hidden" property for non active popup datepickers
                setARIAProperty(this.div, "hidden", "true");
            } else {
                elem = document.getElementById(this.positioned ? this.positioned : this.id);
                if (!elem) {
                    this.div = null;
                    if (debug) {
                        throw this.positioned ? "Could not locate a datePickers associated parent element with an id:" + this.positioned : "Could not locate a datePickers associated input with an id:" + this.id;
                    };
                    return;
                };

                this.div.className += " static-datepicker";

                if (this.positioned) {
                    elem.appendChild(this.div);
                } else {
                    elem.parentNode.insertBefore(this.div, elem.nextSibling);
                };

                if (this.hideInput) {
                    for (var elemID in this.formElements) {
                        elem = document.getElementById(elemID);
                        if (elem) {
                            elem.className += " fd-hidden-input";
                        };
                    };
                };

                setTimeout(this.resizeInlineDiv, 300);
            };

            // ARIA Application role
            setARIARole(this.div, "application");
            setARIARole(this.table, "grid");
            setARIAProperty(this.table, "readonly", "true");

            if (this.statusFormat) {
                tableFoot = document.createElement('tfoot');
                this.table.appendChild(tableFoot);
                tr = document.createElement('tr');
                tr.className = "date-picker-tfoot";
                tableFoot.appendChild(tr);
                this.statusBar = createTH({
                    thClassName: "date-picker-statusbar" + dragEnabledCN,
                    colspan: this.showWeeks ? 8 : 7
                });
                tr.appendChild(this.statusBar);
                this.updateStatus();
            };

            tableHead = document.createElement('thead');
            tableHead.className = "date-picker-thead";
            this.table.appendChild(tableHead);

            tr = document.createElement('tr');
            setARIARole(tr, "presentation");

            tableHead.appendChild(tr);

            // Title Bar
            this.titleBar = createTH({
                thClassName: "date-picker-title" + dragEnabledCN,
                colspan: this.showWeeks ? 8 : 7
            });
            this.titleBar.setAttribute("role", "presentation");
            setARIAProperty(this.titleBar, "live", "polite");
            setARIAProperty(this.titleBar, "atomic", "true");
            tr.appendChild(this.titleBar);
            tr = null;

            var span = document.createElement('span');
            span.appendChild(document.createTextNode(nbsp));
            span.className = "month-display" + dragEnabledCN;
            this.titleBar.appendChild(span);

            span = document.createElement('span');
            span.appendChild(document.createTextNode(nbsp));
            span.className = "year-display" + dragEnabledCN;
            this.titleBar.appendChild(span);

            span = null;

            tr = document.createElement('tr');
            setARIARole(tr, "presentation");
            tableHead.appendChild(tr);

            createThAndButton(tr, [{
                className: "prev-but prev-year",
                id: "-prev-year-but",
                text: "\u00AB",
                title: getTitleTranslation(2)
            }, {
                className: "prev-but prev-month",
                id: "-prev-month-but",
                text: "\u2039",
                title: getTitleTranslation(0)
            }, {
                colspan: this.showWeeks ? 4 : 3,
                className: "today-but",
                id: "-today-but",
                text: getTitleTranslation(4)
            }, {
                className: "next-but next-month",
                id: "-next-month-but",
                text: "\u203A",
                title: getTitleTranslation(1)
            }, {
                className: "next-but next-year",
                id: "-next-year-but",
                text: "\u00BB",
                title: getTitleTranslation(3)
            }]);

            tableBody = document.createElement('tbody');
            this.table.appendChild(tableBody);

            var colspanTotal = this.showWeeks ? 8 : 7,
                colOffset = this.showWeeks ? 0 : -1,
                but, abbr, formElemId, formElem;

            for (var rows = 0; rows < 7; rows++) {
                row = document.createElement('tr');

                if (rows != 0) {
                    // ARIA Grid role
                    setARIARole(row, "row");
                    tableBody.appendChild(row);
                } else {
                    tableHead.appendChild(row);
                };

                for (var cols = 0; cols < colspanTotal; cols++) {
                    if (rows === 0 || (this.showWeeks && cols === 0)) {
                        col = document.createElement('th');
                    } else {
                        col = document.createElement('td');
                        //setARIAProperty(col, "describedby", this.id + "-col-" + cols + (this.showWeeks ? " " + this.id + "-row-" + rows : ""));
                        setARIAProperty(col, "selected", "false");
                    };

                    /*@cc_on@*/
                    /*@if(@_win32)
                    col.unselectable = "on";
                    /*@end@*/

                    row.appendChild(col);
                    if ((this.showWeeks && cols > 0 && rows > 0) || (!this.showWeeks && rows > 0)) {
                        setARIARole(col, "gridcell");
                    } else {
                        if (rows === 0 && cols > colOffset) {
                            col.className = "date-picker-day-header";
                            col.scope = "col";
                            setARIARole(col, "columnheader");
                            col.id = this.id + "-col-" + cols;
                        } else {
                            col.className = "date-picker-week-header";
                            col.scope = "row";
                            setARIARole(col, "rowheader");
                            col.id = this.id + "-row-" + rows;
                        };
                    };
                };
            };

            col = row = null;

            this.ths = this.table.getElementsByTagName('thead')[0].getElementsByTagName('tr')[2].getElementsByTagName('th');
            for (var y = 0; y < colspanTotal; y++) {
                if (y == 0 && this.showWeeks) {
                    this.ths[y].appendChild(document.createTextNode(getTitleTranslation(6)));
                    this.ths[y].title = getTitleTranslation(8);
                    continue;
                };

                if (y > (this.showWeeks ? 0 : -1)) {
                    but = document.createElement("span");
                    but.className = "fd-day-header";
                    /*@cc_on@*/
                    /*@if(@_win32)
                    but.unselectable = "on";
                    /*@end@*/
                    this.ths[y].appendChild(but);
                };
            };

            but = null;

            this.trs = this.table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
            this.tds = this.table.getElementsByTagName('tbody')[0].getElementsByTagName('td');
            this.butPrevYear = document.getElementById(this.id + "-prev-year-but");
            this.butPrevMonth = document.getElementById(this.id + "-prev-month-but");
            this.butToday = document.getElementById(this.id + "-today-but");
            this.butNextYear = document.getElementById(this.id + "-next-year-but");
            this.butNextMonth = document.getElementById(this.id + "-next-month-but");

            if (this.noToday) {
                this.butToday.style.display = "none";
            };

            if (this.showWeeks) {
                this.wkThs = this.table.getElementsByTagName('tbody')[0].getElementsByTagName('th');
                this.div.className += " weeks-displayed";
            };

            tableBody = tableHead = tr = createThAndButton = createTH = null;

            this.updateTableHeaders();
            this.created = true;
            this.updateTable();

            if (this.staticPos) {
                this.visible = true;
                this.opacity = this.opacityTo = this.finalOpacity;
                this.div.style.visibility = "visible";
                this.div.style.display = "block";
                this.noFocus = true;
                this.fade();
            } else {
                this.reposition();
                this.div.style.visibility = "visible";
                this.fade();
                this.noFocus = true;
            };

            this.callback("domcreate", {
                "id": this.id
            });
        };
        this.fade = function() {
            window.clearTimeout(o.fadeTimer);
            o.fadeTimer = null;
            var diff = Math.round(o.opacity + ((o.opacityTo - o.opacity) / 4));
            o.setOpacity(diff);
            if (Math.abs(o.opacityTo - diff) > 3 && !o.noFadeEffect) {
                o.fadeTimer = window.setTimeout(o.fade, 50);
            } else {
                o.setOpacity(o.opacityTo);
                if (o.opacityTo == 0) {
                    o.div.style.display = "none";
                    o.div.style.visibility = "hidden";
                    setARIAProperty(o.div, "hidden", "true");
                    o.visible = false;
                } else {
                    setARIAProperty(o.div, "hidden", "false");
                    o.visible = true;
                };
            };
        };
        this.trackDrag = function(e) {
            e = e || window.event;
            var diffx = (e.pageX ? e.pageX : e.clientX ? e.clientX : e.x) - o.mx;
            var diffy = (e.pageY ? e.pageY : e.clientY ? e.clientY : e.Y) - o.my;
            o.div.style.left = Math.round(o.x + diffx) > 0 ? Math.round(o.x + diffx) + 'px' : "0px";
            o.div.style.top = Math.round(o.y + diffy) > 0 ? Math.round(o.y + diffy) + 'px' : "0px";
            /*@cc_on
            @if(@_jscript_version <= 5.7)
            if (o.staticPos || o.isIE7) {
                return;
            };
            o.iePopUp.style.top = o.div.style.top;
            o.iePopUp.style.left = o.div.style.left;
            @end
            @*/
        };
        this.stopDrag = function(e) {
            var b = document.getElementsByTagName("body")[0];
            removeClass(b, "fd-drag-active");
            removeEvent(document, 'mousemove', o.trackDrag, false);
            removeEvent(document, 'mouseup', o.stopDrag, false);
            o.div.style.zIndex = 9999;
        };
        this.onmousedown = function(e) {
            e = e || document.parentWindow.event;
            var el = e.target != null ? e.target : e.srcElement,
                origEl = el,
                hideDP = true,
                reg = new RegExp("^fd-(but-)?" + o.id + "$");

            o.mouseDownElem = null;

            // Are we within the wrapper div or the button
            while (el) {
                if (el.id && el.id.length && el.id.search(reg) != -1) {
                    hideDP = false;
                    break;
                };
                try {
                    el = el.parentNode;
                } catch (err) {
                    break;
                };
            };

            // If not, then ...
            if (hideDP) {
                hideAll();
                return true;
            };

            if ((o.div.className + origEl.className).search('fd-disabled') != -1) {
                return true;
            };

            // We check the mousedown events on the buttons
            if (origEl.id.search(new RegExp("^" + o.id + "(-prev-year-but|-prev-month-but|-next-month-but|-next-year-but)$")) != -1) {

                o.mouseDownElem = origEl;

                addEvent(document, "mouseup", o.clearTimer);
                addEvent(origEl, "mouseout", o.clearTimer);

                var incs = {
                    "-prev-year-but": [0, -1, 0],
                    "-prev-month-but": [0, 0, -1],
                    "-next-year-but": [0, 1, 0],
                    "-next-month-but": [0, 0, 1]
                },
                    check = origEl.id.replace(o.id, ""),
                    dateYYYYMM = Number(o.date.getFullYear() + pad(o.date.getMonth() + 1));

                o.timerInc = 800;
                o.timerSet = true;
                o.dayInc = incs[check][0];
                o.yearInc = incs[check][1];
                o.monthInc = incs[check][2];
                o.accellerator = 1;

                if (!(o.currentYYYYMM == dateYYYYMM)) {
                    if ((o.currentYYYYMM < dateYYYYMM && (o.yearInc == -1 || o.monthInc == -1)) || (o.currentYYYYMM > dateYYYYMM && (o.yearInc == 1 || o.monthInc == 1))) {
                        o.delayedUpdate = false;
                        o.timerInc = 1200;
                    } else {
                        o.delayedUpdate = true;
                        o.timerInc = 800;
                    };
                };

                o.updateTable();

                return stopEvent(e);

            } else if (el.className.search("drag-enabled") != -1) {
                o.mx = e.pageX ? e.pageX : e.clientX ? e.clientX : e.x;
                o.my = e.pageY ? e.pageY : e.clientY ? e.clientY : e.Y;
                o.x = parseInt(o.div.style.left);
                o.y = parseInt(o.div.style.top);
                addEvent(document, 'mousemove', o.trackDrag, false);
                addEvent(document, 'mouseup', o.stopDrag, false);
                addClass(document.getElementsByTagName("body")[0], "fd-drag-active");
                o.div.style.zIndex = 10000;

                return stopEvent(e);
            };
            return true;
        };
        this.onclick = function(e) {
            if (o.opacity != o.opacityTo || o.disabled) {
                return stopEvent(e);
            };

            e = e || document.parentWindow.event;
            var el = e.target != null ? e.target : e.srcElement;

            while (el.parentNode) {
                // Are we within a valid i.e. clickable TD node
                if (el.tagName && el.tagName.toLowerCase() == "td") {

                    if (el.className.search(/cd-([0-9]{8})/) == -1 || el.className.search(noSelectionRegExp) != -1) {
                        return stopEvent(e);
                    };

                    var cellDate = el.className.match(/cd-([0-9]{8})/)[1];
                    o.date = new Date(cellDate.substr(0, 4), cellDate.substr(4, 2) - 1, cellDate.substr(6, 2));
                    o.dateSet = new Date(o.date);
                    o.noFocus = true;
                    o.callback("dateset", {
                        "id": o.id,
                        "date": o.dateSet,
                        "dd": o.dateSet.getDate(),
                        "mm": o.dateSet.getMonth() + 1,
                        "yyyy": o.dateSet.getFullYear()
                    });
                    o.returnFormattedDate();
                    o.hide();

                    o.stopTimer();

                    break;
                    // Today button pressed
                } else if (el.id && el.id == o.id + "-today-but") {
                    o.date = new Date();
                    o.updateTable();
                    o.stopTimer();
                    break;
                    // Day headers clicked, change the first day of the week
                } else if (el.className.search(/date-picker-day-header/) != -1) {
                    var cnt = o.showWeeks ? -1 : 0,
                        elem = el;

                    while (elem.previousSibling) {
                        elem = elem.previousSibling;
                        if (elem.tagName && elem.tagName.toLowerCase() == "th") {
                            cnt++;
                        };
                    };

                    o.firstDayOfWeek = (o.firstDayOfWeek + cnt) % 7;
                    o.updateTableHeaders();
                    break;
                };
                try {
                    el = el.parentNode;
                } catch (err) {
                    break;
                };
            };

            return stopEvent(e);
        };

        this.show = function(autoFocus) {

            if (this.staticPos) {
                return;
            };

            var elem, elemID;
            for (elemID in this.formElements) {
                elem = document.getElementById(this.id);
                if (!elem || (elem && elem.disabled)) {
                    return;
                };
            };

            this.noFocus = true;

            // If the datepicker doesn't exist in the dom
            if (!this.created || !document.getElementById('fd-' + this.id)) {
                this.created = false;
                this.fullCreate = false;
                this.create();
                this.fullCreate = true;
            } else {
                this.setDateFromInput();
                this.reposition();
            };

            this.noFocus = !! !autoFocus;

            if (this.noFocus) {
                this.clickActivated = true;
                addEvent(document, "mousedown", this.onmousedown);
                if (mouseWheel) {
                    if (window.addEventListener && !window.devicePixelRatio) {
                        window.addEventListener('DOMMouseScroll', this.onmousewheel, false);
                    } else {
                        addEvent(document, "mousewheel", this.onmousewheel);
                        addEvent(window, "mousewheel", this.onmousewheel);
                    };
                };
            } else {
                this.clickActivated = false;
            };

            this.opacityTo = this.finalOpacity;
            this.div.style.display = "block";

            /*@cc_on
            @if(@_jscript_version <= 5.7)
            if (!o.isIE7) {
                this.iePopUp.style.width = this.div.offsetWidth + "px";
                this.iePopUp.style.height = this.div.offsetHeight + "px";
                this.iePopUp.style.display = "block";
            };
            @end
            @*/

            this.setNewFocus();
            this.fade();
            var butt = document.getElementById('fd-but-' + this.id);
            if (butt) {
                addClass(butt, "date-picker-button-active");
            };
        };
        this.hide = function() {
            if (!this.visible || !this.created || !document.getElementById('fd-' + this.id)) {
                return;
            };

            if (this.kbEvent) {
                var elem = document.getElementById(o.id);
                if (elem) {
                    elem.focus();
                }
            }
            this.kbEvent = false;

            removeClass(o.div, "date-picker-focus");

            this.stopTimer();
            this.removeOnFocusEvents();
            this.clickActivated = false;
            this.noFocus = true;
            this.setNewFocus();

            if (this.staticPos) {
                return;
            };

            // Update status bar
            if (this.statusBar) {
                this.updateStatus(getTitleTranslation(9));
            };

            var butt = document.getElementById('fd-but-' + this.id);
            if (butt) {
                removeClass(butt, "date-picker-button-active");
            };

            removeEvent(document, "mousedown", this.onmousedown);

            if (mouseWheel) {
                if (window.addEventListener && !window.devicePixelRatio) {
                    try {
                        window.removeEventListener('DOMMouseScroll', this.onmousewheel, false);
                    } catch (err) {};
                } else {
                    removeEvent(document, "mousewheel", this.onmousewheel);
                    removeEvent(window, "mousewheel", this.onmousewheel);
                };
            };

            /*@cc_on
            @if(@_jscript_version <= 5.7)
            if (!this.isIE7) { this.iePopUp.style.display = "none"; };
            @end
            @*/
            var elem = document.getElementById(o.id);
            if (elem) {
                elem.focus();
            }
            this.opacityTo = 0;
            this.fade();
        };

        this.onblur = function(e) {
            o.hide();
        };
        // The current cursor cell gains focus
        this.onfocus = function(e) {
            o.noFocus = false;
            addClass(o.div, "date-picker-focus");
            if (o.statusBar) {
                o.updateStatus(printFormattedDate(o.date, o.statusFormat, true));
            };
            o.addOnFocusEvents();
        };
        this.onmousewheel = function(e) {
            e = e || document.parentWindow.event;
            var delta = 0;

            if (e.wheelDelta) {
                delta = e.wheelDelta / 120;
                if (isOpera && window.opera.version() < 9.2) {
                    delta = -delta;
                };
            } else if (e.detail) {
                delta = -e.detail / 3;
            };

            var n = o.date.getDate(),
                d = new Date(o.date),
                inc = delta > 0 ? 1 : -1;

            d.setDate(2);
            d.setMonth(d.getMonth() + inc * 1);
            d.setDate(Math.min(n, daysInMonth(d.getMonth(), d.getFullYear())));

            if (o.outOfRange(d)) {
                return stopEvent(e);
            };

            o.date = new Date(d);

            o.updateTable();

            if (o.statusBar) {
                o.updateStatus(printFormattedDate(o.date, o.statusFormat, true));
            };

            return stopEvent(e);
        };
        this.onkeydown = function(e) {
            o.stopTimer();

            if (!o.visible) {
                return false;
            };

            e = e || document.parentWindow.event;

            var kc = e.keyCode ? e.keyCode : e.charCode;

            if (kc == 13 || (kc == 32 && !e.ctrlKey)) {
                // RETURN/ENTER: close & select the date
                var td = document.getElementById(o.id + "-date-picker-hover");
                if (!td || td.className.search(/cd-([0-9]{8})/) == -1 || td.className.search(/out-of-range|day-disabled/) != -1) {
                    return stopEvent(e);
                };
                o.dateSet = new Date(o.date);
                o.callback("dateset", o.createCbArgObj());
                o.returnFormattedDate();
                o.hide();
                return stopEvent(e);
            } else if (kc == 27) {
                // ESC: close, no date selection
                if (!o.staticPos) {
                    o.hide();
                    return stopEvent(e);
                };
                return true;
            } else if ((kc == 32 && e.ctrlKey) || kc == 0) {
                // SPACE: goto todays date
                o.date = new Date();
                o.updateTable();
                return stopEvent(e);
            } else if (kc == 9) {
                // TAB: close, no date selection & focus back to associated button - popup datepickers only
                if (!o.staticPos) {
                    return stopEvent(e);
                };
                return true;
            };
            // TODO - test the need for the IE specific stuff in IE9

            // Internet Explorer fires the keydown event faster than the JavaScript engine can
            // update the interface. The following attempts to fix this.

            /*@cc_on
            @if(@_win32)
            if (new Date().getTime() - o.interval.getTime() < 5) { return stopEvent(e); };
            o.interval = new Date();
            @end
            @*/

            // A number key has been pressed so change the first day of the week
            if ((kc > 49 && kc < 56) || (kc > 97 && kc < 104)) {
                if (kc > 96) {
                    kc -= (96 - 48);
                };
                kc -= 49;
                o.firstDayOfWeek = (o.firstDayOfWeek + kc) % 7;
                o.updateTableHeaders();
                return stopEvent(e);
            };

            // If outside any other tested keycodes then let the keystroke pass
            if (kc < 33 || kc > 40) {
                return true;
            };

            var d = new Date(o.date),
                cursorYYYYMM = o.date.getFullYear() + pad(o.date.getMonth() + 1),
                tmp;
            o.noFocus = false;
            // HOME: Set date to first day of current month
            if (kc == 36) {
                d.setDate(1);
                // END: Set date to last day of current month
            } else if (kc == 35) {
                d.setDate(daysInMonth(d.getMonth(), d.getFullYear()));
                // PAGE UP & DOWN
            } else if (kc == 33 || kc == 34) {
                var inc = (kc == 34) ? 1 : -1;

                // CTRL + PAGE UP/DOWN: Moves to the same date in the previous/next year
                if (e.altKey) {
                    d.setFullYear(d.getFullYear() + inc * 1);
                    // PAGE UP/DOWN: Moves to the same date in the previous/next month
                } else {
                    var n = o.date.getDate();

                    d.setDate(2);
                    d.setMonth(d.getMonth() + inc * 1);
                    d.setDate(Math.min(n, daysInMonth(d.getMonth(), d.getFullYear())));
                };
                // LEFT ARROW
            } else if (kc == 37) {
                d = new Date(o.date.getFullYear(), o.date.getMonth(), o.date.getDate() - 1);
                // RIGHT ARROW
            } else if (kc == 39 || kc == 34) {
                d = new Date(o.date.getFullYear(), o.date.getMonth(), o.date.getDate() + 1);
                // UP ARROW
            } else if (kc == 38) {
                d = new Date(o.date.getFullYear(), o.date.getMonth(), o.date.getDate() - 7);
                // DOWN ARROW
            } else if (kc == 40) {
                d = new Date(o.date.getFullYear(), o.date.getMonth(), o.date.getDate() + 7);
            };

            // If the new date is out of range then disallow action
            if (o.outOfRange(d)) {
                return stopEvent(e);
            };

            // Otherwise set the new cursor date
            o.date = d;

            // Update the status bar if needs be
            if (o.statusBar) {
                o.updateStatus(o.getBespokeTitle(o.date.getFullYear(), o.date.getMonth() + 1, o.date.getDate()) || printFormattedDate(o.date, o.statusFormat, true));
            };

            // YYYYMMDD format String of the current cursor date
            var t = String(o.date.getFullYear()) + pad(o.date.getMonth() + 1) + pad(o.date.getDate());

            // If we need to redraw the UI completely
            if (e.ctrlKey || (kc == 33 || kc == 34) || t < o.firstDateShown || t > o.lastDateShown) {
                o.updateTable();
                /*@cc_on
                @if(@_win32)
                o.interval = new Date();
                @end
                @*/
                // Just highlight current cell
            } else {
                // Do we need to disable the today button for this date
                if (!o.noToday) {
                    o.disableTodayButton();
                };
                // Remove focus from the previous cell
                o.removeOldFocus();
                // Show/hide the month & year buttons
                o.showHideButtons(o.date);

                // Locate this TD
                for (var i = 0, td; td = o.tds[i]; i++) {
                    if (td.className.search("cd-" + t) == -1) {
                        continue;
                    };

                    td.id = o.id + "-date-picker-hover";
                    o.setNewFocus();
                    break;
                };
            };

            return stopEvent(e);
        };
        this.onmouseout = function(e) {
            e = e || document.parentWindow.event;
            var p = e.toElement || e.relatedTarget;
            while (p && p != this) {
                try {
                    p = p.parentNode
                } catch (e) {
                    p = this;
                };
            };

            if (p == this) {
                return false;
            };

            if (o.currentTR) {
                o.currentTR.className = "";
                o.currentTR = null;
            };

            if (o.statusBar) {
                o.updateStatus(o.getBespokeTitle(o.date.getFullYear(), o.date.getMonth() + 1, o.date.getDate()) || printFormattedDate(o.date, o.statusFormat, true));
            };
        };
        this.onmouseover = function(e) {
            e = e || document.parentWindow.event;
            var el = e.target != null ? e.target : e.srcElement;
            while (el.nodeType != 1) {
                el = el.parentNode;
            };

            if (!el || !el.tagName) {
                return;
            };

            o.noFocus = true;

            var statusText = getTitleTranslation(9);

            switch (el.tagName.toLowerCase()) {
                case "td":
                    if (el.className.search(/date-picker-unused|out-of-range/) != -1) {
                        statusText = getTitleTranslation(9);
                    }
                    if (el.className.search(/cd-([0-9]{8})/) != -1) {
                        o.stopTimer();
                        var cellDate = el.className.match(/cd-([0-9]{8})/)[1];

                        o.removeOldFocus();
                        el.id = o.id + "-date-picker-hover";
                        o.setNewFocus();

                        o.date = new Date(+cellDate.substr(0, 4), +cellDate.substr(4, 2) - 1, +cellDate.substr(6, 2));
                        if (!o.noToday) {
                            o.disableTodayButton();
                        };

                        statusText = o.getBespokeTitle(+cellDate.substr(0, 4), +cellDate.substr(4, 2), +cellDate.substr(6, 2)) || printFormattedDate(o.date, o.statusFormat, true);
                    };
                    break;
                case "th":
                    if (!o.statusBar) {
                        break;
                    };
                    if (el.className.search(/drag-enabled/) != -1) {
                        statusText = getTitleTranslation(10);
                    } else if (el.className.search(/date-picker-week-header/) != -1) {
                        var txt = el.firstChild ? el.firstChild.nodeValue : "";
                        statusText = txt.search(/^(\d+)$/) != -1 ? getTitleTranslation(7, [txt, txt < 3 && o.date.getMonth() == 11 ? getWeeksInYear(o.date.getFullYear()) + 1 : getWeeksInYear(o.date.getFullYear())]) : getTitleTranslation(9);
                    };
                    break;
                case "span":
                    if (!o.statusBar) {
                        break;
                    };
                    if (el.className.search(/drag-enabled/) != -1) {
                        statusText = getTitleTranslation(10);
                    } else if (el.className.search(/day-([0-6])/) != -1) {
                        var day = el.className.match(/day-([0-6])/)[1];
                        statusText = getTitleTranslation(11, [getDayTranslation(day, false)]);
                    } else if (el.className.search(/prev-year/) != -1) {
                        statusText = getTitleTranslation(2);
                    } else if (el.className.search(/prev-month/) != -1) {
                        statusText = getTitleTranslation(0);
                    } else if (el.className.search(/next-year/) != -1) {
                        statusText = getTitleTranslation(3);
                    } else if (el.className.search(/next-month/) != -1) {
                        statusText = getTitleTranslation(1);
                    } else if (el.className.search(/today-but/) != -1 && el.className.search(/disabled/) == -1) {
                        statusText = getTitleTranslation(12);
                    };
                    break;
                default:
                    statusText = "";
            };
            while (el.parentNode) {
                el = el.parentNode;
                if (el.nodeType == 1 && el.tagName.toLowerCase() == "tr") {
                    if (o.currentTR) {
                        if (el == o.currentTR) break;
                        o.currentTR.className = "";
                    };
                    el.className = "dp-row-highlight";
                    o.currentTR = el;
                    break;
                };
            };
            if (o.statusBar && statusText) {
                o.updateStatus(statusText);
            };
        };
        this.clearTimer = function() {
            o.stopTimer();
            o.timerInc = 800;
            o.yearInc = 0;
            o.monthInc = 0;
            o.dayInc = 0;

            removeEvent(document, "mouseup", o.clearTimer);
            if (o.mouseDownElem != null) {
                removeEvent(o.mouseDownElem, "mouseout", o.clearTimer);
            };
            o.mouseDownElem = null;
        };

        var o = this;

        this.setDateFromInput();

        if (this.staticPos) {
            this.create();
        } else {
            this.createButton();
        };

        (function() {
            var elemID, elem, elemCnt = 0;

            for (elemID in o.formElements) {
                elem = document.getElementById(elemID);
                if (elem && elem.tagName && elem.tagName.search(/select|input/i) != -1) {
                    addEvent(elem, "change", o.changeHandler);
                    if (elemCnt == 0 && elem.form) {
                        addEvent(elem.form, "reset", o.reset);
                    };
                    elemCnt++;
                };

                if (!elem || elem.disabled == true) {
                    o.disableDatePicker();
                };
            };
        })();

        // We have fully created the datepicker...
        this.fullCreate = true;
    };
    datePicker.prototype.addButtonEvents = function(but) {
        function buttonEvent(e) {
            e = e || window.event;

            var inpId = this.id.replace('fd-but-', ''),
                dpVisible = isVisible(inpId),
                autoFocus = true,
                kbEvent = datePickers[inpId].kbEvent;

            if (kbEvent) {
                datePickers[inpId].kbEvent = false;
                //return;
            };

            if (e.type == "keydown") {
                datePickers[inpId].kbEvent = true;
                var kc = e.keyCode != null ? e.keyCode : e.charCode;
                if (kc != 13 && kc != 32) return true;
                if (dpVisible) {
                    removeClass(this, "date-picker-button-active")
                    hideAll();
                    return stopEvent(e);
                };
                autoFocus = true;
            } else {
                datePickers[inpId].kbEvent = false;
            };

            if (!dpVisible) {
                addClass(this, "date-picker-button-active")
                hideAll(inpId);
                showDatePicker(inpId, autoFocus);
            } else {
                removeClass(this, "date-picker-button-active");
                hideAll();
            };

            return stopEvent(e);
        };

        but.onkeydown = buttonEvent;
        but.onclick = buttonEvent;

        if (!buttonTabIndex || this.bespokeTabIndex === false) {
            setTabIndex(but, -1);
            but.onkeydown = null;
            removeEvent(but, "keydown", buttonEvent);
        } else {
            setTabIndex(but, this.bespokeTabIndex);
        };
    };

    datePicker.prototype.createButton = function() {

        if (this.staticPos || document.getElementById("fd-but-" + this.id)) {
            return;
        };

        var inp = document.getElementById(this.id),
            span = document.createElement('span'),
            but = document.createElement('a');

        but.href = "#" + this.id;
        but.className = "date-picker-control";
        //but.title       = getTitleTranslation(5);
        but.id = "fd-but-" + this.id;
        span.className = "fontIcon";
        span.setAttribute("aria-hidden", "true");

        var altText = this.labelText ? getTitleTranslation(14, [this.labelText]) : but.title;
        var fontIconHolder = document.createElement("span");

        fontIconHolder.className = "calendar-button";
        fontIconHolder.innerHTML = '<span class="material-icons">calendar_today</span>';
        span.appendChild(fontIconHolder);
        but.appendChild(span);

        span = document.createElement('span');
        span.className = "show-for-sr";
        span.appendChild(document.createTextNode(altText));
        but.appendChild(span);
        //setARIAProperty(but, "label", altText);
        // Set the ARIA role to be "button"
        setARIARole(but, "button");

        // Set a "haspopup" ARIA property - should this not be a list if ID's????
        // setARIAProperty(but, "haspopup", true);

        if (this.positioned && document.getElementById(this.positioned)) {
            document.getElementById(this.positioned).appendChild(but);
        } else {
            inp.parentNode.insertBefore(but, inp.nextSibling);
        };

        this.addButtonEvents(but);

        but = null;

        this.callback("dombuttoncreate", {
            id: this.id
        });
    };
    datePicker.prototype.setBespokeTitles = function(titles) {
        this.bespokeTitles = {};
        this.addBespokeTitles(titles);
    };
    datePicker.prototype.addBespokeTitles = function(titles) {
        for (var dt in titles) {
            if (titles.hasOwnProperty(dt)) {
                this.bespokeTitles[dt] = titles[dt];
            };
        };
    };
    datePicker.prototype.getBespokeTitle = function(y, m, d) {
        var dt, dtFull, yyyymmdd = y + String(pad(m)) + pad(d);

        // Try the datepickers bespoke titles
        for (dt in this.bespokeTitles) {
            if (this.bespokeTitles.hasOwnProperty(dt)) {
                dtFull = String(dt).replace(/^(\*\*\*\*)/, y).replace(/^(\d\d\d\d)(\*\*)/, "$1" + pad(m));
                if (dtFull == yyyymmdd) {
                    return this.bespokeTitles[dt];
                };
            };
        };

        // Try the generic bespoke titles
        for (dt in bespokeTitles) {
            if (bespokeTitles.hasOwnProperty(dt)) {
                dtFull = String(dt).replace(/^(\*\*\*\*)/, y).replace(/^(\d\d\d\d)(\*\*)/, "$1" + pad(m));
                if (dtFull == yyyymmdd) {
                    return bespokeTitles[dt];
                };
            };
        };

        return false;
    };
    datePicker.prototype.returnSelectedDate = function() {
        return this.dateSet;
    };
    datePicker.prototype.setRangeLow = function(range) {
        if (String(range).search(rangeRegExp) == -1) {
            if (debug) {
                throw "Invalid value passed to setRangeLow method: " + range;
            };
            return false;
        };
        this.rangeLow = range;
        if (!this.inUpdate) {
            this.setDateFromInput();
        };
    };
    datePicker.prototype.setRangeHigh = function(range) {
        if (String(range).search(rangeRegExp) == -1) {
            if (debug) {
                throw "Invalid value passed to setRangeHigh method: " + range;
            };
            return false;
        };
        this.rangeHigh = range;
        if (!this.inUpdate) {
            this.setDateFromInput();
        };
    };
    datePicker.prototype.setDisabledDays = function(dayArray) {
        if (!dayArray.length || dayArray.join("").search(/^([0|1]{7})$/) == -1) {
            if (debug) {
                throw "Invalid values located when attempting to call setDisabledDays";
            };
            return false;
        };
        this.disabledDays = dayArray;
        if (!this.inUpdate) {
            this.setDateFromInput();
        };
    };

    datePicker.prototype.setDisabledDates = function(dateObj) {
        this.filterDateList(dateObj, true);
    };
    datePicker.prototype.setEnabledDates = function(dateObj) {
        this.filterDateList(dateObj, false);
    };
    datePicker.prototype.addDisabledDates = function(dateObj) {
        this.addDatesToList(dateObj, true);
    };
    datePicker.prototype.addEnabledDates = function(dateObj) {
        this.addDatesToList(dateObj, false);
    };
    datePicker.prototype.filterDateList = function(dateObj, type) {
        var tmpDates = [];
        for (var i = 0; i < this.dateList.length; i++) {
            if (this.dateList[i].type != type) {
                tmpDates.push(this.dateList[i]);
            };
        };

        this.dateList = tmpDates.concat();
        this.addDatesToList(dateObj, type);
    };
    datePicker.prototype.addDatesToList = function(dateObj, areDisabled) {
        var startD;
        for (startD in dateObj) {
            if (String(startD).search(wcDateRegExp) != -1 && (dateObj[startD] == 1 || String(dateObj[startD]).search(wcDateRegExp) != -1)) {

                if (dateObj[startD] != 1 && Number(String(startD).replace(/^\*\*\*\*/, 2010).replace(/^(\d\d\d\d)(\*\*)/, "$1" + "22")) > Number(String(dateObj[startD]).replace(/^\*\*\*\*/, 2010).replace(/^(\d\d\d\d)(\*\*)/, "$1" + "22"))) {
                    continue;
                };

                this.dateList.push({
                    type: !! (areDisabled),
                    rLow: startD,
                    rHigh: dateObj[startD]
                });
            };
        };

        if (!this.inUpdate) {
            this.setDateFromInput();
        };
    };
    datePicker.prototype.setSelectedDate = function(yyyymmdd) {
        if (String(yyyymmdd).search(wcDateRegExp) == -1) {
            return false;
        };

        var match = yyyymmdd.match(rangeRegExp),
            dt = new Date(+match[2], +match[3] - 1, +match[4]);

        if (!dt || isNaN(dt) || !this.canDateBeSelected(dt)) {
            return false;
        };

        this.dateSet = new Date(dt);

        if (!this.inUpdate) {
            this.updateTable();
        };

        this.callback("dateset", this.createCbArgObj());
        this.returnFormattedDate();
    };
    datePicker.prototype.checkSelectedDate = function() {
        if (this.dateSet && !this.canDateBeSelected(this.dateSet)) {
            this.dateSet = null;
        };
        if (!this.inUpdate) {
            this.updateTable();
        };
    };
    datePicker.prototype.addOnFocusEvents = function() {
        if (this.kbEventsAdded || this.noFocus) {
            return;
        };

        addEvent(document, "keypress", this.onkeydown);
        addEvent(document, "mousedown", this.onmousedown);

        /*@cc_on
        @if(@_win32)
        removeEvent(document, "keypress", this.onkeydown);
        addEvent(document, "keydown", this.onkeydown);
        @end
        @*/
        if (window.devicePixelRatio) {
            removeEvent(document, "keypress", this.onkeydown);
            addEvent(document, "keydown", this.onkeydown);
        };
        this.noFocus = false;
        this.kbEventsAdded = true;
    };
    datePicker.prototype.removeOnFocusEvents = function() {

        if (!this.kbEventsAdded) {
            return;
        };

        removeEvent(document, "keypress", this.onkeydown);
        removeEvent(document, "keydown", this.onkeydown);
        removeEvent(document, "mousedown", this.onmousedown);

        this.kbEventsAdded = false;
    };
    datePicker.prototype.stopTimer = function() {
        this.timerSet = false;
        window.clearTimeout(this.timer);
    };
    datePicker.prototype.setOpacity = function(op) {
        this.div.style.opacity = op / 100;
        this.div.style.filter = 'alpha(opacity=' + op + ')';
        this.opacity = op;
    };
    datePicker.prototype.truePosition = function(element) {
        var pos = this.cumulativeOffset(element);
        if (isOpera) {
            return pos;
        };
        var iebody = (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body,
            dsocleft = document.all ? iebody.scrollLeft : window.pageXOffset,
            dsoctop = document.all ? iebody.scrollTop : window.pageYOffset,
            posReal = this.realOffset(element);
        return [pos[0] - posReal[0] + dsocleft, pos[1] - posReal[1] + dsoctop];
    };
    datePicker.prototype.realOffset = function(element) {
        var t = 0,
            l = 0;
        do {
            t += element.scrollTop || 0;
            l += element.scrollLeft || 0;
            element = element.parentNode;
        } while (element);
        return [l, t];
    };
    datePicker.prototype.cumulativeOffset = function(element) {
        var t = 0,
            l = 0;
        do {
            t += element.offsetTop || 0;
            l += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);
        return [l, t];
    };
    datePicker.prototype.outOfRange = function(tmpDate) {

        if (!this.rangeLow && !this.rangeHigh) {
            return false;
        };

        var level = false;

        if (!tmpDate) {
            level = true;
            tmpDate = this.date;
        };

        var d = pad(tmpDate.getDate()),
            m = pad(tmpDate.getMonth() + 1),
            y = tmpDate.getFullYear(),
            dt = String(y) + String(m) + String(d);

        if (this.rangeLow && +dt < +this.rangeLow) {
            if (!level) {
                return true;
            };
            this.date = new Date(this.rangeLow.substr(0, 4), this.rangeLow.substr(4, 2) - 1, this.rangeLow.substr(6, 2), 5, 0, 0);
            return false;
        };
        if (this.rangeHigh && +dt > +this.rangeHigh) {
            if (!level) {
                return true;
            };
            this.date = new Date(this.rangeHigh.substr(0, 4), this.rangeHigh.substr(4, 2) - 1, this.rangeHigh.substr(6, 2), 5, 0, 0);
        };
        return false;
    };
    datePicker.prototype.canDateBeSelected = function(tmpDate) {
        if (!tmpDate || isNaN(tmpDate)) {
            return false;
        };

        var d = pad(tmpDate.getDate()),
            m = pad(tmpDate.getMonth() + 1),
            y = tmpDate.getFullYear(),
            dt = y + "" + m + "" + d,
            dd = this.getDateExceptions(y, m),
            wd = tmpDate.getDay() == 0 ? 7 : tmpDate.getDay();

        // If date out of range
        if ((this.rangeLow && +dt < +this.rangeLow) ||
            (this.rangeHigh && +dt > +this.rangeHigh) ||
            // or the date has been explicitly disabled
            ((dt in dd) && dd[dt] == 1) ||
            // or the date lies on a disabled weekday and it hasn't been explicitly enabled
            (this.disabledDays[wd - 1] && (!(dt in dd) || ((dt in dd) && dd[dt] == 1)))) {
            return false;
        };

        return true;
    };
    datePicker.prototype.updateStatus = function(msg) {
        while (this.statusBar.firstChild) {
            this.statusBar.removeChild(this.statusBar.firstChild);
        };
        // All this arseing about just for sups in the footer... nice typography and all that...
        if (msg && this.statusFormat.search(/%S/) != -1 && msg.search(/([0-9]{1,2})(st|nd|rd|th)/) != -1) {
            msg = cbSplit(msg.replace(/([0-9]{1,2})(st|nd|rd|th)/, "$1<sup>$2</sup>"), /<sup>|<\/sup>/);
            var dc = document.createDocumentFragment();
            for (var i = 0, nd; nd = msg[i]; i++) {
                if (/^(st|nd|rd|th)$/.test(nd)) {
                    var sup = document.createElement("sup");
                    sup.appendChild(document.createTextNode(nd));
                    dc.appendChild(sup);
                } else {
                    dc.appendChild(document.createTextNode(nd));
                };
            };
            this.statusBar.appendChild(dc);
        } else {
            this.statusBar.appendChild(document.createTextNode(msg ? msg : getTitleTranslation(9)));
        };
    };

    /* So needs rewritten */
    datePicker.prototype.setDateFromInput = function() {
        var origDateSet = this.dateSet,
            m = false,
            but = this.staticPos ? false : document.getElementById("fd-but-" + this.id),
            i, dt, elemID, elem, elemFmt, d, y, elemVal, dp, mp, yp, dpt;

        // Reset the internal dateSet variable
        this.dateSet = null;

        // Try and get a year, month and day from the form element values
        for (elemID in this.formElements) {

            elem = document.getElementById(elemID);

            if (!elem) {
                return false;
            };

            elemVal = String(elem.value);
            elemFmt = this.formElements[elemID];
            dt = false;

            dp = elemFmt.search(dPartsRegExp) != -1 ? 1 : 0;
            mp = elemFmt.search(mPartsRegExp) != -1 ? 1 : 0;
            yp = elemFmt.search(yPartsRegExp) != -1 ? 1 : 0;

            dpt = dp + mp + yp;

            allFormats = [];
            allFormats.push(elemFmt);

            // Try to assign some default date formats to throw at
            // the (simple) regExp parser.

            // If year, month & day required
            if (dp && mp && yp) {
                // Inject some common formats, placing the easiest
                // to spot at the beginning.
                allFormats = allFormats.concat([
                    "%Y%m%d",
                    "%Y/%m/%d",
                    "%Y/%n/%d",
                    "%Y/%n/%j",
                    "%d/%m/%Y",
                    "%j/%m/%Y",
                    "%j/%n/%Y",
                    "%d/%m/%y",
                    "%d/%M/%Y",
                    "%d/%F/%Y",
                    "%d/%M/%y",
                    "%d/%F/%y",
                    "%d%m%Y",
                    "%j%m%Y",
                    "%d%n%Y",
                    "%j%n%Y",
                    "%d%m%y",
                    "%j%m%y",
                    "%j%n%y"
                ]);
            } else if (yp) {
                allFormats = allFormats.concat([
                    "%Y",
                    "%y"
                ]);
            } else if (mp) {
                allFormats = allFormats.concat([
                    "%M",
                    "%F",
                    "%m",
                    "%n"
                ]);
            } else if (dp) {
                allFormats = allFormats.concat([
                    "%d%",
                    "%j"
                ]);
            };

            for (i = 0; i < allFormats.length; i++) {
                dt = parseDateString(elemVal, allFormats[i]);

                if (dt) {
                    if (!d && dp && dt.d) {
                        d = dt.d;
                    };
                    if (m === false && mp && dt.m) {
                        m = dt.m;
                    };
                    if (!y && yp && dt.y) {
                        y = dt.y;
                    };
                };

                if (((dp && d) || !dp) &&
                    ((mp && !m === false) || !mp) &&
                    ((yp && y) || !yp)) {
                    break;
                };
            };
        };

        dt = false;

        if (d && !(m === false) && y) {
            if (+d > daysInMonth(+m - 1, +y)) {
                d = daysInMonth(+m - 1, +y);
                dt = false;
            } else {
                dt = new Date(+y, +m - 1, +d);
            };
        };

        if (but) {
            removeClass(but, "date-picker-dateval");
        };

        if (!dt || isNaN(dt)) {
            var newDate = new Date(y || new Date().getFullYear(), !(m === false) ? m - 1 : new Date().getMonth(), 1);
            this.date = this.cursorDate ? new Date(+this.cursorDate.substr(0, 4), +this.cursorDate.substr(4, 2) - 1, +this.cursorDate.substr(6, 2)) : new Date(newDate.getFullYear(), newDate.getMonth(), Math.min(+d || new Date().getDate(), daysInMonth(newDate.getMonth(), newDate.getFullYear())));

            this.date.setHours(5);
            this.outOfRange();
            if (this.fullCreate) {
                this.updateTable();
            };
            return;
        };

        dt.setHours(5);
        this.date = new Date(dt);
        this.outOfRange();

        if (dt.getTime() == this.date.getTime() && this.canDateBeSelected(this.date)) {
            this.dateSet = new Date(this.date);
            if (but) {
                addClass(but, "date-picker-dateval");
            };
        };

        if (this.fullCreate) {
            this.updateTable();
        };

        this.returnFormattedDate(true);
    };

    datePicker.prototype.setSelectIndex = function(elem, indx) {
        for (var opt = elem.options.length - 1; opt >= 0; opt--) {
            if (elem.options[opt].value == indx) {
                elem.selectedIndex = opt;
                return;
            };
        };
    };
    datePicker.prototype.returnFormattedDate = function(noFocus) {
        var but = this.staticPos ? false : document.getElementById("fd-but-" + this.id);

        if (!this.dateSet) {
            if (but) {
                removeClass(but, "date-picker-dateval");
            };
            return;
        };

        var d = pad(this.dateSet.getDate()),
            m = pad(this.dateSet.getMonth() + 1),
            y = this.dateSet.getFullYear(),
            el = false,
            elemID, elem, elemFmt, fmtDate;

        noFocus = !! noFocus;

        for (elemID in this.formElements) {
            elem = document.getElementById(elemID);

            if (!elem) {
                return;
            };

            if (!el) {
                el = elem;
            };

            elemFmt = this.formElements[elemID];

            fmtDate = printFormattedDate(this.dateSet, elemFmt, returnLocaleDate);
            if (elem.tagName.toLowerCase() == "input") {
                elem.value = fmtDate;
            } else {
                this.setSelectIndex(elem, fmtDate);
            };
        };

        if (this.staticPos) {
            this.noFocus = true;
            this.updateTable();
            this.noFocus = false;
        } else if (but) {
            addClass(but, "date-picker-dateval");
        };

        if (this.fullCreate) {
            if (el.type && el.type != "hidden" && !noFocus) {
                el.focus();
            };
        };

        if (!noFocus) {
            this.callback("datereturned", this.createCbArgObj());
        };
    };
    datePicker.prototype.disableDatePicker = function() {
        if (this.disabled) {
            return;
        };

        if (this.staticPos) {
            this.removeOnFocusEvents();
            this.removeOldFocus();
            this.noFocus = true;
            addClass(this.div, "date-picker-disabled")
            this.table.onmouseover = this.table.onclick = this.table.onmouseout = this.table.onmousedown = null;
            removeEvent(document, "mousedown", this.onmousedown);
            removeEvent(document, "mouseup", this.clearTimer);
        } else {
            if (this.visible) {
                this.hide();
            };
            var but = document.getElementById("fd-but-" + this.id);
            if (but) {
                addClass(but, "date-picker-control-disabled");
                // Set a "disabled" ARIA state
                setARIAProperty(but, "disabled", true);
                but.onkeydown = but.onclick = function() {
                    return false;
                };
                setTabIndex(but, -1);
            };
        };

        clearTimeout(this.timer);
        this.disabled = true;
    };
    datePicker.prototype.enableDatePicker = function() {
        if (!this.disabled) {
            return;
        };

        if (this.staticPos) {
            this.removeOldFocus();

            // Reset the cursor to the selected date
            if (this.dateSet != null) {
                this.date = this.dateSet;
            };
            this.noFocus = true;
            this.updateTable();
            removeClass(this.div, "date-picker-disabled");
            this.disabled = false;
            this.table.onmouseover = this.onmouseover;
            this.table.onmouseout = this.onmouseout;
            this.table.onclick = this.onclick;
            this.table.onmousedown = this.onmousedown;
        } else {
            var but = document.getElementById("fd-but-" + this.id);
            if (but) {
                removeClass(but, "date-picker-control-disabled");
                // Reset the "disabled" ARIA state
                setARIAProperty(but, "disabled", false);
                this.addButtonEvents(but);
            };
        };

        this.disabled = false;
    };
    datePicker.prototype.disableTodayButton = function() {
        var today = new Date();
        removeClass(this.butToday, "fd-disabled");
        if (this.outOfRange(today) ||
            (this.date.getDate() == today.getDate() &&
                this.date.getMonth() == today.getMonth() &&
                this.date.getFullYear() == today.getFullYear())
        ) {
            addClass(this.butToday, "fd-disabled");
        };
    };
    datePicker.prototype.updateTableHeaders = function() {
        var colspanTotal = this.showWeeks ? 8 : 7,
            colOffset = this.showWeeks ? 1 : 0,
            d, but;

        for (var col = colOffset; col < colspanTotal; col++) {
            d = (this.firstDayOfWeek + (col - colOffset)) % 7;
            this.ths[col].title = getDayTranslation(d, false);
            this.ths[col].setAttribute("abbr", getDayTranslation(d, false));
            setARIAProperty(this.ths[col], "label", getDayTranslation(d, false));
            if (col > colOffset) {
                but = this.ths[col].getElementsByTagName("span")[0];
                while (but.firstChild) {
                    but.removeChild(but.firstChild);
                };
                but.appendChild(document.createTextNode(getDayTranslation(d, true)));
                but.title = this.ths[col].title;
                but = null;
            } else {
                while (this.ths[col].firstChild) {
                    this.ths[col].removeChild(this.ths[col].firstChild);
                };
                this.ths[col].appendChild(document.createTextNode(getDayTranslation(d, true)));
            };

            removeClass(this.ths[col], "date-picker-highlight");
            if (this.highlightDays[d]) {
                addClass(this.ths[col], "date-picker-highlight");
            };
        };

        if (this.created) {
            this.updateTable();
        };
    };
    datePicker.prototype.callback = function(type, args) {
        if (!type || !(type in this.callbacks)) {
            return false;
        };

        var ret = false,
            func;

        for (func = 0; func < this.callbacks[type].length; func++) {
            ret = this.callbacks[type][func](args || this.id);
        };

        return ret;
    };
    datePicker.prototype.showHideButtons = function(tmpDate) {
        if (!this.butPrevYear) {
            return;
        };

        var tdm = tmpDate.getMonth(),
            tdy = tmpDate.getFullYear();

        if (this.outOfRange(new Date((tdy - 1), tdm, daysInMonth(+tdm, tdy - 1)))) {
            addClass(this.butPrevYear, "fd-disabled");
            if (this.yearInc == -1) {
                this.stopTimer();
            };
        } else {
            removeClass(this.butPrevYear, "fd-disabled");
        };

        if (this.outOfRange(new Date(tdy, (+tdm - 1), daysInMonth(+tdm - 1, tdy)))) {
            addClass(this.butPrevMonth, "fd-disabled");
            if (this.monthInc == -1) {
                this.stopTimer();
            };
        } else {
            removeClass(this.butPrevMonth, "fd-disabled");
        };

        if (this.outOfRange(new Date((tdy + 1), +tdm, 1))) {
            addClass(this.butNextYear, "fd-disabled");
            if (this.yearInc == 1) {
                this.stopTimer();
            };
        } else {
            removeClass(this.butNextYear, "fd-disabled");
        };

        if (this.outOfRange(new Date(tdy, +tdm + 1, 1))) {
            addClass(this.butNextMonth, "fd-disabled");
            if (this.monthInc == 1) {
                this.stopTimer();
            };
        } else {
            removeClass(this.butNextMonth, "fd-disabled");
        };
    };
    var localeDefaults = {
        fullMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthAbbrs: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        fullDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        dayAbbrs: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        titles: ["Previous month", "Next month", "Previous year", "Next year", "Today", "Show Calendar", "wk", "Week [[%0%]] of [[%1%]]", "Week", "Select a date", "Click \u0026 Drag to move", "Display \u201C[[%0%]]\u201D first", "Go to Today\u2019s date", "Disabled date :", "Show calendar for [[%0%]]"],
        rtl: false,
        firstDayOfWeek: 0,
        imported: false
    };
    var joinNodeLists = function() {
        if (!arguments.length) {
            return [];
        };
        var nodeList = [];
        for (var i = 0; i < arguments.length; i++) {
            for (var j = 0, item; item = arguments[i][j]; j++) {
                nodeList[nodeList.length] = item;
            };
        };
        return nodeList;
    };
    var cleanUp = function() {
        var dp, fe;
        for (dp in datePickers) {
            for (fe in datePickers[dp].formElements) {
                if (!document.getElementById(fe)) {
                    datePickers[dp].destroy();
                    datePickers[dp] = null;
                    delete datePickers[dp];
                    break;
                };
            };
        };
    };
    var hideAll = function(exception) {
        var dp;
        for (dp in datePickers) {
            if (!datePickers[dp].created || (exception && exception == datePickers[dp].id)) {
                continue;
            };
            datePickers[dp].hide();
        };
    };
    var hideDatePicker = function(inpID) {
        if (inpID in datePickers) {
            if (!datePickers[inpID].created || datePickers[inpID].staticPos) {
                return;
            };
            datePickers[inpID].hide();
        };
    };
    var showDatePicker = function(inpID, autoFocus) {
        if (!(inpID in datePickers)) {
            return false;
        };

        datePickers[inpID].clickActivated = !! !autoFocus;
        datePickers[inpID].show(autoFocus);
        return true;
    };
    var destroy = function(e) {
        e = e || window.event;

        // Don't remove datepickers if it's a pagehide/pagecache event (webkit et al)
        if (e.persisted) {
            return;
        };

        for (dp in datePickers) {
            datePickers[dp].destroy();
            datePickers[dp] = null;
            delete datePickers[dp];
        };
        datePickers = null;

        removeEvent(window, 'unload', datePickerController.destroy);
    };
    var destroySingleDatePicker = function(id) {
        if (id && (id in datePickers)) {
            datePickers[id].destroy();
            datePickers[id] = null;
            delete datePickers[id];
        };
    };
    var getTitleTranslation = function(num, replacements) {
        replacements = replacements || [];
        if (localeImport.titles.length > num) {
            var txt = localeImport.titles[num];
            if (replacements && replacements.length) {
                for (var i = 0; i < replacements.length; i++) {
                    txt = txt.replace("[[%" + i + "%]]", replacements[i]);
                };
            };
            return txt.replace(/[[%(\d)%]]/g, "");
        };
        return "";
    };
    var getDayTranslation = function(day, abbreviation) {
        var titles = localeImport[abbreviation ? "dayAbbrs" : "fullDays"];
        return titles.length && titles.length > day ? titles[day] : "";
    };
    var getMonthTranslation = function(month, abbreviation) {
        var titles = localeImport[abbreviation ? "monthAbbrs" : "fullMonths"];
        return titles.length && titles.length > month ? titles[month] : "";
    };
    var daysInMonth = function(nMonth, nYear) {
        nMonth = (nMonth + 12) % 12;
        return (((0 == (nYear % 4)) && ((0 != (nYear % 100)) || (0 == (nYear % 400)))) && nMonth == 1) ? 29 : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][nMonth];
    };

    var getWeeksInYear = function(Y) {
        if (Y in weeksInYearCache) {
            return weeksInYearCache[Y];
        };

        var X1 = new Date(Y, 0, 4),
            X2 = new Date(Y, 11, 28);

        X1.setDate(X1.getDate() - (6 + X1.getDay()) % 7);
        X2.setDate(X2.getDate() + (7 - X2.getDay()) % 7);

        weeksInYearCache[Y] = Math.round((X2 - X1) / 604800000);

        return weeksInYearCache[Y];
    };

    var getWeekNumber = function(y, m, d) {
        var d = new Date(y, m, d, 0, 0, 0),
            DoW = d.getDay(),
            ms;

        d.setDate(d.getDate() - (DoW + 6) % 7 + 3);

        ms = d.valueOf();

        d.setMonth(0);
        d.setDate(4);

        return Math.round((ms - d.valueOf()) / (7 * 864e5)) + 1;
    };

    var printFormattedDate = function(date, fmt, useImportedLocale) {
        if (!date || isNaN(date)) {
            return fmt;
        };

        var d = date.getDate(),
            D = date.getDay(),
            m = date.getMonth(),
            y = date.getFullYear(),
            locale = useImportedLocale ? localeImport : localeDefaults,
            fmtParts = String(fmt).split(formatSplitRegExp),
            fmtParts = cbSplit(fmt, formatSplitRegExp),
            fmtNewParts = [],
            flags = {
                "d": pad(d),
                "D": locale.dayAbbrs[D == 0 ? 6 : D - 1],
                "l": locale.fullDays[D == 0 ? 6 : D - 1],
                "j": d,
                "N": D == 0 ? 7 : D,
                "w": D,
                "W": getWeekNumber(y, m, d),
                "M": locale.monthAbbrs[m],
                "F": locale.fullMonths[m],
                "m": pad(m + 1),
                "n": m + 1,
                "t": daysInMonth(m, y),
                "y": String(y).substr(2, 2),
                "Y": y,
                "S": ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
            },
            len = fmtParts.length,
            currFlag, f;


        for (f = 0; f < len; f++) {
            currFlag = fmtParts[f];
            fmtNewParts.push(currFlag in flags ? flags[currFlag] : currFlag);
        };

        return fmtNewParts.join("");
    };
    var parseDateString = function(str, fmt) {
        var d = false,
            m = false,
            y = false,
            dp = fmt.search(dPartsRegExp) != -1 ? 1 : 0,
            mp = fmt.search(mPartsRegExp) != -1 ? 1 : 0,
            yp = fmt.search(yPartsRegExp) != -1 ? 1 : 0,
            now = new Date(),
            parts = cbSplit(fmt, formatSplitRegExp),
            str = "" + str,
            len = parts.length,
            pt, part;


        //console.log("attempting to parse " + fmt + " from string " + str)

        loopLabel: for (pt = 0; pt < len; pt++) {
            part = parts[pt];

            if (part === "") {
                continue loopLabel;
            };

            //console.log(pt + ": parsing " + part + " from string " + str)

            if (str.length == 0) {
                break;
            };

            switch (part) {
                // Dividers - be easy on them all i.e. accept them all when parsing... 
                case "/":
                case ".":
                case " ":
                case "-":
                case ",":
                case ":":
                    str = str.substr(1);
                    break;
                    // DAY 
                case "d": // Day of the month, 2 digits with leading zeros (01 - 31)
                    if (str.search(/^(3[01]|[12][0-9]|0[1-9])/) != -1) {
                        d = str.substr(0, 2);
                        str = str.substr(2);
                        //console.log("d and str: " + d + " " + str)
                        break;
                    } else {
                        return false;
                    };
                case "j": // Day of the month without leading zeros (1 - 31)
                    if (str.search(/^(3[01]|[12][0-9]|[1-9])/) != -1) {
                        d = +str.match(/^(3[01]|[12][0-9]|[1-9])/)[0];
                        str = str.substr(str.match(/^(3[01]|[12][0-9]|[1-9])/)[0].length);
                        break;
                    } else {
                        return false;
                    };
                case "D": // A textual representation of a day, three letters (Mon - Sun)
                case "l": // A full textual representation of the day of the week (Monday - Sunday)
                    // Accept English & imported locales and both modifiers
                    l = localeDefaults.fullDays.concat(localeDefaults.dayAbbrs);
                    if (localeImport.imported) {
                        l = l.concat(localeImport.fullDays).concat(localeImport.dayAbbrs);
                    };

                    for (var i = 0; i < l.length; i++) {
                        if (new RegExp("^" + l[i], "i").test(str)) {
                            str = str.substr(l[i].length);
                            continue loopLabel;
                        };
                    };

                    break;
                case "N": // ISO-8601 numeric representation of the day of the week (added in PHP 5.1.0) 1 (for Monday) through 7 (for Sunday)
                case "w": // Numeric representation of the day of the week 0 (for Sunday) through 6 (for Saturday)
                    if (str.search(part == "N" ? /^([1-7])/ : /^([0-6])/) != -1) {
                        str = str.substr(1);
                    };
                    break;
                case "S": // English ordinal suffix for the day of the month, 2 characters: st, nd, rd or th
                    if (str.search(/^(st|nd|rd|th)/i) != -1) {
                        str = str.substr(2);
                    };
                    break;
                    // WEEK 
                case "W": // ISO-8601 week number of year, weeks starting on Monday (added in PHP 4.1.0): 1 - 53
                    if (str.search(/^([1-9]|[1234[0-9]|5[0-3])/) != -1) {
                        str = str.substr(str.match(/^([1-9]|[1234[0-9]|5[0-3])/)[0].length);
                    };
                    break;
                    // MONTH 
                case "M": // A short textual representation of a month, three letters
                case "F": // A full textual representation of a month, such as January or March
                    // Accept English & imported locales and both modifiers
                    l = localeDefaults.fullMonths.concat(localeDefaults.monthAbbrs);
                    if (localeImport.imported) {
                        l = l.concat(localeImport.fullMonths).concat(localeImport.monthAbbrs);
                    };
                    for (var i = 0; i < l.length; i++) {
                        if (str.search(new RegExp("^" + l[i], "i")) != -1) {
                            str = str.substr(l[i].length);
                            m = ((i + 12) % 12) + 1;
                            continue loopLabel;
                        };
                    };
                    return false;
                case "m": // Numeric representation of a month, with leading zeros
                    l = /^(1[012]|0[1-9])/;
                    if (str.search(l) != -1) {
                        m = +str.substr(0, 2);
                        str = str.substr(2);
                        break;
                    } else {
                        return false;
                    };
                case "n": // Numeric representation of a month, without leading zeros
                    // Accept either when parsing
                    l = /^(1[012]|[1-9])/;
                    if (str.search(l) != -1) {
                        m = +str.match(l)[0];
                        str = str.substr(str.match(l)[0].length);
                        break;
                    } else {
                        return false;
                    };
                case "t": // Number of days in the given month: 28 through 31
                    if (str.search(/2[89]|3[01]/) != -1) {
                        str = str.substr(2);
                        break;
                    } else {
                        return false;
                    };
                    // YEAR

                case "Y": // A full numeric representation of a year, 4 digits
                    if (str.search(/^(\d{4})/) != -1) {
                        y = str.substr(0, 4);
                        str = str.substr(4);
                        break;
                    } else {
                        return false;
                    };


                case "y": // A two digit representation of a year
                    if (str.search(/^(0[0-9]|[1-9][0-9])/) != -1) {
                        y = str.substr(0, 2);
                        y = +y < 50 ? '20' + String(y) : '19' + String(y);
                        str = str.substr(2);
                        break;
                    } else {
                        return false;
                    };

                default:
                    str = str.substr(part.length);
            };
        };

        //console.log("parse end, dmy: " + d + ", " + m + ", " + y)

        if ((dp && d === false) || (mp && m === false) || (yp && y === false)) {
            return false;
        };

        if (dp && mp && yp && +d > daysInMonth(+m - 1, +y)) {
            return false;
        };

        return {
            "d": dp ? +d : false,
            "m": mp ? +m : false,
            "y": yp ? +y : false
        };
    };

    var findLabelForElement = function(element) {
        var label;
        if (element.parentNode && element.parentNode.tagName.toLowerCase() == "label") {
            label = element.parentNode;
        } else {
            var labelList = document.getElementsByTagName('label');
            // loop through label array attempting to match each 'for' attribute to the id of the current element
            for (var lbl = 0; lbl < labelList.length; lbl++) {
                // Internet Explorer requires the htmlFor test
                if ((labelList[lbl]['htmlFor'] && labelList[lbl]['htmlFor'] == element.id) || (labelList[lbl].getAttribute('for') == element.id)) {
                    label = labelList[lbl];
                    break;
                };
            };
        };

        if (label && !label.id && element.id) {
            label.id = element.id + "_label";
        };

        return label;
    };
    var selectFdLocale = function() { //Set the language based on locale
        if ((typeof(urlLocal) != "undefined") && (urlLocal !== null) && (urlLocal === "es_MX")) {
            window.fdLocale = {
                fullMonths: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                monthAbbrs: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                fullDays: ['Domingo', 'Lunes', 'Martes', 'Mi\u00E9rcoles', 'Jueves', 'Viernes', 'S\u00E1bado'],
                dayAbbrs: ['Dom', 'Lun', 'Mar', 'Mi\u00E9', 'Juv', 'Vie', 'S\u00E1b'],
                titles: ["Mes anterior", "Mes pr\u00F3ximo", "A\u00F1o anterior", "A\u00F1o pr\u00F3ximo", "Hoy", "Abrir el calendario", "wk", "Semana [[%0%]] de [[%1%]]", "Semana", "Seleccione una fecha", "Clic \u0026 Arrastre para mover", "mostrar \u201C[[%0%]]\u201D primero", "Ir a Hoy\u2019s fecha", "fecha minusv\u00E1lidos\u003A", "Abrir el calendario para [[%0%]]"]
            };
        } else if ((typeof(locale) != "undefined") && (locale !== null) && (locale === "es_MX")) {
            window.fdLocale = {
                fullMonths: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                monthAbbrs: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                fullDays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'S\u00E1bado'],
                dayAbbrs: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'S\u00E1b'],
                titles: ["Mes anterior", "Mes pr\u00F3ximo", "A\u00F1o anterior", "A\u00F1o pr\u00F3ximo", "Hoy", "Abrir el calendario", "wk", "Semana [[%0%]] de [[%1%]]", "Semana", "Seleccione una fecha", "Clic \u0026 Arrastre para mover", "mostrar \u201C[[%0%]]\u201D primero", "Ir a Hoy\u2019s fecha", "fecha minusv\u00E1lidos\u003A", "Abrir el calendario para [[%0%]]"]
            };
        } else {
            if (typeof(window.fdLocale) === "object") {
                window.fdLocale = null;
            }
        }
    };


    var updateLanguage = function() {
        selectFdLocale();
        if (typeof(window.fdLocale) == "object") {
            localeImport = {
                titles: fdLocale.titles,
                fullMonths: fdLocale.fullMonths,
                monthAbbrs: fdLocale.monthAbbrs,
                fullDays: fdLocale.fullDays,
                dayAbbrs: fdLocale.dayAbbrs,
                firstDayOfWeek: ("firstDayOfWeek" in fdLocale) ? fdLocale.firstDayOfWeek : 0,
                rtl: ("rtl" in fdLocale) ? !! (fdLocale.rtl) : false,
                imported: true
            };
        } else if (!localeImport) {
            localeImport = localeDefaults;
        };
    };
    var loadLanguage = function() {
        updateLanguage();
        for (dp in datePickers) {
            if (!datePickers[dp].created) {
                continue;
            };
            datePickers[dp].updateTable();
        };
    };
    var checkElem = function(elem) {
        return !(!elem || !elem.tagName || !((elem.tagName.toLowerCase() == "input" && (elem.type == "text" || elem.type == "hidden")) || elem.tagName.toLowerCase() == "select"));
    };
    var addDatePicker = function(options) {
        updateLanguage();

        if (!options.formElements) {
            if (debug) {
                throw "No form elements stipulated within initialisation parameters";
            };
            return;
        };

        options.id = (options.id && (options.id in options.formElements)) ? options.id : "";
        options.enabledDates = false;
        options.disabledDates = false;

        var partsFound = {
            d: 0,
            m: 0,
            y: 0
        },
            cursorDate = false,
            myMin = 0,
            myMax = 0,
            fmt,
            opts,
            dtPartStr,
            elemID,
            elem;

        for (elemID in options.formElements) {
            elem = document.getElementById(elemID);

            if (!checkElem(elem)) {
                if (debug) {
                    throw "Element '" + elemID + "' is of the wrong type or does not exist within the DOM";
                };
                return false;
            };

            if (!(options.formElements[elemID].match(formatTestRegExp))) {
                if (debug) {
                    throw "Element '" + elemID + "' has a date format that does not contain either a day (d|j), month (m|F|n) or year (y|Y) part: " + options.formElements[elemID];
                };
                return false;
            };

            if (!options.id) {
                options.id = elemID;
            };

            options.formElements[elemID].defaultVal = elem.tagName == "select" ? elem.selectedIndex || 0 : elem.defaultValue;

            fmt = {
                "value": options.formElements[elemID]
            };

            fmt.d = fmt.value.search(dPartsRegExp) != -1;
            fmt.m = fmt.value.search(mPartsRegExp) != -1;
            fmt.y = fmt.value.search(yPartsRegExp) != -1;

            if (fmt.d) {
                partsFound.d++;
            };
            if (fmt.m) {
                partsFound.m++;
            };
            if (fmt.y) {
                partsFound.y++;
            };

            if (elem.tagName.toLowerCase() == "select") {
                // If we have a selectList, then try to parse the higher and lower limits
                var selOptions = elem.options;

                // Check the yyyymmdd
                if (fmt.d && fmt.m && fmt.y) {
                    cursorDate = false;

                    // Dynamically calculate the available "enabled" dates
                    options.enabledDates = {};
                    options.disabledDates = {};

                    for (i = 0; i < selOptions.length; i++) {
                        dt = parseDateString(selOptions[i].value, fmt.value);

                        if (dt && dt.y && !(dt.m === false) && dt.d) {

                            dtPartStr = dt.y + "" + pad(dt.m) + pad(dt.d);
                            if (!cursorDate) {
                                cursorDate = dtPartStr;
                            };

                            options.enabledDates[dtPartStr] = 1;

                            if (!myMin || +dtPartStr < +myMin) {
                                myMin = dtPartStr;
                            };

                            if (!myMax || +dtPartStr > +myMax) {
                                myMax = dtPartStr;
                            };
                        };
                    };

                    // Automatically set cursor to first available date (if no bespoke cursorDate was set);
                    if (!options.cursorDate && cursorDate) {
                        options.cursorDate = cursorDate;
                    };

                    options.disabledDates[myMin] = myMax;

                } else if (fmt.m && fmt.y) {

                    for (i = 0; i < selOptions.length; i++) {
                        dt = parseDateString(selOptions[i].value, fmt.value);
                        if (dt.y && !(dt.m === false)) {
                            dtPartStr = dt.y + "" + pad(dt.m);

                            if (!myMin || +dtPartStr < +myMin) {
                                myMin = dtPartStr;
                            };

                            if (!myMax || +dtPartStr > +myMax) {
                                myMax = dtPartStr;
                            };
                        };

                    };

                    // Round the min & max values to be used as rangeLow & rangeHigh
                    myMin += "" + "01";
                    myMax += "" + daysInMonth(+myMax.substr(4, 2) - 1, +myMax.substr(0, 4));

                } else if (fmt.y) {
                    for (i = 0; i < selOptions.length; i++) {
                        dt = parseDateString(selOptions[i].value, fmt.value);
                        if (dt.y) {

                            if (!myMin || +dt.y < +myMin) {
                                myMin = dt.y;
                            };

                            if (!myMax || +dt.y > +myMax) {
                                myMax = dt.y;
                            };
                        };
                    };

                    // Round the min & max values to be used as rangeLow & rangeHigh
                    myMin += "" + "0101";
                    myMax += "" + "1231";
                };
            };
        };

        if (!(partsFound.d == 1 && partsFound.m == 1 && partsFound.y == 1)) {
            if (debug) {
                throw "Could not find all of the required date parts within the date format for element: " + elem.id;
            };
            return false;
        };

        if (myMin && (!options.rangeLow || (+options.rangeLow < +myMin))) {
            options.rangeLow = myMin;
        };
        if (myMax && (!options.rangeHigh || (+options.rangeHigh > +myMin))) {
            options.rangeHigh = myMax;
        };

        opts = {
            formElements: options.formElements,
            // Form element id
            id: options.id,
            // Non popup datepicker required
            staticPos: !! (options.staticPos),
            // Position static datepicker or popup datepicker's button
            positioned: options.positioned && document.getElementById(options.positioned) ? options.positioned : "",
            // Ranges stipulated in YYYYMMDD format
            rangeLow: options.rangeLow && String(options.rangeLow).search(rangeRegExp) != -1 ? options.rangeLow : "",
            rangeHigh: options.rangeHigh && String(options.rangeHigh).search(rangeRegExp) != -1 ? options.rangeHigh : "",
            // Status bar format
            statusFormat: options.statusFormat || statusFormat,
            // No fade in/out effect
            noFadeEffect: !! (options.staticPos) ? true : !! (options.noFadeEffect),
            // No drag functionality
            dragDisabled: nodrag || !! (options.staticPos) ? true : !! (options.dragDisabled),
            // Bespoke tabindex for this datePicker (or its activation button)
            bespokeTabIndex: options.bespokeTabindex && typeof options.bespokeTabindex == 'number' ? parseInt(options.bespokeTabindex, 10) : 0,
            // Bespoke titles
            bespokeTitles: options.bespokeTitles || (bespokeTitles || {}),
            // Final opacity
            finalOpacity: options.finalOpacity && typeof options.finalOpacity == 'number' && (options.finalOpacity > 20 && options.finalOpacity <= 100) ? parseInt(+options.finalOpacity, 10) : ( !! (options.staticPos) ? 100 : finalOpacity),
            // Do we hide the form elements on datepicker creation
            hideInput: !! (options.hideInput),
            // Do we hide the "today" button
            noToday: !! (options.noTodayButton),
            // Do we show week numbers
            showWeeks: !! (options.showWeeks),
            // Do we fill the entire grid with dates
            fillGrid: !! (options.fillGrid),
            // Do we constrain selection of dates outside the current month
            constrainSelection: "constrainSelection" in options ? !! (options.constrainSelection) : true,
            // The date to set the initial cursor to
            cursorDate: options.cursorDate && String(options.cursorDate).search(rangeRegExp) != -1 ? options.cursorDate : "",
            // Locate label to set the ARIA labelled-by property
            labelledBy: findLabelForElement(elem),
            // Have we been passed a describedBy to set the ARIA decribed-by property...
            describedBy: (options.describedBy && document.getElementById(options.describedBy)) ? options.describedBy : describedBy && document.getElementById(describedBy) ? describedBy : "",
            // Callback functions
            callbacks: options.callbackFunctions ? options.callbackFunctions : {},
            // Days of the week to highlight (normally the weekend)
            highlightDays: options.highlightDays && options.highlightDays.length && options.highlightDays.length == 7 ? options.highlightDays : [0, 0, 0, 0, 0, 1, 1],
            // Days of the week to disable
            disabledDays: options.disabledDays && options.disabledDays.length && options.disabledDays.length == 7 ? options.disabledDays : [0, 0, 0, 0, 0, 0, 0],
            // A bespoke class to give the datepicker
            bespokeClass: options.bespokeClass ? " " + options.bespokeClass : "",
            labelText: options.labelText ? options.labelText : null
        };

        datePickers[options.id] = new datePicker(opts);

        if ("disabledDates" in options && !(options.disabledDates === false)) {
            datePickers[options.id].setDisabledDates(options.disabledDates)
        };

        if ("enabledDates" in options && !(options.enabledDates === false)) {
            datePickers[options.id].setEnabledDates(options.enabledDates)
        };

        datePickers[options.id].callback("create", datePickers[options.id].createCbArgObj());
    };

    // Used by the button to dictate whether to open or close the datePicker
    var isVisible = function(id) {
        return (!id || !(id in datePickers)) ? false : datePickers[id].visible;
    };

    var updateStatic = function() {
        var dp;
        for (dp in datePickers) {
            if (datePickers.hasOwnProperty(dp)) {
                datePickers[dp].changeHandler();
            };
        };
    };

    addEvent(window, 'unload', destroy);
    addEvent(window, "load", function() {
        setTimeout(updateStatic, 0);
    });

    // Add oldie class if needed for IE < 9
    /*@cc_on
    @if (@_jscript_version < 5.8)
    addClass(document.documentElement, "oldie-mhtml");
    @end
    @if (@_jscript_version < 9)
    addClass(document.documentElement, "oldie");
    @end
    @*/

    return {
        // General event functions...
        addEvent: function(obj, type, fn) {
            return addEvent(obj, type, fn);
        },
        removeEvent: function(obj, type, fn) {
            return removeEvent(obj, type, fn);
        },
        stopEvent: function(e) {
            return stopEvent(e);
        },
        // Show a single popup datepicker
        show: function(inpID) {
            return showDatePicker(inpID, false);
        },
        // Hide a popup datepicker
        hide: function(inpID) {
            return hideDatePicker(inpID);
        },
        // Create a new datepicker
        createDatePicker: function(options) {
            addDatePicker(options);
        },
        // Destroy a datepicker (remove events and DOM nodes)
        destroyDatePicker: function(inpID) {
            destroySingleDatePicker(inpID);
        },
        // Check datePicker form elements exist, if not, destroy the datepicker
        cleanUp: function() {
            cleanUp();
        },
        // Pretty print a date object according to the format passed in
        printFormattedDate: function(dt, fmt, useImportedLocale) {
            return printFormattedDate(dt, fmt, useImportedLocale);
        },
        // Update the internal date using the form element value
        setDateFromInput: function(inpID) {
            if (!inpID || !(inpID in datePickers)) return false;
            datePickers[inpID].setDateFromInput();
        },
        // Set low and high date ranges
        setRangeLow: function(inpID, yyyymmdd) {
            if (!inpID || !(inpID in datePickers)) {
                return false;
            };
            datePickers[inpID].setRangeLow(dateToYYYYMMDD(yyyymmdd));
        },
        setRangeHigh: function(inpID, yyyymmdd) {
            if (!inpID || !(inpID in datePickers)) {
                return false;
            };
            datePickers[inpID].setRangeHigh(dateToYYYYMMDD(yyyymmdd));
        },
        // Set bespoke titles for a datepicker instance
        setBespokeTitles: function(inpID, titles) {
            if (!inpID || !(inpID in datePickers)) {
                return false;
            };
            datePickers[inpID].setBespokeTitles(titles);
        },
        // Add bespoke titles for a datepicker instance
        addBespokeTitles: function(inpID, titles) {
            if (!inpID || !(inpID in datePickers)) {
                return false;
            };
            datePickers[inpID].addBespokeTitles(titles);
        },
        // Attempt to parse a valid date from a date string using the passed in format
        parseDateString: function(str, format) {
            return parseDateString(str, format);
        },
        // Change global configuration parameters
        setGlobalOptions: function(json) {
            affectJSON(json);
        },
        // Forces the datepickers "selected" date
        setSelectedDate: function(inpID, yyyymmdd) {
            if (!inpID || !(inpID in datePickers)) {
                return false;
            };
            datePickers[inpID].setSelectedDate(dateToYYYYMMDD(yyyymmdd));
        },
        // Is the date valid for selection i.e. not outside ranges etc
        dateValidForSelection: function(inpID, dt) {
            if (!inpID || !(inpID in datePickers)) return false;
            return datePickers[inpID].canDateBeSelected(dt);
        },
        // Add disabled and enabled dates
        addDisabledDates: function(inpID, dts) {
            if (!inpID || !(inpID in datePickers)) return false;
            datePickers[inpID].addDisabledDates(dts);
        },
        setDisabledDates: function(inpID, dts) {
            if (!inpID || !(inpID in datePickers)) return false;
            datePickers[inpID].setDisabledDates(dts);
        },
        addEnabledDates: function(inpID, dts) {
            if (!inpID || !(inpID in datePickers)) return false;
            datePickers[inpID].addEnabledDates(dts);
        },
        setEnabledDates: function(inpID, dts) {
            if (!inpID || !(inpID in datePickers)) return false;
            datePickers[inpID].setEnabledDates(dts);
        },
        // Disable and enable the datepicker
        disable: function(inpID) {
            if (!inpID || !(inpID in datePickers)) return false;
            datePickers[inpID].disableDatePicker();
        },
        enable: function(inpID) {
            if (!inpID || !(inpID in datePickers)) return false;
            datePickers[inpID].enableDatePicker();
        },
        // Set the cursor date
        setCursorDate: function(inpID, yyyymmdd) {
            if (!inpID || !(inpID in datePickers)) return false;
            datePickers[inpID].setCursorDate(dateToYYYYMMDD(yyyymmdd));
        },
        // Whats the currently selected date
        getSelectedDate: function(inpID) {
            return (!inpID || !(inpID in datePickers)) ? false : datePickers[inpID].returnSelectedDate();
        },
        // Attempt to update the language (causes a redraw of all datepickers on the page)
        loadLanguage: function() {
            loadLanguage();
        },
        // Set the debug level i.e. throw errors or fail silently
        setDebug: function(dbg) {
            debug = !! (dbg);
        },
        // Converts Date Object to a YYYYMMDD formatted String
        dateToYYYYMMDDStr: function(dt) {
            return dateToYYYYMMDD(dt);
        }
    };
})();
})(window, document, jQuery);