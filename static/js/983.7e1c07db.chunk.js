"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{901:function(e,n,t){t.d(n,{i:function(){return s}});var r=t(861),c=t(439),a=t(757),u=t.n(a),o=t(791),s=function(){var e=(0,o.useState)(!1),n=(0,c.Z)(e,2),t=n[0],a=n[1],s=(0,o.useState)(null),i=(0,c.Z)(s,2),f=i[0],v=i[1],p=(0,o.useState)(""),h=(0,c.Z)(p,2),d=h[0],l=h[1],x=(0,o.useCallback)(function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,n;case 4:t=e.sent,v(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l(e.t0);case 11:return e.prev=11,a(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(n){return e.apply(this,arguments)}}(),[]);return{isFetching:t,data:f,error:d,fetchData:x}}},983:function(e,n,t){t.r(n);var r=t(791),c=t(901),a=t(390),u=t(786),o=t(184);n.default=function(){var e=(0,c.i)(),n=e.isFetching,t=e.data,s=e.error,i=e.fetchData;(0,r.useEffect)((function(){i(a.y.fetchMovies())}),[i]);var f=null===t||void 0===t?void 0:t.results;return(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Trending today"}),(0,o.jsx)(u.sI,{error:s,isFetching:n,movies:f})]})}},390:function(e,n,t){t.d(n,{y:function(){return s}});var r=t(861),c=t(757),a=t.n(c),u="https://api.themoviedb.org/3",o="95b1302bfbaa67a4b0727b46a7f8151e",s={fetchMovies:function(){return(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/trending/all/day?api_key=").concat(o));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))()},fetchMovieById:function(e){return(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()},fetchMovieBySearch:function(e){return(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()},fetchMovieCast:function(e){return(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()},fetchMovieReviews:function(e){return(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()}}},861:function(e,n,t){function r(e,n,t,r,c,a,u){try{var o=e[a](u),s=o.value}catch(i){return void t(i)}o.done?n(s):Promise.resolve(s).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,a){var u=e.apply(n,t);function o(e){r(u,c,a,o,s,"next",e)}function s(e){r(u,c,a,o,s,"throw",e)}o(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=983.7e1c07db.chunk.js.map