_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{PqTA:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changeemail",function(){return n("QVs8")}])},QVs8:function(e,t,n){"use strict";n.r(t);var c=n("t12N"),r=n("1QO0"),o=n("G3km"),a=n("ZXe9"),i=n("mG8T"),s=n("o2DG"),l=n("rS3p"),u=n("PX2k"),m=n.n(u);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){var t=e.t,n=Object(s.useRouter)(),o=Object(r.useState)({}),a=o[0],u=o[1],f=Object(r.useState)({}),b=f[0],d=f[1],j=Object(r.useState)(!1),O=j[0],h=j[1],w=function(e){var t=e.target,n=t.value,c=t.id;u(p(p({},a),{},Object(i.a)({},c,n)))};return Object(c.jsx)("div",{className:"d-flex justify-content-center",children:Object(c.jsxs)("div",{className:"col-12 col-lg-4",children:[Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)("p",{className:"title-change-email",children:t("Change Email")}),Object(c.jsx)("p",{className:"desc-change-email",children:t("Please fill in the following form to change the email")})]}),Object(c.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),h(!0),a.newEmail?a.newEmail.includes("@")?a.confirmEmail?a.confirmEmail.includes("@")?a.newEmail===a.confirmEmail?a.password?m()({title:"".concat(t("Confirm Change Email")),text:"".concat(t("Are you sure you want to change email")," ?"),icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e?(m()("".concat(t("Email Changed Successfully")),"".concat(t("A link to confirm your replacement email has been sent, Please check your email inbox")),"success").then((function(){n.push("/accountdetail")})),d({}),h(!1)):h(!1)})):(d({password:"".concat(t("Password")," ").concat(t("common:cannot be empty"))}),h(!1)):(d({confirmEmail:"".concat(t("The confirmation email must match the new email"))}),h(!1)):(d({confirmEmail:"".concat(t("common:wrong format"))}),h(!1)):(d({confirmEmail:"Email ".concat(t("common:cannot be empty"))}),h(!1)):(d({newEmail:"".concat(t("common:wrong format"))}),h(!1)):(d({newEmail:"Email ".concat(t("common:cannot be empty"))}),h(!1))}(e)},children:[Object(c.jsx)(l.a,{id:"newEmail",type:"text",error:b.newEmail,label:t("New Email"),onChange:w}),Object(c.jsx)(l.a,{id:"confirmEmail",type:"email",error:b.confirmEmail,label:t("Confirm Email"),onChange:w}),Object(c.jsx)(l.a,{id:"password",type:"password",error:b.password,label:t("Password"),onChange:w}),Object(c.jsx)("button",{disabled:O,type:"submit",className:"btn btn-primary py-3 w-100",children:O?"Loading":t("Change")})]})]})})},d=n("xHGu");t.default=Object(d.a)((function(){var e=Object(r.useState)(1),t=(e[0],e[1]),n=Object(o.a)("accountDetail").t,i=[{path:"/accountdetail",name:"".concat(n("Account Detail"))},{path:"/changeemail",name:"".concat(n("Change Email"))}];return Object(c.jsxs)("div",{className:"change-email",children:[Object(c.jsx)("div",{className:"container-fluid px-5",children:Object(c.jsx)(a.a,{path:i})}),Object(c.jsx)("section",{className:"row d-flex justify-content-between container-fluid px-5",children:Object(c.jsx)(b,{setPath:t,t:n})})]})}))},ZXe9:function(e,t,n){"use strict";var c=n("t12N"),r=n("bWzE"),o=n.n(r),a=n("G3km");t.a=function(e){var t=e.path,n=Object(a.a)("common").t;return Object(c.jsx)("div",{className:"breadcrumb",children:Object(c.jsxs)("p",{children:[Object(c.jsx)(o.a,{href:"/",children:Object(c.jsx)("a",{className:"link",children:n("Home")})}),t.map((function(e,n){return Object(c.jsxs)("span",{className:"link-container",children:[Object(c.jsx)("span",{className:"mx-3 link-splitter",children:"/"},n),Object(c.jsx)(o.a,{href:e.path,children:Object(c.jsx)("a",{className:"link ".concat(t.length-1===n?"active":""),children:e.name})})]},n)}))]})})}},"keS/":function(e,t,n){var c,r;!function(o){if(void 0===(r="function"===typeof(c=o)?c.call(t,n,t,e):c)||(e.exports=r),!0,e.exports=o(),!!0){var a=window.Cookies,i=window.Cookies=o();i.noConflict=function(){return window.Cookies=a,i}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var c in n)t[c]=n[c]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(c){function r(){}function o(t,n,o){if("undefined"!==typeof document){"number"===typeof(o=e({path:"/"},r.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(l){}n=c.write?c.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var i="";for(var s in o)o[s]&&(i+="; "+s,!0!==o[s]&&(i+="="+o[s].split(";")[0]));return document.cookie=t+"="+n+i}}function a(e,n){if("undefined"!==typeof document){for(var r={},o=document.cookie?document.cookie.split("; "):[],a=0;a<o.length;a++){var i=o[a].split("="),s=i.slice(1).join("=");n||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var l=t(i[0]);if(s=(c.read||c)(s,l)||t(s),n)try{s=JSON.parse(s)}catch(u){}if(r[l]=s,e===l)break}catch(u){}}return e?r[e]:r}}return r.set=o,r.get=function(e){return a(e,!1)},r.getJSON=function(e){return a(e,!0)},r.remove=function(t,n){o(t,"",e(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}((function(){}))}))},xHGu:function(e,t,n){"use strict";var c=n("mG8T"),r=n("t12N"),o=n("o2DG"),a=n("keS/"),i=n.n(a);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e,t){return function(n){var c=Object(o.useRouter)(),a=(i.a.get("laxmi-auth"),localStorage.getItem("persist:laxmi")),s=JSON.parse(a,(function(e,t){return"birth"==e?new Date(t):t})),u=JSON.parse((null===s||void 0===s?void 0:s.auth)||null,(function(e,t){return"birth"==e?new Date(t):t}));return"auth"===t?null!==u&&void 0!==u&&u.isLogin?(c.replace("/"),null):Object(r.jsx)(e,l({},n)):u.isLogin?Object(r.jsx)(e,l({},n)):(c.replace("/login"),null)}}}},[["PqTA",0,1,2,8]]]);