(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),o=c(4),a=c(5),l=c(8),r=c(7),d=c(1),i=c(6),b=c.n(i),u=(c(13),c(14),c(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam"},e.selectedGood=function(t){e.setState({selectedGood:t})},e.clearGood=function(){e.setState({selectedGood:""})},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(u.jsxs)("main",{className:"section container",children:[t?Object(u.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[t," ","is selected",Object(u.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.clearGood})]}):Object(u.jsx)("h1",{className:"title",children:"No goods selected"}),Object(u.jsx)("table",{className:"table",children:Object(u.jsx)("tbody",{children:j.map((function(c){var s=t===c;return Object(u.jsxs)("tr",{"data-cy":"Good",className:b()({"has-background-success-light":s}),children:[t===c?Object(u.jsx)("td",{children:Object(u.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.clearGood,children:"-"})}):Object(u.jsx)("td",{children:Object(u.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){e.selectedGood(c)},children:"+"})}),Object(u.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(d.Component);n.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.29563394.chunk.js.map