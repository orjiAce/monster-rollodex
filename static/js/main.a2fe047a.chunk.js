(this["webpackJsonpmonster-rollodex"]=this["webpackJsonpmonster-rollodex"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(13),n(3)),l=n(4),i=n(6),u=n(5),m=n(7),h=(n(14),n(15),n(16),function(e){return r.a.createElement("section",{className:"card-container"},r.a.createElement("img",{alt:"monsters",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=250x250")}),r.a.createElement("h3",null,e.monster.name),r.a.createElement("p",null,e.monster.email))}),d=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"card-list"},"    ",e.monsters!==[]?e.monsters.map((function(e){return r.a.createElement(h,{key:e.id,monster:e})})):r.a.createElement("div",null,"Loading...")))},p=function(e){var t=e.handleChange,n=e.placeholder;return r.a.createElement("div",null,r.a.createElement("input",{type:"search",placeholder:n,onChange:t}))},f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).changeText=function(e){n.setState({searchValue:e.target.value})},n.state={searchValue:"",monsters:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchValue,a=t.filter((function(e){return e.name.toLowerCase().includes(n)}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monster Rollodox"),r.a.createElement(p,{placeholder:"Search monsters",handleChange:this.changeText}),r.a.createElement("p",null,this.state.searchValue),r.a.createElement(d,{monsters:a}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.a2fe047a.chunk.js.map