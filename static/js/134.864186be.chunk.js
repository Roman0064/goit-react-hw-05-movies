"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{901:function(e,t,n){n.d(t,{i:function(){return s}});var r=n(861),a=n(439),c=n(757),u=n.n(c),o=n(791),s=function(){var e=(0,o.useState)(!1),t=(0,a.Z)(e,2),n=t[0],c=t[1],s=(0,o.useState)(null),i=(0,a.Z)(s,2),f=i[0],v=i[1],h=(0,o.useState)(""),p=(0,a.Z)(h,2),k=p[0],l=p[1],x=(0,o.useCallback)(function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,t;case 4:n=e.sent,v(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l(e.t0);case 11:return e.prev=11,c(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{isFetching:n,data:f,error:k,fetchData:x}}},134:function(e,t,n){n.r(t);var r=n(439),a=n(791),c=n(87),u=n(901),o=n(390),s=n(627),i=n(184);t.default=function(){var e=(0,c.lr)(),t=(0,r.Z)(e,2),n=t[0],f=t[1],v=(0,u.i)(),h=v.isFetching,p=v.data,k=v.error,l=v.fetchData,x=n.get("query");(0,a.useEffect)((function(){x&&l(o.y.fetchMovieBySearch(x))}),[x,l]);var d=null===p||void 0===p?void 0:p.results;return(0,i.jsxs)("div",{children:[(0,i.jsx)(s.wD,{onSubmit:function(e){f({query:e})}}),(0,i.jsx)(s.sI,{error:k,isFetching:h,movies:d})]})}},390:function(e,t,n){n.d(t,{y:function(){return s}});var r=n(861),a=n(757),c=n.n(a),u="https://api.themoviedb.org/3",o="95b1302bfbaa67a4b0727b46a7f8151e",s={fetchMovies:function(){return(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/trending/all/day?api_key=").concat(o));case 2:if(!(t=e.sent).ok){e.next=9;break}return e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:throw Error;case 10:case"end":return e.stop()}}),e)})))()},fetchMovieById:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:if(!(n=t.sent).ok){t.next=9;break}return t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 9:throw Error;case 10:case"end":return t.stop()}}),t)})))()},fetchMovieBySearch:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:if(!(n=t.sent).ok){t.next=9;break}return t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 9:throw Error;case 10:case"end":return t.stop()}}),t)})))()},fetchMovieCast:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:if(!(n=t.sent).ok){t.next=9;break}return t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 9:throw Error;case 10:case"end":return t.stop()}}),t)})))()},fetchMovieReviews:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:if(!(n=t.sent).ok){t.next=9;break}return t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 9:throw Error;case 10:case"end":return t.stop()}}),t)})))()}}},861:function(e,t,n){function r(e,t,n,r,a,c,u){try{var o=e[c](u),s=o.value}catch(i){return void n(i)}o.done?t(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var u=e.apply(t,n);function o(e){r(u,a,c,o,s,"next",e)}function s(e){r(u,a,c,o,s,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=134.864186be.chunk.js.map