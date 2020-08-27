(this.webpackJsonptic_tac_toe=this.webpackJsonptic_tac_toe||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),l=n.n(i),c=(n(14),n(2)),o=n(3),u=n(1),s=n(5),h=n(4),m=n(6),v=function(e){var t=function(e){for(var t=[],n=0;n<e;n++){for(var a=[],r=[],i=0;i<e;i++)a.push(i+n*e),r.push(n+i*e);t.push(a,r)}return t.slice()}(e),n=function(e){for(var t=[],n=[],a=Math.pow(e,2),r=0;r<=a-1;r+=e+1)t.push(r);for(var i=a-e;0<i;i-=e-1)n.push(i);return[t,n]}(e);return[].concat(Object(m.a)(t),Object(m.a)(n))},d=function(e){return r.a.createElement("button",{className:"box",onClick:e.onClickListener},e.value)},p=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"renderBox",value:function(e){var t=this;return r.a.createElement(d,{value:this.props.table[e],onClickListener:function(){return t.props.onClickListener(e)},key:e})}},{key:"renderRow",value:function(e){for(var t=[],n=0;n<this.props.gridSize;n++)t.push(this.renderBox(n+e*this.props.gridSize));return t}},{key:"render",value:function(){for(var e=[],t=0;t<this.props.gridSize;t++){var n=this.renderRow(t);e.push(r.a.createElement("div",{className:"row",key:t},n))}return r.a.createElement("div",null,e)}}]),n}(r.a.Component),f=function(){return r.a.createElement("button",{style:{cursor:"pointer"},onClick:function(){return window.location.reload()}},"Play Again")},b=function(e){var t=e.gameStatus,n=e.currentPlayer,a="It's ".concat(n," PlayerTurn");return t.isDraw&&(a="Game Draw \ud83e\udd2b"),t.winner&&(a="player ".concat(t.winner," won the Game")),t.isDraw||t.winner?r.a.createElement("div",null,r.a.createElement("div",null,a),r.a.createElement(f,null)):r.a.createElement("div",null,a)},y=(n(15),function(e){for(var t=Math.pow(e.length,.5),n=v(t),a=function(t){if(n[t].every((function(a){return e[a]&&e[a]===e[n[t][0]]})))return{v:!0}},r=0;r<n.length;r++){var i=a(r);if("object"===typeof i)return i.v}return!1}),O=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={table:new Array(Math.pow(a.props.gridSize,2)).fill(""),currentPlayer:"\ud83d\udfe2",nextPlayer:"\ud83d\udd34",isDraw:!1,winner:null},a.handleOnClick=a.handleOnClick.bind(Object(u.a)(a)),a}return Object(o.a)(n,[{key:"handleOnClick",value:function(e){this.setState((function(t){var n=t.table,a=t.currentPlayer,r=t.nextPlayer,i=t.isGameOver;if(!n[e]&&!i){var l=n.slice();return l[e]=a,{currentPlayer:r,nextPlayer:a,table:l,isDraw:l.every((function(e){return e})),winner:y(l)?a:null,isGameOver:y(l)}}}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,{table:this.state.table,onClickListener:this.handleOnClick,gridSize:this.props.gridSize}),r.a.createElement("br",null),r.a.createElement(b,{currentPlayer:this.state.currentPlayer,gameStatus:{winner:this.state.winner,isDraw:this.state.isDraw}}))}}]),n}(r.a.Component),k=function(e){return r.a.createElement("div",null,r.a.createElement("input",{type:"radio",value:e.value,name:"level"}),e.displayOption)},C=function(e){return r.a.createElement("div",{className:"options",onChange:e.onChange},r.a.createElement(k,{value:"simple",displayOption:"Simple"}),r.a.createElement(k,{value:"medium",displayOption:"Medium"}),r.a.createElement(k,{value:"hard",displayOption:"Hard"}))},E=function(e){return r.a.createElement("button",{className:"optionBtn",onClick:e.onClick},"Play")},w=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={option:null},a.handleOnClick=a.handleOnClick.bind(Object(u.a)(a)),a.onChangeValue=a.onChangeValue.bind(Object(u.a)(a)),a}return Object(o.a)(n,[{key:"handleOnClick",value:function(){this.props.onClick(this.state.option)}},{key:"onChangeValue",value:function(e){this.setState({option:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"gameBoard"},r.a.createElement(C,{onChange:this.onChangeValue}),r.a.createElement(E,{onClick:this.handleOnClick}))}}]),n}(r.a.Component),g=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={level:null},a.handleOnClick=a.handleOnClick.bind(Object(u.a)(a)),a}return Object(o.a)(n,[{key:"handleOnClick",value:function(e){this.setState({level:e})}},{key:"render",value:function(){if(!this.state.level)return r.a.createElement(w,{onClick:this.handleOnClick});return r.a.createElement("div",{className:"gameBoard"},r.a.createElement("h3",null," Your Playing ",this.state.level," Mode "),r.a.createElement(O,{gridSize:{simple:3,medium:4,hard:5}[this.state.level]}))}}]),n}(r.a.Component),j=function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center",margin:"0 auto"}},"Tic Tac Toe"),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.b23b249b.chunk.js.map