(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(11),o=n.n(r),i=(n(19),n(12)),l=n(6),b=n(2),u=n(3),h=n(5),j=n(4),d=(n(20),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(){e.props.onIncrement(e.props.habit)},e.handleDecrement=function(){e.props.onDecrement(e.props.habit)},e.handleDelete=function(){e.props.onDelete(e.props.habit)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.habit,t=e.name,n=e.count;return console.log("habit:".concat(t)),Object(a.jsxs)("li",{className:"habit",children:[Object(a.jsx)("span",{className:"habit-name",children:t}),Object(a.jsx)("span",{className:"habit-count",children:n}),Object(a.jsx)("button",{className:"habit-button habit-increase",onClick:this.handleIncrement,children:Object(a.jsx)("i",{className:"fas fa-plus-square"})}),Object(a.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement,children:Object(a.jsx)("i",{className:"fas fa-minus-square"})}),Object(a.jsx)("button",{className:"habit-button habit-delete",onClick:this.handleDelete,children:Object(a.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(c.PureComponent)),p=Object(c.memo)((function(e){var t=s.a.createRef(),n=s.a.createRef();return Object(a.jsxs)("form",{ref:t,className:"add-form",onSubmit:function(a){a.preventDefault();var c=n.current.value;c&&e.onAdd(c),t.current.reset()},children:[Object(a.jsx)("input",{ref:n,type:"text",className:"add-input",placeholder:"Habit"}),Object(a.jsx)("button",{className:"add-button",children:"Add"})]})})),m=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(t){e.props.onIncrement(t)},e.handleDecrement=function(t){e.props.onDecrement(t)},e.handleDelete=function(t){e.props.onDelete(t)},e.handleAdd=function(t){e.props.onAdd(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return console.log("habits"),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p,{onAdd:this.handleAdd}),Object(a.jsx)("ul",{children:this.props.habits.map((function(t){return Object(a.jsx)(d,{habit:t,onIncrement:e.handleIncrement,onDecrement:e.handleDecrement,onDelete:e.handleDelete},t.id)}))}),Object(a.jsx)("button",{className:"habits-reset",onClick:this.props.onReset,children:"Reset All"})]})}}]),n}(c.Component),f=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return console.log("navBar"),Object(a.jsxs)("header",{className:"navbar",children:[Object(a.jsx)("i",{className:"navbar-logo fas fa-leaf"}),Object(a.jsx)("span",{children:"Habit Tracker"}),Object(a.jsx)("span",{className:"navbar-count",children:this.props.totalCount})]})}}]),n}(c.PureComponent),O=(c.Component,n(21),n(13)),x=function(e){var t=Object(c.useState)(0),n=Object(O.a)(t,2),s=n[0],r=n[1],o=Object(c.useRef)(),i=Object(c.useCallback)((function(){r(s+1)}));return Object(c.useEffect)((function(){console.log("mounted & update!: ".concat(s))}),[s]),Object(a.jsxs)("li",{className:"habit",children:[Object(a.jsx)("span",{ref:o,className:"habit-name",children:"Reading"}),Object(a.jsx)("span",{className:"habit-count",children:s}),Object(a.jsx)("button",{className:"habit-button habit-increase",onClick:i,children:Object(a.jsx)("i",{className:"fas fa-plus-square"})})]})};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ef573811.chunk.js.map