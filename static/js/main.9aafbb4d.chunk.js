(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),i=(a(13),a(2)),l=a(3),s=a(5),d=a(4),u=(a(14),a(1)),m=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).state={item:"",todoItems:[],tocart:[]},n.onChangeHandler=n.onChangeHandler.bind(Object(u.a)(n)),n.addData=n.addData.bind(Object(u.a)(n)),n.delete=n.delete.bind(Object(u.a)(n)),n.cart=n.cart.bind(Object(u.a)(n)),n.rcart=n.rcart.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"onChangeHandler",value:function(t){var e=t.target.value;this.setState({item:e})}},{key:"addData",value:function(){var t=this.state.item,e=this.state.todoItems;e.push(t),this.setState({todoItems:e,item:""})}},{key:"delete",value:function(t){var e=t.target.id,a=this.state.todoItems;a.splice(e,1),this.setState({todoItems:a})}},{key:"cart",value:function(t){var e=t.target.id,a=this.state.tocart;a.push(e),this.setState({tocart:a})}},{key:"rcart",value:function(t){var e=t.target.id,a=this.state.tocart;a.splice(e,1),this.setState({tocart:a})}},{key:"render",value:function(){var t=this,e=this.state.todoItems.map((function(e,a){return r.a.createElement("li",{key:a},e," ",r.a.createElement("button",{onClick:t.delete,id:a},"del")," ",r.a.createElement("button",{onClick:t.cart,id:e},"add_to_cart"))})),a=this.state.tocart.map((function(e,a){return r.a.createElement("li",{key:a},e,"  ",r.a.createElement("button",{onClick:t.rcart,id:a},"Remove")," ")}));return r.a.createElement("div",null,r.a.createElement("div",{className:"header"}),r.a.createElement("div",{className:"body"},r.a.createElement("ul",null,e),r.a.createElement("h3",null,"My Cart"),r.a.createElement("ul",null,a)),r.a.createElement("div",{className:"footer"},"Add New Item: ",r.a.createElement("input",{type:"text",value:this.state.item,onChange:this.onChangeHandler}),r.a.createElement("button",{onClick:this.addData},"Add")))}}]),a}(n.Component),h=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Shopping Cart"),r.a.createElement(m,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,a){t.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.9aafbb4d.chunk.js.map