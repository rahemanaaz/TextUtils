(this.webpackJsonpmyproject=this.webpackJsonpmyproject||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),r=a.n(s),o=(a(9),a(2)),l=(a(10),a(0));function i(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item"})]}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:" Enable Dark Mode"})]})]})]})})}function d(e){var t=Object(n.useState)("Enter Something in the text box above to Preview is here"),a=Object(o.a)(t,2),c=a[0],s=a[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#132e48"},children:[Object(l.jsxs)("h1",{children:[e.heading," "]}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{className:"form-control",value:c,style:{background:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#132e48"},onChange:function(e){s(e.target.value)},id:"MyText",rows:"10"})}),Object(l.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=c.toUpperCase();s(t),e.showAlert("converted to upper case","success")},children:"Convert To UpperCase"}),Object(l.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=c.toLowerCase();s(t),e.showAlert("converted to lower case","success")},children:"Convert To LowerCase"}),Object(l.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=c.split(/[ ]+/);s(t.join(" ")),e.showAlert("extra space removed","success")},children:" Remove Extra Spaces"})]}),Object(l.jsxs)("div",{className:"container my-2",style:{color:"dark"===e.mode?"white":"#132e48"},children:[Object(l.jsx)("h2",{children:" Your Text Summary"}),Object(l.jsxs)("p",{children:[" ",c.split(" ").length," Words and ",c.length]}),Object(l.jsxs)("p",{children:[" ",.008*c.split(" ").length," Words per minute"]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsxs)("p",{children:[" ",c.length>0?c:"Enter Something in the text box above to Preview is here"]})]})]})}function b(e){return e.alert&&Object(l.jsxs)("div",{class:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(l.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," :",e.alert.msg]})}var h=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),r=Object(o.a)(s,2),h=r[0],j=r[1],m=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),1500)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#132e48",m("Dark mode has been enabled","success"),document.title="TextUtils- Dark Mode- Enable"):(c("light"),document.body.style.backgroundColor="White",m("Light mode has been enabled","success"),document.title="TextUtils- Light Mode- Enable")}}),Object(l.jsx)(b,{alert:h}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsx)(d,{showAlert:m,heading:" Enter The Text to Analyse below",mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.0868ebf9.chunk.js.map