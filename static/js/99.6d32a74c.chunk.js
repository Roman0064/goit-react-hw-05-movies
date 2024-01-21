"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[99],{901:function(e,n,t){t.d(n,{i:function(){return o}});var r=t(861),a=t(439),s=t(757),c=t.n(s),i=t(791),o=function(){var e=(0,i.useState)(!1),n=(0,a.Z)(e,2),t=n[0],s=n[1],o=(0,i.useState)(null),u=(0,a.Z)(o,2),l=u[0],v=u[1],h=(0,i.useState)(""),f=(0,a.Z)(h,2),d=f[0],p=f[1],_=(0,i.useCallback)(function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,n;case 4:t=e.sent,v(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),p(e.t0);case 11:return e.prev=11,s(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(n){return e.apply(this,arguments)}}(),[]);return{isFetching:t,data:l,error:d,fetchData:_}}},99:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(791),a=t(689),s=t(87),c=t(390),i=t(901),o=t(518),u={page:"MovieDetails_page__+WhzO",button_goback:"MovieDetails_button_goback__DZtzX",img:"MovieDetails_img__WWAoB",vote:"MovieDetails_vote__6YdBu",genre:"MovieDetails_genre__hpnsh",overview_h2:"MovieDetails_overview_h2__Naj3V",overview_p:"MovieDetails_overview_p__Wva6J",overview_h3:"MovieDetails_overview_h3__-sSG4",link:"MovieDetails_link__wv3O1",additional_handlers:"MovieDetails_additional_handlers__ZNY+k"};var l=t.p+"static/media/goback.94cf5566342c71828c47b18e257b36d7.svg",v=t(184),h=(0,r.lazy)((function(){return t.e(527).then(t.bind(t,527))})),f=(0,r.lazy)((function(){return t.e(853).then(t.bind(t,853))})),d=function(){var e,n,t,d=(0,i.i)(),p=d.isFetching,_=d.data,m=d.error,x=d.fetchData,k=_,w=(0,a.TH)(),g=(0,a.s0)(),b=(0,a.UO)().movieId;(0,r.useEffect)((function(){b&&x(c.y.fetchMovieById(b))}),[x,b]);return(0,v.jsxs)("div",{className:u.wrapper,children:[(0,v.jsxs)("button",{onClick:function(){w.state?g(w.state.from):g("/")},className:u.button_goback,children:[" ",(0,v.jsx)("img",{src:l,alt:"go back icon"})," "]}),m&&(0,v.jsx)("p",{children:m.message}),p&&(0,v.jsx)("div",{children:(0,v.jsx)(o.aN,{})}),!!k&&(0,v.jsxs)("div",{className:u.page,children:[(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(k.poster_path),alt:k.original_title,className:u.img}),(0,v.jsxs)("div",{className:u.movie_info,children:[(0,v.jsx)("h1",{children:k.title}),(0,v.jsxs)("p",{children:["Vote Average: ",(0,v.jsx)("span",{className:u.vote,children:k.vote_average})]}),(0,v.jsx)("h2",{className:u.overview_h2,children:"Overview"}),(0,v.jsxs)("p",{className:u.overview_p,children:[" ",k.overview]}),(0,v.jsx)("h3",{className:u.overview_h3,children:"Genres"}),(null===k||void 0===k||null===(e=k.genres)||void 0===e?void 0:e.length)>0?k.genres.map((function(e){var n=e.id,t=e.name;return(0,v.jsx)("span",{className:u.genre,children:t},n)})):"There are no genres available"]})]}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{className:u.additional_handlers,children:[(0,v.jsx)(s.rU,{className:u.link,to:"cast",state:{from:null===(n=w.state)||void 0===n?void 0:n.from},children:(0,v.jsx)("span",{className:u.link_item,children:"Cast"})}),(0,v.jsx)(s.rU,{className:u.link,to:"reviews",state:{from:null===(t=w.state)||void 0===t?void 0:t.from},children:(0,v.jsx)("span",{className:u.link_item,children:"Reviews"})})]}),(0,v.jsx)(r.Suspense,{fallback:(0,v.jsx)(o.aN,{}),children:(0,v.jsxs)(a.Z5,{children:[(0,v.jsx)(a.AW,{path:"cast",element:(0,v.jsx)(h,{})}),(0,v.jsx)(a.AW,{path:"reviews",element:(0,v.jsx)(f,{})})]})})]})]})}},390:function(e,n,t){t.d(n,{y:function(){return o}});var r=t(861),a=t(757),s=t.n(a),c="https://api.themoviedb.org/3",i="95b1302bfbaa67a4b0727b46a7f8151e",o={fetchMovies:function(){return(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/trending/all/day?api_key=").concat(i));case 2:if(!(n=e.sent).ok){e.next=9;break}return e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:throw Error;case 10:case"end":return e.stop()}}),e)})))()},fetchMovieById:function(e){return(0,r.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:if(!(t=n.sent).ok){n.next=9;break}return n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:throw Error;case 10:case"end":return n.stop()}}),n)})))()},fetchMovieBySearch:function(e){return(0,r.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:if(!(t=n.sent).ok){n.next=9;break}return n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:throw Error;case 10:case"end":return n.stop()}}),n)})))()},fetchMovieCast:function(e){return(0,r.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:if(!(t=n.sent).ok){n.next=9;break}return n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:throw Error;case 10:case"end":return n.stop()}}),n)})))()},fetchMovieReviews:function(e){return(0,r.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:if(!(t=n.sent).ok){n.next=9;break}return n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:throw Error;case 10:case"end":return n.stop()}}),n)})))()}}},861:function(e,n,t){function r(e,n,t,r,a,s,c){try{var i=e[s](c),o=i.value}catch(u){return void t(u)}i.done?n(o):Promise.resolve(o).then(r,a)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(a,s){var c=e.apply(n,t);function i(e){r(c,a,s,i,o,"next",e)}function o(e){r(c,a,s,i,o,"throw",e)}i(void 0)}))}}t.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=99.6d32a74c.chunk.js.map