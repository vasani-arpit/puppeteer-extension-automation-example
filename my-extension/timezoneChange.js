!function(){return function t(e,n,r){function o(a,u){if(!n[a]){if(!e[a]){var c="function"==typeof require&&require;if(!u&&c)return c(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var f=n[a]={exports:{}};e[a][0].call(f.exports,function(t){return o(e[a][1][t]||t)},f,f.exports,t,e,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}}()({1:[function(t,e,n){"use strict";String.prototype.padStart||(String.prototype.padStart=function(t,e){return t>>=0,e=String(void 0!==e?e:" "),this.length>t?String(this):((t-=this.length)>e.length&&(e+=e.repeat(t/e.length)),e.slice(0,t)+String(this))})},{}],2:[function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){var n,o=Object.prototype,i=o.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag",f="object"===(void 0===e?"undefined":r(e)),s=t.regeneratorRuntime;if(s)f&&(e.exports=s);else{(s=t.regeneratorRuntime=f?e.exports:{}).wrap=S;var h="suspendedStart",p="suspendedYield",d="executing",g="completed",y={},m={};m[u]=function(){return this};var v=Object.getPrototypeOf,b=v&&v(v(G([])));b&&b!==o&&i.call(b,u)&&(m=b);var w=E.prototype=x.prototype=Object.create(m);M.prototype=w.constructor=E,E.constructor=M,E[l]=M.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===M||"GeneratorFunction"===(e.displayName||e.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(w),t},s.awrap=function(t){return{__await:t}},L(O.prototype),O.prototype[c]=function(){return this},s.AsyncIterator=O,s.async=function(t,e,n,r){var o=new O(S(t,e,n,r));return s.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},L(w),w[l]="Generator",w[u]=function(){return this},w.toString=function(){return"[object Generator]"},s.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},s.values=G,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:G(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),y}}}function S(t,e,n,r){var o=e&&e.prototype instanceof x?e:x,i=Object.create(o.prototype),a=new P(r||[]);return i._invoke=function(t,e,n){var r=h;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===g){if("throw"===o)throw i;return N()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=T(a,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=D(t,e,n);if("normal"===c.type){if(r=n.done?g:p,c.arg===y)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=g,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function D(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function x(){}function M(){}function E(){}function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){var e;this._invoke=function(n,o){function a(){return new Promise(function(e,a){!function e(n,o,a,u){var c=D(t[n],t,o);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"===(void 0===f?"undefined":r(f))&&i.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,a,u)},function(t){e("throw",t,a,u)}):Promise.resolve(f).then(function(t){l.value=t,a(l)},u)}u(c.arg)}(n,o,e,a)})}return e=e?e.then(a,a):a()}}function T(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,T(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=D(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:n,done:!0}}}(function(){return this?this:"undefined"!=typeof self?self:void 0}()||Function("return this")())},{}],3:[function(t,e,n){"use strict";t("polyfills/regeneratorRuntime"),t("polyfills/String.prototype.padStart");var r,o=function(t){return"undefined"!=typeof browser?browser.runtime.sendMessage(t):new Promise(function(e){chrome.runtime.sendMessage(t,e)})},i=function(t){return String(t).padStart(2,"0")};(r=regeneratorRuntime.mark(function t(){var e,n,r,a,u,c,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o({type:"date",url:location.href});case 2:if(e=t.sent){t.next=5;break}return t.abrupt("return");case 5:if(n=e.original,null!==(r=e.proxy)){t.next=8;break}return t.abrupt("return");case 8:if(a=r-n,u=(r>=0?"+":"-")+i(Math.floor(Math.abs(r)/60))+i(Math.abs(r)%60),c="\n  var bind = Function.bind;\n  var unbind = bind.bind( bind );\n\n  function instantiate( constructor, args ){\n    return new ( unbind( constructor, null ).apply( null, args ) );\n  }\n\n  var modifyDateString = function( original ){\n    var newString = original.split( '(' )[ 0 ].trim();\n\n    return newString.replace( /GMT[\\+\\-][0-9]{4}/, 'GMT"+u+"' )\n  };\n\n  Date = ( function( Date ){\n    if( Date.isModified ) return Date;\n\n    var originalMethods = {};\n    originalMethods.toString = Date.prototype.toString;\n    originalMethods.toGMTString = Date.prototype.toGMTString;\n    originalMethods.toUTCString = Date.prototype.toUTCString;\n    originalMethods.toISOString = Date.prototype.toISOString;\n    originalMethods.toTimeString = Date.prototype.toTimeString;\n    originalMethods.toJSON = Date.prototype.toJSON;\n\n    var ModifiedDate = function() {\n      var date = instantiate( Date, arguments );\n      date = new Date( date.getTime() + "+a+" * 60 * 1000 );\n\n      if( !( this instanceof Date ) ) return modifyDateString( date.toString() );\n      return date;\n    };\n\n    ModifiedDate.prototype = Date.prototype;\n    Object.getOwnPropertyNames( Date )\n      .filter( function( name ){ return !( name in ModifiedDate ); })\n      .forEach( function( name ){\n        Object.defineProperty(\n          ModifiedDate,\n          name,\n          Object.getOwnPropertyDescriptor( Date, name )\n        );\n      });\n\n    Object.defineProperties( Date.prototype, {\n      'getTimezoneOffset': {\n        'configurable': true,\n        'enumerable': false,\n        'writable': true,\n        'value': function(){ return "+-r+"; }\n      },\n      'toISOString': {\n        'configurable': true,\n        'enumerable': false,\n        'writable': true,\n        'value': function(){\n          var date = new Date( this.getTime() - "+a+" * 60 * 1000 );\n          return originalMethods.toISOString.call( date );\n        }\n      },\n      'toString': {\n        'configurable': true,\n        'enumerable': false,\n        'writable': true,\n        'value': function(){\n          var date = new Date( this.getTime() );\n          return modifyDateString( originalMethods.toString.call( date ) );\n        }\n      },\n      'toTimeString': {\n        'configurable': true,\n        'enumerable': false,\n        'writable': true,\n        'value': function(){\n          var date = new Date( this.getTime() );\n          return modifyDateString( originalMethods.toTimeString.call( date ) );\n        }\n      },\n      'toUTCString': {\n        'configurable': true,\n        'enumerable': false,\n        'writable': true,\n        'value': function(){\n          var date = new Date( this.getTime() - "+a+" * 60 * 1000 );\n          return originalMethods.toUTCString.call( date );\n        }\n      }\n    });\n\n    if( Date.prototype.toGMTString ){\n      Object.defineProperty( Date.prototype, 'toGMTString', {\n        'configurable': true,\n        'enumerable': false,\n        'writable': true,\n        'value': function(){\n          var date = new Date( this.getTime() - "+a+" * 60 * 1000 );\n          return originalMethods.toGMTString.call( date );\n        }\n      });\n    }\n\n    ModifiedDate.now = function(){ return Date.now(); };\n\n    Object.defineProperties( ModifiedDate, {\n      'length': {\n        enumerable: false,\n        configurable: true,\n        writable: false,\n        value: 7\n      },\n      'name': {\n        enumerable: false,\n        configurable: true,\n        writable: false,\n        value: 'Date'\n      },\n      'isModified': {\n        enumerable: false,\n        configurable: true,\n        writable: false,\n        value: true\n      }\n    });\n\n    return ModifiedDate;\n  })( Date );\n  ",(l=document.createElement("script")).innerText=c.replace(/\n/gm,""),document.documentElement){t.next=15;break}return t.abrupt("return");case 15:document.documentElement.insertBefore(l,document.documentElement.firstChild);case 16:case"end":return t.stop()}},t,void 0)}),function(){var t=r.apply(this,arguments);return new Promise(function(e,n){return function r(o,i){try{var a=t[o](i),u=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(u).then(function(t){r("next",t)},function(t){r("throw",t)});e(u)}("next")})})()},{"polyfills/String.prototype.padStart":1,"polyfills/regeneratorRuntime":2}]},{},[3]);