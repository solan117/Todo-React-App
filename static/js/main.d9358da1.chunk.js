(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),l=(n(13),n(7)),i=n(1),s=n(2),d=n(4),u=n(3),m=function(e){var t=e.todos,n=e.deleteTodo,a=t.length?t.map((function(e){return o.a.createElement("div",{className:"collection-item",key:e.id},o.a.createElement("span",{onClick:function(){n(e.id)}},e.content))})):o.a.createElement("p",{className:"center"}," You done all jobs ");return o.a.createElement("div",{className:"todos collection"},a)},h=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={content:""},e.handleChange=function(t){e.setState({content:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state),e.setState({content:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("lable",null," Add new todo:"),o.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.content})))}}]),n}(a.Component),p=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={todos:[{id:1,content:"buy some milk"},{id:2,content:"Play Mario"}]},e.deleteTodo=function(t){var n=e.state.todos.filter((function(e){return e.id!==t}));e.setState({todos:n})},e.addTodo=function(t){t.id=Math.random();var n=[].concat(Object(l.a)(e.state.todos),[t]);e.setState({todos:n})},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"todo-app container "},o.a.createElement("h1",{className:"center blue-text"}," Todo's "),o.a.createElement(m,{todos:this.state.todos,deleteTodo:this.deleteTodo}),o.a.createElement(h,{addTodo:this.addTodo}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.d9358da1.chunk.js.map