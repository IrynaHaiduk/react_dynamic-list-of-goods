(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,o){},13:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),a=o(2),c=o.n(a),s=o(3),i=o(4),u=o(6),l=o(5),d=function(t){var e=t.goods;return r.a.createElement("ul",null,e.map((function(t){return r.a.createElement("li",{key:t.id,style:{color:t.color}},t.name)})))};o(12);function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var h=function(){return f().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}))},m=function(){return f().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},g=function(t){Object(u.a)(o,t);var e=Object(l.a)(o);function o(){var t;Object(s.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={goods:[]},t.showAllGoods=function(){f().then((function(e){t.setState({goods:e})}))},t.showFiveGoods=function(){h().then((function(e){t.setState({goods:e})}))},t.showRedGoods=function(){m().then((function(e){t.setState({goods:e})}))},t}return Object(i.a)(o,[{key:"render",value:function(){var t=this.state.goods;return r.a.createElement("section",{className:"goods"},r.a.createElement("h1",null,"Dynamic list of Goods"),r.a.createElement("button",{type:"button",onClick:this.showAllGoods},"Load All goods"),r.a.createElement("button",{type:"button",onClick:this.showFiveGoods},"Load 5 first goods"),r.a.createElement("button",{type:"button",onClick:this.showRedGoods},"Load red goods"),t.length>0&&r.a.createElement(d,{goods:t}))}}]),o}(r.a.Component);c.a.render(r.a.createElement(g,null),document.getElementById("root"))},7:function(t,e,o){t.exports=o(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.cea1462d.chunk.js.map