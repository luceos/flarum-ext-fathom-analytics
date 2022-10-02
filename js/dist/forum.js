/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={648:(t,e,r)=>{var n=r(288).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h={};function d(){}function v(){}function m(){}var y={};l(y,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(j([])));b&&b!==r&&i.call(b,c)&&(y=b);var w=m.prototype=d.prototype=Object.create(y);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return v.prototype=m,l(w,"constructor",m),l(m,"constructor",v),v.displayName=l(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},E(x.prototype),l(x.prototype,u,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new x(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(w),l(w,s,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},288:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},357:(t,e,r)=>{var n=r(648)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{DefaultEvents:()=>t,EventHelpers:()=>e,EventsRepository:()=>j});var t={};r.r(t),r.d(t,{OpenLogInModal:()=>h,OpenSignUpModal:()=>y,ViewTagsPage:()=>x});var e={};r.r(e);const o=flarum.core.compat["common/app"];var i=r.n(o);function a(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c.apply(this,arguments)}var u=r(357),s=r.n(u);const l=flarum.core.compat["forum/components/LogInModal"];var f=r.n(l);const p=flarum.core.compat["common/extend"],h={name:"Log in modal opened",description:"Triggered when the log in modal is opened",id:"log-in-modal-opened",code:function(t){(0,p.extend)(f().prototype,"oninit",(function(){t.track()}))}},d=flarum.core.compat["forum/components/SignUpModal"];var v=r.n(d);const y={name:"Sign up modal opened",description:"Triggered when the sign up modal is opened",id:"sign-up-modal-opened",code:function(t){(0,p.extend)(v().prototype,"oninit",(function(){t.track()}))}},g=flarum.core.compat["common/components/Page"];var b=r.n(g);const w=flarum.core.compat["forum/app"];var E=r.n(w);const x=(O=(S={name:"View tags page",description:"Triggered when a user views the Tags index page.",id:"view-tags-page",flarumRouteName:"tags",requiresExtensions:["flarum-tags"]}).name,_=S.flarumRouteName,{name:O,description:S.description,id:L=S.id,requiresExtensions:S.requiresExtensions,code:function(t){Object.keys(E().routes).includes(_)?(0,p.extend)(b().prototype,"oncreate",(function(){E().current.get("routeName")===_&&t.track()})):console.warn("[Fathom Analytics] The route name passed to event "+L+" ("+_+") is not present in Flarum. Does this route use an extension not provided in the requiresExtensions array?")}});var S,O,L,_,j=function(){function e(){var e=this;this.events={},Object.values(t).forEach((function(t){return e.registerEvent(t)}))}var r=e.prototype;return r.getAllEvents=function(){return Object.values(this.events)},r.registerEvent=function(t){return this.events[t.id]=c({},t,{fathomEventId:"",track:function(){this.fathomEventId&&window.fathom.trackGoal(this.fathomEventId,0)}}),this},r.getEnabledEvents=function(){var t=new Set(this.getEnabledEventIDs());return this.getAllEvents().filter((function(e){return t.has(e.id)}))},r.isEventEnabled=function(t){return this.getEnabledEventIDs().includes(t)},r.getServerEventData=function(){var t=this,e=i().forum.attribute("blomstra-fathom-analytics.enabled_events")||{};return("object"!=typeof e||Array.isArray(e))&&(e={}),e=Object.fromEntries(Object.entries(e).filter((function(e){return e[0]in t.events}))),JSON.parse(JSON.stringify(e))},r.propogateServerEventData=function(){var t=this.getServerEventData();this.getAllEvents().forEach((function(e){var r=t[e.id]||{enabled:!1,eventId:""},n=(r.enabled,r.eventId);e.fathomEventId=n}))},r.saveServerEventData=function(){var t,e=(t=s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().request({method:"POST",url:i().forum.attribute("apiUrl")+"/settings",body:{"blomstra-fathom-analytics.enabled_events":JSON.stringify(e)}});case 2:i().forum.data.attributes["blomstra-fathom-analytics.enabled_events"]=e;case 3:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}(),r.getEnabledEventIDs=function(){return Object.entries(this.getServerEventData()).filter((function(t){return t[1].enabled})).map((function(t){return t[0]}))},e}(),k=window.history.pushState;window.history.pushState=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];k.call.apply(k,[this].concat(e)),document.head.querySelectorAll('link[rel="canonical"]').forEach((function(t){t.remove()})),document.head.querySelectorAll('link[rel="next"], link[rel="prev"]').forEach((function(t){t.remove()}))},i().initializers.add("blomstra/fathom-analytics/common",(function(){window.app.fathomEventsRepository=new j})),E().initializers.add("blomstra/fathom-analytics",(function(){setTimeout((function(){E().fathomEventsRepository.propogateServerEventData(),E().fathomEventsRepository.getEnabledEvents().forEach((function(t){var e;null!=(e=t.requiresExtensions)&&e.some((function(t){return!(t in flarum.extensions)}))?console.debug("[Fathom Analytics] Event "+t.id+" is enabled, but one or more required extensions are not active."):t.code(t)})),m.redraw()}),0)}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map