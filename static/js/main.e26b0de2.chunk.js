(this["webpackJsonpre-joy"]=this["webpackJsonpre-joy"]||[]).push([[0],{14:function(e,a,t){},30:function(e,a,t){e.exports=t.p+"static/media/star_icon.45dd5470.png"},39:function(e,a,t){e.exports=t(87)},44:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(33),s=t.n(c),l=(t(44),t(12)),i=t(1),m=t(9),o=t.n(m),d=t(16),v=t(34),u=t(35),E=t(38),h=t(37),p=t(17),g=t.n(p);t(14),t(63);var N=function(e){e.id;var a=e.title,n=e.poster,c=(e.summary,e.genres,e.date,e.rating);return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{className:"poster",src:"https://image.tmdb.org/t/p/w500"+n,alt:a,title:a}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie_title"},a.slice(0,15),a.length>15?"...":""),r.a.createElement("div",{className:"movie_rating"},r.a.createElement("img",{className:"star_icon",src:t(30),alt:"rating"}),r.a.createElement("h5",{className:"rating_text"},c))))};t(64);var _=function(e){e.id;var a=e.title,n=e.poster,c=(e.summary,e.genres,e.date,e.rating);return r.a.createElement("div",{className:"tvshow"},r.a.createElement("img",{className:"poster",src:"https://image.tmdb.org/t/p/w500"+n,alt:a,title:a}),r.a.createElement("div",{className:"tvshow_data"},r.a.createElement("h3",{className:"tvshow_title"},a.slice(0,15),a.length>15?"...":""),r.a.createElement("div",{className:"tvshow_rating"},r.a.createElement("img",{className:"star_icon",src:t(30),alt:"rating"}),r.a.createElement("h5",{className:"rating_text"},c))))},f=(t(65),t(66),t(67),t(18)),w=t.n(f),y=function(e){Object(E.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={m_isLoding:!0,t_isLoding:!0,movies:[],tvshows:[]},e.getMovies=Object(d.a)(o.a.mark((function a(){var t,n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=9aa38313510a50c3ae30091b52efcc90&language=ko&page=1\xaeion=KR");case 2:t=a.sent,n=t.data.results,e.setState({movies:n,m_isLoding:!1});case 5:case"end":return a.stop()}}),a)}))),e.getTvshows=Object(d.a)(o.a.mark((function a(){var t,n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=9aa38313510a50c3ae30091b52efcc90&language=ko&page=1");case 2:t=a.sent,n=t.data.results,e.setState({tvshows:n,t_isLoding:!1});case 5:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies(),this.getTvshows()}},{key:"render",value:function(){var e=this.state,a=e.m_isLoding,t=e.t_isLoding,n=e.movies,c=e.tvshows,s={dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:4,autoplay:!1};return r.a.createElement("section",{className:"cont"},a&&t?r.a.createElement("div",{className:"loder"},r.a.createElement("span",{className:"loder_text"},"Lodding...")):r.a.createElement("div",{className:"Home"},r.a.createElement("div",{id:"wrap"},r.a.createElement("header",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header_top"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",null,r.a.createElement("li",{className:"login"},"Login"),r.a.createElement(l.b,{to:{pathname:"/Mypage",state:{}}},r.a.createElement("li",{className:"mypage"},"Mypage"))))),r.a.createElement("div",{className:"header_center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Re-joy"))),r.a.createElement("div",{className:"linker"},r.a.createElement("div",{className:"container"})))),r.a.createElement("nav",null,r.a.createElement("fieldset",{className:"search"},r.a.createElement("div",{className:"container"},r.a.createElement("legend",{className:"ir_su"},"search"),r.a.createElement("form",{className:"search_cont"},r.a.createElement("input",{type:"text",id:"input_search",placeholder:"search",maxLength:"50"}),r.a.createElement("button",null,r.a.createElement("span",{className:"search_button"}))))),r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"menu")))),r.a.createElement("div",{id:"content"},r.a.createElement("div",{className:"recommend"},r.a.createElement("div",{className:"container"},r.a.createElement("section",null,r.a.createElement("div",null,r.a.createElement("h3",{className:"ir_su"},"recommend"),r.a.createElement("div",{className:"movies"},r.a.createElement("h3",{className:"recommend_sort_title"},"\ucd94\ucc9c \uc601\ud654"),r.a.createElement(w.a,s,n.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,title:e.title,date:e.release_date,summary:e.overview,poster:e.poster_path,genres:e.genre_ids,rating:e.vote_average})})))),r.a.createElement("div",{className:"tvshows"},r.a.createElement("h3",{className:"recommend_sort_title"},"\ucd94\ucc9c \ud2f0\ube44\uc1fc"),r.a.createElement(w.a,s,c.map((function(e){return r.a.createElement(_,{key:e.id,id:e.id,title:e.name,date:e.first_air_date,summary:e.overview,poster:e.poster_path,genres:e.genre_ids,rating:e.vote_average})})))))))),r.a.createElement("div",{className:"category"},r.a.createElement("div",{className:"container"},r.a.createElement("section",null,r.a.createElement("h3",null,"\ubd84\ub958"))))),r.a.createElement("footer",null,r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"\ud478\ud130")))))))}}]),t}(r.a.Component);var b=function(){return r.a.createElement("span",null,"this page is for Mypage")};var k=function(){return r.a.createElement("span",null,"this page is for Search")};var x=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{path:"/",exact:!0,component:y}),r.a.createElement(i.a,{path:"/Mypage",component:b}),r.a.createElement(i.a,{path:"/search",component:k}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.e26b0de2.chunk.js.map